function indexDados() {
  var dinero = parseInt(localStorage.getItem("CoinScore"));
  var BestScore = parseInt(localStorage.getItem("BestScore"));

  if (parseInt(localStorage.getItem("Identidade")) === 1) {
    document.getElementById("identidade").innerHTML = "Usar";
  }

  if (localStorage.getItem("CoinScore")) {
    document.getElementById("dinhero").innerHTML = "Coins: " + dinero;
  } else {
    document.getElementById("dinheiro").innerHTML = "Coins: 0";
  }

  if (localStorage.getItem("BestScore")) {
    document.getElementById("BestScore").innerHTML = "Best Score: " + BestScore;
  } else {
    document.getElementById("BestScore").innerHTML = "Best Score: 0";
  }

  if (parseInt(localStorage.getItem("r2")) === 1) {
    document.getElementById("idk").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("r3")) === 1) {
    document.getElementById("girl").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("d2")) === 1) {
    document.getElementById("eye").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("d3")) === 1) {
    document.getElementById("skull").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("c2")) === 1) {
    document.getElementById("car").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("c3")) === 1) {
    document.getElementById("carzao").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("s2")) === 1) {
    document.getElementById("pink").innerHTML = "Usar";
  }

  if (parseInt(localStorage.getItem("s3")) === 1) {
    document.getElementById("crash").innerHTML = "Usar";
  }
}

function Buy() {
  document.getElementById("buy").style.top = "5%";
}

function Close() {
  document.getElementById("buy").style.top = "-100%";
}

function Caminhada() {
  document.getElementById("buy").style.top = "-100%";
  document.getElementById("caminhada").style.top = "5%";
}

function CaminhadaClose() {
  document.getElementById("buy").style.top = "5%";
  document.getElementById("caminhada").style.top = "-100%";
}

function Morte() {
  document.getElementById("buy").style.top = "-100%";
  document.getElementById("morte").style.top = "5%";
}

function MorteClose() {
  document.getElementById("buy").style.top = "5%";
  document.getElementById("morte").style.top = "-100%";
}

function Carro() {
  document.getElementById("buy").style.top = "-100%";
  document.getElementById("carro").style.top = "5%";
}

function CarroClose() {
  document.getElementById("buy").style.top = "5%";
  document.getElementById("carro").style.top = "-100%";
}

function Explosion() {
  document.getElementById("buy").style.top = "-100%";
  document.getElementById("smoke").style.top = "5%";
}

function CloseExplosion() {
  document.getElementById("buy").style.top = "5%";
  document.getElementById("smoke").style.top = "-100%";
}

function Novel() {
  document.getElementById("buy").style.top = "-100%";
  document.getElementById("visualNovel").style.top = "5%";
}

function NovelClose() {
  document.getElementById("buy").style.top = "5%";
  document.getElementById("visualNovel").style.top = "-100%";
}

window.onload = indexDados;

// função de trocar de skin

var comprado = parseInt(localStorage.getItem("CoinScore"));
var saldo;
var DieSkin = 1;
var CarSkin = 1;
var DieCarSkin = 1;
var RunSkin = 1;
var dinheiro = parseInt(localStorage.getItem("CoinScore"));

function None() {
  DieCarSkin = 1;
  localStorage.setItem("DieCarSkin", 1);
}

function Pink() {
  var s2;

  if (parseInt(localStorage.getItem("s2"))) {
    s2 = parseInt(localStorage.getItem("s2"));
  } else {
    s2 = 0;
  }

  if (dinheiro >= 350) {
    saldo = comprado - 350;
    localStorage.setItem("CoinScore", saldo);
    DieCarSkin = 2;
    localStorage.setItem("DieCarSkin", DieCarSkin);
    s2 = 1;
    localStorage.setItem("s2", 1);
    location.reload();
  }

  if (s2 === 1) {
    DieCarSkin = 2;
    localStorage.setItem("DieCarSkin", DieCarSkin);
  }

  if (dinheiro <= 349 && s2 === 0) {
    alert("Saldo Insuficiente!");
  }
}

function Crash() {
  var s3;

  if (parseInt(localStorage.getItem("s3"))) {
    s3 = parseInt(localStorage.getItem("s3"));
  } else {
    s3 = 0;
  }

  if (dinheiro >= 500) {
    saldo = comprado - 500;
    localStorage.setItem("CoinScore", saldo);
    DieCarSkin = 3;
    localStorage.setItem("DieCarSkin", DieCarSkin);
    s3 = 1;
    localStorage.setItem("s3", 1);
    location.reload();
  }

  if (s3 === 1) {
    DieCarSkin = 3;
    localStorage.setItem("DieCarSkin", DieCarSkin);
  }

  if (dinheiro <= 499 && s3 === 0) {
    alert("Saldo insuficiente!");
  }
}

function Normal() {
  CarSkin = 1;
  localStorage.setItem("CarSkin", CarSkin);
}

