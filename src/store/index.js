import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 購物車
    items: []
  },
  mutations: {
    // state 代表上面的 state
    // data 代表傳入的吃資料
    addCart (state, data) {
      state.items.push(data)
    },
    delCart (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  }
})
