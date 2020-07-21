<template>
<!-- 对戒主页热卖 -->
<div >
  <div class="recommend"><span>热卖推荐</span></div>
  <div>
    <router-link  v-for="prod in prod" :key="prod.imgurl" :to="prod.producturl">
      <img :src="'/api/images/'+prod.imgurl" alt="">
    </router-link>
  </div>
</div>
</template>
<script>
    export default {
        name: 'recommendproducts',
        data: function () {
            return {
              prod:[
                {producturl:"/custom",imgurl:"Sellers_1.jpg"},
                {producturl:"/custom",imgurl:"Sellers_2.jpg"},
                {producturl:"/custom",imgurl:"Sellers_3.jpg"}
              ]
            }
        }
    }
</script>

<style scoped>
img{
 margin-top: 10px;
  width: 100%;
}
  .recommend{
    padding:15px 0 15px 15px;
  }
</style>
