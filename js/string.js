'use strict';

let str = new String("babababababab");

for(let i = 0; i < str.length;i++){
    str = str.replace('a','c')
}

console.log(str)
console.log(typeof str)