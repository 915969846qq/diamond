<template>
<div class="myflex" v-if="$store.state.wedding.product.length>=1">
 <div v-for="(item,index) in $store.state.wedding.product.slice(($store.state.wedding.currentpage-1)*$store.state.wedding.pageCount,$store.state.wedding.currentpage*$store.state.wedding.pageCount) " class="product-wrap" :key="'img'+index">
   <router-link :to="{name:'productdetailbuy', query:{id:item.id} }" >
     <div class="imgheight">
       <img :src="'/api/images/goodnight/23320_388.jpg'" alt="" class="firstimg">
       <img :src="'/api/images/goodnight/23320_399.jpg'" alt="" class="secondimg">
     </div>
     <div>
       <p class="myweddingname">{{item.weddingname}}</p><p class="myprice">￥{{item.price}}</p>
       <p>
         <span>售出 </span>{{item.sellnum}}
         <span>评论 </span>{{item.commentnum}}
       </p>
     </div>
   </router-link>
 </div>
</div>
</template>

<script>
    export default {
        name: 'weddingproductcomponent',
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
  .myweddingname:hover,.myprice{
    color: #ff8a81;
  }
</style>
