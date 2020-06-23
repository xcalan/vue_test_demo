<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message_1" @item-click="cpnclick"/><!-- 接受事件 -->
    ---------
    <br><input type="text" :value="aaa" @input="aaa=$event.target.value">
    {{ aaa }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Hello',
  data() {
    return {
      message_1: 'Welcome to Your Vue.js App',
      aaa: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    cpnclick(item){ // 传入子组件传过来的值（item）
      console.log('aaa')
      console.log(item)
    }
  }
}
</script>
