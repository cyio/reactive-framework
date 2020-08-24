import { Reactor, computed } from "./reactor.js";

export const score1 = new Reactor(0);
export const score2 = new Reactor(0);
export const highScore = computed(() => Math.max(score1.value, score2.value));
