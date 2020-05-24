<template>
  <div class=''>
      <h1>watch属性</h1>
      <input type="text" v-model='content'>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
        content:'123'
    }
  },
  watch:{
      content:function(newValue,oldValue){
          console.log('oldValue:' + oldValue)
          console.log('newValue:' + newValue)
      }
  }
}
</script>
<style scoped>

</style>
