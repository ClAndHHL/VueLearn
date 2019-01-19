import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sass1 from '@/views/Sass1'
import Css1 from '@/views/Css1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sass1',
      name: 'Sass1',
      component: Sass1
    },
    {
      path: '/css1',
      name: 'Css1',
      component: Css1
    }
  ]
})
