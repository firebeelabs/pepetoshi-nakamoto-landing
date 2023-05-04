export const network = "goerli"; // goerli or mainnet

const config = {
  mainnet: {
    collectionContractAddress: "0xb1fA74FA274B2Ed59ecF3753217A3e96F3D7C536",
    alchemyApiKey: "Z8WIUcb5QxIWRngJEdh0MdUAIOpTbyUg",
    tokenContractAddress: "0x64d5ea3E86ac6E82d15D796d18d7cC33A50EC5a4",
  },
  goerli: {
    collectionContractAddress: "0xb1fA74FA274B2Ed59ecF3753217A3e96F3D7C536",
    alchemyApiKey: "Z8WIUcb5QxIWRngJEdh0MdUAIOpTbyUg",
    tokenContractAddress: "0x64d5ea3E86ac6E82d15D796d18d7cC33A50EC5a4",
  },
};

export default config[network];
