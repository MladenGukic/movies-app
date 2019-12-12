import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppMovies from './components/AppMovies'
import AddMovie from './components/AddMovie'
import AppLogin from './components/AppLogin'
import AppRegister from './components/AppRegister'
import MovieDetails from './components/MovieDetails'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'index', path: '/', redirect: 'movies'},
  {name: 'movies', path: '/movies', component: AppMovies},
  {name: 'add', path: '/add', component: AddMovie},
  {name: 'movie', path: '/movies/:id', component: MovieDetails},
  {name: 'login', 
  path: '/login', 
  component: AppLogin,
  beforeEnter: (to, from, next) => {
    if(localStorage.getItem('token')) {
      next('/movies')
    } else {
      next()
    }
  }},

  {name: 'register', 
  path: '/register', 
  component: AppRegister,
  beforeEnter: (to, from, next) => {
    if(localStorage.getItem('token')) {
      next('/movies')
    } else {
      next()
    }
  }}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(localStorage.getItem('token')) {
    next()
  } else if(!localStorage.getItem('token') && to.name === 'login') {
    next ()
  } else if(!localStorage.getItem('token') && to.name === 'register') {
    next()
  } else {
    next('/login')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
