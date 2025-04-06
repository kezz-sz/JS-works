document.addEventListener("DOMContentLoaded", function() {
    const guessButton = document.getElementById("guessButton");
    const userInput = document.getElementById("user-input");
    const message = document.getElementById("cor");

    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    let attempts = 0;

    function checkGuess() {
        const userGuess = parseInt(userInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100000) {
            message.textContent = "Por favor, digite um número válido entre 1 e 100000.";
        } else {
            attempts++;

            if (userGuess === randomNumber) {
                message.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
                guessButton.disabled = true;
            } else if (userGuess < randomNumber) {
                message.textContent = "Tente um número maior.";
            } else {
                message.textContent = "Tente um número menor.";
            }
        }

        userInput.value = "";
        userInput.focus();
    }

    guessButton.addEventListener("click", checkGuess);

    userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
});
const reloadButton = document.getElementById("reloadButton");

reloadButton.addEventListener("click", function() {
    location.reload();
});