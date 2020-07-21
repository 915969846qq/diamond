<template>
  <div id="top-headr">
    <toptop></toptop>
    <div id="top-middle">
      <div id="top-middle-left">
        <a href>
          <img src="../../../static/img/logo.png" alt />
        </a>
        <img src="../../../static/img/pcslogan.png" alt />
      </div>
      <div id="top-middle-right">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div id="top-bottom">
      <div id="top-bottom-left" @mouseleave="mouseleave">
        <ul>
          <li>
            <a href>首页</a>    
          </li>
          <li>
            <router-link  @mouseover="mouseover(0)" :to="{path:'/diamouds'}">钻石</router-link>
            <!-- @mouseover="mouseover(this)" -->
          </li>
          <li>
            <!-- <a href @mouseover="mouseover(1)">婚戒</a> -->
            <router-link  @mouseover="mouseover(1)" :to="{path:'/wedding'}">婚戒</router-link>
          </li>
          <li>
            <!-- <a href @mouseover="mouseover(2)">对戒</a> -->
            <router-link  @mouseover="mouseover(2)" :to="{path:'/to_abstain'}">对戒</router-link>
          </li>
          <li>
            <a href @mouseover="mouseover(3)">配饰</a>
          </li>
          <li>
            <a href @mouseover="mouseover(4)">定制</a>
          </li>
          <li>
            <a href>体验中心</a>
          </li>
        </ul>
        <topbottomslot></topbottomslot>
      </div>
      <div id="top-bottom-right">
        <ul>
          <li>
            <a href>商务加盟</a>
          </li>
          <li>
            <a href>品牌故事</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import topbottomslot from "./topBottomSlot";
import toptop from "./toptop";
export default {
  name: "topHeadr",
  data() {
    return {
      input3: ""
      // data:'钻石',
    };
  },
  components: {
    topbottomslot: topbottomslot,
    toptop: toptop
  },
  methods: {
    mouseover(value) {
      this.$store.dispatch("mouseover", value);

      let topbottom = document.getElementById("slot");
      console.log(topbottom);
      topbottom.style.display = "block";
    },
    mouseleave() {
      let topbottom = document.getElementById("slot");
      topbottom.style.display = "none";
    }
  },

  computed: {}
};
</script>

<style scope>
/* #top-headr-right::after {
  clear: both;
} */
#top-headr {
  background: #fbf2f1;
}

#amynest {
  width: 72px;
}

#top-middle {
  width: 70%;
  margin: 0 auto;
  height: 95px;
}
#top-middle-left {
  float: left;
  margin-top: 25px;
}
#top-middle-left > a > img {
  width: 128;
  height: 38;
}
#top-middle-left > img {
  margin: 0 0 10px 30px;
}
#top-middle-right {
  float: right;
  margin-top: 25px;
  width: 204px;
  height: 32px;
}
.el-input__inner {
  border-right: none;
}
.el-input-group__append {
  background: white;
  border-left: none;
}
#top-bottom {
  background: #909090;
  color: white;
}

#top-bottom-left {
  width: 50%;
  display: inline-block;

  padding-left: 15%;
}
#top-bottom-right {
  float: right;
}
#top-bottom-left > ul > li,
#top-bottom-right > ul > li {
  display: inline-block;
  text-align: center;
}
#top-bottom-left > ul > li:hover,
#top-bottom-right > ul > li:hover {
  background: #ff8a81;
}
#top-bottom-left > ul > li > a,
#top-bottom-right > ul > li > a {
  display: inline-block;
  line-height: 33px;
  width: 92px;
  color: white;
}
#top-bottom-right {
  margin-right: 17%;
}
#top-bottom-left > ul > li:hover #slot {
  display: block;
}
</style>
