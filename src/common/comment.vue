  <template>
       <div class="newsContent">
        <h4>发表评论</h4>
        <hr>
        <textarea name="" id="" cols="30" rows="3" v-model="comments"></textarea>
        <button class="mui-btn mui-btn-primary" @click="sendComment">发表评论</button>
         <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(v,i) in dataList" :key="i">
             <a href="javascript:;">
                <p class="comment-tilte">
                <span>第{{i+1}}楼</span>
                <span>发表时间：{{v.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="mui-pull-right">
                {{v.user_name}}
                </span>
                </p>
                <img src="../assets/images/menu1.png" class="mui-media-object mui-pull-right">
                <div class="mui-media-body">
                <p class="mui-ellipsis comment-content" v-text="v.content"></p>
                </div>
            </a>
          </li>       
          </ul>
           <mt-button type="danger" v-show="showMoreBtn" size="large" :plain="true" @click="more">加载更多</mt-button>
        </div>
    
  </template>
  <script>
  import axios from 'axios'
  import  dateformat  from '../filters/dateformat'
  import { Toast } from "mint-ui";
  export default {
          data(){
            return {
                currentIndex:1,
                dataList:[],
                showMoreBtn:true,
                comments:''
            }
          },
          methods:{
                  getData(){ 
                   axios({
                   url:'http://www.escook.cn:3000/api/getcomments/'+this.id+"?pageindex="+this.currentIndex
                   }).then(res=>{
                           
                        if(res.data.status==0){
                                  this.dataList.push(...res.data.message);
                        };
                        if(res.data.message.length===0){
                                this.showMoreBtn=false
                                  Toast('没有更多数据了')
                        }
                   })
                  },
                more(){
                   this.currentIndex++;
                   this.getData();
               },
               sendComment(){
                 if(this.comments.trim()){
                        axios({
                        url:'http://www.escook.cn:3000/api/postcomment/'+this.id,
                        method:'post',
                        data: "content=" + this.comments  }).then(res=>{
                                 if(res.data.status==0){
                                              this.dataList.unshift({
                                "add_time":new Date(),
                                "content":this.comments,
                                "user_name=":"匿名用户"
                      }),
                      this.comments=""
                                 } 
                        })
                        }                     
               }    
          },
          props:["id"],
         created(){
             this.getData();
         },
         filters:{
             dateformat
         }

    
  }
  </script>
  <style>
    .newsContent{
              padding:0 5px;
    }
    textarea{
        margin-top:10px;
        margin-bottom:0px;
    }
    .mint-button{
               margin-top:15px;
    }
  </style>
  
  
  
       