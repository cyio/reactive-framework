import { Reactor, computed } from "./reactor.js";

export const scores = new Reactor([]);

export const highScore = computed(() => {
  let highestVal = 0;
  for (const score of scores.value) {
    if (score.value <= highestVal) continue;
    highestVal = score.value;
  }
  return highestVal;
});
