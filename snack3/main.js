
const arrayIniziale = [1,2,3,4,5,6,7,8,9,10,11];

const randomNum = (min, max) => {
    min = Math.ceil(min),
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = randomNum(0, 10);

let b = randomNum(0, 10);

if (a > b){
    var salvataggio = a;
    a = b;
    b = salvataggio;
} else if (a = b){
    a--;
}

console.log('A e B sono rispettivamente: ' + a + ' e ' + b)

const arrayFinale = arrayIniziale.filter((element, i) => {
    if (a <= i && b >= i){
        return true;
    } else {
        return false;
    }

    return arrayFinale
})

console.log(arrayFinale)

