// função do menu hamburguer
function Open() {
	document.getElementById("burguer").style = "right: 0;"
	document.getElementById("open").style = "display: none;"
	document.getElementById("close").style = "display: block;"
}
function Close() {
	document.getElementById("burguer").style = "right: -100%;"
	document.getElementById("open").style = "display: block;"
	document.getElementById("close").style = "display: none;"
}

// função da barra de pesquisa
function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("mySearch");
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

// função para pagar
function Comprar() {
	document.getElementById("background").style = "top: 0;"
	document.getElementById("comprar").style = "top: 10%;"
	localStorage.removeItem("ValorTotal")
	localStorage.setItem("ValorTotal", 0)
	var price = localStorage.getItem("ValorTotal")
	setTimeout(function () {
		document.getElementById("ValorTotalConta").innerHTML = "R$" + price + ",00"
	}, 1000);
}
function Fechar() {
	document.getElementById("background").style = "top: -100%;"
	document.getElementById("comprar").style = "top: -100%;"
}
function Pix() {
	document.getElementById("pix").style = "display: block;"
	document.getElementById("cartao").style = "display: none;"
	document.getElementById("boleto").style = "display: none;"
}
function Cartao() {
	document.getElementById("pix").style = "display: none;"
	document.getElementById("cartao").style = "display: block;"
	document.getElementById("boleto").style = "display: none;"
}
function Boleto() {
	document.getElementById("pix").style = "display: none;"
	document.getElementById("cartao").style = "display: none;"
	document.getElementById("boleto").style = "display: block;"
}

// funções para fazer as coisas dos preço tudo(literalmente tudo)
var kg = 0;
var total = 0;
var preco = 78;
var valor = 0;

function Somar() {
	kg = kg + 1;
	total = kg;
	valor = preco * total;
	document.getElementById("kg").innerHTML = total + "Kg";
	document.getElementById("valor").innerHTML = "R$" + valor;

	if (kg >= 30) {
		kg = 30;
		total = 30;
		document.getElementById("kg").innerHTML = total + "Kg";
	}
	if (valor >= 2340) {
		valor = 2340;
		document.getElementById("valor").innerHTML = "R$" + valor;
	}
}

function Subtrair() {
	kg = kg - 1;
	total = kg;
	valor = preco * total;
	document.getElementById("kg").innerHTML = total + "Kg";
	document.getElementById("valor").innerHTML = "R$" + valor;

	if (kg <= 0) {
		kg = 0;
		total = 0;
		document.getElementById("kg").innerHTML = "Kg";
	}
	if (valor <= 0) {
		valor = 0;
		document.getElementById("valor").innerHTML = "R$" + valor;
	}
}

// função para colocar valores no localStorage para ser puxado depois
function Carrinho() {
	if (parseInt(localStorage.getItem("valorTotal")) <= 0) {
		localStorage.setItem("ValorTotal", valor);
	}

	else {
		var ValorAtual = parseInt(localStorage.getItem('ValorTotal'));
		var NovoValor = ValorAtual + valor;
		localStorage.setItem("ValorTotal", NovoValor);
	}
}

// função do carrinho de compra para abrir e fechar
function CarrinhoClose() {
	document.getElementById("carrinho").style = "margin-top: -100%;";
	document.getElementById("background").style = "top: -100%;";
}
function AbrirCarrinho() {
	document.getElementById("carrinho").style = "margin-top: 12%;";
	document.getElementById("background").style = "top: 0;";
	var ValorTotalConta = localStorage.getItem("ValorTotal");
	document.getElementById("ValorTotalConta").innerHTML = "R$" + ValorTotalConta + ",00";
}

// loading function
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		document.getElementById("charging").style = "opacity: 0;";
	}, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		document.getElementById("charging").style = "display: none;";
	}, 2500);
});

// botões de favoritos
function PH() {
	document.getElementById("ph").style.background = "#7f00b2";
	document.getElementById("ph").onclick = APH;
}
function APH() {
	document.getElementById("ph").style.background = "rgba(72, 0, 99, 0.31)";
	document.getElementById("ph").onclick = PH;
}

function RH() {
	document.getElementById("rh").style.background = "#f00";
	document.getElementById("rh").onclick = ARH;
}
function ARH() {
	document.getElementById("rh").style.background = "rgba(255, 0, 0, 0.38)";
	document.getElementById("rh").onclick = RH;
}

function YH() {
	document.getElementById("yh").style.background = "#FAFF00";
	document.getElementById("yh").onclick = AYH;
}
function AYH() {
	document.getElementById("yh").style.background = "rgba(250, 255, 0, 0.44)";
	document.getElementById("yh").onclick = YH;
}

// função para editar as informações do usuario
function toggleEdit(elementId) {
	var element = document.getElementById(elementId);
	element.contentEditable = element.contentEditable === 'false' ? 'true' : 'false';
	element.focus();

	if (element.contentEditable === 'false') {
		localStorage.setItem(elementId, element.innerText.toString());
	}
}

window.onload = function () {
	var editableElements = document.querySelectorAll('[contenteditable="true"]');
	editableElements.forEach(function (element) {
		var storedValue = localStorage.getItem(element.id);
		if (storedValue) {
			element.innerText = storedValue;
		}
	});
};