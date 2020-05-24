<template>
  <div>
        <h1>computed属性</h1>
        {{ getFullname }}
        {{ getFullname }}
        {{ getFullname }}
        {{ getFullname }}
        {{ getFullname }}
  </div>
</template>

<script>
export default {
  name: "Methods",
  data() {
    return {
        firstname:'四',
        lastname:'李'
    };
  },
//   components: {},
//   created() {},
//   mounted() {},
  computed: {
      getFullname:function() {
          console.log('1')  // 1个1,因为有缓存
          return this.lastname + this.firstname
      }
  }
};
</script>
<style scoped>
</style>
