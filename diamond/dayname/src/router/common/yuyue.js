import yuyue from '@/components/Team/yuyue'
import map1 from '@/components/Team/map'
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
    
      
    
   
]