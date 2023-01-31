//Arrow function with arguments


//normal function with arguments
function f1(name){
    console.log("User name is : "+ name)
}
f1("System")


//function assigned to a variable with arguments
let f = function f2(name){
    console.log("User name is : ", name)
}
f("Admin")


//arrow function with arguments
let f3 = (name) => {console.log("User name is : ", name)}
f3("Analyst")
