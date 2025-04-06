var $;
function showCpf() {
    $(".divCpf").show();
    $(".divCnpj").hide();
};

function showCnpj() {
    $(".divCnpj").show();
    $(".divCpf").hide();
};

$(document).ready(function() {
    $("#radioCpf").click(function() {
        showCpf();
    });
    $("#radioCnpj").click(function() {
        showCnpj();
    });
    showCpf();
});

var nome = "";
var tipoDocumento = "";
var sexo = "";
var email = "";
var estado = "";
var rua = "";
var numero = "";
var bairro = "";
var cep = "";
var complemento = "";
var qtde = "";
var perg = "";

// || --> ou

function myFunction() {
    var x;
    x = document.getElementById("num").value;
    if(isNaN(x) || x <= 0) {
        alert("Quantidade não informada");
        return false;
    }else{
        nome = document.getElementById("nome").value;

        if(radioCpf.checked) {
            tipoDocumento = "cpf";
            doc = document.getElementById("cpf").value;
        }else{
            tipoDocumento = "cnpj";
            doc = document.getElementById("cnpj").value;
        }

        if(idMasc.checked) {
            sexo = "Masculino";
        }else if(idFem.checked) {
            sexo = "Feminino";
        }
        email = document.getElementById("email").value;
        estado = document.getElementById("estado").value;
        rua = document.getElementById("rua").value;
        numero = document.getElementById("numero").value;
        bairro = document.getElementById("bairro").value;
        cep = document.getElementById("cep").value;
        complemento = document.getElementById("comp").value;
        qtde = document.getElementById("num").value;
        perg = document.getElementById("pergunta").value;
        alert("nome: " +nome+ 
              "\n"+tipoDocumento+": " +doc+
              "\nSexo: " +sexo+
              "\nEmail: " +email+
              "\nEstado: " +estado+
              "\nRua: " +rua+
              "\nNúmero: " +numero+
              "\nBairro: " +bairro+
              "\nCEP: " +cep+
              "\nComplemento: " +complemento+
              "\nQuantidade: " +qtde+
              "\nPerguntas: " +perg
        );
        return true;
    }
}