//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract A {
	function foo() public pure virtual returns (string memory) {
		return "A";
	}
}
