<!-- 婚戒 精美包装，权威认证，贴心服务 -->
<template>
<div class='kk'>
    <div class="f_brand_wp">
        <div class="f_brand_tlt">
	    	<router-link to="/checkAll/jingmei" class="f_brand_tlt_01">精美包装</router-link>
            <i>/</i>
            <router-link to="/checkAll/quanwei" class="f_brand_tlt_02 on">权威认证</router-link>
            <i>/</i>
            <router-link to="/checkAll/tiexin" class="f_brand_tlt_03">贴心服务</router-link>
	    </div>
        <div class="f_brand_con">
            <router-view></router-view>                  
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import jingmei from './jingmei'
import quanwei from './quanwei'     
import tiexin from './tiexin'
export default {
    name:'checkAll',
//import引入的组件需要注入到对象中才能使用
components: {
    jingmei:jingmei,
    quanwei:quanwei,
    tiexin:tiexin,
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
    .f_brand_wp {
        width: 1180px;
        margin: 60px auto 70px;
        position: relative;
        z-index: 0;
    }
    .f_brand_tlt {
        width: 1180px;
        overflow: hidden;
        padding-top: 10px;
        padding-bottom: 15px;
        background: #fff;
        text-align: center;
        border-top: 1px solid #333;
    }
    .f_brand_tlt a {
        padding: 10px 22px;
        display: inline-block;
        color: #000;
        font-size: 12px;
    }
    .f_brand_tlt i {
        vertical-align: middle;
        color: #ccc;
        font-size: 13px;
        font-weight: normal;
        font-family: "宋体";
    }
    em, i {
        font-style: normal;     
    }
    .f_brand_tlt a:hover, .f_brand_tlt {
        color: #ff8a81;     
    }
    .f_brand_con {
        width: 1180px;
        height: 529px;
    }
</style>