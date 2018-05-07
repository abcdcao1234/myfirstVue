<template>
    <div class="page">
        <div class="goods-list">
            <div class="mui-card" v-for="(v,i) in cartInfo" :key="i">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="v.isChecked"></mt-switch>
                        <img  class="thumb_img" :src="v.thumb_path">
                        <div class="info">
                            <h4>{{v.title}}</h4>
                            <div class="box">
                                <span class="price">￥{{v.sell_price}}</span>
                                <numbox v-model="v.count" :min="0" :max="Infinity" :step="1"></numbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card" >
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="amount">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品
                            <span class="red"></span> {{totalCount}}件 
                            总价：<span class="red">￥{{totalPrice}}</span>
                            
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../../common/numbox'
import axios from 'axios'
export default {
    components:{
          numbox
    },
    data(){
         return {
               cartInfo:[]
         }
    },
    created(){
            axios({
                  url:'http://www.escook.cn:3000/api/goods/getshopcarlist/'+this.$store.getters.getIds
           }).then(res=>{
                res.data.message.forEach(v=>{
                        v.count=this.$store.getters.getCountById(v.id);
                        v.isChecked=false
                })
               if(res.data.status==0){
                    this.cartInfo = res.data.message
                    
               }
           })
    },
    computed:{
        totalCount(){
              var sum=0
             this.cartInfo.forEach(v=>{
                 if(v.isChecked){
                       sum+=v.count
                 }
           })
         return sum;       
       },
       totalPrice(){
              var sum=0
             this.cartInfo.forEach(v=>{
                 if(v.isChecked){
                       sum+=v.count*v.sell_price
                 }
           })
         return sum;       
       }
    },
    watch:{
          cartInfo:{
               handler(){
                     this.$store.commit('updateCount',this.cartInfo)
               },
                deep:true
          }
    }
    


  
}
</script>
<style scoped>
.goods-list .mui-card-content-inner .thumb_img {
  width: 60px;
  height: 60px;
}

.goods-list .mui-card-content-inner .info {
  flex: 1;
}

.goods-list .mui-card-content-inner .info h4 {
  font-size: 14px;
}

.goods-list .mui-card-content-inner .info .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-list .mui-card-content-inner .info .box .price {
  font-size: 16px;
  color: red;
}

.goods-list .mui-card-content-inner {
  display: flex;
}

.mui-card-content-inner .amount {
    flex: 1;
}


.mui-card-content-inner .red {
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>


