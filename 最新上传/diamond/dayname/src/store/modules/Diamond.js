import Vue from 'vue'
import axios from "axios";
Vue.prototype.axios = axios

const state = {
  // 存放需要的数据信息
  Diamond:[
    {

    }
  ],
}

const getters = {
  // 对数据进行加工处理，美化
  // 返回页面信息
  Diamond(state,getters){
    // console.log(state.Diamond.Diamond[0].weight);
    // console.log(state.Diamond)
    // console.log(state.Diamond[0].weight);
    let left=state.Diamond[0].weight;
    // console.log(left);
    let newleft
    if(left!=0){
      newleft=(left-0.2)/0.1*75
      // console.log(newleft);
      state.Diamond[0].newleft=newleft;
    }
    return state.Diamond
  }
}

const actions = {
  // 进行获取数据或者操作数据
  // 钻石页面
  my_Diamond(ctx,str){
    // console.log('进入my_Diamond');
    axios.get("api/my_Diamond.do").then(function(response){
      console.log(response.data);
      // 数据修改
      ctx.commit('my_Diamond',response.data);
    }).catch(function(error){
      console.log(error)
    })
  }
}

const mutations = {
  // 对数据进行操作
  // 钻石页面数据
  my_Diamond(state,data){
    state.Diamond=[];
    state.Diamond.push(...data)
  }
}


export default {
  // 公开数据方法
  state,
  mutations,
  actions,
  getters
}
