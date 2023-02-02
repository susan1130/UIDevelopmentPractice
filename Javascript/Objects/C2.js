//this keyword

let ob = {
    fName: "John",
    lName: "Doe",
    eMail: "John.Doe@gmail.com",
    company: function(){ 
        console.log(this)
        console.log(this.fName)
        console.log(this.lName)
        console.log(this.eMail)
        console.log("TCS")
    }
}

ob.company()
/*
{
  fName: 'John',
  lName: 'Doe',
  eMail: 'John.Doe@gmail.com',
  company: [Function: company]
}
*/
this.mob = 9876543211
this.address = "Nanakramguda, Hyderabad"
console.log(this)

/*John
Doe
John.Doe@gmail.com
TCS
{ mob: 9876543211, address: 'Nanakramguda, Hyderabad' }*/

