class Profile{
    constructor(){
        let fName
        let lName
    }
    getUserDetail(){
        console.log(this.fName, this.lName)
        document.write(this.fName, this.lName)
    }
}

let p = new Profile()
p.fName = "John"
p.lName = " Doe"
p.getUserDetail()