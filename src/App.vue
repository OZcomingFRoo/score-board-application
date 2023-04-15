<template>
  <div id="app" class="w3-container w3-mobile">
    <div class="w3-right">
      <i class="w3-xxxlarge ai-gear settings" @click="goToSettings"></i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // Add this method to navigate to the settings page
    goToSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>

<style>
.settings {
  text-decoration: none;
}

.settings:active {
  color: cadetblue;
  background: none;
}
</style>
