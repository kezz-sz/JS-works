function Open(){
    document.getElementById("burguer").style="right: 0%;"
    document.getElementById("close").style="display: block;"
    document.getElementById("open").style="display: none;"
}

function Close(){
    document.getElementById("burguer").style="right: -100%;"
    document.getElementById("close").style="display: none;"
    document.getElementById("open").style="display: block;"
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
        li[i].classList.add("none");
      }
    }
    
    var hiddenItems = ul.getElementsByClassName("none");
    for (i = 0; i < hiddenItems.length; i++) {
      a = hiddenItems[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        hiddenItems[i].style.display = "";
        hiddenItems[i].classList.remove("none");
      }
    }
  
    if (filter === '') {
      for (i = 0; i < li.length; i++) {
        if (!li[i].classList.contains('none')) {
          li[i].style.display = 'none';
          li[i].classList.add('none');
        }
      }
    }
  }
/*
const profilePicInput = document.getElementById('profilePicInput');
const profilePic = document.getElementById('profilePic');

profilePicInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
      document.getElementById("profilePic").style="filter: none;"
    };
    reader.readAsDataURL(file);
  }
});
*/

profilePicInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
      document.getElementById("profilePic").style = "filter: none;";
      
      const imageBase64 = e.target.result;
      localStorage.setItem('profilePicture', imageBase64);
    };
    reader.readAsDataURL(file);
  }
});

window.addEventListener('load', function() {
  const storedImage = localStorage.getItem('profilePicture');
  if (storedImage) {
    profilePic.src = storedImage;
    document.getElementById("profilePic").style = "filter: none;";
  }
});

function Restart(){
  localStorage.removeItem('profilePicture');
  localStorage.removeItem('userPhoneNumber');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userGender');
}

function saveToLocalStorage(key, element) {
  localStorage.setItem(key, element.innerHTML);
}

function loadFromLocalStorage(key, element) {
  const data = localStorage.getItem(key);
  if (data) {
    element.innerHTML = data;
  }
}

const userPhoneNumber = document.getElementById('userPhoneNumber');
const editPhoneNumberButton = document.getElementById('editPhoneNumberButton');

editPhoneNumberButton.addEventListener('click', function () {
  userPhoneNumber.innerHTML = '';
  userPhoneNumber.contentEditable = true;
  userPhoneNumber.focus();
});

userPhoneNumber.addEventListener('blur', function () {
  userPhoneNumber.contentEditable = false;
  saveToLocalStorage('userPhoneNumber', userPhoneNumber);
});

const userName = document.getElementById('userName');
const editNameButton = document.getElementById('editNameButton');

editNameButton.addEventListener('click', function () {
  userName.innerHTML = '';
  userName.contentEditable = true;
  userName.focus();
});

userName.addEventListener('blur', function () {
  userName.contentEditable = false;
  saveToLocalStorage('userName', userName);
});

const userEmail = document.getElementById('userEmail');
const editEmailButton = document.getElementById('editEmailButton');

editEmailButton.addEventListener('click', function () {
  userEmail.innerHTML = '';
  userEmail.contentEditable = true;
  userEmail.focus();
});

userEmail.addEventListener('blur', function () {
  userEmail.contentEditable = false;
  saveToLocalStorage('userEmail', userEmail);
});

const userGender = document.getElementById('userGender');
const editGenderButton = document.getElementById('editGenderButton');

editGenderButton.addEventListener('click', function () {
  userGender.innerHTML = '';
  userGender.contentEditable = true;
  userGender.focus();
});

userGender.addEventListener('blur', function () {
  userGender.contentEditable = false;
  saveToLocalStorage('userGender', userGender);
});

window.addEventListener('load', function () {
  loadFromLocalStorage('userPhoneNumber', userPhoneNumber);
  loadFromLocalStorage('userName', userName);
  loadFromLocalStorage('userEmail', userEmail);
  loadFromLocalStorage('userGender', userGender);
});


