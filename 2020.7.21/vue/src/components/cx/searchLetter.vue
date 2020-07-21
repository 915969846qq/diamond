<template>
  <div class="main">
    <div class="name">证书</div>
    <div class="ulbox">
      <ul ref="ulfluor">
        <li @click="addcertificate" title="GIA">GIA</li>
        <li @click="addcertificate" title="AGS">AGS</li>
        <li @click="addcertificate" title="DBG">DBG</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["searchcertificate",'researchcertificate']),
    addcertificate(e) {
      let len = this.$refs.ulfluor.children.length;
      // console.log(len)
      for (var i = 0; i < len; i++) {
        this.$refs.ulfluor.children[i].style["border-top"] =
          "rgb(214, 214, 214) solid 5px";
      }

      if (this.istrue == true) {
        console.log("+++++++");
        e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
        this.searchcertificate(e.target.title);
        this.istrue = false;
      } else {
        console.log("-------");
        console.log(this.istrue);
        e.target.style["border-top"] = "rgb(214, 214, 214) solid 5px";
        this.researchcertificate(e.target.title);
        this.istrue = true;
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
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.main {
  width: 533px;
  float: right;
  padding-right: 15px;
}
li {
  width: 153px;
  height: 25px;
  float: left;
  list-style: none;
  margin: 0 1.56px;
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
.name {
  display: inline-block !important;
  padding-top: 20px;
  font-size: 12px;
  padding-right: 40px;
  float: left;
}
</style>