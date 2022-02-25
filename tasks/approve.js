const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-web3");

task("approve", "permission to transfer")
    .addParam("to", "spender's tokens")
    .addParam("amount", "transfer's amount")
    .setAction(async function (taskArgs, hre) {
        const token = await hre.ethers.getContractAt("Token", process.env.ADDR_CONTRACT);
        try {
            await token.approve(taskArgs.to, web3.utils.toWei(taskArgs.amount, 'ether'))
            console.log(`you approved ${taskArgs.amount} tokens to ${taskArgs.to}`);
        } catch (e) {
            console.log('error',e)
        }
    });