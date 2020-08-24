import { Reactor, computed } from "./reactor.js";

export const scores = new Reactor([]);

export const highScore = computed(() => {
  const nums = scores.value.map(s => s.value);
  return Math.max(...nums, 0);
});
