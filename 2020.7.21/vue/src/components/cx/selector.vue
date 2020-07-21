<template>
  <div class="clearfix">
    <div class="boxleft">
      <div class="name">钻重</div>
      <div class="selectorright">
        <div class="inputbox">
          <input
            @change="flieSizeChange(1)"
            type="text"
            
            v-model="value.value1[0]"
            :style="img.img1"
            id="left"
          />
          <input
            type="text"
            @change="flieSizeChange(1)"
            v-model="value.value1[1]"
            :style="img.img1"
            id="right"
          />
        </div>
        <el-slider v-if="fileSizeShow" v-model="value.value1" range :min="min.min1" :max="max.max1" @change="change(1)"></el-slider>
      </div>
    </div>
    <div class="boxright">
      <div class="name">价格</div>
      <div class="selectorright">
        <div class="inputbox">
          <input
            type="text"
            @change="flieSizeChange(2)"
            v-model="value.value2[0]"
            :style="img.img2"
            id="left"
          />
          <input
            type="text"
            @change="flieSizeChange(2)"
            v-model="value.value2[1]"
            :style="img.img2"
            id="right"
          />
        </div>
        <el-slider v-if="fileSizeShow" v-model="value.value2" range :min="min.min2" :max="max.max2" @change="change(2)"></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    
    return {
        // fileSizeShow = true,
      img: {
        img1: {
          backgroundImage:
            "url(" + require("../../../static/img/input1.jpg") + ")",
          backgroundRepeat: "no-repeat"
        },
        img2: {
          backgroundImage:
            "url(" + require("../../../static/img/input2.jpg") + ")",
          backgroundRepeat: "no-repeat"
        }
      },
      value: {
        value1: [0.3, 20],
        value2: [1000, 5000000]
      },
      max: {
        max1: 20.0,
        max2: 5000000
      },
      min: {
        min1: 0.3,
        min2: 1000
      },
      fileSizeShow : true
    };
  },
  methods: {
...mapMutations(["searchRange", "researchColorName"]),
    change(num) {
      if (num == 1) {
        // console.log(this.value.value1);
        this.searchRange(this.value.value1);
      }else{
          // console.log(this.value.value2)
          this.searchRange(this.value.value2);
      }

    },
    flieSizeChange(num){
      if(num == 1){
        let arr = this.value.value1.map(Number)
        this.searchRange(arr);
      }else{
        let arr2 = this.value.value2.map(Number)
        console.log(arr2);
        this.searchRange(arr2);
      }
        // console.log(this.value);
      this.fileSizeShow = false
      const _this = this
      setTimeout(function(){
          _this.fileSizeShow = true
      },10)
    }
  }
};
</script>

<style scoped>
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
#left {
  float: left;
  background-position: top;
}
#right {
  float: right;
  /* width: 480px; */
}
input {
  width: 100px;
  border: 0px;
  padding: 0px;
  height: 24px;
  outline: none;
}
.inputbox {
  height: 20px;
}
.block {
  width: 580px;
}
.selectorright {
  float: right;
  width: 470px;
}
.selectorleft {
  float: left;
}
.boxleft {
  float: left;
}
.boxright {
  float: right;
  padding-right: 15px;
}
.name {
  display: inline-block !important;
  padding-top: 30px;
  font-size: 12px;
  padding-right: 40px;
}
</style>

<style>
.el-slider__button {
  background-color: rgb(243, 187, 176);
  border: 0px;
  width: 16px;
  height: 16px;
  border-radius: 0;
  transform: rotate(45deg);
}
.el-slider__bar {
  background: rgb(255, 138, 129);
}
</style>