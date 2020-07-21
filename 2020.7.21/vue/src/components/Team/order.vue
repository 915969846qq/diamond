<template>
  <div class="">
    <el-row class="myheight">
      <el-col :span="24" class="mytitle">
        <span>我的订单</span>
      </el-col>
    </el-row>
    <el-table
      :data="order"
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
      <el-table-column
        fixed
        prop="operation"
        label="操作"
        min-width="20%"
        align="center"
      >
        <template slot-scope="scope">
          <router-link
            :to="{
              path: '/Birds_nest/Viceorder',
              query: { myorder: scope.row.myorder_ID }
            }"
            type="text"
            size="small"
            ><a href="" @click="chakan('myview')" class="mybutton">立即支付</a>
            <a href="" @click="chakan('myview')" class="mybutton">查看详情</a>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "order",
  data() {
    //这里存放数据
    return {
      mytitle: [
        { text: "订单编号", prop: "myorder_ID" },
        { text: "商品信息", prop: "myorder_information" },
        { text: "订单金额", prop: "myorder_price" },
        { text: "已付定金", prop: "myorder_Deposit" },
        { text: "下单时间", prop: "myorder_date" },
        { text: "订单状态", prop: "myorder_is_state" }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["order"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  created: function() {
    console.log(this.$store.dispatch("myorder"));
  }
};
</script>
<style scoped>
.mytitle {
  height: 25px;
  line-height: 25px;
}
.myheight {
  padding-top: 18px;
  padding-bottom: 35px;
}
.mybutton {
  margin-left: 0;
  color: #409eff;
}
</style>
