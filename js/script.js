// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.

const bike = [
    {
        nome: "Scott Addict RC Ultimate",
        peso: 5.9
    },
    {
        nome: "Giant TCR Advanced SL 0",
        peso: 6.4
    },
    {
        nome: "Specialized S-Works Aethos",
        peso: 6.34
    }
]

console.log(bike)

let pesoCont = bike[0].peso;
let pesoMin = bike[0];

for (let i=1; i<bike.length; i++){
    if(pesoCont > bike[i].peso){
       
        pesoMin = bike[i]
        pesoCont = bike[i].peso
        
    }
}

console.log(`La bici con il peso minore è: ${pesoMin.nome}: ${pesoMin.peso} kg`)