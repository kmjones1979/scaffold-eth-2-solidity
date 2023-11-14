//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./A.sol";

// Contracts inherit other contracts by using the keyword 'is'.
contract B is A {
	// Override A.foo()
	function foo() public pure virtual override returns (string memory) {
		return "B";
	}
}
