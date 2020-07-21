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
  page: 1,
  service: '',
  commodity: '',
  seed: 1,
  news: [],
  choosenav:{},
  nav: [{
    name: "钻石",
    frist: ['30分裸钻', '50分裸钻', '70分裸钻', '克拉钻', '海淘钻石 立省30%', '北极光钻石', 'FireCushion钻石'],
    second: ['圆形', '公主方', '祖母绿', '橄榄形', '椭圆形', '梨形', '心形'],
    imgsrc: 'http://imp.zbird.cn/614/49/61449_1',
  },
  {
    name: "婚戒",
    frist: ['简约独钻', '奢华群镶', '克拉钻戒', '大气男戒', '纪念戒/花戒', '戒托款式', '人气热销'],
    second: ['北极光追光系列', 'LADY NEW YORK系列', '公主桂冠系列', '心心相印系列', '宠爱系列'],
    imgsrc: 'http://imp.zbird.cn/608/81/60881_1',
  },
  {
    name: "对戒",
    frist: ['18K金对戒', '铂金对戒', '男款对戒', '女款对戒', '热销款式'],
    second: ['北极光追光系列', 'INTO COLOUR悦色系列', '两人一世戒系列', 'YOU&ME系列'],
    imgsrc: 'http://imu.zbird.cn/548/06/54806_1',
  },
  {
    name: "配饰",
    frist: ['挂坠', '项链坠', '耳钉', '手链', '手镯', '项链', '人气TOP'],
    second: ['北极光追光系列', '生而不同星座系列', 'BLINK系列', 'INTO COLOUR悦色系列', '列-秘密花园', 'HORSCOPE STAR星座系列', '小幸运系列'],
    imgsrc: 'http://imu.zbird.cn/611/14/61114_1',
  },
  {
    name: "定制",
    frist: ['从裸钻开始定制', '从戒托开始定制', '从吊坠托开始定制'],
    second: ['经典直臂款戒托', '简约扭臂款戒托', '异型钻款戒托', '北极光款戒托', '火玫瑰款戒托'],
    imgsrc: 'http://imu.zbird.cn/608/82/60882_1',
  },
  ],
}
const getters = {
  choosenav:state => state.choosenav,
  seed: state => state.seed,
  commodity: state => state.commodity,
  service: state => state.service,
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
  data: state => {
    console.log(state.data);
    return state.data;
  },
  page: state => state.page,
  news: state => state.news,
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
    axios.get("/api/salesroom.do").then(res => {
      this.commit("getuser", res.data);
    })
  },
  news() {
    axios.get("/api/news.do").then(res => {
      this.commit("getnews", res.data);
    })
  },
  mouseover(zcx,value) {
    zcx.commit("mouseover", value);
  },
  del(zcx, data) {
    console.log(data);
    axios.post("/api/del.do", { data: data }).then(res => {
      console.log(res.data);
      zcx.commit("del", res.data);
    })

  },
  clear(zcx) {
    axios.post("/api/clear.do").then(res => {
      console.log(res.data);
      zcx.commit("del", res.data);
    })
  },
  uporder(zcx) {
    console.log(this.state.zbird.cartinfo);
    let data = this.state.zbird.cartinfo;
    axios.post("/api/uporder.do", { data: data }).then(res => {
      console.log(res.data);
      zcx.commit("uporder", res.data);
    })
  },
  gopage(zcx, index) {
    console.log(index);
    zcx.commit("gopage", index);
  },
  prevpage(zcx) {
    zcx.commit("prevpage");
  },
  nextpage(zcx) {
    zcx.commit("nextpage");
  },
  upcomment(zcx) {
    let d = new Date();
    console.log(zcx.state.commodity);
    let commodity = zcx.state.commodity;
    let service = zcx.state.service;
    let star = zcx.state.seed;
    let time = d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getDate();
    console.log(parseInt(d.getDate()));
    axios.post("/api/upcomment.do", { Ccommodity: commodity, Cservice: service, star: star, time: time }).then(res => {
      console.log(res.data);
      zcx.commit("upcomment", res.data);
    })
  },
  commodity(zcx, data) {
    zcx.commit("commodity", data);
  },
  service(zcx, data) {
    zcx.commit("service", data);
  },



}
const mutations = {
  onchange: () => {
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
  getnews(state, gdata) {
 
    state.news = gdata;
    console.log(state.news);
  },
  mouseover(state, gdata) {
    console.log(gdata);
    state.choosenav=state.nav[gdata];
  },
  del(actions, gdata) {
    this.dispatch("cartinfo");
  },
  clear(actions, gdata) {
    this.dispatch("cartinfo");
  },
  uporder(state, gdata) {
    console.log(gdata);    
  },
  gopage(state, gdata) {
    state.page = gdata;
  },
  prevpage(state) {
    if (state.page > 1) {
      state.page = state.page - 1;
    }
  },
  nextpage(state) {
    if (state.page < Math.ceil(state.commentinfo.length / 8)) {
      state.page = state.page + 1;
    }
  },
  upcomment(state, gdata) {
    this.dispatch("commentsinfo");
  },
  commodity(state, msg) {
    state.commodity = msg;
  },
  service(state, msg) {
    state.service = msg;
  },
  seed(state, msg) {
    state.seed = msg;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
