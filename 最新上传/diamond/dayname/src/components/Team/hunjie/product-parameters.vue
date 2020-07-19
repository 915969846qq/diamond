<!-- 婚戒 商品参数 -->
<template>
<div class='kk'>
    <div class="f_cont_sys f_cont" style="display: block;">
			<dl class="f_cont_sys_lst">
				<dt><span>货号</span><span>材质</span><span>手寸</span><span>证书</span></dt>
				<dd><span>{{result[0].huohao}}</span><span>{{result[0].caizhi}}</span>
                    <span>{{result[0].shoucun}}</span><span>{{result[0].zhengshu}}</span>
				</dd>
			</dl>
			<dl class="f_cont_sys_lst">
				<dt><span>主钻重量</span><span>副钻重量</span><span>颜色</span><span>净度</span><span>切工</span></dt>
				<dd><span>{{result[0].weight1}}</span><span>{{result[0].weight2}}</span>
                    <span>{{result[0].color}}</span><span>{{result[0].jingdu}}</span><span>{{result[0].qiegong}}</span>
				</dd>
			</dl>                   
			<i class="u_but_tips">温馨提示：展示图片仅供参考，产品请以实物为准</i>  
		</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'productPara',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    result:[{huohao:"RDT48永恒之约Ⅱ",caizhi:"白18K金",shoucun:"12.0号",zhengshu:"国检",
            weight1:"0.24克拉",weight2:"0.12克拉",color:"H",jingdu:"SI",qiegong:"好"}
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
    .f_cont_sys {
        padding: 20px 50px 0;
        background: #fff;
        width: 1080px;
        margin: 0 auto;
        text-align: left;
        position: relative;
        z-index: 0;
    }
    .f_cont_sys_lst {
        margin-top: 10px;
        margin-bottom: 40px;
    }
    img, dd, dl, dt {
        padding: 0;
        margin: 0;
        border: 0;
    }
    .f_cont_sys_lst dt {
        background: #f5f7f6;
        height: 29px;
        line-height: 29px;
        text-align: center;
    }
    .f_cont_sys_lst dt span {
        color: #999;
    }
    .f_cont_sys_lst span {
        width: 162px;
        text-align: center;
        display: inline-block;
    }
    .f_cont_sys_lst dd {
        background: #fff;
        height: 27px;
        line-height: 27px;
        text-align: center;
        border-bottom: 1px solid #f5f7f6;
    }
    .f_cont_sys_lst dd span {
        color: #666;
    }
    .f_cont_sys_lst {
        margin-top: 10px;
        margin-bottom: 40px;
    }
    .u_but_tips {
        font-size: 12px;
        color: #999;
        display: inline-block;
    }
    em, i {
        font-style: normal;                 
    }
</style>