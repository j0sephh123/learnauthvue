import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import jwtDecode from 'jwt-decode'

const baseURL = 'http://localhost:3000/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    loginMutation(state, payload) {
      let decoded = jwtDecode(payload);

      state.currentUser = {
        id: decoded.id,
        user: decoded.name,
      }
    },
    logoutMutation(state){
      localStorage.removeItem('token');
      state.currentUser = null;
    }
  },
  actions: {
    async loginAction({commit}, payload) {
      const user = await axios.post(baseURL + 'login', payload)
      // set token
      localStorage.setItem('token', user.data.token);
      // commit
      commit('loginMutation', user.data.token)
    }
  },
  getters: {
    currentUserGetter: state => state.currentUser
  }
})
