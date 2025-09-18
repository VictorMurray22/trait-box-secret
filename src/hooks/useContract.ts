import { useWriteContract, useReadContract } from 'wagmi';
import { useAccount } from 'wagmi';

// Contract ABI for TraitBoxSecret
const TraitBoxSecretABI = [
  {
    "inputs": [
      {"name": "_name", "type": "string"},
      {"name": "traitCount", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "createMysteryBox",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "boxId", "type": "uint256"},
      {"name": "traitId", "type": "bytes"},
      {"name": "rarity", "type": "bytes"},
      {"name": "value", "type": "bytes"},
      {"name": "traitName", "type": "string"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "revealTrait",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "boxId", "type": "uint256"}],
    "name": "openMysteryBox",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "boxId", "type": "uint256"}],
    "name": "getMysteryBoxInfo",
    "outputs": [
      {"name": "name", "type": "string"},
      {"name": "traitCount", "type": "uint8"},
      {"name": "isOpened", "type": "bool"},
      {"name": "owner", "type": "address"},
      {"name": "createdAt", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address (to be updated after deployment)
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000';

export const useTraitBoxContract = () => {
  const { address } = useAccount();
  const { writeContract, isPending, error } = useWriteContract();

  // Create a new mystery box with FHE-encrypted trait count
  const createMysteryBox = async (
    name: string,
    traitCount: string,
    encryptedData: string,
    proof: string
  ) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: TraitBoxSecretABI,
        functionName: 'createMysteryBox',
        args: [name, encryptedData, proof],
        value: BigInt('10000000000000000') // 0.01 ETH
      });
      return hash;
    } catch (err) {
      console.error('Error creating mystery box:', err);
      throw err;
    }
  };

  // Reveal a trait with FHE-encrypted data
  const revealTrait = async (
    boxId: string,
    traitId: string,
    rarity: string,
    value: string,
    traitName: string,
    encryptedData: string,
    proof: string
  ) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: TraitBoxSecretABI,
        functionName: 'revealTrait',
        args: [boxId, traitId, rarity, value, traitName, encryptedData, proof]
      });
      return hash;
    } catch (err) {
      console.error('Error revealing trait:', err);
      throw err;
    }
  };

  // Open a mystery box
  const openMysteryBox = async (boxId: string) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: TraitBoxSecretABI,
        functionName: 'openMysteryBox',
        args: [boxId]
      });
      return hash;
    } catch (err) {
      console.error('Error opening mystery box:', err);
      throw err;
    }
  };

  return {
    createMysteryBox,
    revealTrait,
    openMysteryBox,
    isPending,
    error,
    contractAddress: CONTRACT_ADDRESS
  };
};

export const useMysteryBoxInfo = (boxId: string) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: TraitBoxSecretABI,
    functionName: 'getMysteryBoxInfo',
    args: [boxId]
  });

  return {
    boxInfo: data,
    isLoading,
    error
  };
};
