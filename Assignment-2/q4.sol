// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract q4 {
    
    int count = 0;

    function setCount() public {
        count +=1;
    }

    function get() public view  returns (int){
        return count;
    }
}