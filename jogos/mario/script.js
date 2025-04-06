const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const sky = document.getElementById("sky");
const coin = document.querySelector('.coin');
let coinCanScore = true;
var Death = parseInt(localStorage.getItem("DieSkin"));
var Skin = parseInt(localStorage.getItem("RunSkin"));
var moedas;
var score = 0;
var coinScore = 0;

    function Restart(){
        location.reload()
    }

    function Dados(){

        if(localStorage.getItem("DieSkin")){

        }

        else{
            Death = 1;
        }

        var best = parseInt(localStorage.getItem("BestScore"));

        if(localStorage.getItem("BestScore")){
            document.getElementById("best").innerHTML = "Best: " + best;
        }

        else{
            document.getElementById("best").innerHTML = "Best: 0";
        }

        if (Skin === 1){

        }

        if (Skin === 2){
            mario.src = '../img/idk.gif'
        }

        if (Skin === 3){
            mario.src = '../img/menina.gif'
        }

        if (parseInt(localStorage.getItem("CoinScore"))){

        }
        else{
            localStorage.setItem("CoinScore", 0)
        }

        if (parseInt(localStorage.getItem("BestScore"))){

        }
        else{
            localStorage.setItem("BestScore", 0)
        }
    }

    let Ceu;
    
    function trocarCeu() {
        sky.classList.toggle('game-board');
        sky.classList.toggle('game-board-dark');
    }
    
    Ceu = setInterval(trocarCeu, 30000);

    const scoreLoop = setInterval(() => {
        score = score + 1;
        pontuacao = score;
        document.getElementById("score").innerHTML = "Score: " + pontuacao;
    }, 1000);

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = clouds.offsetLeft;
        const coinPosition = coin.offsetLeft;

        if (coinPosition <= 110 && coinPosition > 20 && marioPosition < 50){
            coin.style.display = 'none';
            coinScore = coinScore + 1;
            moedas = coinScore;
            document.getElementById("coins").innerHTML = "Coins: " + moedas;

            setTimeout(() => {
                coin.style.display = 'block'
            }, 1);

            coinCanScore = false;
            setTimeout(() => {
                coinCanScore = true;
            }, 1000);
        }

        
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            if (Death === 1){
                mario.src = '../img/game-over.png';
            }
            
            if (Death === 2){
                mario.src = '../img/morreu.png';
            }

            if (Death === 3){
                mario.src = '../img/caveira.png';
            }

            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            coin.style.animation = 'none';
            coin.style.left = `${coinPosition}px`;

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;

            document.getElementById("loseScore").innerHTML = "Seu score foi de: " + pontuacao;
            document.getElementById("lose").style = "z-index: 999; opacity: 1;"

            clearInterval(loop);
            removeEventListener('keydown', jump);
            clearInterval(scoreLoop);
            clearInterval(Ceu);

            document.addEventListener('keydown', Restart);

            if (moedas >= 1){
            var moedasValor = parseInt(localStorage.getItem("CoinScore"));
            var valorFinal = moedasValor + moedas;
            localStorage.setItem("CoinScore", valorFinal);
            }
            
            if (parseInt(localStorage.getItem("BestScore")) <= pontuacao){
                localStorage.setItem("BestScore", pontuacao);
            }
        }
    }, 1);

window.onload = Dados;
document.addEventListener('keydown', jump);