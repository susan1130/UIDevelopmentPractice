// Arrow functions using arguments with template strings


// Normal functions with arguments and template strings
function f1(name){
    console.log(`User name is : ${name}`)
}
f1("System")

// function assigned to a variable with arguments and template strings
let f = function f2(name){
    console.log(`User name is : ${name}`)
}
f("Admin")


//arrow function with arguments and template strings
let f3 = (name) => {console.log(`User name is : ${name}`)}
f3("Analyst")


//Single argument assignment
let f4 = (name) => `User name is : ${name}`
console.log(f4("2345"))


//for multiple arguments assignment
let f5 = (id,name) => {console.log(`User id is: ${id} and name is: ${name}`)}
f5(1001200, "Cookie")
