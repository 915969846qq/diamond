const express = require("express");

//引用上传
// const onloadcontroller = require("../controller/onloadcontroller"); 
// const upload = require("../config/unloadpool");   


//引入模块Usercontroller
const usercontroller = require("../controller/Usercontroller");             

// const regestercontroller = require("../controller/regesterAdd"); 

//引入模块
// const textcontroller = require("../controller/textcontroller");                               

const router = express.Router(); //调用express对象的方法来获取路由对象      
//服务器传过来的请求有get/post/put/delete

//路由需要做的事情：1.拦截请求，判断请求类型是哪一种 2.进行任务分发 
//router.get/post(1.拦截地址，2.回调函数)

//端午作业注册登陆
// router.post("/registerText.do",textcontroller.getRegester); 
// router.get("/regestTextAdd.do",textcontroller.getRegesterAdd);  
// router.post("/regestTextLogin.do",textcontroller.getUser);        

//拦截注册
// router.post("/regest1.do",usercontroller.getRegester);           
// router.post("/regest.do",usercontroller.getRegesterAdd);                
// router.post("/login.do",usercontroller.getUser);             

//注册新增成功
// router.post("/regest.do",usercontroller.getRegester);     

//页面加载班级数据
// router.get("/banji-Ajax.do",usercontroller.getClassAll); 

//分页
// router.get("/banjiPage.do",usercontroller.getPage);

//删除
// router.get("/banjiDelete.do",usercontroller.getDelete);

//修改查询
// router.get("/banjiUpdate.do",usercontroller.getUpdate);  
//修改查询的数据
// router.get("/banjiUpdate2.do",usercontroller.getUpdate2);   


//新增
// router.get("/banjiAdd.do",usercontroller.getAdd);
// router.get("/banjiAdd2.do",usercontroller.getAdd2);

//条件查询
// router.post("/select.do",usercontroller.getSelectId);

//ejs
// router.get("/page.do",usercontroller.getEjs);    
//ejs删除
// router.get("/shanchu.do",usercontroller.getShanchu);          

//上传下载
// router.post("/upload.do",upload.single("myfile"),onloadcontroller.getOnload); 
//查找
// router.get("/Pictrue.do",onloadcontroller.getPictrue);                     
//文件下载 (第1个是路径文件，第2个是保存的名字)
// router.get("/dwload.do",function(req,res){  
//     res.download("./public/upload/401-137.jpg","401.138.jpg");    
// })

// router.get("/banji-Ajax.html",usercontroller.getBanjiL);            
//清除
// router.get("/deleteUser.do",usercontroller.getDeleteUser);      

//canvas图片
// router.post("/upload2.do",usercontroller.getUpload2);


//vue
router.get("/map.do",usercontroller.map);
//热门资讯
//全部差
router.get("/hotnews1.do",usercontroller.hotnews1);
//id查
router.get("/hotnews.do",usercontroller.hotnews);
//分类
//全部查
router.get("/newsClass.do",usercontroller.newsClass);
//单独查
router.get("/newclass1.do",usercontroller.newclass1);
//vue 

// router.get("/detaile.do",(req,res)=>{ 
//     let id = req.query.id;
//     console.log(typeof id)
//     let data = [
//         {id:1,name:'产品1',img:'images/1.jpg',sub:'产品副标题1',price:30,content:'产品1详情文字'},
//         {id:2,name:'产品2',img:'images/2.jpg',sub:'产品副标题2',price:30,content:'产品2详情文字'},
//         {id:3,name:'产品3',img:'images/3.jpg',sub:'产品副标题3',price:30,content:'产品3详情文字'},
//         {id:4,name:'产品4',img:'images/4.jpg',sub:'产品副标题4',price:30,content:'产品4详情文字'},
//         {id:5,name:'产品5',img:'images/5.jpg',sub:'产品副标题5',price:30,content:'产品5详情文字'},
//         {id:6,name:'产品6',img:'images/6.jpg',sub:'产品副标题6',price:30,content:'产品6详情文字'},
//         {id:6,name:'产品7',img:'images/6.jpg',sub:'产品副标题6',price:30,content:'产品6详情文字'},
//         {id:6,name:'产品8',img:'images/6.jpg',sub:'产品副标题6',price:30,content:'产品6详情文字'}
//       ]
//       //传参 res.send(data[req.query.id-1]);    
//       res.send(data[id]);                     
// })



//路由公开
module.exports=router;          