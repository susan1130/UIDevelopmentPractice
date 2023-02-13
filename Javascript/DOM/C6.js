let l1 = document.querySelector('#id1')    //Returns the first element that is a descendant of node that matches selectors
l1.style.backgroundColor = "lavender"
l1.style.border = "1px solid red"
l1.style.padding = "5px"
l1.style.color = "blue"

let l2 = document.querySelector('.lst1')        // only the first element of the list is selected 
l2.style.color = "violet"
l2.style.fontWeight = "bold"

let l3 = document.querySelectorAll(".c1")
for(i=0 ; i<l3.length ; i++ ){
    console.log(l3[i].style.backgroundColor = 'orange')
    l3[i].style.padding = "5px"
    l3[i].style.margin = "1px"
    l3[i].style.border = "1px solid blue"
    l3[i].style.marginBottom = "5px"
}
