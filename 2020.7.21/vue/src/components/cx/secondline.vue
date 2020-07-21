<template>
  <div>
    <seachColor></seachColor>

    <searchLight :Ideal="newtitle.Ideal" :EX="newtitle.EX" :VG="newtitle.VG" :GD="newtitle.GD">
      <div class="name">抛光</div>
    </searchLight>
  </div>
</template>

<script>
import seachColor from "./searchColor";
import searchLight from "./searchLight";
export default {
  components: {
    seachColor,
    searchLight
  },
  data() {
    return {
      newtitle: {
        Ideal: "Ideal_light",
        EX: "EX_light",
        VG: "VG_light",
        GD: "GD_light"
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
</style>