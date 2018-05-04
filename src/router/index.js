import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tarbar/home';
import NewsDetail from '../components/news/details'
import NewsList from '../components/news/lists'
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
   },
   {
    path: '/news',
    component:NewsList
   },
   {
    path: '/news/detail/:id',
    component:NewsDetail
   },
   
  ],
  linkActiveClass: "mui-active"
})
