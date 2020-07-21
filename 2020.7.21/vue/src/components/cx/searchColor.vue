<template>
  <div class="clearfix main">
    <div class="name">形状</div>
    <div class="box">
      <ul class="clearfix" ref="ulcolor">
        <!-- <li :key="i" @click="choose" v-for="(item,i) in img" :style="img[i]" :title="title[i]"></li> -->
        <li class="img1" @click="choose" :style="img.img1" :title="title.title1"></li>
        <li class="img2" @click="choose" :style="img.img2" :title="title.title2"></li>
        <li class="img3" @click="choose" :style="img.img3" :title="title.title3"></li>
        <li class="img4" @click="choose" :style="img.img4" :title="title.title4"></li>
        <li class="img5" @click="choose" :style="img.img5" :title="title.title5"></li>
        <li class="img6" @click="choose" :style="img.img6" :title="title.title6"></li>
        <li class="img7" @click="choose" :style="img.img7" :title="title.title7"></li>
        <li class="img8" @click="choose" :style="img.img8" :title="title.title8"></li>
        <li class="img9" @click="choose" :style="img.img9" :title="title.title9"></li>
        <li class="img10" @click="choose" :style="img.img10" :title="title.title10"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["searchColor", "researchColor"]),
    choose(e) {
      console.log(e.target.title);
      // console.log(this.$refs.ulcolor.children)
      // this.$refs.ulcolor.children.style['background-position']= 'left top'
      let len = this.$refs.ulcolor.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.ulcolor.children[i].style["background-position"] =
          "left top";
      }

      if (this.istrue == true) {
        e.target.style["background-position"] = "right top";

        this.searchColor(e.target.title);
        this.istrue =false
      } else {
        e.target.style["background-position"] = "left top";
        this.researchColor(e.target.title);
        this.istrue = true
      }

      //   console.log(item)
    }
  },
  data() {
    return {
      istrue: true,
      img: {
        img1: {
          backgroundImage: "url(" + require("../../../static/img/60.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img2: {
          backgroundImage: "url(" + require("../../../static/img/61.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img3: {
          backgroundImage: "url(" + require("../../../static/img/62.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img4: {
          backgroundImage: "url(" + require("../../../static/img/63.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img5: {
          backgroundImage: "url(" + require("../../../static/img/64.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img6: {
          backgroundImage: "url(" + require("../../../static/img/65.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img7: {
          backgroundImage: "url(" + require("../../../static/img/66.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img8: {
          backgroundImage: "url(" + require("../../../static/img/67.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img9: {
          backgroundImage: "url(" + require("../../../static/img/68.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img10: {
          backgroundImage: "url(" + require("../../../static/img/69.jpg") + ")",
          backgroundRepeat: "no-repeat"
        }
      },
      title: {
        title1: "圆形",
        title2: "公主方",
        title3: "祖母绿",
        title4: "橄榄型",
        title5: "椭圆形",
        title6: "雷地恩",
        title7: "梨形",
        title8: "心心相印/心形",
        title9: "三角形",
        title10: "Fire Cushion/垫形"
      }
    };
  }
};
</script>

<style scoped>
.main {
  height: 33px;
  float: left;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.box {
  width: 480px;
  height: 33px;
  display: inline-block;
  float: left;
}
.box > ul > li {
  width: 33px;
  height: 33px;
  float: left;
  list-style: none;
  margin: 0 7px;
  cursor: pointer;
}

li:hover {
  background-position: right top;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 0px;
}
.name {
  display: inline-block !important;
  padding-top: 10px;
  font-size: 12px;
  padding-right: 40px;
  float: left;
}
</style>