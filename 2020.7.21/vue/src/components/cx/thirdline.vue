<template>
  <div class="clearfix main">
    <searchColorName  :title="title">
      <div class="name">颜色</div>
    </searchColorName>
    <searchLight  :Ideal="newtitle.Ideal" :EX="newtitle.EX" :VG="newtitle.VG" :GD="newtitle.GD">
      <div class="name">切工</div>
    </searchLight>
  </div>
</template>

<script>
import searchColorName from "./searchColorName";
import searchLight from "./searchLight";
export default {
  name: "thirdline",
  components: {
    searchColorName,
    searchLight
  },
  data() {
    return {
      count:0,
      title: {
        D: "D_color",
        E: "E_color",
        F: "F_color",
        G: "G_color",
        H: "H_color",
        I: "I_color",
        J: "J_color",
        K: "K_color",

      }
      ,
            newtitle: {
        Ideal: "Ideal_cut",
        EX: "EX_cut",
        VG: "VG_cut",
        GD: "GD_cut"
      }
    };
  }
};
</script>

<style scoped>
.name {
  display: inline-block !important;
  padding-top: 10px;
  font-size: 12px;
  padding-right: 40px;
  float: left;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.left {
  float: left;
}
.right {
  float: right;
}
.main {
  margin-top: 10px;
}
</style>