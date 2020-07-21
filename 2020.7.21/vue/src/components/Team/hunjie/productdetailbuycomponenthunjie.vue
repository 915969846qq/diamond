<template>
  <div class="productdetailbuycompoent" id="productdetailbuycompoent">
    <div v-show="isblack"  class="black"></div>
    <el-row>
      <el-col class="top-pageinfo"></el-col>
      <el-col :span="22">
        <router-link to="/">首页&nbsp;</router-link>
        <span>&gt;</span>
        <router-link to="/wedding">钻戒</router-link>
        <span>&gt;</span>
        <span>{{$store.state.wedding.productbuy.weddingname}}-{{$store.state.wedding.productbuy.materialdetail}}钻石戒指</span>
      </el-col>
      <el-col class="top-pageinfo"></el-col>
    </el-row>
    <el-row class="productbuy">
      <!--预览图片-->
      <el-col :span="10" :offset="1" class="img-preview">
        <div class="bigimg-wrap yincang" style="background-color:#fff;">
          <img class="bigimg" :src="middleimg" alt style="height: 800px;width: 800px" />
        </div>
        <div>
          <div class="middle-img-wrap">
            <img class="midddle-img" :src="middleimg" alt />
            <div class="zoom-box"></div>
          </div>
          <div class="small-img-preview">
            <div class="left-arrow">
              <span class="iconfont icon-jiantouzuo yincang"></span>
            </div>
            <div class="small-img-wrap">
              <ul class="small-img-list">
                <li>
                  <img class="small-img" :src="'/api/images/goodnight/23320_399.jpg'" alt />
                </li>
                <li>
                  <img class="small-img" :src="'/api/images/goodnight/23320_388.jpg'" alt />
                </li>
                <li>
                  <img class="small-img" :src="'/api/images/goodnight/23320_312.jpg'" alt />
                </li>
                <li>
                  <img class="small-img" :src="'/api/images/goodnight/23320_313.jpg'" alt />
                </li>
                <li>
                  <img class="small-img" :src="'/api/images/goodnight/23320_314.jpg'" alt />
                </li>
              </ul>
            </div>
            <div class="right-arrow">
              <span class="iconfont icon-jiantouyou"></span>
            </div>
          </div>
        </div>
      </el-col>
      <!--    右边戒指参数信息-->
      <el-col :span="9" :offset="4" class="top-right-buy">
        <h2>{{$store.state.wedding.productbuy.weddingname}}</h2>
        <div>
          <div class="detail-price">
            <span>价格</span>
            <span class="red redprice">{{$store.state.wedding.productbuy.price}}</span>
            <span>
              售出
              <span class="red">{{$store.state.wedding.productbuy.sellnum}}</span>
            </span>
            <span>
              评论
              <span class="red">{{$store.state.wedding.productbuy.commentnum}}</span>
            </span>
          </div>
        </div>
        <div class="buydetail">
          <div>
            <span>品名</span>
            <span>{{$store.state.wedding.productbuy.material}}钻石戒指</span>
          </div>
          <div>
            <span>材质</span>
            <span>{{$store.state.wedding.productbuy.materialdetail}}</span>
          </div>
          <div>
            <span>手寸</span>
            <span>{{$store.state.wedding.productbuy.palmsize}}</span>
            <span class="count-palmsize" @click="myshu()">如何测手寸</span>
          </div>
          <div>
            <span>钻石</span>
            <span>主钻{{$store.state.wedding.productbuy.mainnum}}颗</span>
            <span>{{$store.state.wedding.productbuy.mainweight}}</span>
            <span>辅钻{{$store.state.wedding.productbuy.assistnum}}颗</span>
            <span>{{$store.state.wedding.productbuy.assistweight}}</span>
          </div>
          <div v-if="$store.state.wedding.productbuy.expressdate!=undefined">
            <span>配送</span>
            <span>{{$store.state.wedding.productbuy.expressdate.substring(0,10)}}</span>
          </div>
        </div>

        <div>
          <div>
            <span>更多</span>
            <a @click="gotosame" style="cursor: pointer;" class="more-product-same">选择其它同款现货</a>
          </div>
        </div>
        <div class="btn">
          <div class="addtocart addtocarthunjie">加入购物车</div>
          <div class="free-interest">免息分期</div>
          <div class="dingzhi">专属定制</div>
        </div>
      </el-col>
    </el-row>
    <!-- 登录弹窗 -->
    <login1 v-show="islogin"></login1>
    <!-- 测量手寸弹窗 -->
    <div class="tan" v-show="mytrue">
      <div class="zhedang"></div>
      <div class="mytun">
        <div @click="myshu()" class="close">X</div>
        <img src="/api/images/handsize.png" alt class="myimg" />
      </div>
    </div>
  </div>
