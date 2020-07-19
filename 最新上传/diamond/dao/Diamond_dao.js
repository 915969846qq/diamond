const mysql = require('mysql')

const qb = require('../config/newdpconfig')


const Diamond_dao={
  // 钻石页面数据
  main_Diamond(params){
    return new Promise((resolve,reject)=>{
      console.log(params);
      qb.connect('SELECT * FROM my_diamond where diamondId=1',params,(error,data)=>{ 
        console.log("进入main_Diamond")
        if(!error){
          console.log(data)
          resolve(data);
        }
      })
    })
  }
};


module.exports = Diamond_dao;
