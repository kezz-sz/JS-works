<?php include'inc/c.php' ?>
<div id="temporadas">
        <button onclick="First()">1º Temporada</button>
        <button onclick="First()">2º Temporada</button>
        <button onclick="First()">3º Temporada</button>
        <button onclick="First()">4º Temporada</button>
        <button onclick="First()">5º Temporada</button>
        <button onclick="First()">6º Temporada</button>
        <button onclick="CloseTemporadas()">Fechar</button>
</div>
<div class="corpo1">
    <div class="uniao4">
        <img src="img/dbz.jpg" alt="">
        <h2>Dragon Ball Z</h2>
        <p>Temporadas: 6</p>
        <h3>Avaliações: ⭐⭐⭐⭐⭐</h3>
        <button class="button1" onclick="Temporadas()">Ver Temporadas</button>
        <div class="uniao5">
            <h4>Avalie este anime:</h4>
            <span id="e1" onclick="Estrela1()" class="estrela" data-avaliacao="1">★</span>
            <span id="e2" onclick="Estrela2()" class="estrela" data-avaliacao="2">★</span>
            <span id="e3" onclick="Estrela3()" class="estrela" data-avaliacao="3">★</span>
            <span id="e4" onclick="Estrela4()" class="estrela" data-avaliacao="4">★</span>
            <span id="e5" onclick="Estrela5()" class="estrela" data-avaliacao="5">★</span>
        </div>
    </div>
</div>
<?php include'inc/r.php' ?>