</template>

<script>
import login1 from "../../cx/login/login1";
export default {
  name: "productdetailbuycomponent",
  data: function() {
    return {
      middleimg: "/api/images/goodnight/23320_399.jpg",
      mytrue: false,
      isblack: false,
      islogin:false
    };
  },
  components: {
    login1: login1
  },
  computed: {},
  created() {
    this.$store.dispatch("productbuy", this.$route.query.id);

    $().ready(function() {
      console.log(
        $(".small-img")
          .eq(0)
          .parent()
      );
      $(".small-img")
        .eq(0)
        .parent()
        .addClass("borderblack");
    });
  },
  mounted() {
    // $(".count-palmsize").on("click",function () {
    // })
    let that = this;
    $(".icon-jiantouyou").on("click", function() {
      $(this).addClass("yincang");
      $(".icon-jiantouzuo").removeClass("yincang");
      $(".small-img-list").css("left", "-308px");
    });
    $(".icon-jiantouzuo").on("click", function() {
      $(this).addClass("yincang");
      $(".icon-jiantouyou").removeClass("yincang");
      $(".small-img-list").css("left", "0");
    });
    // 小图
    $(".small-img").on("mouseover", function() {
      $(this)
        .parent()
        .siblings()
        .removeClass("borderblack");
      $(this)
        .parent()
        .addClass("borderblack");
      that.middleimg = $(this).attr("src");
    });
    // 中图移入，大图出现
    //         var x,y;
    var isdrop = false;
    $(".middle-img-wrap").on("mouseover", function(e) {
      $(".bigimg-wrap").removeClass("yincang");
      // var currente=e;
      // x=currente.clientX-$(".zoom-box")[0].offsetLeft;
      // y=currente.clientX-$(".zoom-box")[0].offsetTop;
      isdrop = true;
    });
    // 鼠标中图移出
    $(".middle-img-wrap").on("mousemove", function(m) {
      console.log(m.clientX, m.clientY);
      $(".zoom-box").css({
        left: m.clientX - 500 + "px",
        top: m.clientY - 300 + "px"
      });
      if (
        parseInt(
          $(".zoom-box")
            .eq(0)
            .css("left")
        ) <= 0
      ) {
        $(".zoom-box").css("left", "0");
      }
      if (
        parseInt(
          $(".zoom-box")
            .eq(0)
            .css("left")
        ) >= 200
      ) {
        $(".zoom-box").css("left", "200px");
      }
      if (
        parseInt(
          $(".zoom-box")
            .eq(0)
            .css("top")
        ) <= 0
      ) {
        $(".zoom-box").css("top", "0");
      }
      if (
        parseInt(
          $(".zoom-box")
            .eq(0)
            .css("top")
        ) >= 200
      ) {
        $(".zoom-box").css("top", "200px");
      }
      // 大图css
      $(".bigimg").css({
        left:
          -parseInt(
            $(".zoom-box")
              .eq(0)
              .css("left")
          ) *
            2 +
          "px",
        top:
          -parseInt(
            $(".zoom-box")
              .eq(0)
              .css("top")
          ) *
            2 +
          "px"
      });
    });
    // 中图鼠标移出
    $(".middle-img-wrap").on("mouseout", function() {
      isdrop = false;
      $(".bigimg-wrap").addClass("yincang");
    });
    //添加购物车
    $(".addtocarthunjie").on("click", function() {
      var arr = sessionStorage.getItem("user");
      var array = JSON.parse(arr);
      console.log(array);
      // console.log(this.islogin)
      if (array == null) {
        that.isblack = true;
        that.islogin = true;
      }else{
        that.$store.dispatch("addtocarthunjie");
      }
      
    });
    $('.close').click(function(){
            that.isblack = false;
      that.islogin = false;
    });

    $('.modellogin').click(function(){
      var arr = sessionStorage.getItem("user");
      var array = JSON.parse(arr);
      console.log(array);
      if (array == null) {
        that.isblack = false;
        that.islogin = false;
        
      }
    })
  },
  methods: {
    myshu() {
      this.mytrue = !this.mytrue;
    },
    gotosame() {
      window.scrollTo(0, 600);
    },

  }
};
</script>

