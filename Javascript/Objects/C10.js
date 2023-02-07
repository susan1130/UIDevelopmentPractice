//Object literals adding the properties and updating and deleting the properties 
let firstName = "Johnny"
let lastName = "Quest"
let user = {
    firstName,
    lastName
}
console.log(user);          //{ firtstName: 'Johnny', lastName: 'Quest' }

//add properties
user.contact = 9987654321
console.log(user);          //{ firtstName: 'Johnny', lastName: 'Quest', contact: 9987654321 }

//update properties
user.firstName = "Haji"
console.log(user);          //{ firstName: 'Haji', lastName: 'Quest', contact: 9987654321 } 

//delete properties
delete user.lastName
console.log(user);          //{ firtstName: 'Johnny', contact: 9987654321, firstName: 'Haji' }

console.log("")
let cus = {
    firstName : firstName,
    lastName : lastName
}
console.log(cus)
cus.firstName = "Scarlett"
console.log(cus)