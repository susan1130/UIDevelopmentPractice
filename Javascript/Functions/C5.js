//passing defult values in functions.

function f1(a = 10, b = 20){
    console.log(a, b)
}

f1()
f1(11,3)
f1(22)
//f1(,55)           // argument expected error

//passing key and value in function

function f2(x,y){
    console.log(x, y)
}

f2(1,4)
f2(x=77, y=44)