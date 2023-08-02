import { router } from '../router/router.js';
import { name } from './index.js';
import { questions } from './questions.js';
import { sendResult } from './socket.js';

let currentQuestion = 0;
const saveResults = [];

function startQuiz() {
    renderQuiz(questions);
}

function renderQuiz(questions) {
    renderIndexQuestions(questions.length);
    renderQuestions(questions);
    renderOptions(questions[currentQuestion].options);
}

function renderQuestions(question) {
    const quizQuestion = document.querySelector(".main__quiz-question");
    quizQuestion.innerHTML = question[currentQuestion].q;
}

function renderIndexQuestions(questionLength) {
    const indexQuestion = document.getElementById("num-questions");
    indexQuestion.innerHTML = `Pregunta ${currentQuestion + 1} de ${questionLength}`;
}

function renderResults(questions) {
    const questionContainer = document.querySelector(".main__questions-results");
    questions.forEach((question) => {
        console.log(question);
        questionContainer.innerHTML += `
        <div class="main__question-card">
            <p class="main__question-text">${question.q}</p>
            <div class="main__options-results">
                <button class="btn-votes">${question.options[0]} | <span class="vote-yes">0</span> votos</button>
                <button class="btn-votes">${question.options[1]} | <span class="vote-no">0</span> votos</button>
            </div>
        </div>
         `;
    });
}

function selectOption(option) {
    const quizOptions = document.querySelectorAll(".option");
    const indexBtn = [...quizOptions].findIndex((quizOption) => quizOption === option.target);

    saveResults.push({ user: name, q: questions[currentQuestion].q, select: indexBtn });
    if (currentQuestion === questions.length - 1) {
        router("results");
        renderResults(questions);

        sendResult(saveResults);

        return;
    }

    currentQuestion++;
    renderQuestions(questions);
    renderOptions(questions[currentQuestion].options);
    renderIndexQuestions(questions.length);
}

function renderOptions(options) {
    const quizOptions = document.querySelector(".main__quiz-options");
    quizOptions.innerHTML = "";
    options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.innerHTML = option;
        quizOptions.append(btn);

        btn.addEventListener("click", selectOption);
    });
}

function renderOptionsResults(results) {
    const btnVotes = document.querySelectorAll(".btn-votes");

    if (!btnVotes) return;

    const voteYes = document.querySelectorAll(".vote-yes");
    const voteNo = document.querySelectorAll(".vote-no");

    results.forEach((result, index) => {
        voteYes[index].innerHTML = result["voteYes"];
        voteNo[index].innerHTML = result["voteNo"];
    });
}

export { renderOptionsResults, saveResults, startQuiz };
