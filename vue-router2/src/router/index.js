import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChildEmitDemo from '@/components/ChildEmitDemo'
import IsDemo from '@/components/IsDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/ChildEmitDemo',
      name:'ChildEmitDemo',
      component:ChildEmitDemo
    },
    {
      path:'/IsDemo',
      name:'IsDemo',
      component:IsDemo
    }
  ]
})
