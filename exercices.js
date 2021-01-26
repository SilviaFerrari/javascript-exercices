const readline = require('readline-sync');

function readInt(){
    let num = readline.question("Inserisci un numero compreso fra 1 e 10: ");
    while(num < 1 || num > 10){
        num = readline.question("Il numero non e\' compreso nel range richiesto, reinseriscilo: ");
    }
}



function equazione(min, equal, max){
    var a = readline.question("inserisci un valore numerico a: ");
    while(a === 0){
        a = readline.question(`${a} non e\' un valore accettabile, mettine un altro diverso da 0`, ""); 
    }
    var b = readline.question("inserisci un valore numerico b: ");
    var c = readline.question("inserisci un valore numerico c: ");

    delta = Math.pow(b,2)-4*a*c;

    if (delta<0) min(); 
    else if (delta==0) equal();
    else max();
}

let dmin = () => console.log('L\'equazione non ammette radici reali');

let dequal = (arg1, arg2) => {
    let x=-arg2/(2*arg1);
    console.log('L\'equazione ammette due radici reali e coincidenti date da \n'+ ' 1= x2 = ' + x);
}

let dmax = (arg1, arg2) => {
    x1=(-b - Math.sqrt(delta)) /(2*a);
    x2=(-b + Math.sqrt(delta)) /(2*a);
    console.log('L\'equazione ammette due radici reali e distinte date da \n'+ 'x1= ' + x1 + '\nx2= '+x2);
}


let a = readline.question("inserisci un valore numerico A: ");
let b = readline.question("inserisci un valore numerico B: ");
let k = readline.question("inserisci un valore numerico K: ");

function maxMin(){
    if(a>b)console.log("Il valore massimo e\' a: " + a);
    else console.log("Il valore massimo e\' b: " + b);
}

function intreSum(){
    console.log("La somma dei valori compresi e\': ");
    let sum = 0;
    if(a>b){
        for(let i = a+1; i < b; i++){
            sum = sum + i;
        }
    }else{
        for(let i = b+1; i < a; i++){
            sum = sum + i;
        }
    }
    console.log(sum)
}

function product(){
    console.log("I prodotti sono: ");
    let pro = 1;
    if(a>b){
        for(let i = a+1; i < b; i++){
            if(i%2 == 0) pro = pro * i;
        }
    }else{
        for(let i = b+1; i < a; i++){
            if(i%2 == 0) pro = pro * i;
        }
    } 
    console.log(pro);
}

function multipli(){
    console.log("I multipli di k sono: ");
    if(a>b){
        for(let i = a+1; i < b; i++){
            if(i%k == 0) console.log(" " + i + " ");
        }
    }else{
        for(let i = b+1; i < a; i++){
            if(i%k == 0) console.log(" " + i + " ");
        }
    } 
}


readInt();
equazione(dmin, dequal, dmax);   
maxMin();     
intreSum();
product();
multipli();
