import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Demo from '../views/Demo.vue'
import Element1 from '../views/Element.vue'
import Echarts from '../views/Echarts.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    { 
      path:'*',
      redirect:'/demo' 
    },//路由重定向
    {
    path: '/hello',
    name: 'Hello',
    component: Hello
    },
    {
      path: '/elementUI',
      name: 'Element',
      component: Element1
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }

]

const router = new VueRouter({
  routes
})

export default router
