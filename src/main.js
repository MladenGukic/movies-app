import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppMovies from './components/AppMovies'
import AddMovie from './components/AddMovie'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'index', path: '/', redirect: 'movies'},
  {name: 'movies', path: '/movies', component: AppMovies},
  {name: 'add', path: '/add', component: AddMovie}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
