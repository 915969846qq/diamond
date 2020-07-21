<template>
  <div class="registerbox">
    <div class="mainbox">
      <div class="txt111">欢迎注册</div>
      <div class="jihuozhuce">
        <!-- <a style="text-decoration:none;" @click="goregister">快速注册</a> -->
        <router-link to="/register" style="text-decoration:none;">
          <router-link to="/login" style="text-decoration:none;float:left">请登录</router-link>
        </router-link>
      </div>
      <div class="frmLogin">
        <ul>
          <li class="tips"></li>
          <li>
            <input
              style="color:#999"
              @focus="addinput"
              @blur="verification"
              id="user"
              name="user"
              type="text"
              class="inputStyleTips inputStyle01"
              value="请输入手机号"
            />
          </li>
          <li
            style="margin-left:0px;line-height:26px;color:green;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="$store.state.store.isusername"
          >账号可用</li>
          <li
            style="margin-left:0px;line-height:26px;color:#ff8a81;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="!$store.state.store.isusername"
          >账号已被注册</li>
          <li>
            <input
              type="text"
              @focus="addinput"
              style="color:#999"
              name="password"
              id="password"
              class="inputStyleTips"
              v-model="password"
            />
          </li>
          <li class="tips"></li>
          <li>
            <input
              type="text"
              @focus="addinput"
              @blur="checkpassword"
              style="color:#999"
              name="repassword"
              id="repassword"
              class="inputStyleTips"
              value="请再次输入密码"
            />
          </li>
          <li
            style="margin-left:0px;line-height:26px;color:#ff8a81;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="ischeckpassword"
          ></li>
          <li
            style="margin-left:0px;line-height:26px;color:#ff8a81;font-family:'宋体';"
            class="tips"
            id="responsebar"
            v-show="!ischeckpassword"
          >您输入的两次密码不匹配，请重新输入</li>
          <li class="aotologin">
            <input type="button" @click="isautologin" class="login_phase" id="login_phase" />
            <span>已阅读并同意《钻石小鸟用户服务协议》</span>
          </li>
          <div class="clearHeight"></div>
          <li class="submit">
            <input
              name="submit"
              @click="register"
              type="button"
              class="btn_login_2 btn_login_6"
              value="注册"
            />
          </li>
        </ul>
      </div>
      <div class="clearHeight" style="height:43px"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      islogin: true,
      isremember: true,
      password: "请输入密码",
      username: "",
      ischeckpassword: true
    };
  },
  methods: {
    ...mapActions(["verificationphone"]),
    addinput(e) {
      //  let _this = this

      // console.log(e.target);
      // console.log(type)
      if (
        e.target.value == "请输入手机号" ||
        e.target.value == "请输入密码" ||
        e.target.value == "请再次输入密码"
      ) {
        e.target.value = "";
        e.target.style["color"] = "black";
      }
    },
    isautologin(e) {
      if (this.isremember == true) {
        e.target.style["background"] =
          "url('../../../../static/img/login_phase.jpg') no-repeat right top";
      } else {
        e.target.style["background"] =
          "url('../../../../static/img/login_phase.jpg') no-repeat left top";
      }
      this.isremember = !this.isremember;
    },
    verification(e) {
      console.log(e.target.value);
      if (e.target.value != "") {
        this.$store.dispatch("verificationphone", e.target.value);
        if (this.$store.state.isusername == true) {
          this.username = e.target.value;
          console.log(this.username);
        }
      }
    },
    checkpassword(e) {
      console.log(e.target.value);
      console.log(this.password);
      if (e.target.value != this.password) {
        this.ischeckpassword = false;
      } else {
        this.ischeckpassword = true;
      }
    },
    register(e) {
      if (
        this.ischeckpassword == true &&
        this.$store.state.isusername == true
      ) {
        this.$store.dispatch("myregister", [this.username, this.password]);
      }

      setTimeout(() => {
        console.log(this.$store.state.issuccess);
        if(this.$store.state.issuccess == true){
          this.$router.replace('/login')
        }
      }, 100);
    }
  }
};
</script>

<style scoped>
.registerbox {
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
  /* background: #fcede9; */
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
  /* margin-top: 152px; */
  /* padding: 0 36px; */
  margin: 135px 36px 0 36px;
  background: #fcede9;
  padding-bottom: 56px;
}
.mainbox ul {
  text-align: left;
  margin: 24px 0 0 0;
  padding-top: 1px;
  padding-inline-start: 0px;
}
li {
  list-style: none;
  padding-left: 50px;
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
  margin-left: 50px;
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
  margin-left: 50px;
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
.logoweixin:hover {
  background: url("../../../../static/img/weixin-btn.jpg") no-repeat right top;
}
.logoweibo:hover {
  background: url("../../../../static/img/sina-btn.jpg") no-repeat right top;
}
.logozhifu:hover {
  background: url("../../../../static/img/zhifubao-btn.jpg") no-repeat right top;
}
.span {
  font-style: normal;
  color: #ff8a81;
  padding-left: 10px;
}
</style>