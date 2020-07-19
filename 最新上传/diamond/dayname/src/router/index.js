import Vue from 'vue'
import Router from 'vue-router'
import chenming from './common/chenming'
import hunjie1 from './common/hunjie1'
import yuyue from './common/yuyue'
import newsson from './common/news'  
import hello from '../components/hello'
import abstain from './common/abstain'
import tuijian from '../components/Team/tuijian'   
import zuanshi1 from '../components/Team/zuanshi1'   
import hunjie from '../components/Team/hunjie'   
import duijie from '../components/Team/duijie'   
import peishi from  '../components/Team/peishi'
    
//处理路由重复问题       
const originalPush = Router.prototype.push
    Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({ 
    routes:[
        {
            path:"/",
            name:"hello",
            component:hello, 
            redirect:'tuijian',
            children:[
                {
                    path:'/tuijian',
                    name:'tuijian',
                    component:tuijian,
                  },
                  {
                    path:'/zuanshi1',     
                    name:'zuanshi1',
                    component:zuanshi1      
                  },
                  {
                    path:'/hunjie',     
                    name:'hunjie',
                    component:hunjie      
                  },
                  {
                    path:'/duijie',              
                    name:'duijie',
                    component:duijie      
                  },
                  {
                    path:'/peishi',     
                    name:'peishi',
                    component:peishi      
                  },
            ]             
         },
        ...tuijian,        //推荐      
        ...hunjie1,        //婚戒   
        ...yuyue,          //预约进店       
        ...newsson,        //热门资讯     
        ...abstain,       //对戒  
        ...chenming        //陈明的婚戒 
    ]
})
