import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InfiniteLoad from '@/views/InfiniteLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/infiniteload',
      name: 'InfiniteLoad',
      component: InfiniteLoad
    }
  ]
})
