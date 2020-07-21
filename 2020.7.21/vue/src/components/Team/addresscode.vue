<!-- 地址管理 -->
<template>
<div class='address'>
    <div class="show_wp">
            <strong class="form_title" style="line-height:58px;">
              <div class="formTile" style="top:2px;">地址管理</div>
              <a href="javascript:;" id="btn_add_addr" state="able" class="btn_add_on"><div>+</div>新增收货地址</a>
            </strong>
               <form id="frmEditMemberContactInfo" action="http://www.zbird.com/member/operation/" method="POST">
               <div class="addr_hide_wp" style="display: block;">
                  <div class="addr_input_wp"><span><i>*</i>收货人</span><input type="text" name="mAddr_receiver_sh" class="addr_name" value="">
                    <em class="error_address er01"></em>
                  </div>
                  <div class="addr_input_wp"><span><i>*</i>手机</span><input type="text" name="mAddr_contact_tel_sh" class="addr_tel" value="">
                  <em class="error_address er02"></em>
                  </div>  
                  <div class="addr_input_wp"><span><i>*</i>地址</span>
                  <select id="areaCodeProv"><option value="">请选择</option><option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option><option value="990000">海外</option></select><select id="areaCodeCity"></select><select id="areaCodeDist"></select><input type="hidden" name="mAddr_area_code_sh" value="" id="areaCodeHiddenT">

                  <input type="text" name="mAddr_address_sh" placeholder="街道名称/编号 楼宇名称 房间号" class="input_add addr_ads gray_unable">
                  <em class="error_address er03"></em>
                  </div>
                  <div class="addr_input_wp"><span><i>*</i>邮编</span><input type="text" name="mAddr_postcode_sh" value="" class="addr_zipcode">
                  <em class="error_address er04"></em>
                  </div> 
                   <div class="btns_dwp">
                     <input type="button" class="btn_save" id="addr_save" value="保存">
                     <input type="button" class="btn_cancel_04" id="addr_cancel" value="取消">
                     <span class="check_default_addr"><em id="checked_default"><i></i></em><b>设置为默认地址</b></span>
                   </div>
                   <input type="hidden" name="is_default" class="is_default" value="0">
                   <input type="hidden" name="addrNo" value="">  
               </div>
               </form>
                <div class="pore_wp">
                    <div class="include_wp clearfix">
                        
                        <div class="form_header" style="top:0px;">
                           <em class="addr_w105">收货人</em>
                           <em class="addr_w95">所在地区</em>
                           <em class="addr_w335">详细地址</em>
                           <em class="addr_w75">邮编</em>
                           <em class="addr_w139">手机</em>
                           <em class="addr_w93">操作</em>
                           <em class="addr_w164"></em>
                        </div>
                                                <div class="form_wp clearfix">
                                                    <div class="addr_list ">
                            <em class="addr_w105">无情的去</em>
                            <em class="addr_w95">福建省泉州市丰泽区</em>
                            <em class="addr_w335">1212</em>
                            <em class="addr_w75">610000</em>
                            <em class="addr_w139">15689754322</em>
                            <em class="addr_w93"><a href="/member/address/addr_no/2/">修改</a> <a href="javascript:;" class="delete_address" data="2">删除</a></em>
                            <em class="addr_w164">
                                                              <a href="javascript:;" data="2" class="btn_default_addr">设为默认地址</a>
                                                          </em>
                          </div>
                                                  </div>
                                            </div>  
                </div>
            </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import map from './map'
