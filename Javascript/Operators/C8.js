var a = 10              //0000000000001010
var b = 2               //0000000000000010
console.log( a&b )      //Truth table: 1000  -> 0000000000000010 = 2(ans)
console.log(" ")

var a = 10              //0000000000001010
var b = 2               //0000000000000010
console.log( a|b )      //Truth table: 1110  -> b1010 = 10(ans)
console.log(" ")

var a = 10              //0000000000001010
var b = 2               //0000000000000010
console.log( a^b )      //Truth table: 0110  -> 0000000000001000 = 8(ans)
console.log(" ")

var a = 10              //0000000000001010
console.log( ~a )       //Truth table: 10    -> 1111111111110101 = -11(ans)
console.log(" ")