const { ethers } = require("ethers");

var url = 'http://18.130.233.246:9454';
var provider = new ethers.providers.JsonRpcProvider(url)
provider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
