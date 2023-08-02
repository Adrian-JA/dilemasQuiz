import { quizView } from '../views/Quiz.js';
import { resultsView } from '../views/Results.js';

const views = {
    quiz: quizView(),
    results: resultsView(),
};
const main = document.querySelector(".main");

const router = (view) => {
    const renderView = views[view];

    main.classList.add(view);
    main.innerHTML = renderView;
};

export { router };
