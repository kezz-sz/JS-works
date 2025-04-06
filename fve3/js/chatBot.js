const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function chatBotResponse(userMessage) {
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("chatbot-message");

    const userMessageSemAcentos = removerAcentos(userMessage).toLowerCase();
    if (userMessageSemAcentos.includes("video") && userMessageSemAcentos.includes("nao esta rodando")) {
        responseMessage.innerHTML = `<div class="message">Já tentou verificar sua internet? Ou se você tem algum tipo de extensão AdBlocker?</div>`;
    }
    else if (userMessageSemAcentos.includes("nao") && userMessageSemAcentos.includes("consigo criar")) {
        responseMessage.innerHTML = `<div class="message">Tem certeza que o email já não está em uso? ou que o email existe?</div>`;
    }
    else if (userMessageSemAcentos.includes("pagamento")) {
        responseMessage.innerHTML = `<div class="message">Nossos pagamentos é feito através de cartão e pix, e todos os seus dados estarão seguros, além, de que você pode ativar a opção de debitar altomaticamente mensalmente, para maior facilidade a você</div>`
    }
     else {
        responseMessage.innerHTML = `<div class="message">Desculpe, não entendi a pergunta. Posso ajudar com algo mais?</div>`;
    }

    chatContainer.appendChild(responseMessage);
}

sendButton.addEventListener("click", function() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-message");
        userMessageDiv.innerHTML = `<div class="message">${userMessage}</div>`;
        chatContainer.appendChild(userMessageDiv);
        userInput.value = ""; 

        chatBotResponse(userMessage);
    }
});

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendButton.click(); 
    }
});