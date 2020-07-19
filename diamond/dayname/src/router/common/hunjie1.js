import productPara from '@/components/Team/hunjie/product-parameters'
import afterSale from '@/components/Team/hunjie/after-sale'
import checkAll from '@/components/Team/hunjie/checkAll'
import jingmei from '@/components/Team/hunjie/jingmei'
import quanwei from '@/components/Team/hunjie/quanwei'
import tiexin from '@/components/Team/hunjie/tiexin'

export default[ 
    {
        path:'/productPara',     
        name:'productPara',
        component:productPara     
    },
    {
        path:'/afterSale',                  
        name:'afterSale',               
        component:afterSale     
    },
    {
        path:'/checkAll',                  
        name:'checkAll',
        component:checkAll,
        redirect:'/checkAll/jingmei',
        children:[
            {
                path:'/checkAll/jingmei',                  
                name:'jingmei',
                component:jingmei     
            },
            {
                path:'/checkAll/quanwei',                  
                name:'quanwei',
                component:quanwei     
            },
            {
                path:'/checkAll/tiexin',                  
                name:'tiexin',
                component:tiexin     
            }
        ]     
    },
   
]