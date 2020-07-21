<template>
<!-- 商品详情页面 -->
<div>
  <!-- 测量手寸弹窗 -->
  <div class="tan" v-show="mytrue">
    <div class="zhedang"></div>
    <div class="mytun">
        <div class="close iconfont" @click="myshu()">&#xe650;</div>
      <img :src="'api/images/hand.png'" alt="" class="myimg">
    </div>
  </div>
  <!-- 添加刻字 -->
  <div class="tan" v-show="myfalse">
  <div class="zhedang"></div>
    <form action="">
      <div class="myLettering">
        <div class="one">
          <span @click="Lettering()" class="close myhover iconfont">&#xe650;</span>
        </div>
        <h1>添加刻字</h1>
        <div class="two"></div>
        <div class="myinput">
          <em>男 </em>
          <input type="text" placeholder="最多6个字符，限字母、符号、数字">
        </div>
        <div class="myinput">
          <em>女 </em>
          <input type="text" placeholder="最多6个字符，限字母、符号、数字">
        </div>
        <!-- 星座 -->
        <div class="constellation mymain">
          <em>星座 </em>
          <div class="constellation myover">
            <div class="constellation myovers">
              <div v-for="item in myStar" :key="item.title" :class="item.ico" :title="item.title"></div>
            </div>
          </div>
          <div class="myclick iconfont icon-fenye-xiayiye myconst"></div>
        </div>
        <!-- 生肖 -->
        <div class="constellation mymain">
          <em>生肖 </em>
          <div class="constellation myover">
            <div class="constellation myovero">
              <div v-for="item in zodiac" :key="item.title" :class="item.ico" :title="item.title"></div>
            </div>
          </div>
          <div class="myclicks iconfont icon-fenye-xiayiye myconst"></div>
        </div>
        <!-- 特殊 -->
        <div class="constellation mymain">
          <em>符号 </em>
          <div class="constellation myover">
            <div class="constellation">
              <div v-for="item in mytu" :key="item.title" :class="item.ico" :title="item.title"></div>
            </div>
          </div>
        </div>
        <div class="mytext">温馨提示:如您选择了刻字，由于工艺特殊，后续将无法支持手寸修改</div>
        <div class="mybtns">
          <button class="addtocart" @click="Lettering()">确定</button>
          <router-link :to="'/to_abstain'" tag="button" class="addtocart">更多DIY内容咨询</router-link>
        </div>
      </div>
    </form>
  </div>
  <!-- 主体内容 -->
  <el-row>
    <el-col class="top-pageinfo"></el-col>
    <el-col :span="22" :offset="1" >
      <router-link to="/">首页&nbsp;</router-link>
      <span>&gt;</span>
      <router-link to="/to_abstain">钻戒 </router-link>
      <span>&gt;</span>
      <span>{{$store.state.Abstain.product[0].abstain_name}}-{{$store.state.Abstain.product[0].abstain_name}}</span>
    </el-col>
    <el-col class="top-pageinfo"></el-col>
  </el-row>
  <el-row class="productbuy">
    <!--预览图片-->
    <el-col :span="10" :offset="2" class="img-preview">
      <div class="bigimg-wrap yincang">

        <img class="bigimg" :src="middleimg" alt=""></div>
      <div>
       <div class="middle-img-wrap">
         <img class="midddle-img" :src="middleimg" alt="">
        <div class="zoom-box"></div>
       </div>
        <div class="small-img-preview">
          <div class="left-arrow"><span class="iconfont icon-jiantouzuo yincang"></span></div>
          <div class="small-img-wrap">
             <ul class="small-img-list">
          <li><img class="small-img " :src="'/api/images/aihe_1_big.jpg'" alt=""></li>
          <li><img class="small-img" :src="'/api/images/aihe_2_big.jpg'" alt=""></li>
          <li><img class="small-img" :src="'/api/images/aihe_3.jpg'" alt=""></li>
          <li><img class="small-img" :src="'/api/images/aihe_4.jpg'" alt=""></li>
          <li><img class="small-img" :src="'/api/images/aihe_5.jpg'" alt=""></li>
      </ul>
              </div> <div class="right-arrow"><span class="iconfont icon-jiantouyou"></span></div>
        </div></div>
    </el-col>
    <!--    右边戒指参数信息-->
    <el-col :span="8" :offset="4" class="top-right-buy">
      <h2>{{$store.state.Abstain.product[0].abstain_name}}</h2>
      <div>
        <div class="detail-price">
        <span>价格 </span>
        <span class="red redprice">{{$store.state.Abstain.product[0].abstain_price}}￥</span>
        <span>售出 <span class="red"> {{$store.state.Abstain.product[0].abstain_Sale}}</span></span>
        <span >评论  <span class="red">{{$store.state.Abstain.product[0].abstain_stock}}</span></span>
      </div>
         </div>
      <div class="buydetail">
        <div><span>品名</span><span>{{$store.state.Abstain.product[0].abstain_pname}}</span></div>
        <div><span>钻石</span><span>男戒　主钻{{$store.state.Abstain.product[0].Vice_number}}颗  {{$store.state.Abstain.product[0].Vice_heavy}}克拉 女戒　主钻{{$store.state.Abstain.product[0].main_number}}颗  {{$store.state.Abstain.product[0].main_heavy}}克拉</span></div>
        <div><span>配送</span><span>{{$store.state.Abstain.product[0].publishtime}}</span></div>
      </div>
      <div>
        <div>
          <span>材质</span>
          <router-link :to="{path:'/to_abstain/productdetailbuycomponents',query:{abstain_id:this.$route.query.abstain_id}}" class="more-product">铂950</router-link>
          <router-link :to="{path:'/to_abstain/productdetailbuycomponents',query:{abstain_id:this.$route.query.abstain_id}}" class="more-product">黄18K金</router-link>
          <router-link :to="{path:'/to_abstain/productdetailbuycomponents',query:{abstain_id:this.$route.query.abstain_id}}" class="more-product">红18K金</router-link>
          <router-link :to="{path:'/to_abstain/productdetailbuycomponents',query:{abstain_id:this.$route.query.abstain_id}}" class="more-product">白18K金</router-link>
        </div>
        <div>
          <span>手寸</span>
          <select name="shou" id="shou" class="shou">
            <option value="" v-for="item in myshou" :key="item.num">{{item.num}}</option>
          </select>
          <select name="shous" id="shous" class="shou">
            <option value="" v-for="item in myshous" :key="item.num">{{item.num}}</option>
          </select>
          <span class="Hand myhover" @click="myshu()">如何测手寸</span>
          <span class="Lettering myhover" @click="Lettering()">添加刻字</span>
        </div>
      </div>
      <div class="btn">
       <div class="addtocart" id="myshoping">加入购物车</div>
      </div>
    </el-col>
  </el-row>
  <div class="link"></div>
  <div class="product-info-menu" >
    <a @click="chakan('xiangqing')" class="xiangqing on">商品详情</a>
    <i>/</i>
    <a @click="chakan('canshu')" class="canshu">商品参数</a>
    <i>/</i>
    <a @click="chakan('pingjia')" class="pingjia">全部评价  {{$store.state.Abstain.product[0].abstain_stock}}</a>
    <i>/</i>
    <a @click="chakan('serviceshouhou')" class="serviceshouhou">售后服务</a>
  </div>
  <canshu v-if="canshu"></canshu>
  <serviceshouhou v-if="serviceshouhou"></serviceshouhou>
  <comment v-if="pingjia"></comment>
  <commodityxiang v-if="xiangqing"></commodityxiang>
  <div class="link"></div>
