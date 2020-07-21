const express=require("express");
const path=require("path");

const zbirdController=require("../controller/zbirdController");

const router=express.Router();//调用express对象的路由方法来获取路由对象

router.get("/mycart.do",zbirdController.cartinfo);
router.get("/toptop.do",zbirdController.gouwuche);
router.get("/commentlimit.do",zbirdController.commentlimit);
router.get("/comments.do",zbirdController.comments);
router.post("/upcomment.do",zbirdController.upcomment);
router.get("/salesroom.do",zbirdController.salesroom);
router.get("/news.do",zbirdController.getnews);
router.post("/del.do",zbirdController.del);
router.post("/addtocart1.do",zbirdController.addtocart1);
router.post("/clear.do",zbirdController.clear);
router.post("/uporder.do",zbirdController.uporder);
// router.post("/upcomment.do",zbirdController.upcomment);          
// router.get("/getuser.do",zbirdController.getuser);
// router.get("/mycart.do",function(req,resp){
//   console.log("拦截到请求");
//   let data= [
//       {id:1,name:'产品1',img:'images/1.jpg',sub:'产品副标题1',price:30,content:'产品1详情文字'},
//       {id:2,name:'产品2',img:'images/2.jpg',sub:'产品副标题2',price:30,content:'产品2详情文字'},
//       {id:3,name:'产品3',img:'images/3.jpg',sub:'产品副标题3',price:30,content:'产品3详情文字'},
//   ];
//   resp.send(data);
// });
module.exports=router;