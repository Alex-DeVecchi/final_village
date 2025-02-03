const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 6000;

let slash = new Building("Slash", 0.5, 15, "buySlash");
let waterGun = new Building('WaterGun', 2, 100, 'buyWaterGun');
let fireball = new Building("Fireball", 10, 500, "buyFireball");
let rockThrow = new Building("RockThrow", 25, 1000,"buyRockThrow");
let windBlow = new Building("WindBlow", 75, 2000, "buyWindBlow");
let poisonThrow = new Building("PoisonThrow", 200, 4000,"buyPoisonThrow");

let swordmaster1 = new SwordMaster("Swordmaster I", 100 , slash);
let swordmaster2 = new SwordMaster("Swordmaster II", 250, slash);
let watermaster1 = new master1("Watermaster I", 450, waterGun);
let firemaster1 = new master1("Firemaster I", 1000, fireball);
let earthmaster1 = new master1("Earthmaster I", 1500, rockThrow);
let airmaster1 = new master1("Airmaster I", 3000, windBlow);
let toxicmaster1 = new master1("Toxicmaster I", 5000, poisonThrow);

function scorePlusPlus(){
    score += clickStrength;
}

function incScore() {
    score += slash.cps;
    score += waterGun.cps;
    score += fireball.cps;
    score += rockThrow.cps;
    score += windBlow.cps;
    score += poisonThrow.cps;
}

function updateButtons() {
    slash.buttonState();
    waterGun.buttonState();
    fireball.buttonState();
    rockThrow.buttonState();
    windBlow.buttonState();
    poisonThrow.buttonState();
    swordmaster1.buttonState();
    swordmaster2.buttonState();
    watermaster1.buttonState();
    firemaster1.buttonState();
    earthmaster1.buttonState();
    airmaster1.buttonState();
    toxicmaster1.buttonState();
}

function upatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = Math.floor(score).toLocaleString();
}

setInterval(upatePage, tickRate);