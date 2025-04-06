<?php include'inc/c.php' ?>
    <div class="cpm1">
        <div class="cpm2">
             <h1>Forma de pagamento:</h1>
             <select name="pms" id="pms" class="pm1" onchange="handlePaymentMethodChange()">
                <option value="pix">Pix</option>
                <option value="cartao">Cartão de Crédito</option>
                <option value="cartao2">Cartão de Débito</option>
                <option value="Dinheiro">Dinheiro</option>
             </select>
        <img id="qrcode" class="qrc1 qrc1s" src="img/qrcode.jpg" alt="Qrcode">
        <h1 id="cardNumberHeading" class="qrc1s">Numero do Cartão:</h1>
        <input id="cardNumberInput" class="qrc1s qpm1" type="text">
        <h1 id="cpfHeading" class="qrc1s">CPF:</h1>
        <input id="cpfInput" class="qrc1s qpm1" type="text">
        </div>
        <div class="cpm3">
        <form name="calcform" method="post" action="">
        <h1>Quantidade:</h1>
            <input type="text" name="valor2" id="valor2" class="qpm1">
            <h1>Preço:</h1>
            <input type="text" name="res" id="res"  class="qpm1" type="text">
            <input type="button" value="Calcular" class="bcpm1" onclick="calcular(document.calcform.oper.value)">
            <select class="redondinho1" name="oper" id="oper">
           <option value="multiplicar">Multiplicar</option>
           </select>
            </form>
        </div>
        <a class="bfpm1" href="http://localhost/tpfe/fpma.php">Confirmar</a>
    </div>
<?php include'inc/r.php' ?>