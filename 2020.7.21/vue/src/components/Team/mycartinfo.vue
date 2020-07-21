<template>
  <div class="HJ">
    <table>
      <tr id="theadr">
        <td width="35%" style="text-align:center">商品</td>
        <td>戒臂内圈刻字</td>
        <td>时光环刻字</td>
        <td width="10%">手寸</td>
        <td width="10%">原价</td>
        <td width="10%">小计</td>
        <td width="10%">操作</td>
      </tr>
      <tr v-if="cartinfo.length==0">
        <td colspan="7" style="font-size:20px">购物车内没有商品</td>
      </tr>
      <tr v-else class="tbody-info" v-for="item in cartinfo" :key="item.gid">
        <td>
          <a href>
            <img class="cartinfo-img" :src="item.gsrc" alt />
          </a>
          <div>
            <span v-if="item.gname!=''">
              <a href>{{item.gname}}</a>
            </span>
            <span v-else>
              <a href>
                <p>{{item.gnamenan}}</p>
              </a>
              <a href>
                <p>{{item.gnamenv}}</p>
              </a>
            </span>
          </div>
        </td>
        <td>{{item.gletteringinner}}</td>
        <td>{{item.gLetteringtime}}</td>
        <td class="hand-size" v-if="item.handsize!=null">{{item.handsize}}</td>
        <td class="hand-size" v-else>
          <p>{{item.handsizenan}}</p>
          <p>{{item.handsizenv}}</p>
        </td>
        <td class="old-price">
          <del>￥{{item.gprice}}</del>
        </td>
        <td class="price">
          <span>￥{{item.gprice}}</span>
        </td>
        <td class="del">
          <span @click="del(item.gid)">删除</span>
        </td>
      </tr>

      <tr class="tbody-info" id="tbody-info-bottom">
        <td>
          <span @click="clear">清空购物车&nbsp;</span>
          <span >&nbsp;<a href="">继续购物</a> </span>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td width="10%" style="text-align:center">
          订单总额
          <span>￥{{sumprice}}</span>
        </td>
        <td width="10%" style="text-align:center">
          本次应付
          <span>￥{{sumprice}}</span>
        </td>
      </tr>
      <tr>
        <td colspan="7" id="pay">
          <div>
            <!-- <span>去结算</span>             -->
          <span>
            <router-link to="/myorder">去结算</router-link>   
          </span>     
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "mycartinfo",
  components:{
  },
  computed: {
    ...mapGetters(["cartinfo"]),    
    ...mapGetters(["sumprice"])       
  },
  methods: {
    del(data) {
      this.$store.dispatch("del", data);
    },
    clear() {
      this.$store.dispatch("clear");
    }
  },
  created() {
    this.$store.dispatch("cartinfo");
  }
};
</script>   

<style scoped>
@import "mycartinfo.css";
.HJ /deep/ table{
    width: 1350px;
    margin: 50px auto;
}
</style>