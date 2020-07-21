// 数据
import vue from 'vue';
import axios from 'axios';
vue.prototype.axios=axios
const state = {
  cho:[
    {ckind:"类  别",formkey:"class_c",detail:[{c:"结婚对戒"},{c:"女对戒"},{c:"男对戒"}]},
    {ckind:"价  格",formkey:"abstain_price",detail:[{c:"0-3000"},{c:"3000-5000"},{c:"5000-10000"},{c:"10000以上"}]},
    {ckind:"材  质",formkey:"material_m",detail:[{c:"Pt铂金"},{c:"18k金"},{c:"Pt铂金-18k金"}]},
    {ckind:"款式系列",formkey:"style_s",detail:[{c:"You&Me"},{c:"两人一世戒"}]}
  ],
  choosedform:{},
  howmany:10,
  product:[
    {}
  ],
  //商品预览页面
  productbuypreview:[],
  currentpage:1,
  pageCount:3,
  // 对戒页面展示图片
  myimg:[
    {imgsrc:'pure_',num:'1'},
    {imgsrc:'pure_',num:'2'},
    {imgsrc:'pure_',num:'3'},
    {imgsrc:'pure_',num:'4'},
    {imgsrc:'pure_',num:'5'},
    {imgsrc:'pure_',num:'6'},
    {imgsrc:'pure_',num:'7'},
    {imgsrc:'pure_',num:'8'}
  ],
};
// 对视图提供获取数据的方法
const getters = {
  myimg(state){
    console.log('state')
    return state.myimg
  }
};
// 调用函数
const actions = {
  tabstainproduct(ctx){
    var postdata=ctx.state.choosedform;
    console.log(postdata)
    axios.post("api/getproduct.do",postdata)
    .then(response=>{
      console.log(response);
      // 日期过滤
      ctx.commit('formatUTCS',response.data);
      // 数据修改
      ctx.commit('to_abstain',response.data);
    })
    .catch(function(error){
      console.log(error)
    })
  },
  // 现在获取对戒页面数据
  to_abstain(ctx,str){
    console.log('现在获取对戒页面数据');
    console.log(str);
    axios.get('/api/to_abstain.do?abstain_id='+str).then(function(response){
      console.log(response.data)
      // 日期过滤
      ctx.commit('formatUTCS',response.data);
      // 数据修改
      ctx.commit('to_abstain',response.data);
    }).catch(function(error){
      console.log(error)
    })
  },
  // 上传购物车数据
  addtocart_abstain(ctx, data) {
    console.log(data);
    axios.post("/api/addtocart1.do",data);
    this.dispatch('cartinfo')
  }

};
// 函数
const mutations = {
    // 修改日期数据
    formatUTCS(state,data){
      console.log(data[0]);
      for(let i=0;i<data.length;i++){
      let utc_datetime=data[0].publishtime;
      // 转为正常的时间格式 年-月-日 时:分:秒
      var T_pos = utc_datetime.indexOf('T');
      var Z_pos = utc_datetime.indexOf('Z');
      var year_month_day = utc_datetime.substr(0,T_pos);
      var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
      var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06
      // 处理成为时间戳
      timestamp = new Date(Date.parse(new_datetime));
      timestamp = timestamp.getTime();
      timestamp = timestamp/1000;
    
      // 增加8个小时，北京时间比utc时间多八个时区
      var timestamp = timestamp+8*60*60;
    
      // 时间戳转为时间
      var beijing_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
      data[i].publishtime=beijing_datetime;
    }
  },
  to_abstain(state,data){
    console.log('现在对获取到的信息进行修改操作');
    console.log(data);
    state.product=data
  },
};

export default{
  state,
  mutations,
  actions,
  getters
}
