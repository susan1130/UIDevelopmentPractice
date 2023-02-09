// Object Class
class Parent extends Object{
    a = 11
    b = 22

    constructor (){
        super()
        console.log(this.a)
        console.log(this.b)
    }
}

new Parent()