<template>
  <div>
    <!-- <topheadr></topheadr> -->
    <div>
      <div id="route">
        <slot name="commentheadr">
        <a href>首页</a>>
        <a href>婚戒</a>>
        <span>永恒之约Ⅱ-白18K金钻石女戒 &nbsp;商品评价</span>
        </slot>
      </div>
      <div id="commentheadr">
        <div class="blackground" v-show="showModal"></div>
        <a id="left_" href>
          <slot name="commenttheadr">
          <div>
            <img src="http://img.zbird.cn/picdb/332/08/33208_300_.jpg" alt />
          </div>
          <div>
            <span href>永恒之约Ⅱ · 白18K金钻石女戒</span>
          </div>
          </slot>
        </a>
        <div id="right_" @click="showModal=true">写评论得积分</div>
        <div class="mask" v-show="showModal">
          <div>
            <div>
              <label>商品点评:</label>
              <input type="text" v-model="commodity" />
            </div>
            <div>
              <label>服务点评:</label>
              <input type="text" v-model="service" />
            </div>
            <div>
              <label>商品晒图:</label>
              <input type="file" name="img" multiple accept="image/*" />
            </div>
            <div>
              <label>评 &nbsp;&nbsp;&nbsp;分&nbsp;&nbsp;:&nbsp;&nbsp;</label>
              <select v-model="seed" style>
                <option v-for="item in 5" :label="item" :key="item" :value="item"></option>
              </select>
            </div>
          </div>
          <div>
            <button class="model-btn" @click="showModal=false">取消</button>
            <button class="model-btn" @click="upcomment">提交</button>
          </div>
        </div>
      </div>
    </div>

    <div class="comment-content">
      <div
        class="content"
        v-for="(item,index) in commentinfo.slice((page-1)*8,page*8)"
        :key="index"
      >
        <slot name="comment">
          <a href>
            <img src="../../../static/img/yinpai.png" alt />
          </a>
          <div class="content-title">
            <div class="clearB"></div>
            <div class="content-user">
              {{item.realname}}&nbsp;·&nbsp;{{item.local}}&nbsp;·&nbsp;{{item.time}}
              <div class="star-right">
                <span class="star" v-for="count in item.star" :key="count"></span>
              </div>
            </div>
            <div id="content-commodity">
              <font>商品点评:</font>
              <span>{{item.Ccommodity}}</span>
            </div>
            <div id="content-service">
              <font>服务点评:</font>
              <span>{{item.Cservice}}</span>
            </div>
            <div class="send-img">
              <font>商品晒图:</font>
              <ul>
                <li v-for="(item, index) in item.imgsrc" :key="index">
                  <a href>
                    <img :src="item" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slot>
      </div>
    </div>

    <div id="gopage">
      <button class="prev page" @click="prevpage"></button>
      <button
        class="page"
        v-for="(item, index) in Math.ceil(commentinfo.length/8)"
        :key="index"
        @click="gopage(item)"
      >{{item}}</button>
      <button class="next page" @click="nextpage"></button>
    </div>

    <!-- <bootomfooter></bootomfooter> -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import topheadr from "./topHeadr";
import bootomfooter from "./bottomfooter";
export default {
  name: "allcomment",
  data() {
    return {
      showModal: false
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["page"]),
    ...mapGetters(["commentinfo"]),
    ...mapGetters(["seed"]),
    seed: {
      get() {
        // console.log(this.$store.getters.commodity);
        return this.$store.getters.seed;
      },
      set(newval) {
        this.$store.commit("seed", newval);
      }
    },
    commodity: {
      get() {
        // console.log(this.$store.getters.commodity);
        return this.$store.getters.commodity;
      },
      set(newval) {
        this.$store.dispatch("commodity", newval);
      }
    },
    service: {
      get() {
        return this.$store.getters.service;
      },
      set(newval) {
        this.$store.dispatch("service", newval);
      }
    }
  },
  components: {
    topheadr: topheadr,
    bootomfooter: bootomfooter
  },
  methods: {
    ...mapActions(["gopage"]),
    ...mapActions(["prevpage"]),
    ...mapActions(["nextpage"]),
    showmodel() {
      console.log(111111111111);
    },
    upcomment() {
      this.$store.dispatch("upcomment");
      this.showModal = false;
    }
  },
  created() {
    this.$store.dispatch("commentsinfo");
  }
};
</script>

