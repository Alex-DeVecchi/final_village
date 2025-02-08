const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 60000;

let slash = new Building("Slash", 1, 15, "buySlash");
let waterGun = new Building('WaterGun', 3, 100, 'buyWaterGun');
let fireball = new Building("Fireball", 10, 500, "buyFireball");
let rockThrow = new Building("RockThrow", 25, 1000,"buyRockThrow");
let windBlow = new Building("WindBlow", 75, 2000, "buyWindBlow");
let poisonThrow = new Building("PoisonThrow", 200, 4000,"buyPoisonThrow");
let zap = new Building("Zap", 500, 6000, "buyZap");
let darkness = new Building("Darkness", 2000, 15000, "buyDarkness");

let swordmaster1 = new SwordMaster("Swordmaster I", 100 , slash);
let swordmaster2 = new SwordMaster("Swordmaster II", 250, slash);
let swordmaster3 = new SwordMaster("Swordmaster III", 500, slash);
let swordmaster4 = new SwordMaster("Swordmaster IV", 900, slash);
let swordmaster5 = new SwordMaster("Swordmaster V", 1250, slash);

let aqua = new master("Aqua", 450, waterGun);
let waterSlicer = new master("Water Slicer", 950, waterGun);
let waterVortex = new master("Water Vortex", 1300, waterGun);
let waterManipulation = new master("Water Manipulation", 1550, waterGun);
let seaSerpents = new master("Sea Serpents", 1750, waterGun);

let flare = new master("Flare", 1000, fireball);
let phoenixBreath = new master("Phoenix Breath", 1600, fireball);
let burstWheel = new master("Burst Wheel", 2250, fireball);
let heatwave = new master("Heatwave", 3750, fireball);
let prometheus = new master("Prometheus", 5000, fireball);

let rockCrush = new master("Rock Crush", 1500, rockThrow);
let terraStake = new master("Terra Stake", 1750, rockThrow);
let earthBomb = new master("Earth Bomb", 2500, rockThrow);
let earthquake = new master("Earthquake", 3500, rockThrow);
let rockslide = new master("Rockslide", 5000, rockThrow);

let gust = new master("Gust", 2500, windBlow);
let aeroslash = new master("Aeroslash", 3000, windBlow);
let windBlast = new master("Wind Blast", 3550, windBlow);
let hurricane = new master("Hurricane", 5500, windBlow);
let numinesWrath = new master("Numine's Wrath", 6000, windBlow);

let toxicmaster1 = new master("Toxicmaster I", 5000, poisonThrow);

let lightningmaster1 = new master("Lightningmaster I", 7000, zap);
let darkmaster1 = new master("Darkmaster I", 20000, darkness);

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
    score += zap.cps;
    score += darkness.cps;
}

function updateButtons() {
    slash.buttonState();
    waterGun.buttonState();
    fireball.buttonState();
    rockThrow.buttonState();
    windBlow.buttonState();
    poisonThrow.buttonState();
    zap.buttonState();
    darkness.buttonState();

    swordmaster1.buttonState();
    swordmaster2.buttonState();
    swordmaster3.buttonState();
    swordmaster4.buttonState();
    swordmaster5.buttonState();

    aqua.buttonState();
    waterSlicer.buttonState();
    waterVortex.buttonState();
    waterManipulation.buttonState();
    seaSerpents.buttonState();

    flare.buttonState();
    phoenixBreath.buttonState();
    burstWheel.buttonState();
    heatwave.buttonState();
    prometheus.buttonState();

    rockCrush.buttonState();
    terraStake.buttonState();
    earthBomb.buttonState();
    earthquake.buttonState();
    rockslide.buttonState();

    gust.buttonState();
    aeroslash.buttonState();
    windBlast.buttonState();
    hurricane.buttonState();
    numinesWrath.buttonState();

    toxicmaster1.buttonState();
    lightningmaster1.buttonState();
    darkmaster1.buttonState();

}

function upatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = Math.floor(score).toLocaleString();
}

setInterval(upatePage, tickRate);