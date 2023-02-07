// destructuring objects

let usr = {
    fName : "John",
    lName : "Doe",
    contact : 9876543211
}

// let d1 = {fName : fn, lName: lnn, contact : con} = usr
// console.log(fn, lnn,con)                // John Doe 9876543211

// in case of an assignment, default values are ignored
// let d1 = {fName : fn, lName= "Deary", contact : con} = usr
// console.log(fn, lName,con)
//  John Doe 9876543211             ||      lName isn't updated here

// adding new object
let d1 = {fName : fn, lName: lnn, contact : con, city = "Hyd"} = usr
console.log(fn, lnn,con, city)              //John Doe 9876543211 Hyd

// rest operator
let d2 = {...args} = usr
console.log(d2)                 //  { fName: 'John', lName: 'Doe', contact: 9876543211 }
