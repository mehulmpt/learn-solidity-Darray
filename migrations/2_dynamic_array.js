const DynamicArray = artifacts.require("DynamicArray");

module.exports = function(deployer) {
  deployer.deploy(DynamicArray);
};
