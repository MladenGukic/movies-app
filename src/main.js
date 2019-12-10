import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppMovies from './components/AppMovies'
import AddMovie from './components/AddMovie'
import AppLogin from './components/AppLogin'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'index', path: '/', redirect: 'movies'},
  {name: 'movies', path: '/movies', component: AppMovies},
  {name: 'add', path: '/add', component: AddMovie},
  {name: 'login', path: '/login', component: AppLogin},
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
  } else {
    next('/login')
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
