<template>
  <div class="w3-container w3-mobile">
    <h1 class="w3-center">Score Board</h1>
    <form @submit.prevent="addScoreEntry">
      <input class="w3-input w3-border" v-model="playerName" type="text" placeholder="Player Name" />
      <input class="w3-input w3-border" v-model="score" type="number" placeholder="Score" />
      <button class="w3-btn w3-block w3-blue">Add Score</button>
    </form>
    <table class="w3-table-all w3-centered">
      <tr>
        <th>Player Name</th>
        <th>Score</th>
        <th>Action</th>
      </tr>
      <tr v-for="s in scores" :key="s.id">
        <td>{{ s.playerName }}</td>
        <td>{{ s.score }}</td>
        <td>
          <button class="w3-btn w3-green" @click="incrementScore(s.id, incrementPointsBy)">
            Increment Score
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      playerName: "",
      score: null,
    };
  },
  computed: {
    ...mapState("settings", ["incrementPointsBy"]),
    ...mapState(["scores"]),
    incrementBy: {
      get() {
        return this.incrementPointsBy;
      },
      set(newVal) {
        this.setIncrementPointsBy(newVal);  
      },
    }
  },
  methods: {
    ...mapMutations("settings", ["setIncrementPointsBy"]),
    ...mapMutations(["addScore"]),
    // updateIncrementPointsBy() {
    //   this.setIncrementPointsBy(this.incrementPointsBy);
    // },
    addScoreEntry() {
      if (!this.playerName || this.score === null) {
        return;
      }

      this.addScore({
        id: Date.now(),
        playerName: this.playerName,
        score: this.score,
      });

      this.playerName = "";
      this.score = null;
    },
    incrementScore(playerId) {
      this.$store.commit("incrementScore", {
        playerId,
        incrementPointsBy: parseInt(this.incrementPointsBy),
      });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
