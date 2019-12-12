import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  }, 

  getters: {
      isAuthenticated: state => state.isAuthenticated
  }, 

  mutations: {
    setIsAuthenticated(state, status) {
      state.isAuthenticated =  status
    } 
  },
  actions: {
    
  },
  modules: {
  }
})
