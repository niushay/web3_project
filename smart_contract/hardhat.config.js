require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/O3YnAJS6e-nh7EfIZCvk0GT849fXIWzQ',
      accounts: ['923603ebe2e848702996f7f5c3488ba7c68a2834a6ed89504335810be2c29c72']
    }
  }
}