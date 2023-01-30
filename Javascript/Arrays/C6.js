//SLICE 
let l1 = [10,20,30,40,50,60,70,80,90,100]
//         0  1  2  3  4  5  6  7  8  9
//       -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
console.log(l1)                         //[10,20,30,40,50,60,70,80,90,100]

//slice(start)
console.log(l1.slice(2))                //[30,40,50,60,70,80,90,100]

//slice(start, end)
console.log(l1.slice(3,7))              // [ 40, 50, 60, 70 ]

//slice(start, end)
console.log(l1.slice(-1))               //[ 100 ]
console.log(l1.slice(-4))               //[ 70, 80, 90, 100 ]
console.log(l1.slice(-4,-2))            //[ 70, 80 ]
console.log(l1.slice(-2,-4))            //[]