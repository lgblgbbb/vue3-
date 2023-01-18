import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// 刷新不丢数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
