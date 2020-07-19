let found = require("../config/dbpool");


const dao  = {
    // getUserLogin(parmes){
    //     return new Promise((resolve,reject)=>{
    //         found.connect("select * from users where username=? and pwd=?",parmes,(error,data)=>{
    //             if(!error){
    //                 resolve(data);
    //                 console.log(data);         
    //             }else{
    //                 reject(error);
    //             }
    //         })
    //     })
    // },
    // //形参接住控制层传过来的数据
    // getUserDao(parmes,tellback){
    //     found.connect("select * from ClassName where ID=?",parmes,(error,data)=>{   
    //         if(!error){
    //             tellback(data,error); 
    //         }
    //     })
    // },
    // getUserDao1(parmes,tellback){
    //     found.connect("update ClassName set nianji=?,KName=?,ZName=?,BName=?,PName=?,TName=?,Sdate=? where ID=?",parmes,
    //                 (error,data)=>{
    //                     if(!error){
    //                         tellback(data,error);      
    //                     }
    //                 });
        
    // },
    // getUserDao3(parmes,tellback){
    //     found.connect("insert into ClassName value(?,?,?,?,?,?,?,?)",parmes,(error,data)=>{
    //           if(!error){
    //               tellback(error,data);
    //           }
    //     });
    // },
    // getDeleteDao(parmes){
    //     return new Promise(function (resolve,reject){
    //         found.connect("delete  from ClassName where ID=?",parmes,(error,data)=>{
    //             if(error==null){
    //                 resolve(data);
    //             }else{
    //                 reject(error);   
    //             }
    //         })
    //     })
    // },
    // getBanjiEjs(){
    //     return new Promise(function(resolve,reject){
    //         found.connect("select * from ClassName",null,(error,data)=>{
    //             if(error==null){
    //                 resolve(data);
    //             }else{
    //                 reject(error);  
    //             }
    //         })  
    //     })
    // },
    // //ejs删除
    // getshanchuEjs(parmes){
    //     return new Promise(function(resolve,reject){
    //         found.connect("delete from ClassName where ID=?",parmes,(error,data)=>{
    //             if(error==null){
    //                 resolve(data);
    //             }else{
    //                 reject(error);   
    //             }
    //         })
    //     })
    // }

    //地图
    getMapDao(parmes){
            return new Promise(function(resolve,reject){
            found.connect("select * from map where mapClass=?",parmes,(error,data)=>{
                if(error==null){
                    resolve(data);  
                }else{
                    reject(error);      
                }
            })
        })
    },
    //热门资讯getDaonews
    getDaonews(parmes){
        return new Promise(function(resolve,reject){
        found.connect("select * from news_dynamic where news_dynamic_id=?",parmes,(error,data)=>{
            if(error==null){
                resolve(data);  
            }else{      
                reject(error);      
            }   
        })
    })
    },
    //热门资讯全部
    getDaonews1(){
        return new Promise(function(resolve,reject){
        found.connect("select * from news_dynamic",(error,data)=>{
            if(error==null){
                resolve(data);  
            }else{      
                reject(error);      
            }
        })
    })
    },

    //热点分类全部
    getDaoAllClass(){
        return new Promise(function(resolve,reject){
        found.connect("select * from hot_categories",(error,data)=>{
            if(error==null){
                resolve(data);  
            }else{      
                reject(error);      
            }
        })
    })
    },

    //
    getDaoClassID(parmes){
        return new Promise(function(resolve,reject){
        found.connect("SELECT * FROM hot_categories WHERE hot_categories_id=?",parmes,(error,data)=>{
            if(error==null){
                resolve(data);              
            }else{      
                reject(error);      
            }   
        })
    })
    },
}
module.exports=dao;  