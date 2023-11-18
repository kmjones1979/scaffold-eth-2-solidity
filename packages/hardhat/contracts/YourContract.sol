//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

/**
 * A smart contract that shows a basic greeting from solidity-by-example
 * @author BuidlGuidl
 */
contract YourContract {

	string public greeting = "Hello Builders!";
	uint256 public totalCounter;

	function setGreeting(string memory _newGreeting) public {
		// Change state variables
		greeting = _newGreeting;
		totalCounter += 1;
	}

}