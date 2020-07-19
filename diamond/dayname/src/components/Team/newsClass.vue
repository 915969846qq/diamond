<!-- 热搜分类子页面 -->
<template>
<div class='ll'>
   <div class="m_main">
       <span class="top_line"></span>
       <div class="g_brd_detl_wp">
            <div class="g_wdm_rig">
              <div class="title_text01">
                 <strong>{{Detaile.hot_categories_title}}</strong>
                 <i></i>
                 <p>{{Detaile.hot_categories_content}}</p>
              </div>
                <div class="f_title_recomm">
                    <span><em>{{Detaile.hot_categories_sub_title}}</em></span><i></i>
                </div>
                
                <ul class="f_diamcls_lst">
                        <li>
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title1}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content1}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date1}}</span>
                            </div>
                        </li>
			             <li>
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title2}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content2}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date12}}</span>
                            </div>
                        </li>
                         <li>
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title3}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content3}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date13}}</span>
                            </div>
                        </li>
                         <li>
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title4}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content4}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date14}}</span>
                            </div>
                        </li>
                         <li>
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title5}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content5}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date15}}</span>
                            </div>
                        </li>
                         <li class="bb">
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title6}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content6}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date16}}</span>
                            </div>
                        </li>
                        <li class="bb">
                            <strong><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_title7}}</a></strong>
                            <p><a href="/e-education/w31122.html">{{Detaile.hot_categories_sub_content7}}</a></p>
                            <div class="detl_info"><span>{{Detaile.hot_date17}}</span>
                            </div>
                        </li>
			        </ul>         
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[5, 10, 15, 20]"
                                :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="7"> 
                            </el-pagination>
            </div>  
                
              
            

            <div class="g_wdm_lft">
            <div class="f_ad_fix">
								 <a href="http://www.zbird.com/mono/2019aurorachasinglight.html?from=zskt1" target="_blank">
				 <img src="http://img.zbird.cn/picdb/555/822/57579815410556d8aded15b2d46b4afe.jpg" alt="上" width="308" height="200" style="opacity: 1;"></a>
												 <a href="http://www.zbird.com/mono/2015qixikela.html?from=zskt2" target="_blank">
				 <img src="http://img.zbird.cn/picdb/555/822/4fdea718fcb7560115c3b33e55c0d399.jpg" alt="" width="308" height="200" style="opacity: 1;"></a>
				              </div>
              <div class="f_line_title">
                 <img src="http://img.zbird.cn/ww3/diamclass/title_liket.jpg" alt="">
              </div>
             <div class="m_ulike">
                  <ul>
                                                                                        <li><a href="/weddings/rdu32-3387231.html">
                                <img src="http://img.zbird.cn/picdb/330/25/33025_301_.jpg" alt="" width="180" height="180">
                                <span class="uliked_pro">羞涩蔷薇<!--  · 铂900女戒 --></span>

                                                                <span class="uliked_price"><b><i>￥</i>5599</b></span>
                                
                            </a>
                        </li>
                                                                                            <li><a href="/weddings/rdq08-7284057.html">
                                <img src="http://img.zbird.cn/picdb/233/01/23301_301_.jpg" alt="" width="180" height="180">
                                <span class="uliked_pro">倾心<!--  · 白18K金女戒 --></span>

                                                                <span class="uliked_price"><b><i>￥</i>10990</b></span>
                                
                            </a>
                        </li>
                             <li><a href="/weddings/rdq08-5399201.html">
                                <img src="http://img.zbird.cn/picdb/233/01/23301_301_.jpg" alt="" width="180" height="180">
                                <span class="uliked_pro">倾心<!--  · 铂900女戒 --></span>

                                                                <span class="uliked_price"><b><i>￥</i>25360</b></span>
                                
                            </a>
                        </li>                                                             
                                                                                                                             </ul>
                </div>
            </div>              <!--右-->
            
        </div>
   </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'newsClass',
