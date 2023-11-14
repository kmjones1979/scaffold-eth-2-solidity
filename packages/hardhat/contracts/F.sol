//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./A.sol";
import "./B.sol";

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
	function foo() public pure override(A, B) returns (string memory) {
		return super.foo();
	}
}
