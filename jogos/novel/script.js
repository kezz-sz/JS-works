/*
preencher todos os espaços vazios com suas respectivas informações quando obtelas! O seu eu do passado ta só escrevendo os códigos, cabe a vc, eu do futuro, termina-los! (e se tiver ficando ca Blenda, larga de ser bundão e chama ela pra sair!);
e boy, por favor, vamo dar um jeito de puxar assunto ca Blenda, ta dando não... Tu vai perder ela, to te falando...
Por favor, preenceher as informações de forma correta, sem errar lugar, horario e emoção, qualquer erro, é um erro cruscial! Favor, seja competente!
não precisa apagar esse comentários dps tmb não, fica ae de recordação, sei que o eu do fututo não vai gostar de ficar usando memória inutil, mas fds? deixa ae brother, tu tem mais de 1Tb de armazenamento, na pior das hipóteses, vc perde 200B de armazenamento, mas fica com uma lição do seu eu do passado!
e anotar a estabilidade mental do dia tmb, pra ver se enlouqueço com esse código tmbKK
a de ontem, dia 11/12/2023 tmb tava susa, só me irritei umas 5x, mas susa
a de hoje, dia 12/12/2023 ta suave, não me irritei nem uma vez
a de hoje, dia 13/12/2023 ta +/-, meu cod não funfo 1x, mas eu consegui arrumar, e só to meio desanimado por que tem muita coisa pra fazer, pra dar 1hora de gameplay precisa ter 720 dialogos... é foda boy...
a principio, hoje, dia 14/12/2023 ta safe... meu codiguin ta funfando perfeitamente!
depois de um tempo... dia 27/12/2023, o código ainda funciona corretamente, mas, acredito que irei dropar desse projeto para realizar o da semana técnica, talvez outra hora eu continue, boa sorte, eu do futuro...
*/

var Menu = document.querySelector(".menu");
var Config = document.querySelector(".config");
var Load = document.querySelector(".load");
var Game = document.querySelector(".game");
var Option = document.querySelector(".options");
var Img = document.querySelector(".menuimg");
var Fundo = document.getElementById("background");
var Step = 1;
var Personagem = document.getElementById("character");
var Fala = document.getElementById("chat");
var Nome = document.getElementById("name");
var Automatico = document.getElementById("automatico");
var Save = document.querySelector(".save");
var Music = document.getElementById("music");
var MusicButton = document.getElementById("musicButton");
var MusicImg = document.getElementById("musicImg");
var MusicP = document.getElementById("musicP");
var HeartAkari = 0;
var HeartMei = 0;
var HeartIzumi = 0;
var HeartKenji = 0;
var HeartRyo = 0;
var Akari = document.getElementById("aka");
var Mei = document.getElementById("me");
var Izumi = document.getElementById("izu");
var Kenji = document.getElementById("ken");
var Ryo = document.getElementById("ry");
var Desapego = 0;
var Male = 0;
var Identidade = parseInt(localStorage.getItem("Identidade"));
var Female = 0;
var Choice = document.querySelector(".choice");
var Nada = document.getElementById("nada");
var SkipButton = document.getElementById("pular");
var Name;

function Dados() {
  PlayMusic();
  if (Name != null) {
  } else {
    Name = "Akashi";
  }
}

