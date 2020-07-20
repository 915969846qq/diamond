<template>
<div class="service-wrap">
  <div class="img">
   <img src="/api/images/service_big_img.jpg" alt="">
  </div>
  <dl class="f_cont_serv_txt">
    <dt><span class="iconfont icon-shijiantouxia"></span>优惠换款服务</dt>
    <dd><i>1. </i>会员可享受会员本人购买的30分以上产品优惠换款。换款时，新款式必须镶嵌原来产品的钻石。如果需要升级钻石，请参考以小换大的操作规则。</dd>
    <dd><i>2. </i>优惠换款时，新款空托在正价基础上，只享受会员折扣，不参加任何优惠活动。</dd>
    <dd><i>3. </i>换款时，原空托按原结算价格（即发票金额）的4折进行回收。</dd>
    <dd><i>4. </i>购买换款戒托可按钻石小鸟积分规则积分。</dd>
    <dd><i>5. </i>换款操作可以进行高级来图订制。</dd>
    <dd><i>6. </i>此项业务仅限在体验中心实施，优惠换款之前需对之前所购产品作鉴定检验。</dd>
    <dt>改款条件—本公司所售镶嵌饰品可改换款式</dt>
    <dd><i>1. </i>主石需30分以上方可改款。</dd>
    <dd><i>2. </i>凭相关鉴定证书、发票办理。</dd>
    <dd><i>3. </i>新换款的金托按照实际售价，仅需补新换款售价与原饰品金托回收价之间的差价。</dd>
    <dd><i>4. </i>改款后的产品在享受售后服务时需出示饰品证书、改款后的发票，以便进行核对。</dd>
  </dl>
</div>
</template>

<script>
    export default {
        name: '',
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
dt{
  color: #000;
  font-weight: bold;
  margin: 10px;
}
  dd{
    color: #666;
    line-height: 30px;
    padding-left: 30px;
  }
  .img{
    text-align: center;
  }
  .service-wrap{
    margin: 0 auto;
    width: 1021px;
    margin-bottom: 50px;
  }
i{
  font-style: normal;
  display: inline-block;
  margin-right: 10px;
}
</style>
