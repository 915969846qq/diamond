<template>
<div>
  <el-row>
    <el-col :span="22" :offset="1" class="canshu">
      <div class="productdetailbuy-canshu" style="display: block;">
        <dl class="productdetailbuy-canshu-page">
          <dt><span>货号</span><span>材质</span><span>手寸</span><span>证书</span></dt>
          <dd><span>{{$store.state.wedding.productbuy.productnum}}</span>
            <span>{{$store.state.wedding.productbuy.materialdetail}}</span>
            <span>{{$store.state.wedding.productbuy.palmsize}}</span>
            <span>{{$store.state.wedding.productbuy.certificate}}</span>
          </dd>
        </dl>
        <dl class="productdetailbuy-canshu-page">
          <dt><span>主钻重量</span><span>副钻重量</span><span>颜色</span><span>净度</span><span>切工</span></dt>
          <dd><span>{{$store.state.wedding.productbuy.mainweight}}</span>
            <span>{{$store.state.wedding.productbuy.assistweight}}</span>
            <span>{{$store.state.wedding.productbuy.color}}</span>
            <span>{{$store.state.wedding.productbuy.pure}}</span>
            <span>{{$store.state.wedding.productbuy.cutgrade}}</span>
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
.canshu{
  padding-top: 30px;
  line-height: 30px;
}
dl{
  margin-bottom: 30px;
}
  dt{
    background-color: #f5f7f6;
  }
  dd,dt{
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
