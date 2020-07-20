<!-- 系列产品 对戒 -->
<template>
<div class='kk'>
    <div class="g_tab_cnt">
        <div class="left">
            <router-link to="/zuanshi">
                <img src="../../assets/images/24.jpg" alt="">
                <img src="../../assets/images/25.jpg" alt="">
            </router-link>            
        </div>
        <div class="right">               
            <router-link to="/zuanshi">     
                <img src="../../assets/images/26.jpg" alt="">
            </router-link>
        </div>           
    </div>               
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'duijie', 
//import引入的组件需要注入到对象中才能使用
components: {},
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
    .g_tab_cnt{
        text-align: left;
        margin-top: 20px;
        display: block;
    }
    .g_tab_cnt .left {
        width: 700px;
        float: left;
        padding-right: 15px;
        margin-left: 365px;
    }
    .g_tab_cnt .right{
        width: 464;
        float: left;
    }
    .left img:first-of-type{
        margin-bottom: 10px;
    }
</style>