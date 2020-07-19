<!-- 地图  -->
<template>
<div class='kk'>
  <div class="g_hder_wp"></div>
  <div class="g_cityreg_wp">
    <div class="g_cityreg_lft">
    <div class="u_city_shw_txt">附近共有<em class="red">{{productArr.length}}</em>家体验中心</div>
		<i class="city_btm_lne"></i>
		<div class="tips_none">
			<span>对不起，没有找到您所在城市的门店</span>           
		</div>
		<div class="f_city_lst " tabindex="5000">
	  	<div class="f_city_cnt" id="location_name_chengdu" location_name="chengdu" province-code="510000" city-code="510100" lat="30.6561260" lng="104.0804010" style="display: block;" v-for="(item,index) in productArr" :key="index">
          <strong>{{item.mapName}}</strong>
          <span><em class="f_city_cnt_em">{{item.mapNo}}</em>{{item.mapNameDetail}}</span>
          <span>{{item.mapNameDate}}</span>
            <router-link to="/map1/yuyue" @click.native="dianji()"  class="btn_yy" data-location_name="chengdu">立即预约进店</router-link>
        </div>    
		</div>    
    <router-view></router-view>
	</div>
  <div class="g_cityreg_rig">    
        <baidu-map v-bind:style="mapStyle" class="bm-view" ak="你的百度地图ak" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"
                @click="getClickInfo" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
                <bm-view class="akk" style="width: 570px;
                  height: 525px;
                  overflow: hidden;
                 ">     
                </bm-view>
                <bm-control :offset="{width: '10px', height: '10px'}">
                    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 9999}">
                        <input type="text" v-model="ww" placeholder="请输入搜索关键字" class="serachinput"> 
                    </bm-auto-complete>
                </bm-control>           
                <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                </bm-marker>    
                <bm-local-search :keyword="keyword" :auto-viewport="true" style="width:0px;height:0px;overflow: hidden;"></bm-local-search>
        </baidu-map>              
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';          
 import yuyue from './yuyue'
 //地图组件---按需引入
import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch, BmMarker} from 'vue-baidu-map'
  
  export default {
    name:'map1',
    components: {
      BaiduMap,
      BmControl,
      BmView,
      BmAutoComplete,
      BmLocalSearch,
      BmMarker,
      yuyue:yuyue
    },
    data: function () {
      return {
        showMapComponent: this.value,
        keyword: '',
        ww:'',
        productArr:[],
        mapStyle: {
          width: '572px',
          height: '555px',
          
        },
        center: {lng: 116.404, lat: 39.915},
        zoom: 15,
      }
    },
    watch: {
      value: function (currentValue) {
        this.showMapComponent = currentValue
        if (currentValue) {       
          this.keyword = ''
        } 
      }
    },
    methods: {
      /***
       * 地图点击事件。
       */
      getClickInfo (e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()  
      },      
      dianji(){
        $(".g_cityreg_rig").css("position","relative").css("z-index",-1);
      }  
    },
     mounted() {
        console.log("跳转了");
        const that = this;       
        $(".serachinput").blur(function(){ 
            console.log(this);    
            let shuru = $(".serachinput").val(); 
            console.log(shuru);   
            that.$axios.get("http://localhost:1001/map.do",{params:{name: shuru}})
            .then(function (resp) {              
            console.log(resp.data);
            if(resp.data==""){
              $(".tips_none").css("display","block"); 
              that.productArr=[];     
            }else{                    
               that.productArr = resp.data;       
               $(".tips_none").css("display","none");        
            }
            })
        });
        // $(".btn_yy").click(function(){
        //   alert("11");
        // })
     },
  }
  
</script>
<style scoped>
    .g_hder_wp {
        width: 1180px;
        margin: 0 auto;
        height: 770px;
        background: url(http://img.zbird.cn/ww3/store/180330/banner.jpg) center no-repeat;
        overflow: hidden;
    }
    .serachinput {
        width: 300px;
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #dddee1;
        line-height: 20px;             
        font-size: 16px;
        height: 38px;
        color: #333;
        position: relative;
        border-radius: 4px;
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }
    .kk /deep/ .anchorBL {
        display: none;
    }
    .tips_none{
      display: none;
    }
    .g_cityreg_rig {
        width: 572px;
        float: left;
        margin-top:100px;
    }
    .g_cityreg_wp {
        width: 1180px;
        margin: 0 auto 50px;
        text-align: left;
        overflow: hidden;
    }
    .red{
      color:red;
    }
    .g_cityreg_lft {
        width: 597px;
        margin-right: 10px;
        height: 623px;
        float: left;
        position: relative;
        z-index: 0;
    }
    .u_city_shw_txt {
        font-size: 18px;
        color: #000;
        line-height: 97px;
        overflow: hidden;
        border-bottom: 1px solid #000;
    }
    .city_btm_lne {
        position: absolute;
        z-index: 4;
        bottom: 0;
        left: 0;
        width: 585px;
        height: 1px;
        background: #000;
    }
    .f_city_lst {
        overflow: auto;
        width: 580px;
        height: 440px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .f_city_cnt {
        width: 550px;
        padding: 36px 0 0 0;
    }
    .f_city_cnt strong {     
        color: #000;
        font-size: 18px;
        font-weight: normal;
        line-height: 45px;
        margin-bottom: 6px;
    }
    .f_city_cnt span {
        color: #000;
        font-size: 12px;
        display: block;
        line-height: 30px;
        clear: both;
    }
    .f_city_cnt_em {
        float: right;
    }
    em, b, i {
        font-style: normal;
    }
    .f_city_cnt .btn_yy {
        width: 73px;
        height: 22px;
        font-size: 12px;
        color: #333;
        display: inline-block;
        margin-top: 12px;
        margin-right: 20px;
    }
    .tips_none span{
        font-size: 22px;
        color:darkmagenta;
    }
</style>