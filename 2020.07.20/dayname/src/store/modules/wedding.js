// 数据
import vue from 'vue';
import axios from 'axios';
vue.prototype.axios=axios
const state={
  cho:[
    {ckind:"类  别",formkey:"class",detail:[{c:"女戒"},{c:"花戒"},{c:"排戒"}]},
    {ckind:"价  格",formkey:"pricegrade",detail:[{c:"1000-3000"},{c:"3000-6000"},{c:"6000-10000"},{c:"10000-20000"},{c:"20000以上"}]},
    {ckind:"主钻石重",formkey:"mainweightgrade",detail:[{c:"30分以下"},{c:"30-39分"},{c:"40-49分"},{c:"50-59分"},{c:"60-99分"},{c:"克拉钻"}]},
    {ckind:"材  质",formkey:"material",detail:[{c:"Pt铂金"},{c:"18k金"},{c:"Pt铂金-18k金"}]},
    {ckind:"爪镶爪数",formkey:"clawnum",detail:[{c:"四爪"},{c:"六爪"},{c:"其它"}]},
    {ckind:"主钻装饰",formkey:"maindecoration",detail:[{c:"简单独钻"},{c:"戒头有辅助石"},{c:"戒臂有辅石"}]},
    {ckind:"主钻形状",formkey:"mainshape",detail:[{c:"圆形"},{c:"异形"}]},
    {ckind:"款式系列",formkey:"pattern",detail:[{c:"北极光追光"},{c:"Lady New York"},{c:"公主桂冠"},{c:"宠爱"},{c:"心心相印"}]}
  ],
  choosedform:{},
  howmany:10,
  // 搜索产品结果
  product:[],
  // 更多同类产品
  moresameproduct:[],
  //商品购买页页面数据
  productbuy:{},
  currentpage:1,
  pageCount:3
};
// 对视图提供获取数据的方法
const getters={

};
// 调用函数,婚戒购买页面
const actions={
productbuy(ctx,n){
  axios.post("/api/productbuy",{id:n}).then(resp=>{
    ctx.state.productbuy=resp.data[0];
    // console.log( ctx.state.productbuy)
    // console.log("111")
    var myweddingnameid=resp.data[0].weddingnameid;

    axios.post("/api/getmoreproduct.do",{myweddingnameid:myweddingnameid}).then(resp=>{
      ctx.state.moresameproduct=resp.data;
      console.log(myweddingnameid)
    })
  })
},
  // 婚戒搜索商品，搜索页面
getproduct(ctx){
  var postdata=ctx.state.choosedform;
console.log(ctx.state.choosedform)
axios.post("/api/getproductchen.do",postdata).then(resp=>{
 ctx.state.product=resp.data;

})
},
// 婚戒商品排序页面
  orderproduct(ctx,myid){
var searchdata=[ctx.state.choosedform,myid];
    axios.post("/api/orderproduct.do",{my:searchdata}).then(resp=>{
      ctx.state.product=resp.data;
    })
  },

  //婚戒购物车     
  addtocarthunjie(ctx){ 
    let gname=ctx.state.productbuy.materialdetail+"钻石戒指"+"("+ctx.state.productbuy.class.substring(0,1)+")";
    let gprice=ctx.state.productbuy.price;
    let handsize=ctx.state.productbuy.palmsize.substring(0,4);
    axios.post("/api/addtocart1.do",{gname:gname,gletteringinner:'',gLetteringtime:'',gprice:gprice,handsize:handsize,gnamenan:'',gnamenv:'',handsizenan:'',handsizenv:''})
    console.log(this.dispatch("cartinfo"));
  }
};

// 函数
const mutations={

};

export default{
  state,
  mutations,
  actions,
  getters
}
