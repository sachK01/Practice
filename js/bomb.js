'use strict';

function stringLength(str){

    if(str === "")
        return 0

    
    return stringLength(str.substring(1)) + 1
}

let a = stringLength("Hello")

console.log(a)