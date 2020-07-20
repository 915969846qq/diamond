<template>
 <div class=''>
   <el-row class="myheight">
     <el-col :span="1" class="mytitle">
        <span>我的预约</span>
     </el-col>
     <el-col :span="23" class="mytitle">
        <span class="myclicks title iconfont icon-xiexian">全部预约</span>
        <span class="myclicks iconfont icon-xiexian">待确认</span>
        <span class="myclicks iconfont icon-xiexian">已成功</span>
     </el-col>
   </el-row>
   <el-table
    :data="appointment"
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
import {mapActions, mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name: 'appointment',
ready(){
  console.log(this);
  this.data
},
data() {
//这里存放数据
return {
    mytitle:[
      {text:'预约提交日期',prop:'user_date'},
      {text:'体验中心',prop:'myappointment_experience'},
      {text:'预约类型',prop:'myappointment_class'},
      {text:'预约电话',prop:'myappointment_Tel'},
      {text:'预约状态',prop:'myappointment_state'},
    ]
};
},
//监听属性 类似于data概念
computed: {
  ...mapGetters(['appointment']),
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // ...mapActions(['confirm']),
},
created:function(){
  console.log(this.$store.dispatch('myappointment'));
},
mounted:function(){
  let that=this;
  $('.myclicks').on('click',function(){
    $('.myclicks').css({
      color:'#000000'
    });
    $(this).css({
      color: '#ff8b81'
    });
    if($(this).html()==='全部预约'){
      that.$store.dispatch('myappointment');
    }
    if($(this).html()==='待确认'){
      that.$store.dispatch('confirm','待确认');
    }    
    if($(this).html()==='已成功'){
      that.$store.dispatch('confirm','已确认');
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