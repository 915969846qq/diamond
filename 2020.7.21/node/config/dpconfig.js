// 配置MySQL模块
const mysql=require("mysql");
// 设置数据池
const dpool={
//    创建数据池
    pool:{},
    // 配置连接
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"diamond"
    },
    // 创建连接池
    create(){
        this.pool=mysql.createPool(this.config);
    },
    // 连接数据库
    connect(sql,arr,func){
    // 获取连接,运行函数，查询传入数据是否符合
        this.pool.getConnection((err,connection)=>{
            // 查询传入数据
            connection.query(sql,arr,func);
            // 释放连接
            connection.release();
        })
    }
};


// 创建数据池连接,并一直运行
dpool.create();
// 公开数据池
module.exports=dpool;

