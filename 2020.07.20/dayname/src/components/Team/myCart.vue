<template>
  <div id="mycart">
    <myCartHeadr>
      <template v-slot:step>
        <img src="../../../static/img/shopcar_sanbu_1.png" alt />
      </template>
    </myCartHeadr>
    <div id="cartbody" v-if="count==0">
      <div id="defaultcart">
        <p>你的购物车内暂时没有商品，去首页挑选喜欢的商品</p>
        <a href="/">去首页</a>
      </div>
    </div>
    <div id="cartbody1" v-else>
      <mycartinfo>
        <template v-slot:button>
          <span>
            <router-link to="/myCartHeadr">去结算</router-link>   
          </span>           
        </template>
       
      </mycartinfo>
    </div>
    <bottom></bottom>
  </div>
</template>             
<script>
import myCartHeadr from "./myCartHeadr";
import bottom from "./bottomfooter";
import mycartinfo from "./mycartinfo";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "mycart",
  data() {
    return {
      count: 1
    };
  },
  components: {
    myCartHeadr: myCartHeadr,
    bottom: bottom,
    mycartinfo: mycartinfo,
  },

};
</script>

<style>
@import 'mycart.css';
</style>