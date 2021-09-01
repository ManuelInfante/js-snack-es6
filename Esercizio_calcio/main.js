// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teamCalcio = [
    {nome: 'Juve', punti: 0, falli: 0},
    {nome: 'Sassuolo', punti: 0, falli: 0},
    {nome: 'Sampdoria', punti: 0, falli: 0},
    {nome: 'Inter', punti: 0, falli: 0},
    {nome: 'Napoli', punti: 0, falli: 0},
    {nome: 'Milan', punti: 0, falli: 0},
]

// console.log(punti, falli);

for(let i = 0; i < teamCalcio.length; i++){

    teamCalcio[i].punti = Math.floor(Math.random() * 100) + 1;
    teamCalcio[i].falli = Math.floor(Math.random() * 100) + 1;
};


// const [] = teamCalcio;

// const teamInfo = [punti, falli]

// console.log(teamInfo)

const teamInfo = [];

for(let i = 0; i < teamCalcio.length; i++){
    
    teamInfo.push(teamCalcio[i].nome)

    teamInfo.push(teamCalcio[i].punti)
}

console.log(teamInfo)