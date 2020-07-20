<template>
<div >
  <div class="recommend"><span>热卖推荐</span></div>
  <div>
    <router-link  v-for="(prod,index) in prod" :to="prod.producturl" :key="'rec'+index"><img :src="'/api/images/'+prod.imgurl" alt=""></router-link>
  </div>
</div>
</template>
<script>
    export default {
        name: 'recommendproducts',
        data: function () {
            return {
              prod:[
                {producturl:"/custom",imgurl:"princesshat.jpg"},
                {producturl:"/custom",imgurl:"classical.jpg"},
                {producturl:"/custom",imgurl:"yuyue.jpg"}
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
