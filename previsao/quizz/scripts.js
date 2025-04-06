var questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
    {
        question: "Se um pato perde a pata, ele fica manco ou viuvo?",
        choices: ["Manco", "Viúvo", "Nenhum", "Talvez"],
        answer: "Talvez",
      },
      {
        question: "Qual o menor osso do corpo humano?",
        choices: ["Estribo", "Mandibula", "Fêmur", "Metatarsos"],
        answer: "Estribo",
      },
      {
        question: "Quantas letras tem PNEUMOULTRAMICROSCOPICOSSILICOVULCANOCONIOSE?",
        choices: ["2", "44", "45", "46"],
        answer: "45",
      },
      {
        question: "No norte e no nordeste do país, chama-se JERIMBUM que fruto?",
        choices: ["Caju", "Abobora", "Chuchu", "Mandioca"],
        answer: "Abobora",
      },
      {
        question: "dia 21 de abril, é marcado pela fundação de quais cidades?",
        choices: ["Brasilia e Roma", "Brasilia e Londres", "Hong Kong e França", "Hong Kong e Turmero"],
        answer: "Brasilia e Roma"
      },
      {
        question: "A guerra dos 100 anos durou quantos anos?",
        choices: ["97", "100", "106", "116"],
        answer: "116"
      },
      {
        question: "Qual é o triângulo que tem todos os lados diferentes?",
        choices: ["Equilátero", "Isóceles", "Escaleno", "Trapéio"],
        answer: "Escaleno",
      },
      {
        question: "Quem compôs o Hino da Independência?",
        choices: ["Dom Pedro I.", "Manuel Bandeira", "Castro Alvez", "Carlos Gomes"],
        answer: "Dom Pedro I.",
      },
      {
        question: "Qual é o antônimo de malograr?",
        choices: ["Perder", "Fracassar", "Conseguir", "Desprezar"],
        answer: "Conseguir",
      },
      {
        question: "Qual foi o último Presidente do período da ditadura militar no Brasil?",
        choices: ["Costa e Silva", "João Figueiredo", "Ernesto Geisel", "Emílio Médici"],
        answer: "João Figueiredo",
      },
    ];

  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();