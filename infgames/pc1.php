<?php include 'inc/cabecalho.inc.php' ?>
    <title>InfGames - Notebooks</title>
    <link rel="stylesheet" type="text/css" href="css/novidades.css">
    <div class="container">
        <div class="produtos">
           <h1>Computador Gamer</h1>
           <form method="post" action="comprar.php">
                <fieldset class="modelo">

                    <legend>Escolha o Pc que mais combina com seu perfil</legend>
                    <input type="radio" name="modelo" value="preto" id="preto" checked>
                    <label for="preto"><img src="img/pc1.jpg">
                    <div class="texto">
                        <h3>Configuração</h3>
                        <p>
                            Processador: Core i9<br>
                            Memoria Ram: 32Gb<br>
                            Armazendamento: M2 1TB <br>
                            Placa de video: GTX 4070TI <br>
                             Valor: <h2>R$12.000,00 á vista</h2> 
                        </p>
                    </div>
                    </label>
                    <input type="radio" name="modelo" value="rosa" id="rosa">
                    <label for="rosa"><img src="img/pc2.jpg">
                    <div class="texto">
                        <h3>Configuração</h3>
                        <p>
                            Processador: Core i7<br>
                            Memoria Ram: 64Gb<br>
                            Armazendamento: M2 2TB <br>
                            Placa de video: GTX 4070TI <br>
                             Valor: <h2>R$18.000,00 á vista</h2> 
                        </p>
                    </div>
                    </label>
                    <input type="radio" name="modelo" value="roxo" id="roxo">
                    <label for="roxo"><img src="img/pc3.jpg">
                    <div class="texto">
                        <h3>Configuração</h3>
                        <p>
                            Processador: Core i5<br>
                            Memoria Ram: 16Gb<br>
                            Armazendamento: M2 1TB <br>
                            Placa de video: GTX 4070TI <br>
                             Valor: <h2>R$10.000,00 á vista</h2> 
                        </p>
                    </div>
                    </label>
                </fieldset>
                <button class="comprar">Comprar</button>
           </form>
        </div>
    </div>
<?php include 'inc/rodape.inc.php' ?>