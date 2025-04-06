// Histórico //
var tiposDePizza = [
    "Paulista",
    "Tudo",
    "Palmito",
    "4 Queijos",
    "Peperoni",
    "Calabresa",
    "Portuguesa",
    "Marguerita",
    "Frango com Catupiry",
    "Muçarela",
    "Napolitana",
    "Chocolate"
  ];
  
  function gerarHorarioAleatorio() {
    var horas = Math.floor(Math.random() * 24); 
    var minutos = Math.floor(Math.random() * 60); 
    var pizzaAleatoria = tiposDePizza[Math.floor(Math.random() * tiposDePizza.length)];
  
    return (
      horas.toString().padStart(2, "0") +
      "H " +
      minutos.toString().padStart(2, "0") +
      "Min| " +
      pizzaAleatoria
    );
  }
  
  var listaHorarios = document.getElementById("horarios").getElementsByTagName("li");
  
  for (var i = 0; i < listaHorarios.length; i++) {
    listaHorarios[i].textContent = gerarHorarioAleatorio();
  }
    // fim do script do histórico //