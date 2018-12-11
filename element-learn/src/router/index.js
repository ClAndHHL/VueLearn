import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayoutDemo from '@/views/layout/LayoutDemo'
import ContainerDemo from '@/views/container/ContainerDemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layoutdemo',
      name: 'LayoutDemo',
      component: LayoutDemo
    },
    {
      path: '/containerdemo',
      name: 'ContainerDemo',
      component: ContainerDemo
    }
  ]
})
