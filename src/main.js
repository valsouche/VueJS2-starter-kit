import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: require('./home/home.vue'),
    name: 'home'
  },
  {
    path: '/custom-view',
    component: require('./view2/view2.vue'),
    name: 'view2'
  },
  {
    path: '*',
    redirect: '/'
  }
]

var router = new VueRouter({
  mode: 'history',
  routes
})

var app = new Vue({
  el: '#app',
  router,
  render: h => h(require('./app.vue'))
})
