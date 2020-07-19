import wedding from "../../components/Team/hunjie/wedding";
import mymain from "../../components/Team/hunjie/main";
import weddingmain from "../../components/Team/hunjie/weddingmain";
import productdetailbuy from "../../components/Team/hunjie/productdetailbuy";
import weddingproduct from "../../components/Team/hunjie/hunjiecomponent/weddingproduct";
export default[
  {path:'/',
  name:'mymain',
  component:mymain
  },
  {
  path:'/wedding',
    name:'weddingmain',
    component:weddingmain,
    children:[
      {
        path:"/wedding",
        name:'wedding',
        component:wedding
      },
      {
      path:"/wedding/productdetailbuy",
      name:'productdetailbuy',
      component:productdetailbuy
    }]

  }
  ]
