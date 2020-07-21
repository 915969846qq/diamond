<!-- 首页 系列产品 -->
<template>
<div class='mm'>
    <div class="gs_wht_wp">
        <div class="g_main">
            <h2 class="u_st_tlt">系列产品</h2>
            <div class="g_tab_wp">
                <span class="" @mouseover="tt">推荐</span>
                <span class="" @mouseover="kk">钻石</span>
                <span class="" @mouseover="mm">婚戒</span>
                <span class="" @mouseover="ll">对戒</span>
                <span class="" @mouseover="pp">配饰</span>          
            </div>
                  
        </div>                           
    </div>      
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tuijian from './tuijian'
import zuanshi1 from './zuanshi1'
import duijie from './duijie'
import hunjie from './hunjie'
import peishi from './peishi'

export default {
    name:'series',
//import引入的组件需要注入到对象中才能使用
components: {
    tuijian:tuijian,
    zuanshi1:zuanshi1,
    duijie:duijie,              
    hunjie:hunjie,                                  
    peishi:peishi               
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
    tt(){
        this.$router.push({ path: '/tuijian' });
    },
    kk(){
        this.$router.push({ path: '/zuanshi1' });
    },
    mm(){
         this.$router.push({ path: '/hunjie' });           
    },        
    ll(){   
        this.$router.push({ path: '/duijie' });  
    },
    pp(){
        this.$router.push({ path: '/peishi'});          
    },                      
},
//生命周期 - 创建完成（可以访问当前this实例）               
created() {
     
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    $(".g_tab_wp span").on({
        mouseover:function(){
            $(this).css("color","#222");
        },
        mouseout:function(){
             $(this).css("color","#fff");       
        }
    });
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
    .u_st_tlt {
        color: #000;
        font-size: 24px;
        text-align: center;
        font-weight: normal;
        margin: 0;
        letter-spacing: 2px;
    }
    .g_tab_wp {
        background: #feb8ae;
        text-align: center;
        margin-top: 45px;
    }
    .g_tab_wp span {
        color: #fff;
        font-size: 12px;
        line-height: 37px;
        display: inline-block;
        width: 106px;
        cursor: pointer;
    }
    em, b, i {
        font-style: normal;
    }
    .g_tab_cnt {
        text-align: left;
        margin-top: 20px;
        display: block;
    }
    .g_tab_cnt span {
        width: 700px;
        display: inline-block;
        padding-right: 15px;
    }
    .router-link-active{
        color: #222;
    }
</style>