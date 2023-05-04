import blockchainConfig, { network } from "@/lib/blockchain/blockchain-config";
import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: blockchainConfig.alchemyApiKey,
  network: network === "goerli" ? Network.ETH_GOERLI : Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy;
