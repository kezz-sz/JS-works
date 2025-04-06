function copiarEFormatarDadosLocalStorage() {
    var dadosLocalStorage = localStorage.getItem('avaliacoes');

    if (dadosLocalStorage) {
        var dadosFormatados = JSON.parse(dadosLocalStorage);

        var linhas = [];

        for (var i = 0; i < dadosFormatados.length; i++) {
            var item = dadosFormatados[i];
            var linhaFormatada = `Name: ${item.name}, Rating: ${item.rating}, Comment: ${item.comment}`;
            linhas.push(linhaFormatada);
        }

        var textoFormatado = linhas.join('\n');

        var blob = new Blob([textoFormatado], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'avaliacoes.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        
        alert('Dados copiados e arquivo de texto criado.');
    } else {
        alert('Não há dados no localStorage para fazer download.');
    }
}

var botaoCopiar = document.getElementById('copyButton');
botaoCopiar.addEventListener('click', copiarEFormatarDadosLocalStorage);

const botaoLimpar = document.getElementById("limparLocalStorage");

botaoLimpar.addEventListener("click", function() {
  localStorage.clear('avaliacoes');
  alert("Avaliações limpas com sucesso!");
});
