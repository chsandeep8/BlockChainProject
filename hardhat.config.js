require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const NEXT_PUBLIC_PRIVATE_KEY =
  "6d14c4fe2efab6ebdabfc1d078ea0fdc2f1260da0a50d0524b8c1f12ab394c9b";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    //polygon_amoy: {
    //  url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //  accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    //},
  },
};
