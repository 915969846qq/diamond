

import finediamond from '@/components/Team/fine-diamond'
import news from '@/components/Team/hot-news'
import diamondicon from '@/components/Team/diamond-icon'




export default[    
  // {
  //   path:'/',     
  //   name:'tuijian',
  //   component:tuijian       
  // },
  {
    // path:'/series',     
    // name:'series',
    // component:series,
    // children:[
    //   {
    //     path:'/series/tuijian',
    //     name:'tuijian',               
    //     component:tuijian
    //     },
    // ]
    // path:'/series',     
    // name:'series',
    // component:series,
    // redirect:'/series/tuijian',
    // children:[
    //   {
    //     path:'/series/tuijian',
    //     name:'tuijian',
    //     component:tuijian,
    //   },
    //   {
    //     path:'/series/zuanshi1',     
    //     name:'zuanshi1',
    //     component:zuanshi1      
    //   },
    //   {
    //     path:'/series/hunjie',     
    //     name:'hunjie',
    //     component:hunjie      
    //   },
    //   {
    //     path:'/series/duijie',              
    //     name:'duijie',
    //     component:duijie      
    //   },
    //   {
    //     path:'/series/peishi',     
    //     name:'peishi',
    //     component:peishi      
    //   },
    // ]
  }
  ,
  {
    path:'/finediamond',      
    name:'finediamond',       
    component:finediamond     
  },
  {
    path:'/news',     
    name:'news',          
    component:news,
  },
  {
    path:'/diamondicon',     
    name:'diamondicon',          
    component:diamondicon
  },
 
]