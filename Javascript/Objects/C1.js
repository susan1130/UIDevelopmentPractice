//objects

let obj = {
    fName: "John",
    lName: "Doe",
    eMail: "John.Doe@gmail.com",
    company: function(){ console.log("TCS")}
}
console.log(obj)           
//{         output
//     fName: 'John',
//     lName: 'Doe',
//     eMail: 'John.Doe@gmail.com',
//     company: [Function: company]
//   }

console.log(obj.fName)              // John
console.log(obj.lName)              // Doe
console.log(obj.eMail)              // John.Doe@gmail.com
console.log(obj.company)            // [Function: company]
obj.company()                       // TCS