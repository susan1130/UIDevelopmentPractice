// rest operator and spread operator 

//object
let user = {
    name: "Cookie Moni",
    age : 5,
    contact: [9876543211,2234567899]
}
console.log(user)

//rest operator using object
let {name, age, ...r} = user
console.log(user.name)
console.log(user.age)
console.log(r)

//spread 
let newUser = {...user}
console.log(newUser)