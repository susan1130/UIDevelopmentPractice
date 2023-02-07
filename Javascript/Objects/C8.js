// closure

function f1(){
    x = 10
    console.log(x)
    function f2(){
        y = 20
        console.log(y)
    }
    return f2
}

f = f1()                        // 10
console.log(typeof(f))          // function
f()                             // 20

// even though f anf f1 are deleted, their values remain