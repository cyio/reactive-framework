import { score } from "./data.js";

const b1 = document.querySelector("button.score-increase");
b1.addEventListener("click", () => score++);

const b2 = document.querySelector("button.score-decrease");
b2.addEventListener("click", () => score--);
