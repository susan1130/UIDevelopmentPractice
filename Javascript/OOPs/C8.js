// Abstraction

class Parent{
    firstName
    lastName
    constructor(firstName, lastName){

        //the if loop throws error if both the child and parent class cosntructors are same
        //due to this loop the data is hidden
        if(this.constructor == Parent){
            throw new Error ("Abstract class can't be instantiated")
        }

        this.firstName = firstName
        this.lastName = lastName
    }
    getDetails(){
        console.log("Parent class: "+ this.firstName, this.lastName)
    }
}
class Child extends Parent{
    constructor(firstName, lastName){
        super(firstName, lastName)
    }
    getDetails(){
        console.log("Parent class: "+ this.firstName, this.lastName)
    }
}
// let p = new Parent("Jhonny", "Quest")
// console.log(p)
// p.getDetails()

let c = new Child("Jesse", "Quest")
console.log(c)
c.getDetails()

// commenthing either of the 2 blocks leads to smooth running of the program