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



// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]



const generateRandomNum = () => {
    return Math.floor(Math.random() * 10) + 1
}

for (let i=0; i<squadre.length; i++){

    squadre[i].puntiFatti = generateRandomNum();
    squadre[i].falliSubiti = generateRandomNum();
    
}

console.log(squadre)

let newArraySquadre= [];

for (let i=0; i<squadre.length; i++){
    let squadra2 = {
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    }

    newArraySquadre.push(squadra2)

}

console.log(newArraySquadre)