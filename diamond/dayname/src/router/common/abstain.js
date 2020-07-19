import to_abstain from '@/components/to_abstain.vue';
import abstain_product from '@/components/Team/abstain_product.vue';
import productdetailbuycomponents from '@/components/productdetailbuycomponent.vue';

export default[
  {
  path:'/to_abstain',
    nmae:'to_abstain',
    component:to_abstain,
    children:[{
      path:"/",
      name:'abstain_product',
      component:abstain_product
    }]
  },
  {
    path:"/to_abstain/productdetailbuycomponents",
    name:'productdetailbuycomponents',
    component:productdetailbuycomponents
  }
  ]
