import { createStore } from 'vuex'

import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [
    // 默认存储在localstorage上
    createPersistedState({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
/* // A模块
const moduleA = {
  // 子模块state建议写成函数
  state: () => {
    return {
      username: 'moduleA'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'AAA'
    }
  }
}
// B模块
const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  state: () => {
    return {
      username: 'moduleB'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'BBB'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'BBB' + state.username
    }
  },
  actions: {
    updateName ({ commit }) {
      setTimeout(() => {
        commit('updateName')
      }, 1000)
    }

  }
}
export default createStore({
  modules: {
    moduleA,
    moduleB
  }

}) */

// vue2.0 new Vuex.store({})sssssssssss
// vue3.0 创建仓库createStore({})
// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName (context) {
//       setTimeout(() => {
//         context.commit('updateName')
//       }, 1000)
//     }
//   },
//   modules: {
//   }
// })
