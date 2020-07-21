<template>
  <div class="main">
    <slot></slot>
    <div class="ulbox">
      <ul class="clearfix" ref="ulname">
        <li @click="addColorName" :key="item" v-for="(item,i) in title" :title="item">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "searchColorName",
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["searchColorName", "researchColorName"]),
    addColorName(e) {
      // console.log(e.target.title)
      let len = this.$refs.ulname.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.ulname.children[i].style["border-top"] =
          " rgb(214,214,214) solid 5px";
      }
      // this.flag:e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
      // e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
      if (this.istrue == true) {
        e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
        this.searchColorName(e.target.title);
        this.istrue = false;
        this.iscolor = false;
      } else {
        e.target.style["border-top"] = "rgb(214,214,214) solid 5px";
        this.researchColorName(e.target.title);
        this.istrue = true;
        this.iscolor = true;
      }

      // switch (e.target.title) {
      //   case "D":

      //     e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
      //     this.istrue = !this.istrue;
      //   case "E":

      //     e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
      //     this.istrue = !this.istrue;
      // }
      // if (this.iscolor == false) {

      //   let len = this.$refs.ulname.children.length;
      //   for (var i = 0; i < len; i++) {
      //     this.$refs.ulname.children[i].style["border-top"] =
      //       " rgb(214,214,214) solid 5px";
      //   }
      //   e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
      //   // this.iscolor = false;
      // } else {
      //   e.target.style["border-top"] = "rgb(214,214,214) solid 5px";
      // }
    }
  },
  data() {
    return {
      istrue: true,
      iscolor: true
    };
  }
};
</script>

<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.ulbox {
  margin-top: 5px;
}
li {
  width: 56px;
  height: 25px;
  float: left;
  list-style: none;
  margin: 0 1.2px;
  cursor: pointer;
  /* background: rgb(247, 130, 121); */
  border-top: rgb(214, 214, 214) solid 5px;
  line-height: 25px;
  font-size: 12px;
  font-family: Arial, "宋体";
}
li:hover {
  border-top: rgb(247, 130, 121) solid 5px;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 0px;
}
.main {
  width: 533px;
  float: left;
}
</style>