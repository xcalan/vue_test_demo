<template>
  <div>
        <h1>methods属性</h1>
        {{ getFullname() }}
        {{ getFullname() }}
        {{ getFullname() }}
        {{ getFullname() }}
  </div>
</template>

<script>
export default {
  name: "Methods",
  data() {
    return {
        firstname:'三',
        lastname:'张'
    };
  },
//   components: {},
//   created() {},
//   mounted() {},
  methods: {
      getFullname:function() {
          console.log('1')   // 4个1     
          return this.lastname + this.firstname
      }
  }
};
</script>
<style scoped>
</style>
