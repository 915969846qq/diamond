<template>
<div>
  <el-row>
  <el-col :span="15" :offset="5">
  <productdetailbuycomponent></productdetailbuycomponent>


<!--      //吸顶效果-->
      <div class="product-info-menu " id="product-info-menu" >
          <a @click="chakan('xiangqing')" class="xiangqing on">商品详情</a>
          <i>/</i>
          <a @click="chakan('canshu')" class="canshu">商品参数</a>
          <i>/</i>
          <a @click="chakan('pingjia')" class="pingjia">全部评价  {{$store.state.wedding.productbuy.commentnum}}</a>
          <i>/</i>
          <a @click="chakan('serviceshouhou')" class="serviceshouhou">售后服务</a>
          <i>/</i>
          <a @click="chakan('moresameproduct')" class="moresameproduct">更多现货</a>
      </div>
    <div v-if="xiangqing"> <productdetailone></productdetailone></div>
    <div v-if="canshu"> <canshu ></canshu></div>
      <div v-if="pingjia"> <pingjia ></pingjia></div>
   <div v-if="serviceshouhou"> <serviceshouhou ></serviceshouhou></div>
   <div v-if="moresameproduct"> <moresameproduct ></moresameproduct></div>


<!--    三张图宣传区-->
      <div class="product-info-bottom">
          <a @click="producttuijian('jingmei')" class="jingmei on">精美包装</a>
          <i>/</i>
          <a @click="producttuijian('quanwei')" class="quanwei">权威认证</a>
          <i>/</i>
          <a @click="producttuijian('tiexin')" class="tiexin">贴心服务</a>
      </div>
      <div class="baozhuang">
        <img src="/api/images/jingmeibaozhuang.jpg" alt="" id="jingmei" >
        <img src="/api/images/quanweirenzheng.jpg" alt="" class="off" id="quanwei">
        <img src="/api/images/tiexinfuwu.jpg" alt="" class="off" id="tiexin">
      </div>
    </el-col>
  </el-row>



</div>
</template>

<script>
 import productdetailbuycomponent from "./productdetailbuycomponent";
  import productdetailone from "./hunjiecomponent/productdetailone";
  import canshu from "./hunjiecomponent/canshu";
  import moresameproduct from "./hunjiecomponent/moresameproduct";
  import serviceshouhou from "./hunjiecomponent/serviceshouhou";
   import pingjia from "./hunjiecomponent/pingjia";


    export default {
        name: 'productdetailbuy',
        data: function () {
            return {
              xiangqing:true,
              canshu:false,
              pingjia:false,
              serviceshouhou:false,
              moresameproduct:false,
            }
        },
      computed:{

      },
      watch: {
        '$route'(to, from){
          if(to.query.id!=from.query.id){
          this.$store.dispatch('productbuy',to.query.id)
          }
 }
 },
      mounted() {
          let that=this
          $(".more-product-same").on("click",function () {
               that.xiangqing=false,
               that.canshu=false,
               that.pingjia=false,
               that.serviceshouhou=false,
                 that.moresameproduct=true;
                  $(".moresameproduct").addClass("on")
                  $(".moresameproduct").siblings().removeClass("on")
          })
        // 监控滚动条高度
        window.addEventListener('scroll', this.handleScroll)
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      },
      components:{
          productdetailbuycomponent:productdetailbuycomponent,
         productdetailone:productdetailone,
        canshu:canshu,
        serviceshouhou:serviceshouhou,
        moresameproduct:moresameproduct,
        pingjia:pingjia
      },
      methods:{
          chakan(n){
            $("."+n).siblings("a").removeClass("on")
            $("."+n).addClass("on")
            console.log(n)
            let myarr=["xiangqing","canshu","pingjia","serviceshouhou","moresameproduct"]
           console.log(myarr.indexOf(n));
            let m=myarr.indexOf(n)
           let my= myarr[m];
            for(let i=0;i<myarr.length;i++){
              this[myarr[i]]=false
            }
           this[my]=true;
          },
        producttuijian(pro){
            $("."+pro).addClass("on")
            $("."+pro).siblings("a").removeClass("on")
            $("#"+pro).removeClass("off");
          $("#"+pro).siblings().addClass("off")
        },
// 监听滚动条高度以实现吸顶效果
        handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          var offsetTop = document.querySelector('#productdetailbuycompoent').offsetTop
          if (scrollTop> offsetTop+745) {
              $("#product-info-menu").addClass("xiding");
            $(".productdetailbuycompoent").css("margin-bottom","130px")

          } else {
            console.log("meiy")
            $("#product-info-menu").removeClass("xiding");
            $(".productdetailbuycompoent").css("margin-bottom","50px")
          }
        },



        }
    }
</script>

<style scoped>
/*//吸顶效果*/

.xiding{
  position: fixed;
  top: -1px;
  z-index: 100;
  width: 100%;
  left: 0;
  border:none;
  margin-top: 0;
}
.product-info-menu,.product-info-bottom{
  border-top: 1px solid black;
  padding: 10px 0;
text-align: center;
  background-color: #fff;
}
.product-info-bottom{
  margin-top: 70px;
}
.product-info-menu>a,.product-info-bottom>a{
  display: inline-block;
  width: 90px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.product-info-menu>a:hover,.product-info-bottom>a:hover{
  color:#ff8a81;
}
  .on{
    color: #ff8a81;
  }
  .off{
    display: none;
  }
.baozhuang{
  text-align: center;
}
</style>
