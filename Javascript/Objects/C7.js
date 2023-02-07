//call  apply  bind
let ob = {
    fName : "John",
    lName : "Doe",
    display : function(age, contact){
        console.log(this)
        console.log(this.fName+" "+this.lName)
        console.log(age, contact)
    }
}
ob.display()

//call =>>> Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want

ob.display.call(ob, 29, 12345678900)



//apply =>>> Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list

ob.display.apply(ob, [30, 123456782220])



//bind =>>> needs to be assigned to a variable. Bind is a function that helps you create another function that you can execute later with the new context of this that is provided

let l = ob.display.bind(ob, 32, 12348878900)
l()