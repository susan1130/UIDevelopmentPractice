//function calling

function f1(){
    f2()
    console.log("f1 function")
    f2()
}

function f2(){
    console.log("f2 function")
}
f1()


//assigning a variable to a function

var f = function f3(){
    //console.log("f3 function")
    return "f3 function"
}
console.log(f())
console.log(f)          // yields undefined and [Function: f3] if no return type is specified and [Function: f3] otherwise

