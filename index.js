import { InfuraProvider, formatEther, ethers, id } from "ethers";

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

//getting block
const block = await provider.getBlock(blockNumber);
console.log("Block: ", block);

//getting cutternt gas price
const gasPrice = await provider.getFeeData();
console.log("Gas price: ", gasPrice);

//bored aoe contact address
const contractAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

//getting emited events
const filter = {
  address: contractAddress,
  topics: [id("Transfer(address,address,uint256)")],
};

const logs = await provider.getLogs(filter);
console.log("Logs: ", logs);

provider.on("block", (blockNumber) => {
  console.log("New block: ", blockNumber);
});
