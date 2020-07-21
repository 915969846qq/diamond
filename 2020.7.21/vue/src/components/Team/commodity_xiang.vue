<template>
<!-- 对戒详情图片内容 -->
  <div class=''>
    <div class="myimgs" v-for="img in img" :key="img.num">
      <span>{{img.imgser}}</span>
      <img :src="'/api/images/'+img.imgsrc+img.num+'.jpg'" alt="">
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name: '',
data() {
//这里存放数据
return {
  img:[
  ]
};
},
//监听属性 类似于data概念
computed: {
  // ...mapGetters(['myimg'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
created:function(){
  console.log(this.$store.getters.myimg);
  this.img=this.$store.getters.myimg;
}
}
</script>
<style scoped>
.myimgs{
  width: 900px;
  margin: 0 auto;
}
.myimgs img{
  width: 100%;
}
</style>