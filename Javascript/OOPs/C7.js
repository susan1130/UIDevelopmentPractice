// Polymorphism : having many forms

class Parent{
    constructor(firstName, lastName){
        this.fName = firstName
        this.lName = lastName
    }
    getDetails(){
        console.log("Parent class values: "+ this.fName, this.lName)
    }
}
class Child extends Parent{
    getDetails(){
        super.getDetails()
        console.log("Child class values: "+ this.fName, this.lName)
    }
}
new Child("Jhonny", "Quest").getDetails()