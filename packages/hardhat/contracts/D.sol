//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./B.sol";
import "./C.sol";

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
	// D.foo() returns "C"
	// since C is the right most parent contract with function foo()
	function foo() public pure override(B, C) returns (string memory) {
		return super.foo();
	}
}
