import "./buttons.js";
import { scores, highScore } from "./data.js";
import { computed } from "./reactor.js";

const h1 = document.querySelector("h1.scores");
const highScoreh1 = document.querySelector("h1.high-score");

computed(() => {
  const str = scores.value.map(s => s.value).join(', ');
  h1.textContent = `scores: ${str}`;
});

highScore.subscribe((val) => {
  highScoreh1.textContent = `high score: ${val}`;
});
