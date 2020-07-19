<!-- 全球美钻 -->
<template>
<div class='kk'>
    <div class="gs_wht_wp">
  <div class="g_main">
    <h2 class="u_st_tlt">婚戒推荐<i></i>全球美钻</h2>
    <div class="f_rng_focus_wp">
      <div class="f_rng_focus">    
        <ul style="left: 0px;">  
            
                    <li style="margin-top: 0px;" v-for="(item,index) in result" :key="index">
                        <router-link to="/banner" target="_blank"><img :src="item.img" alt="" width="240" height="193" style="opacity: 1;">
                        </router-link>
                        
                    </li>
                  
                <!-- <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://im1.zbird.cn/picdb/555/905/7f130bb6f769b7f79f4f6db1cb62e3f0.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://img.zbird.cn/picdb/555/905/95c30f0175335b0dbff907187e461e60.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://im1.zbird.cn/picdb/555/905/85b8cf7d63d466da732336d3a4298575.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://img.zbird.cn/picdb/555/905/0249a7c120b6c632a5533e2441dbbf22.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://img.zbird.cn/picdb/555/905/bca21b60ff198c8cd89cc242428c3f90.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://img.zbird.cn/picdb/555/905/37b1d35e2b66d8f52a75ce5ebdce2e87.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://im0.zbird.cn/picdb/555/905/14070843d4417d3adcccf83126d3cf8e.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li>
                <li style="margin-top: 0px;"><router-link to="/banner" target="_blank"><img src="http://img.zbird.cn/picdb/555/905/a38a0a41055ed99fc4ac7abf38378f57.jpg" alt="" width="240" height="193" style="opacity: 1;"></router-link></li> -->
        </ul>   
      </div>   
    </div>
  </div>
</div>
</div>
</template>

<script>

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {   
    name:'finediamond',
//import引入的组件需要注入到对象中才能使用      
components: {}, 
data() {
//这里存放数据
return {
    result:[{id:1,img:'http://im1.zbird.cn/picdb/555/905/7f130bb6f769b7f79f4f6db1cb62e3f0.jpg'},
            {id:2,img:'http://img.zbird.cn/picdb/555/905/95c30f0175335b0dbff907187e461e60.jpg'},
            {id:3,img:'http://im1.zbird.cn/picdb/555/905/85b8cf7d63d466da732336d3a4298575.jpg'},
            {id:4,img:'http://img.zbird.cn/picdb/555/905/0249a7c120b6c632a5533e2441dbbf22.jpg'},
            {id:5,img:'http://img.zbird.cn/picdb/555/905/bca21b60ff198c8cd89cc242428c3f90.jpg'},
            {id:6,img:'http://img.zbird.cn/picdb/555/905/37b1d35e2b66d8f52a75ce5ebdce2e87.jpg'},
            {id:7,img:'http://im0.zbird.cn/picdb/555/905/14070843d4417d3adcccf83126d3cf8e.jpg'},
            {id:8,img:'http://img.zbird.cn/picdb/555/905/a38a0a41055ed99fc4ac7abf38378f57.jpg'}
    ],
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
    .u_st_tlt {
        color: #000;
        font-size: 24px;
        text-align: center;
        font-weight: normal;
        margin: 0;
        letter-spacing: 2px;
    }
    .u_st_tlt i {
        background: url(http://img.zbird.cn/ww3/160804newindex/icon_and.jpg) center no-repeat;
        display: inline-block;
        width: 21px;
        height: 19px;
        vertical-align: middle;
        padding: 0 6px;
    }
    .f_rng_focus_wp {
        position: relative;
        z-index: 0;
        width: 1180px;
        margin: 45px auto 0;
    }
    .f_rng_focus {
        width: 1096px;
        overflow: hidden;
        height: 193px;
        position: relative;
        z-index: 0;
        margin: 0 auto;
    }
    .f_rng_focus ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 2200px;
        margin: 0;
        padding: 0;
    }
    .f_rng_focus ul li {
        width: 240px;
        height: 193px;
        float: left;
        padding: 0 17px;
    }
  ul li img:hover{
      margin-top:-12px;
  }
</style>
