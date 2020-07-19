/* 引用连接池 */
const db=require("../config/dbpoolconfig");
const fs=require("fs")
//接收上级命令参数并且执行
const uploadController={
   uploadfile(req,resp){
       // console.log(req.file.path);
       console.log(req.file)
let pathname="uploads/"+req.file.filename;
let filename=(req.file.originalname).split(".")[0]
        //创建连接并且连接数据池
        //用户输入数据与数据库的数据进行查询匹配
        db.connect("insert into upload values(?,?,?)",[null,filename,pathname],(err,data)=>{
    if(!err){
       resp.send("上传成功")
    }else{
        console.log(err.message)
    }
        })
    },
    getimages(req,resp){
       db.connect("select uadress from upload ",[],(err,data)=>{
           if(!err){
               // console.log(data[data.length-1])
               resp.send(data[data.length-1])
           }
       })
    },
    uploadimg(req,res){
       let imgdata=req.body.imgData;
       let base64data=imgdata.replace(/data:image\/png;base64,/,"");
        let dataBuffer=Buffer.from(base64data,"base64");
        let filename=new Date().getTime()+"_small.png";
        fs.writeFile("public/uploads/"+filename,dataBuffer,function (err) {
            if(err){
                res.send(err);
            }else{
                res.send("保存成功")
            }
        })
    }
}
module.exports=uploadController;