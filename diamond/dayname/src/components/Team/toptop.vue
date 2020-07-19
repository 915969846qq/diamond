<template>
  <div id="top-top">
    <div id="top-top-left">
      <span v-if="Math.random()*5<3">
        <span>{{username}}，</span>
        {{time}}!您是
        <span id="level">{{level}}</span> 会员
        <a href>退出登录</a>
      </span>
      <span v-else>
        <span>欢迎进入钻石小鸟官网</span>
        <a href>登录</a>
        <a href>注册</a>
      </span>
    </div>
    <div id="top-top-right">
      <ul>
        <li id="licode-wechat">
          <a href>手机官网</a>
          <div id="code-wechat">
            <img src="../../../static/img/code_wechat.jpg" alt />
          </div>
        </li>
        <li>
          <a href>钻石课堂</a>
        </li>
        <li id="limynest">
          <a style="width: 72px;" href>
            我的鸟巢
            <img src="../../../static/img/icon_drop.png" alt />
          </a>
          <div id="mynest">
            <p>
              <a href>订单查询</a>
            </p>
            <p>
              <a href>售后服务</a>
            </p>
            <p>
              <a href>积分换礼</a>
            </p>
          </div>
        </li>
        <li>
          <!-- <a @click="getaxios">我的订单</a> -->
        </li>
        <li id="limycarts">
          <span>
            <a>
              <img src="../../../static/img/cart.png" alt />
              &nbsp;购物车&nbsp;
              <!-- <span id="number-color">{{count}}</span>&nbsp;  -->
              <img src="../../../static/img/icon_drop.png" alt />
            </a>
          </span>

          <!-- <div id="mycarts" v-if="count==0">
            <span>购物车中无商品</span>
          </div>
          <div id="mycarts" v-else>
            <div class="mycarts-info" v-for="item in cartinfo" :key="item.id">
              <img :src="item.gsrc" alt />
              <div class="gname">{{item.gname}}</div>
              <a href></a>
              <div>
                <span>￥</span>
                <strong>{{item.gprice}}</strong>
              </div>
            </div>
            <div id="mycarts-bottom">
              <div>
                <font>合计</font>
                <span>￥</span>
                <strong>{{sumprice}}</strong>
              </div>
              <a href="#/myCart">结算</a>
            </div>
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "toptop",
  data() {
    return {
      username: "1111",
      time: "下午好",
      level: "普通"
    };
  },
  methods: {
    // ...mapActions(["getaxios"])
  },
  computed: {
    // ...mapGetters(["cartinfo"]),
    // ...mapGetters(["cartdata"]),
    // ...mapGetters(["sumprice"]),
    // ...mapGetters(["count"])
  },
  created() {
    // this.$store.dispatch("cartinfo");

    // console.log(this.$store.dispatch("cartinfo"));
    // this.$axios.interceptors.request.use(
    //   config => {
    //     console.log("请求前拦截");
    //     return config;
    //   },
    //   function(error) {
    //     return Promise.reject(error);
    //   }
    // );

    // this.$axios.interceptors.response.use(
    //   response => {
    //     console.log("响应后拦截数据");
    //     console.log(response.data);
    //     return response;
    //   },
    //   function(error) {
    //     return Promise.reject(error);
    //   }
    // );

    // this.$axios.get("/api/toptop.do").then(res => {
    //   console.log("请求成功之后的回调函数执行");
    //   console.log(res);
    //   this.productArr = res.data;
    // });
  }
};
</script>

<style>
@import ".\toptop.css";
</style>