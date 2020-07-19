const mysql = require('mysql')

const qb = require('../config/newdpconfig')


const Diamond_dao={
  // 钻石页面数据
  main_Diamond(params){
    return new Promise((resolve,reject)=>{
      // console.log(params.length);
      let myw='';
      if(params.length==0){
        //获取全部数据
        console.log("www=============all");
      }else{
        myw+=' where abstain_id='+params[0];
      }
      // console.log(myw);
      let sql='SELECT * FROM to_abstain JOIN my_cut ON to_abstain.cut_id=my_cut.cut_id JOIN my_material ON to_abstain.material_id=my_material.material_id JOIN my_style ON to_abstain.style_id=my_style.style_id JOIN my_class ON to_abstain.class_id=my_class.class_id'+myw
      console.log(sql);
      qb.connect(sql,params,(error,data)=>{ 
        console.log("进入main_Diamond")
        if(!error){
          resolve(data);
        }
      })
    })
  },
  // 筛选数据
  someproduct(params){
    return new Promise((resolve,reject)=>{
      let myw='';
      let myarr=params[0];
      let num=0;
      let arr=[];
      console.log(myarr);
      for(var keys in myarr){
        console.log(keys,myarr[keys])
        console.log(myarr[keys].length);
        num++;
        if(num==1){
          if(keys=='abstain_price'){
            myw+=keys+">? and "+keys+"<? "
            arr.push(myarr[keys].split('-')[0],myarr[keys].split('-')[1])
          }else if(keys=='material'){
            myarr[keys]='Pt铂金'
            myw+="material_m=? "
            arr.push(myarr[keys]);
          }else if(keys=='mainweight'){
            myarr[keys]='18K金'
            myw+="material_m=? "
            arr.push(myarr[keys]);
          }else{
            myw+=keys+"=? "
            arr.push(myarr[keys]);
          }
        }else{
          if(keys=='abstain_price'){
            myw+="and "+keys+">? and "+keys+"<? "
            arr.push(myarr[keys].split('-')[0],myarr[keys].split('-')[1])
          }else if(keys=='material'){
            myarr[keys]='Pt铂金'
            myw+="and material_m=? "
            arr.push(myarr[keys]);
          }else if(keys=='mainweight'){
            myarr[keys]='18K金'
            myw+="and material_m=? "
            arr.push(myarr[keys]);
          }else{
            myw+="and "+keys+"=? "
            arr.push(myarr[keys]);
          }
        }
      }
      // params[0]=myw;
      console.log(arr);
      let sql='SELECT * FROM to_abstain JOIN my_cut ON to_abstain.cut_id=my_cut.cut_id JOIN my_material ON to_abstain.material_id=my_material.material_id JOIN my_style ON to_abstain.style_id=my_style.style_id JOIN my_class ON to_abstain.class_id=my_class.class_id WHERE '+myw
      console.log('================================')
      console.log(sql);
      qb.connect(sql,arr,(error,data)=>{ 
        console.log("进入main_Diamond")
        // console.log(data);
        if(!error){
          resolve(data);
        }
      })
    })
  },
};


module.exports = Diamond_dao;
