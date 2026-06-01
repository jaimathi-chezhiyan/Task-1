const quiz = [
    {
        question: "HTML stands for?",
        answers: ["Hyper Text Markup Language", "Home Tool", "High Text"],
        correct: 0
    },
    {
        question: "CSS is used for?",
        answers: ["Styling", "Database", "Server"],
        correct: 0
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText =
        quiz[current].question;

    let ans = "";
    quiz[current].answers.forEach((a, i) => {
        ans += `<button onclick="checkAnswer(${i})">${a}</button><br>`;
    });

    document.getElementById("answers").innerHTML = ans;
}

function checkAnswer(index) {
    if (index === quiz[current].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

function nextQuestion() {
    current++;
    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText =
            "Score: " + score + "/" + quiz.length;
    }
}

loadQuestion();