// constructor with arguments with this keyword and prototype method with this keyword

class Parent{
    //constructor with this keyword
    constructor(firstName, lastName){
        this.fName = firstName
        this.lName = lastName
    }

    //prototype method with this keyword
    getDetails(){
        console.log("Prototype function: "+ this.fName, this.lName)
    }
}

let p = new Parent("Jhonny" ,"Quest")
p.getDetails()