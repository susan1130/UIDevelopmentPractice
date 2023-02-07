class Profile{

    constructor(){
        console.log("Default constructor")
        document.write("Default constructor")
        document.write("<br><br>")
    }

    getUserDetails(){
        console.log("Prototype constructor")
        document.write("Prototype constructor")
        document.write("<br><br>")
    }

    static getProductDetails(){
        console.log("Static function")
        document.write("Static function")
        document.write("<br><br>")
    }

}

new Profile().getUserDetails()
Profile.getProductDetails()