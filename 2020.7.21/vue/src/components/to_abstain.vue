<template>
<!-- 对戒左边筛选页面 -->
<div>
  <el-row class="banner">
    <el-col ></el-col>
    <el-col :span="22" :offset="1">
      <router-link to="/">首页&nbsp;</router-link>
      <span>&gt;</span>
      <router-link to="/to_abstain">对戒</router-link>
    </el-col>
  </el-row>
 <el-row>
   <el-col :span="22" :offset="1">
     <el-row>
       <el-col :span="4">
<!--         左边导航栏-->
         <div class="leftsection">
           <abstainchooseleft class="border"></abstainchooseleft>
<!--         热卖推荐-->
           <abstainproducts></abstainproducts>
         </div>
       </el-col>
       <el-col :span="19" :offset="1">
         <rightchooseabstain></rightchooseabstain>
          <router-view></router-view>
       </el-col>
     </el-row>
   </el-col>
 </el-row>
</div>
</template>

<script>
  import abstainchooseleft from "./Team/abstain_chooseleft";
  import abstainproducts from "./Team/abstain_products";
  import rightchooseabstain from "./Team/rightchoose_abstain";
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
        name: 'to_abstain',
        data: function () {
            return {
            }
        },
        components:{
            abstainchooseleft:abstainchooseleft,
            abstainproducts:abstainproducts,
            rightchooseabstain:rightchooseabstain,
            },
        mounted() {
              let that=this;
        },
  }
</script>

<style scoped>
  a{
    color: black;
  }
  a:hover{
    color: #ff8a81;
  }
.banner{
  /*图片从服务器获取,下方并非是错误*/
  background-image: url("/api/images/title.jpg");
  width: 100%;
  height: 356px;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 15px;
  margin-bottom: 35px;
}
.border{
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 30px;
  padding:20px 0 20px 10px;
}
</style>