<style scoped>
.black {
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.5;
  left: 0;
  top: 0px;
  z-index: 199;
}
.productdetailbuycompoent {
  margin-bottom: 50px;
}
a {
  color: black;
}
a:hover {
  color: #ff8a81;
}
.tan {
  width: 100%;
  height: 1000px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 0;
  font-size: 24px;
}
.zhedang {
  width: 100%;
  height: 1000px;
  background-color: black;
  opacity: 0.3;
  position: absolute;
}
.mytun {
  padding: 2%;
  position: absolute;
  left: 50%;
  margin-left: -390px;
  margin-top: 10%;
  z-index: 199;
  width: 762px;
  height: 526px;
  background-color: #ffffff;
  text-align: center;
}
.mytun img {
  height: 100%;
}
.close {
  color: #ffffff;
  width: 45px;
  line-height: 45px;
  height: 45px;
  position: absolute;
  z-index: 199;
  top: 10px;
  right: 10px;
  color: black;
  text-align: center;
}
.close:hover {
  color: #f6827a;
  cursor: pointer;
}
.btn {
  display: flex;
  margin-right: 20px;
}
.btn > div {
  text-align: center;
  width: 140px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  cursor: pointer;
}
.btn > div:hover {
  opacity: 0.8;
}
.addtocart,
.dingzhi {
  background-color: #ff8a81;
}
.free-interest {
  background-color: #b7ac7e;
}
.more-product-same {
  display: inline-block;
  border: 1px solid #d6d6d6;
  padding: 10px;
  color: black;
}
.count-palmsize {
  cursor: pointer;
}
.count-palmsize:hover {
  color: #ff8a81;
}
.more-product-same:hover {
  border: 1px solid black;
  color: #ff8a81;
}
.top-right-buy span {
  display: inline-block;
  color: #999;
}
.top-right-buy > div > div > span:not(:first-child) {
  padding: 0 10px;
}
.detail-price {
  line-height: 30px;
}
.red {
  color: #f6827a !important;
}
.redprice {
  font-size: 18px;
  font-weight: bolder;
}
.top-right-buy > div {
  padding: 25px 0;
}
.bigimg {
  position: absolute;
}

.buydetail {
  line-height: 30px;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
}
.top-right-buy > div > div > span:first-child {
  display: inline-block;
  width: 70px;
  text-align: left;
}
h2 {
  font-size: 22px;
}
.top-pageinfo {
  height: 25px;
}
.small-img {
  width: 70px;
}
li {
  list-style: none;
}
.small-img-list {
  display: flex;
}
.small-img-list > li {
  border: 1px solid #dfdfde;
  width: 70px;
  height: 70px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.small-img-list > li:hover,
.hoverborder {
  border: 1px solid black;
}
.borderblack {
  border: 1px solid black !important;
}
.midddle-img {
  width: 400px;
}
.middle-img-wrap {
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

.small-img-list {
  position: relative;
}
.small-img-wrap {
  width: 308px;
  display: flex;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.bigimg-wrap {
  border: 1px solid black;
}
.bigimg-wrap {
  position: absolute;
  width: 400px;
  height: 400px;
  overflow: hidden;
  z-index: 2;
  left: 550px;
}
.img-preview {
  width: 400px;
}
.small-img-preview {
  position: relative;
  display: flex;
}
.zoom-box {
  width: 200px;
  height: 200px;
  position: absolute;
}
.middle-img-wrap:hover .zoom-box {
  z-index: 2;
  background-color: #fbc9bf;
  opacity: 0.5;
}
.iconfont {
  font-size: 30px;
  line-height: 70px;
}
.left-arrow,
.right-arrow {
  position: absolute;
}

.right-arrow {
  right: 5px;
}
.yincang {
  display: none;
}

.iconfont {
  cursor: pointer;
}
</style>
