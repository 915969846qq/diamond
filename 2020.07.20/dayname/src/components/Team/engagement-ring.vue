<!-- 设计订婚戒指组件 -->
<template>
<div class='kk'>
    <div class="g_main">
        <!-- 左边 -->
        <div class="g_diy_shw">
            <h2 class="u_st_tlt">设计订婚戒指</h2>
            <div class="g_diy_shw_focus" id="diy_focus_jq">
                <div class="u_diy_1">
                    <el-carousel :height="bannerH +'px'" :width="bannerW+'px'" arrow="always">
                        <el-carousel-item v-for="(item,index) in result" :key="index">
                            <img :src="require('../../assets/images/'+item.img+'.jpg')" alt="">
                        </el-carousel-item>         
                    </el-carousel>
                </div>
            </div>
            <div class="u_pnk_btn">
                 <router-link to="/zuanshi">从挑选钻石开始</router-link>
            </div>
            <div class="u_pnk_btn">
                 <router-link to="/zuanshi">从挑选款式开始</router-link>
            </div>
        </div>
        <!-- 右边 -->
        <div class="g_diy_shw_pic">
            <router-link to="/zuanshi">
                <img src="../../assets/images/14.jpg" alt="">
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'engagementring',
//import引入的组件需要注入到对象中才能使用        
components: {},
data() {
//这里存放数据
return {
    bannerH:190,
    bannerW:352,
    result:[{id:1,img:"72"},{id:2,img:"73"},{id:3,img:"74"}],
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
    a{
        color: #222;
    }
    .kk{
        background: #fff;
        width: 100%;
        overflow: hidden;
    }
    .g_main{
        margin: 55px auto 0;
        width: 1180px;       
    }
    .g_diy_shw {
        float: left;
        background: #f7f7f7;
        width: 580px;
        padding-bottom: 34px;
    }
    .g_diy_shw .u_st_tlt {
        font-size: 26px;
        margin: 0;
        padding: 45px 0 27px;
    }
    .u_st_tlt {
        color: #000;
        font-size: 24px;
        text-align: center;
        font-weight: normal;
        margin: 0;
        letter-spacing: 2px;
    }   
    .g_diy_shw_focus {
        width: 352px;
        height: 190px;
        margin: 24px auto 0;
        overflow: hidden;           
        position: relative;
        z-index: 0;
    }
    .g_diy_shw_focus div {
        width: 352px;
        height: 190px;
        position: absolute;
        top: 0;
        left: 0;
    }
   .g_diy_shw .u_pnk_btn{
        width: 204px;
        height: 34px;
        line-height: 34px;
        display: block;
        margin: 0 auto; 
        margin-bottom: 12px;
   }
    
    .u_pnk_btn{
        background: #f6827a;
        color: #fff;
        text-align: center;          
        font-size: 12px;           
    }
    .g_diy_shw_pic {
        float: right;
        width: 578px;
        height: 442px;
        position: relative;
    }
    .kk /deep/  .el-carousel__arrow{
        display: none;
    }
    .kk /deep/ .el-carousel__indicator--horizontal{
        display: none;  
    }
</style>
