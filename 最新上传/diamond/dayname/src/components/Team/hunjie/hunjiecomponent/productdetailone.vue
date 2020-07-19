<template>
  <div>
  <el-row>
    <el-col :span="22" :offset="1">
      <div class="center1">
        <img src="/api/images/info-1.jpg" alt="">
        <img src="/api/images/info-2.jpg" alt="">
        <img src="/api/images/info-3.jpg" alt="">
        <img src="/api/images/info-4.jpg" alt="">
      </div>
    </el-col>
  </el-row>

  </div>
</template>

<script>


  export default {
    name: 'productdetailcenterone',
    data: function () {
      return {}
    },
    component:{


    }
  }
</script>

<style scoped>
.center1{
  text-align: center;
}
</style>
