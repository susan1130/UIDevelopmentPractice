// iterables
let usr = {
    fName : "Jesse",
    lName : "Banner"
}

console.log("fName" in usr)         //true
console.log("id" in usr)            //false

for(i in usr){
    console.log(i, usr[i])              /*fName Jesse    lName Banner*/
}