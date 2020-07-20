<template>
  <div class='myapp'>
    <el-row>
      <el-col :span="21" :offset="3">
        <div>
          <!-- 头部 -->
          <div class="title">
            <router-link to="/" class="myfrom">首页</router-link>
            <span class="myspan">&gt;</span>
            <router-link to="/Birds_nest" class="myspan myfrom">我的鸟巢</router-link>
            <span class="myspan" id="myts"></span>
            <span class="myspan" id="myt"></span>
          </div>
          <!-- 侧边导航栏 -->
          {{mydata[1].id}}
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="3" class="myborder myright myleft">
        <router-link :to="{path:'/Birds_nest'}" tag="li" class="mytitle" id="birds">
          <a href="#" class="myfrom mycolor" id="myc" @click="chakan('myBirds')">我的鸟巢</a>
        </router-link>
        <nav>
          <ul>
            <li class="mytitle myweight">交易管理</li>
            <router-link :to="{path:item.path}" tag="li" v-for="(item) in mydata" :key="item.name">
              <a href="#" class="myfrom myclick" data='我是一个' @click="chakan('myview')">{{item.name}}</a>
            </router-link>
          </ul>
        </nav>
      </el-col>
      <el-col :span="15" :offset="1" class="myborder">
        <!-- 我的鸟巢 -->
      <el-row v-if="myBirds" class="myBirds">
        <el-row class="myinte">
          <el-col :span="4" class="myintegral mycen">
            <div class="myprice">{{user[0].name}}</div>
            <span>{{allintegral[0].mycount}}</span>
          </el-col>
          <el-col :span="8" class="myintegral">
            <div class="myuser">
              <span>小鸟账号</span>
              <span>{{user[0].username}}</span>
              <router-link :to="{path:'/user'}" class="mychange">修改资料</router-link>
            </div>
            <div class="myuser">
              <span>小鸟卡号</span>
              <span>{{user[0].username}}</span>
            </div>
            <div class="myuser">
              <span>会员等级</span>
              <span>{{user[0].username}}</span>
            </div>
          </el-col>
          <el-col :span="4" class="myintegral mycen">
            <div class="myprice">积分</div>
            <span>{{allintegral[0].mycount}}</span>
          </el-col>
          <el-col :span="4" class="myintegral mycen">
            <div class="myprice">优惠券</div>
            <span>{{certificate.length}}</span>
          </el-col>
          <el-col :span="4" class="myintegral close mycen">
            <div class="myprice">礼品</div>
            <span>{{gift.length}}</span>
          </el-col>
          </el-row>
          <el-row class="myheight myalign">
          <el-col :span="24" class="mytitles">
              <span class="myclicks title">最近订单</span>
          </el-col>
          </el-row>
          <el-table
          :data="order"
          style="width: 100%"
          max-height="250"
          :header-cell-style="{background:' #f5f7f6'}">
            <el-table-column
            fixed
            v-for="(item) in mytitle"
            :key="item.name"
            :prop="item.prop"
            :label="item.text"
            min-width="20%"
            align="center">
          </el-table-column>
          <el-table-column
            fixed
            prop="operation"
            label="操作"
            min-width="20%"
            align="center">
            <template slot-scope="scope">
              <router-link :to="{path:'/payment',query:{myorder:scope.row.myorder_ID}}" type="text" size="small" class="mybutton">去支付</router-link>
            </template>
          </el-table-column>
          </el-table>
      </el-row>
      <router-view v-if="myview" class="myview"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
},
name: 'Birds_nest',
data() {
//这里存放数据
return {
  myBirds:true,
  myview:false,
  mytitle:[
    {text:'订单编号',prop:'myorder_ID'},
    {text:'商品信息',prop:'myorder_information'},
    {text:'订单金额',prop:'myorder_price'},
    {text:'已付定金',prop:'myorder_Deposit'},
    {text:'下单时间',prop:'user_date'},
    {text:'订单状态',prop:'myorder_is_state'},
  ],
};
},
created(){
  console.log(this.$store);
},
//监听属性 类似于data概念
computed: {
  ...mapGetters(['user']),
  ...mapGetters(['mydata']),
  ...mapGetters(['allintegral']),
  ...mapGetters(['integral']),
  ...mapGetters(['order']),
  ...mapGetters(['certificate']),
  ...mapGetters(['gift'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  chakan(n){
    $("."+n).siblings("a").removeClass("on")
    $("."+n).addClass("on")
    // console.log(n)
    let myarr=["myBirds","myview"]
    // console.log(myarr.indexOf(n));
    let m=myarr.indexOf(n)
    let my= myarr[m];
    for(let i=0;i<myarr.length;i++){
      this[myarr[i]]=false
    }
    this[my]=true;
  },
},
created:function(){
  console.log(this.$store.dispatch('user',{username:"13018282973"}));
  this.$store.dispatch('allintegral')
  this.$store.dispatch('myintegral')
  this.$store.dispatch('myorder')
  this.$store.dispatch('mycertificate')
  this.$store.dispatch('mygift')
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
},
mounted(){
  $('.myclick').on('click',function(){
    $('#myts').html('>');
    $('#myt').html($(this).html());
  }),
  $('#myc').on('click',function(){
    $('#myts').html('');
    $('#myt').html('');
  }),
  // 点击我的鸟巢
  $('#birds').on('click',function(){
    console.log('点击我的鸟巢');
  })
}
}
</script>
<style scoped>
.mychange{
  margin-left: 12px;
}
.myuser{
  height: 29px;
  line-height: 29px;
  padding-left: 27px;
  padding-top: 10px;
}
.myuser span{
  margin-left: 25px;
}
.myuser a:hover{
  color: #ff8a81;
}
.mybutton{
  margin-left: 0;
  color: #409eff;
}
.title{
  height: 45px;
  line-height: 45px;
}
.mytitle{
  height: 30px;
  line-height: 30px;
  padding-top: 18px;
}
.myweight{
  font-weight: 700;
}
.myborder{
  border-top: 1px solid #000000;
}
.myleft{
  padding-left: 15px;
}
.myspan{
  margin-left: 8px;
}
li{
  height: 26px;
  line-height: 26px;
  list-style: none;
  padding-top: 5px;
}
a{
  text-decoration: none;
  color: #000;
}
.myfrom:hover{
  color: #ff8b81;
  cursor: pointer;
}
.mycolor{
  color: #ff8b81;
}
.iconfont{
  font-size: 12px;
}
.mytitles{
  height: 25px;
  line-height: 25px;
  position: relative;
  padding-bottom: 45px;
}
.myheight{
  padding-top: 18px;
  
}
.myRight{
  position: absolute;
  right: 20px;
}
.myinte{
  border-bottom: 1px solid #e5e5e5;
}
.myintegral{
  height: 189px;
  padding-top: 26px;
  border-right: 1px solid #e5e5e5;
}
button{
  margin-left: 70px;
  padding: 8px 30px;
}
.myprice{
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ff8a81;
}
.myalign{
  text-align: center;
}
.title{
  color: #ff8b81;
}
.myclicks{
  margin-left: 15px;
  text-align: center;
}
.myclicks:hover{
  color: #ff8b81;
  cursor: pointer;
}
.close{
  border: 0;
}
.mycen{
  text-align: center;
}
</style>