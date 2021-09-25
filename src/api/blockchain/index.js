import Web3 from "web3";

const getWeb3Provider = (chain) => {
  let providerUrl;
  switch (chain) {
    case "matic":
      providerUrl =
        "https://speedy-nodes-nyc.moralis.io/20c1a5bd7bea1763e0ef7811/polygon/mainnet";
      break;

    case "Eth":
      providerUrl =
        "https://speedy-nodes-nyc.moralis.io/20c1a5bd7bea1763e0ef7811/eth/mainnet";
      break;

    case "bsc":
      providerUrl =
        "https://speedy-nodes-nyc.moralis.io/20c1a5bd7bea1763e0ef7811/bsc/mainnet";
      break;
    case "avalanche":
      providerUrl =
        "https://speedy-nodes-nyc.moralis.io/20c1a5bd7bea1763e0ef7811/avalanche/mainnet";
      break;

    default:
      break;
  }
  const provider = new Web3.providers.HttpProvider(providerUrl);

  return new Web3(provider);
};

/**
 * @name getLatestBlocksByChain
 * @description Return stats of the block
 * @param {string} chain chain to get tha latest blocks from
 *  @param {number} limit how many blocks to be returned
 * @returns {Array} with latest blocks
 */
export const getLatestBlocksByChain = async (chain = "Eth", limit = 5) => {
  let counter = 0;
  const latestBlocks = [];
  let latestBlockHash = "latest";
  while (counter < limit) {
    let block = await getTransactionBlockStats(latestBlockHash, chain);
    latestBlockHash = block.parentHash;
    latestBlocks.push(block);
    counter++;
  }

  return latestBlocks;
};

/**
 * @name getTransactionBlockStats
 * @description Return stats of the block
 * @param {string} blockHash block address to generate status
 * @param {string} chain block address to generate status
 * @returns {Object} with block stats
 */
const getTransactionBlockStats = async (
  blockHash = "latest",
  chain = "Eth",
) => {
  const web3 = getWeb3Provider(chain);
  const gasPrice = await web3.eth.getGasPrice(); //average gas price
  const currentBlock = await web3.eth.getBlock(blockHash);
  let result = null;
  if (currentBlock.number !== null) {
    //only when block is mined not pending
    const previousBlock = await web3.eth.getBlock(currentBlock.parentHash);
    if (previousBlock.number !== null) {
      const timeTaken = currentBlock.timestamp - previousBlock.timestamp;
      const transactionCount = currentBlock.transactions.length;
      const tps = transactionCount / timeTaken;
      result = {
        number: currentBlock.number,
        transactionCount,
        timeTaken,
        tps,
        gasPrice,
        miner: currentBlock.miner,
        totalDifficulty: currentBlock.totalDifficulty,
        parentHash: currentBlock.parentHash,
      };
    }
  }

  return result;
};
