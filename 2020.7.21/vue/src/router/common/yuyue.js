import yuyue from '@/components/Team/yuyue'
import map1 from '@/components/Team/map'
import mycartinfo from '@/components/Team/mycartinfo'  
import  dingzhi from '@/components/Team/dingzhi'   
import  jiameng from '@/components/Team/jiameng'   
import  pinpai from '@/components/Team/pinpai'  
import login from '@/components/cx/login/login'
import register from '@/components/cx/login/register'
import diamouds from '@/components/cx/diamouds'
import diamondDetails from '@/components/cx/diamondDetails'
import addresscode from '@/components/Team/addresscode'

export default[                   
    {
      path:'/map1',        
      name:'map1',          
      component:map1,                       
      children:[
        {
          path:'/map1/yuyue',
          name:'yuyue',
          component:yuyue
          },
      ]
    },
    {
      path:'/mycartinfo',        
      name:'mycartinfo',        
      component:mycartinfo,       
    },
    {
      path:'/dingzhi',
      name:'dingzhi',
      component:dingzhi
    },
    {
      path:'/jiameng',
      name:'jiameng',
      component:jiameng
    },
    {
      path:'/pinpai',
      name:'pinpai',
      component:pinpai
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/diamouds',
      name:'diamouds',
      component:diamouds
    },
    {
      path:'/diamondDetails',
      name:'diamondDetails',
      component:diamondDetails
    },
    {
      path:'/addresscode',
      name:'addresscode',
      component:addresscode
    }
]