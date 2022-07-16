import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setId(state, data) {
      state.user = data
    },
    addScore(state, data) {
      // console.log('vuex', data.score);
      if (state.user) {
        state.user.score += data.score
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
