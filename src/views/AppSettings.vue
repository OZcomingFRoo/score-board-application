<template>
  <div class="w3-container w3-mobile">
    <h1 class="w3-center">Settings</h1>
    <div class="w3-section">
      <label>Increment Points By:</label>
      <input class="w3-input w3-border" v-model.number="incrementPointsByProps" type="number" />
    </div>
    <button class="w3-btn w3-block w3-blue" @click="$router.push('/')">
      Back
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("settings", ["incrementPointsBy"]),
    incrementPointsByProps: {
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
  },
};
</script>
