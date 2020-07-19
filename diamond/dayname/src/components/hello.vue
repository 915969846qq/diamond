<!--  -->
<template>
<div class='aa'>
    <banner></banner>
    <engagementring></engagementring>
    <series></series> 
    <router-view></router-view>
    <finediamond></finediamond>
    <news></news>
    <diamondicon></diamondicon>
    <!-- <productPara></productPara> -->
    <!-- <afterSale></afterSale>                         -->
    <!-- <checkAll></checkAll> -->
    <store></store>
    <!-- <map1></map1> -->

</div>
</template>


<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import banner from '../components/Team/banner'  
import engagementring from '../components/Team/engagement-ring' 
import series from '../components/Team/series-product'
import finediamond from '../components/Team/fine-diamond'
import news from '../components/Team/hot-news'
import diamondicon from '../components/Team/diamond-icon'
// import productPara from '../components/Team/hunjie/product-parameters'
// import afterSale from '../components/Team/hunjie/after-sale'
// import checkAll from '../components/Team/hunjie/checkAll'
import store from '../components/Team/store'
// import map1 from '../components/Team/map'   

export default {      
    name:'hello',
//import引入的组件需要注入到对象中才能使用
components: {
    banner:banner,   
    engagementring:engagementring,                           
    series:series,
    finediamond:finediamond,
    diamondicon:diamondicon,
    // productPara:productPara,        
    // afterSale:afterSale,
    // checkAll:checkAll,       
    store:store,
      news:news,
    // map1:map1
},
data() {
//这里存放数据
return {

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
  //初始化全局GoEasy对象
               
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
    
</style>