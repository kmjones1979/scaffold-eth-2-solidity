//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./B.sol";
import "./C.sol";

contract E is C, B {
	// E.foo() returns "B"
	// since B is the right most parent contract with function foo()
	function foo() public pure override(C, B) returns (string memory) {
		return super.foo();
	}
}
