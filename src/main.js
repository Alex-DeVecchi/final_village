const tickRate = 1000 / 30;

let score = 0;

let juicer = new Building("Juicer", 0.5, 15, "buyJuicer");
let sugar = new Building('Sugar', 2, 100, 'buySugar');
let fireball = new Building("Fireball", 10, 500, "buyFireball");

function scorePlusPlus(){
    score++;
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
}

function upatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = Math.floor(score).toLocaleString();
}

setInterval(upatePage, tickRate);