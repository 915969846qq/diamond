const dao = require('../dao/my_dao')

const myOrder = {
  // 用户信息
  user(require, response) {
    console.log('获取用户信息++++++++++++++++++++')
    let username = require.body.username
    let arr = []
    arr.push(username)
    console.log(arr)
    dao.myuser(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回用户的data======================')
      response.send(data)
    })
  },
  // 全部预约
  myappointment(require, response) {
    console.log('进入myappointment，获取数据库数据')
    let myappointment_state = require.query.myappointment_state
    let arr = []
    arr.push(myappointment_state)
    if (arr[0] != undefined) {
      dao.myappointments(arr).then((data) => {
        // console.log(data);
        console.log('现在需要返回data')
        response.send(data)
      })
    } else {
      dao.myappointment(arr).then((data) => {
        // console.log(data);
        console.log('现在需要返回data')
        response.send(data)
      })
    }
  },

  // 我的订单
  myorder(require, response) {
    console.log('进入order，获取数据库数据')
    let arr = []
    dao.myorder(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回订单的data')
      response.send(data)
    })
  },
  // 我的积分
  myintegral(require, response) {
    console.log('进入myintegral，获取数据库数据')
    let myintegral_myclass = require.query.myintegral_myclass
    let arr = []
    arr.push(myintegral_myclass)
    dao.myintegral(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回订单的data')
      response.send(data)
    })
  },
  // 获取总积分
  allintegral(require, response) {
    console.log('进入allintegral，获取数据库数据')
    let arr = []
    dao.allintegral(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回订单的data')
      response.send(data)
    })
  },
  // 我的礼券
  mycertificate(require, response) {
    console.log('进入mycertificate，获取数据库数据')
    let code_state = require.query.code_state
    let arr = []
    arr.push(code_state)
    dao.mycertificate(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回订单的data')
      response.send(data)
    })
  },
  // 我的礼品
  mygift(require, response) {
    console.log('进入mygift，获取数据库数据')
    let arr = []
    dao.mygift(arr).then((data) => {
      // console.log(data);
      console.log('现在需要返回礼品的data')
      response.send(data)
    })
  },
  // 添加订单
  addOrder(require, response) {
    console.log('获取订单数据')
    let username = require.body.username
    let arr = []
  },
}

module.exports = myOrder
