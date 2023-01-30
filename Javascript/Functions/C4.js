//Types of variables

//global
var a = 33
function f1(){
    console.log(a)
}
console.log(a)
f1()

//local variable
function f2(){
    var b = 11
    var c = 22
    console.log(b,c)
}
f2()
//console.log(b,c)        // throws objest not defined error


