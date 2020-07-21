<template>
  <div>
    <div v-show="isblack" class="black"></div>

    <div v-show="isbuy" class="f_hide_buysteps f_hide_buysteps30">
      <span @click="closebuysteps" class="u_step_close"></span>
      <div class="u_step_tlt"></div>
      <div class="u_step">
        <span>预付定金</span>
        <span>
          比利时/以色列质检发货
          <i>约1周时间</i>
        </span>
        <span>
          国际空运并申报清关
          <i>约2周时间</i>
        </span>
        <span>
          到达国内质检配证
          <i>约5个工作日</i>
        </span>
        <span>
          钻石抵达体验中心
          <i>约2个工作日</i>
        </span>
      </div>
      <div class="u_step_txt">
        * 除到货时发现双方承认的质量问题外，其他情况下定金不可退，也不可换购其他产品
        <br />特别提示：到货周期会受到国家法定节假日影响而顺延；具体顺延时间请参考当期网站通告。
      </div>
    </div>

    <div v-show="islogin" class="loginbox">
      <i @click="closelogin" class="close"></i>
      <div class="leftlogin">
        <div class="txt">会员登录</div>
        <div class="auth_from_nor">
          <span>
            <input @click="adduser" @blur="user" type="text" value="用户名" />
          </span>
          <div v-show="isnull" class="auth_hide_warr" style="color:red;">用户名不能为空</div>
          <div v-show="!isnull" class="auth_hide_warr"></div>
        </div>
        <div class="auth_from_pswd">
          <span>
            <input @click="adduser" @blur="pws" type="text" value="密码" />
            <a>忘记密码</a>
          </span>
          <div class="auth_hide_warr"></div>
        </div>
        <div class="login">
          <a @click="login_modal">登录</a>
        </div>
        <div class="reg">
          <router-link to="/register" style="text-decoration: none;">注册</router-link>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="floatL">
        <span class="navTit_span">
          <router-link to="/" class="firstnav navTit_a">首页</router-link>
        </span>
        <span class="navTit_span">></span>
        <span class="navTit_span">
          <router-link to="/diamouds" class="navTit_a">钻石</router-link>
        </span>
        <span class="navTit_span">></span>
        <span class="navTit_span">
          <a class="navTit_a">{{goodsdata.diamondname}}</a>
        </span>
      </div>
    </div>
    <div class="g_header_bg">
      <div class="g_dtal_wrap">
        <div class="g_show_pic">
          <div class="g_3d1"></div>
          <img :src="chooseimg()" />
        </div>
        <div class="g_pro_sys">
          <div class="f_psys_tlt">
            <span>{{goodsdata.diamondname}}</span>
          </div>
          <div class="f_psys_jiaobiao">
            <img alt />
          </div>
          <div class="f_psys_pri">
            <em class="u_psys_pri">
              <span class="coupon_tips cou_bg_th">价格</span>
              <i class="con_i">￥</i>
              <b>{{goodsdata.diamondprice}}</b>
            </em>
            <em class="u_psys_pri">
              预付定金
              <i>￥</i>
              <b>520</b>
            </em>
          </div>
          <div class="f_cer_bg f_cer_gia">
            <div class="f_psys_inf inf_txtcode">
              <span>编号</span>
              <i>{{goodsdata.diamondnunber}}</i>
            </div>
            <div class="f_psys_inf inf_txtcer">
              <span>证书</span>
              <b>{{goodsdata.diamondcertificate}}</b>
            </div>
          </div>
          <div class="f_psys_line"></div>
          <div></div>
          <div class="f_psys_btn">
            <div class="f_psys_btn_lst">
              <a @click="deposit" class="btn_pink_138x32 mr_5 btnfdb2a4">加入购物车</a>
              <span @click="process" class="f_clk_buysteps">查看全球钻购物流程</span>
            </div>
            <div class="f_psys_inf f_psys_in">
              <span>注意</span>
              <i class="f_psys_red">今天下单——预计08月20日发货，如需定制款式，需增加额外时间</i>
            </div>
            <div
              class="f_psys_txt"
            >除到货时发现双方承认的质量问题外，其他情况下定金不可退，也不可换购其他产品特别提示：到货周期会受到国家法定节假日影响而顺延；具体顺延时间请参考当期网站通告。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "diamondDetails",
  data() {
    return {
      msg: {
        username: "",
        password: ""
      },
      diamondsimg: {
        square: "../../../static/img/round1.png",
        circular: "../../../static/img/zuanshi_square.png",
        emerald: "../../../static/img/zuanshi_emerald.png",
        olive: "../../../static/img/zuanshi_marquise.png"
      },
      isnull: false,
      isblack: false,
      isbuy: false,
      islogin: false,
      goodsdata: {}
    };
  },
  created() {
    this.goodsdata = this.$store.state.store.transmission;
    console.log(this.goodsdata);
  },
  methods: {
    ...mapMutations(['addtocarthunjie']),
    chooseimg() {
      if (this.goodsdata.shape == "圆形") {
        return this.diamondsimg.square;
      }
      if (this.goodsdata.shape == "公主方") {
        return this.diamondsimg.circular;
      }
      if (this.goodsdata.shape == "祖母绿") {
        return this.diamondsimg.emerald;
      }
      if (this.goodsdata.shape == "橄榄型") {
        return this.diamondsimg.olive;
      }
    },
    adduser(e) {
      e.target.value = "";
    },
    user(e) {
      if (e.target.value == "") {
        e.target.value = "用户名";
      } else if (e.target.value != "用户名") {
        this.msg.username = e.target.value;
      }
    },
    pws(e) {
      if (e.target.value == "") {
        e.target.value = "密码";
      } else if (e.target.value != "密码") {
        this.msg.password = e.target.value;
      }
    },
    login_modal(e) {
      if (this.msg.username == "") {
        this.isnull = true;
      } else {
        this.$store.dispatch("newlogin", this.msg);
      }
      if (this.$store.state.store.islogin == true) {
        this.isblack = false;
        this.islogin = false;
      }
    },
    deposit() {
      var arr = sessionStorage.getItem("user");
      var array = JSON.parse(arr);
      console.log(array);
      if (array == null) {
        this.isblack = true;
        this.islogin = true;
      } else {
        this.addtocarthunjie()
      }

      console.log(123456);
    },
    process() {
      this.isbuy = true;
      this.isblack = true;
    },
    closelogin() {
      this.isblack = false;
      this.islogin = false;
    },
    closebuysteps() {
      this.isblack = false;
      this.isbuy = false;
    }
  }
};
</script>


