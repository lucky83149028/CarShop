require("@nomiclabs/hardhat-waffle");

const { infuraApiKey, etherscanApiKey, mnemonic } = require('./.secrets.json');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraApiKey}`,
      accounts: {mnemonic: mnemonic}
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraApiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    apiKey: etherscanApiKey
  },
};

