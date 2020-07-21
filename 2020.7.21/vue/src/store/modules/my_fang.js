import Vue from "vue";
import axios from "axios";

Vue.prototype.axios = axios;
const state = {
  // 发送请求储存数
  data: [],
  mydata: [
    {
      path: "/Birds_nest/appointment",
      name: "我的预约",
      methods: "appointment",
    },
    {
      path: "/Birds_nest/order",
      name: "我的订单",
      methods: "order",
    },
    {
      path: "/Birds_nest/integral",
      name: "我的积分",
      methods: "integral",
    },
    {
      path: "/Birds_nest/certificate",
      name: "我的礼券",
      methods: "certificate",
    },
    {
      path: "/Birds_nest/gift",
      name: "我的礼品",
      methods: "gift",
    },
    {
      path: "/Birds_nest/evaluate",
      name: "我的评价",
      methods: "evaluate",
    },
  ],
  // 用户信息
  user: [{}],
  // 预约数据
  appointment: [],
  confirm: [],

  // 订单数据
  order: [],

  // 积分数据
  integral: [],
  // 总积分
  allintegral: [{}],

  // 礼券数据
  certificate: [],
  Used: [],

  // 礼品数据
  gift: [],

  // 我的评论数据
  evaluate: [],
  // 已评论的数据
  Commented: [],
  // 待评论的数据
  to_commented: [],
};
const getters = {
  // 对数据进行加工处理
  user: (state, getters) => {
    return state.user;
  },
  mydata: (state, getters) => {
    // console.log(getters);
    return state.mydata;
  },
  appointment: (state, getters) => {
    // console.log(getters);
    return state.appointment;
  },
  order: (state, getters) => {
    return state.order;
  },
  integral: (state, getter) => {
    return state.integral;
  },
  certificate: (state, getter) => {
    return state.certificate;
  },
  gift: (state, getters) => {
    return state.gift;
  },
  // 评论部分
  evaluate: (state, getters) => {
    return state.evaluate;
  },
  allintegral: (state, getters) => {
    return state.allintegral;
  },
};
const actions = {
  //
  // 操作数据
  getmothds(ctx, methods) {
    ctx.commit(methods);
  },
  // 获取用户信息
  user(ctx, myuser) {
    axios
      .post("/api/user.do", myuser)
      .then((response) => {
        console.log(response.data);
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("user", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 获取需要的数据
  myappointment(ctx) {
    console.log("myappointment");
    // console.log(this.axios)
    axios
      .get("/api/myappointment.do")
      .then(function (response) {
        console.log(response.data);
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("myappointment", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 待确认的预约
  confirm(ctx, str) {
    console.log(str);
    axios
      .get("/api/myappointment.do?myappointment_state=" + str)
      .then(function (response) {
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("myappointment", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 我的订单
  myorder(ctx) {
    axios
      .get("/api/myorder.do")
      .then(function (response) {
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("myorder", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // 我的积分
  myintegral(ctx, str) {
    if (str == undefined) {
      str = "积分获取";
    }
    axios
      .get("/api/myintegral.do?myintegral_myclass=" + str)
      .then(function (response) {
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("myintegral", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 获取总积分
  allintegral: (ctx) => {
    axios
      .get("/api/allintegral.do")
      .then(function (response) {
        ctx.commit("allintegral", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 礼券部分
  mycertificate(ctx, str) {
    if (str == undefined) {
      str = "未使用";
    }
    console.log(str);
    axios
      .get("/api/mycertificate.do?code_state=" + str)
      .then(function (response) {
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("mycertificate", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // 我的礼品部分
  mygift(ctx) {
    axios
      .get("/api/mygift.do")
      .then(function (response) {
        // 日期过滤
        ctx.commit("formatUTC", response.data);
        // 数据修改
        ctx.commit("mygift", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // 评论部分
  Commented(ctx) {
    ctx.commit("Commented");
  },
  to_commented(ctx) {
    ctx.commit("to_commented");
  },
};
const mutations = {
  formatUTC(state, data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      for (var key in data[i]) {
        let str = key.split("_");
        if (str[1] == "date") {
          let utc_datetime = data[i][key];
          var T_pos = utc_datetime.indexOf("T");
          var year_month_day = utc_datetime.substr(0, T_pos);
          var new_datetime = year_month_day;
          data[i][key] = new_datetime;
        }
      }
    }
  },
  // 数据添加
  // 用户数据
  user(state, data) {
    state.data = data;
    state.user = [];
    state.user.push(...state.data);
  },
  // 我的预约
  myappointment(state, data) {
    state.data = data;
    state.appointment = [];
    state.appointment.push(...state.data);
  },
  // 我的订单
  myorder(state, data) {
    state.data = data;
    state.order = [];
    state.order.push(...state.data);
  },
  // 我的积分
  myintegral(state, data) {
    state.data = data;
    state.integral = [];
    for (let i = 0; i < state.data.length; i++) {
      state.data[i].end_date = state.data[i].user_date;
    }
    state.integral.push(...state.data);
  },
  // 获取的总积分
  allintegral(state, data) {
    state.allintegral[0].mycount = data[0].mycount;
  },
  // 我的礼券
  mycertificate(state, data) {
    state.data = data;
    state.certificate = [];
    state.certificate.push(...state.data);
  },
  // 我的礼品
  mygift(state, data) {
    state.data = data;
    state.gift = [];
    state.gift.push(...state.data);
  },

  // 评论部分
  Commented() {
    console.log("Commented");
    state.evaluate = [];
    state.evaluate.push(...state.Commented);
  },
  to_commented() {
    console.log("to_commented");
    state.evaluate = [];
    state.evaluate.push(...state.to_commented);
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
