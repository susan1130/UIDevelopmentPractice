// Accessing properties from an object

let emp = {
    eName : "John Doe",
    eId : 202211343,
    eMail : "abc@gmail.com",
    company : function(){console.log("Tata Consultancy Services")}
}

console.log(emp.eName)          // John Doe
console.log(emp["eId"])         // 202211343

emp.contact = 9877654321
console.log(emp["contact"])     // 9877654321

emp["address"] = "Nanakramguda, Hyd, 500032"
console.log(emp.address)        // Nanakramguda, Hyd, 500032

console.log(" ")
console.log(emp)
/*
{
  eName: 'John Doe',     
  eId: 202211343,
  eMail: 'abc@gmail.com',
  company: [Function: company],
  contact: 9877654321,
  address: 'Nanakramguda, Hyd, 500032'
}
*/