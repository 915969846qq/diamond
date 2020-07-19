<!-- 首页钻石图标 -->
<template>
<div class='kk'>
    <div class="gs_gray_wp">
    <div class="g_shp_wp">
      <i class="g_shp_bg"></i>
      <router-link to="/zuanshi" target="_blank" class="u_shp_1" title="圆形"><i></i>Round</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_2" title="公主方"><i></i>Princess</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_3" title=" 垫型 "><i></i>cushion</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_4" title="祖母绿"><i></i>Emerald</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_5" title="椭圆形"><i></i>Oval</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_6" title="雷地恩"><i></i>Radiant</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_7" title="榄尖形"><i></i>Marquise</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_8" title="梨形"><i></i>Pear</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_9" title="心形"><i></i>Heart</router-link>
      <router-link to="/zuanshi" target="_blank" class="u_shp_10" title="三角形"><i></i>Trillion</router-link>
    </div>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'diamondicon', 
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
    .gs_gray_wp {
        background: #f5f5f5;
        width: 100%;
        overflow: hidden;
    }
    .g_shp_wp {
        background: #f5f5f5;
        text-align: center;
        padding: 50px 0;
    }
    em, b, i {
        font-style: normal;
    }
    .g_shp_wp a {
        display: inline-block;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #b7b7b7;
        font-size: 11px;
        font-family: Arial;
        letter-spacing: 1px;
    }
    .g_shp_wp a i {
        display: block;
        background: url(http://img.zbird.cn/ww3/160804newindex/icon_shape.jpg) no-repeat;
        height: 49px;
        margin-bottom: 8px;
    }
    .g_shp_wp a.u_shp_1 i {
        background-position: 0 0;
        width: 104px;
    }
    .g_shp_wp a.u_shp_2 i {
        background-position: -104px 0;
        width: 104px;
    }
    .g_shp_wp a.u_shp_3 i {
        background-position: -208px 0;
        width: 98px;
    }
    .g_shp_wp a.u_shp_4 i {
        background-position: -306px 0;
        width: 91px;
    }
    .g_shp_wp a.u_shp_5 i {
        background-position: -397px 0;
        width: 92px;
    }
    .g_shp_wp a.u_shp_6 i {
        background-position: -489px 0;
        width: 105px;
    }
    .g_shp_wp a.u_shp_7 i {
        background-position: -594px 0;
        width: 86px;
    }
    .g_shp_wp a.u_shp_8 i {
        background-position: -680px 0;
        width: 91px;
    }
    .g_shp_wp a.u_shp_9 i {
        background-position: -771px 0;
        width: 109px;
    }
    .g_shp_wp a.u_shp_10 i {
        background-position: -880px 0;
        width: 110px;
    }
    .g_shp_wp a.u_shp_1:hover i {
        background-position: 0 -49px;
    }
    .g_shp_wp a.u_shp_2:hover i {
        background-position: -104px -49px;
    }
    .g_shp_wp a.u_shp_3:hover i {
        background-position: -208px -49px;
    }
    .g_shp_wp a.u_shp_4:hover i {
        background-position: -306px -49px;
    }
    .g_shp_wp a.u_shp_5:hover i {
        background-position: -397px -49px;
    }
    .g_shp_wp a.u_shp_6:hover i {
        background-position: -489px -49px;
    }
    .g_shp_wp a.u_shp_7:hover i {
        background-position: -594px -49px;
    }
    .g_shp_wp a.u_shp_8:hover i {
        background-position: -680px -49px;
    }
    .g_shp_wp a.u_shp_9:hover i {
        background-position: -771px -49px;
    }
    .g_shp_wp a.u_shp_10:hover i {
        background-position: -880px -49px;
    }   
</style>


