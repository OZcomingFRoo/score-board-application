import { createStore } from "vuex";
import settings from "./settings";

const store = createStore({
  modules: {
    settings,
  },
  state() {
    return {
      scores: JSON.parse(localStorage.getItem("scores")) || [],
    };
  },
  mutations: {
    addScore(state, score) {
      state.scores.push(score);
      localStorage.setItem("scores", JSON.stringify(state.scores));
    },
    incrementScore(state, payload) {
      const player = state.scores.find((s) => s.id === payload.playerId);
      if (player) {
        player.score += payload.incrementPointsBy;
        localStorage.setItem("scores", JSON.stringify(state.scores));
      }
    },
  },
});

export default store;
