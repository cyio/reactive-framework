import "./buttons.js";
import { score1, score2, highScore } from "./data.js";
import { computed } from "./reactor.js";

const p1 = document.querySelector("p.scores");
const p2 = document.querySelector("p.high-score");

computed(() => {
  p1.textContent = `scores: ${score1.value}, ${score2.value}`;
});

highScore.subscribe((val) => {
  p2.textContent = `high score: ${highScore.value}`;
});
