//连接数据库模块
const mysql=require("mysql");
const dbpool={
    pool:{},
    //数据池参数
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"diamond"
    },
    //创建连接池
    create(){
        console.log("连接")
        this.pool=mysql.createPool(this.config)
    },
    //接住参数的地方
   connect(sql,arr,fn){
       this.pool.getConnection((err,connection)=>{
               //数据库查询
               connection.query(sql,arr,fn);
               //关闭连接
               connection.release();
           }
       )
    }
};
dbpool.create();
module.exports=dbpool;