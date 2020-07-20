<template>
  <div id="top">
    <toptop></toptop>
    <div id="top-middle">
      <div id="top-middle-left">
        <a href>
          <img src="../../../static/img/logo.png" alt />
        </a>
        <img src="../../../static/img/pcslogan.png" alt />
      </div>
      <div id="top-middle-right">     
        <slot name="step"></slot>     
      </div>
    </div>
  </div>
</template>

<script>
import toptop from "./toptop";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "myCartHeadr",
  data() {
    return {
      number: 1,
      time: "下午好",
      username: "lpume",
      level: "普通"
    };
  },
  components: {
    toptop: toptop
  },
  computed: {
    ...mapGetters(["cartinfo"])
  },
  created() {
    this.$store.dispatch("cartinfo");
  }
};
</script>

<style>
#top {
  background: #fbf2f1;
}
#top-middle {
  width: 70%;
  margin: 0 auto;
  height: 95px;
}
#top-middle-left {
  float: left;
  margin-top: 25px;
}
#top-middle-left > a > img {
  width: 128;
  height: 38;
}
#top-middle-left > img {
  margin: 0 0 10px 30px;
}
#top-middle-right {
  float: right;
  margin-top: 20px;
}
#top-middle-right > img {
  margin: 0 0 10px 25px;
}
</style>