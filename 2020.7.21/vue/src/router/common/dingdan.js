// import Vue from 'vue'
// import Router from 'vue-router'

import topheadr from '@/components/Team/topHeadr'
import footer from '@/components/Team/bottomfooter'
// import diamondP from '@/components/diamondParameters'
import comment from '@/components/Team/comment'
// import recommend from '@/components/recommend'
import mycart from '@/components/Team/myCart'
import mycartinfo from '@/components/Team/mycartinfo'
import myorder from '@/components/Team/myorder'
import orderBody from '@/components/Team/orderBody'
import free from '@/components/Team/free'
import self from '@/components/Team/self'
import allcomment from '@/components/Team/allcomment'
// Vue.use(Router)  

// export default new Router({
// routes: [
export default [
  {
    path: '/topheadr',
    name: 'topheadr',
    component: topheadr
  },
  {
    path: '/footer',
    name: 'footer',
    component: footer
  },
  // {
  //   path: '/diamondP',
  //   name: 'diamondP',
  //   component: diamondP
  // },
  {
    path: '/comment',
    name: 'comment',
    component: comment
  },
  // {
  //   path: '/recommend',
  //   name: 'recommend',
  //   component: recommend
  // },
  {
    path: '/mycart',
    name: 'mycart',
    component: mycart
  },
  {
    path: '/mycartinfo',
    name: 'mycartinfo',
    component: mycartinfo
  },
  {
    path: '/orderBody',
    name: 'orderBody',
    component: orderBody,
  },
  {
    path: '/self',
    name: 'self',
    component: self
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: myorder,
    children: [
      {
        path: '/order/free',
        name: 'free',
        component: free
      },
      {
        path: '/order/self',
        name: 'self',
        component: self
      },
    ]
  },
  {
    path: '/allcomment',
    name: 'allcomment',
    component: allcomment
  },
]
// })
