// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
const cognomi = [
    "Rossi",
    "Russo",
    "Ferrari",
    "Esposito",
    "Bianchi",
    "Romano",
    "Jones",
    "Martinez",
    "Kim",
    "Hernandez",
  ]

const nomi = [
    "Marco",
    "Francesco",
    "Ferdinando",
    "Mirko",
    "Luca",
    "Mattia",
    "Gianluca",
    "Alessio",
    "Martina",
    "Simona",
]

let ul = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
let nomiHTML = document.getElementById("nomi");

function casuale(){
    return Math.floor(Math.random() * (10 - 0) + 0);
}

document.getElementById("btn").addEventListener("click", function(){

    
    for(let i=0; i <= nomiHTML.value; i++){
        li = document.createElement("li");
        li.appendChild(document.createTextNode(` ${nomi[casuale()]} ${cognomi[casuale()]} `));
        ul.appendChild(li);
}

})


document.getElementById("clr").addEventListener("click", function(){
    
    location.reload()
 
})



    
    