const NovelLoop = setInterval(() => {
  if (Step === 1) {
    Fundo.src = "../img/classDay.jpg";
    Personagem.src = "../img/luigi1.png";
    Nome.innerHTML = "Mei";
    Fala.innerHTML = "Olha... Você aí? Dormindo de novo nas aulas? ";
  }

  if (Step === 2) {
    Fala.innerHTML =
      "Resolvi te acordar para você depois não ficar reclamando porque tá com fome... Vá pro refeitório. ";
  }

  if (Step === 3) {
    Fundo.src = "";
    Nome.innerHTML = "...";
    Fala.innerHTML =
      "Então, meio sonolento, você caminha até o refeitorio de sua escola, com o seu lanche, até que...";
    Personagem.src = "";
  }

  if (Step === 4) {
    Fala.innerHTML = "Um menino, esbarra em você.";
  }

  if (Step === 5) {
    Fala.innerHTML = "Opa! Perdão, tudo bem com você? Derrubou seu lanche?";
    Nome.innerHTML = "???";
    Personagem = "";
  }

  if (Step === 6) {
    Fala.innerHTML = "Meu nome é Kenji! Qual o seu?";
  }

  if (Step === 7) {
    Fala.innerHTML =
      "Ah, não, tudo bem, eu me chamo " + Name + ", muito prazer!";
    Nome.innerHTML = Name;
  }

  if (Step === 8) {
    Fala.innerHTML = "Muito prazer " + Name + ", você está em que série?";
    Nome.innerHTML = "Kenji";
  }

  if (Step === 9) {
    Fala.innerHTML = "Eu estou no 2º, e você?";
    Nome.innerHTML = Name;
  }

  if (Step === 10) {
    Fala.innerHTML =
      "Eu estou no 3º, esse ano saio da escola, não sei se é bom, acho que vou sentir saldades das pessoas, pode parecer que não, mas até que foi daora o tempo que passei aqui...";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 11) {
    Fala.innerHTML =
      "Entendo... Não sei como vai ser na minha vez, mas ainda tem 2 anos pra mim aproveitar, então ta tranquilo";
    Nome.innerHTML = Name;
  }

  if (Step === 12) {
    Fala.innerHTML =
      "Haha, eu também pensava assim no meu segundo ano, mas o tempo voa... Ainda nem acredito que estou na 3º série";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 13) {
    Fala.innerHTML =
      "Então, mas é isso, vou indo pro refeitório! Se vemos qualquer hora dessas...";
    Nome.innerHTML = Name;
  }

  if (Step === 14) {
    Fala.innerHTML = "Ah, está bem, até mais! ByeBye...";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 15) {
    Fala.innerHTML =
      "Você vai até o refeitorio, e faz seu lanche, igual todo dia.";
    Nome.innerHTML = "...";
    Personagem.src = "";
    Fundo.src = "";
  }

  if (Step === 16) {
    Fala.innerHTML =
      "Você volta para sua sala caminhando meio rapido, pois encontrol Kenji, e ficaram conversando ao invés de lanchar...";
    Fundo.src = "";
  }

  if (Step === 17) {
    Fala.innerHTML = "Você senta em sua carteira, como sempre";
    Fundo.src = "";
  }

  if (Step === 18) {
    Fala.innerHTML =
      "Sua amiga de infância, que te acordou se aproxima de você";
  }

  if (Step === 19) {
    Fala.innerHTML = "Oie, comeu?";
    Personagem.src = "";
    Nome.innerHTML = "Mei";
  }

  if (Step === 20) {
    Fala.innerHTML = "Ah, comi sim, obrigado por ter me acordado...";
    Nome.innerHTML = Name;
  }

  if (Step === 21) {
    Fala.innerHTML =
      "Só que tive que comer meio rapido, um cara esbarrou em mim no corredor, e ficamos conversando...";
  }

  if (Step === 22) {
    Fala.innerHTML = "É? Quem que esbarrou em você?";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 23) {
    Fala.innerHTML = "Ah, um tal de Kenji, ele é do 3º ano";
    Nome.innerHTML = Name;
  }

  if (Step === 24) {
    Fala.innerHTML = "Sério? Você não lembra que eu ja falei dele pra você?";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 25) {
    Fala.innerHTML =
      "Ãhn? Você já falou dele pra mim? Oque que tem esse cara? Não lembro de nada sobre ele...";
    Nome.innerHTML = Name;
  }

  if (Step === 26) {
    Fala.innerHTML =
      "Não é possível... Ele é aquele cara que queria te pegar, você não lembra? Eu lembro que escutei no ônibus sobre isso...";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 27) {
    Fala.innerHTML = "Que? Esse cara queria me pegar? Desde quando?";
    Nome.innerHTML = Name;
  }

  if (Step === 28) {
    Fala.innerHTML =
      "Boy, a um tempo, faz uns 2 meses já... Mas conta ae, ele falou alguma coisa suspeita?";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 29) {
    Fala.innerHTML =
      "Nah, eu não lembro dele falar nada que desse a entender que ele queria me pegar";
    Nome.innerHTML = Name;
  }

  if (Step === 30) {
    Fala.innerHTML =
      "Ah, então provavelmente ele nem quer mais nada contigo... Relaxa.";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 31) {
    Fala.innerHTML = "Não sei se isso é bom, mas massa...";
    Nome.innerHTML = Name;
  }

  if (Step === 32) {
    Fala.innerHTML = "Ah, mas ta bom, irei para minha carteira!";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 33) {
    Fala.innerHTML =
      "Seu dia segue normalmente, vendo o resto de suas aulas...";
    Nome.innerHTML = "...";
    Personagem = "";
  }

  if (Step === 34) {
    Fala.innerHTML = "Após um longo dia, ouvindo suas aulas, você vai até Mei";
  }

  if (Step === 35) {
    Fala.innerHTML = "Ow, Mei, você vai comigo embora?";
    Nome.innerHTML = Name;
  }

  if (Step === 36) {
    Fala.innerHTML =
      "Ah, eu não vou com você hoje não, eu vou passar na loja da minha mãe hoje";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 37) {
    Fala.innerHTML = "ByeBye...";
  }

  if (Step === 38) {
    Fala.innerHTML = "Ah, tudo bem, ByeBye";
    Nome.innerHTML = Name;
    Personagem.src = "";
  }

  if (Step === 39) {
    Fala.innerHTML =
      "Então, sozinho você caminha até a saida da escola, onde novamente esbarram em você...";
    Nome.innerHTML = "...";
  }

  if (Step === 40) {
    Fala.innerHTML = "Ah, opa, desculpa, ta tudo bem?";
    Nome.innerHTML = "???";
    Fundo.src = "";
    Personagem.src = "";
  }

  if (Step === 41) {
    Fala.innerHTML = "Ah, não, tudo bem, qual seu nome?";
    Nome.innerHTML = Name;
  }

  if (Step === 42) {
    Fala.innerHTML = "Meu nome é Izumi, e o seu?";
    Nome.innerHTML = "???";
  }

  if (Step === 43) {
    Fala.innerHTML = "Ah, nome daora... Meu nome é " + Name;
    Nome.innerHTML = Name;
  }

  if (Step === 44) {
    Fala.innerHTML = "Teu nome também é legal, mas você mora pra la?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 45) {
    Fala.innerHTML = "Moro sim, por que?";
    Nome.innerHTML = Name;
  }

  if (Step === 46) {
    Fala.innerHTML = "Você está indo sozinho para casa?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 47) {
    Fala.innerHTML = "To indo sim, por que?";
    Nome.innerHTML = Name;
  }

  if (Step === 48) {
    Fala.innerHTML =
      "Eu também moro pra esse lado, quer ir comigo? eu também vou sozinha";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 49) {
    Fala.innerHTML =
      "Eu só vou dizer tchau pros meus amigos, ja volto, me espera ai!";
    Personagem.src = "";
  }

  if (Step === 50) {
    Fala.innerHTML = "Enquanto você esperava, Kenji se aproxima de você";
    Nome.innerHTML = "...";
  }

  if (Step === 51) {
    Fala.innerHTML =
      "Olá! Eu moro pro mesmo lado que você, ta afim de ir comigo?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 52) {
    Choice.style.top = "20%";
    Mei.style.display = "none";
    Akari.style.display = "none";
    Nada.style.display = "none";
    Ryo.style.display = "none";
    Kenji.innerHTML = "Ir com o Kenji";
    Izumi.innerHTML = "Ir com a Izumi";
  }

  if (Step >= 53 && HeartKenji === 0 && HeartIzumi === 0) {
    Step = 52;
  }

  if (Step === 53) {
    Choice.style.top = "-100%";
    Mei.style.display = "block";
    Akari.style.display = "block";
    Ryo.style.display = "block";
    Nada.style.display = "block";
  }

  if (Step === 53 && HeartKenji === 1) {
    Fala.innerHTML = "Ah, eu vou com você kenji!";
    Nome.innerHTML = Name;
  }

  if (Step === 53 && HeartIzumi === 1) {
    Fala.innerHTML = "Eu vou com a Izumi, desculpa!";
    Nome.innerHTML = Name;
  }

  if (Step === 54 && HeartKenji === 1) {
    Fala.innerHTML = "Ok, vamos indo?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 54 && HeartIzumi === 1) {
    Fala.innerHTML = "Ok então, eu ja vou indo, tchau, até amanhã...";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 55 && HeartKenji === 1) {
    Fala.innerHTML =
      "Eu tenho que esperar a Izumi aqui, ela disse que queria ir comigo, preciso avisar ela que você vai comigo...";
    Nome.innerHTML = Name;
  }

  if (Step === 55 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Você fica esperando, por mais 5 minutos até que Izumi chegue...";
    Nome.innerHTML = "...";
    Personagem.src = "";
  }

  if (Step === 56 && HeartKenji === 1) {
    Fala.innerHTML = "Então vocês, juntos esperam a Izumi voltar para avisa-la";
    Nome.innerHTML = "...";
  }

  if (Step === 56 && HeartIzumi === 1) {
    Fala.innerHTML = "Oi, voltei, desculpa a demora, vamos?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 57 && HeartKenji === 1) {
    Fala.innerHTML = "Então, você gosta de que?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 57 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Iae, tu gosta de fazer oque? Joga alguma coisa? Quais são seus estilos de musicas favoritos?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 58 && HeartKenji === 1) {
    Fala.innerHTML =
      "Ah, eu gosto de jogar, ouvir musica, ler alguns livros, e você?";
    Nome.innerHTML = Name;
  }

  if (Step === 58 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Ah, eu gosto de jogar qualquer jogo, mas no geral, prefiro os 3D de mundo aberto que da pra fazer qualquer coisa, meu estilo de musica favorito, acho que é rock, mas ouço quase qualquer coisa";
    Nome.innerHTML = Name;
  }

  if (Step === 59 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Mas também gosto de ler alguns livros, acho interessante, mas e você?";
  }

  if (Step === 59 && HeartKenji === 1) {
    Fala.innerHTML =
      "Eu gosto de jogar bola, não sou muito de ficar em casa, prefiro sair, gosto de me divertir com meus amigos";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 60 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Eu gosto também de jogos de videogames, qualquer um pra mim ta bom, eu não curto muito sair, mas até que saio de vez em quando, ouço bastante rock também, qual sua banda ou cantor favorito? E qual tipo de livro vc gosta de ler?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 60 && HeartKenji === 1) {
    Fala.innerHTML = "Massa...";
    Nome.innerHTML = Name;
  }

  if (Step === 61 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Eu gosto muito de uma cantora japonesa chamada minami... Ela toca rock triste, mas ela canta também algumas aberturas de anime, não curto muito as aberturas dela... Mas os tipos de livro que eu gosto, são romance e mistério sobreNatura, acho muito daora!";
    Nome.innerHTML = Name;
  }

  if (Step === 61 && HeartKenji) {
    Fala.innerHTML = "Vocês ficaram em silêncio até chegar em sua casa...";
    Nome.innerHTML = "...";
  }

  if (Step === 62 && HeartIzumi === 1) {
    Fala.innerHTML = "Sério? qual sua musica favorita dela?";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 62 && HeartKenji === 1) {
    Fala.innerHTML = "Então, aqui é minha casa, ByeBye Kenji, até mais...";
    Nome.innerHTML = Name;
  }

  if (Step === 63 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Eu gosto muito da prologue, mas também gosto da kawaki wo ameku";
    Nome.innerHTML = Name;
  }

  if (Step === 63 && HeartKenji === 1) {
    Fala.innerHTML = "Ah, é mesmo? Ok então... Tchau, até mais...";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 64 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Me parece legal, acho que irei ouvir, mas aqui já é minha casa... Até mais...";
    Nome.innerHTML = "Izumi";
    Personagem.src = "";
  }

  if (Step === 65 && HeartIzumi === 1) {
    Fala.innerHTML = "É mesmo? ByeBye, até mais...";
    Nome.innerHTML = Name;
  }

  if (Step === 64 && HeartKenji === 1) {
    Fala.innerHTML =
      "Vocês dão um aperto de mão, e você entra pra dentro de sua casa.";
    Nome.innerHTML = "...";
    Personagem.src = "";
    Step = 68;
  }

  if (Step === 66 && HeartIzumi === 1) {
    Fala.innerHTML = "Vocês dão um abraço, e Izumi entra para dentro de casa";
    Nome.innerHTML = "...";
    Personagem.src = "";
  }

  if (Step === 67 && HeartIzumi === 1) {
    Fala.innerHTML = "Você segue sozinho até sua casa...";
    Personagem.src = "";
  }

  if (Step === 68) {
    Fala.innerHTML = "Você, cansado, deita em sua cama e dorme após seu banho.";
    Nome.innerHTML = "...";
  }

  if (Step === 69) {
    Fala.innerHTML =
      "Você levanta, e se arruma para novamente ir para a escola.";
  }

  if (Step === 70 && HeartKenji === 1) {
    Fala.innerHTML =
      "Mas quando você estava saindo de casa, você se depara com o Kenji";
  }

  if (Step === 70 && HeartIzumi === 1) {
    Fala.innerHTML = "Então você segue normalmente para escola.";
  }

  if (Step === 71 && HeartKenji === 1) {
    Fala.innerHTML = "Eae " + Name + ", bom dia, tudo bom?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 71 && HeartIzumi === 1) {
    Fala.innerHTML =
      "Você encontra uma menina, com o mesmo uniforme de sua escola indo sozinha...";
    Choice.style.top = "20%";
    Mei.style.display = "none";
    Akari.innerHTML = "Ir até ela";
    Ryo.style.display = "none";
    Kenji.style.display = "none";
    Izumi.style.display = "none";
    Nada.innerHTML = "Ignorar";
    SkipButton.disabled = true;
  }

  if (Step === 72 && HeartKenji === 1) {
    Fala.innerHTML = "Eae, tudo bom sim, e com você?";
    Nome.innerHTML = Name;
  }

  if (Step === 72 && HeartIzumi === 1) {
    Choice.style.top = "-100%";
    Mei.style.display = "block";
    Ryo.style.display = "block";
    Kenji.style.display = "block";
    Izumi.style.display = "block";
    SkipButton.disabled = false;
  }

  if (Step === 73 && Desapego === 0 && HeartAkari === 0 && HeartIzumi === 1) {
    Step = 72;
  }

  if (Step === 73 && HeartAkari === 1) {
    Fala.innerHTML =
      "ola, reparei que você estava indo sozinha para escola... tudo bom? Qual teu nome?";
    Nome.innerHTML = Name;
  }

  if (Step === 73 && Desapego === 1) {
    Fala.innerHTML = "Você segue sozinho até a escola";
    Nome.innerHTML = "...";
    Step = 84;
  }

  if (Step === 73 && HeartKenji === 1) {
    Fala.innerHTML = "Tudo bem também... Fez oque quando chegou em casa?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 74 && HeartAkari === 1) {
    Fala.innerHTML =
      "Ah, oii, eu me chamo Akari, E estou bem sim? E você, ta bem? Como se chama?";
    Nome.innerHTML = "Akari";
    Personagem.src = "";
  }

  if (Step === 74 && HeartKenji === 1) {
    Fala.innerHTML = "Ah, nada de mais, fiquei jogando como sempre, e você?";
    Nome.innerHTML = Name;
  }

  if (Step === 75 && HeartAkari === 1) {
    if (Name === "Akashi") {
      Fala.innerHTML =
        "Sério? Bem parecido com o meu, eu me chamo Akashi, teu nome é bonito! Mas você gosta do que tanto? Musica, jogos, livros, filmes, esportes? Oque você gosta de fazer?";
      Nome.innerHTML = Name;
    } else {
      Fala.innerHTML =
        "Nome bonito... Eu me chamo " +
        Name +
        ". Mas oque você gosta de fazer?";
      Nome.innerHTML = Name;
    }
  }

  if (Step === 75 && HeartKenji === 1) {
    Fala.innerHTML = "Eu sai com uns amigos meus ontem pra jogar football";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 76 && HeartAkari === 1) {
    Fala.innerHTML =
      "Ah, obrigada, o seu também é bonito... Eu gosto muito de ler light novels, não curto muito mangá, acho meio chata as figuras... Gosto muito de animes, principalmente os do genero tipo jujutsu Kaizen, Não curto muito filmes, acho muito longo... e de Musica, eu curto bastante J-pop, e com esportes eu não sou muito boa... Mas e você?";
    Nome.innerHTML = "Akari";
    Personagem.src = "";
  }

  if (Step === 76 && HeartKenji === 1) {
    Fala.innerHTML =
      "Você não me passou teu numero de celular, pode me passar?";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 77 && HeartAkari === 1) {
    Fala.innerHTML =
      "Sério? Nossa, eu também gosto de ler light novels, e prefiro elas por que não curto muito os desenhos dos mangás, também gosto de animes, mas também gosto de romance, acho fofo... Também não gosto de filmes por que é muito longo... Também não sou muito bom nos esportes... Mas Musica eu prefiro j-rock, eu curto bastante a Minami, e você? qual seu cantor ou cantora favorita??";
    Nome.innerHTML = Name;
  }

  if (Step === 78 && HeartKenji === 1) {
    Fala.innerHTML = "Claro, quer o qrcode ou quer o número mesmo?";
    Nome.innerHTML = Name;
  }

  if (Step === 79 && HeartAkari === 1) {
    Fala.innerHTML =
      "Eu já ouvi falar dessa minami, não sei onde... Mas eu gosto muito da Yoasobi, acho boa as musicas romanticas dela, são fofas... Mas ja estamos chegando na escola, pode me passar seu número para nós se falarmos depois?";
    Nome.innerHTML = "Akari";
    Personagem.src = "";
  }

  if (Step === 79 && HeartKenji === 1) {
    Fala.innerHTML = "Ah, pode ser por QrCode que é mais facil";
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 80 && HeartAkari === 1) {
    Fala.innerHTML = "Claro, quer o QrCode ou o Número mesmo?";
    Nome.innerHTML = Name;
  }

  if (Step === 80 && HeartKenji === 1) {
    Fala.innerHTML = "Já estamos chegando na escola né...";
    Nome.innerHTML = "Kenji";
  }

  if (Step === 81 && HeartAkari === 1) {
    Fala.innerHTML = "Pode ser o QrCode mesmo";
    Nome.innerHTML = "Akari";
    Personagem.src = "";
  }

  if (Step === 81 && HeartKenji === 1) {
    Fala.innerHTML = "Aham...";
    Nome.innerHTML = Name;
  }

  if (Step === 82 && HeartAkari === 1) {
    Fala.innerHTML =
      "Prontinho, depois se falamos mais, gostei de você! Até depois...";
    Nome.innerHTML = "Akari";
    Personagem.src = "";
  }

  if (Step === 82 && HeartKenji === 1) {
    Fala.innerHTML = "Então, Tchau, até depois " + Name;
    Nome.innerHTML = "Kenji";
    Personagem.src = "";
  }

  if (Step === 83 && HeartAkari === 1) {
    Fala.innerHTML = "ByeBye, até depois!";
    Nome.innerHTML = Name;
  }

  if (Step === 83 && HeartKenji === 1) {
    Fala.innerHTML = "ByeBye Kenji, até depois!";
    Nome.innerHTML = Name;
  }

  if (Step === 84) {
    Fala.innerHTML = "Você caminha normalmente até sua sala de aula";
    Nome.innerHTML = "...";
    Personagem.src = "";
    Fundo.src = "";
  }

  if (Step === 85) {
    Fala.innerHTML =
      "Ao chegar na sala, você não ve Mei, e ve que seus materiais não estão em sua mesa, você resolve manda uma mensagem para ela para saber se ela faltará ou virá para a escola";
    Nome.innerHTML = "...";
    Fundo.src = "";
  }

  if (Step === 86) {
    Fala.innerHTML = "Oii Mei, você vem hoje para escola?";
    Nome.innerHTML = "Celular";
    Personagem.src = "";
  }

  if (Step === 87) {
    Fala.innerHTML = "Você percebe que chega umaNotificação";
    Nome.innerHTML = "...";
    Personagem.src = "";
  }

  if (Step === 88) {
    Fala.innerHTML =
      "Oieh, eu vou sim, só acordei atrasada, vou só chegar na segunda aula";
    Nome.innerHTML = "Celular Mei";
    Personagem.src = "";
  }

  if (Step === 89) {
    Fala.innerHTML = "Ah, blz, te espero aqui";
    Nome.innerHTML = "Celular";
  }

  if (Step === 90 && Desapego === 1) {
    Step = 112;
  }

  if ((Step === 90 && HeartAkari === 1) || HeartKenji === 1) {
    Fala.innerHTML =
      "Você percebe que chega uma outra notificação, de um número desconhecido";
    Nome.innerHTML = "...";
    Personagem.src = "";
  }

  if (Step === 91 && HeartAkari === 1) {
    Fala.innerHTML = "Oiii, tudo bom, vai querer passar o intervalo comigo?";
    Nome.innerHTML = "???";
    Personagem.src = "";
  }

  if (Step === 92 && HeartAkari === 1) {
    Fala.innerHTML = "Perdão? Quem é você?";
    Nome.innerHTML = "Celular";
  }

  if (Step === 93 && HeartAkari === 1) {
    Fala.innerHTML = "Sou eu, a Akari";
    Nome.innerHTML = "???";
  }

  if (Step === 94 && HeartAkari === 1) {
    Fala.innerHTML = "Ata, eu não sei, vou ver, daqui a pouco eu te aviso";
    Nome.innerHTML = "Celular";
  }

  if (Step === 95 && HeartAkari === 1) {
    Fala.innerHTML = "Ok, espero você mandar mensagem...";
    Nome.innerHTML = "Celular Akari";
  }

  if (Step === 96 && HeartAkari === 1) {
    Fala.innerHTML = "Bele, te mando mensagem até a terceira aula!";
    Nome.innerHTML = "Celular";
  }

  if (Step == 97 && HeartAkari === 1) {
    Fala.innerHTML = "Ok, esperarei";
    Nome.innerHTML = "Celular Akari";
  }

  if (Step === 91 && HeartKenji === 1) {
    Fala.innerHTML = "Opa, de boa? ta afim de passar o recreio comigo?";
    Nome.innerHTML = "???";
    Personagem.src = "";
  }

  if (Step === 92 && HeartKenji === 1) {
    Fala.innerHTML = "Perdão? quem é você?";
    Nome.innerHTML = "Celular";
  }

  if (Step === 93 && HeartKenji === 1) {
    Fala.innerHTML =
      "Beleza... ja esqueceu de mim? me sinto magoado... Sou eu, Kenji...";
    Nome.innerHTML = "???";
  }

  if (Step === 94 && HeartKenji === 1) {
    Fala.innerHTML =
      "Ata, eu vou ver aqui se consigo passar o recreio contigo, na segunda, terceira aula eu te aviso, bele?";
    Nome.innerHTML = "Celular";
  }

  if (Step === 95 && HeartKenji === 1) {
    Fala.innerHTML = "Beleza, irei cobrar...";
    Nome.innerHTML = "Celular Kenji";
  }

  if (Step === 96 && HeartKenji === 1) {
    Fala.innerHTML =
      "Ok, ok... Vou ver e te aviso quando eu souber, ByeBye até mais tarde.";
    Nome.innerHTML = "Celular";
  }

  if (Step === 97 && HeartKenji === 1) {
    Fala.innerHTML = "Ok, até mais tarde";
    Nome.innerHTML = "Celular Kenji";
  }

  if (Step === 98) {
    Fala.innerHTML =
      "Então você se senta em sua carteira, e assiste a primeira aula...";
    Nome.innerHTML = "...";
  }

  if (Step === 99) {
    Fala.innerHTML = "Mei chega quando o professor da primeira aula sai";
    Nome.innerHTML = "...";
  }

  if (Step === 100) {
    Fala.innerHTML =
      "Você se levanta de sua carteira e vai até ela para falar oque ocorreu no dia anterior";
  }

  if (Step === 101) {
    Fala.innerHTML = "Oii Mei, tudo bom? deixa eu te contar uma coisa...";
    Nome.innerHTML = Name;
  }

  if (Step === 102) {
    Fala.innerHTML = "Oii, tudo bem sim e com você?";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 103) {
    Fala.innerHTML = "Mas conta ae, oque que aconteceu?";
  }

  if (Step === 104 && HeartKenji === 1) {
    Fala.innerHTML =
      "Então, ontem lembra do Kenji? Então, ele pediu pra ir embora comigo, e ele ficou puxando assunto, me perguntando do que que eu gostava e tudo mais, acho que ele quer me comer ainda...";
    Nome.innerHTML = Name;
  }

  if (Step === 104 && HeartIzumi === 1 && Desapego === 1) {
    Fala.innerHTML =
      "Então, ontem, quando você me abandonou... A izumi esbarrou em mim, ela é moh gente fina e fomos conversando até a casa dela...";
    Nome.innerHTML = Name;
  }

  if (Step === 104 && HeartIzumi === 1 && HeartAkari === 1) {
    Fala.innerHTML =
      "Então, ontem quando você me abandonou... a izumi esbarrou em mim, ela é gente boa, fomos conversando até a casa dela, e na hora de vir pra escola, eu conheci a Akari, moh gente fina tmb...";
    Nome.innerHTML = Name;
  }

  if (Step === 105) {
    Fala.innerHTML = "Ah, que legal...";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 106) {
    Fala.innerHTML = "Vou sentar na minha carteira lá, até depois...";
    Nome.innerHTML = "Mei";
    Personagem.src = "";
  }

  if (Step === 107) {
    Fala.innerHTML = "Ah, ok...";
    Nome.innerHTML = Name;
  }

  if (Step === 108 && Desapego === 1) {
    Step = 112;
  }

  if ((Step === 108 && HeartAkari === 1) || HeartKenji === 1) {
    Fala.innerHTML = "Você sente uma notificação em seu bolso.";
    Nome.innerHTML = "...";
  }

  if (Step === 109 && HeartKenji === 1) {
    Fala.innerHTML = "Eae, vai querer ou não??";
    Nome.innerHTML = "Celular Kenji";
    Personagem.src = "";
  }

  if (Step === 109 && HeartAkari === 1) {
    Fala.innerHTML = "Oieh, vai querer passar o intervalo comigo?";
    Nome.innerHTML = "Celular Akari";
    Personagem.src = "";
  }

  if (Step === 110 && HeartAkari === 1) {
    Fala.innerHTML =
      "Oii, vou querer sim, você pode me encontrar na porta do refeitório?";
    Nome.innerHTML = "Celular";
  }

  if (Step === 111 && HeartAkari === 1) {
    Fala.innerHTML = "Claro, te encontro lá!";
    Nome.innerHTML = "Celular Akari";
  }

  if (Step === 110 && HeartKenji === 1) {
    Fala.innerHTML = "Ah, sim, consegue me encontrar na porta do refeitório?";
    Nome.innerHTML = "Celular";
  }

  if (Step === 111 && HeartKenji === 1) {
    Fala.innerHTML = "Belê, te encontro lá...";
    Nome.innerHTML = "Celular Kenji";
  }

  if (Step === 112) {
    Fala.innerHTML =
      "Então, você segue normalmente até o refeitório como tem feito todos os dias";
    Nome.innerHTML = "...";
    Fundo.src = "";
  }

  if (Step === 113 && HeartKenji === 1) {
    Fala.innerHTML = "Kenji da um tapinha em suas costas";
    Nome.innerHTML = "...";
    Personagem.innerHTML = "";
  }

  // continuar a programar saporra...
}, 100);

