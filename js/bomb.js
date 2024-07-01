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

let list = []

const unique = iterable =>{
    
    console.log(iterable)

    for(let i in iterable){
        if(!list.includes(iterable[i]))
            list.push(iterable[i])
    }

    return list
}

let l = unique("aaaabbbcceeeeaba")

console.log(l)