<style scoped>
.page {
  vertical-align: middle;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  width: 31px;
  font-weight: bold;
  border: 1px solid #dedfe0;
  background: #fff;
}
.page:hover {
  color: #ff8a81;
}
.prev {
  background: url("http://img.zbird.cn/ww2/member/index/icon_nextprev.jpg")
    no-repeat;
  background-position: 13px -10px;
}
.next {
  background: url("http://img.zbird.cn/ww2/member/index/icon_nextprev.jpg")
    no-repeat;
  background-position: 13px 12px;
}
.prev:hover {
  background-position: 13px -33px;
}
.next:hover {
  background-position: 13px -56px;
}
#route {
  text-decoration: none;
  line-height: 54px;
  width: 80%;
  margin: 0 auto;
  font-size: 12px;
  color: #666666;
  text-align: left;
  border-bottom: 1px solid #333333;
}
#commentheadr {
  width: 80%;
  height: 64px;
  margin: 0 auto;
}
#left_ {
  background: #fff;
  overflow: hidden;
  height: 64px;
  line-height: 64px;
  display: inline-block;
  text-align: left;
  float: left;
}
#left_ > div {
  display: inline-block;
}
#left_ > div > img {
  width: 64px;
  vertical-align: middle;
}
#right_ {
  display: inline-block;
  width: 140px;
  height: 32px;
  line-height: 32px;
  float: right;
  margin-top: 15px;
  color: #fff !important;
  background: #ff8a81;
  text-align: center;
  font-family: Arial, "宋体";
  font-size: 12px;
}
#right_:hover {
  cursor: pointer;
}
.comment-content {
  background: #f9f9f9;
  width: 80%;
  margin: 0 auto;
}
.comment-content > div > a {
  float: left;
}
.comment-content > div > div {
  color: #999;
}
#comment-title p {
  line-height: 58px;
  height: 58px;
  background: rgb(255, 255, 255);
  width: 100%;
  display: inline-block;
  margin-left: 5px;
}
.content {
  margin: 0 25px;
  height: auto;
  clear: both;
  overflow: hidden;
  padding-top: 18px;
  padding-bottom: 25px;
  border-bottom: 1px solid #fff;
  text-align: left;
}
.content > a {
  margin: 10px 10px 0 0;
}
.content-title {
  width: 95%;
  float: left;
}
.content-title > div {
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
}
.content-user {
  float: left;
}
.clearB {
  clear: both;
}
.send-img {
  cursor: pointer;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.star-right {
  float: right;
}
.star {
  margin-right: 0px;
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  background: url("../../../static/img/star_show_gray.png") no-repeat left top;
}
.content-commodity span,
.content-service span {
  color: rgb(70, 66, 66);
  font-size: 13px;
}
.send-img font {
  float: left;
}
.send-img ul {
  float: left;
}
.send-img li {
  display: inline-block;
  width: 89px;
  height: 89px;
}
.send-img a {
  width: 89px;
  height: 89px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #dddddd;
  margin-top: 10px;
  cursor: url("http://img.zbird.cn/ww3/citystation/an/big.cur"), auto;
}
#gopage {
  width: 80%;
  margin: 0 auto;
  text-align: right;
}
.blackground {
  background-color: #222;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.mask {
  background-color: #fff;
  position: fixed;
  top: 130px;
  left: 30%;
  width: 40%;
  /* height: 270px; */
  z-index: 2;
  padding: 15px 20px;
  text-align: left;
}
.mask > div > div {
  margin-top: 25px;
}
.mask > div > div > input {
  padding: 10px 15px;
}
.mask > div > div > select {
  padding: 10px 15px;
}
.model-btn {
  display: inline-block;
  width: 140px;
  height: 32px;
  line-height: 32px;
  margin-top: 35px;
  margin-left: 120px;
  color: #fff !important;
  background: #ff8a81;
  text-align: center;
  font-family: Arial, "宋体";
  font-size: 12px;
}
</style>