/*
const userPhoneNumber = document.getElementById('userPhoneNumber');
const editPhoneNumberButton = document.getElementById('editPhoneNumberButton');

editPhoneNumberButton.addEventListener('click', function () {
  document.getElementById("userPhoneNumber").innerHTML = null
  userPhoneNumber.contentEditable = true;
  userPhoneNumber.focus();
});

userPhoneNumber.addEventListener('blur', function () {
  userPhoneNumber.contentEditable = false;
});
const userName = document.getElementById('userName');
const editNameButton = document.getElementById('editNameButton');

editNameButton.addEventListener('click', function () {
  document.getElementById("userName").innerHTML = null
  userName.contentEditable = true;
  userName.focus();
});

userName.addEventListener('blur', function () {
  userName.contentEditable = false;
});
const userEmail = document.getElementById('userEmail');
const editEmailButton = document.getElementById('editEmailButton');

editEmailButton.addEventListener('click', function () {
  document.getElementById("userEmail").innerHTML = null
  userEmail.contentEditable = true;
  userEmail.focus();
});

userEmail.addEventListener('blur', function () {
  userEmail.contentEditable = false;
});
const userGender = document.getElementById('userGender');
const editGenderButton = document.getElementById('editGenderButton');

editGenderButton.addEventListener('click', function () {
  document.getElementById("userGender").innerHTML = null
  userGender.contentEditable = true;
  userGender.focus();
});

userGender.addEventListener('blur', function () {
  userGender.contentEditable = false;
});
*/
function Passar() {
  const animesContainer = document.querySelector(".animes-container");
  const animes = document.querySelectorAll(".anime");

  const ultimoAnime = animes[animes.length - 1];
  animesContainer.removeChild(ultimoAnime);
  animesContainer.insertBefore(ultimoAnime, animes[0]);

  animesContainer.classList.add("slide-animation");
  
  setTimeout(() => {
      animesContainer.classList.remove("slide-animation");
  }, 500); 
}
function Passar() {
  const animesContainer = document.querySelector(".animes-container");
  const animes = document.querySelectorAll(".anime");

  const primeiroAnime = animes[0];
  animesContainer.removeChild(primeiroAnime);
  animesContainer.appendChild(primeiroAnime);
}
function Comprar(){
  document.getElementById("background").style="display: block;"
  document.getElementById("compras").style="display: block;"
}
function Finalizar(){
  document.getElementById("background").style="display: none;"
  document.getElementById("compras").style="display: none;"
}
function Pix(){
  document.getElementById("Pix").style="display: block;"
  document.getElementById("Cartao").style="display: none;"
  document.getElementById("GiftCard").style="display: none;"
  document.getElementById("ButtonPix").style="opacity: 0;"
  document.getElementById("ButtonCartao").style="opacity: 1;"
  document.getElementById("ButtonGiftCard").style="opacity: 1;"
}
function Cartao(){
  document.getElementById("Cartao").style="display: block;"
  document.getElementById("Pix").style="display: none;"
  document.getElementById("GiftCard").style="display: none;"
  document.getElementById("ButtonPix").style="opacity: 1;"
  document.getElementById("ButtonCartao").style="opacity: 0;"
  document.getElementById("ButtonGiftCard").style="opacity: 1;"
}
function GiftCard(){
  document.getElementById("GiftCard").style="display: block;"
  document.getElementById("Pix").style="display: none;"
  document.getElementById("Cartao").style="display: none;"
  document.getElementById("ButtonPix").style="opacity: 1;"
  document.getElementById("ButtonGiftCard").style="opacity: 0;"
  document.getElementById("ButtonCartao").style="opacity: 1;"
}
function First(){
  document.getElementById("first").style="opacity: 1; z-index: 999;"
  document.getElementById("temporadas").style="opacity: 0; z-index: -1;"
}
function FirstClose(){
  document.getElementById("first").style="opacity: 0; z-index: -1;"
  document.getElementById("temporadas").style="opacity: 1; z-index: 999;"
}
function Second(){
  document.getElementById("second").style="opacity: 1; z-index: 999;"
  document.getElementById("temporadas").style="opacity: 0; z-index: -1;"
}
function SecondClose(){
  document.getElementById("second").style="opacity: 0; z-index: -1;"
  document.getElementById("temporadas").style="opacity: 1; z-index: 999;"
}
function Third(){
  document.getElementById("third").style="opacity: 1; z-index: 999;"
  document.getElementById("temporadas").style="opacity: 0; z-index: -1;"
}
function ThirdClose(){
  document.getElementById("third").style="opacity: 0; z-index: -1;"
  document.getElementById("temporadas").style="opacity: 1; z-index: 999;"
}
function Fourth(){
  document.getElementById("fourth").style="opacity: 1; z-index: 999;"
  document.getElementById("temporadas").style="opacity: 0; z-index: -1;"
}
function FourthClose(){
  document.getElementById("fourth").style="opacity: 0; z-index: -1;"
  document.getElementById("temporadas").style="opacity: 1; z-index: 999;"
}
function Temporadas(){
  document.getElementById("temporadas").style="opacity: 1; z-index: 999;"
  document.getElementById("background").style="display: block;"
}
function CloseTemporadas(){
  document.getElementById("temporadas").style="opacity: 0; z-index: -1;"
  document.getElementById("background").style="display: none;"
}
function Estrela1(){
  document.getElementById("e1").style="color: #ffac33;"
  document.getElementById("e2").style="color: #ccc;"
  document.getElementById("e3").style="color: #ccc;"
  document.getElementById("e4").style="color: #ccc;"
  document.getElementById("e5").style="color: #ccc;"
}
function Estrela2(){
  document.getElementById("e1").style="color: #ffac33;"
  document.getElementById("e2").style="color: #ffac33;"
  document.getElementById("e3").style="color: #ccc;"
  document.getElementById("e4").style="color: #ccc;"
  document.getElementById("e5").style="color: #ccc;"
}
function Estrela3(){
  document.getElementById("e1").style="color: #ffac33;"
  document.getElementById("e2").style="color: #ffac33;"
  document.getElementById("e3").style="color: #ffac33;"
  document.getElementById("e4").style="color: #ccc;"
  document.getElementById("e5").style="color: #ccc;"
}
function Estrela4(){
  document.getElementById("e1").style="color: #ffac33;"
  document.getElementById("e2").style="color: #ffac33;"
  document.getElementById("e3").style="color: #ffac33;"
  document.getElementById("e4").style="color: #ffac33;"
  document.getElementById("e5").style="color: #ccc;"
}
function Estrela5(){
  document.getElementById("e1").style="color: #ffac33;"
  document.getElementById("e2").style="color: #ffac33;"
  document.getElementById("e3").style="color: #ffac33;"
  document.getElementById("e4").style="color: #ffac33;"
  document.getElementById("e5").style="color: #ffac33;"
}
function Episodio(){
  document.getElementById("ep").style="opacity: 1; z-index: 999;"
  document.getElementById("background").style="display: block;"
}
function CloseEpisodio(){
  document.getElementById("ep").style="opacity: 0; z-index: -1;"
  document.getElementById("background").style="display: none;"
}