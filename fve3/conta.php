<?php include'inc/c.php' ?>
    <div class="corpo1">
    <div class="user">
        <h2 id="userName">Seu Nome:</h2>
        <button id="editNameButton"><img src="img/lapis.png" alt=""></button>
        <h2 id="userPhoneNumber">Seu número de celular:</h2>
        <button id="editPhoneNumberButton"><img src="img/lapis.png" alt=""></button>
        <h2 id="userEmail">Seu Email:</h2>
        <button id="editEmailButton"><img src="img/lapis.png" alt=""></button>
        <h2 id="userGender">Seu Gênero:</h2>
        <button id="editGenderButton"><img src="img/lapis.png" alt=""></button>
    </div>
    <form id="profileForm">
        <img id="profilePic" src="img/perfil.png" alt="Profile Picture">
        <button onclick="Restart()"><img src="img/restart.png" alt=""></button>
        <label for="profilePicInput"><img src="img/camera.png" alt=""></label>
        <input name="profilePicInput" type="file" id="profilePicInput" accept="image/*">
    </form>
    <h1 class="fav">Favoritos:</h1>
    <div class="uniao animes-container">
    <a class="anime" id="a1" href="">
        <div class="favs">
            <img src="img/jjk.jpg" alt="">
            <h3>Jujutsu Kaisen</h3>
        </div>
    </a>
    <a class="anime" id="a2" href="">
        <div class="favs">
            <img src="img/dal.jpg" alt="">
            <h3>Date a Live</h3>
        </div>
    </a>
    <a class="anime" id="a3" href="">
        <div class="favs">
            <img src="img/bng.png" alt="">
            <h3>Bunny Girl</h3>
        </div>
    </a>
    <a class="anime" id="a4" href="">
        <div class="favs">
            <img src="img/bleach.jpg" alt="">
            <h3>Bleach</h3>
        </div>
    </a>
    <a class="passar" onclick="Passar()">
        <img src="img/maior.png" alt="">
    </a>
    </div>
    </div>
<?php include'inc/r.php' ?>