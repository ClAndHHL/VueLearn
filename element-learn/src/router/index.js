import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayoutDemo from '@/views/layout/LayoutDemo'
import ContainerDemo from '@/views/container/ContainerDemo'
import ButtonDemo from '@/views/button/ButtonDemo'
import Form1 from '@/views/form/Form1'
import SelectForm from '@/views/form/SelectForm'
import SwitchDemo from '@/views/form/SwitchDemo'
import DateTimePicker from '@/views/form/DateTimePicker'
import Upload from '@/views/form/Upload'
import ElForm from '@/views/form/ElForm'
import Table from '@/views/data/Table'

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
    },
    {
      path: '/buttondemo',
      name: 'ButtonDemo',
      component: ButtonDemo
    },
    {
      path: '/form1',
      name: 'Form1',
      component: Form1
    },
    {
      path: '/selectform',
      name: 'SelectForm',
      component: SelectForm
    },
    {
      path: '/switchdemo',
      name: 'SwitchDemo',
      component: SwitchDemo
    },
    {
      path: '/datetimepicker',
      name: 'DateTimePicker',
      component: DateTimePicker
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/elform',
      name: 'ElForm',
      component: ElForm
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