function Sair() {
  window.location.href = "/jogos";
}

function Configuracao() {
  Config.style.display = "block";
  Option.style.opacity = "0";

  setTimeout(() => {
    Config.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Option.style.display = "none";
  }, 500);
}

function CloseConfig() {
  Option.style.display = "flex";
  Config.style.opacity = "0";

  setTimeout(() => {
    Option.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Config.style.display = "none";
  }, 500);
}

function LoadGame() {
  Load.style.display = "block";
  Option.style.opacity = "0";

  setTimeout(() => {
    Load.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Option.style.display = "none";
  }, 500);
}

function CloseLoad() {
  Option.style.display = "flex";
  Load.style.opacity = "0";

  setTimeout(() => {
    Option.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Load.style.display = "none";
  }, 500);
}

function NewGame() {
  Menu.style.opacity = "0";
  Game.style.display = "flex";

  setTimeout(() => {
    Game.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Menu.style.display = "none";
  }, 500);
}

function Back() {
  Menu.style.display = "block";
  Game.style.opacity = "0";

  setTimeout(() => {
    Menu.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    Game.style.display = "none";
  }, 500);
}

function Skip() {
  Step = Step + 1;
}

let AutoSkip;

function Auto() {
  Automatico.onclick = Manual;

  AutoSkip = setInterval(() => {
    Step = Step + 1;
  }, 5000);
}

