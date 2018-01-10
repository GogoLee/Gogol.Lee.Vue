import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>require(['../components/view/shared/layout.vue'],resolve),
      children:[
        {
          path: '/home',
          component: resolve => require(['../components/view/home/home.vue'], resolve)
        },
        {
          path: '/form',
          component: resolve => require(['../components/view/form/baseForm.vue'], resolve)
        },
        {
          path: '/form_validate',
          component: resolve => require(['../components/view/form/form.vue'], resolve)
        },
        {
          path: '/datatable',
          component: resolve => require(['../components/view/table/table.vue'], resolve)
        },
        {
          path: '/datasource',
          component: resolve => require(['../components/view/table/datasource.vue'], resolve)
        },
      ]
    }
  ]
})
