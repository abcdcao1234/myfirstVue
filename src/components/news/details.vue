<template>
  <div class="page">
        <div class="news-detail">
             <div class="newstitle mui-clearfix">
                    <h4>{{newsinfo.title}}</h4>
                    <p>
                       <span class="mui-pull-left">发表时间:{{newsinfo.add_time|dateformat('YYYY年MM月DD日 HH:mm:ss')}}</span>
                       <span class="mui-pull-right">点击:{{newsinfo.click}}次</span>  
                    </p>                            
              </div>
              <hr>   
              <div class="newdetail" v-html="newsinfo.content">                                     
              </div> 
              <div class="news-content">
                <comment :id="$route.params.id"></comment>
              </div>       
         </div> 
      
</div>  
</template>
<script>
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
              comment
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


