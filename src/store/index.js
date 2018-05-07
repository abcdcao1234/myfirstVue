// 引入vuex的插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//读本地购物车信息
function readCartsFromLocalstorage(){
      var cartsStr=localStorage.getItem('cart-info')
      if(cartsStr==null||cartsStr.trim()==''){
           return []
      }else{  
        return JSON.parse(cartsStr);
      }
      
      
}
// 写入本地购物车信息
function writeCartsFromLocalstorage(carts){
    localStorage.setItem('cart-info',JSON.stringify(carts));      
}
export default new Vuex.Store({
    state:{
        carts:readCartsFromLocalstorage()
    },
    getters:{
        totalCount:state=>{
            var result =0;
            state.carts.forEach(function(v,i){
                   result += v.count
            })
            return result
        },
        getIds:state=>{
               return state.carts.map(v=>v.id).join(',');
        },
        getCountById:state=>id=>{
               var temp= state.carts.find(v=>v.id==id);
               return temp.count
        }

    },
    mutations:{
      //加入购物车
        addToCart(state,cart){
            let temp = state.carts.find(v=>{
                 return v.id==cart.id
            })
            if(temp){
              temp.count+=cart.count
            }else{
                state.carts.push(cart)
            }
            writeCartsFromLocalstorage(state.carts)
        },
        updateCount(state,cartInfo){
              console.log(cartInfo)
            cartInfo.forEach(v=>{
                   let cart=state.carts.find(e=>{
                        return e.id==v.id
                   })
                   cart.count=v.count
            })
            writeCartsFromLocalstorage(state.carts)
        }
    }
})