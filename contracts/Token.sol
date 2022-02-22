//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    string public name = "Training Test Token";
    string public symbol = "TTTDMS";
    uint8 public decimals = 18;
    address public owner;
    uint public totalSupply = 10000;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }


}
