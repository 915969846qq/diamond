<template>
  <div>
    <!-- <headr>
      <template v-slot:step>
        <img src="../../../static/img/shopcar_sanbu_2.png" alt />
      </template>
    </headr> -->
    <orderbody></orderbody>
    <!-- <comment></comment> -->
    <!-- <bottomfooter></bottomfooter> -->
  </div>
</template>

<script>
import headr from "./myCartHeadr";
import orderbody from "./orderBody";
import bottomfooter from "./bottomfooter";
import comment from "./comment";
export default {
  name: "order",
  components: {
    headr: headr,
    bottomfooter: bottomfooter,
    orderbody: orderbody,
    // comment:comment,
  },
  computed: {
    
  },
  created() {
    this.$store.dispatch("commentsinfo");
  },
};
</script>

<style>
</style>