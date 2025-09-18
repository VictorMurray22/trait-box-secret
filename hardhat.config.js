require("@nomicfoundation/hardhat-toolbox");
require("@fhevm/hardhat-fhevm");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990",
      accounts: [process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"],
    },
  },
  fhevm: {
    network: "sepolia",
  },
};
