<template>
   <div class="page">
         <detail :article="picsInfo">
           <div slot="pics">
                    <vue-preview :slides="thumbs"></vue-preview>              
           </div>
           

         </detail>
         <comment :id="$route.params.id"></comment>
   </div>
</template>
<script>
import axios from 'axios'
import detail from '../../common/detail'
import comment from '../../common/comment'
export default {
    data(){
          return {
                picsInfo:[],
                thumbs:[]
          }
    },
    created(){
        axios({
                  url:"http://www.escook.cn:3000/api/getthumimages/"+this.$route.params.id
           }).then(res=>{
                 if(res.data.status==0){
                       res.data.message.forEach(v=>{
                               v.msrc= v.src;
                               v.alt="pic";
                               v.title="图片";
                               v.w=600;
                               v.h=400;
                        })
                        this.thumbs =res.data.message
                 }
                
           })
           axios({
                  url:"http://www.escook.cn:3000/api/getimageInfo/"+this.$route.params.id
           }).then(res=>{
                 if(res.data.status==0){
                        this.picsInfo = res.data.message[0]
                 }
                 
           })
    },
    components:{
          detail,
          comment

    }
}
</script>
<style>

.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>