//import引入的组件需要注入到对象中才能使用
components: {},     
data() {
//这里存放数据
return {
    Detaile:{}, 
    currentPage1: 5,
    currentPage2: 5,
    currentPage3: 5,
    currentPage4: 1
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    let that = this;    
         console.log('reate');
           this.$axios.get("http://localhost:1001/newclass1.do",{params:{id:this.$route.query.id}})
            .then(function (resp) {                
                that.Detaile = resp.data[0];          
                console.log(that.Detaile);                    
            });
           $(".number").click(function(){            
               $(".f_diamcls_lst li").css("display","none");        
               $(".bb").css("display","block");
           })
           $(".active").click(function(){
               $(".f_diamcls_lst li").css("display","block");
               $(".bb").css("display","none");
           })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     
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
    .bb{
        display: none;
    }
    a{
        text-decoration: none;
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
    .title_text01 {
        background: #fdf2ec;
        text-align: center;
        color: #666;
        line-height: 24px;
        padding: 0 20px 30px;
    }
    .title_text01 strong {
        font-size: 20px;
        font-weight: normal;
        display: block;
        text-align: center;
        padding: 30px 0 30px;
        color: #000;
        font-family: "宋体" ,Arial;
    }
    .title_text01 i {
        border-bottom: 1px solid #000;
        width: 48px;
        display: inline-block;
        font-size: 0;
        height: 0;
        margin-bottom: 20px;
    }
    em, b, i {
        font-style: normal;
    }
    .title_text01 p {
        text-align: left;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        font-size: 12px;
    }
    .f_title_recomm {
        padding: 0 0 0 0px;
        height: 76px;
        text-align: left;
        position: relative;
        z-index: 0;
        font-family: Arial,"宋体";
    }
    .f_title_recomm span {
        position: absolute;
        z-index: 1;
        background: #fff;
        top: 33px;
        left: 0px;
        font-size: 18px;
        font-family: Arial,"宋体";
        padding-left: 0px;
    }
    .f_title_recomm i {
        display: block;
        border-bottom: 1px solid #ccc;
        font-size: 0;
        width: 100%;
        position: absolute;
        top: 42px;
        left: 0px;
        z-index: 0;
    }
    .f_diamcls_lst {
        text-align: left;
        padding-left: 0px;
    }
    ul {
        list-style-type: none;
    }
    .f_diamcls_lst li {
        border-bottom: 1px solid #f1f0f1;
        padding-bottom: 33px;
        margin-bottom: 33px;
        position: relative;
    }
    .f_diamcls_lst strong {
        border-left: 2px solid #ff8a81;
        padding-left: 12px;
        font-size: 18px;
        line-height: 15px;
        font-weight: normal;
        height: 12px;
        display: block;
        margin: 0 0 12px;
    }
    .f_diamcls_lst strong a {
        color: #000;
        display: block;
        font-size: 12px;
    }
    .f_diamcls_lst p a {
        color: #666;
        display: block;
        line-height: 26px;
        width: 100%;
        font-size: 12px;
        /* white-space: nowrap; */
        overflow: hidden;
    }
    .f_diamcls_lst .detl_info {
        overflow: hidden;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .f_diamcls_lst .detl_info span {
        float: right;
        color: #999;
        font-size: 12px;
    }
    .g_wdm_lft {
        width: 308px;
        float: right;
        text-align: center;
    }
    .f_ad_fix {
        text-align: right;
    }
    .zbnews_lst {
        margin: 0px 0 15px;
    }
    .zbnews_lst dt {
        font-size: 12px;
        color: #000;
        background: #525252;
        text-align: left;
        padding-left: 15px;
    }
    .zbnews_lst dt em {
        display: block;
        line-height: 32px;
        color: #fff;
    }
    .f_line_title {
        padding-top: 15px;
        text-align: left;
    }
    .m_ulike {
        padding-top: 9px;
    }
    .m_ulike ul {
        overflow: hidden;
    }
    .m_ulike li {
        width: 290px;
        font-family: Arial,"宋体";
        margin: 0 auto 10px;
    }
    .m_ulike li span {
        display: block;
        text-align: center;
        font-family: Arial,"宋体";
        font-size: 12px;
    }
    .uliked_pro {
        color: #666;
        margin-top: -10px;
    }
    .m_ulike li span {
        display: block;
        text-align: center;
        font-family: Arial,"宋体";
        font-size: 12px;
    }
.uliked_price {
    font-family: Arial,"微软雅黑";
    color: #999;
    padding-top: 10px;
}
    .uliked_price b {
        color: #f6827a;
        font-family: Arial,"微软雅黑";
        padding-right: 15px;
    }

</style>