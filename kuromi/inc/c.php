<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuromi's Fruit</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/937cb377e6028d4c09d5c5941758b5a170f2aedc" type="image/x-icon">
</head>
<div id="background">

</div>
<div id="comprar">
    <button onclick="Pix()">Pix</button>
    <button onclick="Cartao()">Cartão</button>
    <button onclick="Boleto()">Boleto</button>
    <img src="" alt="" id="pix">
    <div id="cartao">
        <h2 class="title">Numero do cartão:</h2>
        <input type="number">
        <h2 class="title">CPF:</h2>
        <input type="number">
    </div>
    <img src="" alt="" id="boleto">
    <button onclick="Fechar()">Fechar</button>
</div>
<button id="open" onclick="Open()">
    <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/dcf0b22708be12b7f5de111edf8d8e07a7178bfa" alt="">
</button>
<div id="burguer">
    <button id="close" onclick="Close()">
        <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/b8d3e514bb0b0d328c46aa8466977a39295e9ab1" alt="">
    </button>
    <div class="menu">
        <a href="sobre.php">Sobre</a>
        <a href="conta.php">Conta</a>
        <a href="ajuda.php">Ajuda</a>
        <a href="config.php">Config</a>
    </div>
    <ul id="menu">
        <input class="search" type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." autocomplete="off">
        <li class="none"><a href="cereja.php">Cereja</a></li>
        <li class="none"><a href="morango.php">Morango</a></li>
        <li class="none"><a href="melancia.php">Melancia</a></li>
        <li class="none"><a href="amora.php">Amora</a></li>
        <li class="none"><a href="maca.php">Maçã</a></li>
        <li class="none"><a href="framboesa.php">Framboesa</a></li>
        <li class="none"><a href="mirtilo.php">Mirtilo</a></li>
        <li class="none"><a href="uva.php">Uva</a></li>
        <li class="none"><a href="jabuticaba.php">Jabuticaba</a></li>
        <li class="none"><a href="banana.php">Banana</a></li>
        <li class="none"><a href="maracuja.php">Maracujá</a></li>
        <li class="none"><a href="manga.php">Manga</a></li>
        <li class="none"><a href="abacaxi.php">Abacaxi</a></li>
        <li class="none"><a href="laranja.php">Laranja</a></li>
        <li class="none"><a href="mamao.php">Mamão</a></li>
    </ul>
</div>
<body>
    <header>
        <a href="/3ºtri/agrinho"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/937cb377e6028d4c09d5c5941758b5a170f2aedc" alt=""></a>
    </header>
    <div class="corpo">