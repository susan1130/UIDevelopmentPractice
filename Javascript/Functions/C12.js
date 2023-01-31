//Rest Operator


//normal function with argument keyword
function f1(){
    console.log(arguments)
}
f1(22)
f1(44,55,66,88)
console.log(" ")
//using for loop with arguments keyword
function f2(){
    let i
    for(i in arguments){
        console.log(i, arguments[i])
    }
}
f2(11,33,44)
f2(5,6,7,8,9,11,14)
console.log(" ")
//rest operator
function f3(...args){
    console.log(...args)
}
f3(54,35,67)
f3(11,12,13,14,15,16)
