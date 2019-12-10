<template>
  <div class="container">
    <form @submit.prevent="register">
  <div class="form-group">
    <label>Your name</label>
    <input placeholder="Name" type="text" class="form-control" v-model="form.name">
    <div class="alert alert-danger" v-if="errors.name">
            <strong>{{errors.name[0]}}</strong>
     </div>
  </div>
  <div class="form-group">
    <label>Email address</label>
    <input placeholder="Email" type="email" class="form-control" v-model="form.email">
     <div class="alert alert-danger" v-if="errors.email">
            <strong>{{errors.email[0]}}</strong>
     </div>
  </div>
  <div class="form-group">
    <label>Password</label>
     <input type="password" placeholder="Password" class="form-control" v-model="form.password">
     <div class="alert alert-danger" v-if="errors.password">
            <strong>{{errors.password[0]}}</strong>
     </div>
  </div>
  <div class="form-group">
    <input type="password" placeholder="Confirm Password" class="form-control" >     
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import { authService } from '../services/AuthService'
export default {
    data() {
        return {
            form: {name: "", email: "", password: ""},
            errors: {}
        }
    },

    methods: {
        register() {
            authService.register(this.form)
            .then(() => this.$router.push('/login'))
            .catch(error => this.errors =  error.response.data.errors)
        }
    }
}
</script>

<style>

</style>