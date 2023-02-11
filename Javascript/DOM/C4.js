var v = document.getElementsByClassName("c1")
console.log(v)

v[0].textContent = "Raichu"
v[1].textContent = "Metapod"
v[2].innerText = "Wartortle"
v[3].innerText = "Venasaur"

v[0].style.fontSize = "30px"
v[1].style.color = "red"
v[2].style.fontWeight = "bold"
v[3].style.border = "1px solid blue"

var v1 = document.getElementsByClassName("c2")
console.log(v1)

for(i=0; i<v1.length; i++){
    v1[i].style.fontFamily="Verdana"
    console.log(v1[i].style.color = "peru")
}