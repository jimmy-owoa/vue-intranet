import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/posts'
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import(/* webpackChunkName: "about" */ './views/Posts.vue')
    },
    {
      path: '/posts/:id',
      name: 'post-show',
      component: () => import(/* webpackChunkName: "about" */ './views/Show.vue')
    }
  ]
})
