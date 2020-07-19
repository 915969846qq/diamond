<!-- 预约进店 弹框 -->
<template>
<div class='kk'>
    <div class="op_layer" style="display: block;"></div>
    <div class="yystore_hide" style="display: block;">
	<div class="yystore_hide_cnt">
		<i class="yy_hide_close"></i>
		<div class="yy_hide_tlt">预约进店 甄礼纷呈</div>
		<div class="yy_ipt">
			<input type="text" placeholder="手机号" class="yy_ipt_tel">			
		</div>
		<div>
			<div class="yy_date append_date"> 
				  <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期" size="small">
                    </el-date-picker>
                </div>	
			</div>
			<el-time-select
                v-model="value"
                :picker-options="{
                    start: '08:30',
                    step: '00:15',                      
                    end: '18:30'
                }"
                placeholder="选择时间">
                </el-time-select>
		</div>
		<div class="yy_targ">
			<div>服务内容</div>      
			<em  class="buy on">婚戒试戴</em><em class="maintain">婚戒保养</em>
		</div>
		<div class="yy_warr_txt">
			
		</div>
        <el-button 
            plain
            @click="open2">
            立即预约
        </el-button>
		<div class="yy_hide_tips">
			如您在预约过程中遇到任何问题,请致电400-880-0051 或 <span class="pink"> 在线咨询客服</span>
		</div>
	</div>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'yuyue',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    value1: '',
    value: ''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
      open2() {
        this.$notify({
          title: '消息：',
          message: "用户"+$(".yy_ipt_tel").val()+"在"+$(".el-input__inner").val()+"预约成功，请等候通知！",
          position: 'bottom-right'
        });            
      },           
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    let that =  this;
    $(".yy_hide_close").click(function(){
        $(".op_layer").css("display","none");
        $(".yystore_hide").css("display","none");
        that.$router.push("/map1");
        $(".g_cityreg_rig").css("position","relative").css("z-index",0);
    });
    $(".buy").click(function(){    
        $(this).css("color","red").css("background","#fdeaea").css("border","1px solid #f6827a");
        $(".maintain").css("background","#f8f8f8").css("color","#999").css("border","1px solid #f8f8f8");
    });
    $(".maintain").click(function(){
        $(this).css("color","red").css("background","#fdeaea").css("border","1px solid #f6827a");
        $(".buy").css("background","#f8f8f8").css("color","#999").css("border","1px solid #f8f8f8");
    })
     $(".el-button").click(function(){
        $(".op_layer").css("display","none");
        $(".yystore_hide").css("display","none");
        $(".g_cityreg_rig").css("position","relative").css("z-index",0);
        that.$router.push("/map1");
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
.g_cityreg_rig{
    z-index:-1;
}
.op_layer {
    background: #000;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
}

.yystore_hide {
    width: 504px;
    background: #fff;
    top: 50%;
    left: 50%;
    z-index: 11;
    position: absolute;
    margin: -275px 0 0 -252px;
}
.yystore_hide {
    position: fixed;
}
.yystore_hide_cnt {
    position: relative;
    z-index: 12;
}
.yy_hide_close {
    background: url(http://img.zbird.cn/ww3/store/180330/close.png) center no-repeat;
    width: 50px;
    height: 50px;
    top: 0px;
    right: 0px;
    position: absolute;
    z-index: 13;
    cursor: pointer;
}
em, b, i {
    font-style: normal;
}
.yy_hide_tlt {
    text-align: center;
    color: #000;
    font-size: 26px;
    padding: 40px 0 25px;
    margin-bottom: 16px;
}
.yy_ipt {
    margin-bottom: 22px;
}
.yy_province, .yy_ipt, .yy_city, .yy_store {
    background: #f8f8f8;
    width: 310px;
    height: 40px;
    margin: 0 auto 10px;
    text-align: left;
}
.yy_ipt_name, .yy_ipt_tel {
    padding: 13px 15px;
    width: 280px;
    line-height: 12px;
    background: none;
}
.yy_ipt_name, .yy_ipt_tel, .yy_ipt_date {
    border: 0;
    margin: 0;
    color: #999;
    font-size: 12px;
    display: inline-block;
}
.yy_date {
    margin-right: 7px;
    position: relative;
    z-index: 1;
}
.yy_date, .yy_time, .yy_province, .yy_city {
    width: 150px;
    height: 40px;
    display: inline-block;
    background: #f8f8f8;
    vertical-align: middle;
}
.kk /deep/ .el-input__inner {
    padding: 18px 30px;
    width: 150px;
    line-height: 25px;
    margin-right: 14px;
    color: #000;
    cursor: pointer;
}
.yy_ipt_name, .yy_ipt_tel, .yy_ipt_date {
    border: 0;
    margin: 0;
    color: #999;
    font-size: 12px;
    display: inline-block;
}
.yy_province, .yy_city, .yy_time, .yy_store {
    line-height: 40px;
    position: relative;
}
.yy_date, .yy_time, .yy_province, .yy_city {
    width: 150px;
    height: 40px;
    display: inline-block;
    background: #f8f8f8;
    vertical-align: middle;
}
.append_date{
    margin-left: 97px;
}
.yy_time em {
    display: block;
    background: url(http://img.zbird.cn/ww3/store/180330/icon_dwn.png) right center no-repeat;
    margin-right: 14px;
    text-align: left;
    margin-left: 14px;
    cursor: pointer;
}
em, b, i {
    font-style: normal;
}
.yy_time .yy_sel_op {
    width: 150px;
    height: 80px;
}
.yy_sel_op {
    position: absolute;
    z-index: 1;
    top: 41px;
    left: 0;
    background: #f8f8f8;
    overflow-y: scroll;
    display: none;
}
.yy_targ {
    margin-top: 10px;
    text-align: center;
}
.yy_targ div {
    text-align: left;
    color: #999;
    line-height: 36px;
    width: 310px;
    margin: 0 auto;
}
.on {
    background: #fdeaea;
    color: #f6827a;
    border: 1px solid #f6827a;
}
.yy_targ em {
    background: #f8f8f8;
    font-size: 12px;
    color: #999;
    width: 148px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #f8f8f8;
    text-align: center;
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
}
.yy_warr_txt {
    width: 310px;
    height: 22px;
    line-height: 22px;
    margin: 0 auto;
    text-align: left;
    color: #f6827a;
}
.kk /deep/ .el-button{
     background: #fdb2a4;
    width: 310px;
    height: 40px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    display: block;
    margin: 0 auto;
}
.yy_hide_tips {
    line-height: 24px;
    margin: 20px auto 40px;
    color: #666;
    text-align: center;
}
.pink {
    background: #fdb2a4;
    display: inline-block;
    padding: 0 4px;
    color: #666;
}
.kk /deep/ .el-date-editor{
    width: 150px;
}
</style>