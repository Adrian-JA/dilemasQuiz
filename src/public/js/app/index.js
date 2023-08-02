import { router } from '../router/router.js';
import { startQuiz } from './quiz.js';

const btnStartQuiz = document.getElementById("btn-start-quiz");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
let name;

btnStartQuiz.addEventListener("click", () => {
    modal.showModal();

    router("quiz");
});

function validateUsername(user) {
    if (!user) return alert("ingrese un nombre de usuario");

    return true;
}

closeModal.addEventListener("click", () => {
    const inputText = document.querySelector(".modal__input").value;

    if (!validateUsername(inputText)) return;

    name = inputText;
    modal.close();
    startQuiz();
});

export { name };
