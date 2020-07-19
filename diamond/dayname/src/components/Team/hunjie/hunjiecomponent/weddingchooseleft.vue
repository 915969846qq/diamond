<template>
<div>
  <ul>
<!--    钻石选项-->
    <li><ul class="wedchoose-ul">
      <div><span class="iconfont icon-shijiantouyou"></span>钻石</div>
      <li>GIA钻石</li>
      <li>30分钻石</li>
      <li>50分钻石</li>
      <li>北极光钻石</li>
    </ul></li>
<!--    钻戒选项-->
    <li><ul class="wedchoose-ul weddingringchooseleft">
      <div><span class="iconfont icon-shijiantouyou"></span>钻戒</div>
      <li><a class="goldring">铂金钻戒</a></li>
      <li><a class="three">30分钻戒</a></li>
      <li><a class="five">50分钻戒</a></li>
      <li><a class="seven">70分钻戒</a></li>
      <li><a class="ten">克拉钻戒</a></li>
    </ul></li>
<!--    对戒选项-->
    <li><ul class="wedchoose-ul">
     <div><span class="iconfont icon-shijiantouyou"></span>对戒</div>
      <li>铂金对戒</li>
      <li>18k金对戒</li>
    </ul></li>
<!--    配饰选项-->
    <li><ul class="wedchoose-ul">
     <div><span class="iconfont icon-shijiantouyou"></span>配饰</div>
      <li>吊坠</li>
      <li>耳钉</li>
      <li>套链</li>
      <li>项链</li>
      <li>手链</li>
    </ul></li>
  </ul>
</div>
</template>

<script>
let methoddata={


};
    export default {
        name: 'weddingchooseleft',
        data: function () {
            return {

            }
        },
    mounted() {
          let that=this;
      //点击左侧导航栏打开对应导航
      $(".wedchoose-ul").children("div").on("click",function () {
        $(this).parent().parent().siblings().css("height","30px");
        console.log($(this).parent().parent().siblings().children().children());
        $(this).parent().parent().siblings().children().children("div").children().removeClass("icon-shijiantouxia")
        $(this).parent().parent().siblings().children().children("div").children().addClass("icon-shijiantouyou")
       let ulheight=$(this).parent().children().length*30+"px";
        if(parseInt($(this).parent().parent().css("height"))>30){
          $(this).parent().parent().css("height","30px");
          $(this).children().removeClass("icon-shijiantouxia");
          $(this).children().addClass("icon-shijiantouyou")
        }else{
          $(this).parent().parent().css("height",ulheight);
          $(this).children().removeClass("icon-shijiantouyou");
          $(this).children().addClass("icon-shijiantouxia")
        }
      });
      // 婚戒选择点击事件
      $(".weddingringchooseleft").children("li").children("a").on("click",function () {

        $(this).parent().siblings().children().removeClass("gold")
        $(this).addClass("gold");
         $(".first-choose .choosebox a").removeClass("gold");
         $(".infin").addClass("gold")
         $("."+$(this).attr("class").split(" ")[0]).parent().siblings().children().removeClass("gold");
         $("."+$(this).attr("class").split(" ")[0]).addClass("gold");
            var arrar=[{material:"Pt铂金"},{mainweightgrade:"30-39分"},{mainweightgrade:"50-59分"},{mainweightgrade:"60-99分"},{mainweightgrade:"克拉钻"}]
          var index=($(".weddingringchooseleft li")).index($(this).parent());
          that.$store.state.wedding.choosedform=arrar[index];
          console.log(that.$store.state.wedding.choosedform)
          $(".choosed").css("height","41px");
          if(parseInt($(".first-choose").css("height"))>164){
            $(".first-choose").css("height",$(".first-choose").children("li").length*41+"px")}
        that.$store.dispatch("getproduct")
      });
      this.$forceUpdate();
      },
      methods:methoddata
    }

</script>

<style scoped>
  li{
    list-style: none;
    cursor: pointer;
  }
 div>ul>li{
    height: 30px;
    overflow: hidden;
  }
  ul>li>ul>li{
    margin-left: 16px;
  }
  ul>li>ul>li:hover,.gold{
    color: #ff8a81;
  }
ul>div{
  height: 30px;
}
</style>
