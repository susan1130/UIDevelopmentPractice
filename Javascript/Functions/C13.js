// Spread operator and rest operator

//normal function
function f1(x,y,z){
    return x+y+z
}
console.log(f1(50,60,70))

//Rest operator
function f2(x,y,z,...args){
    return x+y+z +","+args              //180,10,20,40,30
}
console.log(f2(50,60,70))
console.log(f2(50,60,70,10,20,40,30))

//Spread Operator
let a = ["nOne","nTwo","nThree","nFour","nFive"]
function getNames(n1,n2,n3,n4,n5){
    console.log(n1+" "+n2+" "+n3+" "+n4+" "+n5)
}
getNames(a[0],a[1],a[2],a[3],a[4])
getNames(...a)

/*REST
for console.log(f2(50,60,70,10,20,40,30))  and  return x+y+z +","+args
the values x= 50, y= 60, z=70   and the rest 10,20,40,30 fall in the args array


The rest parameter, however, is a real array object so we can use sort(), map(), forEach(), or pop() method on a rest parameter. Not so for arguments as its an array-like object that does not have the comprehensive features of a regular JavaScript array
We can use the rest parameter within all functions — including the arrow function. Unlike arguments



SPREAD

helps you expand iterables into individual elements. opposite thing from the rest operator.
e.g.   getNames(...a)

const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16

=======

Since a properties object is not an iterable object, you cannot use the spread operator to expand its values.

Suppose you used the spread operator to clone properties from object A into object B. And suppose object B contains properties identical to those in object A. In such a case, B’s versions will override those inside A.



*/