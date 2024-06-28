
str = "babababbabab"
i=0
console.log("BEFORE : " + str)

arr = Array.from(str)

while(i < arr.length){
    if(arr[i] === 'a'){
        arr[i] = 'c'
    }
    i++
}
str = arr.join('')
console.log("AFTER : " + str)