</div>
</template>

<script>
    import canshu from './canshu'
    import serviceshouhou from './serviceshouhou'
    import commodityxiang from './Team/commodity_xiang'
    import comment from './Team/comment'
    export default {
        name: 'productdetailbuycomponents',
        components:{
          canshu,
          serviceshouhou,
          commodityxiang,
          comment
        },
        data: function () {
            return {
              xiangqing:true,
              canshu:false,
              pingjia:false,
              serviceshouhou:false,
              middleimg:'/api/images/aihe_1_big.jpg',
              myshou:[
                {num:''},
                {num:13},
                {num:14},
                {num:15},
                {num:16},
                {num:17},
                {num:18},
                {num:19},
                {num:20},
                {num:21},
                {num:22},
                {num:23},
              ],
              myshous:[
                {num:''},
                {num:7},
                {num:8},
                {num:9},
                {num:10},
                {num:11},
                {num:12},
                {num:13},
                {num:14},
                {num:15},
              ],
              myStar:[
                {title:'白羊座',ico:'myconst iconfont icon-baiyangzuo',num:'1'},
                {title:'金牛座',ico:'myconst iconfont icon-jinniuzuo',num:'2'},
                {title:'双子座',ico:'myconst iconfont icon-shuangzizuo',num:'3'},
                {title:'巨蟹座',ico:'myconst iconfont icon-juxiezuo',num:'4'},
                {title:'狮子座',ico:'myconst iconfont icon-shizizuo',num:'5'},
                {title:'处女座',ico:'myconst iconfont icon-chunvzuo',num:'6'},
                {title:'天秤座',ico:'myconst iconfont icon-tianchengzuo',num:'7'},
                {title:'天蝎座',ico:'myconst iconfont icon-tianxiezuo',num:'8'},
                {title:'射手座',ico:'myconst iconfont icon-sheshouzuo',num:'9'},
                {title:'魔蝎座',ico:'myconst iconfont icon-mohezuo',num:'10'},
                {title:'水瓶座',ico:'myconst iconfont icon-shuipingzuo',num:'11'},
                {title:'双鱼座',ico:'myconst iconfont icon-shuangyuzuo',num:'12'},
              ],
              zodiac:[
                {title:'鼠',ico:'myconst iconfont icon-shuxiao'},
                {title:'牛',ico:'myconst iconfont icon-niuxiao'},
                {title:'虎',ico:'myconst iconfont icon-huxiao'},
                {title:'兔',ico:'myconst iconfont icon-tuxiao'},
                {title:'龙',ico:'myconst iconfont icon-longxiao'},
                {title:'蛇',ico:'myconst iconfont icon-shexiao'},
                {title:'马',ico:'myconst iconfont icon-maxiao'},
                {title:'羊',ico:'myconst iconfont icon-yangxiao'},
                {title:'猴',ico:'myconst iconfont icon-houxiao'},
                {title:'鸡',ico:'myconst iconfont icon-jixiao'},
                {title:'狗',ico:'myconst iconfont icon-gouxiao'},
                {title:'猪',ico:'myconst iconfont icon-zhuxiao'},
              ],
              mytu:[
                {title:'六芒星',ico:'myconst iconfont icon-liumangxing'},
                {title:'连接',ico:'myconst iconfont icon-lianjie'},
                {title:'爱心',ico:'myconst iconfont icon-xinaixin'},
                {title:'四叶草',ico:'myconst iconfont icon-siyecao'},
              ],
              mytrue:false,
              myfalse:false,
              num:0,
              number:0,
            }
        },
        // 方法集合
        methods: {
            myshu(){
            console.log('现在需要弹框');
            console.log($('#Diamond'));
            this.mytrue=!this.mytrue
          },
          Lettering(){
            console.log('现在需要弹框');
            console.log($('#Diamond'));
            this.myfalse=!this.myfalse
          },
          chakan(n){
              $("."+n).siblings("a").removeClass("on")
              $("."+n).addClass("on")
              console.log(n)
              let myarr=["xiangqing","canshu","pingjia","serviceshouhou","moresameproduct"]
              console.log(myarr.indexOf(n));
              let m=myarr.indexOf(n)
              let my= myarr[m];
              for(let i=0;i<myarr.length;i++){
                this[myarr[i]]=false
              }
              this[my]=true;
          },
          producttuijian(pro){
              $("."+pro).addClass("on")
              $("."+pro).siblings("a").removeClass("on")
              $("#"+pro).removeClass("off");
            $("#"+pro).siblings().addClass("off")
          }
        },
        // vue使用时请求数据
        created:function() {
          console.log(this.$store.dispatch('to_abstain',this.$route.query.abstain_id));
          $().ready(function () {
            console.log($(".small-img").eq(0).parent())
            $(".small-img").eq(0).parent().addClass("borderblack")
          })
        },
      mounted() {
          $(".count-palmsize").on("click",function () {
          })
          let that=this;
          $(".icon-jiantouyou").on("click",function () {
            $(this).addClass("yincang");
            $(".icon-jiantouzuo").removeClass("yincang");
            $(".small-img-list").css("left","-308px")
          });
          $(".icon-jiantouzuo").on("click",function () {
            $(this).addClass("yincang");
            $(".icon-jiantouyou").removeClass("yincang");
            $(".small-img-list").css("left","0")
          });
          $(".small-img").on("mouseover",function () {
          $(this).parent().siblings().removeClass("borderblack")
          $(this).parent().addClass("borderblack")
           that.middleimg=$(this).attr("src")
            },
          );

        var x,y;
        var isdrop=false;
        $(".middle-img-wrap").on("mouseover",function (e) {
          $(".bigimg-wrap").removeClass("yincang");
          var currente=e;
          x=currente.clientX-$(".zoom-box")[0].offsetLeft;
          y=currente.clientX-$(".zoom-box")[0].offsetTop;
          isdrop=true;
        });
        $(".middle-img-wrap").on("mousemove",function (m) {
          $(".zoom-box").css({
            left:m.clientX-200+"px",
            top:m.clientY-150+"px"
          })
        if(parseInt($(".zoom-box").eq(0).css("left"))<=0){
          $(".zoom-box").css("left","0")
        } if(parseInt($(".zoom-box").eq(0).css("left"))>=200){
            $(".zoom-box").css("left","200px")
          } if(parseInt($(".zoom-box").eq(0).css("top"))<=0){
            $(".zoom-box").css("top","0")
          } if(parseInt($(".zoom-box").eq(0).css("top"))>=200){
            $(".zoom-box").css("top","200px")
          }
          $(".bigimg").css({
            left:-parseInt($(".zoom-box").eq(0).css("left"))*2+"px",
            top:-parseInt($(".zoom-box").eq(0).css("top"))*2+"px"
          })
        });
          $(".middle-img-wrap").on("mouseout",function () {
          isdrop=false;
          $(".bigimg-wrap").addClass("yincang")
          });


          // 当星座input聚焦时
          $("input").on("focus", function() {
            console.log("聚焦input框");
            $("input").removeClass("onlyinput"), $(this).addClass("onlyinput");
          });

          // 点击星座
          $(".myconst").on("click", function() {
            console.log($(this).attr("title"));
            $(".onlyinput").val($(this).attr("title"));
          }),
          // 点击翻页
          $('.myclick').on('click',function(){
            console.log('点击翻页');
            that.num++;
            console.log(that.num)
            if(that.num>2){
              that.num=0;
            }
            $('.myovers').css({
              marginLeft:(-164*that.num)+"px"
            })
          }),
          $('.myclicks').on('click',function(){
            console.log('点击翻页');
            that.number++;
            console.log(that.number)
            if(that.number>2){
              that.number=0;
            }
            $('.myovero').css({
              marginLeft:(-164*that.number)+"px"
            })
          }),
          // 用户选择材质
          $('.more-product').on('click',function(){
            console.log('选择材质');
            $(".more-product").removeClass("onlychack");
            $(this).addClass("onlychack");
            console.log($('.more-product'))
            $('.more-product').css({
              border:' 1px solid #dedcdd'
            });
            $(this).css({
              border:' 1px solid #000000'
            })
          }),
          $('.myconst').on('click',function(){
            $('.myconst').css({
              color:'#000000',
              border:'1px solid #cdcfce'
            });
            $(this).css({
              color:'#f6827a',
              border:'1px solid #f6827a'
            })
          }),
          // 点击加入购物车
          $("#myshoping").on("click", () => {
            console.log(this);
            let mydata = {};
            console.log($('.onlychack'))
            mydata.gprice = this.$store.state.Abstain.product[0].abstain_price;
            mydata.gname =
              this.$store.state.Abstain.product[0].abstain_name +" "+$(".onlychack").html() +" 钻石戒指";
            mydata.handsizenan = $("#shou option:selected").text();
            mydata.handsizenv = $("#shous option:selected").text();
            mydata.gletteringinner = "";
            mydata.gLetteringtime = "";
            mydata.handsize = "";
            mydata.gnamenan = "";
            mydata.gnamenv  = "";
            this.$store.dispatch("addtocart_abstain", mydata);
          });  
      },

    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  button{
    outline: none;
  }
  button:hover{
    background-color: #ffa19a;
  }
  .btn{
    display: flex;
    margin-right: 20px;
  }
  .btn>div{
    text-align: center;
    width: 140px;
    height:30px ;
    line-height: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  .btn>div:hover{
    opacity: .8;
  }
  .addtocart,.dingzhi{
    background-color: #ff8a81;
    border: 0;
    color: #ffffff;
    width: 140px;
    height: 30px;
  }
  .addtocart:hover{
    cursor: pointer;
  }
  .free-interest{
    background-color: #b7ac7e;
  }
  .more-product{
    display: inline-block;
    border: 1px solid #d6d6d6;
    padding: 10px;
    color: black;
  }
  .count-palmsize{
    cursor: pointer;
  }
  .count-palmsize:hover{
    color:#ff8a81;
  }
  .more-product:hover{
    border: 1px solid black;
  }
  .top-right-buy span{
    display: inline-block;
    color: #999;
  }
  .top-right-buy>div>div>span:not(:first-child){
    padding: 0 10px;
  }
  .detail-price{
    line-height: 30px;
  }
  .red{
    color: #f6827a!important;
  }
  .redprice{
    font-size: 18px;
    font-weight: bolder;
  }
  .top-right-buy>div{
    padding: 25px 0;
  }
  .bigimg{
    position: absolute;
  }
  .buydetail{
    line-height: 30px;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
  }
  .top-right-buy>div>div>span:first-child{
    display: inline-block;
    width: 70px;
    text-align: left;
  }
  h2{
    font-size: 22px;
  }
  .top-pageinfo{
  height:25px;
  }
  .small-img{
  width: 70px;
  }
  li{
    list-style: none;
  }
  .small-img-list{
    display: flex;
  }
  .small-img-list>li{
    border: 1px solid #dfdfde;
    width: 70px;
    height: 70px;
    vertical-align:middle;
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
.small-img-list>li:hover,.hoverborder{
  border: 1px solid black;
}
.borderblack{
  border: 1px solid black!important;
}
.midddle-img{
  width: 400px;
}
.middle-img-wrap{
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

  .small-img-list{
    position: relative;

  }
  .small-img-wrap{
    width: 308px;
    display: flex;
    position: relative;
    margin: 0 auto;
    overflow: hidden;

  }
  .bigimg-wrap{
    border: 1px solid black;
  }
  .bigimg-wrap{
    position: absolute;
    width: 400px;
    height: 400px;
    overflow: hidden;
    z-index: 2;
    left: 550px;
  }
  .img-preview{
    width: 400px;
  }
.small-img-preview{
  position: relative;
  display: flex;
}
  .zoom-box{
    width: 200px;
    height: 200px;
    position: absolute;
  }
  .middle-img-wrap:hover .zoom-box{
    z-index: 2;
    background-color: #fbc9bf;
    opacity: .5;
  }
.iconfont{
  font-size: 30px;
  line-height: 70px;
}
  .left-arrow,.right-arrow{
    position: absolute;
  }

  .right-arrow{
right: 5px;
  }
  .yincang{
    display: none;
  }

  .iconfont{
    cursor: pointer;
  }
  .shou{
    width: 142px;
    height: 30px;
    margin-top:15px;
    line-height: 30px;
    margin-right: 8px;
    padding-left: 60px;
    appearance:none;
    border: none;
    outline: none;
    color: #666666;
  }
  #shou{
    background: url('/api/images/nan.jpg')
  }
  #shous{
    background: url('/api/images/nv.jpg');
  }
  .myhover:hover{
    color: #f6827a;
    cursor: pointer;  
  }
  .tan{
  width: 100%;
  height: 1000px;
  position: fixed;
  z-index: 99;
}
.zhedang{
  width: 100%;
  height: 1000px;
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: -200px;
}
.mytun{
  padding: 60px;
  position: absolute;
  left: 50%;
  margin-left: -390px;
  margin-top: 50px;
  z-index: 199;
  width: 762px;
  height: 526px;
  background-color: #ffffff;
  text-align: center;
}
.mytun img{
  height: 100%;
}
.close{
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
.close:hover{
  color: #f6827a;
  cursor: pointer;
}

.myLettering{
  position: absolute;
  width: 590px;
  height: 485px;
  background-color: #ffffff;
  left: 50%;
  margin-left: -270px;
  /* margin-top: 200px; */
  padding-left: 80px;
}
.myLettering h1{
  height: 123px;
  line-height: 123px;
  text-align: center;
  font-weight: 500;
}
.myinput{
  margin-bottom: 22px;
}
.myinput input{
  margin-left: 30px;
  width: 235px;
  height: 27px;
  padding-left: 10px;
}
.myinput em{
  font-size: 16px;
}
.constellation{
  display: flex;
}
.mymain{
  /* height: 30px; */
  line-height: 30px;
}
.mymain em{
  font-size: 16px;
  margin-right: 20px;
}
.myconst{
  width: 29px;
  height: 29px;
  text-align: center;
  line-height: 29px;
  margin-left: 10px;
  border: 1px solid #cdcfce;
  font-size: 20px;
}
.myconst:hover{
  cursor: pointer;
  color: #f6827a;
  border: 1px solid #f6827a;
}
.mytext{
  height: 43px;
  line-height: 43px;
  font-size: 12px;
}
.myover{
  width: 164px;
  margin-bottom: 10px;
  overflow: hidden;
}
.mybtns{
  padding-top: 20px;
  text-align: center;
}
.mybtns button{
  margin-right: 45px;
}
.link{
  width: 94%;
  margin: 80px auto;
  border-top: 1px solid #000000;
}
.product-info-menu,.product-info-bottom{
  padding: 20px 0;
  margin-top: 70px;
text-align: center;
  background-color: #fff;
}
.product-info-menu>a,.product-info-bottom>a{
  display: inline-block;
  width: 90px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.product-info-menu>a:hover,.product-info-bottom>a:hover{
  color:#ff8a81;
}
  .on{
    color: #ff8a81;
  }
  .off{
    display: none;
  }
.baozhuang{
  text-align: center;
}
</style>
