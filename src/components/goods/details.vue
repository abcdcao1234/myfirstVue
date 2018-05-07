<template>
   <div class="page">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item v-for="(v,i) in lunbos" :key="i">
                                   <img :src="v.src" alt="">
                            </mt-swipe-item>
                        </mt-swipe>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="price"> 
                            <span>市场价 : <del>￥{{goodsInfo.market_price}}</del></span>&nbsp;&nbsp;
                            销售价 : <span class="sale_price">￥{{goodsInfo.sell_price}}</span>
                        </div>
                        <div class="count">
                            <span>购买数量:</span>
                            <numbox :min="0" :max="goodsInfo.stock_quantity" 
                            :step="1" :value="count" @input="count=$event"></numbox>
                        </div>
                        <div class="btns">
                           <mt-button type="primary">立即购买</mt-button>
                           <mt-button type="danger" @click="addToCart">加入购物车</mt-button>
                        </div>

					</div>
				</div>
			</div>
             <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                         <p>商品货号:{{goodsInfo.goods_no}}</p>
                         <p>库存情况:{{goodsInfo.stock_quantity}}件</p>
                         <p>上架时间:{{goodsInfo.add_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</p>					
					</div>
				</div>
			</div>
             <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                          <mt-button type="primary" size='large' plain class="prodesc"  @click="$router.push('/goods/desc/'+goodsInfo.id)">商品描述</mt-button>
                           <mt-button type="danger" size='large' plain @click="$router.push('/goods/coment/'+goodsInfo.id)">商品评论</mt-button> 		
					</div>
				</div>
			</div>
             <transition  v-on:before-enter="beforeEnter" v-on:enter="enter">
                <div class="redball"  v-show="isShow"></div>
             </transition>
         
   </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import numbox from '../../common/numbox'
import axios from 'axios'
import dateformat from '../../filters/dateformat'
export default {
      data(){
            return{
                  lunbos:[],
                  goodsInfo:[],
                  count:0,
                  isShow:false
            }
      },
      methods:{
           //加入购物车
            addToCart(){
                    this.isShow=true;
                    this.$store.commit('addToCart',{
                        id:this.$route.params.id,
                        count:this.count
                    })
            },
            
            beforeEnter(el) {
            //给元素加上 过渡效果
            el.style.top = "445px";
            el.style.left = "175px";
            },
            enter(el) {
            //触发一次重绘，先让上面的transition生效
            el.style.transition = "all .3s linear";      
            el.offsetWidth;
            el.style.top = (640 + window.pageYOffset)  +"px";
            el.style.left = "240px";
            this.isShow= false;
            },
     },
     created(){
            axios({
                url:"http://www.escook.cn:3000/api/goods/getinfo/" + this.$route.params.id   
                }).then(res => {
                if (res.data.status == 0) {
                    this.goodsInfo = res.data.message[0];
                }
            }),
            axios({
                url:"http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id         
                }).then(res => {
                        if (res.data.status == 0) {
                            this.lunbos = res.data.message;
                        }
            });
      },
    
     components:{
         numbox 
     },
      filters:{
            dateformat
      },
  
   }
  

</script>
<style scoped>
   .redball {
        z-index: 999;
        top: 445px;
        left: 175px;
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
}

    .mint-swipe {
    height: 180px;
    }
    .mint-swipe img {
    height: 100%;
    }

    .mint-swipe-item {
    text-align: center;
    }

    .mui-card-content-inner > div {
    margin: 10px 0;
    }

    .sale_price {
    color: red;
    font-size: 18px;
    }

    .mui-card-footer {
    display: block;
    }
    .prodesc{
          margin-bottom:20px;
    }
</style>


