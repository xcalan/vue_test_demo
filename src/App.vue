<template>
  <div id="app">
    <div id="nav">
      <router-link to="/demo">Demo</router-link> |
      <router-link to="/hello">Hello</router-link> |
      <router-link to="/elementUI">elementUI</router-link> |
      <router-link to="/echarts">Echarts示例</router-link> |
      <router-link to="/nestrouter">嵌套路由</router-link> |
      <router-link to="/methods_computed_watch">methods、computed、watch属性</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
