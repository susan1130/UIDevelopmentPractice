// destructuring arrays

let l1 = [11,22,33,44,55]
console.log(l1)                                 // [ 11, 22, 33, 44, 55 ]
console.log(l1[0],l1[1],l1[2],l1[3],l1[4])      // 11 22 33 44 55

//destructuring arrays
// let [one,two,three,four,five] = l1
// console.log(one,two,three,four,five)            // 11 22 33 44 55

// passing default values is ignored in case of existing objects
// in case of an assignment, default values are ignored
//let [one,two,three,four = "Susan",five] = l1                            //here l1 values prevail
//console.log(one,two,three,four,five)               // 11 22 33 44 55                  

//adding new object to the array
let [one,two,three,four,five,six = "Susan", seven = "pass", eight = 88] = l1 
console.log(one,two,three,four,five, six,seven,eight)       //11 22 33 44 55 Susan pass 88
