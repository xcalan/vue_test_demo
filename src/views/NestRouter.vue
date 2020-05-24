<template>
  <div class='nest_router'>
      <router-link to="/nestrouter/router1">子路由1</router-link> |
      <router-link to="/nestrouter/router2">子路由2</router-link>

      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'nest_router',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>

</style>
