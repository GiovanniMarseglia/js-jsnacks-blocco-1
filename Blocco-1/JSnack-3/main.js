// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.




let i=0
let somma=0
let somma2=0
document.getElementById("btn").addEventListener("click", function(){ 

    i++

    if(i < 11){
        somma2= +document.getElementById("numeri").value
        somma = somma + somma2
        document.getElementsByTagName("h2")[0].innerHTML = `numero ${i} inserito`
        document.getElementsByTagName("input")[0].value = " "
        
    }else{
        alert(`la somma dei numeri è di ${somma}`)
    }
    
})



document.getElementById("clr").addEventListener("click", function(){ 
    
    location.reload()
    
})