//splice( startingElement , deleteCount )

let l1 = [10,20,30,40,50,60,70,80,90,100]
//         0  1  2  3  4  5  6  7  8  9
//       -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

console.log(l1)                         //10,20,30,40,50,60,70,80,90,100
console.log(l1.splice(2,4))             //30, 40, 50, 60
console.log(l1)                         //10, 20, 70, 80, 90, 100
                                //         1   2   3   4   5    6
console.log(l1.splice(1,2))             //20, 70
console.log(l1)                         //10, 80, 90, 100

