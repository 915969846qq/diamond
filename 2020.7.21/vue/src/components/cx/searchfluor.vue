<template>
  <div class="main">
    <div class="name">荧光</div>
    <div class="ulbox">
      <ul ref="ulfluor">
        <li @click="addfluor" name="fluor" title="None">None</li>
        <li @click="addfluor" name="fluor" title="Faint">Faint</li>
        <li @click="addfluor" name="fluor" title="Medium">Medium</li>
        <li @click="addfluor" name="fluor" title="Strong">Strong</li>
        <li @click="addfluor" name="fluor" title="VeryStrong">VeryStrong</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      istrue: true
    };
  },
  methods: {
    ...mapMutations(["searchfluor", "researchfluor"]),
    addfluor(e) {
      // console.log(e.target.title)
      // console.log(e.target.attributes[1].value)
      let type = e.target.attributes[1].value;
      let len = this.$refs.ulfluor.children.length;
      // console.log(len)
      for (var i = 0; i < len; i++) {
        this.$refs.ulfluor.children[i].style["border-top"] =
          "rgb(214, 214, 214) solid 5px";
      }
      if (this.istrue == true) {
        e.target.style["border-top"] = "rgb(247,130,121) solid 5px";
        this.searchfluor(e.target.title);
        this.istrue =false
      }else{
        e.target.style["border-top"] = "rgb(214, 214, 214) solid 5px";
        this.researchfluor(e.target.title);
        this.istrue = true
      }

      
      
      // this.searchfluortype(type)
    }
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
  float: left;
}
li {
  width: 90px;
  height: 25px;
  float: left;
  list-style: none;
  margin: 0 1.55px;
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