import areacode from './areacode'
import  {address1}  from './address1.js'
export default {
    name:'addresscode',
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
    .show_wp {
        position: relative;
        width: 998px;
        text-align:center;
        margin:  0 auto;
    }
    .form_title {
        font-size: 12px;
        height: 60px;
        line-height: 45px;
        display: block;
        text-align: center;
        color: #000;
        background: #fff;
        font-weight: normal;
        position: relative;
    }
    .formTile {
        font-size: 12px;
        color: #000;
        position: absolute;
        left: 0px;
        top: 5px;
        z-index: 5;
    }
    #btn_add_addr {
        width: 105px;
        height: 23px;
        display: inline-block;
        float: right;
        margin-top: 21px;
        margin-right: 20px;
        color: #666;
        font-family: Arial,"宋体";
        vertical-align: middle;
        line-height: 20px;
    }
    form {
        margin: 0;
        padding: 0;
    }
    .addr_hide_wp {
        background: #fff;
        padding-top: 33px;
        padding-bottom: 33px;
    }
    .addr_input_wp {
        overflow: hidden;
        padding-left: 59px;
        text-align: left;
    }
    .addr_input_wp span {
        float: left;
        display: block;
        line-height: 33px;
        width: 90px;
        padding-right: 30px;
        text-align: right;
        font-size: 13px;
        font-family: Arial,"宋体";
        color: #666;
    }
    .addr_name, .addr_tel, .addr_zipcode {
        float: left;
        width: 138px;
        padding: 7px 10px;
        display: block;
        margin: 0;
        border: 1px solid #dcddde;
        height: 17px;
    }
    input, textarea {
        outline: none;
    }
    .error_address {
        display: block;
        height: 20px;
        line-height: 20px;
        color: #c10e0e;
        font-family: "宋体";
        font-size: 12px;
        clear: both;
        padding-left: 122px;
    }
    em, b, i {
        font-style: normal;
    }
    .addr_input_wp {
        overflow: hidden;
        padding-left: 59px;
        text-align: left;
    }
    .addr_input_wp span {
        float: left;
        display: block;
        line-height: 33px;
        width: 90px;
        padding-right: 30px;
        text-align: right;
        font-size: 13px;
        font-family: Arial,"宋体";
        color: #666;
    }
    .addr_input_wp span i {
        color: #ff8a81;
        padding-right: 10px;
    }
    .addr_name, .addr_tel, .addr_zipcode {
        float: left;
        width: 138px;
        padding: 7px 10px;
        display: block;
        margin: 0;
        border: 1px solid #dcddde;
        height: 17px;
    }
    .error_address {
        display: block;
        height: 20px;
        line-height: 20px;
        color: #c10e0e;
        font-family: "宋体";
        font-size: 12px;
        clear: both;
        padding-left: 122px;
    }
    option {
        font-weight: normal;
        display: block;
        white-space: pre;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
    .addr_input_wp .input_add {
        height: 31px;
    }
    .gray_unable {
        color: #999;
    }
    .addr_hide_wp .btns_dwp {
        text-align: left;
        padding-left: 180px;
    }
    .btns_dwp {
        position: relative;
        padding-bottom: 2px;
        padding-top: 11px;
    }
    input, select, textarea {
        background-color: #fff;
        color: #7f7f7f;
        border: 1px solid #ccc;
        text-align: left;
        margin: 2px 0 2px 0;
    }
    .pore_wp {
        position: relative;
        z-index: 0;
    }
    .include_wp {
        font-family: Arial, "宋体";
        background: #fff;
        overflow: hidden;
    }
    .form_header {
        display: table;
        background: #f5f7f6;
        line-height: 45px;
        font-size: 12px;
        width: 983px;
        height: auto;
        overflow: hidden;
        border: none;
    }
    .form_header em {
        color: #999;
    }
    .addr_w105 {
        width: 105px;
        font-size: 12px;
    }
    .addr_list:last-child {
        border-bottom: 1px solid #deddde;
    }
    .addr_list em {
        height: 103px;
    }
    .addr_w105 {
        width: 105px;
        font-size: 12px;
    }
    .addr_w95 {
        width: 95px;
        font-size: 12px;
    }
    .addr_w335 {
        width: 285px;
        font-size: 12px;
        padding: 0 10px;
    }
    .addr_w75 {
        width: 65px;
        font-size: 12px;
    }
    .addr_w139 {
        width: 149px;
        font-size: 12px;
    }
    .addr_w93 {
        width: 93px;
        font-size: 12px;
    }
    .addr_w93 a {
        color: #4b4b4b;
    }
    .addr_w164 {
        width: 164px;
        font-size: 12px;
    }.addr_w164 .btn_default_addr {
        background: #ff8a81;
        width: 102px;
        height: 27px;
        display: inline-block;
        text-align: center;
        line-height: 27px;
        color: #fff;
    }
    a:link, a:visited {
        text-decoration: none;
    }
    .addr_input_wp select {
        color: #999;
        margin: 0;
        width: 160px;
        float: left;
        display: block;
        margin-right: 10px;
        border: 1px solid #dcddde;
        font-family: "宋体";
        font-size: 13px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 5px;
    }
    .input_add {
        height: 26px;
        width: 240px;
        border: 1px solid #dcddde;
        color: #666;
        margin: 0;
        font-family: Arial,"宋体";
        padding-left: 10px;
        padding-right: 10px;
        line-height: 26px;
    }
    .btn_save, .btn_cancel_04, .btn_alter {
        border: 0;
        width: 111px;
        height: 34px;
        display: inline-block;
        cursor: pointer;
    }
    .btn_save:hover, .btn_cancel_04:hover, .btn_alter:hover {
        opacity: 0.85;
        filter: alpha(opacity=85);
    }
    .btn_cancel_04 {
        background: #ebebeb;
        color: #333;
        text-align: center;
        line-height: normal;
        font-family: "宋体";
        margin-right: 15px;
    }
    .btn_save, .btn_cancel_04, .btn_alter {
        border: 0;
        width: 111px;
        height: 34px;
        display: inline-block;
        cursor: pointer;
    }
    .btn_save {
        background: #ff8a81;
        color: #fff;
        text-align: center;
        line-height: normal;
        font-family: "宋体";
        margin-right: 15px;
    }
    .check_default_addr {
        padding-left: 27px;
        color: #333;
        font-size: 13px;
        position: absolute;
        top: 21px;
        left: 417px;
        vertical-align: middle;
    }
    .check_default_addr em {
        vertical-align: middle;
        background: #fff;
        display: inline-block;
        width: 11px;
        height: 11px;
        border: 1px solid #b1b0b0;
        margin-right: 5px;
        cursor: pointer;
    }
    .check_default_addr b {
        font-weight: normal;
        vertical-align: middle;
    }
    .form_header {
        display: table;
        background: #f5f7f6;
        line-height: 45px;
        font-size: 12px;
        width: 983px;
        height: auto;
        overflow: hidden;
        border: none;
    }
    .addr_w105, .addr_w95, .addr_w335, .addr_w75, .addr_w139, .addr_w93, .addr_w164 {
        font-family: Arial,"宋体";
        color: #333;
        display: table-cell;
        vertical-align: middle;
    }
    .addr_list {
        display: table;
        border-bottom: 1px solid #f5f7f6;
        overflow: hidden;
        background: #fff;
    }
    .addr_list:last-child {
        border-bottom: 1px solid #deddde;
    }
    #btn_add_addr {
        width: 105px;
        height: 23px;
        display: inline-block;
        float: right;
        margin-top: 21px;
        margin-right: 20px;
        color: #666;
        font-family: Arial,"宋体";
        vertical-align: middle;
        line-height: 20px;
    }
    .right_side {
        width: 983px;
        float: left;
        font-family: Arial, "宋体";
    }
    #btn_add_addr div {
        font-size: 15px;
        display: inline-block;
        vertical-align: middle;
        font-family: Arial,"宋体";
        margin-right: 5px;
        line-height: 20px;
    }
    .top_line {
        background: #000;
        display: block;
        height: 1px;
    }
    #btn_add_addr:hover {
        color: #ff8a81;
    }
</style>