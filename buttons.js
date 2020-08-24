import { score1, score2 } from "./data.js";

const b1 = document.querySelector("button.score-increase-1");
b1.addEventListener("click", () => score1.value++);

const b2 = document.querySelector("button.score-increase-2");
b2.addEventListener("click", () => score2.value++);
