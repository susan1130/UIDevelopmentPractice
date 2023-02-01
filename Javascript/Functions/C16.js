// callback function
//function that is passed as argument to another function and called in another function

function f1(fName,lName){
    console.log(`My first name ${fName} and my last name ${lName}`)
}

function f2(fName,lName){
    firstName = "is " + fName
    lastName = "is " + lName
    f1(firstName,lastName)
}

f2("Jayanta Kumar","Das")
f2("Nani","Das")
