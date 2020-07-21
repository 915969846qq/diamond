<template>
  <div class="aw">
    <div class="hide_idxtips">
      <i></i>
    </div>
    <div class="join_wrapbg"></div>
    <!-- 弹框填写信息 -->
    <div class="join_wrap" style="display:none">
      <div class="colse_join">X</div>
      <h3 >完善您的信息，免费尊享加盟专属服务</h3>
      <h4>目前已有<i class="join_num">7270</i>人成功获取专属加盟资料</h4>
      <dl class="join_ipt_rado" data-ipt="join_form1">
        <dd>出生年代（单选）</dd>
        <dt class="ages"><em class="on" data-info="60后">60后</em><em data-info="70后">70后</em><em data-info="80后">80后</em><em data-info="90后">90后</em>
          <input type="hidden"  value="60后" class="join_rado_val join_rado_age" data-ipt="join_form1">
        </dt>
      </dl>
      <dl class="join_ipt_rado" data-ipt="join_form1">
        <dd>开店投资预算（单选）</dd>
        <dt class="moneys"><em class="on" data-info="20-50万">20-50万</em><em data-info="50-100万">50-100万</em><em data-info="100-200万">100-200万</em><em data-info="200万以上">200万以上</em>
          <input type="hidden" value="20-50万" class="join_rado_val join_rado_money" data-ipt="join_form1">
        </dt>
      </dl>

      <dl class="join_ipt_ipt">
        <dt>
          <div class="join_ipt_lab_name"><input type="text"  value="姓名" class="join_ipt_name" data-ipt="join_form1" ></div>
          <div class="join_ipt_lab"><select name="" id="join_ipt_sel" data-ipt="join_form1">
            <option value="-1">加盟省份</option>
            <option value="110000" data-child="110100-市辖区">北京市</option>
            <option value="120000" data-child="120100-市辖区">天津市</option>
            <option value="130000" data-child="130100-石家庄市,130200-唐山市,130300-秦皇岛市,130400-邯郸市,130500-邢台市,130600-保定市,130700-张家口市,130800-承德市,130900-沧州市,131000-廊坊市,131100-衡水市">河北省</option>
            <option value="140000" data-child="140100-太原市,140200-大同市,140300-阳泉市,140400-长治市,140500-晋城市,140600-朔州市,140700-晋中市,140800-运城市,140900-忻州市,141000-临汾市,141100-吕梁市">山西省</option>
            <option value="150000" data-child="150100-呼和浩特市,150200-包头市,150300-乌海市,150400-赤峰市,150500-通辽市,150600-鄂尔多斯市,150700-呼伦贝尔市,150800-巴彦淖尔市,150900-乌兰察布市,152200-兴安盟,152500-锡林郭勒盟,152900-阿拉善盟">内蒙古自治区</option>
            <option value="210000" data-child="210100-沈阳市,210200-大连市,210300-鞍山市,210400-抚顺市,210500-本溪市,210600-丹东市,210700-锦州市,210800-营口市,210900-阜新市,211000-辽阳市,211100-盘锦市,211200-铁岭市,211300-朝阳市,211400-葫芦岛市">辽宁省</option>
            <option value="220000" data-child="220100-长春市,220200-吉林市,220300-四平市,220400-辽源市,220500-通化市,220600-白山市,220700-松原市,220800-白城市,222400-延边朝鲜族自治州">吉林省</option>
            <option value="230000" data-child="230100-哈尔滨市,230200-齐齐哈尔市,230300-鸡西市,230400-鹤岗市,230500-双鸭山市,230600-大庆市,230700-伊春市,230800-佳木斯市,230900-七台河市,231000-牡丹江市,231100-黑河市,231200-绥化市,232700-大兴安岭地区">黑龙江省</option>
            <option value="310000" data-child="310100-市辖区">上海市</option>
            <option value="320000" data-child="320100-南京市,320200-无锡市,320300-徐州市,320400-常州市,320500-苏州市,320600-南通市,320700-连云港市,320800-淮安市,320900-盐城市,321000-扬州市,321100-镇江市,321200-泰州市,321300-宿迁市">江苏省</option>
            <option value="330000" data-child="330100-杭州市,330200-宁波市,330300-温州市,330400-嘉兴市,330500-湖州市,330600-绍兴市,330700-金华市,330800-衢州市,330900-舟山市,331000-台州市,331100-丽水市">浙江省</option>
            <option value="340000" data-child="340100-合肥市,340200-芜湖市,340300-蚌埠市,340400-淮南市,340500-马鞍山市,340600-淮北市,340700-铜陵市,340800-安庆市,341000-黄山市,341100-滁州市,341200-阜阳市,341300-宿州市,341500-六安市,341600-亳州市,341700-池州市,341800-宣城市">安徽省</option>
            <option value="350000" data-child="350100-福州市,350200-厦门市,350300-莆田市,350400-三明市,350500-泉州市,350600-漳州市,350700-南平市,350800-龙岩市,350900-宁德市">福建省</option>
            <option value="360000" data-child="360100-南昌市,360200-景德镇市,360300-萍乡市,360400-九江市,360500-新余市,360600-鹰潭市,360700-赣州市,360800-吉安市,360900-宜春市,361000-抚州市,361100-上饶市">江西省</option>
            <option value="370000" data-child="370100-济南市,370200-青岛市,370300-淄博市,370400-枣庄市,370500-东营市,370600-烟台市,370700-潍坊市,370800-济宁市,370900-泰安市,371000-威海市,371100-日照市,371200-莱芜市,371300-临沂市,371400-德州市,371500-聊城市,371600-滨州市,371700-菏泽市">山东省</option>
            <option value="410000" data-child="410100-郑州市,410200-开封市,410300-洛阳市,410400-平顶山市,410500-安阳市,410600-鹤壁市,410700-新乡市,410800-焦作市,410900-濮阳市,411000-许昌市,411100-漯河市,411200-三门峡市,411300-南阳市,411400-商丘市,411500-信阳市,411600-周口市,411700-驻马店市,419000-省直辖县级行政区划">河南省</option>
            <option value="420000" data-child="420100-武汉市,420200-黄石市,420300-十堰市,420500-宜昌市,420600-襄阳市,420700-鄂州市,420800-荆门市,420900-孝感市,421000-荆州市,421100-黄冈市,421200-咸宁市,421300-随州市,422800-恩施土家族苗族自治州,429000-省直辖县级行政区划">湖北省</option>
            <option value="430000" data-child="430100-长沙市,430200-株洲市,430300-湘潭市,430400-衡阳市,430500-邵阳市,430600-岳阳市,430700-常德市,430800-张家界市,430900-益阳市,431000-郴州市,431100-永州市,431200-怀化市,431300-娄底市,433100-湘西土家族苗族自治州">湖南省</option>
            <option value="440000" data-child="440100-广州市,440200-韶关市,440300-深圳市,440400-珠海市,440500-汕头市,440600-佛山市,440700-江门市,440800-湛江市,440900-茂名市,441200-肇庆市,441300-惠州市,441400-梅州市,441500-汕尾市,441600-河源市,441700-阳江市,441800-清远市,441900-东莞市,442000-中山市,445100-潮州市,445200-揭阳市,445300-云浮市">广东省</option>
            <option value="450000" data-child="450100-南宁市,450200-柳州市,450300-桂林市,450400-梧州市,450500-北海市,450600-防城港市,450700-钦州市,450800-贵港市,450900-玉林市,451000-百色市,451100-贺州市,451200-河池市,451300-来宾市,451400-崇左市">广西壮族自治区</option>
            <option value="460000" data-child="460100-海口市,460200-三亚市,460300-三沙市,460400-儋州市,469000-省直辖县级行政区划">海南省</option>
            <option value="500000" data-child="500100-市辖区,500200-县">重庆市</option>
            <option value="510000" data-child="510100-成都市,510300-自贡市,510400-攀枝花市,510500-泸州市,510600-德阳市,510700-绵阳市,510800-广元市,510900-遂宁市,511000-内江市,511100-乐山市,511300-南充市,511400-眉山市,511500-宜宾市,511600-广安市,511700-达州市,511800-雅安市,511900-巴中市,512000-资阳市,513200-阿坝藏族羌族自治州,513300-甘孜藏族自治州,513400-凉山彝族自治州">四川省</option>
            <option value="520000" data-child="520100-贵阳市,520200-六盘水市,520300-遵义市,520400-安顺市,520500-毕节市,520600-铜仁市,522300-黔西南布依族苗族自治州,522600-黔东南苗族侗族自治州,522700-黔南布依族苗族自治州">贵州省</option>
            <option value="530000" data-child="530100-昆明市,530300-曲靖市,530400-玉溪市,530500-保山市,530600-昭通市,530700-丽江市,530800-普洱市,530900-临沧市,532300-楚雄彝族自治州,532500-红河哈尼族彝族自治州,532600-文山壮族苗族自治州,532800-西双版纳傣族自治州,532900-大理白族自治州,533100-德宏傣族景颇族自治州,533300-怒江傈僳族自治州,533400-迪庆藏族自治州">云南省</option>
            <option value="540000" data-child="540100-拉萨市,540200-日喀则市,540300-昌都市,540400-林芝市,540500-山南市,540600-那曲市,542500-阿里地区">西藏自治区</option>
            <option value="610000" data-child="610100-西安市,610200-铜川市,610300-宝鸡市,610400-咸阳市,610500-渭南市,610600-延安市,610700-汉中市,610800-榆林市,610900-安康市,611000-商洛市">陕西省</option>
            <option value="620000" data-child="620100-兰州市,620200-嘉峪关市,620300-金昌市,620400-白银市,620500-天水市,620600-武威市,620700-张掖市,620800-平凉市,620900-酒泉市,621000-庆阳市,621100-定西市,621200-陇南市,622900-临夏回族自治州,623000-甘南藏族自治州">甘肃省</option>
            <option value="630000" data-child="630100-西宁市,630200-海东市,632200-海北藏族自治州,632300-黄南藏族自治州,632500-海南藏族自治州,632600-果洛藏族自治州,632700-玉树藏族自治州,632800-海西蒙古族藏族自治州">青海省</option>
            <option value="640000" data-child="640100-银川市,640200-石嘴山市,640300-吴忠市,640400-固原市,640500-中卫市">宁夏回族自治区</option>
            <option value="650000" data-child="650100-乌鲁木齐市,650200-克拉玛依市,650400-吐鲁番市,650500-哈密市,652300-昌吉回族自治州,652700-博尔塔拉蒙古自治州,652800-巴音郭楞蒙古自治州,652900-阿克苏地区,653000-克孜勒苏柯尔克孜自治州,653100-喀什地区,653200-和田地区,654000-伊犁哈萨克自治州,654200-塔城地区,654300-阿勒泰地区,659000-自治区直辖县级行政区划">新疆维吾尔自治区</option>
            <option value="710000" data-child="710100-台北市,710200-高雄市,710300-台南市,710400-台中市,710500-金门县,710600-南投县,710700-基隆市,710800-新竹市,710900-嘉义市,711100-台北县,711200-宜兰县,711300-新竹县,711400-桃园县,711500-苗栗县,711600-台中县,711700-彰化县,711900-嘉义县,712100-云林县,712200-台南县,712300-高雄县,712400-屏东县,712500-台东县,712600-花莲县,712700-澎湖县">台湾省</option>
            <option value="810000" data-child="810100-香港岛,810200-九龙,810300-新界">香港特别行政区</option>
            <option value="820000" data-child="820100-澳门半岛,820200-离岛">澳门特别行政区</option>
            <option value="990000" data-child="990100-海外">海外</option>
          </select></div>
          <div class="join_ipt_lab"><select name="" id="join_ipt_sel2" data-ipt="join_form1">
            <option value="-1">加盟城市</option>
          </select></div>
          <div class="join_ipt_lab_tel"><input type="tel"  value="手机号" class="join_ipt_tel" data-ipt="join_form1"></div>
          <div class="join_ipt_lab_code"><input input type="text" name="checkcode" value="验证码"  maxlength="6" class="join_ipt_code" data-ipt="join_form1"></div>
          <a href="javascript:;" class="btn_join_send" data-ipt="join_form1">获取验证码</a>
        </dt>
      </dl>
      <div id="error"><div id="error_info"></div></div>
      <a href="javascript:;" class="btn_enter_join" data-ipt="join_form1">提交获取</a>
    </div>
    <!--十部分-->
    <div id="bg_01">
      <div class="border">
        <div class="bg1_btn"></div>
      </div>
    </div>
    <div id="bg_02">
      <div class="border">
        <div class="clearHeight" style="height:285px;"></div>
        <div class="slider2" style="overflow: hidden;height: 341px;">
          <div class="slide">
            <div class="an1"></div>
          </div>
          <div class="slide">
            <div class="an2"></div>
          </div>
          <div class="slide">
            <div class="an3"></div>
          </div>
          <div class="slide">
            <div class="an4"></div>
          </div>
          <div class="slide">
            <div class="an5"></div>
          </div>
          <div class="slide">
            <div class="an6"></div>
          </div>
          <div class="slide">
            <div class="an7"></div>
          </div>
          <div class="slide">
            <div class="an8"></div>
          </div>
          <div class="slide">
            <div class="an9"></div>
          </div>
          <div class="slide">
            <div class="an10"></div>
          </div>
          <div class="slide">
            <div class="an11"></div>
          </div>
          <div class="slide">
            <div class="an12"></div>
          </div>
          <div class="slide">
            <div class="an13"></div>
          </div>
          <div class="slide">
            <div class="an14"></div>
          </div>
          <div class="slide">
            <div class="an15"></div>
          </div>
          <div class="slide">
            <div class="an16"></div>
          </div>
          <div class="slide">
            <div class="an17"></div>
          </div>
          <div class="slide">
            <div class="an18"></div>
          </div>
          <div class="slide">
            <div class="an19"></div>
          </div>
          <div class="slide">
            <div class="an20"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_03">
      <div class="border"></div>
    </div>
    <div id="bg_04">
      <div class="border">
        <div class="clearHeight" style="height:200px;"></div>
        <div class="slider3" style="overflow: hidden;height: 359px;">
          <div class="slide">
            <div class="an1"></div>
          </div>
          <div class="slide">
            <div class="an2"></div>
          </div>
          <div class="slide">
            <div class="an3"></div>
          </div>
          <div class="slide">
            <div class="an4"></div>
          </div>
          <div class="slide">
            <div class="an5"></div>
          </div>
          <div class="slide">
            <div class="an6"></div>
          </div>
          <div class="slide">
            <div class="an7"></div>
          </div>
          <div class="slide">
            <div class="an8"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_05">

    </div>
    <div id="bg_06">
      <div class="border">
        <div class="clearHeight" style="height:110px;"></div>
        <div class="slider4" style="overflow: hidden;height: 437px;">
          <div class="slide">
            <div class="an1"></div>
          </div>
          <div class="slide">
            <div class="an2"></div>
          </div>
          <div class="slide">
            <div class="an3"></div>
          </div>
          <div class="slide">
            <div class="an4"></div>
          </div>
          <div class="slide">
            <div class="an5"></div>
          </div>
          <div class="slide">
            <div class="an6"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_07">
      <div class="border">
        <div class="clearHeight" style="height:110px;"></div>
        <div class="slider1" style="overflow: hidden;height: 482px;">
          <div class="slide">
            <a class="an1" href="http://www.zbird.com/mono/aurora.html" target="_blank"></a>
          </div>
          <div class="slide">
            <a class="an2" href="http://www.zbird.com/mono/2017ladynewyork.html" target="_blank"></a>
          </div>
          <div class="slide">
            <a class="an3" href="http://www.zbird.com/mono/2016blinkcollection.html" target="_blank"></a>
          </div>
          <div class="slide">
            <a class="an4" href="http://www.zbird.com/mono/2018gongzhuguiguan.html" target="_blank"></a>
          </div>
          <div class="slide">
            <a class="an5" href="http://www.zbird.com/mono/2018intocolour.html" target="_blank"></a>
          </div>
          <div class="slide">
            <a class="an6" href="http://www.zbird.com/mono/2018youandme.html" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_08"></div>
    <div id="bg_09"></div>
    <div id="bg_10">
      <div class="border">
        <div class="bg1_btn bg10_btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "jiameng",

      mounted (){
          //jquery.min.js
        !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e, t, n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e, t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e, t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e, t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t, i, o, a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e, t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e, t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
            //日期部分和十
        (function($) {
          var defaults = {
            mode: 'horizontal',
            slideSelector: '',
            infiniteLoop: true,
            hideControlOnEnd: false,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: false,
            captions: false,
            ticker: false,
            tickerHover: false,
            adaptiveHeight: false,
            adaptiveHeightSpeed: 500,
            video: false,
            useCSS: true,
            preloadImages: 'visible',
            responsive: true,
            slideZIndex: 50,
            wrapperClass: 'bx-wrapper',
            clickAndMouseenter:false,
            touchEnabled: true,
            swipeThreshold: 50,
            oneToOneTouch: true,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            ariaLive: true,
            ariaHidden: true,

            // KEYBOARD
            keyboardEnabled: false,
            pager: true,
            pagerType: 'full',
            pagerShortSeparator: ' / ',
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: true,
            nextText: 'Next',
            prevText: 'Prev',
            nextSelector: null,
            prevSelector: null,
            autoControls: false,
            startText: 'Start',
            stopText: 'Stop',
            autoControlsCombine: false,
            autoControlsSelector: null,
            auto: false,
            pause: 4000,
            autoStart: true,
            autoDirection: 'next',
            stopAutoOnClick: false,
            autoHover: false,
            autoDelay: 0,
            autoSlideForOnePage: false,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            shrinkItems: false,
            onSliderLoad: function() { return true; },
            onSlideBefore: function() { return true; },
            onSlideAfter: function() { return true; },
            onSlideNext: function() { return true; },
            onSlidePrev: function() { return true; },
            onSliderResize: function() { return true; }
          };
          $.fn.bxSlider = function(options) {
            if (this.length === 0) {
              return this;
            }
            if (this.length > 1) {
              this.each(function() {
                $(this).bxSlider(options);
              });
              return this;
            }
            var slider = {},
             el = this,
              windowWidth = $(window).width(),
              windowHeight = $(window).height();
            if ($(el).data('bxSlider')) { return; }
            var init = function() {
              if ($(el).data('bxSlider')) { return; }
              slider.settings = $.extend({}, defaults, options);
              slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
              slider.children = el.children(slider.settings.slideSelector);
              if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
              if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
              if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
              slider.active = { index: slider.settings.startSlide };
              slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
              if (slider.carousel) { slider.settings.preloadImages = 'all'; }
              slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
              slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
              slider.working = false;
              slider.controls = {};
              slider.interval = null;
              slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
              slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
                var div = document.createElement('div'),
                  props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                for (var i = 0; i < props.length; i++) {
                  if (div.style[props[i]] !== undefined) {
                    slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                    slider.animProp = '-' + slider.cssPrefix + '-transform';
                    return true;
                  }
                }
                return false;
              }());
              if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
              el.data('origStyle', el.attr('style'));
              el.children(slider.settings.slideSelector).each(function() {
                $(this).data('origStyle', $(this).attr('style'));
              });
              setup();
            };
            var setup = function() {
              var preloadSelector = slider.children.eq(slider.settings.startSlide);
              el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
              slider.viewport = el.parent();
              if (slider.settings.ariaLive && !slider.settings.ticker) {
                slider.viewport.attr('aria-live', 'polite');
              }
              slider.loader = $('<div class="bx-loading" />');
              slider.viewport.prepend(slider.loader);
              el.css({
                width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
                position: 'relative'
              });
              if (slider.usingCSS && slider.settings.easing) {
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
              } else if (!slider.settings.easing) {
                slider.settings.easing = 'swing';
              }
              slider.viewport.css({
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              });
              slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
              });
              // make modification to the wrapper (.bx-wrapper)
              if (!slider.settings.pager && !slider.settings.controls) {
                slider.viewport.parent().css({
                  margin: '0 auto 0px'
                });
              }
              // apply css to all slider children
              slider.children.css({
                float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
              });
              // apply the calculated width after the float is applied to prevent scrollbar interference
              slider.children.css('width', getSlideWidth());
              // if slideMargin is supplied, add the css
              if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
              if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
              // if "fade" mode, add positioning and z-index CSS
              if (slider.settings.mode === 'fade') {
                slider.children.css({
                  position: 'absolute',
                  zIndex: 0,
                  display: 'none'
                });
                // prepare the z-index on the showing element
                slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
              }
              // create an element to contain all slider controls (pager, start / stop, etc)
              slider.controls.el = $('<div class="bx-controls" />');
              // if captions are requested, add them
              if (slider.settings.captions) { appendCaptions(); }
              // check if startSlide is last slide
              slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
              // if video is true, set up the fitVids plugin
              if (slider.settings.video) { el.fitVids(); }
              if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
              // only check for control addition if not in "ticker" mode
              if (!slider.settings.ticker) {
                // if controls are requested, add them
                if (slider.settings.controls) { appendControls(); }
                // if auto is true, and auto controls are requested, add them
                if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
                // if pager is requested, add it
                if (slider.settings.pager) { appendPager(); }
                // if any control option is requested, add the controls wrapper
                if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
                // if ticker mode, do not allow a pager
              } else {
                slider.settings.pager = false;
              }
              loadElements(preloadSelector, start);
            };

            var loadElements = function(selector, callback) {
              var total = selector.find('img:not([src=""]), iframe').length,
                count = 0;
              if (total === 0) {
                callback();
                return;
              }
              selector.find('img:not([src=""]), iframe').each(function() {
                $(this).one('load error', function() {
                  if (++count === total) { callback(); }
                }).each(function() {
                  if (this.complete) { $(this).trigger('load'); }
                });
              });
            };

            var start = function() {
              if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
                var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
                  sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
                  slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
                if (slider.settings.ariaHidden) {
                  sliceAppend.attr('aria-hidden', true);
                  slicePrepend.attr('aria-hidden', true);
                }
                el.append(sliceAppend).prepend(slicePrepend);
              }
              // remove the loading DOM element
              slider.loader.remove();
              setSlidePosition();
              if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
              slider.viewport.height(getViewportHeight());
              el.redrawSlider();
              slider.settings.onSliderLoad.call(el, slider.active.index);
              slider.initialized = true;
              if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
              if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
              if (slider.settings.ticker) { initTicker(); }

              if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
              // check for any updates to the controls (like hideControlOnEnd updates)
              if (slider.settings.controls) { updateDirectionControls(); }
              // if touchEnabled is true, setup the touch events
              if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
              // if keyboardEnabled is true, setup the keyboard events
              if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
                $(document).keydown(keyPress);
              }
            };

            var getViewportHeight = function() {
              var height = 0;
              var children = $();
              if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
                children = slider.children;
              } else {
                if (!slider.carousel) {
                  children = slider.children.eq(slider.active.index);
                } else {
                  var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
                  // add the current slide to the children
                  children = slider.children.eq(currentIndex);
                  // cycle through the remaining "showing" slides
                  for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
                    // if looped back to the start
                    if (currentIndex + i >= slider.children.length) {
                      children = children.add(slider.children.eq(i - 1));
                    } else {
                      children = children.add(slider.children.eq(currentIndex + i));
                    }
                  }
                }
              }
              // if "vertical" mode, calculate the sum of the heights of the children
              if (slider.settings.mode === 'vertical') {
                children.each(function(index) {
                  height += $(this).outerHeight();
                });
                // add user-supplied margins
                if (slider.settings.slideMargin > 0) {
                  height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
                // if not "vertical" mode, calculate the max height of the children
              } else {
                height = Math.max.apply(Math, children.map(function() {
                  return $(this).outerHeight(false);
                }).get());
              }

              if (slider.viewport.css('box-sizing') === 'border-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
                  parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
              } else if (slider.viewport.css('box-sizing') === 'padding-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
              }

              return height;
            };
            var getViewportMaxWidth = function() {
              var width = '100%';
              if (slider.settings.slideWidth > 0) {
                if (slider.settings.mode === 'horizontal') {
                  width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                } else {
                  width = slider.settings.slideWidth;
                }
              }
              return width;
            };
            var getSlideWidth = function() {
              var newElWidth = slider.settings.slideWidth,
                wrapWidth      = slider.viewport.width();
              if (slider.settings.slideWidth === 0 ||
                (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
                slider.settings.mode === 'vertical') {
                newElWidth = wrapWidth;
                // if carousel, use the thresholds to determine the width
              } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
                if (wrapWidth > slider.maxThreshold) {
                  return newElWidth;
                } else if (wrapWidth < slider.minThreshold) {
                  newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                } else if (slider.settings.shrinkItems) {
                  newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
                }
              }
              return newElWidth;
            };
            var getNumberSlidesShowing = function() {
              var slidesShowing = 1,
                childWidth = null;
              if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {

                if (slider.viewport.width() < slider.minThreshold) {
                  slidesShowing = slider.settings.minSlides;

                } else if (slider.viewport.width() > slider.maxThreshold) {
                  slidesShowing = slider.settings.maxSlides;

                } else {
                  childWidth = slider.children.first().width() + slider.settings.slideMargin;
                  slidesShowing = Math.floor((slider.viewport.width() +
                    slider.settings.slideMargin) / childWidth);
                }
              } else if (slider.settings.mode === 'vertical') {
                slidesShowing = slider.settings.minSlides;
              }
              return slidesShowing;
            };
            var getPagerQty = function() {
              var pagerQty = 0,
                breakPoint = 0,
                counter = 0;
              if (slider.settings.moveSlides > 0) {
                if (slider.settings.infiniteLoop) {
                  pagerQty = Math.ceil(slider.children.length / getMoveBy());
                } else {
                  while (breakPoint < slider.children.length) {
                    ++pagerQty;
                    breakPoint = counter + getNumberSlidesShowing();
                    counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                  }
                }
              } else {
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
              }
              return pagerQty;
            };
            var getMoveBy = function() {

              if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
                return slider.settings.moveSlides;
              }

              return getNumberSlidesShowing();
            };

            var setSlidePosition = function() {
              var position, lastChild, lastShowingIndex;

              if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
                if (slider.settings.mode === 'horizontal') {

                  lastChild = slider.children.last();
                  position = lastChild.position();
                  // set the left position
                  setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
                } else if (slider.settings.mode === 'vertical') {
                  // get the last showing index's position
                  lastShowingIndex = slider.children.length - slider.settings.minSlides;
                  position = slider.children.eq(lastShowingIndex).position();
                  // set the top position
                  setPositionProperty(-position.top, 'reset', 0);
                }
                // if not last slide
              } else {
                // get the position of the first showing slide
                position = slider.children.eq(slider.active.index * getMoveBy()).position();
                // check for last slide
                if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
                // set the respective position
                if (position !== undefined) {
                  if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
                  else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
                }
              }
            };
            var setPositionProperty = function(value, type, duration, params) {
              var animateObj, propValue;
              // use CSS transform
              if (slider.usingCSS) {
                // determine the translate3d value
                propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                // add the CSS transition-duration
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if (type === 'slide') {
                  // set the property value
                  el.css(slider.animProp, propValue);
                  if (duration !== 0) {

                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {

                      if (!$(e.target).is(el)) { return; }

                      el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                      updateAfterSlideTransition();
                    });
                  } else {
                    updateAfterSlideTransition();
                  }
                } else if (type === 'reset') {
                  el.css(slider.animProp, propValue);
                } else if (type === 'ticker') {
                  // make the transition use 'linear'
                  el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                  el.css(slider.animProp, propValue);
                  if (duration !== 0) {
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                      //make sure it's the correct one
                      if (!$(e.target).is(el)) { return; }

                      el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');

                      setPositionProperty(params.resetValue, 'reset', 0);

                      tickerLoop();
                    });
                  } else { //duration = 0
                    setPositionProperty(params.resetValue, 'reset', 0);
                    tickerLoop();
                  }
                }
                // use JS animate
              } else {
                animateObj = {};
                animateObj[slider.animProp] = value;
                if (type === 'slide') {
                  el.animate(animateObj, duration, slider.settings.easing, function() {
                    updateAfterSlideTransition();
                  });
                } else if (type === 'reset') {
                  el.css(slider.animProp, value);
                } else if (type === 'ticker') {
                  el.animate(animateObj, duration, 'linear', function() {
                    setPositionProperty(params.resetValue, 'reset', 0);
                    // run the recursive loop after animation
                    tickerLoop();
                  });
                }
              }
            };
            var populatePager = function() {
              var pagerHtml = '',
                linkContent = '',
                pagerQty = getPagerQty();
              for (var i = 0; i < pagerQty; i++) {
                linkContent = '';
                if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
                  linkContent = slider.settings.buildPager(i);
                  slider.pagerEl.addClass('bx-custom-pager');
                } else {
                  linkContent = i + 1;
                  slider.pagerEl.addClass('bx-default-pager');
                }

                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link bx-pager-link'+(i+1)+'">' + linkContent + '</a></div>';
              }

              slider.pagerEl.html(pagerHtml);
            };

            var appendPager = function() {
              if (!slider.settings.pagerCustom) {
                // create the pager DOM element
                slider.pagerEl = $('<div class="bx-pager" />');
                // if a pager selector was supplied, populate it with the pager
                if (slider.settings.pagerSelector) {
                  $(slider.settings.pagerSelector).html(slider.pagerEl);
                  // if no pager selector was supplied, add it after the wrapper
                } else {
                  slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                // populate the pager
                populatePager();
              } else {
                slider.pagerEl = $(slider.settings.pagerCustom);
              }
              // assign the pager click binding
              if(slider.settings.clickAndMouseenter){
                slider.pagerEl.on('click touchend mouseenter', 'a', clickPagerBind);
              }else{
                slider.pagerEl.on('click touchend', 'a', clickPagerBind);
              }

            };

            var appendControls = function() {
              slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
              slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
              // bind click actions to the controls
              slider.controls.next.bind('click touchend', clickNextBind);
              slider.controls.prev.bind('click touchend', clickPrevBind);
              // if nextSelector was supplied, populate it
              if (slider.settings.nextSelector) {
                $(slider.settings.nextSelector).append(slider.controls.next);
              }
              // if prevSelector was supplied, populate it
              if (slider.settings.prevSelector) {
                $(slider.settings.prevSelector).append(slider.controls.prev);
              }
              // if no custom selectors were supplied
              if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
                // add the controls to the DOM
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                // add the control elements to the directionEl
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                // slider.viewport.append(slider.controls.directionEl);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
              }
            };
            var appendControlsAuto = function() {
              slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
              slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
              // add the controls to the DOM
              slider.controls.autoEl = $('<div class="bx-controls-auto" />');
              // bind click actions to the controls
              slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
              slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
              // if autoControlsCombine, insert only the "start" control
              if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.append(slider.controls.start);
                // if autoControlsCombine is false, insert both controls
              } else {
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
              }
              // if auto controls selector was supplied, populate it with the controls
              if (slider.settings.autoControlsSelector) {
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
                // if auto controls selector was not supplied, add it after the wrapper
              } else {
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
              }
              // update the auto controls
              updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
            };


            var appendCaptions = function() {
              // cycle through each child
              slider.children.each(function(index) {
                // get the image title attribute
                var title = $(this).find('img:first').attr('title');
                // append the caption
                if (title !== undefined && ('' + title).length) {
                  $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
              });
            };

            var clickNextBind = function(e) {
              e.preventDefault();
              if (slider.controls.el.hasClass('disabled')) { return; }
              // if auto show is running, stop it
              if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
              el.goToNextSlide();
            };

            var clickPrevBind = function(e) {
              e.preventDefault();
              if (slider.controls.el.hasClass('disabled')) { return; }
              // if auto show is running, stop it
              if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
              el.goToPrevSlide();
            };

            var clickStartBind = function(e) {
              el.startAuto();
              e.preventDefault();
            };


            var clickStopBind = function(e) {
              el.stopAuto();
              e.preventDefault();
            };
            var clickPagerBind = function(e) {
              var pagerLink, pagerIndex;
              e.preventDefault();
              if (slider.controls.el.hasClass('disabled')) {
                return;
              }
              // if auto show is running, stop it
              if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
              pagerLink = $(e.currentTarget);
              if (pagerLink.attr('data-slide-index') !== undefined) {
                pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
                // if clicked pager link is not active, continue with the goToSlide call
                if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
              }
            };
            var updatePagerActive = function(slideIndex) {
              // if "short" pager type
              var len = slider.children.length; // nb of children
              if (slider.settings.pagerType === 'short') {
                if (slider.settings.maxSlides > 1) {
                  len = Math.ceil(slider.children.length / slider.settings.maxSlides);
                }
                slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
                return;
              }
              slider.pagerEl.find('a').removeClass('active');

              slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
            };
            var updateAfterSlideTransition = function() {
              if (slider.settings.infiniteLoop) {
                var position = '';

                if (slider.active.index === 0) {

                  position = slider.children.eq(0).position();

                } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
                  position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();

                } else if (slider.active.index === slider.children.length - 1) {
                  position = slider.children.eq(slider.children.length - 1).position();
                }
                if (position) {
                  if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
                  else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
                }
              }

              slider.working = false;

              slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            };

            var updateAutoControls = function(state) {

              if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.html(slider.controls[state]);

              } else {
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
              }
            };
            var updateDirectionControls = function() {
              if (getPagerQty() === 1) {
                slider.controls.prev.addClass('disabled');
                slider.controls.next.addClass('disabled');
              } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
                if (slider.active.index === 0) {
                  slider.controls.prev.addClass('disabled');
                  slider.controls.next.removeClass('disabled');
                } else if (slider.active.index === getPagerQty() - 1) {
                  slider.controls.next.addClass('disabled');
                  slider.controls.prev.removeClass('disabled');

                } else {
                  slider.controls.prev.removeClass('disabled');
                  slider.controls.next.removeClass('disabled');
                }
              }
            };

            var initAuto = function() {

              if (slider.settings.autoDelay > 0) {
                var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
              } else {
                el.startAuto();
                $(window).focus(function() {
                  el.startAuto();
                }).blur(function() {
                  el.stopAuto();
                });
              }
              if (slider.settings.autoHover) {
                el.parent().parent().hover(function() {

                  if (slider.interval) {

                    el.stopAuto(true);
                    slider.autoPaused = true;
                  }
                }, function() {
                  if (slider.autoPaused) {
                  el.startAuto(true);
                   slider.autoPaused = null;
                  }
                });
              }
            };
            var initTicker = function() {
              var startPosition = 0,
                position, transform, value, idx, ratio, property, newSpeed, totalDimens;

              if (slider.settings.autoDirection === 'next') {
                el.append(slider.children.clone().addClass('bx-clone'));
                } else {
                el.prepend(slider.children.clone().addClass('bx-clone'));
                position = slider.children.first().position();
                startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
              }
              setPositionProperty(startPosition, 'reset', 0);
              // do not allow controls in ticker mode
              slider.settings.pager = false;
              slider.settings.controls = false;
              slider.settings.autoControls = false;
              // if autoHover is requested
              if (slider.settings.tickerHover) {
                if (slider.usingCSS) {
                  idx = slider.settings.mode === 'horizontal' ? 4 : 5;
                  slider.viewport.hover(function() {
                    transform = el.css('-' + slider.cssPrefix + '-transform');
                    value = parseFloat(transform.split(',')[idx]);
                    setPositionProperty(value, 'reset', 0);
                  }, function() {
                    totalDimens = 0;
                    slider.children.each(function(index) {
                      totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                    });
                    ratio = slider.settings.speed / totalDimens;

                    property = slider.settings.mode === 'horizontal' ? 'left' : 'top';

                    newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
                    tickerLoop(newSpeed);
                  });
                } else {
                  slider.viewport.hover(function() {
                    el.stop();
                  }, function() {
                    totalDimens = 0;
                    slider.children.each(function(index) {
                      totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                    });
                    ratio = slider.settings.speed / totalDimens;
                    property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
                    newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                    tickerLoop(newSpeed);
                  });
                }
              }
              tickerLoop();
            };
            var tickerLoop = function(resumeSpeed) {
              var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
                position = {left: 0, top: 0},
                reset = {left: 0, top: 0},
                animateProperty, resetValue, params;
              if (slider.settings.autoDirection === 'next') {
                position = el.find('.bx-clone').first().position();
              } else {
                reset = slider.children.first().position();
              }
              animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
              resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
              params = {resetValue: resetValue};
              setPositionProperty(animateProperty, 'ticker', speed, params);
            };
            var isOnScreen = function(el) {
              var win = $(window),
                viewport = {
                  top: win.scrollTop(),
                  left: win.scrollLeft()
                },
                bounds = el.offset();

              viewport.right = viewport.left + win.width();
              viewport.bottom = viewport.top + win.height();
              bounds.right = bounds.left + el.outerWidth();
              bounds.bottom = bounds.top + el.outerHeight();

              return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
            };
            var keyPress = function(e) {
              var activeElementTag = document.activeElement.tagName.toLowerCase(),
                tagFilters = 'input|textarea',
                p = new RegExp(activeElementTag,['i']),
                result = p.exec(tagFilters);

              if (result == null && isOnScreen(el)) {
                if (e.keyCode === 39) {
                  clickNextBind(e);
                  return false;
                } else if (e.keyCode === 37) {
                  clickPrevBind(e);
                  return false;
                }
              }
            };
            var initTouch = function() {

              slider.touch = {
                start: {x: 0, y: 0},
                end: {x: 0, y: 0}
              };
              slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);
              slider.viewport.on('click', '.bxslider a', function(e) {
                if (slider.viewport.hasClass('click-disabled')) {
                  e.preventDefault();
                  slider.viewport.removeClass('click-disabled');
                }
              });
            };
            var onTouchStart = function(e) {
              slider.controls.el.addClass('disabled');
              if (slider.working) {
                e.preventDefault();
                slider.controls.el.removeClass('disabled');
              } else {
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent,
                  touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
                slider.touch.start.x = touchPoints[0].pageX;
                slider.touch.start.y = touchPoints[0].pageY;
                if (slider.viewport.get(0).setPointerCapture) {
                  slider.pointerId = orig.pointerId;
                  slider.viewport.get(0).setPointerCapture(slider.pointerId);
                }

                slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
                // bind a "touchend" event to the viewport
                slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
                slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
              }
            };
            var onPointerCancel = function(e) {
             setPositionProperty(slider.touch.originalPos.left, 'reset', 0);
              slider.controls.el.removeClass('disabled');
              slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
              slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
              slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
              if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
              }
            };
            var onTouchMove = function(e) {
              var orig = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
                // if scrolling on y axis, do not prevent default
                xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
                yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
                value = 0,
                change = 0;


              if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
                e.preventDefault();

              } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
                e.preventDefault();
              }
              if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {

                if (slider.settings.mode === 'horizontal') {
                  change = touchPoints[0].pageX - slider.touch.start.x;
                  value = slider.touch.originalPos.left + change;

                } else {
                  change = touchPoints[0].pageY - slider.touch.start.y;
                  value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
              }
            };
            var onTouchEnd = function(e) {
              slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);

              slider.controls.el.removeClass('disabled');
              var orig    = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
                value       = 0,
                distance    = 0;
              slider.touch.end.x = touchPoints[0].pageX;
              slider.touch.end.y = touchPoints[0].pageY;
              if (slider.settings.mode === 'fade') {
                distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if (distance >= slider.settings.swipeThreshold) {
                  if (slider.touch.start.x > slider.touch.end.x) {
                    el.goToNextSlide();
                  } else {
                    el.goToPrevSlide();
                  }
                  el.stopAuto();
                }
                // not fade mode
              } else {

                if (slider.settings.mode === 'horizontal') {
                  distance = slider.touch.end.x - slider.touch.start.x;
                  value = slider.touch.originalPos.left;
                } else {
                  distance = slider.touch.end.y - slider.touch.start.y;
                  value = slider.touch.originalPos.top;
                }
                if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
                  setPositionProperty(value, 'reset', 200);
                } else {
                  if (Math.abs(distance) >= slider.settings.swipeThreshold) {
                    if (distance < 0) {
                      el.goToNextSlide();
                    } else {
                      el.goToPrevSlide();
                    }
                    el.stopAuto();
                  } else {
                    setPositionProperty(value, 'reset', 200);
                  }
                }
              }
              slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
              if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
              }
            };
            var resizeWindow = function(e) {
              if (!slider.initialized) { return; }
              if (slider.working) {
                window.setTimeout(resizeWindow, 10);
              } else {
                var windowWidthNew = $(window).width(),
                  windowHeightNew = $(window).height();
                if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
                  windowWidth = windowWidthNew;
                  windowHeight = windowHeightNew;
                  el.redrawSlider();
                  slider.settings.onSliderResize.call(el, slider.active.index);
                }
              }
            };
            var applyAriaHiddenAttributes = function(startVisibleIndex) {
              var numberOfSlidesShowing = getNumberSlidesShowing();
              if (slider.settings.ariaHidden && !slider.settings.ticker) {
                slider.children.attr('aria-hidden', 'true').removeClass('on');
                slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false').addClass('on');
              }
            };
            var setSlideIndex = function(slideIndex) {
              if (slideIndex < 0) {
                if (slider.settings.infiniteLoop) {
                  return getPagerQty() - 1;
                }else {
                  return slider.active.index;
                }
              } else if (slideIndex >= getPagerQty()) {
                if (slider.settings.infiniteLoop) {
                  return 0;
                } else {
                  return slider.active.index;
                }
              } else {
                return slideIndex;
              }
            };
            el.goToSlide = function(slideIndex, direction) {
              var performTransition = true,
                moveBy = 0,
                position = {left: 0, top: 0},
                lastChild = null,
                lastShowingIndex, eq, value, requestEl;
              slider.oldIndex = slider.active.index;
              slider.active.index = setSlideIndex(slideIndex);
              if (slider.working || slider.active.index === slider.oldIndex) { return; }
              slider.working = true;

              performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
              if (typeof (performTransition) !== 'undefined' && !performTransition) {
                slider.active.index = slider.oldIndex; // restore old index
                slider.working = false; // is not in motion
                return;
              }
              if (direction === 'next') {
                if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                  performTransition = false;
                }
              } else if (direction === 'prev') {
                if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                  performTransition = false;
                }
              }
              slider.active.last = slider.active.index >= getPagerQty() - 1;
              if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
              if (slider.settings.controls) { updateDirectionControls(); }
              if (slider.settings.mode === 'fade') {
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                  slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
                  $(this).css('zIndex', slider.settings.slideZIndex);
                  updateAfterSlideTransition();
                });
              } else {
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                  slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
                  if (slider.settings.mode === 'horizontal') {
                    lastChild = slider.children.eq(slider.children.length - 1);
                    position = lastChild.position();
                    moveBy = slider.viewport.width() - lastChild.outerWidth();
                  } else {
                    lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    position = slider.children.eq(lastShowingIndex).position();
                  }
                } else if (slider.carousel && slider.active.last && direction === 'prev') {
                  eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                  lastChild = el.children('.bx-clone').eq(eq);
                  position = lastChild.position();
                } else if (direction === 'next' && slider.active.index === 0) {
                  position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
                  slider.active.last = false;
                } else if (slideIndex >= 0) {
                  requestEl = slideIndex * parseInt(getMoveBy());
                  position = slider.children.eq(requestEl).position();
                }
                if (typeof (position) !== 'undefined') {
                  value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
                  setPositionProperty(value, 'slide', slider.settings.speed);
                } else {
                  slider.working = false;
                }
              }
              if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
            };
            el.goToNextSlide = function() {
              if (!slider.settings.infiniteLoop && slider.active.last) { return; }
              var pagerIndex = parseInt(slider.active.index) + 1;
              el.goToSlide(pagerIndex, 'next');
            };
            el.goToPrevSlide = function() {
              if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
              var pagerIndex = parseInt(slider.active.index) - 1;
              el.goToSlide(pagerIndex, 'prev');
            };
            el.startAuto = function(preventControlUpdate) {
              if (slider.interval) { return; }
              slider.interval = setInterval(function() {
                if (slider.settings.autoDirection === 'next') {
                  el.goToNextSlide();
                } else {
                  el.goToPrevSlide();
                }
              }, slider.settings.pause);
              if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
            };
            el.stopAuto = function(preventControlUpdate) {
              if (!slider.interval) { return; }
              clearInterval(slider.interval);
              slider.interval = null;
              if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
            };
            el.getCurrentSlide = function() {
              return slider.active.index;
            };
            el.getCurrentSlideElement = function() {
              return slider.children.eq(slider.active.index);
            };
            el.getSlideElement = function(index) {
              return slider.children.eq(index);
            };
            el.getSlideCount = function() {
              return slider.children.length;
            };
            el.isWorking = function() {
              return slider.working;
            };
            el.redrawSlider = function() {
              slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
              slider.viewport.css('height', getViewportHeight());
              if (!slider.settings.ticker) { setSlidePosition(); }
              if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
              if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
              if (slider.settings.pager && !slider.settings.pagerCustom) {
                populatePager();
                updatePagerActive(slider.active.index);
              }
              if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
            };
            el.destroySlider = function() {
              if (!slider.initialized) { return; }
              slider.initialized = false;
              $('.bx-clone', this).remove();
              slider.children.each(function() {
                if ($(this).data('origStyle') !== undefined) {
                  $(this).attr('style', $(this).data('origStyle'));
                } else {
                  $(this).removeAttr('style');
                }
              });
              if ($(this).data('origStyle') !== undefined) {
                this.attr('style', $(this).data('origStyle'));
              } else {
                $(this).removeAttr('style');
              }
              $(this).unwrap().unwrap();
              if (slider.controls.el) { slider.controls.el.remove(); }
              if (slider.controls.next) { slider.controls.next.remove(); }
              if (slider.controls.prev) { slider.controls.prev.remove(); }
              if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
              $('.bx-caption', this).remove();
              if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
              clearInterval(slider.interval);
              if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
              if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
              $(this).removeData('bxSlider');
            };
            el.reloadSlider = function(settings) {
              if (settings !== undefined) { options = settings; }
              el.destroySlider();
              init();
              $(el).data('bxSlider', this);
            };
            init();
            $(el).data('bxSlider', this);
            return this;
          };
        })(jQuery);
        var jQ=$.noConflict(true);
        jQ(function($){
          $('.slider1').bxSlider({
            slideWidth: 1180,
            maxSlides: 3,
            moveSlides: 1,
            auto: true,
            pager: true,
            infiniteLoop: true,
            autoHover: true,
            speed: 300,
            pause: 3000
          });
          $('.slider2').bxSlider({
            mode:'fade',
            slideWidth: 1080,
            maxSlides: 3,
            moveSlides: 1,
            auto: true,
            pager: true,
            infiniteLoop: true,
            autoHover: true,
            speed: 0,
            pause: 2000,
            clickAndMouseenter: true,
            onSliderLoad: function() {
              $("#bg_02 .bx-pager-link1").html('2002.07');
              $("#bg_02 .bx-pager-link2").html('2007.05');
              $("#bg_02 .bx-pager-link3").html('2009.05');
              $("#bg_02 .bx-pager-link4").html('2011.04');
              $("#bg_02 .bx-pager-link5").html('2012.07');
              $("#bg_02 .bx-pager-link6").html('2014.07');
              $("#bg_02 .bx-pager-link7").html('2014.11');
              $("#bg_02 .bx-pager-link8").html('2015.01');
              $("#bg_02 .bx-pager-link9").html('2015.01');
              $("#bg_02 .bx-pager-link10").html('2015.06');
              $("#bg_02 .bx-pager-link11").html('2015.07');
              $("#bg_02 .bx-pager-link12").html('2015.11');
              $("#bg_02 .bx-pager-link13").html('2016.01');
              $("#bg_02 .bx-pager-link14").html('2016.05');
              $("#bg_02 .bx-pager-link15").html('2016.08');
              $("#bg_02 .bx-pager-link16").html('2017.01');
              $("#bg_02 .bx-pager-link17").html('2017.07');
              $("#bg_02 .bx-pager-link18").html('2017.09');
              $("#bg_02 .bx-pager-link19").html('2017.10');
              $("#bg_02 .bx-pager-link20").html('2018.08');
              return true;
            },
          });
          $('.slider3').bxSlider({
            mode:'fade',
            slideWidth: 1180,
            maxSlides: 3,
            moveSlides: 1,
            auto: true,
            pager: true,
            infiniteLoop: true,
            autoHover: true,
            speed: 0,
            pause: 2000,
            clickAndMouseenter: true,
            onSliderLoad: function() {
              $("#bg_04 .bx-pager-link1").html('成熟O2O模式');
              $("#bg_04 .bx-pager-link2").html('全球供应链');
              $("#bg_04 .bx-pager-link3").html('卓越工艺典范');
              $("#bg_04 .bx-pager-link4").html('行业销量引领者');
              $("#bg_04 .bx-pager-link5").html('多维战略合作');
              $("#bg_04 .bx-pager-link6").html('专业团队支持');
              $("#bg_04 .bx-pager-link7").html('市场营销推广');
              $("#bg_04 .bx-pager-link8").html('娱乐跨界营销');
              return true;
            },
          });
          $('.slider4').bxSlider({
            slideWidth: 1180,
            maxSlides: 3,
            moveSlides: 1,
            auto: true,
            pager: true,
            infiniteLoop: true,
            autoHover: true,
            speed: 300,
            pause: 2000
          });
        });
        //弹窗
        jQ(function($){

          $('.ages em').each(function(i){
            if(i==0){
              $(this).addClass('on');
            }else{
              $(this).removeClass('on');
            }
          })
          $('.join_rado_age').val('60后');
          $('.moneys em').each(function(i){
            if(i==0){
              $(this).addClass('on');
            }else{
              $(this).removeClass('on');
            }
          })
          $('.join_rado_money').val('20-50万');
          $("#join_ipt_sel option:first").prop("selected", 'selected');
          $('#join_ipt_sel2').html('<option value="-1">加盟城市</option>');

          //表单单选
          $('.join_ipt_rado dt em').click(function(){
            var data_info=$(this).attr('data-info');
            $(this).addClass('on');
            $(this).siblings('em').removeClass('on');
            $(this).siblings('input.join_rado_val').val(data_info);

          });

          // 发送验证码
          $('.btn_join_send').click(function() {
            var data_set=$(this).attr('data-ipt');
            var obj = $(this);
            if (obj.hasClass('sending')) {
              return false;
            }
            var phone = $.trim($('.join_ipt_tel[data-ipt='+data_set+']').val());
            if (!isMobile(phone)) {
              verifyipt('手机号码错误', 2000);
              return false;
            }
            $.ajax({
              url: '/education/sendyzm',
              type: 'post',
              cache: false,
              dataType: 'json',
              data :  {'phone' : phone},
              success: function(res) {
                if (res.code == '200') {
                  // 发送成功，开始倒计时
                  var times = 100;
                  $('.btn_join_send[data-ipt='+data_set+']').html(times + '秒内发送');
                  obj.addClass('sending');
                  interval = setInterval(function() {
                    times--;
                    $('.btn_join_send[data-ipt='+data_set+']').html(times + '秒内发送');
                    if (times == 0) {
                      obj.removeClass('sending');
                      clearInterval(interval);
                      $('.btn_join_send[data-ipt='+data_set+']').html('获取验证码');
                      times = 100;
                    }
                  }, 1000);
                  return false;
                } else {
                  // 发送失败，弹出信息弹框
                  verifyipt(res.msg,2000)
                  return false;
                }
              }
            });
          });



          //提交按钮
          $('.btn_enter_join').click(function(){
            // $(".join_wrap").css("display","none");
            $(".join_wrap,.join_wrapbg").hide();
            var data_set=$(this).attr('data-ipt');
            var name = $.trim($('.join_ipt_name[data-ipt='+data_set+']').val());
            var phone = $.trim($('.join_ipt_tel[data-ipt='+data_set+']').val());
            var code = $.trim($('.join_ipt_code[data-ipt='+data_set+']').val());
            var name_pattern = /^[\u4e00-\u9fa5]{2,4}$/;//中文
            var age = $('.join_rado_age').val();
            var money = $('.join_rado_money').val();
            var area = $('#join_ipt_sel2').val();
            if ( name == "姓名") {
              verifyipt('请输入姓名', 2000);
              return;
            }
            if (!name_pattern.test(name)) {
              verifyipt('姓名不能为空且必须为中文', 2000);
              return false;
            }
            if ( phone == "手机号") {
              verifyipt('请输入手机号', 2000);
              return;
            }
            if (!isMobile(phone)) {
              verifyipt('手机号码错误', 2000);
              return false;
            }
            if (code == "验证码") {
              verifyipt('验证码不能为空', 2000);
              return false;
            }
            if(area <= 0){
              verifyipt('加盟区域未选择', 2000);
              return false;
            }

            $.ajax({
              url: '/mono/savejm',
              type: 'post',
              cache: false,
              dataType: 'json',
              data :  {'age' : age, 'money' : money, 'name' : name , 'phone' : phone , 'code' : code , 'area' : area , 'from_id' : 'GWPC'},
              success: function(res) {
                if (res.code == '200') {
                  // 预约成功，弹出成功卡片
                  $('.join_wrap').hide();
                  $('#error_info').hide();
                  $('.hide_join_suss').show().delay(10000);
                  return false;
                } else {
                  // 预约失败，弹出消息
                  verifyipt(res.msg, 2000);
                  return false;
                }
              }
            });
          });
          //关闭填写成功
          $('.hide_join_suss').click(function(){
            $(".hide_join_suss,.join_wrapbg").hide();
          });
          $('.colse_join,.hide_join_btn').click(function(){
            $(".join_wrap,.join_wrapbg").hide();
          });
          $(".bg1_btn").click(function(event) {
            $(".join_wrap,.join_wrapbg").show();
          });
          function verifyipt(text,time){
            $('#error_info').html(text);
            $('#error_info').show(0,function(){
              $(this).delay(time).fadeOut();
            });
          }

          $('.join_ipt_name').focus(function() {
            var val =$(this).val();
            if (val=='姓名') {
              $(this).attr('value', '').css({'color':'#333','font-size':'12px'});
            };
          });
          $('.join_ipt_name').blur(function() {
            var val =$(this).val();
            if (val =="") {
              $(this).attr('value', '姓名').css({'color':'#999','font-size':'12px'});
            }
          });
          $('.join_ipt_tel').focus(function() {
            var val =$(this).val();
            if (val=='手机号') {
              $(this).attr('value', '').css({'color':'#333','font-size':'12px'});
            };
          });
          $('.join_ipt_tel').blur(function() {
            var val =$(this).val();
            if (val =="") {
              $(this).attr('value', '手机号').css({'color':'#999','font-size':'12px'});
            }
          });
          $('.join_ipt_code').focus(function() {
            var val =$(this).val();
            if (val=='验证码') {
              $(this).attr('value', '').css({'color':'#333','font-size':'12px'});
            };
          });
          $('.join_ipt_code').blur(function() {
            var val =$(this).val();
            if (val =="") {
              $(this).attr('value', '验证码').css({'color':'#999','font-size':'12px'});
            }
          });


          //联动省市
          $('#join_ipt_sel').unbind().bind('change',function(){
            var obj = $(this);
            var val = obj.val();
            var opt = '<option value="-1">加盟城市</option>';
            if(val < 0){
              $('#join_ipt_sel2').html(opt);
              return false;
            }else{
              var child = $("#join_ipt_sel option:selected").attr("data-child");
              var tmp = child.split(',');
              for(var i in tmp){
                var arr = tmp[i].split('-');
                opt += '<option value="'+arr[0]+'">'+arr[1]+'</option>';
              }
              $('#join_ipt_sel2').html(opt);
            }
          })
        });



      }
    }

</script>

<style scoped>
@import "../../style/css/jiameng.css";
.aw /deep/ .join_ipt_name[data-v-6fc70d51], .join_ipt_tel[data-v-6fc70d51], .join_ipt_code[data-v-6fc70d51] {

    line-height: 43px;
    margin: 0;
    border: 0;
    display: inline-block;
    background: none;
    width: 70%;
    height: 30px;
    font-family: Arial, "\5B8B\4F53";
}
.aw /deep/ .join_wrap{
      width: 600px;
    height: 590px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -285px;
    background: #fff;
    z-index: 50;
    color: #666;
    font-family: Arial,"\534E\6587\7EC6\9ED1","\5FAE\8F6F\96C5\9ED1";
}
</style>
