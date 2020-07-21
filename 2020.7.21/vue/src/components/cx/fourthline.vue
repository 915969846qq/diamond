<template>
  <div class="main clearfix">
    <searchColorName class="left" :title="title">
      <div class="name">净度</div>
    </searchColorName>
    <searchLight class="right" :Ideal="newtitle.Ideal" :EX="newtitle.EX" :VG="newtitle.VG" :GD="newtitle.GD">
      <div class="name">对称</div>
    </searchLight>
  </div>
</template>

<script>
import searchColorName from "./searchColorName";
import searchLight from "./searchLight";
export default {
  components: {
    searchColorName,
    searchLight
  },
  data() {
    return {
      title: {
        FL: "FL_clear",
        IF: "IF_clear",
        VVS1: "VVS1_clear",
        VVS2: "VVS2_clear",
        VS1: "VS1_clear",
        VS2: "VS2_clear",
        SI1: "SI1_clear",
        SI2: "SI2_clear"
      },
      newtitle:{
        Ideal:'Ideal_symmetric',
        EX:'EX_symmetric',
        VG:'VG_symmetric',
        GD:'GD_symmetric'
      }
    };
  }
};
</script>

<style sccoped>
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