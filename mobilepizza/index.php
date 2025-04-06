<?php include'inc/c.php' ?>
    <div class="d1">
    <div class="slideshow-container">
    <div class="slide fade">
      <img src="img/pz1.jpg" alt="Imagem 1">
    </div>
    <div class="slide fade">
      <img src="img/pz2.jpg" alt="Imagem 2">
    </div>
    <div class="slide fade">
      <img src="img/pz3.jpg" alt="Imagem 3">
    </div>
    <div class="slide fade">
      <img src="img/pz4.jpg" alt="Imagem 4">
    </div>
    <div class="slide fade">
      <img src="img/pz5.jpg" alt="Imagem 5">
    </div>
    <a class="prev" onclick="mudarSlide(-1)">&#10094;</a>
    <a class="next" onclick="mudarSlide(1)">&#10095;</a>
  </div>
        <ul class="menu" id="menu">
            <h1>tipos de pizza</h1>
            <input id="search" onkeyup="myFunction()" type="text" placeholder="Search.." title="search your order..">
            <li class="none"><a href="http://localhost/tpfe/csp.php">Paulista</a></li>
            <li class="none"><a href="http://localhost/tpfe/ct.php">Tudo</a></li>
            <li class="none"><a href="http://localhost/tpfe/cpt.php">Palmito</a></li>
            <li class="none"><a href="http://localhost/tpfe/cq.php">4 Queijos</a></li>
            <li class="none"><a href="http://localhost/tpfe/cpp.php">Peperoni</a></li>
            <li class="none"><a href="http://localhost/tpfe/ccl.php">Calabresa</a></li>
            <li class="none"><a href="http://localhost/tpfe/cprt.php">Portuguesa</a></li>
            <li class="none"><a href="http://localhost/tpfe/cmt.php">Marguerita</a></li>
            <li class="none"><a href="http://localhost/tpfe/cfcc.php">Frango com catupiry</a></li>
            <li class="none"><a href="http://localhost/tpfe/cmc.php">Muçarela</a></li>
            <li class="none"><a href="http://localhost/tpfe/cn.php">Napolitana</a></li>
            <li class="none"><a href="http://localhost/tpfe/cc.php">Chocolate</a></li>
    </ul>
    <div class="d4">
        <ul>
            <h1> Temos Diversos tipos de pizza, entre eles:</h1>
            <li>Paulista:</li>
                <p>Molho de tomate, muçarela, presunto, palmito, champignon e bacon;   </p>
            <li>Tudo:</li>
                <p>junção de todas as pizzas, removendo os sabores de grande contraste;</p>
            <li>Palmito:</li>
                <p>Palmito, molho da casa, queijo e presunto;</p>
            <li>4 Queijos:</li>
                <p>Queijo muçarela, queijo parmesão, queijo provarole, queijo gorgonzola, molho da casa e presunto;</p>
            <li>Peperoni:</li>
                <p>carne bovina, de porco, gordura e temperado com pepperoncino, que é semelhante a pimenta malagueta;</p>
            <li>Calebresa:</li>
                <p>molho de tomate, linguiça calabresa defumada e queijo parmesão;</p>
            <li>Portuguesa:</li>
                <p>Molho de tomate, queijo muçarela, azeitona, ovo, tomate e presunto;</p>
            <li>Marguerita:</li>
                <p>Ovo, molho de tomate, queijo muçarela, tomate e folhas de manjericão;</p>
            <li>Frango com catupiry:</li>
                <p>Peito de Frango, molho de tomate, batata palha, queijo parmesão e catupiry;</p>
            <li>Muçarela:</li>
                <p>molho de tomate e queijo muçarela;</p>
            <li>Napolitana:</li>
                <p>Queijo muçarela, tomate, peperoni e molho de tomate;</p>
            <li>Chocolate:</li>
                <p>Cocolate, castanhas e morango;</p>
        </ul>
    </div>
        </div>
        <script src="js/scriptsS.js"></script>
<?php include'inc/r.php' ?>