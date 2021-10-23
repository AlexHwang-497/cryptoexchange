// *this put's smart contracts on the block chain
// *artifactsare the JS versions of the smart contrats

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
