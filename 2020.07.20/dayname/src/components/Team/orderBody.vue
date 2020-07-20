<template>
  <div id="orderbody">
    <div id="orderbody-headr">
      <h1>填写订单</h1>
    </div>
    <div id="orderbody-body">
      <h2>配送方式</h2>
      <div id="Delivery">
        <router-link class="checked" to="/order/free">
          <div>免费快递（顺丰速运）</div>
          <div></div>
        </router-link>
        <router-link class="checked" to="/order/self">
          <div>体验中心自提（全国9个体验中心）</div>
        </router-link>
      </div>
      <div class="content-div">
        <router-view></router-view>
      </div>
      <div class="content-div">
        <div id="payment">
          <h2>支付方式</h2>
          <el-radio v-model="radio" label="1">在线支付</el-radio>

          <el-radio v-if="flag" v-model="radio" label="2">货到付款</el-radio>
        </div>
        <div class="clear"></div>
      </div>
      <div class="content-div">
        <div id="payment">
          <h2>发票信息</h2>
          <div id="invoice">
            <div>电子发票</div>
            <div>纸质发票</div>
          </div>
          <div id="reminder">
            <p>温馨提示： 发票金额为现金支付金额，扣除优惠券、礼品券等金额。</p>
            <p>我们的每件产品都附发票，为保护您的消费权益，请妥善保管发票！</p>
          </div>
          <div id="Invoicetitle">
            <span>发票抬头:</span>
            <el-input v-model="input" placeholder="默认为个人"></el-input>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <mycartinfo>
        <template v-slot:button>
          <span @click="uporder">提交订单</span>
        </template>
      </mycartinfo>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import mycartinfo from "../cart/mycartinfo";
export default {
  name: "orderBody",
  data() {
    return {
      radio: "1",
      flag: false,
      input: "123124"
    };
  },
  components: {
    mycartinfo: mycartinfo
  },
  computed: {
    ...mapGetters(["salesroom"]),
    ...mapGetters(["value"]),
  },
  methods: {
    uporder(){
      this.$store.dispatch("uporder");
  }
  },
  created() {
    this.$store.dispatch("salesroom");
  }
};
</script>

<style scope>
@import "./orderBody.css";
</style>