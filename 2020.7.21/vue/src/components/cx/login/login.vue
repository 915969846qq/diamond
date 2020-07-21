<template>
  <div class="loginbox">
    <div class="mainbox">
      <div class="txt111">会员登录</div>
      <div class="jihuozhuce">
        <!-- <a style="text-decoration:none;" @click="goregister">快速注册</a> -->
        <router-link to="/register" style="text-decoration:none;" >快速注册</router-link>
      </div>
      <div class="frmLogin" >
        <ul>
          <li class="tips"></li>
          <li>
            <input
              style="color:#999"
              @focus="addinput"
              @blur="clearinput"
              id="user"
              name="user"
              type="text"
              class="inputStyleTips inputStyle01"
              value="用户名"
            />
          </li>
          <li class="tips"></li>
          <li>
            <input
              type="text"
              @focus="addinput"
              @blur="clearinput"
              style="color:#999"
              name="password"
              id="password"
              class="inputStyleTips"
              value="密码"
            />
          </li>
          <li
            style="margin-left:0px;line-height:26px;color:#ff8a81;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="$store.state.store.islogin"
          > </li>
          <li
            style="margin-left:0px;line-height:26px;color:#ff8a81;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="!$store.state.store.islogin"
          >您输入的用户名和密码不匹配，请重新输入 </li>
          <li class="aotologin">
            <input type="button" @click="isautologin" class="login_phase" id="login_phase" />
            <span>自动登录</span>
            <a href>忘记密码</a>
          </li>
          <div class="clearHeight"></div>
          <li class="submit">
            <input name="submit" type="button" @click="nowlogin" class="btn_login_2 btn_login_6" value="登录" />
          </li>
        </ul>
      </div>
      <div class="clearHeight" style="height:43px"></div>
      <div class="hezuo">
        <div class="logo logoqq"></div>
        <div class="logo logoweixin"></div>
        <div class="logo logoweibo"></div>
        <div class="logo logozhifu"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name:'login',
  data() {
    return {
      txt: {
        txt1: "用户名",
        txt2: "密码"
      },
      isremember: true,
      login:{
        username:"",
        password:""
      }
    };
  },
  methods: {
    ...mapActions(['newlogin']),
    isautologin(e) {
      // console.log(e.target);
      if (this.isremember == true) {
        e.target.style["background"] =
          "url('../../../../static/img/login_phase.jpg') no-repeat right top";
      } else {
        e.target.style["background"] =
          "url('../../../../static/img/login_phase.jpg') no-repeat left top";
      }
      this.isremember = !this.isremember;
    },
    addinput(e) {
      //  let _this = this

      // console.log(e.target);
      // console.log(type)
      if (e.target.value == "用户名" || e.target.value == "密码") {
        e.target.value = "";
        e.target.style["color"] = "black";
      }
    },
    clearinput(e) {
      console.log(e.target.value)
      if(e.target.value != "" && e.target.id == "user"){
        this.login.username = e.target.value
      }else if(e.target.value != "" && e.target.id == "password"){
        this.login.password = e.target.value
      }
      
    },
    nowlogin(){
      console.log(this.login)
      
      this.$store.dispatch("newlogin",this.login);
    },
    goregister(){
      this.$router.push("/register")
    }
  }
};
</script>

<style scoped>
.loginbox {
  background: url("../../../../static/img/auth_bg_new.jpg") -200px;
  height: 600px;
  position: relative;
}
.mainbox {
  position: absolute;
  right: 160px;
  width: 450px;
  height: 510px;
  /* position: relative; */
  overflow: hidden;
  background: url("../../../../static/img/auth_main_login.jpg") no-repeat 38px
    130px;
}
.txt111 {
  width: auto;
  height: 20px;
  position: absolute;
  left: 38px;
  top: 95px;
  color: #000;
  font-family: "宋体";
  font-size: 20px;
  z-index: 5;
}
.jihuozhuce {
  width: auto;
  height: 20px;
  position: absolute;
  right: 50px;
  top: 102px;
  color: #333;
  z-index: 5;
}
.jihuozhuce a {
  color: #666;
  float: left;
  font-family: "宋体";
  font-size: 12px;
}
.tips {
  height: 22px;
  width: 310px;
  font-size: 12px;
  color: #666666;
  line-height: 22px;
  overflow: hidden;
}
.frmLogin {
  margin-top: 152px;
}
.mainbox ul {
  text-align: left;
  margin: 24px 0 0 0;
  padding-top: 1px;
  padding-inline-start: 0px;
}
li {
  list-style: none;
  padding-left: 76px;
}
.inputStyleTips {
  font-size: 12px;
  color: #333333;
  height: 34px;
  line-height: normal;
  line-height: 34px\9;
  padding-left: 16px;
  width: 267px;
  margin: 0;
  text-align: left;
  overflow: hidden;
  font-family: Arial, "宋体";
}
input {
  border: none;
  outline: none;
}
.login_phase {
  width: 13px;
  height: 13px;
  float: left;
  padding: 0;
  margin-right: 10px;
  margin-top: 2px;
  margin-left: 77px;
  cursor: pointer;
  overflow: hidden;
  background: url("../../../../static/img/login_phase.jpg") no-repeat left top;
}
.aotologin {
  height: 20px;
  width: 360px;
  padding: 0;
  /* padding-top: 2px; */
  font-size: 12px;
  font-family: "宋体";
  color: #666666;
  line-height: 16px;
  overflow: hidden;
}
.aotologin a {
  font-family: "宋体";
  color: #666666;
  float: right;
  text-decoration: none;
}
.clearHeight {
  width: 100%;
  height: auto;
  overflow: hidden;
  clear: both;
  height: 15px;
}
.submit {
  height: 40px;
  width: 285px;
  padding: 0;
  font-size: 12px;
  margin-left: 77px;
  color: #666666;
  line-height: 40px;
  overflow: hidden;
}

.btn_login_2 {
  width: 283px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  display: block;
  padding: 0;
  color: #fff;
  margin: 0 auto;
  background: rgb(255, 138, 129);
  cursor: pointer;
}
.btn_login_2:hover {
  background: rgb(255, 153, 145);
}
.hezuo {
  width: 100%;
  margin-top: 25px;
}
.logo {
  width: 46px;
  height: 46px;
  float: left;
}
.logoqq {
  margin-left: 86px;
  background: url("../../../../static/img/qq-btn.jpg") no-repeat left top;
}
.logoweixin {
  margin-left: 32px;
  background: url("../../../../static/img/weixin-btn.jpg") no-repeat left top;
}
.logoweibo {
  margin-left: 32px;
  background: url("../../../../static/img/sina-btn.jpg") no-repeat left top;
}
.logozhifu {
  margin-left: 32px;
  background: url("../../../../static/img/zhifubao-btn.jpg") no-repeat left top;
}
.logoqq:hover {
  background: url("../../../../static/img/qq-btn.jpg") no-repeat right top;
}
.logoweixin:hover{
  background: url("../../../../static/img/weixin-btn.jpg") no-repeat right top;
}
.logoweibo:hover{
  background: url("../../../../static/img/sina-btn.jpg") no-repeat right top;
}
.logozhifu:hover{
  background: url("../../../../static/img/zhifubao-btn.jpg") no-repeat right top;
}

</style>