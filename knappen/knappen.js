let siffra = 0

/*
var variabel = "bryter block"

let variabel = "nyare = blockvariabel"
*/

//Plusknapp
function plusClick(){
    siffra = siffra +1
    console.log(siffra)
    document.getElementById("svar").innerHTML = siffra
}

//Minusknapp
const minusknapp = document.getElementById("minus")
minusknapp.addEventListener("click", subtractClick)
function subtractClick(){
    siffra--
    console.log(siffra)
    document.getElementById("svar").innerHTML = siffra
}

//console.log("funkar!" + ett)
//console.log(`funkar 2! ${ett}`)