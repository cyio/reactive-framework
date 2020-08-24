import "./buttons.js";
import { scores, highScore } from "./data.js";

const p1 = document.querySelector("p.scores");
const p2 = document.querySelector("p.high-score");

scores.subscribe((val) => {
  p1.textContent = `scores: ${val.map((score) => score.value).join(", ")}`;
});

highScore.subscribe((val) => {
  p2.textContent = `high score: ${val}`;
});
