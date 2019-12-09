<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
  <router-link class="navbar-brand" to="/movies">  Movies </router-link>
  <router-link class="navbar-brand" to="/add">  Add Movie </router-link>
</nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
