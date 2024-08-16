// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract q3 {
    mapping(address => string) private greetings;

    function setGreeting(string memory _greeting) public {
        greetings[msg.sender] = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        string memory greeting = greetings[msg.sender];
        
        string memory Initial = "Welcome ";
        return string(abi.encodePacked(Initial, greeting));
    }
}