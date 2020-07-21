<template>
  <div class="screenmain">
    <div class="box">
      <div class="order_list">
        <div :style="order_list_img.img2" class="order_list_item">价格</div>
        <div :style="order_list_img.img2" class="order_list_item">钻重</div>
        <div :style="order_list_img.img2" class="order_list_item">颜色</div>
        <div :style="order_list_img.img2" class="order_list_item">净度</div>
      </div>
      <div class="allnum">共{{$store.state.store.alldimouds.num}}颗</div>
      <div class="diamond_tag">
        <ul class="clearfix">
          <li>
            <a class="type" @click="addType" title="3EX">3EX</a>
          </li>
          <li>
            <a class="type" @click="addType" title="克拉钻">克拉钻</a>
          </li>
          <li>
            <a class="type" @click="addType" title="北极光">北极光</a>
          </li>
          <li>
            <div class="f_sel_radio">
              <span :style="i_imgon1?color.color1:color.color2" class="on">
                <i @click="imgon1" :style="i_imgon1?i_img.img2:i_img.img1" title="高清视频"></i>
                高清视频
              </span>
            </div>
          </li>
          <li>
            <div class="f_sel_radio">
              <span :style="i_imgon2?color.color1:color.color2" class="on">
                <i @click="imgon2" :style="i_imgon2?i_img.img2:i_img.img1" title="合并相似钻石"></i>
                合并相似钻石
              </span>
            </div>
          </li>
          <li>
            <div class="f_sel_radio">
              <span :style="i_imgon3?color.color1:color.color2" class="on">
                <i @click="imgon3" :style="i_imgon3?i_img.img2:i_img.img1 " title='全球钻'></i>
                全球钻闪电发货
              </span>
            </div>
          </li>
          <li @mousemove="mousemove1" @mouseout="mouseover1" class="localtion">
            <div :class="isimg?'localtion_text':'localtion_text1'">所在地</div>
            <div v-show="isover" class="sections">
              <div>
                <ul class="clearfix">
                  <li>
                    <a @click="addAddress" title="国内现货">国内现货</a>
                  </li>
                  <li>
                    <a @click="addAddress" title="全球钻">全球钻</a>
                  </li>
                </ul>
              </div>
              <div class="hr-line"></div>
              <div>
                <ul class="clearfix city">
                  <li
                    :key="item"
                    @click="addAddress"
                    v-for="item in localtion.localtion1"
                    :title="item"
                  >{{item}}</li>
                </ul>
              </div>
              <div class="hr-line"></div>
              <div>
                <ul class="clearfix province">
                  <li
                    :key="item"
                    @click="addAddress"
                    v-for="item in localtion.localtion2"
                    :title="item"
                  >{{item}}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("numdiamouds");
  },
  mounted() {
    console.log(this.$store.state.store.searchgoods);
  },
  methods: {
    ...mapMutations(["searchAddress","searchvarieties","researchAddress"]),
    mousemove1() {
      this.isover = true;
      this.isimg = false;
    },
    mouseover1() {
      this.isover = false;
      this.isimg = true;
    },
    addAddress(e) {
      console.log(e.target.title);
      this.searchAddress(e.target.title);

    },
    imgon1(e) {
      this.i_imgon1 = !this.i_imgon1
      console.log(e.target.title)
      this.searchOther(e.target.title)
    },
    imgon2(e) {
      this.i_imgon2 = !this.i_imgon2;
      console.log(e.target.title)
    },
    imgon3(e) {
      this.i_imgon3 = !this.i_imgon3
      console.log(e.target.title)
      if(this.i_imgon3 == false){
        this.searchAddress(e.target.title);
      }else{
        this.researchAddress(e.target.title);
      }
      
    },
    addType(e) {
      console.log(e.target.title);
      this.searchvarieties(e.target.title)
      let type = document.getElementsByClassName("type");
      for (let i = 0; i < type.length; i++) {
        type[i].style["color"] = "black";
      }
      e.target.style["color"] = "#ff8a81";
      // console.log(document.getElementsByClassName('type'))
    }
  },

  data() {
    return {
      i_imgon1: true,
      i_imgon2: true,
      i_imgon3: true,
      isover: false,
      isimg: true,
      istrue:true,
      order_list_img: {
        img1: {
          background:
            "url(" +
            require("../../../static/img/up.png") +
            ") no-repeat 38px center"
        },
        img2: {
          background:
            "url(" +
            require("../../../static/img/down.png") +
            ") no-repeat 38px center"
        }
      },
      localtion_img: {
        img1: {
          background:
            "url(" +
            require("../../../static/img/up.png") +
            ") no-repeat 68px center"
        },
        img2: {
          background:
            "url(" +
            require("../../../static/img/down.png") +
            ") no-repeat 68px center"
        }
      },
      i_img: {
        img1: {
          background:
            "url('../../../static/img/diam_radio.jpg')  no-repeat center right"
        },
        img2: {
          background:
            "url('../../../static/img/diam_radio.jpg')  no-repeat center left"
        }
      },
      color: {
        color1: {
          color: "black"
        },
        color2: {
          color: "#ff8a81"
        }
      },
      localtion: {
        localtion1: {
          local1: "上海",
          local2: "北京",
          local3: "西安",
          local4: "成都",
          local5: "天津",
          local6: "广州",
          local7: "武汉",
          local8: "杭州",
          local9: "南京",
          local10: "深圳",
          local11: "钻交所"
        },
        localtion2: {
          province1: "江苏",
          province2: "浙江",
          province3: "山东",
          province4: "河北",
          province5: "河南",
          province6: "陕西",
          province7: "安徽",
          province8: "辽宁",
          province9: "四川",
          province10: "重庆市",
          province11: "广东",
          province12: "湖南",
          province13: "甘肃",
          province14: "吉林",
          province15: "云南",
          province16: "黑龙江",
          province17: "内蒙古"
        }
      }
    };
  }
};
</script>

