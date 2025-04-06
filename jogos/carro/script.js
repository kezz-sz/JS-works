var coins = 0;
var faixa2 = document.querySelector('.faixa2');
var car = document.querySelector('.car');
var npc = document.querySelector('.npc');
var npc2 = document.querySelector('.npc2');
var Score = document.getElementById("score");
var bestScore = parseInt(localStorage.getItem("CarBestScore"));
var BestScore = document.getElementById("best");
var score = 0;
var Skin = parseInt(localStorage.getItem("CarSkin"));
var Death = parseInt(localStorage.getItem("CarDie"));
var faixa = document.querySelector('.faixa');
var nitro = 1;
var lose = document.getElementById("lose");

function Restart(){
    location.reload()
}


function MetaDados() {
    faixa2.style.display = "flex";
    faixa2.style.animation = "Faixa-Animation 2s linear infinite";
}

const scoreLooping = setInterval(() => {
    score = score + 1;
    Score.innerHTML = "Score: " + score;
}, 1000)

const loop = setInterval(() => {
    const npcPosition = npc.offsetLeft;
    const npc2Position = npc2.offsetLeft;
    const carPosition = +window.getComputedStyle(car).bottom.replace('px', '');
    const faixaPosition = faixa.offsetLeft;
    const faixa2Position = faixa2.offsetLeft;

    if (score >= 50){
        npc.style.animation = "npc .8s linear infinite";
        npc2.style.animation = "npc2 .8s linear infinite";
    }

    if (score >= 100){
        npc.style.animation = "npc .6s linear infinite";
        npc2.style.animation = "npc2 .6s linear infinite";
    }

    if (score >= 150){
        npc.style.animation = "npc .6s linear infinite";
        npc2.style.animation = "npc2 .6s linear infinite";
    }

    if (score >= 200){
        npc.style.animation = "npc .4s linear infinite";
        npc2.style.animation = "npc2 .4s linear infinite";
    }

    if (score >= 250){
        npc.style.animation = "npc .2s linear infinite";
        npc2.style.animation = "npc2 .2s linear infinite";
    }

    if (score >= 300){
        npc.style.animation = "npc 0s linear infinite";
        npc2.style.animation = "npc2 0s linear infinite";
    }

    if (npc2Position <= 211 && npc2Position >= -200 && npc2Position <= -1 && carPosition <= 249 && nitro === 1){
        lose.style.opacity = "1"
        if (Death === 1){
            car.src = "../img/explosion1.png";
        }

        if (Death === 2){
            car.src = "../img/explosion2.png";
        }

        if (Death === 3){
            car.src = "../img/explosion3.png";
        }

        npc2.style.animation = "none";
        npc2.style.left = `${npc2Position}px`;
        npc2.src = "../img/explosion1.png";

        faixa.style.animation = "none";
        faixa.style.left = `${faixaPosition}px`;

        faixa2.style.animation = "none";
        faixa2.style.left = `${faixa2Position}px`;

        npc.style.animation = "none";
        npc.style.left = `${npcPosition}px`;

        clearInterval(CarDados);
        clearInterval(scoreLooping);
        document.removeEventListener('keydown', Arrows);

        document.addEventListener('keydown', Restart);
    }

    if (npcPosition <= 211 && npcPosition >= -200 && npcPosition <= -1 && carPosition >= 250 && nitro === 1){
        lose.style.opacity = "1"
        if (Death === 1){
            car.src = "../img/explosion1.png";
        }

        if (Death === 2){
            car.src = "../img/explosion2.png";
        }

        if (Death === 3){
            car.src = "../img/explosion3.png";
        }
        
        npc.style.animation = "none";
        npc.style.left = `${npcPosition}px`;
        npc.src = "../img/explosion1.png";

        faixa.style.animation = "none";
        faixa.style.left = `${faixaPosition}px`;

        faixa2.style.animation = "none";
        faixa2.style.left = `${faixa2Position}px`;

        npc2.style.animation = "none";
        npc2.style.left = `${npc2Position}px`;

        clearInterval(CarDados);
        clearInterval(scoreLooping);
        document.removeEventListener('keydown', Arrows);

        document.addEventListener('keydown', Restart);
    }

    if (nitro === 2 && npc2Position <= 402 && npc2Position >= 12 && npc2Position >= 0 && carPosition <= 249){
        lose.style.opacity = "1"
        if (Death === 1){
            car.src = "../img/explosion1.png";
        }

        if (Death === 2){
            car.src = "../img/explosion2.png";
        }

        if (Death === 3){
            car.src = "../img/explosion3.png";
        }

        npc2.style.animation = "none";
        npc2.style.left = `${npc2Position}px`;
        npc2.src = "../img/explosion1.png";

        faixa.style.animation = "none";
        faixa.style.left = `${faixaPosition}px`;

        faixa2.style.animation = "none";
        faixa2.style.left = `${faixa2Position}px`;

        npc.style.animation = "none";
        npc.style.left = `${npcPosition}px`;

        clearInterval(CarDados);
        clearInterval(scoreLooping);
        document.removeEventListener('keydown', Arrows);

        document.addEventListener('keydown', Restart);

        const continuar2 = setInterval(() => {
            car.classList.add('car_n');
        }, 10)
    }

    if (nitro === 2 && npcPosition <= 402 && npcPosition >= 12 && npcPosition >= 0 && carPosition >= 250){
        lose.style.opacity = "1"
        if (Death === 1){
            car.src = "../img/explosion1.png";
        }

        if (Death === 2){
            car.src = "../img/explosion2.png";
        }

        if (Death === 3){
            car.src = "../img/explosion3.png";
        }
        
        npc.style.animation = "none";
        npc.style.left = `${npcPosition}px`;
        npc.src = "../img/explosion1.png";

        faixa.style.animation = "none";
        faixa.style.left = `${faixaPosition}px`;

        faixa2.style.animation = "none";
        faixa2.style.left = `${faixa2Position}px`;

        npc2.style.animation = "none";
        npc2.style.left = `${npc2Position}px`;

        clearInterval(CarDados);
        clearInterval(scoreLooping);
        document.removeEventListener('keydown', Arrows);

        document.addEventListener('keydown', Restart);

        const continuar = setInterval(() => {
            car.classList.add('car_n');
        }, 10)
    }

    if (bestScore < score){
    localStorage.setItem("CarBestScore", score);
    }

}, 10)

