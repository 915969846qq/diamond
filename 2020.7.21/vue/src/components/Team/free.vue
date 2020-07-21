<template>
  <div id="body">
    <div id="orderer">
      <div id="order-headr">
        <span>订货人信息</span>
        <font>如有订单问题，客服将联系订货人，请务必完善信息哦！</font>
      </div>
      <div id="order-body">
        <div>
          <label>订 &nbsp;&nbsp;货&nbsp;&nbsp; 人&nbsp;</label>
          <input type="text" required />
        </div>
        <div>
          <label>订货人手机</label>
          <input type="text" required />
        </div>
        <div id="order-address">
          <label>订货人地址</label>
          <div class="address_select" id="address_select">
            <div class="select_div">
              <select name="province" class="province" v-model="provinceIndex">
                <option
                  v-for="(provinceOne,index) in provinceList"
                  :key="index"
                  v-bind:value="provinceOne.label"
                >{{provinceOne.value}}</option>
              </select>
            </div>
            <div class="select_div">
              <select name="city" class="city" v-model="cityIndex">
                <option
                  v-for="(cityOne,index) in cityList"
                  :key="index"
                  v-bind:value="cityOne.label"
                >{{cityOne.value}}</option>
              </select>
            </div>
            <div class="select_div">
              <select name="district" class="district" v-model="districtIndex">
                <option
                  v-for="(districtOne,index) in districtList"
                  :key="index"
                  v-bind:value="districtOne.label"
                >{{districtOne.value}}</option>
              </select>
            </div>
            <input type="street" v-bind:placeholder="streetTip" v-bind:value="street" />
          </div>
        </div>
                <div>
          <label>订货人邮箱</label>
          <input type="text" />
        </div>
                <div>
          <label>订货人手机</label>
          <input type="text" required />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import local from "./local";
export default {
  name: "free",
  data() {
    return {
      provinceIndex: "",
      cityIndex: "",
      districtIndex: "",
      street: ""
    };
  },
  mounted() {
    var _this = this;
    var districtIndex = ""; //这边只要传入县级的值即可
    var street = ""; //这边只要传入县级的值即可
    _this.provinceIndex = districtIndex.substr(0, 2);
    _this.cityIndex = districtIndex.substr(0, 4);
    _this.districtIndex = districtIndex.substr(0, 6);
    _this.street = street;
  },
  computed: {
    provinceList: function() {
      console.log(local);
      var res = [{ label: "", value: "-- 请选择省份 --" }];
      local.forEach(function(local) {
        res.push({ label: local.label, value: local.value });
      });
      return res;
    },
    cityList: function() {
      var _this = this;
      if ("" == _this.provinceIndex) {
        var res = [{ label: "", value: "-- 请选择省份 --" }];
      } else {
        res = [{ label: "", value: "-- 请选择市 --" }];
        local.forEach(function(local) {
          if (local.label == _this.provinceIndex) {
            // 判断是否需要清空下级值
            if (
              "" != _this.cityIndex &&
              _this.provinceIndex != _this.cityIndex.substr(0, 2)
            ) {
              _this.cityIndex = "";
              _this.districtIndex = ""; //这里同时清空下下级的数据，至于原因可以自己去尝试！
            }
            local.children.forEach(function(item) {
              res.push({ label: item.label, value: item.value });
            });
          }
        });
      }
      return res;
    },
    districtList: function() {
      var _this = this;
      if ("" == _this.provinceIndex) {
        var res = [{ label: "", value: "-- 请选择省份 --" }];
      } else if ("" == _this.cityIndex) {
        res = [{ label: "", value: "-- 请选择市 --" }];
      } else {
        res = [{ label: "", value: "-- 请选择县 --" }];
        local.forEach(function(local) {
          if (local.label == _this.provinceIndex) {
            local.children.forEach(function(item) {
              if (item.label == _this.cityIndex) {
                // 判断是否需要清空下级值
                if (
                  "" != _this.districtIndex &&
                  _this.cityIndex != _this.districtIndex.substr(0, 4)
                ) {
                  _this.districtIndex = "";
                }
                item.children.forEach(function(value) {
                  res.push({ label: value.label, value: value.value });
                });
              }
            });
          }
        });
      }
      return res;
    },
    streetTip: function() {
      var _this = this;
      if ("" == _this.provinceIndex) {
        var res = "-- 请选择省份 --";
      } else if ("" == _this.cityIndex) {
        res = "-- 请选择市 --";
      } else if ("" == _this.districtIndex) {
        res = "-- 请选择县 --";
      } else {
        res = "-- 请填写街道 --";
      }
      return res;
    }
  },
  created: function() {
    console.log(this);
  }
};
</script>

<style scope>
#order-headr {
  text-align: left;
}
#order-headr > span {
  font-size: 18px;
  margin-right: 120px;
}
#order-headr > font {
  font-size: 12px;
}

#order-body {
  font-size: 12px;
  overflow: visible;
  background: #fef4f2;
  padding-top: 17px;
  text-align: left;
}
#order-body > div {
  margin-bottom: 10px;
  margin-left: 40px;
}
#order-body > div > label {
  margin-right: 10px;
}
#order-body > div > #address {
  display: inline-block;
}
.address_select {
  margin: 0 auto;
  display: inline-block;
  width: 80%;
}
.address_select .select_div {
  display: inline-block;
  margin: 10px 0;
}
.address_select .select_div:nth-child(2) {
  margin: 10px 2%;
}
.address_select select {
  height: 32px;
  width: 100%;
  margin: 0;
  display: inline-block;
  text-align: center;
}
.address_select input {
  box-sizing: border-box;
  display: inline-block;
  height: 32px;
  margin: 10px 2%;
  text-align: center;
}
</style>