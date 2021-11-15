import { createStore } from 'vuex'

// A模块
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

})

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
