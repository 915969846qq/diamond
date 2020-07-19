const express=require("express");
const path=require("path");
const { response } = require("express");
//引入自己的模块userController
const my_controller=require('../controller/my_controller')
const Diamond_controller = require('../controller/Diamond_controller')
const abstain_Diamond = require("../controller/abstain_contorller")

const router=express.Router();//调用express对象的路由方法来获取路由对象

//=================axios====================
// 预约
router.get('/myappointment.do',my_controller.myappointment);
// 我的订单
router.get('/myorder.do',my_controller.myorder);
// 我的积分
router.get('/myintegral.do',my_controller.myintegral);
// 获取总积分
router.get('/allintegral.do',my_controller.allintegral)
// 我的礼券
router.get('/mycertificate.do',my_controller.mycertificate)
// 我的礼品
router.get('/mygift.do',my_controller.mygift)


// 获取钻石页面需要的数据
router.get('/my_Diamond.do',Diamond_controller.my_Diamond);

// 获取对戒页面需要的信息
router.get('/to_abstain.do',abstain_Diamond.abstain_Diamond);

// 对戒页面
router.post('/getproduct.do',abstain_Diamond.someproduct);





module.exports=router;