<template>
  <div class="page">
      <detail :article="newsinfo"></detail>
      <comment :id="$route.params.id"></comment>     
</div>  
</template>
<script>
import detail from '../../common/detail'
import axios from 'axios'
import dateformat from '../../filters/dateformat'
import comment from '../../common/comment'
export default {
        data(){
           return {
                newsinfo:{} 
            }
          },
        filters:{
              dateformat
        },
        created(){
              axios({
                      url:"http://www.escook.cn:3000/api/getnew/"+this.$route.params.id
              }).then(res=>{
                    if(res.data.status==0){             
                          this.newsinfo = res.data.message[0]
                    }
              })
        },
        components:{
              comment,
              detail
        }
  
}
</script>
<style>
   .mui-btn-primary{
         width:100%;
   }
   .news-detail,news-content{
         padding: 0 5px;
   }
   .newdetail img{
         width:100%;
   }
</style>


