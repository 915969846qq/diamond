<!-- 婚戒 售后服务 -->
<template>
<div class='kk'>
    <div class="f_cont_serv f_cont" style="display: block;">
			<img src="http://im0.zbird.cn/ww3/detail150815/service_big_img.jpg" alt="" width="1021">
			<dl class="f_cont_serv_txt">
				<dt>优惠换款服务</dt>
				<dd><i>1.</i>会员可享受会员本人购买的30分以上产品优惠换款。换款时，新款式必须镶嵌原来产品的钻石。如果需要升级钻石，请参考以小换大的操作规则。</dd>
				<dd><i>2.</i>优惠换款时，新款空托在正价基础上，只享受会员折扣，不参加任何优惠活动。</dd>
				<dd><i>3.</i>换款时，原空托按原结算价格（即发票金额）的4折进行回收。</dd>
				<dd><i>4.</i>购买换款戒托可按钻石小鸟积分规则积分。</dd>
				<dd><i>5.</i>换款操作可以进行高级来图订制。</dd>
				<dd><i>6.</i>此项业务仅限在体验中心实施，优惠换款之前需对之前所购产品作鉴定检验。</dd>
				<dt>改款条件—本公司所售镶嵌饰品可改换款式</dt>
				<dd><i>1.</i>主石需30分以上方可改款。</dd>
				<dd><i>2.</i>凭相关鉴定证书、发票办理。</dd>
				<dd><i>3.</i>新换款的金托按照实际售价，仅需补新换款售价与原饰品金托回收价之间的差价。</dd>
				<dd><i>4.</i>改款后的产品在享受售后服务时需出示饰品证书、改款后的发票，以便进行核对。</dd> 
			</dl>
		</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:"afterSale",
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
    .f_cont_serv {
        width: 1100px;
        margin: 0 auto 25px;
        background: #fff;
        text-align: center;
        padding: 20px 40px 0;
        position: relative;
        z-index: 0;
    }
    img, dd, dl, dt {
        padding: 0;
        margin: 0;
        border: 0;
    }
    .f_cont_serv_txt {
        text-align: left;
        padding: 0 33px 50px;
    }
    .f_cont_serv_txt dt {
        background: url(http://img.zbird.cn/ww3/detail150815/icon_arrow.jpg) no-repeat left center;
        padding-left: 20px;
        font-size: 12px;
        color: #000;
        font-family: Arial,"宋体";
        margin-bottom: 20px;
        margin-top: 40px;
        margin-left: 5px;
    }
    .f_cont_serv_txt dd {
        line-height: 30px;
        color: #666;
        font-family: Arial,"宋体";
        font-size: 12px;
        padding-left: 30px;
        text-indent: -11px;
    }
    .f_cont_serv_txt dd i {
        display: inline-block;
        padding-right: 10px;
    }
    em, i {
        font-style: normal;
    }
    
</style>