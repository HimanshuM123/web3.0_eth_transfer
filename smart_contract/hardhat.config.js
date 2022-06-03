//https://eth-ropsten.alchemyapi.io/v2/5TsivJMHOjF-6y-kLoLGN6SS68ryVtz5

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5TsivJMHOjF-6y-kLoLGN6SS68ryVtz5',
      accounts: ['9509209a204c30fb7d6c41d1b688c6d9c8c97905597d1e7591b6e626095adc4e']
    }
  }


}
