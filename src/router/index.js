import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Demo from '../views/Demo.vue'
import Element1 from '../views/Element.vue'
import Echarts from '../views/Echarts.vue'
import NestRouter from '../views/NestRouter.vue'
  import Router1 from '../components/nestrouter/router1.vue'
  import Router2 from '../components/nestrouter/router2.vue'
import Methods_computed_watch from '../views/Methods_computed_watch.vue'
  import Methods from '../components/methods_computed_watch/methods_prop.vue'
  import Computed from '../components/methods_computed_watch/computed_prop.vue'
  import Watch from '../components/methods_computed_watch/watch_prop.vue'

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
    },
    {
      path:'/methods_computed_watch',
      component:Methods_computed_watch,
      children:[
        {
          path:'methods',
          component:Methods
        },
        {
          path:'computed',
          component:Computed
        },
        {
          path:'watch',
          component:Watch
        }
      ]
    }

]

const router = new VueRouter({
  routes
})

export default router
