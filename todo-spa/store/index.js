import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: {},
      loading: false,
      flash: {
        status: false,
        message: ""
    }
    },
    mutations: {
      setUser(state, payload) {
        state.currentUser = payload
      },
      setLoading(state, payload) {
        state.loading = payload
      },
      setFlash(state, payload) {
        state.flash = payload
    }
    },
    actions: {
    }
  })
}

export default store
