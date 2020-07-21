<template>
  <div id="slot">
    <div id="slot-left">      
      <a href>    
        <h1>{{choosenav.name}}</h1>
      </a>
      <a href>
        <span>探索全部{{choosenav.name}}</span>     
      </a>
      <br/>
      <ul>              
        <li v-for="(item, index) in choosenav.frist" :key="index">
          <a href>{{item}}</a>
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in choosenav.second" :key="index">
          <a href>{{item}}</a>
        </li>
      </ul>
    </div>
    <div id="slot-right">
      <ul>
        <li v-for="(item, index) in news" :key="index">
          <a href>{{item.news_dynamic_name}}</a>
        </li>
      </ul>
    </div>
    <a id="aimg" href>
      <img :src="choosenav.imgsrc" alt />
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "topbottomslot",
  computed: {
    ...mapGetters(["choosenav"]),
    ...mapGetters(["news"])
  },
  created() {
    this.$store.dispatch("news");
  }
};
</script>

<style scope>
#slot {
  color: #333333;
  background: white;
  box-shadow: 0 3px 3px #adacac83;
  position: absolute;
  top: 162px;
  font-size: 12px;
  left: 0;
  width: 100%;
  display: none;
  z-index: 10;
}
#slot-left {
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  left: 200px;
  top: 15px;
  height: 90%;
  padding: 0 10px 30px 10px;
  text-align: left;
  border-right: 1px solid #bbb7b7c2;
}
#slot-left li,
#slot-right li {
  line-height: 26px;
}
#slot-left ul,
#slot-right ul {
  display: inline-block;
}
#slot-right {
  position: absolute;
  top: 45px;
  left: 550px;
  text-align: left;
  padding: 0 10px 30px 10px;
}

h1 {
  line-height: 36px;
}
#slot-left a:hover > span,
#slot-left li:hover > a {
  color: #fdb2a4;
}
#slot-left h1 {
  font-size: 24px;
  font-family: Arail, "宋体";
}
#slot-left ul:nth-of-type(1) li {
  width: 150px;
}
#slot-left ul:nth-of-type(2) li,
#slot-right ul > li {
  width: 150px;
}
#aimg > img {
  margin-top: 30px;
  margin-left: 900px;
  padding-bottom: 20px;
}
</style>