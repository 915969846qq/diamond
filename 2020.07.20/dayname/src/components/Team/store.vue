<!-- 首页 品牌故事 -->
<template>
<div class='kk'>
    <div class="gs_wht_wp">
  <div class="g_main">
    <div class="f_ad_wp">
      <span>         
        <router-link to="/zuanshi" target="_blank" class="g_tab_cnt_spe_a">
            <img src="http://im1.zbird.cn/picdb/555/906/0f7ab89759a0acadc7aa75e9d96f74c3.jpg" alt="" width="722" height="644" style="opacity: 1;">
        </router-link>
        <router-link to="/zuanshi" target="_blank">
            <img src="http://im0.zbird.cn/picdb/555/906/c2ec26ed9335644ab592a2745b14142c.gif" alt="" width="440" height="644" style="opacity: 1;">
        </router-link>          
    </span>      
        <router-link to="/zuanshi" target="_blank">
            <img src="http://img.zbird.cn/picdb/555/906/0973eae3daff555b44ec3ced8cb6fa90.jpg" alt="" width="1180" height="324" style="opacity: 1;">
        </router-link>
    </div>
  </div>                     
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'store', 
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
    .gs_wht_wp {
        background: #fff;
        width: 100%;
        overflow: hidden;
    }
    .g_main {
        margin: 55px auto 0;
        width: 1180px;
    }
    .f_ad_wp span {
        display: block;
        margin-bottom: 10px;
        text-align: left;
        overflow: hidden;
    }
    .f_ad_wp span a.g_tab_cnt_spe_a {
        margin-right: 15px;
    }
    .f_ad_wp span a {
        display: block;
        float: left;        
    }
</style>