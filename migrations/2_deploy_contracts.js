
// *this will fetch the contract we just created and put it on the blockchain
// *this is the equivalent of creating a new table in like a sql or MongoDb

const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
    // *Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

//   * Deploy EthSwap
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed()

//   * transfer all tokens to the EthSwap (1 mill)
await token.transfer(ethSwap.address,'1000000000000000000000000')

};
