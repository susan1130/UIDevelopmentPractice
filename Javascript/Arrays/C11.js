//indexOf & lastIndexOf

let l1 = [10,20,30,40,30,60,70,80,90,30,10,20,10,30,40]
//         0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
console.log(l1)
console.log(l1.indexOf(40))         
//3
console.log(l1.indexOf(10,5))          //find index of 10 after the 5th index
//10
console.log(l1.lastIndexOf(10))         //returns the last index of 10
//12
console.log(l1.lastIndexOf(30,6))     //return the last index of 30 after the 6th index
//4