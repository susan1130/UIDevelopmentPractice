//splice( startingIndex, deleteCount) and array insertion
let l1 = [10,20,30,40,50,60,70,80,90,100]
//         0  1  2  3  4  5  6  7  8  9
//       -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
console.log(l1)

console.log(l1.splice(2,1))  //single element deletion
console.log(l1)

//array insertion
console.log(l1.splice(2,0,55))   //insertion here
console.log(l1)
