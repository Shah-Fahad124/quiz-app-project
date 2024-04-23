
const quizData = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Paris", "London", "Islamabad", "Madrid"],
        answer: "Isalmabad"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "CSS is used for what in Web development?",
        options: ["styling", "function", "structure", "other"],
        answer: "styling"
    },
    {
        question: "what is our religion?",
        options: ["Islam", "hindu", "sique", "other"],
        answer: "Islam"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");

function buildQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<h3>${quizItem.question}</h3>`;
        quizItem.options.forEach(option => {
            const optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = `question${index}`;
            optionElement.value = option;
            questionElement.appendChild(optionElement);
            const labelElement = document.createElement("label");
            labelElement.textContent = option;
            questionElement.appendChild(labelElement);
        });
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption && selectedOption.value === quizItem.answer) {
            score++;
        }
    });
    return score;
}
submitBtn.addEventListener("click", () => {
    const score = calculateScore();
    alert(`Your score is ${score} out of ${quizData.length}`);
    result.textContent = `Your score is ${score} out of ${quizData.length}`;

});

buildQuiz();

let dataToSend = score;
sessionStorage.setItem('myData', dataToSend);