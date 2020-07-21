<template>
  <div id="Delivery-self">
    <div id="Delivery-self-left">
      <div id="Delivery-self-select">
        <!-- <el-select :value="value" placeholder="请选择" @change="onchange">
          <el-option
            v-for="(item,index) in $store.state.zbird.salesroom"
            :key="index"
            :label="item.local"
            :value="item.local"
          ></el-option>
        </el-select>-->
        <select v-model="value" style>
          <option
            v-for="(item, index) in salesroom"
            :label="item.local"
            :key="index"
            :value="item.local"
          ></option>
        </select>
      </div>
      <div id="Delivery-self-local" v-for="item in salesroom" :key="item.sid">
        <template v-if="item.local==$store.state.zbird.value">
          <span>{{item.address}}</span>
          <p>电话：{{item.tel}}</p>
        </template>
      </div>

      <div id="Delivery-self-info">
        <el-input v-model="input" placeholder="订货人姓名"></el-input>
        <el-input v-model="input" placeholder="订货人手机号"></el-input>
        <el-input v-model="input" placeholder="取件人姓名"></el-input>
        <el-input v-model="input" placeholder="取件人手机号"></el-input>
      </div>
    </div>
    <div id="Delivery-self-right">
      <div id="Delivery-self-img" v-for="item in salesroom" :key="item.sid">
        <template v-if="value==item.local">
          <img :src="item.imgsrc" alt />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
let getdata = {
  options: [
    {
      id: 0,
      value: "上海",
      label: "上海",
      local: "上海市静安区中山北路178号钻石坊4号楼1楼",
      tel: "电话：021-33665178",
      src: "../../../static/img/shopcar_order_tiyan_shanghai_m.jpg"
    },
    {
      id: 1,
      value: "广州",
      label: "广州",
      local: "广东省广州市天河区天河路230号万菱国际中心35楼",
      tel: "电话：020-85236561",
      src: "../../../static/img/shopcar_order_tiyan_guangzhou_m.jpg"
    },
    {
      id: 2,
      value: "杭州",
      label: "杭州",
      local: "浙江省杭州市下城区环城北路208号杭州大厦坤和中心主楼18楼",
      tel: "电话：0571-89936665",
      src: "......staticimgshopcar_order_tiyan_hangzhou_m.jpg"
    },
    {
      id: 3,
      value: "南京",
      label: "南京",
      local: "江苏省南京市秦淮区汉中路89号金鹰国际商城A座12楼",
      tel: "电话：020-85236561",
      src: "......staticimgshopcar_order_tiyan_nanjing_m.jpg"
    },
    {
      id: 4,
      value: "成都",
      label: "成都",
      local: "四川省成都市锦江区总府路2号时代广场A座22楼",
      tel: "电话：020-85236561",
      src: "../../../static/img/shopcar_order_tiyan_chengdu_m.jpg"
    },
    {
      id: 5,
      value: "西安",
      label: "西安",
      local: "陕西省西安市碑林区南关正街88号长安国际A座5楼",
      tel: "电话：029-87651758",
      src: "../../../static/img/shopcar_order_tiyan_xian_m.jpg"
    },
    {
      id: 6,
      value: "天津",
      label: "天津",
      local: "天津市和平区赤峰道136号天津国际金融中心26楼",
      tel: "电话：022-58369518",
      src: "../../../static/img/shopcar_order_tiyan_tianjin_m.jpg"
    },
    {
      id: 7,
      value: "北京",
      label: "北京",
      local: "王府井大街138号新东安T2办公楼7楼",
      tel: "电话：010-85186550",
      src: "../../../static/img/shopcar_order_tiyan_beijing_m.jpg"
    },
    {
      id: 8,
      value: "武汉",
      label: "武汉",
      local: "湖北省武汉市江岸区京汉大道1398号武汉天地环球智慧中心A2写字楼11楼",
      tel: "电话：027-85267510",
      src: "../../../static/img/shopcar_order_tiyan_wuhan_m.jpg"
    }
  ],
  option: {},
  // value:"成都"
  input: ""
  // calesroom:10
};
export default {
  name: "self",
  data() {
    return getdata;
  },
  methods: {
    ...mapActions(["onchange"])
  },
  computed: {
    // ...mapGetters(["value"]),
    value: {
      get() {
        console.log(this.$store.state.zbird.value);
        return this.$store.state.zbird.value;
      },
      set(newvalue) {
        this.$store.commit("updateselect", newvalue);
      }
    },
    ...mapGetters(["salesroom"])
  },
  created() {
    this.$store.dispatch("salesroom");
    console.log(this.$store.state.zbird.salesroom);
  }
};
</script>

<style scoped>
#Delivery-self /deep/ .el-input__inner{
      width: 300px;   
}

#Delivery-self {
  margin-top: 35px;
  overflow: hidden;
  background: #fbc9c0;
}
#Delivery-self-left {
  float: left;
  width: 40%;
}
#Delivery-self-select {
  float: left;
  margin-left: 30px;
  margin-top: 20px;
  text-align: left;
  width: 60%;
}
#Delivery-self-select > select {
  width: 300px; 
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
#Delivery-self-local {
  display: inline-block;
  font-size: 14px;
  text-align: left;
  margin-top: 20px;
  margin-left: 30px;                
}
#Delivery-self-local span {
  margin: 10px 0;
  display: inline-block;
}
#Delivery-self-info {
  width: 221.4px;
  margin-left: 30px;
  margin-top: 40px;
  margin-bottom: 30px;
}
#Delivery-self-info .el-input {
  margin-top: 10px;
}

#Delivery-self-right #Delivery-self-img {
    margin-top: 20px;
    float: right;
    margin-right: 200px;
}
 #Delivery-self-img{
   margin-top:20px;
 }
</style>