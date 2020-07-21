<template>
  <div>
    <div>
      <div class="block">
        <div v-show="!ishidden" class="goodsbox box">非常抱歉，暂时没有合适您的钻石，建议重新选择相关参数，谢谢！</div>
        <div
          class="goodsbox"
          @click="addcart(item)"
          :key="item.id"
          v-show="ishidden"
          v-for="(item) in $store.state.store.searchgoods.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        >
          <div class="goodsimg"> 
            <img :src="item.certificateimg" alt />
          </div>
          <div class="diamondOtherListLineLong"></div>
          <div class="diamondResultListStone1 diamondListGai1">
            <font style="color:#999999">证书</font>
            &nbsp;{{item.certificatetype}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>钻重</font>
            &nbsp;{{item.weight}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>颜色</font>
            &nbsp;{{item.color}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>净度</font>
            &nbsp;{{item.clean_liness}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>切工</font>
            &nbsp;{{item.diamondcut}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>抛光</font>
            &nbsp;{{item.polishing}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>对称</font>
            &nbsp;{{item.symmetric}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2">
            <font>荧光</font>
            &nbsp;{{item.fluorescence}}
          </div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone2 diamondListGai2" style="width:100px">{{item.location}}</div>
          <div class="diamondResultListLineShort"></div>
          <div class="diamondResultListStone3">
            <font style="color:#999999;font-size:12px;font-weight:normal;">小鸟价</font>

            <font
              class="font_yahei"
              style="font-size:12px;font-weight:normal;vertical-align:bottom;"
            >￥</font>
            <font style="font-size:15px;vertical-align:middle;">{{item.diamondprice}}</font>
          </div>

          <div class="diamondOtherListViewOut">立即查看</div>
          <div v-show="item.location == '全球钻' " style="float:right;margin-right:10px;">
            <img style="margin-top:20px" src="../../../static/img/23.png" alt />
          </div>
        </div>
        <el-pagination
          @next-click="nextclick"
          @prev-click="prevclick"
          @current-change="currentchange"
          :current-page="currentPage"
          :page-size="pageSize"
          background
          layout="prev, pager, next"
          :total="num"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  
  data() {
    return {
      ishidden: true,
      currentPage: 1,
      pageSize: 10,
      arr: [],
      newarr: [],
      isall: true,
      num: 0
    };
  },
  beforeMount() {
    // console.log(this.$store.state.searchgoods)
  },
  created() {
    // console.log(this.$store._actions);
    this.$store.dispatch("searchall");
    //  console.log(this.$store.state.searchgoods)
  },

  updated() {
    // console.log(this.$store.state.searchgoods.length);
    this.num = this.$store.state.store.searchgoods.length;
    if (this.$store.state.store.searchgoods.length == 0) {
      this.ishidden = false;
    } else {
      this.ishidden = true;
    }
  },
  methods: {
    ...mapMutations(['datatransmission']),
    addcart(index) {
      // console.log(this.$store);
      this.datatransmission(index);
      this.$router.push({ path: "/diamondDetails", query: { shuju: index } });
    },
    currentchange(a) {
      // console.log(a)
      this.currentPage = a;
    },
    add() {
      console.log(this.$store.state.store);
    },
    nextclick() {
      this.currentPage++;
      console.log(this.currentPage);
      console.log("---------------");
    },
    // handleCurrentChange() {
    //   console.log(123456);
    // },
    prevclick() {
      console.log("+++++++++++++");
      if (this.currentPage <= 1) {
        this.currentPage = 1;
      } else {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
.goodsbox {
  clear: both;
  /* float: left; */
  width: 1180px;
  height: 60px;
  background-color: #fbfbfb;
  margin-top: 8px;
  display: table;
  font-size: 12px;
}
.goodsimg {
  margin-left: 0px;
  width: 50px;
  text-align: center;
  padding: 0 10px;
  display: table-cell;
  vertical-align: middle;
  height: 60px;
  margin-top: 0;
}
.goodsimg img {
  /* width: 33px; */
}
.diamondOtherListLineLong {
  float: left;
  width: 1px;
  height: 10px;
  border-left: 1px solid #c5c5c5;
  margin-top: 26px;
  margin-left: 0px;
}
.diamondListGai1 {
  width: 80px;
}
.diamondResultListStone1 {
  float: left;
  width: 88px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  font-family: Arial, "宋体";
  color: #666666;
  text-indent: 20px;
  text-transform: uppercase;
}
.box {
  line-height: 60px;
}
.diamondResultListLineShort {
  float: left;
  width: 1px;
  height: 9px;
  border-left: 1px solid #c5c5c5;
  margin-top: 25px;
}
.diamondListGai2 font {
  color: #999999;
}
.diamondListGai2 {
  width: 75%;
}
.diamondResultListStone2 {
  float: left;
  width: 75px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  font-family: Arial, "宋体";
  color: #666666;
  text-align: center;
}
.font_yahei {
  font-weight: "Microsoft YaHei";
}
.diamondResultListStone3 {
  float: left;
  float: left;
  /* width: 75px; */
  height: 60px;
  line-height: 60px;
  text-align: left;
  font-family: Arial, "宋体";
  color: #666666;
  text-align: center;
  color: #f6827a;
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
}
.diamondOtherListViewOut {
  float: right;
  width: 131px;
  height: 60px;
  background: #f1f1f1;
  cursor: pointer;
  line-height: 60px;
  text-align: center;
  color: #666;
}
</style>