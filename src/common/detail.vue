<template>
   <div>
       <div class="news-detail">
             <div class="newstitle mui-clearfix">
                    <h4>{{article.title}}</h4>
                    <p>
                       <span class="mui-pull-left">发表时间:{{article.add_time|dateformat('YYYY年MM月DD日 HH:mm:ss')}}</span>
                       <span class="mui-pull-right">点击:{{article.click}}次</span>  
                    </p>                            
              </div>
              <hr>
              <slot name="pics"></slot>   
              <div class="newdetail" v-html="article.content">                                     
              </div> 
         </div> 
   </div>
</template>
<script>
import dateformat  from "../filters/dateformat"
export default {
    props: ["article"],
    filters: {
        dateformat
    }
};
</script>

<style>
.news-content img{
    width: 100%;
}
</style>


