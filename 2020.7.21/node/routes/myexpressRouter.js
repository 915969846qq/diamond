const express = require("express")


const router = express.Router();//调用express对象的路由方法来获取路由对象
//引入controller

const diamondsController = require("../controller/diamondsController")

const diamondsuser = require("../controller/diamondsuser")




/*get post put delete

路由需要做的事：
1.拦截请求-判断请求的类型是哪一种
router.get/post(1.拦截地址，2.回调函数-拦截成功后要做什么)


2.任务分发


*/

//拦截
// router.post("/upload.do",upload.single('upload'),fileController.upload)


router.get('/getall.do',diamondsController.getall)

router.get('/searchgoods.do',diamondsController.searchgoods)

router.get("/getnum.do",diamondsController.getallnum)

router.get("/varieties.do",diamondsController.getvarieties)

router.post("/login.do",diamondsuser.login)

router.get("/verification.do",diamondsuser.verification)


router.get("/myregister.do",diamondsuser.register)




module.exports=router