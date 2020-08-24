import { scores } from "./data.js";
import { Reactor } from "./reactor.js";

const b1 = document.querySelector("button.add-score");
b1.addEventListener("click", () => {
  const num = ~~(Math.random() * 100);
  const score = new Reactor(num);
  scores.value = [...scores.value, score];
});
