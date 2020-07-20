<template>

<div>

  <el-row class="banner">
    <el-col ></el-col>
    <el-col :span="22" :offset="1">
      <router-link to="/">首页&nbsp;</router-link>
      <span>&gt;</span>
      <router-link to="/wedding">婚戒</router-link>
    </el-col>
  </el-row>
 <el-row>
   <el-col :span="22" :offset="1">
     <el-row>
       <el-col :span="4">
<!--         左边导航栏-->
         <div class="leftsection">
           <weddingchooseleft class="border"></weddingchooseleft>
<!--           热卖推荐-->
           <recommendproducts></recommendproducts>
         </div>
       </el-col>
       <el-col :span="19" :offset="1">
<!--         右边导航栏-->
         <rightchoosewedding></rightchoosewedding>

         <weddingproduct></weddingproduct>

       </el-col>
     </el-row>
   </el-col>
 </el-row>
</div>

</template>

<script>
  import weddingchooseleft from "./hunjiecomponent/weddingchooseleft";
  import recommendproducts from "./hunjiecomponent/recommendproducts";
  import rightchoosewedding from "./hunjiecomponent/rightchoosewedding2";
  import weddingproduct from "./hunjiecomponent/weddingproduct";
  import weddingproductcomponent from "./hunjiecomponent/weddingproductcomponent";
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
        name: 'wedding',
        data: function () {
            return {

            }
        },
     created(){
          this.$store.dispatch("getproduct");

     },


    components:{
      weddingproductcomponent:weddingproductcomponent,
          weddingchooseleft:weddingchooseleft,
        recommendproducts:recommendproducts,
        rightchoosewedding:rightchoosewedding,
       weddingproduct:weddingproduct
        },
    mounted() {
          let that=this;

    },
    // destroyed() {
    //       this.$store.state.wedding.choosedform={}
    // }
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
  background-image: url("/api/images/list_pic_wed.jpg");
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
