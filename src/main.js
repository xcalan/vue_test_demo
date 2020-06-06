import Vue from 'vue'
import App from './App.vue'

// 导入路由配置文件
import router from './router'

// 导入Vuex配置文件
import store from './store'

// 导入所有依赖
import './plugins'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
