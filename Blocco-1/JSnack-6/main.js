// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.


let numeriHTML = document.getElementById("numeri")

let somma = 0

document.getElementById("btn").addEventListener("click", function(){ 
    document.getElementsByTagName("p")[0].innerHTML = `` 
    for(let i=1; i <= numeriHTML.value; i++){

        somma=(i * i * i) 
        
        document.getElementsByTagName("p")[0].innerHTML += `cubo del numero in posizione ${i}: ${somma} <br>`    
    }
    

   
})


document.getElementById("clr").addEventListener("click", function(){ 
    
    location.reload()
    
})