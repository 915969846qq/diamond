<!-- 热门资讯 跳转子页面 -->
<template>
<div class='kk'>
    <div class="m_main">
      <span class="top_line"></span>
        <div class="g_brd_detl_wp">
            <div class="g_wdm_rig">
                <h1 class="g_brd_detl_title">{{Detaile.news_dynamic_name}}</h1>
                <div class="g_brd_detl_sbt">
                  <span>来源：{{Detaile.source}}</span>
                  <span>时间：{{Detaile.release_time}} </span>
                  分享：<div class="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1" id="share_news" data-bd-bind="1594890046393">
                  <a class="tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                  <a class="tqq" data-cmd="tqq "></a>
                  <a class="renren" data-cmd="renren" title="分享到人人网"></a>
                </div>
                </div>
                <div class="g_brd_detl_tps">         
                    {{Detaile.main_content}}                      
                </div>          
                 <div class="g_brd_detl_cntnt" style="text-align:center">           
                <img :src="$host+Detaile.news_dynamic_img" alt="">  
                 </div>  
                <div class="g_brd_detl_cntnt">          
                  <!--WYSIWYG-->
<p><span style="font-size: large;">{{Detaile.sub_content}}</span></p>

                </div>
			    			    <div class="new_adpic_tlt">
                	<span>可能你喜欢</span>
                </div>
      			<div class="new_adpic_lst">
      				<div>
      					      					<a href="http://www.zbird.com/act/2017installment.html?from=zsktbottom1" target="_blank"><img src="http://img.zbird.cn/picdb/430/68/43068_1_.jpg" alt="" width="244"> 
							<span>招行分期</span>
      					</a> 
      					      					<a href="http://www.zbird.com/mono/2017collections.html?from=zsktbottom2" target="_blank"><img src="http://img.zbird.cn/picdb/473/51/47351_1_.jpg" alt="" width="244"> 
							<span>套装专题</span>
      					</a> 
      					      					<a href="http://www.zbird.com/mono/2019intocolourss.html?from=zsktbottom3" target="_blank"><img src="http://img.zbird.cn/picdb/555/995/a171942017039cf6721c49d8eb9b0154.jpg" alt="" width="244"> 
							<span>悦色-秘密花园</span>
      					</a> 
      					      				</div>
      			</div>
      	
          <div id="shops"></div>
            </div>
            <div class="g_wdm_lft">
            <div class="f_ad_fix">
        			                     <a href="http://www.zbird.com/mono/2019aurorachasinglight.html?from=zskt1" target="_blank">
        			 <img src="http://img.zbird.cn/picdb/555/822/57579815410556d8aded15b2d46b4afe.jpg" alt="上" width="308" height="200"></a>
        			                                         <a href="http://www.zbird.com/mono/2015qixikela.html?from=zskt2" target="_blank">
        			 <img src="http://img.zbird.cn/picdb/555/822/4fdea718fcb7560115c3b33e55c0d399.jpg" alt="" width="308" height="200"></a>
        			            </div>
            
              <div id="fixed_top">
        				        				  <a href="http://www.zbird.com/act/2016globediamonds.html?from=zsxl?from=zskt3http://www.zbird.com/act/2016globediamonds.html?from=zsxl" target="_blank">
        				  <img src="http://img.zbird.cn/picdb/555/822/e23a0173735c4fbd1e4876b61acabd1b.jpg" alt="" width="308" height="200"></a>
        				        				         				  <a href="http://www.zbird.com/comment/bespokenadd/?from=zskt4" target="_blank">
        				  <img src="http://img.zbird.cn/picdb/555/822/f83e0da8f535db179e1694acbd8fd14e.jpg" alt="" width="308" height="200"></a>
        				              </div>
              
           
            <div class="f_line_title">
                 <img src="http://img.zbird.cn/ww3/news/tlt.jpg" alt="">
              </div>
            
            </div>
        </div>
    </div>
</div>
</template>  

<script>                    
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'newsson',
//import引入的组件需要注入到对象中才能使用            
components: {},
data() {
//这里存放数据
return {
    Detaile:{},
    cf:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    let that = this;    
           this.$axios.get("http://localhost:1001/hotnews.do",{params:{id:this.$route.query.id}})
            .then(function (resp) {                
                console.log(resp.data[0]) 
                that.Detaile = resp.data[0];    
                console.log(that.Detaile)               
            });

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.g_wdm_lft {
    width: 308px;
    float: right;
    text-align: center;
}
.new_adpic_lst a {
    width: 244px;
    display: inline-block;  
    text-align: center;
    margin-right: 46px;
    padding-bottom: 30px;
    color: #333;
}
.new_adpic_lst div {
    width: 900px;
}
    a{
        text-decoration: none;
        color: #222;
    }
    .m_main {
        width: 1180px;
        margin: 0 auto;
        background: #fff;
    }
    .top_line {
        background: #000000;
        display: block;
        height: 1px;
    }
    .g_brd_detl_wp {
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .g_wdm_rig {
        width: 830px;
        float: left;
        padding: 0px;
        margin-top: 35px;
    }
    .g_brd_detl_title {
        font-size: 22px;
        font-family: Arial,"宋体";
        color: #000;
        padding-top: 15px;
        font-weight: normal;
        text-align: center;
    }
    .g_brd_detl_sbt {
        text-align: center;
        color: #999;
        font-family: Arial,"宋体";
        font-size: 12px;
        padding: 15px 0 40px 0;
    }
    .g_brd_detl_sbt span {
        padding-right: 15px;
    }
    .g_brd_detl_sbt span {
        padding-right: 15px;
    }
    #share_news {
        display: inline-block;
        vertical-align: middle;
        width: 85px;
    }
    .bdshare-button-style0-16 {
        zoom: 1;
    }
    .g_brd_detl_tps {
        background: #fdf2ec;
        padding: 22px 25px;
        color: #333;
        line-height: 24px;
        font-family: Arial,"宋体";
        font-size: 12px;
        text-align: left;
        text-indent: 2em;
        margin-bottom: 15px;
    }
    .g_brd_detl_cntnt {
        text-indent: 2em;
        text-align: left;
        font-size: 14px;
        font-family: Arial,"宋体";
        color: #222;
        line-height: 27px;
        text-align: justify;
        padding: 0 10px 25px;
    }
    .g_brd_detl_cntnt p {
        margin-top: 10px;
        font-size: 14px;
    }
    .g_brd_detl_cntnt p {
        margin-top: 10px;
        font-size: 14px;
    }
    .new_adpic_tlt {
        line-height: 62px;
        text-align: left;
        padding-left: 25px;
        font-size: 14px;
        color: #000;
        background: #f8f7f7;
    }
    .new_adpic_lst {
        background: #f8f7f7;
        overflow: hidden;
        text-align: left;
    }
    .new_adpic_lst a img {
        display: block;
        margin-bottom: 15px;
    }
    .new_adpic_lst a {
        width: 244px;
        display: inline-block;
        text-align: center;
        margin-right: 46px;
        padding-bottom: 30px;
        color: #333;
    }
    .txt_sh1 {
        color: #000;
        line-height: 70px;
        text-align: left;
    }

</style>