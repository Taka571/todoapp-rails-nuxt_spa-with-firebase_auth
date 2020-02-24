const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setFlash(state, payload) {
    state.flash = payload
  }
}

export default mutations