function Manual() {
  Automatico.onclick = Auto;
  clearInterval(AutoSkip);
}

function Salvar() {
  Save.style.top = "20%";
}

function Saveclose() {
  Save.style.top = "-100%";
}

function Save1() {
  localStorage.setItem("Slot1", Step);
}

function Save2() {
  localStorage.setItem("Slot2", Step);
}

function Save3() {
  localStorage.setItem("Slot3", Step);
}

function Save4() {
  localStorage.setItem("Slot4", Step);
}

function Save5() {
  localStorage.setItem("Slot5", Step);
}

function Save6() {
  localStorage.setItem("Slot6", Step);
}

function Slot1() {
  let slot1 = parseInt(localStorage.getItem("Slot1"));
  Step = slot1;
  NewGame();
}

function Slot2() {
  let slot2 = parseInt(localStorage.getItem("Slot2"));
  Step = slot2;
  NewGame();
}

function Slot3() {
  let slot3 = parseInt(localStorage.getItem("Slot3"));
  Step = slot3;
  NewGame();
}

function Slot4() {
  let slot4 = parseInt(localStorage.getItem("Slot4"));
  Step = slot4;
  NewGame();
}

function Slot5() {
  let slot5 = parent(localStorage.getItem("Slot5"));
  Step = slot5;
  NewGame();
}

