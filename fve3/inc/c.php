<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimePirate</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/A.png" type="image/x-icon">
</head>
<div id="background"></div>
<div id="ep">
    <h1 class="title">Não iria fazer download de todos os eps desses animes... tem muita coisa...</h1>
    <button onclick="CloseEpisodio()" class="buttonEp">Fechar</button>
</div>
<div id="compras">
    <h2>Metodo de pagamento:</h2>
    <div>
        <button class="payment" id="ButtonPix" onclick="Pix()">Pix</button><br>
        <button class="payment" id="ButtonCartao" onclick="Cartao()">Cartão</button><br>
        <button class="payment" id="ButtonGiftCard" onclick="GiftCard()">Gift Card</button><br>
    </div>
    <div class="method" id="Pix">
    <img src="img/QrCode.png" alt="">
    </div>
    <div class="method" id="Cartao">
        <h2>Numero do cartão:</h2>
        <input type="text">
        <h2>Senha do cartão:</h2>
        <input type="text">
    </div>
    <div class="method" id="GiftCard">
        <h2>Insira o Código:</h2>
        <input type="text">
    </div>
    <button class="finalizar" onclick="Finalizar()">Finalizar</button>
</div>
<div id="background"></div>
<body>
    <button onclick="Open()" id="open"><img src="img/mho.png" alt=""></button>
    <div id="burguer">
        <button onclick="Close()" id="close"><img src="img/X.png" alt=""></button>
        <div class="menu">
            <a href="ajuda.php">Ajuda</a>
            <a href="sobre.php">Sobre</a>
            <a href="conta.php">Conta</a>
            <a href="planos.php">Planos</a>
        </div>
        <ul id="menu" class="animes">
            <h2>Mais Animes:</h2>
          <input class="search" type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." autocomplete="off">
          <li class="none"><a href="bleach.php">Bleach</a></li>
          <li class="none"><a href="datealive.php">Date a Live</a></li>
          <li class="none"><a href="chainsawman.php">Chainsaw Man</a></li>
          <li class="none"><a href="jujutsukaisen.php">Jujutsu Kaisen</a></li>
          <li class="none"><a href="bunnygirl.php">Bunny Girl</a></li>
          <li class="none"><a href="renaiflops.php">Renai Flops</a></li>
          <li class="none"><a href="cheatskill.php">Cheat Skill</a></li>
          <li class="none"><a href="yamada.php">Yamada-Kun to Lvl999</a></li>
          <li class="none"><a href="megami.php">Megami no Café Terrace</a></li>
          <li class="none"><a href="bokunokokoro.php">Boku no kokoro</a></li>
          <li class="none"><a href="romantickiller.php">Romantic Killer</a></li>
          <li class="none"><a href="asobi.php">Asobi Asobase</a></li>
          <li class="none"><a href="summertime.php">SummerTime Render</a></li>
          <li class="none"><a href="masamune.php">Masamune-Kun no Revenger</a></li>
          <li class="none"><a href="girlfriend.php">Rent a Girlfriend</a></li>
          <li class="none"><a href="naruto.php">Naruto</a></li>
          <li class="none"><a href="dragonball.php">Dragon Ball Z</a></li>
          <li class="none"><a href="onepiece.php">One Piece</a></li>
          <li class="none"><a href="grisaianokaijutsu.php">Grisaia No Kaijutsu</a></li>
        </ul>
        <div class="efeitinho"></div>
    </div>
    <header>
        <a href="/pfe"><img src="img/A.png" alt=""></a>
    </header>
    <div id="first">
    <ul>
        <li><a href="ep.php">1<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">2<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">3<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">4<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">5<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">6<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">7<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">8<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">9<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">10<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">11<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">12<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">13<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">14<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">15<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">16<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">17<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">18<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">19<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">20<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">21<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">22<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">23<b class="o0">_</b>Episódio</a></li>
        <li><a href="ep.php">24<b class="o0">_</b>Episódio</a></li>
    </ul>
    <button onclick="FirstClose()">Fechar</button>
</div>