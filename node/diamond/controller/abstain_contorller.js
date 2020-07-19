const dao = require('../dao/abstain_dao')

const Diamond_controller={
  // 钻石页面
  abstain_Diamond(require,response){
    console.log("进入abstain_Diamond，获取数据库数据");
    let abstain_id=require.query.abstain_id
    console.log(abstain_id);
    let arr=[];
    if(abstain_id!=''){
      arr.push(abstain_id);
    }
    console.log(arr.length);
    dao.main_Diamond(arr)
    .then((data)=>{
      console.log('现在需要返回订单的data');
      response.send(data);
    })
  },
  someproduct(require,response){
    console.log('获取一些数据');
    console.log(require.body)
    let arr=[];
    arr.push(require.body)
    console.log(arr);
    dao.someproduct(arr)
    .then((data)=>{
      console.log('现在需要返回订单的data');
      response.send(data);
    })
  }

};




module.exports = Diamond_controller;