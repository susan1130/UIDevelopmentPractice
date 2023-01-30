//function with return keyword

function f1(a,b){
    return a+b
}

f1(10,30)
f1(100,30)
f1(103,30)

function f2(FirstName,LastName){
    //data = "First name is: " + FirstName+" last name is: "+LastName
    return "First name is: " + FirstName+" last name is: "+LastName
}

console.log(f2("A","B"))

function f3(fName, lName){
    data = "First Name: "+ fName+ " ,last name: "+ lName
    return data
}

console.log(f3("Cookie","Moni"))

var c = 33
var d = 22
console.log(c,d)        // , can sometimes be used in place of +