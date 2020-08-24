import "./buttons.js";
import { scores, highScore } from "./data.js";

const h1 = document.querySelector("h1.scores");
scores.subscribe((val) => {
  const scoresStr = val.map(v => v.value).join(', ')
  h1.textContent = `score: ${scoresStr}`;
});

const highScoreh1 = document.querySelector("h1.high-score");
highScore.subscribe((val) => {
  highScoreh1.textContent = `high-score: ${val}`;
});
