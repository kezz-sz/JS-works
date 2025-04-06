<?php include 'inc/c.php' ?>
<div class="profileInf">
    <div class="profilePics">
        <div class="profileballs">
            <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/b049a0a2e177793ece71c0be0757062dabf8d3be" alt="">
        </div>
        <div class="miniball">
            <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/cde02831698d0d73f7f3690704d9771cf257138d" alt="">
        </div>
        <div class="profileballs">
            <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/4ed3f8c976ef3024ee270be81b5eebcf33c995f0" alt="">
        </div>
        <div class="miniball">
            <img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/e782e69fff0c2bd3f10eb777f0a28b35ba890913" alt="">
        </div>
    </div>
    <div class="editUser">
        <h2 contenteditable="false" id="UserName">UserName:</h2>
        <h2 contenteditable="false" id="UserPhoneNumber">UserPhoneNumber:</h2>
        <h2 contenteditable="false" id="UserEmail">UserEmail:</h2>
        <h2 contenteditable="false" id="UserAddress">UserAddress:</h2>
        <h2 contenteditable="false" id="UserGender">UserGender:</h2>
        <h2 contenteditable="false" id="UserPassWord">***********</h2>
    </div>
    <div class="buttonEdit">
        <button onclick="toggleEdit('UserName')" id="ButtonEditName"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
        <button onclick="toggleEdit('UserPhoneNumber')" id="ButtonEditPhoneNumber"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
        <button onclick="toggleEdit('UserEmail')" id="ButtonEditEmail"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
        <button onclick="toggleEdit('UserAddress')" id="ButtonEditAddress"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
        <button onclick="toggleEdit('UserGender')" id="ButtonEditGender"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
        <button onclick="toggleEdit('UserPassWord')" id="ButtonEditPassWord"><img src="https://www.figma.com/file/jnnwZaYdusHtvTPimBFUV7/image/6559502e5f7517ab4b49e59eafbe9f47691aecfd" alt=""></button>
    </div>
</div>
<?php include 'inc/r.php' ?>