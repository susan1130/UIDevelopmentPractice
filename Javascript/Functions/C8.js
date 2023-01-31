//pure functions:: where the data sent via the arguments aren't modified 

function f1(n){
    sq = n*n
    return sq
}

console.log(f1(7))


function f2(uName, pWord){
    if(uName == "Admin" && pWord == "Admin"){
        console.log("login success")
    }else{
        console.log("login failed")
    }
}

f2("Admin","Admin")

//impure function :: here the data sent via arguments gets modified 
function imp(uName, pWord){
    uName = "System"
    if(uName == "Admin" && pWord == "Admin"){
        console.log("login success")
    }else{
        console.log("login failed")
    }
}

imp("Admin","Admin")

//impure function
let a = [11,33,55,77]
function imp1(ele){
    a.push(ele)
    console.log(a)
}

imp1(10)
imp1(50)