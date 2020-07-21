//引用连接池
const db=require("../config/dbpoolconfig");

//接收上级命令参数并且执行
const userController={
    // 婚戒产品搜索页
    getproduct(req,resp){
            let mysql;
            if(JSON.stringify(req.body)=='{}'){
                mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid  WHERE 1=1"
            }else{ let m="";
            for(let key in req.body){
              m+=key+"="+JSON.stringify(req.body[key])+" and "
            }
            m=m.substring(0,m.length-5)
            mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid WHERE "+m+""
           console.log(mysql)
            }
        //创建连接并且连接数据池
        //用户输入数据与数据库的数据进行查询匹配
        db.connect(mysql,[],(err,data)=>{
            if(err==null&&data!=undefined){
                if(data.length>0){
                   resp.send(data)
                }else{
                   resp.send("0")
                }}})
    },
   // 婚戒购买页面
productbuy(req,resp){
      let  productbuyid=req.body.id;
  let  mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid WHERE id=?"
    db.connect(mysql,[productbuyid],(err,data)=>{
        if(err==null&&data!=undefined){
            if(data.length>0){
                resp.send(data)
            }else{
                resp.send("0")
            }}})
},
    // 更多同类商品
    getmoreproduct(req,resp){
        let  myweddingnameid=req.body.myweddingnameid;
        console.log( myweddingnameid)
        let  mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid WHERE weddingnameid=?"
        db.connect(mysql,[myweddingnameid],(err,data)=>{
            if(err==null&&data!=undefined){
                if(data.length>0){
                    resp.send(data)
                }else{
                    resp.send(data)
                }}})
    },





    // 婚戒排序
    orderproduct(req,resp){
        console.log(req.body.my);
        let mysqlcanshu=req.body.my[0]
        let myarr=req.body.my[1]
        let mysql;
        if(JSON.stringify(req.body.my[0])=='{}'){
            mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid  WHERE 1=1 order by "+myarr
        }else{
            let m="";
            for(let key in mysqlcanshu){
                m+=key+"="+JSON.stringify(mysqlcanshu[key])+" and "
            }
            m=m.substring(0,m.length-5)
            mysql="SELECT * FROM wedding_ring LEFT JOIN weddingring_class ON wedding_ring.weddingnameid=weddingring_class.wedclassid WHERE "+m+" oder by "+myarr
            console.log(mysql)
        }
        //创建连接并且连接数据池
        //用户输入数据与数据库的数据进行查询匹配
        db.connect(mysql,[],(err,data)=>{
            if(err==null&&data!=undefined){
                if(data.length>0){
                    resp.send(data)
                }else{
                    resp.send("0")
                }}})
    }
}
module.exports=userController;