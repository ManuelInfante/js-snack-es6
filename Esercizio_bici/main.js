// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const listaBici = [
    {nome: 'La veloce', peso: 6,},
    {nome: 'Armonica', peso: 13,},
    {nome: 'La rossa', peso: 8,},
    {nome: 'Run', peso: 7},
    {nome: 'Talpa', peso: 10},
    {nome: 'Zeta', peso: 15},
];

let biciLeggera = listaBici[0];

for (let i = 0; i < listaBici.length; i++){
    
    if (listaBici[i].peso < biciLeggera.peso){
        biciLeggera = listaBici[i]
    }
};

console.log(biciLeggera)

// document.getElementById('bici_leggera').innerHTML = 'La Bici più leggera della lista è: ' + biciLeggera.nome + ' che pesa solo: ' + biciLeggera.peso + 'kg!';


// BONUS...

const myFunction = () => {
    for (let i = 0; i < listaBici.length; i++){
    
        if (listaBici[i].peso < biciLeggera.peso){
            biciLeggera = listaBici[i]
        }
    };
    
    return biciLeggera;
}

console.log(myFunction())

document.getElementById('bici_leggera').innerHTML = 'La Bici più leggera della lista è: ' + myFunction().nome + ' che pesa solo: ' + myFunction().peso + 'kg!';