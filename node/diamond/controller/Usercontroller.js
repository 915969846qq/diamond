// const database = require("../config/dbconfig");
const found = require("../config/dbpool");
const express = require("express");
var moment = require("moment");
const userDao = require("../dao/UserDao");
const fs=require("fs"); 

const usercontroller = {
    //定义注册方法
//     getRegester(req,res){
//       console.log("进入注册");
//       let username = req.body.username; 
//       console.log(username);  
//       //数据库连接
//       found.connect("SELECT * FROM users WHERE username=?",[username],(error,data)=>{
//             if(!error){
//                 if(data.length>0){
//                     res.send("该账号已被注册,请重新输入");  
//                 }else if(username=="" || username==null){
//                     res.send("账号不能输入为空"); 
//                 }else{  
//                     res.send("该账号可以使用");  
//                 }   
//             }else{
//                 res.send(error.message);                         
//             }
//       })
//     },      
    
//      //注册成功，添加进数据库
//      getRegesterAdd(req,res){
//         console.log("注册成功"); 
//         let username = req.body.username; 
//         console.log(username);   
//         let pwd = req.body.pwd;  
//         found.connect("INSERT INTO users VALUES(?,?,?,?,?)",[null,username,pwd,"游客","游客"],(error,data)=>{
//             if(error){
//                 res.send("添加失败"+error.message);     
//             }else{
//                 // res.send("添加成功");   
//                 //封装函数
//                 // function showMessage(message,res){
//                 //     var result=`<script>confirm('${message}');history.back()</script>`;
//                 //     res.send(result);
//                 //     if(result==true){                 
//                 //         res.redirect("login.html");   
//                 //     }
//                 // }
//                 // //调用
//                 // showMessage("登录成功",res); 
//                 res.redirect("login.html");                     
//             }   
//         })
//         },      
       
  

//     //函数定义班级方法
//     getClassAll(req,res){
//         console.log(req.query.thisPage);
//         let pageCount=2;//每页展示3条信息
//         let thisPage=req.query.thisPage;//当前在第几页

//         /*
//         *
//         * limit 0,3   -------1页
//         * limit 3,3   -------2页
//         * limit 6,3   -------3页
//         *
//         *
//         * （currentPage-1）*pageCount
//         * */


//         let sql="select * from ClassName limit ?,?";
//         /**/
//         found.connect(sql,[(thisPage-1)*pageCount,pageCount],(err,data)=>{  
//             res.send(data);        
//         })  
//     },

//     //分页
//     getPage(req,res){
//          //每页展示的信息数量       
//          let pageCount=2;
//          found.connect("select count(*) as totalcount from ClassName",[],(err,data)=>{
//              // console.log(data[0].totalcount);
//              //总共有多少页
//              let result=Math.ceil(data[0].totalcount/pageCount);//Math.ceil 向上取整
//              result=String(result);
//             // console.log(result);
//              res.send(result);               
//          })           
//     },

//     //删除班级
//     getDelete(req,res){
//         let id = req.query.ID;
//         console.log(id);
//         userDao.getDeleteDao([id]).then((data)=>{ 
//             res.send(data);
//         })
//         .catch((error)=>{
//             res.send(error);  
//         })
        
//     },  

//     //修改查询班级
//     getUpdate(req,res){
//         let id = req.query.ID;
//         userDao.getUserDao([id],function(data,error){
//             if(error== null){
//                 res.send(data); 
//             }
//         })
//     },
//     //修改查询到的班级数据
//     getUpdate2(req,res){
//         let ID = req.query.ID11;
//         let nianji = req.query.nianji;
//         let KName = req.query.KName;
//         let ZName = req.query.ZName;            
//         let BName = req.query.BName;        
//         let PName = req.query.PName;
//         let TName = req.query.TName;
//         let sum = req.query.sum;
//         console.log(ID);
//         // console.log(PName) 
//         userDao.getUserDao1([nianji,KName,ZName,BName,PName,TName,sum,ID],function(data,error){
//             if(data!=null){
//                 res.send(data);      
//             }
//         });
//     },


//     //新增
//     // getAdd(req,res){
//     //     found.connect("select * from ClassName",[null],(error,data)=>{
//     //         if(!error){
//     //             res.send(data);             
//     //         }
//     //     })
//     // },
//     getAdd2(req,res){
//         let ID = req.query.ID;  
//         let nianji = req.query.nianji;
//         let KName = req.query.KName;
//         let ZName = req.query.ZName;
//         let BName = req.query.BName;
//         let PName = req.query.PName;    
//         let TName = req.query.TName;
//         let sum = req.query.sum;
//         console.log(nianji);
//         // console.log(PName)
//         userDao.getUserDao3([null,nianji,KName,ZName,BName,PName,TName,sum],function(error,data){
//                 if(error==null){
//                     res.send(data);
//                 }
//         })
//     },
    

//     //条件查询
//     getSelectId(req,res){
//         let nianji = req.body.chaxun || "";
//         let KName = req.body.chaxun1 || ""; 
//         // console.log(Kname);
//         let ZName = req.body.chaxun2 || "";   
//         //定义一个空数组
//         let arry = [];
//         let sql = "select * from ClassName where 1=1 ";   
//         if(nianji!=""){
//             sql = sql + "and nianji like ?"; 
//             nianji = "%"+nianji+"%";
//             arry.push(nianji);                             
//         }
//         if(KName!=""){          
//             sql += "and KName like ?";  
//             KName = "%"+KName+"%";
//             arry.push(KName);
//             console.log(sql);                  
//         }   
//         if(ZName!=""){          
//             sql += "and ZName like ?"; 
//             ZName = "%"+ZName+"%";
//             arry.push(ZName);                                   
//             console.log(sql);                  
//         }
        
//         found.connect(sql,arry,(error,data)=>{                          
//             if(error==null){                        
//                 res.send(data);                   
//                 console.log(data);                             
//             }   
//         });
//     },
    
//     //ejs
//     getEjs(req,res){
//         let type = req.query.mytype; 
//         let su = req.query.su;
//         userDao.getBanjiEjs([type]).then(function(data){  
//             res.render("intro",{mydata:data});  
//         })  
//     },

//     //ejs删除
//     getShanchu(req,res){
//         let shanchu = req.query.ID;
//         console.log(shanchu); 
//         userDao.getshanchuEjs([shanchu]).then(function(data){
//             // res.render("intro",{mydata:data});  
//             // console.log(data); 
//             // res.redirect("ejs.html");
//             usercontroller.getEjs; 
//         })  
//     },

//       //函数方法定义getUser()
//       getUser(req,res){     
//         console.log("进入方法");
//         let username = req.body.username;
//         let pwd = req.body.pwd;
//         // //创建连接对象   
//         // const db = database.dbconfig();   
//         //2.数据库连接
//         userDao.getUserLogin([username,pwd]).then((data)=>{
//             if(data.length<=0){
//                 res.redirect("login.html");
//             }else{
//                 req.session.username=data[0].username;
//                 res.render("intro",{username:data[0].username});           
//             }

//         })  
//         //3.发起sql请求，db.query(1.sql语句 2.sql参数是数组，3.回调函数)
//         // db.query("SELECT * FROM users WHERE username=? AND pwd=?",[username,pwd],(error,data)=>{
//         //     console.log(error);
//         //     console.log(data);
//         //     if(error==null && data!=undefined){  
//         //         if(data.length>0){ 
//         //             //重定向
//         //             res.redirect("banji.html");
//         //         }else{
//         //             res.send("登陆失败");  
//         //         }   
//         //     }else{
//         //         res.send("数据库报错"+error.message); 
//         //     } 
//         // }); 
//     },

//     //班级
//     getBanjiL(req,res,next){
//         console.log("1111"+req.session.username);   
//         let userN = req.session.username;          
//         console.log("userN"+userN); 
//         if(userN==undefined || userN==null){    
//             res.redirect("login.html");        
//         }else{
//             next();            
//         }
//     },
        
//     //清除
//     getDeleteUser(req,resp){    
//          req.session.destroy(); 
//          resp.redirect("login.html");                      
//     },


//     //canvas图片上传,裁剪
//     getUpload2(req,res){
//         let imgData=req.body.imgData;    //base64
//         let base64Data= imgData.replace(/data:image\/png;base64,/,"");   //替换空格，
//         let dataBuffer=Buffer.from(base64Data,"base64");   // Buffer.from(读取的数据，“字符编码”) 
//         let random = Math.ceil(Math.random()*10000+100)+"_su.png";    //截图名称
//         console.log(fs);
//         fs.writeFile("public/Img/"+random,dataBuffer,function (err) {
//             if(err){
//                res.send(err.message);    
//             }else{
//                 res.send("添加成功");                     
//             }
//         })  
//     }       

    //地图
    map(req,res){
        let name = req.query.name;      
        userDao.getMapDao([name]).then((data)=>{
            res.send(data);
        })
        .catch((error)=>{         
            res.send(error);  
        })
    },  

    //热门资讯id
    hotnews(req,res){
        let id = req.query.id;      
        console.log(id);
        userDao.getDaonews([id]).then((data)=>{
            res.send(data);     
            console.log(data);                
        })
        .catch((error)=>{         
            res.send(error);  
        })
    },  
    //热门资讯全部
    hotnews1(req,res){
        userDao.getDaonews1().then((data)=>{
            res.send(data);
        })
        .catch((error)=>{         
            res.send(error);  
        })
    },  

    //热点分类查询全部
    newsClass(req,res){
        userDao.getDaoAllClass().then((data)=>{
            res.send(data);      
        })
        .catch((error)=>{         
            res.send(error);  
        })
    },  

    //热点分类单独查询
    newclass1(req,res){
        let id = req.query.id;      
        console.log(id);
        userDao.getDaoClassID([id]).then((data)=>{
            res.send(data);     
            console.log(data);                
        })  
        .catch((error)=>{           
            res.send(error);         
        })
    },  
}         

//公共对象调用
module.exports=usercontroller;             