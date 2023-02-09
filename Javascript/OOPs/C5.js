// Single level inheritance using parameterised constructor

class Parent{
    constructor(firstName, lastName){
        console.log(firstName)
        console.log(lastName)
    }
}
class Child extends Parent{
    constructor(phone, email){
        super("Johnny","Quest")  //calls the Parent class>> is parameterised >>Jhonny and Quest are displayed
        console.log(phone)       // 9876543211
        console.log(email)       // abc@gmail.com
    }
}
new Child(9876543211,"abc@gmail.com")