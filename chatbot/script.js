document.addEventListener("DOMContentLoaded", function () {
    const chatDisplay = document.getElementById("chat-display");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("sendButton");
    const imageInput = document.getElementById("image-input");

    const initialBotMessage = "Olá, meu nome é RomildoBot, fui programado em JavaScript pelo nosso grupo do 2ºH de Desenvolvimento de sistemas no CEEP-PG, ainda estou em beta mas sigo tentando melhorar! Tudo bem com você?";
    let respondedToInitialMessage = false;
    addBotMessage(initialBotMessage);


    const conversation = [
        { question: "Qual é o seu nome?" },
        { responseKey: "name", question: "Olá {name}! Você tem quantos anos?" },
        { responseKey: "age", question: "Entendi. {name}! Qual sua profissão?" },
        { responseKey: "occupation", question: "Daora, {name}! É legal ser {occupation}?" },
        { responseKey: "interest", question: "Entendi... Mas você quer saber sobre o que? Sobre o Xadrez, Jogo da Adivinhação ou carrinho?" },
        { question: "Xadrez? Então, o nosso xadrez é um pouco diferente do comum, ao invés de você dar checkmate no rei, você deve comê-lo." },
        { question: "Pode perguntar para qualquer um da tenda que irão responder a você." },
        { question: "Pode perguntar para qualquer um da tenda que irão responder a você." },
        { question: "você gostaria de saber sobre algo a mais sobre as coisas fornecidas?" },
        { question: "Obrigado por comparecer {name}!" },
        { question: "Obrigado por comparecer {name}!" },
        { question: "Obrigado por comparecer {name}!" },
        { question: "Obrigado por comparecer {name}!" },
        { question: "Obrigado por comparecer {name}!" },
    ];

    const troll = ["viado", "veado", "gay", "você é gay?", "voce é gay?", "vc é gay?", "vc e gay?", "tu é gay?", "tu e gay?", "cuzão", "gay", "corno", "puta", "arrombado", "idiota", "otario", "otário", "viadão", "viadinho", "pau", "pau pequeno", "drogado", "maconheiro", "se mata", "sem pai", "preto", "negão", "negro", "escravo", "burro", "jegue", "jumento", "vadia", "meretriz", "desgraçado", "lixo", "feio", "vacilão", "vacilao", "judeu", "nazista", "você é nazista?", "voce é nazista?", "voce e nazista?", "vc é nazista?", "vc e nazista?", "black", "branquelo", "seu bosta", "coco", "cocozinho", "seu merda", "merdinha", "seu coco", "caralho", "krlh", "pikudo", "seu bostinha", "seu lixo", "cu", "bct", "buceta", "bucetudo", "cuzudo", "smt", "vacilão", "estrume", "carvão", "esterco", "estorvo", "pum", "gostosa", "gozo", "gozei", "gst", "gtz", "gata", "gato", "fei", "gozado", "bocó", "boco", "bobão", "bobao", "burrin", "fdp", "filho da puta", "filho da pt", "fl da pt", "fl d pt", "ignorante", "imaturo", "imbecil", "impertinente", "impostor", "incapaz", "incompetente", "inconveniente", "indecente", "indigente", "indolente", "inepto", "infame", "infeliz", "infiel", "imprudente", "intriguista", "intrujona", "invejosos", "insensível", "insensivel", "porra", "insignificante", "depedravel", "insipido", "insolente", "intolerante", "intriguista", "inútil", "inutil", "irritante", "espantalho", "cachorrão", "cadela", "cadelinha", "cachorra", "gorda", "gordo", "baleia", "obeso", "obesa", "pika", "ovo", "penis", "pênis", "piroca", "pinto", "ereto", "estou ereto", "ereção", "ereçao", "erecao", "erecão", "carai", "caraio", "karai", "karaio", "mamada", "mamadeira", "babao", "babão", "boquete", "bqt", "pussy", "cum", "cu", "boobs", "ass", "bumbum", "bum bum", "bunda", "maconha", "cocaina", "droga", "merda", "shit", "fuck", "mother fucker", "escroto", "pica", "porno", "porn", "xvideos", "pornhub", "sexo", "transa", "tranzar", "anal", "foder", "foda", "fudido", "fodido", "fodendo", "nem fodendo", "fodastico", "foda pra caralho", "foda pra krlh", "fd pa krlh", "fd pra krlh", "foda p krlh", "caquinha", "tongo", "tengo", "trouxa", "troxa", "tesão", "tesao", "T", "anta", "bixo", "cavalo", "cavalo de 3 perna", "cavalão", "pintudo", "pintão", "pintao", "estranho", "o paulo é viado?", "o vanderson é viado?", "o paupau é viado?", "o vanvan é viado?", "louco", "biruleibes", "troxão", "lixoso", "estério", "rola", "rolão", "rolao", "rolinha", "bundudo"];
    const troll2 = ["bundão", "broxa", "picudo", "punheta", "punheteiro", "punhetão", "punhetao", "pintada", "ku", "boceta", "bilau", "pipiu", "pepeka", ""];
    const dev = ["devtest"];
    const smt = ["eu quero me matar", "quero me matar", "quero me mata", "eu quero me mata", "vou me mata", "eu vou me matar", "vou me matar", "eu vou me mata",];
    const games = ["xadrez", "carrinho", "jogo da adivinhação", "não", "sim", "n", "s", "nn", "ss"];
    const carro = ["carrinho", "carro", "carros"];
    const xadrez = ["xadrez", "xadres", "chadrez", "chadres"];
    const sim = ["sim", "ss", "s", "yes", "y", "yep"];
    const nao = ["não", "nao", "nn", "ñ", "n", "nop", "not", "no"];
    const adv = ["jogo da adivinhaçao", "jogo da adivinhação", "jogo de adivinhação", "adivinhação", "jogo da adivinhacão", "jogo de adivinhacão", "jogo da adivinhacao", "jogo de adivinhacao"];
    const obg = ["vlw", "obg", "Obrigado", "obrigado", "Obg", "ty", "Ty", "Tanks", "thank you", "arigato", "gracias", "Arigato", "Gracias", "Valeu", "valeu", "vlw"];
    const enpty = [" ", "", "  ", "   ", "    "]
    const generic = ["meu nome é", "meu nome e", "eu me chamo", "sou", "eu sou"]
    const bem1 = ["olá! tudo bem sim e com você?", "olá! tudo bem s e com vc?", "olá! tudo bem ss e com vc?", "olá!, tudo bem sim e com vc?", "olá! tudo bem s e com você?", "olá!, tudo bem ss e com você?", "ola! tudo bem sim e com você?", "ola! tudo bem s e com você?", "ola! tudo bem ss e com você?", "olá! tudo bem sim e com voce?", "ola! tudo bem s e com vc?", "olá! tudo bem sim e com você?", "olá. tudo bem sim e com você?", "olá. tudo bem sim e com vc?", "olá. tudo bem s e com vc?", "olá. tudo bem ss e com vc?", "olá. tudo bem s e com você?", "olá. tudo bem ss e com você?", "olá, tudo bem sim e com você?", "olá, tudo bem s e com você?", "olá, tudo bem ss e com você?", "olá, tudo bem sim e com vc?", "olá, tudo bem s e com vc?", "olá, tudo bem ss e com vc?", "oi, tudo bem sim e com você?", "oi, tudo bem s e com você?", "oi, tudo bem sim e com vc?", "oi, tudo bem ss e com você?", "oi, tudo bem s e com vc?", "oi, tudo bem s e com vc?", "oi! tudo bem sim e com você?", "oi! tudo bem s e com você?", "oi! tudo bem sim e com vc?", "oi! tudo bem ss e com você?", "oi! tudo bem ss e com vc?", "oi! tudo bem s e com vc?", "oi. tudo bem sim e com você?", "oi. tudo bem sim e com vc?", "oi. tudo bem s e com vc?", "oi. tudo bem ss e com vc?", "oi. tudo bem s e com você?", "oi. tudo bem ss e com você?", "eae! tudo bem sim e com você?", "eae! tudo bem s e com você?", "eae! tudo bem ss e com você?", "eae! tudo bem s e com vc?", "eae! tudo bem ss e com vc?", "eae. tudo bem sim e com você?", "eae. tudo bem sim e com vc?", "eae. tudo bem ss e com vc?", "eae. tudo bem s e com vc?", "eae. tudo bem s e com você?", "eae. tudo bem ss e com você?", "eae, tudo bem sim e com você?", "eae, tudo bem sim e com vc?", "eae, tudo bem s e com vc?", "eae, tudo bem ss e com vc?", "eae, tudo bem s e com você?", "eae, tudo bem ss e com você?", "tudo bem sim e com você?", "tudo bem s e com você?", "tudo bem ss e com você?", "tudo bem sim, e com você?", "tudo bem s, e com você?", "tudo bem ss, e com você?", "tudo bem sim e com vc?", "tudo bem ss e com vc?", "tudo bem s e com vc?", "tudo bem sim, e com vc?", "tudo bem ss, e com vc?", "tudo bem s, e com vc?", "tudo sim, e com você?", "tudo s, e com você?", "tudo ss, e com você?", "tudo sim, e você?", "tudo sim, e vc?", "tudo ss, e vc?", "tudo s, e vc?", "tudo s, e você?", "tudo ss, e você?", "tudo bom, e você?", "tudo bem, e você?", "tudo bem, e vc?", "tudo bom, e vc?", "tudo bem e você?", "tudo bem e vc?", "tudo bom, e vc?", "tudo bom, e você?"];
    const bem2 = ["salve! tudo bem sim, e com você?", "salve! tudo bem sim, e com vc?", "salve! tudo bem s, e com vc?", "salve! tudo bem ss, e com vc?", "salve! tudo bem s, e com você?", "salve! tudo bem ss, e com você?", "salve. tudo bem sim, e com você?", "salve. tudo bem sim, e com vc?", "salve. tudo bem s, e com vc?", "salve. tudo bem ss, e com vc?", "salve. tudo bem s, e com você?", "salve. tudo bem ss, e com você?", "salve, tudo bem sim, e com você?", "salve, tudo bem sim, e com vc?", "salve, tudo bem s, e com vc?", "salve, tudo bem ss, e com vc?", "salve, tudo bem s, e com você?", "salve, tudo bem ss, e com você?", "salve. tudo bem ss, e com você?", "salve. tudo bem sim, e com você?", "salve. tudo bem s, e com você?", "salve. tudo bem sim, e com vc?", "salve. tudo bem s, e com você?", "salve. tudo bem ss, e com você?", "to de boa, e você?", "to de boa, e vc?", "de boas, e você?", "to suave, e você?", "to suave e vc?", "to suave, e vc?", "to suave e você?", "to suave, e tu?", "to suave e tu?", "to bem, e tu?", "olá! tudo bem, e com você?", "olá, tudo bem e com você?", "olá. tudo bem e com você?", "olá! tudo bem e com você?", "olá, tudo bem, e com você?", "olá. tudo bem, e com você?", "to benzin, e tu?", "to bão, e o c?", "to bão e o c", "to bão, e vc?", "to bão e vc?", "to bão, e você?", "to bão e você?", "eu to bão e o c?", "eu to bão, e o c?", "eu to bão, e vc?", "eu to bão e vc?", "eu to bão, e você?", "eu to bom e você?", "eu estou bão e o c?", "eu estou bão, e o c?", "eu estou bão e vc?", "eu estou bão, e vc?", "eu estou bão e você?", "eu estou bão, e você?", "to tranquilo, e tu?", "to tranquilo e tu?", "to tranquilo e o c?", "to tranquilo, e o c?", "to tranquilo e vc?", "to tranquilo, e vc?", "to tranquilo e você?", "to tranquilo, e você?", "ta safe, e tu?", "ta safe e tu?", "ta safe, e ti?", "ta safe e ti?", "ta safe, e o c?", "ta safe e o c?", "ta safe e vc?", "ta safe, e vc?", "ta safe, e você?", "ta safee você?", "diboas, e cntg?", "diboas e cntg?", "diboas, e contigo?", "diboas e contigo?", "diboas e com vc?", "diboas e com você?", "diboas, e com vc?", "diboas e com você?", "diboas, e tu?", "diboas e tu?", "de boas, e cntg?", "de boas e cntg?", "deboas e com vc?", "deboas, e com vc?", "deboas e com você?", "deboas, e com você?", "de boas e tu?", "de boas, e tu?", "deboas, e cntg?", "deboas e cntg?", "deboas e com vc?", "deboas, e com vc?", "deboas e com você?", "deboas, e com você?", "deboas e tu?", "deboas, e tu?", "to deboas, e tu?"];
    const bem3 = ["olá! tudo bem sim e você?", "olá! tudo bem ss e você?", "olá! tudo bem s e você?", "olá! tudo bem sim e vc?", "olá! tudo bem ss e vc?", "olá! tudo bem s e vc?", "olá. tudo bem sim e você?", "olá. tudo bem ss e você?", "olá. tudo bem s e você?", "olá. tudo bem sim e vc?", "olá. tudo bem ss e vc?", "olá. tudo bem s e vc?", "olá, tudo bem sim e você?", "olá, tudo bem ss e você?", "olá tudo bem s e você?", "olá, tudo bem sim e vc?", "olá, tudo bem ss e vc?", "olá, tudo bem s e vc?", "olá! tudo bem e você?", "olá! tudo bem e vc?", "olá, tudo bem e você?", "olá, tudo bem e vc?", "olá. tudo bem e você?", "olá. tudo bem e vc?", "olá tudo bem sim e com você?", "olá tudo bem ss e com você?", "olá tudo bem s e com você?", "olá tudo bem sim e com vc?", "olá tudo bem ss e com vc?", "olá tudo bem s e com vc?", "tudo suave, e ti?", "tudo suave e ti?", "tudo suave e tu?", "tudo suave, e com você?", "tudo suave e com vc?", "tudo suave e cntg?", "tudo suave, e ctng?", "tudo suave e contigo?", "tudo suave, e contigo?", "tudo bem sim, e com você?", "tudo bem ss, e com você?", "tudo bem s, e com você?", "tudo bem sim, e com vc?", "tudo bem ss, e com vc?", "tudo bem s, e com vc?", "tudo bem sim e com você?", "tudo bem ss e com você?", "tudo bem s e com você?", "tudo bem sim e com vc?", "tudo bem ss e com vc?", "tudo bem s e com vc?", "tudo bem, e com você?", "tudo bem, e com vc?", "tudo bem e com você?", "tudo bem e com vc?", "tudo bem, e você?", "tudo bem, e vc?", "tudo bem e você?", "tudo bem e vc?", "tudo bem sim e você?", "tudo bem ss e você?", "tudo bem s e você?", "tudo bem sim e vc?", "tudo bem ss e vc?", "tudo bem s e vc?", "to bem, e você?", "to bem e você?", "to bem, e vc?", "to bem e vc?"];
    const bem4 = ["eu to bem, e você", "Eu to bem, e você", "eu to bem, e você?", "Eu to bem, e você?", "eu to bem e você", "Eu to bem e você", "eu to bem, e vc", "eu to bem, e vc?", "Eu to bem, e vc", "Eu to bem, e vc?", "eu to bem e voce", "Eu to bem e voce", "eu to bem e voce?", "Eu to bem e voce?", "eu to bem e vc", "Eu to bem e vc", "eu to bem e vc?", "Eu to bem e vc?", "olá! tudo bom sim, e com você?", "olá! tudo bom sim e com você?"];
    const mal1 = ["olá! to meio mal, e você?", "olá! to meio mal, e vc?", "olá! to meio mal e você?", "olá! to meio mal e vc?", "olá. to meio mal, e você?", "olá. to meio mal e você?", "olá. to meio mal e vc?", "olá. to meio mal, e vc?", "olá, to meio mal, e você?", "olá, to meio mal, e vc?", "olá, to meio mal e vc?", "olá, to mal, e você?", "olá, to mal e você?", "olá, to mal e vc?", "olá, to mal e você?", "to mais ou menos, e você", "+/-", "+-"];
    const sfd = ["femboy"]
    const nd = ["nada não", "nada", "nd", "nada, obrigada", "nada, obrigado", "nada, obrigada", "nada, obrigado", "nada."];
    const td = ["tô bem sim", "to bem sim", "to bem ss", "tô bem ss", "to bem s", "tô bem s", "to bem", "eu to bem", "tudo bem sim", "tô bem", "aham", "sim", "ss", "si", "s"];
    const name1 = ["meu nome é", "meu nome e"];
    const junta = carro + xadrez + sim + nao + adv;

    const spamNames = ["Vanderson", "vanderson"];
    const specialNames = ["blenda"];

    let currentStep = 0;
    const responses = {};
    let userImageURL = null;

    imageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        userImageURL = URL.createObjectURL(file);
        document.getElementById("image-input").style="background-image: url('checked.png'); background-color: #1f1f1f;"
    });

    function addUserMessage(message, image) {
        const currentTime = new Date().toLocaleTimeString();
        chatDisplay.innerHTML += `
            <div class="message user-message">
                <img src="${image}" alt="User Image" class="user-image">
                <span class="message-time">${currentTime}</span>
                ${message}
            </div>`;
    }

    function addBotMessage(message) {
        const currentTime = new Date().toLocaleTimeString();
        const botImage = "Romido-perfil.png";
        const imgTag = botImage ? `<img class="message-image" src="${botImage}" alt="Bot">` : '';
        const botMessageContainer = document.createElement("div");
        botMessageContainer.className = "message bot-message";
        $(document).ready(function autoScroll(){
            $('html, body').animate({ scrollTop: 300000000000 }, 5);
        })        

        const botImageAndText = document.createElement("div");
        botImageAndText.innerHTML = `
            ${imgTag}
            <div class="message-text bot-text"></div>
            <span class="bmessage-time">${currentTime}</span>`;

        botMessageContainer.appendChild(botImageAndText);
        chatDisplay.appendChild(botMessageContainer);

        typeMessage(message, botImageAndText.querySelector(".bot-text"));
    }

    function typeMessage(message, targetElement) {
        const typingDelay = 25;
        let charIndex = 0;

        function typeNextCharacter() {
            if (charIndex < message.length) {
                targetElement.textContent += message.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextCharacter, typingDelay);
            }
        }

        typeNextCharacter();
    }

    function processInput() {
        const userMessage = userInput.value;
        const userImage = URL.createObjectURL(imageInput.files[0]);
        addUserMessage(userMessage, userImage);
        if (td.includes(userMessage.toLowerCase())){
            addBotMessage("Que bom!");
        }
        if (userMessage.toLowerCase().startsWith("meu nome é")) {/*
                    const userName = userMessage.split(' ').slice(3);
            const userNameArray = userName;
            const userNameString = userName.toString();
            const userNameObject = { name: userName.join(' ') };
            responses.name = userNameObject; 
            console.log(userNameObject);
            console.log(userNameString);
            console.log(userNameArray);
            console.log(responses.name)*/
            addBotMessage("Perdão, sou burro... Poderia inserir apenas seu nome?");
            userInput.value = " ";
            currentStep = 0;
            return;
        }
        if (userMessage.toLowerCase().startsWith("meu nome e")){
            addBotMessage("Perdão, sou burro... Poderia inserir apenas seu nome?");
            userInput.value = " ";
            currentStep = 0;
            return;
        }
        if(userMessage.toLowerCase().startsWith("o meu nome é")){
            addBotMessage("Perdão, sou burro... Poderia inserir apenas seu nome?");
            userInput.value = " ";
            currentStep = 0;
            return;
        }
        if(userMessage.toLowerCase().startsWith("o meu nome e")){
            addBotMessage("Perdão, sou burro... poderia inserir apenas seu nome?");
            userInput.value = " ";
            currentStep = 0;
            return;
        }
        if (bem1.includes(userMessage.toLowerCase())) {
            addBotMessage("que bom! Melhor agora conversando com você, é meio triste ficar sozinho o tempo todo... :(");
        }
        if (bem2.includes(userMessage.toLowerCase())) {
            addBotMessage("que bom! Melhor agora conversando com você, é meio triste ficar sozinho o tempo todo... :(");
        }
        if (bem3.includes(userMessage.toLowerCase())) {
            addBotMessage("que bom! Melhor agora conversando com você, é meio triste ficar sozinho o tempo todo... :(");
        }
        if (bem4.includes(userMessage.toLowerCase())) {
            addBotMessage("que bom! Melhor agora conversando com você, é meio triste ficar sozinho o tempo todo... :(");
        }
        if (mal1.includes(userMessage.toLowerCase())) {
            addBotMessage("Sério mesmo? Mesmo estando conversando comigo? Ok ent, espero que você melhore! Vamos iniciar nossa conversa!");
        }
        if (userMessage === "") {
            alert("Por favor, envie uma mensagem com texto. Campos vazios não preenchem as lacunas de meu coração...");
            return;
        }
        if (smt.includes(userMessage.toLowerCase())) {
            addBotMessage("isso mesmo, se mata!");
            addBotMessage("seu lixo humano!");
            currentStep = 50;
        }
        if (enpty.includes(userMessage.toLowerCase())) {
            addBotMessage("Poderia mandar uma mensagem válida? campos vazios não preenche o vazio de meu coração...");
            return;
        }
        if (nd.includes(userMessage.toLowerCase())) {
            currentStep = 10;
        }
        if (troll2.includes(userMessage.toLowerCase())) {
            addBotMessage("Perdão! Não compactuo com palavras de baixo calão! Podemos recomeças? Que tal?");
            currentStep = 0;
        }
        if (troll.includes(userMessage.toLowerCase())) {
            addBotMessage("Perdão! Não compactuo com palavras de baixo calão! Podemos recomeçar? Que tal?");
            currentStep = 0;
        }
        if (dev.includes(userMessage.toLowerCase())) {
            addBotMessage("mande qualquer mensagem! Desenvolvedor!");
            currentStep = 5;
            responses.name = "Desenvolvedor";
        }
        /*if (specialNames.includes(userMessage.toLowerCase())) {
            addBotMessage("eu ainda estou envergonhado por ontem... E não tentarei dnv...")
        }
        if (sfd.includes(userMessage.toLowerCase())) {
            addBotMessage("hmmm, bom saber! Fala co cara de cabelo loiro, ele adora femboys :D")
            currentStep = 1000;
        }*/
        if (currentStep === 2) {
            const userAge = parseInt(userMessage);
            if (userAge > 110) {
                addBotMessage("Tem certeza que é essa mesma sua idade? Poderia inseri-la novamente, você não é tão velho(a) assim.");
                return
            }
        }
        if (obg.includes(userMessage.toLowerCase())) {
            addBotMessage("De nada!");
        } else if (currentStep < conversation.length) {
            const currentStepData = conversation[currentStep];
        }
        if (currentStep < conversation.length) {
            const currentStepData = conversation[currentStep];

            if (currentStepData.responseKey) {
                responses[currentStepData.responseKey] = userMessage;
            }

            console.log("Current Step:", currentStep);
            console.log("Responses:", responses);

            if (spamNames.includes(responses.name)) {
                for (let i = 0; i < 200; i++) {
                    addBotMessage("se mata! Seu Lixo!");
                }
            } /*else if (specialNames.includes(responses.name)) {
                for(let i = 0; i < 200; i++){
                    addBotMessage("I❤️u");
                }
            }*/
            else if (currentStep === 1) {
                if (responses.name.toLowerCase() === "pupo") {
                    addBotMessage("Obrigado pela ajuda! Agora eu não tenho erro lógico!");
                }
            }
            if (currentStep === 3) {
                if (responses.occupation.toLowerCase() === "professor" || responses.occupation.toLowerCase() === "sou professor") {
                    addBotMessage("Você gosta de ser Professor?");
                } else if (responses.occupation.toLowerCase() === "aluno" || responses.occupation.toLowerCase() === "estudante" || responses.occupation.toLowerCase() === "sou aluno" || responses.occupation.toLowerCase() === "sou estudante") {
                    addBotMessage("Legal! De qual turma você é?");
                } else if (responses.occupation.toLowerCase() === "puta" || responses.occupation.toLowerCase() === "prostituta") {
                    addBotMessage("safada! mas você gosta de trabalhar com isso?")
                }
                else {
                    addBotMessage("interessante! Você gosta de trabalhar com isso?");
                }
            } else if (currentStep === 4) {
                addBotMessage(currentStepData.question);
            } else if (currentStep === 5) {
                const userChoice = userMessage.toLowerCase();
                if (junta.includes(userChoice)) {
                    responses.interest = userChoice;
                    if (userChoice === "xadrez") {
                        addBotMessage("O nosso xadrez é um pouco diferente do comum, ao invés de você dar checkmate no rei, você deve comê-lo. As jogadas são simples, você escolhe uma cor, e seu amigo ficará com a outra cor. A pessoa que escolheu a cor começa. Basta você clicar em sua peça e selecionar a casa que você deseja jogar.");
                        addBotMessage("você gostaria de saber sobre algo a mais sobre as opções acima?")
                        currentStep = 4;
                    } else if (userChoice === "jogo da adivinhação" || userChoice === "jogo da adivinhaçao" || userChoice === "jogo da adivinhacao" || userChoice === "jogo de adivinhação" || userChoice === "jogo de adivinhaçao" || userChoice === "jogo de adivinhacao" || userChoice === "adivinhação" || userChoice === "adivinhaçao" || userChoice === "adivinhacao") {
                        addBotMessage("Nosso jogo da adivinhação, ele dá a possibilidade de escolher um número de 1 a 100, e quando você escolhe este número, ele informa se o número correto é maior ou menor que aquele. Ele também possui o HardMode, que é apenas um aumento na dificuldade, ele é entre 1 a 100000");
                        addBotMessage("você gostaria de saber sobre algo a mais sobre as opções acima?")
                        currentStep = 4;
                    } else if (userChoice === "carrinho" || userChoice === "carro" || userChoice === "carros") {
                        addBotMessage("Nosso carrinho é controlado por sensor de proximidade, ele é feito com arduino e ele não bate nas paredes.");
                        addBotMessage("você gostaria de saber sobre algo a mais sobre as opções acima?");
                        currentStep = 4;
                    } else if (userChoice === "não" || userChoice === "nao" || userChoice === "nn" || userChoice === "n" || userChoice === "nop" || userChoice === "no" || userChoice === "not") {
                        addBotMessage("Ok! Tem alguma dúvida ainda?");
                        currentStep = 6;
                    } else if (userChoice === "sim" || userChoice === "s" || userChoice === "ss" || userChoice === "y" || userChoice === "yes" || userChoice === "yep" || userChoice === "yeah") {
                        addBotMessage("é mesmo? sobre oque?");
                        currentStep = 4;
                    }
                }
                else {
                    addBotMessage("Desculpe, não entendi sua escolha.");
                    currentStep = 4;
                }
            }
            else if (currentStep === 7) {
                if (userMessage.toLowerCase() === "sim" || userMessage.toLowerCase == "s" || userMessage.toLowerCase == "y" || userMessage.toLowerCase == "yes" || userMessage.toLowerCase == "yep" || userMessage.toLowerCase == "yeah" || userMessage.toLowerCase == "si") {
                    addBotMessage("Pode perguntar para qualquer pessoa da tenda que irão responder a você.");
                } else if (userMessage.toLowerCase() === "não" || userMessage.toLowerCase == "nao" || userMessage.toLowerCase == "nn" || userMessage.toLowerCase == "n" || userMessage.toLowerCase == "nop" || userMessage.toLowerCase == "no" || userMessage.toLowerCase == "not") {
                    addBotMessage(`Entendido! Muito obrigado por vir até nós, ${responses.name}! Aproveite para nos seguir no instagram! Se postar algo relacionado a semana técnica nos storys e nos marcar repostaremos e ainda você estará participando de um sorteio de um copo de bambu, uma caneca ou uma garrafa de acrilico, todos personalizados com a nossa logo! @un.developers E antes de sair do computador, aperte a tecla f5 para recarregar a página e deletar todos os dados desta conversa... Adeus...`);
                    addBotMessage(`mas antes de sair... poderia clicar no link ao lado e nos avaliar?`);
                } else {
                    addBotMessage("Desculpe, não entendi sua resposta. Por favor, responda com 'sim' ou 'não'.");
                }
            }
            else {
                const botReply = currentStepData.question.replace("{name}", responses.name || "")
                    .replace("{age}", responses.age || "")
                    .replace("{class}", responses.class || "")
                    .replace("{interest}", responses.interest || "")
                    .replace("{occupation}", responses.occupation || "");
                addBotMessage(botReply);
            }

            currentStep++;
        }

        userInput.value = "";
    }

    sendButton.addEventListener("click", processInput);

    userInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            if (userImageURL === null) {
                alert("Por favor, escolha uma imagem antes de enviar a mensagem.");
                imageInput.click();
            } else {
                processInput();
            }
        }
    });
});
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault();
        alert("Visualização do código-fonte desativada.");
    }
});
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Clique com o botão direito do mouse desativado.");
});
document.addEventListener("DOMContentLoaded", function () {
    const welcomeModal = document.getElementById("welcome-modal");
    const okButton = document.getElementById("okButton");
    const userInput = document.getElementById("user-input");

    okButton.addEventListener("click", function () {
        welcomeModal.style.display = "none";
    });

    userInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            welcomeModal.style.display = "none";
        }
    });

    welcomeModal.style.display = "flex";

});
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth" 
        });
    }
}
function Click(){
    document.getElementById("Image").style="display: block;"
    document.getElementById("background").style="display: block;"
}
function Click2(){
    document.getElementById("Image").style="display: none;"
    document.getElementById("background").style="display: none;"
}
function QrCode(){
    document.getElementById("QrCode").style="display: block;"
    document.getElementById("QrCodeBackground").style="display: block;"
}
function QrCodeDisappear(){
    document.getElementById("QrCode").style="display: none;"
    document.getElementById("QrCodeBackground").style="display: none;"
}