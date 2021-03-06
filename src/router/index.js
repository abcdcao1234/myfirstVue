import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tarbar/home';
// 新闻
import NewsDetail from '../components/news/details'
import NewsList from '../components/news/lists'
// 商品
import  GoodsList from '../components/goods/lists'
import  Gooddesc from '../components/goods/desc'
import  Goodcomment from '../components/goods/coment'
import  GoodsDetail from '../components/goods/details'
// 图片
import  picturesList from '../components/pictures/lists'
import  picturesDetail from '../components/pictures/details'
// 购物车
import Cart from '../components/tarbar/cart'
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
    path: '/cart',
    component:Cart
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
    path: '/goods/detail/:id',
    component:GoodsDetail
   },
   {
    path: '/goods/desc/:id',
    component:Gooddesc
   },
   {
    path: '/goods/coment/:id',
    component:Goodcomment
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
    path: '/pics/details/:id',
    component:picturesDetail
   },
   
  ],
  linkActiveClass: "mui-active"
})