<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.box {
  width: 100%;
  height: 40px;
  /* background: olive; */
}
.screenmain {
  width: 1178px;
  height: 40px;
  background: #f7f7f7;
  margin: 30px 0;
  border: 1px solid #e2e1e1;
  margin-top: 28px;
  position: relative;
}
.diamond_tag ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.order_list {
  width: 225px;
  height: 40px;
  overflow: hidden;
  background: #f7f7f7;
}
.order_list div {
  border-right: 1px solid #f7f7f7;
  border-left: 1px solid #f7f7f7;
  width: 44px;
  height: 40px;
  padding-right: 10px;
  font-size: 12px;
  line-height: 40px;
  color: #666;
  display: block;
  float: left;
  font-style: normal;
  cursor: pointer;
  /* background: url('../../static/img/down.png') no-repeat 38px center; */
  z-index: 1;
  /* background-position: right ; */
}
.allnum {
  font-family: "宋体";
  font-size: 12px;
  color: #666666;
  position: absolute;
  left: 236px;
  top: 13px;
  z-index: 5;
}
.order_list_item:hover {
  color: #ff8a81;
  border-right: 1px solid #e2e1e1;
  border-left: 1px solid #e2e1e1;
  background: white;
  position: relative;
  z-index: 2;
  margin-left: -1px;
  padding-left: 1px;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.diamond_tag ul li {
  float: left;
  font-family: Arial, "宋体";
  height: 40px;
  line-height: 40px;
  list-style: none;
  font-size: 12px;
}
.diamond_tag {
  position: absolute;
  right: 0;
  top: 0;
}

li > a {
  padding-right: 20px;
  display: inline-block;
  color: #333;
  height: 40px;
  line-height: 40px;
}
.f_sel_radio {
  border-left: 1px solid #e2e1e1;
  position: relative;
  z-index: 0;
  /* width: 100px; */
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  /* padding-left: 5px; */
  /* padding-right: 5px; */
  color: #666;
  display: block;
  float: left;
  font-style: normal;
  cursor: pointer;
}
.on i {
  background: url("../../../static/img/diam_radio.jpg") no-repeat center left;
  /* background: url(http://img.zbird.cn/ww3/diamond/detail/diam_radio.jpg) */
  /* no-repeat left center; */
  display: inline-block;
  width: 17px;
  height: 17px;
  vertical-align: middle;
  margin-right: 10px;
}
.hr-line {
  margin: 0 24px;
  border-top: solid 1px #eeeeee;
  height: 0;
  overflow: hidden;
}
.sections {
  width: 365px;
  height: auto;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e2e1e1;
  position: absolute;
  right: -1px;
  top: 40px;
  z-index: 50000;
}
.localtion_text {
  background: url("../../../static/img/down.png") 68px no-repeat;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
  z-index: 10;
}
.localtion_text1 {
  background: url("../../../static/img/up.png") 68px no-repeat;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /* background: white; */
  position: relative;
  z-index: 10;
}
.localtion {
  border-left: 1px solid #e2e1e1;
  position: relative;
  z-index: 0;
  margin-left: -1px;
  padding-left: 1px;
  width: 90px;
  height: 40px;
  line-height: 40px;
  color: #666;
  display: block;
  float: left;
  font-style: normal;
  cursor: pointer;
}

.sections {
  width: 365px;
  height: auto;
  overflow: hidden;
  clear: both;
  /* margin-top: 11px; */
}
.city li {
  padding-right: 20px;
  display: inline-block;
  color: #333;
  height: 40px;
  line-height: 40px;
}
.province li {
  padding-right: 20px;
  display: inline-block;
  color: #333;
  height: 40px;
  line-height: 40px;
}
</style>