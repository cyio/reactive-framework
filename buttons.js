import { addScore, scores } from "./data.js";

const randInt = max => Math.floor(Math.random() * max);

const b1 = document.querySelector("button.add-score");
b1.addEventListener("click", () => addScore(randInt(50)));

const b2 = document.querySelector("button.change-score");
b2.addEventListener("click", () => {
  const arr = scores.value;
  const score = arr[randInt(arr.length)];
  score.value = randInt(50);
});