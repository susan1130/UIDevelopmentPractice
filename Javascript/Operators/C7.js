//Bitwise operators   &  |  ^  ~

//And
console.log(" ")
console.log("and")
console.log(true & true)        //1
console.log(true & false)       //0
console.log(false & true)       //0
console.log(false & false)      //0

console.log(" ")
console.log("or")
console.log(true | true)        //1
console.log(true | false)       //1
console.log(false | true)       //1
console.log(false | false)      //0

console.log(" ")
console.log("xor")
console.log(true ^ true)        //0
console.log(true ^ false)       //1
console.log(false ^ true)       //1
console.log(false ^ false)      //0

console.log(" ")
console.log("complement")
console.log(~true)              //-2 .. 0000000000000001 = true   ->  1111111111111110 = -2
console.log(~false)             //-1 .. 0000000000000000 = false  ->  1111111111111111 = -1