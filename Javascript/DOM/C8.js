//create the element
let l1 = document.createElement("p")
console.log(l1)

// defining the text to be added to the element
let l2 = document.createTextNode("Js addition. Hello World!")
console.log(l2)

//appending the text to the element
l1.appendChild(l2)
console.log(l1)

// calling by id
let l3 = document.getElementById("dv1")

let l4 = document.getElementById("p1")
//inserts the new text before p1 in the dv1 division
l3.insertBefore(l1,l4)
console.log(l3)



// my Handiwork

let m1 = document.createElement("p")
let m2 = document.createTextNode("Another Js addition. Yellow World!!!")
m1.appendChild(m2)
let m3 = document.getElementById("p2")
l3.insertBefore(m1,m3)              
//syntax is :   [id of the division].insertBefore([element variable], [variable for the id before which new text is to be added])