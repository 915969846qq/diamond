<template>
<div>
  <productdetailbuycomponent></productdetailbuycomponent>
  <canshu></canshu>
</div>
</template>

<script>
  import productdetailbuycomponent from "./productdetailbuycomponent";
  import productdetailcenterone from "./Team/productdetailcenterone";
  import canshu from "./Team/canshu";
    export default {
        name: 'productdetailbuy',
        data: function () {
            return {}
        },
      components:{
          productdetailbuycomponent:productdetailbuycomponent,
          productdetailcenterone:productdetailcenterone,
          canshu:canshu
      }
    }
</script>

<style scoped>

</style>
