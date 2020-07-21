<template>
  <div class="">
    <el-row class="myheight">
      <el-col :span="1" class="mytitle">
        <span>我的礼券</span>
      </el-col>
      <el-col :span="23" class="mytitle">
        <span class="myclicks title iconfont icon-xiexian">未使用</span>
        <span class="myclicks iconfont icon-xiexian">已使用</span>
        <span class="myclicks">已过期</span>
      </el-col>
    </el-row>
    <el-table
      :data="certificate"
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
import { mapActions, mapGetters } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "certificate",
  ready() {
    console.log(this);
    this.data;
  },
  data() {
    //这里存放数据
    return {
      mytitle: [
        { text: "券名", prop: "mycertificate_name" },
        { text: "券码", prop: "mycertificate_code" },
        { text: "面值", prop: "mycertificate_value" },
        { text: "有效期", prop: "mycertificate_date" },
        { text: "状态", prop: "code_state" },
        { text: "使用规则", prop: "mycertificate_rule" }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["certificate"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  created: function() {
    console.log(this.$store.dispatch("mycertificate"));
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
      that.$store.dispatch("mycertificate", str);
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
  text-align: center;
}
.myclicks {
  margin-left: 15px;
  text-align: center;
}
.myheight {
  padding-top: 18px;
  padding-bottom: 35px;
}
.myclicks:hover {
  color: #ff8b81;
  cursor: pointer;
}
.title {
  color: #ff8b81;
}
.el-row {
  text-align: center;
}
</style>
