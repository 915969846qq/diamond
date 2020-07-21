<template>
  <div id="recommend">
    <div id="recommend-title">
      <a @click="choose0" :class="{changeColor0}">价格接近推荐</a>
      &nbsp;
      <i>/</i>&nbsp;
      <a @click="choose1" :class="{changeColor1}">等级接近推荐</a>
    </div>
    <div id="recommend-content">
      <ul>
        <li>
          <div class="recommend-content-left">
            <img src="../../static/img/003.png" alt />
            <span>&nbsp;证书</span>
            <strong>&nbsp;GIA</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>钻重</span>
            <strong>&nbsp;0.3</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>颜色</span>
            <strong>&nbsp;I</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>净度</span>
            <strong>&nbsp;SI1</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>切工</span>
            <strong>&nbsp;EX</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>抛光</span>
            <strong>&nbsp;EX</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>对称</span>
            <strong>&nbsp;VG</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>荧光</span>
            <strong>&nbsp;None</strong>
            <em>&nbsp;|&nbsp;</em>
            <span>小鸟价</span>
            <i>
              &nbsp;￥
              <font>7350</font>
            </i>
          </div>
          <div class="recommend-content-right">
            <span>立即查看</span>
          </div>
        </li>
                
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      changeColor0: false,
      changeColor1: false
    };
  },
  methods: {
    choose0: function() {
      this.changeColor0 = !this.changeColor0;
      if (this.changeColor1 == true) {
        this.changeColor1 = !this.changeColor1;
      }
    },
    choose1: function() {
      this.changeColor1 = !this.changeColor1;
      if (this.changeColor0 == true) {
        this.changeColor0 = !this.changeColor0;
      }
    }
  }
};
</script>

<style>
#recommend {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  border-top: 1px solid #000;
}
#recommend-title {
  height: 43px;
  line-height: 43px;
}
#recommend-title a {
  cursor: pointer;
}
#recommend-title a:hover,
.changeColor0,
.changeColor1 {
  color: #ff8a81;
}
#recommend-content {
  background-color: #fbfbfb; 
}
#recommend-content li:hover{
    background: #fef9f7;
    cursor: pointer;
}
#recommend-content li:hover .recommend-content-right{
    background: #fcf0ea;
}
#recommend-content li {
    margin-top: 10px;
  height: 60px;
  vertical-align: middle;
}
.recommend-content-left {
  float: left;
  color: #999999;
}
.recommend-content-left strong {
  font-weight: 500;
  color: #666;
}
.recommend-content-left img {
  vertical-align: middle;
  margin-right: 30px;
}
.recommend-content-left em {
  display: inline-block;
  width: 30px;
}
.recommend-content-left i {
  color: #f6827a;
  font-style: normal;
}
.recommend-content-left i > font {
  font-weight: bold;
  font-size: 16px;
}
strong,
span,
em,
i {
  display: inline-block;
  line-height: 60px;
}
.recommend-content-right {
  float: right;
  height: 60px;
  width: 131px;
  line-height: 60px;
  background: #f1f1f1;
  font-family: Arial, "宋体", Helvetica, sans-serif;
}
</style>