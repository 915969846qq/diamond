<template>
<div>

  <ul v-if="$store.state.wedding.moresameproduct.length>=1">
    <li v-for="(item,index) in $store.state.wedding.moresameproduct" :key="'more'+index">
      <router-link :to="{name:'productdetailbuy', query:{id:item.id}}" @click.native="reload">
        <span class="moresame-info">
          <span>材质:{{item.material}}</span>
          <span>主钻重 {{item.mainweight.substring(0,4)}}ct</span>
          <span>手寸 {{item.palmsize}}</span>
          <span>小鸟价 <span class="redprice">￥{{item.price}}</span></span>
        </span>
      <span class="moresame-chakan">立即查看</span>
      </router-link>

    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: 'moresameproduct',
        data: function () {
            return {}
        },
      created() {

      },
methods:{
         reload(){
           window.scrollTo(0,0)
         }
}
    }
</script>

<style scoped>
  li{
    list-style: none;
    line-height: 60px;
    background-color: #fbfbfb;
    margin-top: 20px;
    position: relative;
    padding-left: 20px;

  }
  .moresame-chakan{
    float: right;
    display: inline-block;
    width: 100px;
    background-color: #f3f3f4;
    text-align: center;
  }
  .moresame-chakan:hover{
    background-color: #ffd6d5;
  }

  a{
    color: #999;
  }
.moresame-info>span{
  display:inline-block;
  width: 10%;
  text-align: center;
  background-image: url("/api/images/style_list_line.png");
  background-repeat: no-repeat;
  background-position: right;
}
.redprice{
  color: #ff8a81;
  font-weight: bolder;
font-size: 14px;
}
</style>