<style scoped>
.black {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-color: black;
  z-index: 1500;
}
div {
  margin: 0px;
  padding: 0px;
}
.block {
  width: 1180px;
  padding: 18px 0;
  color: #666;
  height: 14px !important;
  line-height: 14px !important;
  margin: 0 auto 0 auto;
  overflow: hidden;
}
.block a {
  color: #666;
  text-decoration: none;
}
.floatL {
  color: #666666;
  float: left;
  margin: auto;
}
.navTit_span {
  float: left;
  margin-right: 5px;
  font-size: 12px;
  line-height: 45px !important;
}

.firstnav {
}
.navTit_a {
  float: left;
  margin-right: 5px;
  font-size: 12px;
  line-height: 45px !important;
}
.navTit_a:hover {
  color: #ff8a81;
}
.g_header_bg {
  width: 100%;
  background: #fff;
}
.g_dtal_wrap {
  width: 1180px;
  margin: 0 auto 71px;
  overflow: hidden;
  background: #fff;
  position: relative;
}
.g_show_pic {
  width: 537px;
  float: left;
  margin: 25px 0 0;
  height: 480px;
  position: relative;
  z-index: 1;
}
.g_pro_sys {
  float: right;
  width: 535px;
  margin: 18px 0;
  position: relative;
  z-index: 1;
}
.g_3d1 {
  width: 550px;
  height: 550px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.f_psys_tlt {
  font-family: Arial, "宋体";
  font-size: 22px;
  color: #000;
  text-align: left;
  padding: 7px 0;
  vertical-align: middle;
}
.f_psys_jiaobiao {
  padding-top: 3px;
  text-align: left;
}
.f_psys_pri {
  font-size: 12px;

  color: #999;
  text-align: left;
  padding: 15px 0 23px 0;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 19px;
  font-family: Arial, "宋体", Helvetica, sans-serif;
}
.u_psys_pri {
  display: inline-block;
  padding-right: 20px;
}
.f_cer_gia {
  background: url("../../../static/img/cer_gia.jpg") 390px center no-repeat;
}
.coupon_tips {
}
.cou_bg_th {
  font-family: "宋体";
  font-size: 12px;
  color: #999;
}

.f_cer_gia {
}

.f_psys_inf {
  text-align: left;
}
.f_psys_inf span {
  display: inline-block;
  width: 65px;
  line-height: 29px;
  height: 29px;
  color: #999;
  font-size: 12px;
  font-family: Arial, "宋体";
}
.inf_txtcode i {
  color: #999;
  font-size: 12px;
  font-family: Arial, "宋体";
}
.inf_txtcer b {
  color: #999;
  font-size: 12px;
  font-family: Arial, "宋体";
  font-weight: normal;
  display: inline-block;
  padding-right: 10px;
}
.u_psys_pri b {
  font-size: 20px;
}
.u_psys_pri i,
.u_psys_pri b {
  color: #f6827a;
  font-family: Arial, "微软雅黑";
  vertical-align: middle;
}
.u_psys_pri i,
.u_psys_pri b {
  color: #f6827a;
  font-family: Arial, "微软雅黑";
  vertical-align: middle;
}
.u_psys_pri i {
  padding-left: 10px;
}
.con_i {
  margin-left: 30px;
}
i {
  font-style: normal;
}
.f_psys_line {
  border-bottom: 1px solid #eeeded;
  height: 0px;
  position: relative;
  z-index: 0;
  margin: 20px 0 28px;
  width: 535px;
}
.f_psys_btn {
  position: absolute;
  top: 265px;
  left: 0px;
  width: 502px;
  text-align: left;
}
.f_psys_btn_lst {
  margin-right: 10px;
}
.btnfdb2a4 {
  color: #fff !important;
  background: #fdb2a4;
}
.btn_pink_138x32 {
  /* background: #f1dad4; */
  color: #000;
  border: none;
  width: 138px;
  height: 32px;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid #f1dad4;
  text-decoration: none;
  font-size: 12px;
  line-height: 32px;
}
.btn_pink_138x32:hover,
.btn_pink_115x28:hover,
.btn_pinklig_138x32:hover {
  opacity: 0.85;
  /* filter: alpha(opacity=85); */
}
.f_clk_buysteps {
  color: #666;
  vertical-align: bottom;
  padding-left: 20px;
  cursor: pointer;
  font-size: 12px;
}
.f_hide_buysteps {
  position: fixed;
  z-index: 1501;
  width: 850px;
  height: 370px;
  margin: -185px 0 0 -425px;
  background: #fff;
  top: 50%;
  left: 50%;
  /* display: none; */
}
.u_step {
  background: url("../../../static/img/icon_steps.jpg") bottom center no-repeat;
  padding-bottom: 30px;
  width: 800px;
  margin: 0 auto;
}
.u_step_close {
  background: url("../../../static/img/icon_close.jpg") center no-repeat;
  width: 21px;
  height: 21px;
  display: block;
  position: absolute;
  z-index: 1;
  right: 12px;
  top: 10px;
  cursor: pointer;
}
.u_step_tlt {
  text-align: center;
  font-size: 22px;
  color: #000;
  padding: 60px 0;
}
.u_step span {
  width: 155px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  color: #666;
  line-height: 18px;
  vertical-align: top;
}
.u_step span i {
  display: block;
  color: #999;
}
i {
  font-style: normal;
}
.u_step_txt {
  text-align: center;
  width: 575px;
  line-height: 22px;
  color: #999;
  margin: 60px auto 0;
  font-size: 12px;
}
img,
dd,
dl,
dt {
  padding: 0;
  margin: 0;
  border: 0;
}
.f_psys_in {
  margin-top: 20px;
}
.f_psys_inf {
  text-align: left;
}
.f_psys_inf span {
  display: inline-block;
  width: 65px;
  line-height: 29px;
  height: 29px;
  color: #999;
  font-size: 12px;
  font-family: Arial, "宋体";
}
.f_psys_red {
  color: #ff8a81;
  margin-left: -3px;
  font-size: 12px;
  font-family: Arial, "宋体", Helvetica, sans-serif;
}
.f_psys_txt {
  font-family: arial, "宋体";
  font-size: 12px;
  color: #666;
  margin-left: 65px;
  line-height: 21px;
}

.close {
  background: url("../../../static/img/icon_close.jpg") center no-repeat;
  display: block;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.loginbox {
  clear: both;
  width: 465px;
  height: 450px;
  position: fixed;
  left: 35%;
  top: 20%;
  /* margin-left: -465px; */
  /* margin-top: -225px; */
  background: #fff;
  z-index: 1505;
  text-align: left;
}
.leftlogin {
  margin-top: 50px;
  width: 368px;
  margin-left: 50px;
  /* float: left; */
  /* border-right: 1px solid #e4e4e4; */
  /* padding: 60px 0 73px 95px; */
}
.rightregistr {
  margin-top: 50px;
  width: 368px;
  float: left;
  padding: 60px 0 73px 83px;
}
.auth_hide_warr {
  line-height: 22px;
  color: #f16d63;
  height: 22px;
}
.auth_from_nor {
  margin-top: 20px;
}
.auth_from_nor span {
  border: 1px solid #e4e4e4;
  width: 257px;
  height: 32px;
  padding: 0 12px;
  display: block;
  margin-left: 47px;
}
.auth_from_nor span input {
  width: 257px;
  height: 16px;
  padding: 8px 0;
  margin: 0;
  border: 0;
  color: #999;
}
input {
  outline: none;
}
.auth_from_pswd {
  position: relative;
  z-index: 0;
}
.auth_from_pswd span {
  border: 1px solid #e4e4e4;
  width: 257px;
  height: 32px;
  padding: 0 12px;
  display: block;
  margin-left: 47px;
}
.auth_from_pswd span input {
  margin: 0;
  border: 0;
  color: #999;
  width: 208px;
  height: 16px;
  padding: 8px 0;
}

.auth_from_pswd span a {
  color: #999;
  display: inline-block;
  padding: 8px 0px;
  position: absolute;
  right: 50px;
  font-size: 12px;
  text-decoration: none;
}
.txt {
  text-align: center;
}
.login {
  padding-top: 18px;
}
.login a {
  text-decoration: none;
  background: #ff8a81;
  color: #fff !important;
  width: 283px;
  height: 34px;
  margin-left: 47px;
  line-height: 34px;
  text-align: center;
  display: inline-block;
}
.reg {
  position: absolute;
  right: 80px;

  display: block;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
}
</style>