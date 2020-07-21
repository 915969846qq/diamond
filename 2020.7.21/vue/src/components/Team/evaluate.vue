<template>
  <div class=''>
    <el-row class="myheight">
     <el-col :span="1" class="mytitle">
        <span>我的评价</span>
     </el-col>
     <el-col :span="23" class="mytitle">
        <span class="myclicks title iconfont icon-xiexian">全部评论</span>
        <span class="myclicks iconfont icon-xiexian">已评论</span>
        <span class="myclicks">待评论</span>
     </el-col>
   </el-row>
  <el-table
    :data="evaluate"
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
import {mapGetters,mapActions} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name: 'evaluate',
data() {
//这里存放数据
return {
    mytitle:[
      {text:'商品信息',prop:'p_information'},
      {text:'商品价格',prop:'p_price'},
      {text:'购买时间',prop:'p_time'},
      {text:'评论晒单',prop:'evaluate'},
    ]
};
},
//监听属性 类似于data概念
computed: {
  ...mapGetters(['evaluate'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
mounted:function(){
  // console.log(this.$store.dispatch('mydata'));
  let that=this;
  $('.myclicks').on('click',function(){
    $('.myclicks').css({
      color:'#000000'
    });
    $(this).css({
      color: '#ff8b81'
    });
    if($(this).html()==='全部评论'){
      that.$store.dispatch('appointments');
    }
    if($(this).html()==='已评论'){
      that.$store.dispatch('Commented');
    }    
    if($(this).html()==='待评论'){
      that.$store.dispatch('to_commented');
    }
  });
}
}
</script>
<style scoped>
.iconfont{
  font-size: 12px;
}
.mytitle{
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.myclicks{
  margin-left: 15px;
  text-align: center;
}
.myheight{
  padding-top: 18px;
  padding-bottom: 35px;
}
.myclicks:hover{
  color: #ff8b81;
  cursor: pointer;
}
.title{
  color: #ff8b81;
}
.el-row{
  text-align: center;
}
</style>