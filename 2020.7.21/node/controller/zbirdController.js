const zbirdconfig = require("../config/dbpoolconfig");
const zbirdController = {
  cartinfo(req, res) {
    zbirdconfig.connect("select * from gouwuche", (err, data) => {
      if (err == null) {
        // console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });


    // console.log("拦截到请求");
    // let data = [
    //   { id: 1, name: '产品1', img: 'images/1.jpg', sub: '产品副标题1', price: 30, content: '产品1详情文字' },
    //   { id: 2, name: '产品2', img: 'images/2.jpg', sub: '产品副标题2', price: 30, content: '产品2详情文字' },
    //   { id: 3, name: '产品3', img: 'images/3.jpg', sub: '产品副标题3', price: 30, content: '产品3详情文字' },
    // ];
    // resp.send(data);
  },
  gouwuche(req, res) {
    zbirdconfig.connect("select * from gouwuche", (err, data) => {
      if (err == null) {
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },
  // getuser(req,res){
  //   zbirdconfig.connect("select * from ausers where uid=1",(err,data)=>{
  //     if (err == null) {
  //       res.send(data);
  //     } else {
  //       res.send("输入错误，" + err.message);
  //     }
  //   });
  // },
  commentlimit(req,res){
    zbirdconfig.connect("SELECT ausers.realname,acomment.star,acomment.time,acomment.local,acomment.Ccommodity,acomment.Cservice,acomment.imgsrc FROM `acomment` left join ausers on acomment.Cuid=ausers.uid where Cuid=1 LIMIT 5",(err,data)=>{
      if (err == null) {
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },
    comments(req,res){
      zbirdconfig.connect("SELECT ausers.realname,acomment.star,acomment.time,acomment.local,acomment.Ccommodity,acomment.Cservice,acomment.imgsrc FROM `acomment` left join ausers on acomment.Cuid=ausers.uid where Cuid=1",(err,data)=>{
        if (err == null) {
          res.send(data);
        } else {
          res.send("输入错误，" + err.message);
        }
      });
  },
  salesroom(req, res) {
    zbirdconfig.connect("select * from salesroom", (err, data) => {
      if (err == null) {
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },

  // addtocart1(req,res){
  //   // console.log("cat");
  //   // console.log(req.body);
  //   // console.log(req.body.gname);
  //   // let gid='';
  //   let guid=1;
  //   let gname=req.body.gname;
  //   let gprice=req.body.gprice;
  //   console.log(req.body.gprice);
  //   let gsrc='http://img.zbird.cn/picdb/284/53/28453_6_.jpg';
  //   let gletteringinner=req.body.gletteringinner;
  //   let gLetteringtime=req.body.gLetteringtime;
  //   let handsize=req.body.handsize;
  //   let gnamenan=req.body.gnamenan;
  //   let gnamenv=req.body.gnamenv;
  //   let handsizenan=req.body.handsizenan;
  //   let handsizenv=req.body.handsizenv;
  //   // console.log(typeof gprice)
  //   zbirdconfig.connect("INSERT INTO gouwuche values(null,?,?,?,?,?,?,?,?,?,?,?)",[guid,gname,gprice,gsrc,gletteringinner,gLetteringtime,handsize,gnamenan,gnamenv,handsizenan,handsizenv], (err, data) => {
  //     if (err == null) {
  //       // console.log(data);
  //       res.send(data);
  //     } else {
  //       // console.log(1111111111111111);
  //       res.send("输入错误，" + err.message); 
  //     } 
  //   });
  // },

  addtocart1(req,res){
    console.log("11111")
    let guid=req.body.guid;
    let gname=req.body.gname;
    let gprice=req.body.gprice;
    let gsrc='http://img.zbird.cn/picdb/284/53/28453_6_.jpg';
    let gletteringinner=req.body.gletteringinner;
    let gLetteringtime=req.body.gLetteringtime;
    let gnamenan=req.body.gnamenan;
    let gnamenv=req.body.gnamenv;
    let handsizenan=req.body.handsizenan;
    let handsizenv=req.body.handsizenv;
    zbirdconfig.connect("insert into gouwuche values(null,?,?,?,?,?,?,?,?,?,?)",[guid,gname,gprice,gsrc,gletteringinner,gLetteringtime,gnamenan,gnamenv,handsizenan,handsizenv], (err, data) => {
      if (err == null) {
        console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },
  clear(req,res){
    zbirdconfig.connect("delete from gouwuche where true", (err, data) => {
      if (err == null) {
        // console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },  
  getnews(req, res) {
    zbirdconfig.connect("select * from news_dynamic limit 8", (err, data) => {
      if (err == null) {
        console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  },

  uporder(req,res){
    // console.log(req.body);
    // zbirdconfig.connect("insert into gouwuche values(null,?,?,?,?,?,?,?,?,?,?)", (err, data) => {
    //   if (err == null) {
    //     console.log(data);
    //     res.send(data);
    //   } else {
    //     res.send("输入错误，" + err.message);
    //   }
    // });
  },
  del(req,res){
    let id=req.body.data;
    // console.log(req);
    // console.log(id);
    zbirdconfig.connect("delete from gouwuche where gid=?",[id], (err, data) => {
      if (err == null) {
        // console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);   
      }
    });
  },
  upcomment(req,res){
    let Caid=1;
    let Cuid=1;
    let star=req.body.star;
    let time=req.body.time;
    let local="上海旗舰体验中心";
    let imgsrc="https://imc.zbird.cn/p1/M00/01/82/rBAAFFkT_YKAL4C8AACrv3fPNMM134!small.jpg,https://imc.zbird.cn/p1/M00/01/81/rBAAFFkRkvOAZUMXAAGth0bW25w708!small.jpg";
    let commodity=req.body.Ccommodity;
    let service=req.body.Cservice;
        zbirdconfig.connect("insert into acomment values(null,?,?,?,?,?,?,?,?)",[Caid,Cuid,commodity,service,star,time,local,imgsrc], (err, data) => {
      if (err == null) {
        // console.log(data);
        res.send(data);
      } else {
        res.send("输入错误，" + err.message);
      }
    });
  }

};
module.exports = zbirdController;