const quizContainer = document.getElementById('quiz');

let scores = {
    Unsafe: 0,
    Passive: 0,
    Curious: 0,
    Safe: 0,
    Preventative: 0,
};

let currentQuestion = 0;
let keys = {
    U: "Unsafe",
    Pa: "Passive",
    C: "Curious",
    S: "Safe",
    Pr: "Preventative",
};

const questions = [
    {
        image: "",
        question: "You are about to embark on an adventure of endless possibilites into an unknown cave. How do you feel?",
        answers: [
             {text: "I would feel better knowing the risks and rewards that lie ahead before going on the adventure...", type: "S"},
             {text: "I'm excited for whatever challenges I will face! It will be rewarding to see what lies ahead.", type: "C"}
                ]
    },

    {
        image: "",
        question: "",
        answers: [
             {text: "", type: ""},
             {text: "", type: ""}
                ]
    }
        ]
    
const results = {
    Unsafe: {
        title: "The Fly",
        image: ""
    },
    Passive: {
        title: "The Ant",
        image: ""
    },
    Curious: {
        title: "The Moth",
        image: ""
    },
    Safe: {
        title: "The Beetle",
        image: ""
    },
    Preventative: {
        title: "The Spider",
        image: ""
    }
};

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    displayQuestions(); 
});

function displayQuestions() {
    const display = questions[currentQuestion];
    
    document.getElementById('answerA').textContent = display.answers[0].text;
    document.getElementById('answerB').textContent = display.answers[1].text;

    document.getElementById('answerA').onclick = () => selectAnswer(display.answers[0].type);
    document.getElementById('answerB').onclick = () => selectAnswer(display.answers[1].type);
  }

  function selectAnswer(type) {
    scores[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestions();
    } else {
      showResult();
    }
  }

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

let personaResult = Object.keys(scores)[0];

for (let type in scores) {
  if (scores[type] > scores[personaResult]) {
    personaResult = type;
  }
}
    document.getElementById("Result-image").src = results[personaResult].image;
  }