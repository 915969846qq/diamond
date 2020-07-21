<!-- 热门资讯，热门分类 -->
<template>
<div class='kk'>  
    <div class="footertab_bor">
	<div class="footertab_body">
		<h4 alt="钻石小鸟热门资讯" title="钻石小鸟热门资讯"><span></span><strong class="menu_hot_news">热门资讯</strong></h4>
		<div class="footertab_tags"> 
			<div class="targ_hr"></div>
			<div class="footertab_marg"></div>
			<div class="footertab_content wid_02">			 
							<span  v-for="(item,index) in productArr"  :key="index">
                                <router-link :to="{path:'/newsson',query:{id:item.news_dynamic_id}}"  target="_blank" tag="a">
                                    {{item.news_dynamic_name}}
                                </router-link>    
                            </span>  		
						</div>
		</div>
	</div>
	<div class="footertab_body footertab_body02">
		<h4 class="footertab_tt1" alt="钻石小鸟热门分类" title="钻石小鸟热门分类"><span></span><strong class="menu_hot_kinds">热门分类</strong></h4>
		<div class="footertab_tags">
			<div class="targ_hr"></div>
				<div class="footertab_content wid_01">
						<span v-for="(item,index) in productArr1" :key="index">
							<router-link :to="{path:'/newsClass',query:{id:item.hot_categories_id}}" title="新娘520米婚纱" alt="新娘520米婚纱" target="_blank">
								{{item.hot_categories_name}}    
							</router-link>  
						</span>
					</div>					
				</div>
	</div>      
</div>      
</div>
</template>             
 
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import newsson from './hotnewsSon' 
import newsClass from './newsClass'
export default {                                
    name:'news',                    
//import引入的组件需要注入到对象中才能使用                                     
components: {                   
	newsson:newsson,
	newsClass:newsClass     
},
data() {
//这里存放数据
return {
	productArr:[],
	productArr1:[],
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
           this.$axios.get("http://localhost:1001/hotnews1.do")
            .then(function (resp) {                
                console.log(resp.data) 
                that.productArr = resp.data;            
			});
			this.$axios.get("http://localhost:1001/newsClass.do")
            .then(function (resp) {                
                console.log(resp.data) 
                that.productArr1 = resp.data;              
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
a{
    color: red;
}
.footertab_content span a:hover {
    color: #fe8982;
}
.footertab_bor {
    padding-top: 50px;
    padding-bottom: 49px;
    border-top: 1px solid #dbdbdb;      
    border-bottom: 1px solid #dbdbdb;
    width: 1180px;
    margin: 1px auto 0;
    overflow: hidden;
    text-align: center;
    margin-bottom: 39px;
}
.footertab_body {
    width: 590px;
    height: 200px;
    overflow: hidden;
    float: left;
}
.footertab_body h4, .footertab_body h4.sel {
    overflow: hidden;
    text-align: left;
    cursor: pointer;
}
.footertab_body h4 span, .footertab_body h4:hover span {
    display: block;
    width: 37px;
    height: 31px;
    float: right;
    display: none;
}
.footertab_body h4 strong {
    color: #000;
    font-family: Arial,"宋体";
    font-size: 12px;
    padding-left: 20px;
    line-height: 18px;
    font-weight: normal;
}
.footertab_tags {
    text-align: left;
    overflow: hidden;
    padding-bottom: 15px;
}
.wid_02 {
    width: 100%;
    padding-top: 17px;
    padding-left: 10px;
}
.footertab_content {
    display: block;
    float: left;
}
.wid_02 span {
    width: 228px;
    margin-right: 64px;
    display: inline-block;
}
.wid_02 span a {
    display: inline-block;
    padding: 5.5px 10px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
}
.footertab_body02 {
    width: 573px;
    height: 200px;
}
.footertab_body {
    width: 590px;
    height: 200px;
    overflow: hidden;
    float: left;
}
.wid_01 {
    padding-left: 32px;
}
.wid_01 span {
    float: left;
    display: block;
    background: #f5f5f5;
    margin-bottom: 14.5px;
    margin-right: 5px;
}
.footertab_tags {
    text-align: left;
    overflow: hidden;
    padding-bottom: 15px;
}
.footertab_content span {
    line-height: 14px;
}
.wid_01 span a {
    float: left;
    display: block;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 9px;
    padding-right: 9px;
    color: #333;
}
.footertab_tt1 {
    margin-bottom: 29px;
}
a{
    text-decoration: none;
}
</style>