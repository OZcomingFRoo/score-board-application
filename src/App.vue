<template>
  <div id="app">
    <score-board></score-board>
  </div>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";

export default {
  components: {
    ScoreBoard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
