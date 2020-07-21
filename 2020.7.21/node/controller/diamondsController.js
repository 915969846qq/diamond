const db=require("../config/dbpoolconfig");

const diamondsController = {
    getall(req,res){
        db.connect("select * from my_diamond where 1 = 1 ",(err,data)=>{
            res.send(data)
        })
    },
    searchgoods(req,res){
        let where = 'where '
        let shuju = []
        // console.log(req.query.weight)
        for(var i in req.query){
            console.log(i)
            if(i == 'weight' || i == 'diamondprice'){
                where += i +" between ? and ? and "
                shuju.push(req.query[i][0])
                shuju.push(req.query[i][1])
            }else{
                where+=i + "= ? and "
                shuju.push(req.query[i])
            }
            // console.log(req.query[i])
            
             
        }
        // console.log(where)
        // console.log(shuju)

        // let newwhere = where.split('?')
        
        var newwhere = where.substring(0,where.length-4);
        console.log(newwhere)
        // console.log(shuju)
        db.connect("select * from my_diamond "+newwhere,shuju,(err,data)=>{
            if(data != undefined){
                res.send(data)
            }else{
                res.send("null")
            }
        })

        
    },

    getallnum(req,res){
        db.connect("SELECT COUNT(*) as num FROM my_diamond ",(err,data)=>{
            res.send(data)
        })
    },


    getvarieties(req,res){
        console.log(req.query)
        for(var i in req.query){
            // console.log(req.query[i])
        }
        console.log(req.query[i])
        if(req.query[i] == "3EX"){
            db.connect("select * from my_diamond m,t3ex t where m.diamondId=t.diamondId",(err,data)=>{
                res.send(data)
            })
        }else if(req.query[i] == "北极光"){
            db.connect("select * from my_diamond m,northern_lights t where m.diamondId=t.diamondId",(err,data)=>{
                res.send(data)
            })
        }else{
            db.connect("select * from my_diamond m,clarke_diamond t where m.diamondId=t.diamondId",(err,data)=>{
                res.send(data)
            })
        }
    }
}





module.exports = diamondsController