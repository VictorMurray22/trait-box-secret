// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract TraitBoxSecret is SepoliaConfig {
    using FHE for *;
    
    struct NFTTrait {
        euint32 traitId;
        euint32 rarity;
        euint32 value;
        string name;
        bool isRevealed;
    }
    
    struct MysteryBox {
        euint32 boxId;
        euint32 ownerId;
        euint32 traitCount;
        bool isOpened;
        string name;
        address owner;
        uint256 createdAt;
    }
    
    struct TraitReveal {
        euint32 revealId;
        euint32 boxId;
        euint32 traitId;
        euint32 rarity;
        euint32 value;
        address revealer;
        uint256 timestamp;
    }
    
    mapping(uint256 => MysteryBox) public mysteryBoxes;
    mapping(uint256 => NFTTrait) public traits;
    mapping(uint256 => TraitReveal) public traitReveals;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userTraitCount;
    
    uint256 public boxCounter;
    uint256 public traitCounter;
    uint256 public revealCounter;
    
    address public owner;
    address public verifier;
    
    event MysteryBoxCreated(uint256 indexed boxId, address indexed owner, string name);
    event TraitRevealed(uint256 indexed revealId, uint256 indexed boxId, uint256 indexed traitId, address revealer);
    event BoxOpened(uint256 indexed boxId, address indexed owner);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createMysteryBox(
        string memory _name,
        externalEuint32 traitCount,
        bytes calldata inputProof
    ) public payable returns (uint256) {
        require(bytes(_name).length > 0, "Box name cannot be empty");
        require(msg.value >= 0.01 ether, "Minimum 0.01 ETH required");
        
        uint256 boxId = boxCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalTraitCount = FHE.fromExternal(traitCount, inputProof);
        
        mysteryBoxes[boxId] = MysteryBox({
            boxId: FHE.asEuint32(0), // Will be set properly later
            ownerId: FHE.asEuint32(0), // Will be set based on user
            traitCount: internalTraitCount,
            isOpened: false,
            name: _name,
            owner: msg.sender,
            createdAt: block.timestamp
        });
        
        emit MysteryBoxCreated(boxId, msg.sender, _name);
        return boxId;
    }
    
    function revealTrait(
        uint256 boxId,
        externalEuint32 traitId,
        externalEuint32 rarity,
        externalEuint32 value,
        string memory traitName,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(mysteryBoxes[boxId].owner == msg.sender, "Only box owner can reveal traits");
        require(!mysteryBoxes[boxId].isOpened, "Box is already opened");
        
        uint256 revealId = revealCounter++;
        
        // Convert external values to internal FHE values
        euint32 internalTraitId = FHE.fromExternal(traitId, inputProof);
        euint32 internalRarity = FHE.fromExternal(rarity, inputProof);
        euint32 internalValue = FHE.fromExternal(value, inputProof);
        
        traitReveals[revealId] = TraitReveal({
            revealId: FHE.asEuint32(0), // Will be set properly later
            boxId: FHE.asEuint32(boxId),
            traitId: internalTraitId,
            rarity: internalRarity,
            value: internalValue,
            revealer: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update user trait count
        userTraitCount[msg.sender] = FHE.add(userTraitCount[msg.sender], FHE.asEuint32(1));
        
        emit TraitRevealed(revealId, boxId, 0, msg.sender); // traitId will be decrypted off-chain
        return revealId;
    }
    
    function openMysteryBox(uint256 boxId) public {
        require(mysteryBoxes[boxId].owner == msg.sender, "Only box owner can open box");
        require(!mysteryBoxes[boxId].isOpened, "Box is already opened");
        
        mysteryBoxes[boxId].isOpened = true;
        
        emit BoxOpened(boxId, msg.sender);
    }
    
    function updateUserReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function getMysteryBoxInfo(uint256 boxId) public view returns (
        string memory name,
        uint8 traitCount,
        bool isOpened,
        address owner,
        uint256 createdAt
    ) {
        MysteryBox storage box = mysteryBoxes[boxId];
        return (
            box.name,
            0, // FHE.decrypt(box.traitCount) - will be decrypted off-chain
            box.isOpened,
            box.owner,
            box.createdAt
        );
    }
    
    function getTraitRevealInfo(uint256 revealId) public view returns (
        uint8 boxId,
        uint8 traitId,
        uint8 rarity,
        uint8 value,
        address revealer,
        uint256 timestamp
    ) {
        TraitReveal storage reveal = traitReveals[revealId];
        return (
            0, // FHE.decrypt(reveal.boxId) - will be decrypted off-chain
            0, // FHE.decrypt(reveal.traitId) - will be decrypted off-chain
            0, // FHE.decrypt(reveal.rarity) - will be decrypted off-chain
            0, // FHE.decrypt(reveal.value) - will be decrypted off-chain
            reveal.revealer,
            reveal.timestamp
        );
    }
    
    function getUserReputation(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[user]) - will be decrypted off-chain
    }
    
    function getUserTraitCount(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userTraitCount[user]) - will be decrypted off-chain
    }
    
    function withdrawFunds() public {
        require(msg.sender == owner, "Only owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }
    
    function setVerifier(address _verifier) public {
        require(msg.sender == owner, "Only owner can set verifier");
        verifier = _verifier;
    }
}
