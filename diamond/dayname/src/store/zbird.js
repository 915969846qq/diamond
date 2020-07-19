import axios from 'axios'
const state = {
  value: "成都",
  option: {},
  cartdata: [],
  cartinfo: [],
  commentinfo: [],
  salesroom: [],
  count: 0,
  getuser: {},
  data: "钻石",
}
const getters = {
  commentinfo: state => {
    state.commentinfo.forEach(item => {
      item.time = item.time.substring(0, 10);
      item.imgsrc = item.imgsrc.split(",");
    })
    return state.commentinfo
  },
  salesroom: state => {
    console.log(state.salesroom);
    return state.salesroom;
  },
  data: state => state.data,
  getuser: state => state.getuser,
  cartdata: state => state.cartdata,
  opitions: state => state.opitions,
  cartinfo: state => state.cartinfo,
  value: state => {
    console.log(state.value);
    return state.value;
  },
  count: state => state.cartinfo.length,
  option: state => {
    let option = state.options.find(item => item.value == state.value);
    return option;
  },
  sumprice: function (state) {
    let theprice = 0;
    state.cartinfo.forEach(item => {
      theprice += item.gprice;
    })
    return theprice;
  },
  // getaxios:function(){
  //   axios.get("/api/topheadr.do").then(res=>{
  //     return res.data;
  //   })
  // },


}
const actions = {
  onchange(ctx) {
    ctx.commit("onchange");
  },

  getaxios(zcx) {
    axios.get("/api/toptop.do").then(res => {
      let cartdata = [];
      cartdata = res.data;
      console.log(cartdata);
      zcx.commit("getdata", res.data);
    })
  },
  cartinfo() {
    axios.get("/api/mycart.do").then(res => {
      console.log(res.data);
      this.commit("cartinfo", res.data);
    })
  },
  commentinfo() {
    axios.get("/api/commentlimit.do").then(res => {
      console.log(res.data);
      this.commit("commentlimit", res.data);
    })
  },
  commentsinfo() {
    axios.get("/api/comments.do").then(res => {
      console.log(res.data);
      this.commit("comments", res.data);
    })
  },
  salesroom() {
    axios.get("/api/salesroom.do").then(res => {
      console.log(res.data);
      this.commit("salesroom", res.data);
    })
  },
  getuser() {
    axios.get("api/salesroom.do").then(res => {
      this.commit("getuser", res.data);
    })
  },
  mouseover(zcx) {
    zcx.commit("mouseover", zcx);
  }



}
const mutations = {
  onchange: () => {
    console.log(111111111111111111111);
    console.log(this.a);
    // console.log(this.a.data().options);
    let option = this.a.data().options.find(item => item.value == this.a.data().value);
    console.log(option);
    state.option = option;
  },
  getdata(state, gdata) {
    console.log(gdata);
    state.cartdata = gdata;
  },
  cartinfo(state, gdata) {
    state.cartinfo = gdata;
    console.log(state.cartinfo)
  },
  commentlimit(state, gdata) {
    state.commentinfo = gdata;
    console.log(state.commentinfo)
  },
  comments(state, gdata) {
    state.commentinfo = gdata;
    console.log(state.commentinfo)
  },
  salesroom(state, gdata) {
    state.salesroom = gdata;
    console.log(state.salesroom)
  },
  updateselect(state, value) {
    state.value = value;
    console.log(state.value);
  },
  getuser(state, gdata) {
    state.getuser = gdata;
  },
  mouseover(state, data) {
    console.log(data);
    state.data = data;
  }

}
export default {
  state,
  mutations,
  actions,
  getters
}