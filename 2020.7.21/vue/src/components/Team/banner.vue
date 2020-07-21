<!-- 首页大轮播图Banner -->
<template>
<div class='kk'>    
  <el-carousel  :height="bannerH +'px'">
    <el-carousel-item v-for="(item,index) in result" :key="index">
        <img :src="require('../../assets/images/'+item.img+'.jpg')" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {                                      
    name:'banner',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
   result:[{id:1,img:"9"},{id:2,img:"10"},{id:3,img:"11"},{id:3,img:"12"},{id:3,img:"13"}],
   bannerH:600
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.el-carousel__container{
    height:600px;
}
.kk /deep/  .el-carousel__button { 
    display: block;
    opacity: .48;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #222;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
}
.kk /deep/  .is-active .el-carousel__button { 
    display: block;
    opacity: .48;
    width: 14px;
    height: 14px;
    border-radius: 50%;
     background-color: red;  
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
}
.width{
    width: 100%;
}

</style>