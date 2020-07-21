
const dao = require('../dao/Diamond_dao')

const Diamond_controller={
  // 钻石页面
  my_Diamond(require,response){
    console.log("进入my_Diamond，获取数据库数据");
    let arr=[];
    dao.main_Diamond(arr)
    .then((data)=>{
      console.log(data);
      console.log('现在需要返回订单的data');
      response.send(data);
    })
  }


};




module.exports = Diamond_controller;
