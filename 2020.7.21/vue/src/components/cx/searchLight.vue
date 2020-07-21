<template>
  <div class="main">
    <slot></slot>
    <!-- <div class="name"></div> -->

    <div class="ulbox">
      <ul class="clearfix" ref="ullight">
        <li @click="addLight" :title="Ideal">Ideal</li>
        <li @click="addLight" :title="EX">EX</li>
        <li @click="addLight" :title="VG">VG</li>
        <li @click="addLight" :title="GD">GD</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["Ideal", "EX", "VG", "GD"],
  name: "searchLight",
  methods: {
    ...mapMutations(["searchlight", "researchlight"]),
    addLight(e) {
      let len = this.$refs.ullight.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.ullight.children[i].style["border-top"] =
          "rgb(214,214,214) solid 5px";
      }
      if (this.istrue == true) {
        e.target.style["border-top"] = "rgb(247, 130, 121) solid 5px";
        this.searchlight(e.target.title);
        this.istrue =false
      }else{
        e.target.style["border-top"] = "rgb(214,214,214) solid 5px";
        this.researchlight(e.target.title);
        this.istrue =true
      }

    }
  },
  data() {
    return {
      istrue: true
    };
  }
};
</script>

<style scoped>
.ulbox {
  margin-top: 5px;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
li {
  width: 115px;
  height: 25px;
  float: left;
  list-style: none;
  margin: 0 1px;
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
  float: right;
  padding-right: 15px;
}
.name {
  display: inline-block !important;
  padding-top: 10px;
  font-size: 12px;
  padding-right: 40px;
  float: left;
}
</style>