function Slot6() {
  let slot6 = parseInt(localStorage.getItem("Slot6"));
  Step = slot6;
  NewGame();
}

function PlayMusic() {
  Music.play();
  MusicButton.onclick = PauseMusic;
  MusicImg.src = "../img/pause.png";
  MusicP.innerHTML = "Pause Music";
}

function PauseMusic() {
  Music.pause();
  MusicButton.onclick = PlayMusic;
  MusicImg.src = "../img/play.png";
  MusicP.innerHTML = "Play Music";
}

function ButtonAkari() {
  HeartAkari = HeartAkari + 1;
  Female = Female + 1;
  Step = Step + 1;
}

function ButtonMei() {
  HeartMei = HeartMei + 1;
  Female = Female + 1;
  Step = Step + 1;
}

function ButtonIzumi() {
  HeartIzumi = HeartIzumi + 1;
  Female = Female + 1;
  Step = Step + 1;
}

function ButtonKenji() {
  HeartKenji = HeartKenji + 1;
  Male = Male + 1;
  Step = Step + 1;
}

function ButtonRyo() {
  HeartRyo = HeartRyo + 1;
  Male = Male + 1;
  Step = Step + 1;
}

function Nothing() {
  Step = Step + 1;
  Desapego = Desapego + 1;
}

function AlterName() {
  if (Identidade === 1) {
    Name = document.getElementById("Nombre").value;
    document.getElementById("Nombre").value = null;
    document.getElementById("verificacao").innerHTML =
      "Nome salvo com sucesso!";

    setTimeout(() => {
      document.getElementById("verificacao").innerHTML = " ";
    }, 1500);
  } else {
    alert(
      "Falsidade ideologica não adquirida! Comprar na loja do menu principal!"
    );
  }
}

window.onload = Dados;
