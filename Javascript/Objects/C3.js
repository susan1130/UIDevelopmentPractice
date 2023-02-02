//adding properties and methods to an object

let ob = {}
console.log(ob)             // {}

ob.firstName = "Jane"
ob.lastName = "Doe"
console.log(ob)             // { firstName: 'Jane', lastName: 'Doe' }

ob.company = function(){console.log("Amazon")}
console.log(ob)             // { firstName: 'Jane', lastName: 'Doe', company: [Function (anonymous)] }
ob.company()                // Amazon