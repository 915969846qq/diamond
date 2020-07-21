<template>
  <div  class="loginbox">
    <i class="close"></i>
    <div class="leftlogin">
      <div class="txt">会员登录</div>
      <div class="auth_from_nor">
        <span>
          <input @click="adduser" @blur="user" type="text" value="用户名">
        </span>
        <div v-show="isnull" class=" auth_hide_warr" style="color:red;">用户名不能为空</div>
        <div v-show="!isnull" class="auth_hide_warr"></div>
      </div>
      <div class="auth_from_pswd">
          <span>
              <input @click="adduser" @blur="pws" type="text" value="密码">
              <a >忘记密码</a>
          </span>
          <div class="auth_hide_warr"></div>
          
      </div>
      <div class="login">
          <a class="modellogin" @click="login_modal">登录</a>
      </div>
      <div class="reg">
          <router-link to="/register" style="text-decoration: none;">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:{
                username:"",
                password:""
            },
            isnull:false
        }
    },
    methods: {
        adduser(e){
            e.target.value = ""
        },
        user(e){
            if(e.target.value == ""){
                e.target.value = "用户名"
            }else if(e.target.value != "用户名"){
                this.msg.username = e.target.value
            }
        },
        pws(e){
            if(e.target.value == ""){
                e.target.value = "密码"
            }else if(e.target.value != "密码"){
                this.msg.password = e.target.value
            }
        },
        login_modal(e){
            if(this.msg.username == ""){
                this.isnull = true;
            }else{
                this.$store.dispatch("newlogin",this.msg);
            }
        }        
    },
};
</script>

<style scoped>
i {
  background: url("../../../../static/img/icon_close.jpg") center no-repeat;
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
input{
    outline: none;

}
.auth_from_pswd{
    position: relative;
    z-index: 0;
}
.auth_from_pswd span{
    border: 1px solid #e4e4e4;
    width: 257px;
    height: 32px;
    padding: 0 12px;
    display: block;
    margin-left: 47px;
}
.auth_from_pswd span input{
    margin: 0;
    border: 0;
    color: #999;
    width: 208px;
    height: 16px;
    padding: 8px 0;
}

.auth_from_pswd span a{
    color: #999;
    display: inline-block;
    padding: 8px 0px;
    position: absolute;
    right: 50px;
    font-size: 12px;
    text-decoration: none;
}
.txt{
    text-align: center;
}
.login{
    padding-top: 18px;
}
.login a{
    text-decoration: none;
    background: #ff8a81;
    color: #fff!important;
    width: 283px;
    height: 34px;
    margin-left: 47px;
    line-height: 34px;
    text-align: center;
    display: inline-block;
}
.reg{
    position: absolute;
    right: 80px;
    
    display: block;
    margin-top: 5px;
    font-size: 12px;
    cursor: pointer;
}
.reg a{
    
}
</style>