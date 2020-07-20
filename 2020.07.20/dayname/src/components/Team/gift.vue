<template>
  <div class=''>
    <!-- 第一 -->
    <el-row class="myheight">
     <el-col :span="1" class="mytitle">
        <span>我的礼品</span>
     </el-col>
   </el-row>
   <!-- 第二 -->
    <el-table
      :data="gift"
      style="width: 100%"
      max-height="250"
      :header-cell-style="{background:' #f5f7f6'}">
        <el-table-column
        fixed
        v-for="(item) in mytitle"
        :key="item.name"
        :prop="item.prop"
        :label="item.text"
        min-width="20%"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name: 'gift',
data() {
//这里存放数据
return {
    mytitle:[
      {text:'礼品图片',prop:'mygift_img'},
      {text:'礼品名称',prop:'mygift_name'},
      {text:'礼品数量',prop:'mygift_number'},
      {text:'礼品类型',prop:'mygift_class'},
      {text:'绑定时间',prop:'user_date'},
    ]
};
},
//监听属性 类似于data概念
computed: {
  ...mapGetters(['gift'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
created:function(){
  console.log(this.$store.dispatch('mygift'));
},
}
</script>
<style scoped>
.mytitle{
  height: 25px;
  line-height: 25px;
}
.myheight{
  padding-top: 18px;
  padding-bottom: 35px;
}
</style>