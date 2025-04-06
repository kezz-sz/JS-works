// script da barra de pesquisa //
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
        li[i].classList.add("none");
      }
    }
    
    var hiddenItems = ul.getElementsByClassName("none");
    for (i = 0; i < hiddenItems.length; i++) {
      a = hiddenItems[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        hiddenItems[i].style.display = "";
        hiddenItems[i].classList.remove("none");
      }
    }
  
    if (filter === '') {
      for (i = 0; i < li.length; i++) {
        if (!li[i].classList.contains('none')) {
          li[i].style.display = 'none';
          li[i].classList.add('none');
        }
      }
    }
  }
  // fim do script da barra de pesquisa //
// Pagamento Calculadora Script //
function calcular(oper) {
  var valor1 = 45.50
  var valor2 = document.calcform.valor2.value;

  if (oper == "somar") {
     var res = parseInt(valor1) + parseInt(valor2);
  } else {
     if (oper == "subtrair") {
        var res = valor1-valor2;
     } else {
        if (oper == "multiplicar") {
           var res = valor1*valor2;
        } else {
           var res = valor1/valor2;
        }
     }
  }
  document.calcform.res.value = res;
}
//Fim do script da calculadora pagamento //
// forma de pagamento //
function handlePaymentMethodChange() {
  var paymentMethodSelect = document.getElementById("pms");
  var qrcodeImage = document.getElementById("qrcode");
  var cardNumberHeading = document.getElementById("cardNumberHeading");
  var cardNumberInput = document.getElementById("cardNumberInput");
  var cpfHeading = document.getElementById("cpfHeading");
  var cpfInput = document.getElementById("cpfInput");

  if (paymentMethodSelect.value === "pix") {
    qrcodeImage.classList.remove("qrc1s");
    cardNumberHeading.classList.add("qrc1s");
    cardNumberInput.classList.add("qrc1s");
    cpfHeading.classList.add("qrc1s");
    cpfInput.classList.add("qrc1s");
  } else if (paymentMethodSelect.value === "cartao" || paymentMethodSelect.value === "cartao2") {
    qrcodeImage.classList.add("qrc1s");
    cardNumberHeading.classList.remove("qrc1s");
    cardNumberInput.classList.remove("qrc1s");
    cpfHeading.classList.remove("qrc1s");
    cpfInput.classList.remove("qrc1s");
  } else if (paymentMethodSelect.value === "Dinheiro") {
    qrcodeImage.classList.add("qrc1s");
    cardNumberHeading.classList.add("qrc1s");
    cardNumberInput.classList.add("qrc1s");
    cpfHeading.classList.add("qrc1s");
    cpfInput.classList.add("qrc1s");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  handlePaymentMethodChange();
});
// fim do script da forma de pagamento //
// timer //
function startTimer(duration, display) {
  var timer = duration, hours, minutes, seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt((timer % 3600) % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var display = document.getElementById("timer");
  var duration = 1 * 60 * 60 + 10 * 60;

  startTimer(duration, display);
};
// fim do script do timer //