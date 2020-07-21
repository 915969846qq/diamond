<template>
<!-- 对戒主页展示商品 -->
<div class="myflex">
 <div v-for="item in $store.state.Abstain.product.slice(($store.state.Abstain.currentpage-1)*$store.state.Abstain.pageCount,$store.state.Abstain.currentpage*$store.state.Abstain.pageCount)" :key="item.name" class="product-wrap">
   <router-link :to="{name:'productdetailbuycomponents', query:{abstain_id:item.abstain_id} }">
     <div class="imgheight">
       <img :src="'/api/images/aihe_1.jpg'" alt="" class="firstimg">
       <img :src="'/api/images/aihe_2.jpg'" alt="" class="secondimg">
     </div>
     <div>
       <p class="myabstainname">{{item.b_name}}</p><p class="myprice">￥{{item.abstain_price}}</p>
       <p>
         <span>售出 </span>{{item.abstain_Sale}}
         <span>评论 </span>{{item.abstain_stock}}
       </p>
     </div>
   </router-link>
 </div>
</div>
</template>

<script>
    export default {
        name: 'abstainproductcomponents',
        data: function () {
            return {
            }
        }
    }
</script>

<style scoped>
  .secondimg{
  display: none;

  }

  .product-wrap:hover .firstimg{
    display: none;
  }
  .product-wrap:hover .secondimg{
    display: block;
  }
img{
  width: 200px;
  height: 204px;
}
.imgheight{
  height: 204px;
}
  .myflex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .product-wrap{
    padding: 0 50px;
    height: 275px;
    margin-top: 25px;
    margin-right: 25px;
    border-bottom: 1px solid #d6d6d6;
  }
.product-wrap:hover{
  border-bottom: 5px solid #ff8a81;
  height: 271px;
}
  a{
    color: black;
  }
  p{
    text-align: center;
  }
.myprice{
  font-weight: bolder;
}
  .myabstainname:hover,.myprice{
    color: #ff8a81;
  }
</style>
