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
    }
  },
  actions: {
  },
  modules: {
  }
})
