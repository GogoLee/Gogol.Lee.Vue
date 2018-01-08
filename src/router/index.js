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
      ]
    }
  ]
})
