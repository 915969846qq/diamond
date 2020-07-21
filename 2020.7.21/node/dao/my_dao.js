const mysql = require('mysql')

const qb = require('../config/dpconfig')

const order_dao = {
  // 用户信息
  myuser(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect(
        'SELECT * FROM allinfo JOIN t_user ON t_user.id=allinfo.user_id JOIN myappointment ON myappointment.myappointment_id=allinfo.appointment_id JOIN myorder ON myorder.myorders_id=allinfo.order_id JOIN myintegral ON myintegral.myintegral_id=allinfo.integral_id JOIN mycertificate ON mycertificate.mycertificate_id=allinfo.certificate_id JOIN mygift ON mygift.mygift_id=allinfo.gift_id WHERE username=?',
        params,
        (error, data) => {
          console.log('进入myuser')
          console.log(data)
          if (!error) {
            // console.log(data)
            resolve(data)
          }
        }
      )
    })
  },
  // 我的预约
  myappointment(params) {
    return new Promise((resolve, reject) => {
      qb.connect('SELECT * FROM myappointment', params, (error, data) => {
        console.log('进入order_dao')
        // console.log(data);
        if (!error) {
          // console.log(data)
          resolve(data)
        }
      })
    })
  },
  myappointments(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect(
        'SELECT * FROM myappointment WHERE myappointment_state=?',
        params,
        (error, data) => {
          console.log('进入myappointments')
          if (!error) {
            // console.log(data)
            resolve(data)
          }
        }
      )
    })
  },
  // 我的订单
  myorder(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect('SELECT * FROM myorder', params, (error, data) => {
        console.log('进入myorder')
        if (!error) {
          // console.log(data)
          resolve(data)
        }
      })
    })
  },
  // 我的积分
  myintegral(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect(
        'SELECT * FROM myintegral WHERE myintegral_myclass=?',
        params,
        (error, data) => {
          console.log('进入myintegral')
          if (!error) {
            // console.log(data)
            resolve(data)
          }
        }
      )
    })
  },
  // 获取总积分
  allintegral(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect(
        'SELECT SUM(myintegral_number) AS mycount FROM myintegral',
        params,
        (error, data) => {
          console.log('进入allintegral')
          if (!error) {
            // console.log(data);
            resolve(data)
          }
        }
      )
    })
  },
  // 我的礼券
  mycertificate(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect(
        'SELECT * FROM mycertificate WHERE code_state=?',
        params,
        (error, data) => {
          console.log('进入mycertificate')
          if (!error) {
            // console.log(data)
            resolve(data)
          }
        }
      )
    })
  },
  // 我的订单
  mygift(params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      qb.connect('SELECT * FROM mygift', params, (error, data) => {
        console.log('进入mygift')
        if (!error) {
          resolve(data)
        }
      })
    })
  },
}

module.exports = order_dao
