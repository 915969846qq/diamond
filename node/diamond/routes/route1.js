//第一步,引入框架
const express=require("express");
const path=require("path")

const chenmingController=require("../controller/chenmingController")

//调用express的路由方法来获取路由对象
const router=express.Router();


router.post("/getproductchen.do",chenmingController.getproduct)
router.post("/productbuy",chenmingController.productbuy)
router.post("/orderproduct.do",chenmingController.orderproduct)
router.post("/getmoreproduct.do",chenmingController.getmoreproduct)



module.exports=router;