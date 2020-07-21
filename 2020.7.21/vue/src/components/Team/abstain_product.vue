<template>
<div>
<!--  现货速发，优选定制-->
  <div class="list-product-title">
  <router-link to="/" class="red">现货速发</router-link>
 <router-link to="/wee">优选定制</router-link>
  </div>
  <div class="list-product-menu">
    <div class="list-product-search">
      <span class="white"><a class="gold">默认</a><span class="iconfont icon-jiantouxia"></span></span>
      <span><a>销量</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a>价格</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a>评价</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a>商品</a> <span class="iconfont icon-jiantoushang"> </span></span>
    </div>
    <div class="list-product-right">
      <span>共 <span class="totalnum">{{$store.state.Abstain.product.length}}</span> 款商品</span>
     <span class="mypage"><span>{{$store.state.Abstain.currentpage}}/{{Math.ceil($store.state.Abstain.product.length/$store.state.Abstain.pageCount)}}</span>
       <span class="iconfont icon-fenye-xiayiye nextpage"></span></span>
    </div>
  </div>
  <abstainproductcomponent></abstainproductcomponent>
<!--跳转网页-->
  <div class="pageto">
    <span class="iconfont icon-fenye-shangyiye"></span>
    <a class="pagetopage" v-for="count in Math.ceil($store.state.Abstain.product.length/$store.state.Abstain.pageCount)" :key="count" @click="myclict(count)">{{count}}</a>
    <span class="iconfont icon-fenye-xiayiye nextpage"></span>
  </div>
</div>
</template>
<script>
  import {mapActions,mapMutations,mapGetters} from 'vuex'
  import abstainproductcomponent from "./abstain_productcomponent";
    export default {
        name: 'weddingproduct',
        data: function () {
            return {}
        },
      components:{
          abstainproductcomponent:abstainproductcomponent
      },
      computed:{
      },
      methods:{ 
        myclict(data){
          this.$store.state.Abstain.currentpage=data;
        }
      },
      mounted() {
          let that=this;
          // $(".pagetopage").on("click",function () {
          //   console.log(that)
          //   that.$store.state.Abstain.currentpage=$(this).html()
          //   console.log($(this).html())
          // });
          $(".icon-fenye-shangyiye").on("click",function () {
            console.log(that.$store.state.Abstain.currentpage)
            if(that.$store.state.Abstain.currentpage<=1){
              that.$store.state.Abstain.currentpage=1
            }else{
              that.$store.state.Abstain.currentpage--;
            }
          });
        $(".nextpage").on("click",function () {
          console.log('next')
          var totalpage=Math.ceil(that.$store.state.Abstain.product.length/that.$store.state.Abstain.pageCount)
          if(that.$store.state.Abstain.currentpage>=totalpage){
            that.$store.state.Abstain.currentpage=totalpage
          }else{
            that.$store.state.Abstain.currentpage++;
          }
        })
        $(".list-product-search").children().on("click",function () {
          $(this).siblings().children().removeClass("gold")
          $(this).children().removeClass("black")
          $(this).children().addClass("gold");
          $(this).siblings().removeClass("white");
          $(this).addClass("white");
          $(".icon-jiantouxia").addClass("icon-jiantoushang");
          $(".icon-jiantouxia").removeClass("icon-jiantouxia");
          $(this).children(".iconfont").addClass("icon-jiantouxia")
        })
      },
      // vue使用时请求数据
      created:function(){
        console.log(this.$store.dispatch('to_abstain',''));
      }
    }
</script>

<style scoped>
.list-product-title{
  border-bottom: 1px solid #e2e1e1;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding-top: 10px;
line-height: 30px;
  height: 30px;
}
  .list-product-title>a{
    display:inline-block;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    top: -3px;
  }
  .black{
    color: black;
  }
.gold{
  color: #f87d74;
}

.list-product-menu{
    display: flex;
    justify-content: space-between;
  }
  .red{
    color: #f87d74;
    border-bottom: 3px solid red;
  }
  a{
    color: black;
    cursor: pointer;
  }
a:hover{
 color:#f87d74;
}
.list-product-title>a:first-child{
  color:#f87d74 ;
}

.list-product-title>a:first-child{
  background-repeat: no-repeat;
  background-position: right;
  /* background-image: url("/api/images/style_list_line.png"); */
}
.list-product-menu{
  margin-top: 10px;
height: 30px;
}
.iconfont{
  cursor: pointer;
}
.white{
  background-color: white;
}
.list-product-search>span:hover{
  background-color: white;
}
.icon-jiantouxia,.icon-jiantoushang,.icon-shijiantouyou,.icon-shijiantouzuo{
  font-size: 12px;
}
  .list-product-search{
    padding: 1px 2px 2px 2px;
    background-color: #efefef;
  }
  .list-product-search>span{
    display: inline-block;
    height: 27px;
    line-height: 29px;
   padding:0 5px;
  }
  .totalnum{
    color: #f6827a;
    font-weight: bolder;
  }
  .list-product-right>span{
    line-height: 30px;
    display: inline-block;
    text-align: center;

  }
  .list-product-right>span:first-child{
    width: 123px;


    background-repeat: no-repeat;
    background-position: right;
    /* background-image: url("/api/images/style_list_line.png"); */
  }
  .mypage>span:first-child{
    display: inline-block;
    padding:0 20px;
  }
  .icon-jiantouyou:hover{
    color: #ff8a81;
    cursor: pointer;
  }
  .pageto{
    flex:1;
    text-align: right;
    
  }
  .pageto>a,.pageto>span{
    display: inline-block;
    border: 1px solid #d6d6d6;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
  }
  .pageto{
    padding:30px 0;
  }
</style>
