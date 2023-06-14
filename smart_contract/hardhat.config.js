// https://eth-sepolia.g.alchemy.com/v2/yKnK5fQkabboGL5DavYEdJMFajLgYs8k

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/yKnK5fQkabboGL5DavYEdJMFajLgYs8k',
      accounts: ['eb5a4355dae70b1190342829a10836bb23b5ac9ac402329fe52e4db9502d9386']
    }
  }
};

// module.exports = {
//   defaultNetwork: "sepolia",
//   networks: {
//     hardhat: {
//     },
//     sepolia: {
//       url: "https://eth-sepolia.g.alchemy.com/v2/yKnK5fQkabboGL5DavYEdJMFajLgYs8k",
//       accounts: ['eb5a4355dae70b1190342829a10836bb23b5ac9ac402329fe52e4db9502d9386']
//     }
//   }
// };