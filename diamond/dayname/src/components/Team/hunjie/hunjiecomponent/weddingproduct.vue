<template>

<div>
<!--  现货速发，优选定制-->
  <div class="list-product-title">
    <router-link to="/" class="red">现货速发</router-link>
    <router-link to="/wee">优选定制</router-link>
  </div>
  <div class="list-product-menu">
    <div class="list-product-search">
      <span class="white " ><a class="gold order" id="orderid">默认</a><span class="iconfont icon-jiantouxia"></span></span>
      <span><a id="ordersellnum" class="order">销量</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a id="orderprice" class="order">价格</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a id="ordercommentnum" class="order">评价</a> <span class="iconfont icon-jiantoushang"> </span></span>
      <span><a id="orderweddingname" class="order">商品</a> <span class="iconfont icon-jiantoushang"> </span></span>
    </div>
    <div class="list-product-right">
        <span>共 <span class="totalnum" v-if="$store.state.wedding.product.length>=1">
        {{$store.state.wedding.product.length}}</span>
        <span v-else>0</span>
        款商品</span>
     <span class="mypage">
       <span v-if="$store.state.wedding.product.length>=1">
       <span v-if="$store.state.wedding.currentpage>Math.ceil($store.state.wedding.product.length/$store.state.wedding.pageCount)">
         {{$store.state.wedding.currentpage=1}}/{{Math.ceil($store.state.wedding.product.length/$store.state.wedding.pageCount)}}
       </span>
       <span v-else>
           {{$store.state.wedding.currentpage}}/{{Math.ceil($store.state.wedding.product.length/$store.state.wedding.pageCount)}}
       </span>
       </span>

       <span class="iconfont icon-jiantouyou nextpage"></span></span>
    </div>
  </div>
  <weddingproductcomponent></weddingproductcomponent>
<!--跳转网页-->
  <div class="pageto">
    <span class="iconfont icon-shijiantouzuo prepage"></span>
    <span v-if="$store.state.wedding.product.length>=1">
    <a class="pagetopage" v-for="(count,index) in Math.ceil($store.state.wedding.product.length/$store.state.wedding.pageCount)" @click="pagetopage" :key="'page'+index">{{count}}</a>
    </span>
    <span class="iconfont icon-shijiantouyou nextpage" ></span>
  </div>
</div>
</template>

<script>
  import {mapActions,mapMutations,mapGetters} from 'vuex'
  import weddingproductcomponent from "./weddingproductcomponent";
    export default {
        name: 'weddingproduct',
        data: function () {
            return {}
        },
        components:{
            weddingproductcomponent:weddingproductcomponent
        },
        computed:{
          // search:function () {
          //   if()
          // }
        },
      mounted() {
          let that=this;
// 上一页
          $(".icon-shijiantouzuo").on("click",function () {
            if(that.$store.state.wedding.currentpage<=1){
              that.$store.state.wedding.currentpage=1
            }else{
              that.$store.state.wedding.currentpage--;
            }
          });
// 下一页
        $(".nextpage").on("click",function () {
          var totalpage=Math.ceil(that.$store.state.wedding.product.length/that.$store.state.wedding.pageCount)
          if(that.$store.state.wedding.currentpage>=totalpage){
            that.$store.state.wedding.currentpage=totalpage;
            console.log( that.$store.state.wedding.currentpage)
          }else{
            console.log( that.$store.state.wedding.currentpage)
            that.$store.state.wedding.currentpage++;
          }
        });
        // 商品排序
        $(".order").on("click",function () {
          let myorder=$(this).attr("id");
           let orderproduct=myorder.substring(5,myorder.length);
           console.log(orderproduct)
          that.$store.dispatch('orderproduct',orderproduct)
          }
        )
// 排序事件
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
      methods:{
          pagetopage(eve){
            console.log(eve.currentTarget.childNodes[0].textContent)
            this.$store.state.wedding.currentpage=eve.currentTarget.childNodes[0].textContent
          }
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
  background-image: url("/api/images/style_list_line.png");
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
    background-image: url("/api/images/style_list_line.png");
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
  .pageto a,.prepage,.icon-shijiantouyou{
    display: inline-block;
    border: 1px solid #d6d6d6;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
.pageto{
  padding:30px 0;
}
</style>
