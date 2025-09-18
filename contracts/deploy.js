const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy TraitBoxSecret contract
  const TraitBoxSecret = await ethers.getContractFactory("TraitBoxSecret");
  const traitBoxSecret = await TraitBoxSecret.deploy(deployer.address); // Using deployer as verifier initially

  await traitBoxSecret.deployed();

  console.log("TraitBoxSecret deployed to:", traitBoxSecret.address);
  
  // Set up verifier (can be changed later)
  await traitBoxSecret.setVerifier(deployer.address);
  console.log("Verifier set to:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
