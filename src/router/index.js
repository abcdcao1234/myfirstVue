import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tarbar/home';
import NewsDetail from '../components/news/details'
import NewsList from '../components/news/lists'
import  GoodsList from '../components/goods/lists'
import  GoodsDetail from '../components/goods/details'
import  picturesList from '../components/pictures/lists'
import  picturesDetail from '../components/pictures/details'
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
   {
    path: '/goods/detail',
    component:GoodsDetail
   },
   {
    path: '/goods',
    component:GoodsList
   },
   {
    path: '/pics/:id',
    component:picturesList
   },
   {
    path: '/pics/detail',
    component:picturesDetail
   },
   
  ],
  linkActiveClass: "mui-active"
})
