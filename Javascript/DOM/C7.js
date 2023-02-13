// creating the element
let l = document.createElement('p')
console.log(l)

//adding the text
let l1 = document.createTextNode("This paragraph's origin can be traced to the Js file")
console.log(l1)

// appending the new child/content to the new element
l.appendChild(l1)
console.log(l)

//specify where you want to add the new element and the add
let l2 = document.getElementById("dv1")
l2.appendChild(l)
console.log(l2)



//my handy work
let l4 = document.createElement("p")
let l3 = document.createTextNode("Another addition")
l4.appendChild(l3)
l2.appendChild(l4)


