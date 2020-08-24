import { scores } from "./data.js";
import { Reactor } from './reactor.js';

const randInt = max => Math.floor(Math.random() * max);

const b1 = document.querySelector("button.add-score");
b1.addEventListener("click", () => {
  const r = new Reactor(randInt(50));
  scores.value = [...scores.value, r];
});

const b2 = document.querySelector("button.change-score");
b2.addEventListener("click", () => {
  const index = randInt(scores.value.length);
  const randScore = scores.value[index];
  console.log(`index ${index} was ${randScore.value}`);
  randScore.value = randInt(50);
  console.log(`changed to ${randScore.value}`);
});
