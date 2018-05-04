import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tarbar/home'


Vue.use(Router)


export default new Router({
  routes: [
    {
       path: '/',
       redirect:'/home'
    },
    {
      path: '/home',
      component:Home
   }
  ],
  linkActiveClass: "mui-active"
})