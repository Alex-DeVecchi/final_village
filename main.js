const tickRate = 1000 / 30;

let score = 0;

let juicer = new Building("Juicer", 0.1, 15," buyJuicer");

function inScore(){
    score += juicer.cps;
}

function scorePlusPlus(){
score++;
document.getElementById("score").innerHTML = score;
}

function upatePage(){
    inScore();
document.getElementById("score").innerHTML =Math.floor(score).toLocaleString();
}

setInterval(upatePage, tickRate);