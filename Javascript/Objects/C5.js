// call method

let ob = {
    fName : "John",
    lName : "Doe",
    display: function(){
        console.log(this)
        console.log(this.fName)
        console.log(this.lName)
        console.log(" ")
    }
}

ob.display()    //{ fName: 'John', lName: 'Doe', display: [Function: display] }  //John  //Doe

// function borrowing

let ob1 = {
    fName : "John",
    lName : "Smith"
}

ob.display.call(ob1)        // { fName: 'John', lName: 'Smith' }   //John      //Smith

let ob2 = {
    fName : "Jane",
    lName : "Doe"
}

ob.display.call(ob2)        //  { fName: 'Jane', lName: 'Doe' }  // Jane    //Doe

console.log(ob)             // { fName: 'John', lName: 'Doe', display: [Function: display] }