function Dados(){
    BestScore.innerHTML = "Best Score: " + bestScore;

    if (isNaN(bestScore)){
        BestScore.innerHTML = "Best Score: 0";
    }

    if (Skin === 1){

    }

    if (Skin === 2){
        car.src = "../img/carro2.png";
    }

    if (Skin === 3){
        car.src = "../img/carro3.png";
    }

    if (parseInt(localStorage.getItem("CarBestScore"))){

    }

    else{
        localStorage.setItem("CarBestScore", 0);
    }
}

function NpcDados(){
    npc2.style.display = "block";
}

    const CarDados = setInterval(() => {
        npc.style.display = "none";

        setTimeout(() => {
            npc.style.display = "block";
        }, 1000)
    }, 2000);

    const Arrows = (event) => {

        if (event.code === 'KeyW' || event.code === 'ArrowUp'){
            car.classList.remove('car_d');
            car.classList.add('car_u');
        }
    
        if (event.code === 'KeyS' || event.code === 'ArrowDown'){
            car.classList.remove('car_u');
            car.classList.add('car_d');
        }
    
        if (event.code === 'KeyD' || event.code === 'ArrowRight'){
            car.classList.add('car_n');
            nitro = 2;
    
         const voltar = setTimeout(() => {
            car.classList.remove('car_n');
            nitro = 1;
        }, 1500);
        }
    
        if (event.code === 'KeyA' || event.code === 'ArrowLeft'){
            car.classList.remove('car_n');
            nitro = 1;
        }
    }

document.addEventListener('keydown', Arrows);

window.onload = function() {
    setTimeout(MetaDados, 950);
    setTimeout(NpcDados, 500);
    Dados();
}