function Carrinho() {
  var c2;

  if (parseInt(localStorage.getItem("c2"))) {
    c2 = parseInt(localStorage.getItem("c2"));
  } else {
    c2 = 0;
  }

  if (dinheiro >= 350) {
    saldo = comprado - 350;
    localStorage.setItem("CoinScore", saldo);
    CarSkin = 2;
    localStorage.setItem("CarSkin", CarSkin);
    c2 = 1;
    localStorage.setItem("c2", 1);
    location.reload();
  }

  if (c2 === 1) {
    CarSkin = 2;
    localStorage.setItem("CarSkin", CarSkin);
  }

  if (dinheiro <= 349 && c2 === 0) {
    alert("Saldo insuficiente!");
  }
}

function Carrao() {
  var c3;

  if (parseInt(localStorage.getItem("c3"))) {
    c3 = parseInt(localStorage.getItem("c3"));
  } else {
    c3 = 0;
  }

  if (dinheiro >= 500) {
    saldo = comprado - 500;
    localStorage.setItem("CoinScore", saldo);
    CarSkin = 3;
    localStorage.setItem("CarSkin", CarSkin);
    c3 = 1;
    localStorage.setItem("c3", 1);
    location.reload();
  }

  if (c3 === 1) {
    CarSkin = 3;
    localStorage.setItem("CarSkin", CarSkin);
  }

  if (dinheiro <= 499 && c3 === 0) {
    alert("Saldo insuficiente!");
  }
}

function Die() {
  DieSkin = 1;
  localStorage.setItem("DieSkin", DieSkin);
}

function Olho() {
  var d2;

  if (parseInt(localStorage.getItem("d2"))) {
    d2 = parseInt(localStorage.getItem("d2"));
  } else {
    d2 = 0;
  }

  if (dinheiro >= 350) {
    saldo = comprado - 350;
    localStorage.setItem("CoinScore", saldo);
    DieSkin = 2;
    localStorage.setItem("DieSkin", DieSkin);
    d2 = 1;
    localStorage.setItem("d2", 1);
    location.reload();
  }

  if (d2 === 1) {
    DieSkin = 2;
    localStorage.setItem("DieSkin", DieSkin);
  }

  if (dinheiro <= 349 && d2 === 0) {
    alert("Saldo insuficiente!");
  }
}

function Caveira() {
  var d3;

  if (parseInt(localStorage.getItem("d3"))) {
    d3 = parseInt(localStorage.getItem("d3"));
  } else {
    d3 = 0;
  }

  if (d3 === 1) {
    DieSkin = 3;
    localStorage.setItem("DieSkin", DieSkin);
  }

  if (dinheiro >= 500) {
    saldo = comprado - 500;
    localStorage.setItem("CoinScore", saldo);
    DieSkin = 3;
    localStorage.setItem("DieSkin", DieSkin);
    d3 = 1;
    localStorage.setItem("d3", 1);
    location.reload();
  }

  if (dinheiro <= 499 && d3 === 0) {
    alert("Saldo insuficiente!");
  }
}

function Default() {
  RunSkin = 1;
  localStorage.setItem("RunSkin", RunSkin);
}

function Idk() {
  var r2;

  if (parseInt(localStorage.getItem("r2"))) {
    r2 = parseInt(localStorage.getItem("r2"));
  } else {
    r2 = 0;
  }

  if (dinheiro >= 350) {
    saldo = comprado - 350;
    localStorage.setItem("CoinScore", saldo);
    RunSkin = 2;
    localStorage.setItem("RunSkin", RunSkin);
    r2 = 1;
    localStorage.setItem("r2", 1);
    location.reload();
  }

  if (r2 === 1) {
    RunSkin = 2;
    localStorage.setItem("RunSkin", RunSkin);
  }

  if (dinheiro <= 349 && r2 === 0) {
    alert("Saldo Insuficiente!");
  }
}

function Menina() {
  var r3;

  if (parseInt(localStorage.getItem("r3"))) {
    r3 = parseInt(localStorage.getItem("r3"));
  } else {
    r3 = 0;
  }

  if (dinheiro >= 500) {
    saldo = comprado - 500;
    localStorage.setItem("CoinScore", saldo);
    RunSkin = 3;
    localStorage.setItem("RunSkin", RunSkin);
    r3 = 1;
    localStorage.setItem("r3", 1);
    location.reload();
  }

  if (r3 === 1) {
    RunSkin = 3;
    localStorage.setItem("RunSkin", RunSkin);
  }

  if (dinheiro <= 499 && r3 === 0) {
    alert("Saldo Insuficiente!");
  }
}

function Ideologica() {
  var Identidade;

  if (parseInt(localStorage.getItem("Identidade"))) {
    Identidade = parseInt(localStorage.getItem("Identidade"));
  } else {
    Identidade = 0;
  }

  if (dinheiro >= 500) {
    saldo = comprado - 500;
    localStorage.setItem("CoinScore", saldo);
    localStorage.setItem("Identidade", 1);
    location.reload();
  }

  if (Identidade === 1) {
    localStorage.setItem("Identidade", 1);
  }

  if (dinheiro <= 499 && Identidade === 0) {
    alert("Saldo Insuficiente");
  }
}
