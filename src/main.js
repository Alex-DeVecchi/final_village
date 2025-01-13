const tickRate = 1000 / 30;
let score = 0;

let juicer = new Building('Juicer', 0.1, 15, 'buyJuicer');
let suger = new Building('Juicer', 1, 100, 'buySuger');

function incScore() {
    score += juicer.cps;
    score += suger.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons(){
score += juicer.cps;
score += suger.cps;
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);