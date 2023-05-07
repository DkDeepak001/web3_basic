import { InfuraProvider, formatEther } from "ethers";

const network = process.env.NETWORK || "homestead";
//creating provider
const provider = new InfuraProvider(network, process.env.INFURA_API_KEY);

//getting current block number
const blockNumber = await provider.getBlockNumber();
console.log("Current block number: ", blockNumber);

//getting randpo, address from blockchatin
const address = "0xb78c885b9284821831fd555762f05c3296344077";
//getting balance of address
const balance = await provider.getBalance(address);

//formatting balance
console.log("Balance: ", formatEther(balance));

//getting transaction count
const transactionCount = await provider.getTransactionCount(address);
console.log("Transaction count: ", transactionCount);
