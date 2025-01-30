const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 6000;

let juicer = new Building("Juicer", 0.5, 15, "buyJuicer");
let sugar = new Building('Sugar', 2, 100, 'buySugar');
let fireball = new Building("Fireball", 10, 500, "buyFireball");

let firemaster1 = new FireMaster("Firemaster I", 100 , juicer);
let firemaster2 = new FireMaster("Firemaster II", 500, juicer);
let swordmaster1 = new master1("Swordmaster I", 500, sugar);
let watermaster1 = new master1("Watermaster I", 1000, fireball);

function scorePlusPlus(){
    score += clickStrength;
}

function incScore() {
    score += juicer.cps;
    score += sugar.cps;
    score += fireball.cps;
}

function updateButtons() {
    juicer.buttonState();
    sugar.buttonState();
    fireball.buttonState();
    firemaster1.buttonState();
    firemaster2.buttonState();
    swordmaster1.buttonState();
    watermaster1.buttonState();
}

function upatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = Math.floor(score).toLocaleString();
}

setInterval(upatePage, tickRate);