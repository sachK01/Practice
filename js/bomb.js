'use strict';

// let emp = {
    
//     empId:101,
//     empName:"Samson",
//     empSal:10000,
//     empProjects:["Aero", "Micro", "Bomb"]
// }

// //Deep Cloning in Javascript
// let empp = JSON.parse(JSON.stringify(emp))
// empp.empProjects[0] = "Hondo"
// console.log(empp)
// console.log(emp)

// let list = [["o", "a", "c"], ["d", "f", "g"],["w","x","z"]]
// console.log(list[0])

// let list = []

// const unique = iterable =>{
    
//     console.log(iterable)

//     for(let i in iterable){
//         if(!list.includes(iterable[i]))
//             list.push(iterable[i])
//     }

//     return list
// }

// let l = unique("aaaabbbcceeeeaba")

// console.log(l)

// -------------2/7/2024-----------------

// let a = [3,1,7,4,9,6]
// console.log(Math.max(...a) - Math.min(...a));

//Remove Duplicates from array
// let arr = [11,55,22,11,33,22,11]
// let arr1 = []

// for(let i in arr){
    
//     if(!arr1.includes(arr[i]))
//         arr1.push(arr[i])
//     else{
//         arr.splice(i,0)
//     }
// }

// arr = arr1
// console.log(arr1);

//Count Occurences of Character in String

/*let str = "ABCBACCCBCBCBC"
let result = {}

for(let i in str){
    let ch = str.charAt(i)
    
    if(!result[ch]){
        result[ch] = 1
    }
    else{
        result[ch] += 1
    }
}

console.log(result);*/

//reverse the given string

// let str = "Hello! I am from India!"
// let arr = str.split(" ")

// str = ""

// for(let i in arr){
//     str = arr[i] + " " + str
// }

// console.log(str);


/*let result = 0
const ab = (num) => {
    
    while(num != 0){
        let rem = num % 10
        num = Number.parseInt(num/10)

        result = result * 10 + rem
    }

    return result
};


let ans = ab(1987)
console.log(ans)*/

//Callback


function multiply(arr, callback){

    let sum = 1

    for(let i in arr){
        sum *= arr[i]
    }

    callback()

    return sum
}

let a = multiply([1,2,3,4,5], ()=>{
    console.log("Hello Boys!");
})

console.log(a);