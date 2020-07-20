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
      <div id="top-bottom-left">
        <ul>        
          <li>
            <a href>首页</a>
          </li>
          <li>
            <router-link :to="{path:'/to_abstain'}">钻石</router-link>
          </li>
          <li>
              <router-link :to="{path:'/wedding'}">婚戒</router-link>
          </li>       
          <li>
            <router-link :to="{path:'/to_abstain'}">对戒</router-link>
          </li>       
          <li>      
            <a href @mouseover="mouseover(this)">配饰</a>
          </li>
          <li>
            <a href>定制</a>      
          </li>
          <li>
             <router-link :to="{path:'/map1'}">体验中心</router-link>
          </li>
        </ul>
        <!-- <topbottomslot></topbottomslot> -->
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
// import {mapActions,mapGetters} from 'vuex';
// import topbottomslot from "./topBottomSlot";
import toptop from "./toptop";
export default {
  name: "topHeadr",
  data() {
    return {
      input3: "",
    };
  },
  components: {
    // topbottomslot: topbottomslot,
    toptop: toptop
  },
  methods: {
    // ...mapActions([("mouseover",data)]),               
    
  },              
  computed: {
    // ...mapGetters(["data"]),               
  },
};
</script>

<style>
/* #top-headr-right::after {
  clear: both;
} */
a{
  color: #222;
}
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
#top-middle-left  > img {
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

  padding-left: 13%;
}
#top-bottom-right {
  float: right;
}
#top-bottom-left > ul > li,
#top-bottom-right > ul > li {
  display: inline-block;
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
  text-align: center;
}
#top-bottom-right {
  margin-right: 14%;
}
#top-bottom-left > ul > li:hover #slot {
  display: block;
}
</style>
