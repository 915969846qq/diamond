<template>
<div>
  <el-row>
    <el-col :span="22" :offset="1" class="canshu">
      <div class="productdetailbuy-canshu" style="display: block;">
        <dl class="productdetailbuy-canshu-page">
          <dd class="title">男款信息</dd>
          <dt><span>货号</span><span>总钻石重量</span><span>证书</span><span>PT900金重</span><span>18K金重</span><span>pt950金重</span></dt>
          <dd><span>{{$store.state.Abstain.product[0].b_name}}</span>
            <span>{{$store.state.Abstain.product[0].Vice_heavy}}</span>
            <span>{{$store.state.Abstain.product[0].b_certificate}}</span>
            <span>{{$store.state.Abstain.product[0].b_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].b_18K}}</span>
            <span>{{$store.state.Abstain.product[0].b_pt950}}</span>
          </dd>
        </dl>
        <dl class="productdetailbuy-canshu-page">
          <dd class="title">钻石信息</dd>
          <dt><span>主钻重量</span><span>参考颜色</span><span>参考净度</span><span>参考切工</span></dt>
          <dd><span>{{$store.state.Abstain.product[0].Vice_heavy}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].Diamonds_cut}}</span>
          </dd>
        </dl>
        <dl class="productdetailbuy-canshu-page">
          <dd class="title">女款信息</dd>
          <dt><span>货号</span><span>总钻石重量</span><span>证书</span><span>PT900金重</span><span>18K金重</span><span>pt950金重</span></dt>
          <dd><span>{{$store.state.Abstain.product[0].g_name}}</span>
            <span>{{$store.state.Abstain.product[0].main_heavy}}</span>
            <span>{{$store.state.Abstain.product[0].b_certificate}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].g_18K}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt950}}</span>
          </dd>
        </dl>
        <dl class="productdetailbuy-canshu-page">
          <dd class="title">钻石信息</dd>
          <dt><span>主钻重量</span><span>参考颜色</span><span>参考净度</span><span>参考切工</span></dt>
          <dd><span>{{$store.state.Abstain.product[0].Vice_heavy}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].g_pt900}}</span>
            <span>{{$store.state.Abstain.product[0].Diamonds_cut}}</span>
          </dd>
        </dl>
        <i class="u_but_tips">温馨提示：展示图片仅供参考，产品请以实物为准</i>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
    export default {
        name: 'canshu',
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
.title{
  font-size: 16px;
}
.canshu{
  padding-top: 50px;
  line-height: 30px;
}
dl{
  margin-bottom: 30px;
}
  dt{
    background-color: #f5f7f6;
  }
  dd,dt{
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: center;
  }
  span{
    display: inline-block;
    width: 13%;

    text-align: center;
  }
  dt span{
    color: #909090;
  }
</style>
