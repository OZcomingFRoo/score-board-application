import { createStore } from 'vuex'

export default createStore({
  state: {
    scores: JSON.parse(localStorage.getItem("scores")) || [],
  },
  getters: {
  },
  mutations: {
    addScore(state, score) {
      state.scores.push(score);
      localStorage.setItem("scores", JSON.stringify(state.scores));
    },
  },
  actions: {
  },
  modules: {
  }
});