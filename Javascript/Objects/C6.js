//call

let ob = {
    fName: "John",
    lName: "Doe"
}
//writing the function outside the object
let fun = function(){
    console.log(this.fName+" "+this.lName)
}

fun.call(ob)        //  John Doe

let ob1 = {
    fName: "Jane",
    lName: "Doe"
}
fun.call(ob1)       //  Jane Doe