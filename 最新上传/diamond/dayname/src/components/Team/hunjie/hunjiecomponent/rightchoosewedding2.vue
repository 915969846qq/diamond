<template>
<div class="border2">
  <ul class="first-choose">
    <li class="choosed">
      <span class="ckin choose1 ">已选条件</span>
      <span v-for="(choosed,index) in $store.state.wedding.choosedform" class="chooseopt" :key="'choosed'+index">
        <span>{{choosed}}</span>&nbsp;
        <span class="iconfont icon-cross" @click="deleteopt"></span>
      </span>
      <span @click="cleanall" class="clean">清空</span>
    </li>
    <li v-for="(cho,index) in $store.state.wedding.cho" :id="cho.formkey" class="choosebox" :key="'cho'+index">
      <span class="ckin ">{{cho.ckind}}</span>
      <span><a class="infin addto hoverstyle gold">不限</a></span>
      <span v-for="(item,index) in cho.detail" :key=index><a class="addto hoverstyle" :key="'cc'+index">{{item.c}}</a></span>
    </li>
  </ul> 
  <ul><li class="last"><a id="btn">{{search}}高级搜索</a></li></ul>
</div>
</template>

<script>

    export default {
        name: 'rightchoosewedding',
        data: function () {
            return {
              search:"打开",
            }
        },
created() {



},
      mounted() {
        if(Object.getOwnPropertyNames(this.$store.state.wedding.choosedform).length!=1){
          document.getElementsByClassName("choosed")[0].style.height="41px"
        }
          $().ready(function () {
              $("#material").children().eq(2).children().addClass("goldring")
              $("#mainweightgrade").children().eq(3).children().addClass("three")
              $("#mainweightgrade").children().eq(5).children().addClass("five")
              $("#mainweightgrade").children().eq(6).children().addClass("seven")
              $("#mainweightgrade").children().eq(7).children().addClass("ten")
          })
          let that=this;
          // 展开关闭高级搜索
          $("#btn").on("click",function () {
            if(parseInt($(".first-choose").css("height"))>164){
              $(".first-choose").css("height","123px");
             that.search="展开"
            }else{
              if(Object.getOwnPropertyNames(that.$store.state.wedding.choosedform).length==1){
                let heightul=($(".first-choose").children("li").length-1)*41+"px";
                $(".first-choose").css("height",heightul);
              }else{
                let heightul=$(".first-choose").children("li").length*41+"px";
                $(".first-choose").css("height",heightul);
              }

              that.search="收起"
            }
          });

          // 点击选项添加到已经选择按钮
      $(".addto").on("click",function () {
         let formattr=$(this).parent().parent().attr("id")
        console.log(formattr)
         let formvalue=$(this).html();
         $(this).parent().siblings().children().removeClass("gold")
         $(this).parent().siblings().children().addClass("black")
         $(this).addClass("gold");
         if(formvalue!="不限"){
           that.$store.state.wedding.choosedform=Object.assign(that.$store.state.wedding.choosedform,{[formattr]:formvalue})
         }else{
           delete that.$store.state.wedding.choosedform[formattr];
         }
         if(Object.getOwnPropertyNames(that.$store.state.wedding.choosedform).length!=1){
           $(".choosed").css("height","41px");
           if(parseInt($(".first-choose").css("height"))>164){
           $(".first-choose").css("height",$(".first-choose").children("li").length*41+"px")}
         }else{

           $(".choosed").css("height","0");
           if(parseInt($(".first-choose").css("height"))>164){
           $(".first-choose").css("height",($(".first-choose").children("li").length-1)*41+"px")};
         }
         console.log(that.$store.state.wedding.product.length)
        that.$store.dispatch("getproduct")
        that.$forceUpdate();

      })

      },
      methods: {
        // 删除当前
        deleteopt(e) {
          var mattr = [];//属性
          var mval = [];//值
          for (let key in this.$store.state.wedding.choosedform) {
            mattr.push(key);
            mval.push(this.$store.state.wedding.choosedform[key])
          }
          var m = e.currentTarget.parentElement.childNodes[0].textContent;
          var mdel = mattr[mval.indexOf(m)];
          var myid = "#" + mdel
          $("" + myid).children().children().removeClass("gold")
          $("" + myid).children().children().addClass("black")
          $("" + myid).children().eq(1).children().addClass("gold")
          console.log()
          delete this.$store.state.wedding.choosedform[mdel];
          if (Object.getOwnPropertyNames(this.$store.state.wedding.choosedform).length != 1) {
            $(".choosed").css("height", "41px");
            if(parseInt($(".first-choose").css("height"))>164){
              $(".first-choose").css("height",$(".first-choose").children("li").length*41+"px")
            }

          } else {
            $(".choosed").css("height", "0");
            if(parseInt($(".first-choose").css("height"))>164){
            $(".first-choose").css("height",($(".first-choose").children("li").length-1)*41+"px")
          }}
          this.$store.dispatch("getproduct")
          this.$forceUpdate();
        },
        // 删除所有
        cleanall(event) {
          this.$store.state.wedding.choosedform = {};
          $(".infin").addClass("gold");
          $(".infin").parent().siblings().children().removeClass("gold")
          $(".infin").parent().siblings().children().addClass("black")
          $(".choosed").css("height", "0");
          if(parseInt($(".first-choose").css("height"))>164){
            $(".first-choose").css("height",($(".first-choose").children("li").length-1)*41+"px")
          }
        $(".weddingringchooseleft li a").removeClass("gold")
          this.$store.dispatch("getproduct")
        },

    }




    }
</script>

<style scoped>
  li{
    list-style: none;
    line-height: 40px;
    border-bottom: 1px solid #f3f3f4;
  }
  .last{
    width: 100px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #e2e1e1;
    height: 30px;
    position: relative;
    top: -1px;
   line-height: 30px;
    border-top: 1px solid white;
  }
.border2{
  border-top: 1px solid black;
}
.first-choose{
  overflow: hidden;
  height: 123px;
  border-bottom: 1px solid #d6d6d6;
}
ul>li>span{
  display:inline-block;
  padding-left: 39px;
}
.gold{
  color: #f6827a;
}
a:hover{
  color: #f6827a;
  cursor: pointer;
}
.black{
  color: black;
}
.gold{
  color: #f6827a;
}
  .ckin{
    width: 90px;
    background-image: url("/api/images/style_list_line.png");
    background-position: right;
    background-repeat: no-repeat;
  }
.choosed{
  background-color: #FAFAFA;
height: 0;
  overflow: hidden;
}

  .chooseopt{
    background-color: #F7837A;
    display: inline-block;
   line-height: 20px;
    color: white;
    padding: 0 5px;
    margin-right: 3px;
    cursor: pointer;
  }

  .choose1{
    margin-right: 39px;
  }

  .clean{
    cursor: pointer;
   float: right;
   margin-right: 20px;

  }
</style>

