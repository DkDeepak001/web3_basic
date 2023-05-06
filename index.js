import { InfuraProvider } from "ethers";

const network = process.env.NETWORK || "homestead";
const provider = new InfuraProvider(network, process.env.INFURA_API_KEY);

const blockNumber = await provider.getBlockNumber();
console.log("Current block number: ", blockNumber);
