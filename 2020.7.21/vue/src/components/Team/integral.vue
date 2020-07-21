<template>
  <div class="">
    <el-row class="myheight">
      <el-col :span="24" class="mytitle">
        <span>我的积分</span>
        <span class="myRight">积分规则</span>
      </el-col>
    </el-row>
    <el-row class="myinte">
      <el-col :span="8" class="myintegral">
        <span class="myprice">积分</span>
        <span>{{ allintegral[0].mycount }}</span>
        <el-button type="danger">去积分商城</el-button>
      </el-col>
      <el-col :span="8" class="myintegral">
        <span>完善信息</span>
        <el-button type="danger">立即完善</el-button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row class="myheight myalign">
      <el-col :span="24" class="mytitle">
        <span class="myclicks title iconfont icon-xiexian">积分获取</span>
        <span class="myclicks">积分消费</span>
      </el-col>
    </el-row>
    <el-table
      :data="integral"
      style="width: 100%"
      max-height="250"
      :header-cell-style="{ background: ' #f5f7f6' }"
    >
      <el-table-column
        fixed
        v-for="item in mytitle"
        :key="item.name"
        :prop="item.prop"
        :label="item.text"
        min-width="20%"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "integral",
  data() {
    //这里存放数据
    return {
      mytitle: [
        { text: "获取时间", prop: "myintegral_date" },
        { text: "积分数", prop: "myintegral_number" },
        { text: "获取类型", prop: "myintegral_class" },
        { text: "获取详情", prop: "myintegral_content" },
        { text: "到期时间", prop: "end_date" }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["allintegral"]),
    ...mapGetters(["integral"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  created: function() {
    console.log(this.$store.dispatch("allintegral"));
    console.log(this.$store.dispatch("myintegral"));
  },
  mounted: function() {
    let that = this;
    $(".myclicks").on("click", function() {
      $(".myclicks").css({
        color: "#000000"
      });
      $(this).css({
        color: "#ff8b81"
      });
      let str = $(this).html();
      that.$store.dispatch("myintegral", str);
    });
  }
};
</script>
<style scoped>
.iconfont {
  font-size: 12px;
}
.mytitle {
  height: 25px;
  line-height: 25px;
  position: relative;
  padding-bottom: 45px;
}
.myheight {
  padding-top: 18px;
}
.myRight {
  position: absolute;
  right: 20px;
}
.myinte {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.myintegral {
  height: 94px;
  line-height: 94px;
  text-align: center;
  border-right: 1px solid gray;
}
button {
  margin-left: 70px;
  padding: 8px 30px;
}
.myprice {
  margin-right: 15px;
  color: #ff8a81;
}
.myalign {
  text-align: center;
}
.title {
  color: #ff8b81;
}
.myclicks {
  margin-left: 15px;
  text-align: center;
}
.myclicks:hover {
  color: #ff8b81;
  cursor: pointer;
}
</style>
