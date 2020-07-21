const db=require("../config/dbpoolconfig");


const diamondsuser = {
    login(req,res){
        console.log(req.body)
        let username = req.body.username
        let password = req.body.password
        db.connect("select * from t_user where username = ? and password = ?",[username,password],(err,data)=>{
            console.log(data)
            console.log('-----------------')
            console.log(err)
            if(data.length == 0 ){
                res.send('err')
            }else{
                res.send(data)
            }
        })
    },


    verification(req,res){
        console.log(req.query.phone)
        db.connect("select * from t_user where username = ?",[parseInt(req.query.phone)],(err,data)=>{
            if(data.length != 0){
                res.send('existence')
            }else{
                res.send("nonexistent")
            }
            console.log(data)
            console.log(err)
        })
    },



    register(req,res){
        console.log(req.query)

        db.connect("INSERT INTO t_user VALUES(null,?,?,NULL,NULL,NULL,NULL,NULL)",[req.query.username,req.query.password],(err,data)=>{
            console.log(data)
            console.log(err)
            if(err == null && data != undefined){
                res.send('注册成功')
            }else{
                res.send("注册失败")
            }
        })
    }
}



module.exports = diamondsuser