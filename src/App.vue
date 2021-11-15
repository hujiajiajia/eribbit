<template>
<div>
  <!-- 使用模块A的username -->
  <p>{{$store.state.moduleA.username}}</p>
  <!-- 使用模块A的getters -->
  <p>{{$store.getters.changeName}}</p>
  <!-- 使用模块B的username -->
  <p>{{$store.state.moduleB.username}}</p>
  <!-- 使用模块B的getters -->
  <p>{{$store.getters['moduleB/changeName']}}</p>
  <button @click="updateName">修改username</button>
  <button @click="actionsFn">actionsFn</button>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',

  setup () {
    // 使用vuex仓库
    const store = useStore()
    const updateName = () => {
      // 提交B模块的修改
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      // 调用B模块的actions
      store.dispatch('moduleB/updateName')
    }
    return { updateName, actionsFn }
  }

}
</script>

<style>

</style>
