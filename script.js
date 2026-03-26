
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
    P: "Passive",
    C: "Curious",
    S: "Safe",
    Pr: "Preventative",
};

const questions = [
    {
        image: "",
        question: "You are about to embark on an adventure of endless possibilities into an unknown cave. How do you feel?",
        answers: [
             {text: "I'm excited for whatever challenges I will face! It will be rewarding to see what lies ahead.", type: "C"},
             {text: "I would feel better knowing the risks and rewards that lie ahead before going on the adventure.", type: "S"}
                ]
    },

    {
        image: "",
        question: "You realize there may be some obstacles on the road ahead, how do you prepare?",
        answers: [
             {text: "I’ll post on the adventurer’s forum the location of the cave, so people know I am gone.", type: "U"},
             {text: "I will explore my surroundings and utilize whatever tools or resources I can find!", type: "C"}
                ]
    },

            {
        image: "",
        question: "You are faced with two paths, the right path is wide, and has muddy dirt, keeping the footprints of the traveler before you. The left path has a stone pathway and is darker inside. ",
        answers: [
             {text: "Take the right path, I feel reassured knowing the path has been explored before.", type: "P"},
             {text: "Take the left path, I am eager to see what lies beyond the stone walkway.", type: "C"}
                ]
    },

            {
        image: "",
        question: "You notice your compass has gone missing. Possibly fallen out or taken from your pocket? You are concerned about losing your small sword. You…",
        answers: [
             {text: "Remove it from my backpack and place it in my belt. I want to be able to access it quickly.", type: "U"},
             {text: "Sheath my sword and secure it with rope to my back. I want it to stay close to my body.", type: "S"}
                ]
    },

            {
        image: "",
        question: "You see some hard-working moles working on a new path inside the cave. They say the old path had some bug infestations; however, you may be able to avoid them. ",
        answers: [
             {text: "Ill take the new path, I would rather not risk it.", type: "S"},
             {text: "I'll take the old path, I feel more comfortable with the route I am already taking.", type: "P"}
                ]
    },

            {
        image: "",
        question: "You find a chest with two items inside. A pair of boots that changes your footsteps to look like paw prints, so you don’t get followed. The other item, a cloak that allows you to camouflage into the cave's surroundings. ",
        answers: [
             {text: "Ill take the boots!", type: "Pr"},
             {text: "Ill take the cloak!", type: "P"}
                ]
    },

            {
        image: "",
        question: "You find a merchant stand inside the cave, a small mouse is running a shop. He offers to sell you a torch that will stay lit for as long as you are inside the cave! The mouse asks to use your location to determine when you leave the cave. ",
        answers: [
             {text: "I think the mouse is trustworthy.", type: "P"},
             {text: "I don’t trust the mouse.", type: "S"}
                ]
    },

            {
        image: "",
        question: "Deep into the cave, you encounter a cave troll! He seems to be blocking the room ahead, you are eager to see what’s inside. He says he will only allow you to enter if you accept his terms, you…",
        answers: [
             {text: "Listen to what he has to say, it could be useful to know what to expect once I'm inside!", type: "Pr"},
             {text: "Accept his terms and enter the room, who knows what treasures could be inside!  ", type: "U"}
                ]
    },

            {
        image: "",
        question: "Once you enter the room, you find a small village. you meet a wizard who offers you a spell. She says she can grant you a powerful spell. The spell…",
        answers: [
             {text: "Allows you to see through the dirt to spot buried artifacts.", type: "C"},
             {text: "Makes your movements silent so enemies cant hear you.", type: "Pr"}
                ]
    },

            {
        image: "",
        question: "The wizard says the spell must be activated by a secret command. She will bind the spell to the phrase you choose, you say…",
        answers: [
             {text: "A familiar phrase you will remember well.", type: "U"},
             {text: "A complicated phrase different from other spells.", type: "S"}
                ]
    },

            {
        image: "",
        question: "You bag is getting pretty heavy! It seems like it might be time to turn back. You...",
        answers: [
             {text: "Leave the torches on the walls lit so you can remember your way next time.", type: "P"},
             {text: "Extinguish the torches so people cant follow you back out.", type: "Pr"}
                ]
    },

            {
        image: "",
        question: "You made it out of the cave! How do you feel?",
        answers: [
             {text: "I am excited to show people the treasures I found!", type: "C"},
             {text: "How can I prepare for the next adventure?", type: "Pr"}
                ]
    },
        ]
    
const results = {
    Unsafe: {
        title: "The Fly",
        image: "images/The-Fly-Result.png"
    },
    Passive: {
        title: "The Ant",
        image: "images/The-Ant-Result.png"
    },
    Curious: {
        title: "The Moth",
        image: "images/The-Moth-Result.png"
    },
    Safe: {
        title: "The Beetle",
        image: "images/The-Beetle-Result.png"
    },
    Preventative: {
        title: "The Spider",
        image: "images/The-Spider-Result.png"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        document.getElementById('start-page').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        currentQuestion = 0;
        displayQuestions(); 
    });
});

function displayQuestions() {
    const display = questions[currentQuestion];
    document.getElementById('question-text').textContent = display.question;
    document.getElementById('answerA').textContent = display.answers[0].text;
    document.getElementById('answerB').textContent = display.answers[1].text;

    document.getElementById('answerA').onclick = () => selectAnswer(display.answers[0].type);
    document.getElementById('answerB').onclick = () => selectAnswer(display.answers[1].type);
  }

  function selectAnswer(type) {
    const fullType = keys[type];
    scores[fullType]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestions();
    } else {
      showResult();
    }
  }

function showResult() {
    let personaResult = Object.keys(scores)[0];
    for (let type in scores) {
        if (scores[type] > scores[personaResult]) {
            personaResult = type;
        }
    }

    //this fucntion shows the results page and hides the other child pages
    const resultImage = document.getElementById("result-image");
    resultImage.src = results[personaResult].image;
    resultImage.alt = results[personaResult].title;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    //this fucntion shows the explore personas page and hides the other child pages
    document.getElementById('explore-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('personas-page').style.display = 'block';
});

}


