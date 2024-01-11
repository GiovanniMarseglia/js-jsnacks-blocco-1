// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


let numeri = [
    "15",
    "454",
    "523",
    "25",
    "165",
    "2454",
    "52",
    "5467",   

]

let somma=0

for(i=0; i <= numeri.length-1; i++){
    
    if((i % 2) != 0 ){
        
        somma = somma + +numeri[i]
         
    }
}

console.log(somma)