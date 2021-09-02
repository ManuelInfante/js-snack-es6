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

const randomNum = ( min, max) => {
    min = Math.ceil(min),
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(punti, falli);

for(let i = 0; i < teamCalcio.length; i++){

    teamCalcio[i].punti = randomNum(0, 10);
    teamCalcio[i].falli = Math.floor(Math.random() * 100) + 1;
};

for(let i = 0; i < teamCalcio.length; i++){

    teamCalcio[i].punti = randomNum(0, 10);
    teamCalcio[i].falli = randomNum(0, 10);
};

console.log(teamCalcio)

const newTeams = [];

for (let i = 0; i < teamCalcio.length; i++){
    const {nome, falli} = teamCalcio[i];
    newTeams.push(nome, falli);
}

console.log(newTeams);

// const [] = teamCalcio;

// const teamInfo = [punti, falli]

// console.log(teamInfo)

// const teamInfo = [];

// for(let i = 0; i < teamCalcio.length; i++){
    
//     teamInfo.push(teamCalcio[i].nome)

//     teamInfo.push(teamCalcio[i].punti)
// }

// console.log(teamInfo)