<template>
  <div id="comment">
    <div id="comment-title">
      <p>全部评论</p>
    </div>
    <div class="comment-content">
      <div class="content" v-for="item in commentinfo" :key="item.cid">
        <slot name="comment">
        <a href>
          <img src="../../../static/img/yinpai.png" alt />
        </a>
        <div class="content-title">
          <div class="clearB"></div>
          <div class="content-user">
            {{item.realname}}&nbsp;·&nbsp;{{item.local}}&nbsp;·&nbsp;{{item.time}}
            <div class="star-right">
              <span class="star" v-for="count in item.star" :key="count"></span>
            </div>
          </div>
          <div id="content-commodity">
            <font>商品店铺:</font>
            <span>{{item.Ccommodity}}</span>
          </div>
          <div id="content-service">
            <font>服务点评:</font>
            <span>{{item.Cservice}}</span>
          </div>
          <div class="send-img">
            <font>商品晒图:</font>
            <ul>
              <li v-for="(item, index) in item.imgsrc" :key="index">
                <a href>
                  <img :src="item" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </slot>

      </div>
      <a id="allComment" href="/allcomment">全部评论</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "comment",
  methods: {
    
  },
  computed: {
    ...mapGetters(["commentinfo"]),
  },
  created() {
    this.$store.dispatch("commentinfo");
  }
};
</script>

<style scope>
@import "./comment.css";
</style>