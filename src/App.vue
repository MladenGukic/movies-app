<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
  <router-link class="navbar-brand" to="/movies">  Movies </router-link>
  <router-link class="navbar-brand" to="/add">  Add Movie </router-link>
  <router-link class="navbar-brand"  v-if="!isAuthenticated" to="/register"> Register </router-link>
  <router-link class="navbar-brand" v-if="!isAuthenticated" to="/login">  Login </router-link>
  <button class="btn btn-secondary" v-else @click="logout">Logout</button>
</nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },

  methods: {
    logout() {
      localStorage.setItem('token', '')
      this.$store.commit('setIsAuthenticated', false )
      this.$router.push('/login')
    }
  }
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
