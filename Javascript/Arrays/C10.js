//find  and findIndex

let l1 = [10,20,30,40,50,60,70,80,90,100]
console.log(l1)
console.log(l1.find(checkValues))
function checkValues(a){
    return a>=30
}

//findIndex
let l2 = [10,20,30,40,50,60,70,80,90,100]
console.log(l2)
console.log(l2.findIndex(checkValues))
function checkValues(a){
    return a>=30
}