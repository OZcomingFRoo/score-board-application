<template>
  <div id="app" class="w3-container w3-mobile">
    <div class="w3-right">
      <router-link to="/settings">
        <i class="material-icons w3-large">settings</i>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
