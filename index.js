import "./buttons.js";
import { score } from "./data.js";

const h1 = document.querySelector("h1.score");
h1.textContent = `score: ${score.value}`;
