
const quizContainer = document.getElementById("quiz");

let totalPoints = 0;
let currentQuestion = 0;

let keys = {
    U: "Unsafe",
    P: "Passive",
    C: "Curious",
    S: "Safe",
    Pr: "Preventative",
};

const pointValues = {
    U: 1,
    P: 2, 
    C: 3, 
    S: 4,
    Pr: 5,
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
        question: "You notice your compass has gone missing. Possibly fallen out or taken from your pocket? You are concerned about also losing your small sword. You…",
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
        question: "Your bag is getting pretty heavy! It seems like it might be time to turn back. You...",
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

function getPersonaFromScore(score) {
    if (score <= 28) return keys.U;   // Unsafe:       23 – 28
    if (score <= 34) return keys.P;   // Passive:      29 – 34
    if (score <= 40) return keys.C;   // Curious:      35 – 40
    if (score <= 46) return keys.S;   // Safe:         41 – 46
    return keys.Pr;                   // Preventative: 47 – 51
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-button").addEventListener("click", function() {
        currentQuestion = 0;
        totalPoints = 0;
        document.getElementById("start-page").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        displayQuestions(); 
    });

    document.getElementById("explore-button").addEventListener("click", function() {
        document.getElementById("start-page").style.display = "none"; //hide start page and show explore page when user clicks button
        document.getElementById("explore-page").style.display = "block";
    });

    document.getElementById("explore-button2").addEventListener("click", function() {
        document.getElementById("result").style.display = "none"; //hide result page and show explore page when user clicks button
        document.getElementById("explore-page").style.display = "block";
    });

    document.getElementById("home-link").addEventListener("click", function() {
        document.getElementById("explore-page").style.display = "none"; //hide explore page and show start page when user clicks button
        document.getElementById("start-page").style.display = "block";
});
});

function displayQuestions() {
    const display = questions[currentQuestion];
    document.getElementById("question-text").textContent = display.question;
    document.getElementById('answerA').textContent = display.answers[0].text;
    document.getElementById('answerB').textContent = display.answers[1].text;

    document.getElementById('answerA').onclick = () => selectAnswer(display.answers[0].type);
    document.getElementById('answerB').onclick = () => selectAnswer(display.answers[1].type);
  }

  function selectAnswer(type) {
    totalPoints += pointValues[type];
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestions();
    } else {
      showResult();
    }
  }

function showResult() {
    const personaResult = getPersonaFromScore(totalPoints);

    // this function shows the results page and hides the other child pages
    const resultImage = document.getElementById("result-image");
        resultImage.src = results[personaResult].image;
        resultImage.alt = results[personaResult].title;
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

}


