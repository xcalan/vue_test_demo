import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Demo from '../views/Demo.vue'
import Element1 from '../views/Element.vue'
import Echarts from '../views/Echarts.vue'
import NestRouter from '../views/NestRouter.vue'
  import Router1 from '../components/nestrouter/router1.vue'
  import Router2 from '../components/nestrouter/router2.vue'

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
    },
    {
      path: '/nestrouter',
      name: 'NestRouter',
      component: NestRouter,
      children:[
        {
          path:'router1',
          component:Router1
        },
        {
          path:'router2',
          component:Router2
        }
      ]
    }

]

const router = new VueRouter({
  routes
})

export default router
