// Nested Objects
let user = {
    fName : "Jesse",
    lName : "Belle",
    address: {
        aparment: "Quest Villa",
        city : "New Jersey",
        pincode: 9102
    }
}

console.log(user)
/*fName: 'Jesse',
  lName: 'Belle',
  address: { aparment: 'Quest Villa', city: 'New Jersey', pincode: 9102 }
*/
console.log(user.address.city)      //  New Jersey
console.log(user.address.pincode)   // 9102
console.log(user.address.aparment)  // Quest Villa