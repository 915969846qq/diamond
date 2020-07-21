<template>
  <div class="diamouds">
    <div :class="istrue?'diamoudsmain':'diamoudsmain1'">
      <div>
        <selector></selector>
      </div>
      <div>
        <secondline class="secondline clearfix"></secondline>
      </div>
      <div>
        <thirdline class="thirdline clearfix"></thirdline>
      </div>
      <div>
        <fourthline></fourthline>
      </div>
      <div class="clearfix">
        <fiveline></fiveline>
      </div>
    </div>
    <div class="searchCommon">
      <span @click="open">{{text}}</span>
      <a @click="refresh()" class="web_reset">清空筛选器</a>
    </div>
    <div>
      <screen></screen>
    </div>
    <div>
      <mycontent></mycontent>
    </div>
  </div>
</template>

<script>
import mycontent from "./content";
import secondline from "./secondline";
import selector from "./selector";
import thirdline from "./thirdline";
import fourthline from "./fourthline";
import fiveline from "./lineNum/fiveline";
import screen from "./screen";
export default {
  components: {
    selector,
    secondline,
    thirdline,
    fourthline,
    fiveline,
    screen,
    mycontent
  },

  methods: {
    // searchfold() {
    //   if(istrue == false){
    //     istrue = true
    //   }else{
    //     istrue =false

    //   }
    //   console.log(diamoudsmain)

    // }
    refresh() {
      this.$router.go(0);
    },
    open() {
      if (this.istrue == true) {
        this.text = "展开高级搜索";
      } else {
        this.text = "收起高级搜索";
      }
      this.istrue = !this.istrue;
    }
  },
  computed: {},
  data() {
    return {
      istrue: true,
      text: "收起高级搜索"
    };
  }
};
</script>

<style scoped>
.secondline {
  margin-top: 10px;
}
.thirdline {
  margin-top: 10px;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.searchCommon {
  clear: both;
  margin-top: 20px;
  width: 1180px;
  height: 30px;
  cursor: pointer;
  border-top: 1px solid #e1e1e1;
  position: relative;
  z-index: 0;
  color: #666;
}
.searchCommon span {
  display: inline-block;
  border-top: 1px solid #fff;
  border-left: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  line-height: 29px;
  height: 29px;
  text-align: center;
  width: 130px;
  margin-top: -1px;
  font-size: 12px;
  font-family: Arial, "宋体";
}
.searchCommon span:hover {
  color: #ff8a81;
}
.web_reset {
  background: #fff;
  text-align: right;
  position: absolute;
  right: 0;
  top: -8px;
  display: inline-block;
  padding-left: 3px;
  color: #666;
  text-decoration: none;
  font-size: 12px;
}
.web_reset:hover {
  color: #ff8a81;
}
.diamoudsmain {
  height: 290px;
  overflow: hidden;
  transition: all 0.5s;
}
.diamoudsmain1 {
  height: 75px;
  overflow: hidden;
  transition: all 0.5s;
}
button {
  background: none;
  border: none;
}
.diamouds {
  width: 1180px;
  margin: 0 auto;
}
</style>