
a = [0,1,2,3,4,5]
i = 0
j = a.length -1

console.log("BEFORE : " + a)

while(i < j){
    temp = a[i]
    a[i] = a[j]
    a[j] = temp
    i++
    j--
}

console.log("AFTER  : " + a)