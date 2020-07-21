<template>
  <div class="right-fixed-menu">
    <span class="roght-fixed-menu-img">
      <img src="/api/images/right-fixed-img.png" alt="">
    </span>
    <router-link to="">
      <span class="iconfont icon-iconfontzhizuobiaozhun023133"></span>
      <span>在线咨询</span>
    </router-link>
    <router-link to="">
      <span class="iconfont icon-gouwujianying"><i>25</i></span>

      <span>购物车</span>
    </router-link>            
    <router-link to="/map1">
      <span class="iconfont icon-aixin_shixin"></span>
      <span>预约进店</span>
    </router-link>
    <router-link to="">
      <span class="iconfont icon-liebiao"></span>
      <span>我的订单</span>
    </router-link>
    <span></span>
    </div>
</template>

<script>
    export default {
        name: 'rightfixedmenu',
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
.right-fixed-menu>a{
  display:block;
  width:67px ;
  height:27px ;
  text-align: center;
  color: #666;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fdd8d0;
  right: 0;
  margin-bottom: 2px;
}
.right-fixed-menu>a:hover{
  background-color: #fecbc0;
}
.right-fixed-menu{
  position: fixed;
  right: 0;
  top: 20%;
  width:67px ;
  z-index: 199;
}
  .roght-fixed-menu-img{
    display: block;
    position: relative;
    right: 20px;
    height: 95px;
     }
.right-fixed-menu .iconfont{
  display: block;
font-size: 24px;
  position: relative;
}
.right-fixed-menu .iconfont i{
  font-size: 12px;
  font-style: normal;
  position: absolute;
  right: 0px;
  top: 9px;
  text-align: center;
  color: white;
  width: 67px;
}
</style>
