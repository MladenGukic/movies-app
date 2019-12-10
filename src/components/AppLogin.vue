<template>
  <form @submit.prevent="login">
    <div class="alert alert-danger" v-if="error">
      <strong> {{error}} </strong>
    </div>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" v-model="credentials.email" >
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" v-model="credentials.password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { authService } from '../services/AuthService'
export default {
    data() {
        return {
            credentials: {email: '', password: ''},
            error: ''
        }
    },

    methods: {
        login() {
            authService.login(this.credentials)
            .then(r => {localStorage.setItem('token', r.data.token)})
            .then(() => this.$router.push('/movies'))
            .catch(error => this.error = error.response.data.error)
        }
    }
}
</script>

<style>

</style>