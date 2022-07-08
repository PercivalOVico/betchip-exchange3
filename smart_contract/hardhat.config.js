require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
   networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts: [process.env.ACCOUNT],
    },
  },
};
