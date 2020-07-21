  function timeover(obj,t,txt,text){
    var count = t;
    var butTime = function(){
      var butNode = $('#'+obj);
      //alert(butNode.val()); 
      butNode.css('cursor','not-allowed');
      butNode.css('color','#C0C0C0');
      butNode.attr("disabled",true);
      butNode.val(count+"秒后"+txt);
      count--;
      if(count<=0)
      {
      butNode.val(text);
      butNode.attr("disabled",false);
      butNode.css('cursor','pointer');
      butNode.css('color','#666666');
      window.clearInterval(time);
      }
    };
    var time;
    butTime();
    time = window.setInterval(butTime,1000);
  }
  
  var jQ = $.noConflict(true);
  (function($){
      $('.left_menu a').click(function() {
          var a_index=$(this).parent('dd').index('.left_menu dd');
          $('.left_menu a').removeClass('on');
          $('.show_wp').hide();
          $(this).addClass('on');
          $('.show_wp').eq(a_index).show();
          //console.log('div:'+$('.show_wp').eq(a_index).show().index());	
      });
      //我的鸟巢列表删除
      $('.form_list').hover(function() {
          $('.icon_detele').hide();
          $(this).children('.icon_detele').show();
      }, function() {
          $(this).children('.icon_detele').hide();
      });
  //显示删除
      $('.collect_list li').hover(function() {
          if($(this).find(".opacity_wp").length==0) {
              $(this).append('<span class="icon_delete02"></span>');
          }
      }, function() {
          $(this).children('.icon_delete02').remove();
      });
      //显示
      $('body').on('click','.icon_delete02',function() {
          $obj = $(this);
          var id = $(this).prev().attr('rel');
          var url = '/collect/del/id/'+id;
          $.ajax({
              type: 'post',
              url: url,
              success: function(resp){
                  var retcode = errorshow(resp,true);
                  if(retcode.code == 1){
                      $obj.parent().append('<div class="opacity_wp"></div>');
                      $obj.parent().append('<div class="delete_btn"><span>确定删除？</span><a href="javascript:;" class="btn_enter"></a><a href="javascript:;" class="btn_cancel"></a></div>');
                      $obj.remove();
                  }else if(retcode.errcode == 101){
                      window.self.location.href = g_baseUrls.base +'/auth/login?redirecto=' + g_commonInfos.myselftojumpbase64;
                  }else{
                      alert('系统繁忙请稍后再试！')
                  }
              }
          })
      });
      //关闭
      $('body').on('click','.btn_cancel,.opacity_wp',function() {
          $('.opacity_wp').remove();
          $('.delete_btn').remove();
      });
      //删除收藏
      $(document).on('click','.btn_enter',function() {
          $(this).parents('li').remove();
      });
      //预约切换
      $('.yuyue_tab a').click(function() {
          var a_index=$(this).index();
          $('.yuyue_tab a').removeClass('on');
          $('.box_wp').hide();
          $(this).addClass('on');
          $('.box_wp').eq(a_index).show();
      });
  
      //预约切换
      $('.liquan_tab a').click(function() {
          var a_index=$(this).index();
          $('.liquan_tab a').removeClass('on');
          $(this).addClass('on');
      });
  
  //----------------------新增---------------------------//
   
  //评论
      $('.btn_comt_order').click(function() {
          $(this).parents('.comt_list').siblings('.hide_comt_wp').slideToggle();		
      });
  
      //取消评论
      $('.btn_comt_cancel').click(function() {
          $(this).parents('.hide_comt_wp').slideUp();
      });	
      //文字提示
      var areaString = "";
      $('.comt_textarea').keyup(function() {
          var len=$(this).val().length;
          if(len > 200){
              $(this).val(areaString);
              $(this).siblings(".warring_word").text('评论已超出200个文字');
              return false;
          }
          if(len <= 200){
              $(this).siblings(".warring_word").text('');
          }
          $(this).siblings('.words_num').text(200-len);
          areaString = $(this).val();
          
          // console.log($(".comt_textarea").val());
      });
      //文字提示
      $(".comt_textarea").focus(function(){
          $(this).siblings(".warring_word").text("");
      });
      $('.btn_comt_enter').click(function() {
  
          var _this=$(this).parent().siblings('.comt_area');
          var len01=$(_this).find('#pro_textarea').val().length;
          var len02=$(_this).find('#sever_textarea').val().length;
          //var w_wd=
          if (len01<=10 ) {
              $(_this).find('#pro_textarea').siblings('.warring_word').text('评论不少于10个文字');
              return false;
          }
          if (len02<=10 ) {
              $(_this).find('#pro_textarea').siblings('.warring_word').text('评论不少于10个文字');
              return false;
          }
          if (10<len01 && len01<=200) {
              $(_this).find('#pro_textarea').siblings('.warring_word').text('');
          }
          if (len01>200) {
              $(_this).find('#pro_textarea').siblings('.warring_word').text('评论已超出200个文字');
          };
          
      });
      //积分切换
      $('.jifen_tab_title em').click(function() {
          var _index=$(this).index();
          console.log(_index);
          $('.jifen_tab_title em').removeClass('on');
          $(this).addClass('on');
          $('.jifen_tab_title em').parent().siblings('.form_wp').children('.box_wp').hide();
          $(this).parent().siblings('.form_wp').children('.box_wp').eq(_index).show();
      });
      //个人资料 性别 婚否
      $('.icon_radio').click(function() {
          $(this).siblings().removeClass('on');
          $(this).addClass('on');
      });
  //个人资料日期 地址等下拉
       $('.select_leave dt').click(function(e) {
           e = e||event; stopFunc(e);
           $(this).children('em').css('color','#333');//增加
           var state=$(this).attr('state');
           $('.select_leave dd').hide();
           $('.select_leave dt').removeClass('on');
           if (state == 'none') {
               $(this).attr('state', 'able');
               $(this).siblings().show();
               $(this).addClass('on');
           }if (state == 'able') {
               $(this).attr('state','none');
               $(this).removeClass('on');
               $(this).siblings().hide();
           };
       });
       //------------------------------增加----------------------//
       $('.per_add select').click(function() {
           $(this).css('color','#333');//增加
       });
       //---------------------------end-------------------------//
       /*性别与婚姻状态切换*/
       $('.personradio').click(function(){
           var data = $(this).attr('data');
           $(this).parent().parent().find('.rad').val(data);
       })
       //地址日期选择
       $('.select_leave dd em').click(function() {
           var this_inex=$(this).text();
           var val = $(this).attr('data');
           var _this=$(this).parent().siblings('dt').children('em');
           $(this).parent().siblings('dt').children('em').text(this_inex);
           $(this).parent().parent().find('input').val(val);
           $(this).parent().hide();
           $(this).parent().siblings('dt').attr('state','none').removeClass('on');
           if ($(_this).hasClass('gray_unable')) {
               $(_this).removeClass('gray_unable');
               $(this).parent().siblings('dt').children('em').text(this_inex);
               $(this).parent().hide();
               $(this).parent().siblings('dt').attr('state','none').removeClass('on');
           };
       });
       //街道字体颜色
       //修改
       $('.input_add').focus(function() {
           var val = $('.input_add').val();
           if (val=='街道名称/编号 楼宇名称 房间号') {
                   $(this).attr('value','');
           }
           $(this).attr('value', '').removeClass('gray_unable').addClass('gray_able');
       });
       $('.input_add').blur(function() {
           var val = $('.input_add').val();
          if (val=="") {
              $('.send_input').attr('value', '街道名称/编号 楼宇名称 房间号');
          }
           
       });
       //end
       
       //修改
       $('.btn_alter').click(function() {
           
       	$(this).parent().siblings('.per_leave').children('.per_row').hide();
       	$(this).parent().siblings('.per_leave').children('.per_row_text').show();
       	$(this).parent().siblings().children('.per_row_text').hide();
       	$(this).parent().siblings().children('.per_row').show();
       	$(this).siblings('.btn_save').show();
       	$(this).siblings('.btn_cancel_04').show();
       	$(this).hide();
       });
       //取消
       $('.btn_cancel_04').click(function() {
       	$('.per_row').hide();
       	$(this).parent().siblings('.per_opl').children('.per_row').show();
       	$(this).parent().siblings('.per_mardate').children('.per_row').show();
       	$(this).parent().siblings().children('.per_row_text').show();
       	$(this).siblings('.btn_save').hide();
       	$(this).siblings('.btn_alter').show();
       	$(this).hide();
       });
       //冒泡
       $(document).click(function(){
           $('.select_leave dd ').hide();
           $('.select_leave dt').removeClass('on');
      });
       //冒泡
       function stopFunc(e){   
          e.stopPropagation?e.stopPropagation():e.cancelBubble = true; 
      }
  
  
      //解绑手机
      
      $('body').on('click', '.btn_reli_tel', function() {
          $('body').append('<div class="opacity_z5k"></div>');
          $('body').append('<div class="tips_tel"><span>如果您需要解除手机绑定</span></span>请联系客服电话<em>400-880-0051</em></span><a href="javascript:;" class="btn_enter_113"></a></div>');
      });
      $('body').on('click', '.opacity_z5k ,.btn_enter_113', function() {
          $('.opacity_z5k').remove();
          $('.tips_tel').remove();
      })
  //------------------------修改密码-------------------------------//
      //修改密码邮箱手机选择
      $('.vefy_input_01').click(function(e) {
          e = e||event; stopFunc(e);
          $('.vefy_drop').toggle();
      });
      
      $('.vefy_drop em').click(function() {
          var text=$(this).attr('name');
          $('.vefy_input_01').children('em').text(text);	
          $(this).parent().hide();
          if (text=="邮箱") {
              $('.verify_01wp_mail').show();
              $('.verify_01wp_tel').hide();
          }if (text=="手机") {
              $('.verify_01wp_mail').hide();
              $('.verify_01wp_tel').show();
          };
      });
  //短信验证码文字提示	
       $('.input_code').focus(function() {
           var val =$(this).val();
           if (val=='请输入短信验证码') {
               $(this).attr('value', '').css({'color':'#333','font-size':'14px'});	
               $('.icon_19').hide();
               $('.vefy_warring_tips').text("");
           };
       });
       $('.input_code').blur(function() {
           var val =$(this).val();
           if (val =="") {
               $(this).attr('value', '请输入短信验证码').css({'color':'#999','font-size':'12px'});	
           }
       });
   //修改密码  验证码验证下一步
      $('#pswd_next01,#alter_mail_bd_next01').click(function() {
          var val =$('.input_code').val();
          var patrn=/^\d{6}$/;
          if (val =="") {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text("请输入验证码");
           }
  
  
  
  
           if ( !patrn.exec(val)) {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text('请输入正确验证码');
               return;
           }if (val !=="") {
               $(this).siblings().find('.icon_19').hide();
               $(this).siblings('.vefy_warring_tips').text("");
           }
      });
  //输入手机号后去掉错误提示
      $('.tel_bd').focus(function() {
          $('.steps01_bd_tel').find('.icon_19').hide();
          $('.steps01_bd_tel').find('.vefy_warring_tips').text("");
      });
  //----------------------绑定手机--------------------------// 
  //手机绑定输入手机号
      $('#tel_bd_next01').click(function() {
          $obj = $(this);
          var val =$('.tel_bd').val();
          var patrn=/^1[34578]\d{9}$/;
          if (val =="") {
               $('.steps01_bd_tel').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text("请输入手机号");
           }
           if ( ! isMobile(val) ) {
               $('.steps01_bd_tel').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text('请输入正确手机号');
               return;
           }else{
               $.ajax({
                type: 'GET',
                url: g_baseUrls.base+'/auth/onlyphone/',
                data : {'phone':val},
                success: function(act){
                  if(act == 0){
                      $obj.siblings('.vefy_warring_tips').text('该手机号已经被其它会员绑定');
                      $('.steps01_bd_tel').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
                  }else{
                      $('.yzphone_01').hide();
                      $('.yzphone_02').show();
                      $('.yzphone_03').html(val);
                      $('#new_phone').val(val);
                  }
                }
              });
           }
      });
  //------------------------绑定邮箱------------------------------------// 
  //输入邮箱后去掉错误提示
      $('.mail_bd,#new_email').focus(function() {
          $('.steps_mail01,.steps01_bd_mail').find('.icon_19').hide();
          $('.steps_mail01,.steps01_bd_mail').find('.vefy_warring_tips').text("");
      });
  //验证绑定邮箱发送验证到邮箱
  /*	$('#mail_bd_next01').click(function() {
          var val =$('.input_code').val();
          var patrn= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (val =="") {
               $('.steps01_bd_mail').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text("请输入邮箱");
           }
           if ( !patrn.exec(val)) {
               $('.steps01_bd_mail').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text('请输入正确的邮箱地址');
               return;
           }if (val !=="") {
               $('.steps01_bd_mail').find('.icon_19').hide();
               $(this).siblings('.vefy_warring_tips').text("");
           }
      });*/
  //-------------------------------修改绑定手机--------------------------------//
  //
      /*$('#alter_tel_bd_next01').click(function() {
          var val =$('.input_code').val();
          var patrn=/^\d{6}$/;
          if (val =="") {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text("请输入验证码");
           }
           if ( !patrn.exec(val)) {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text('请输入正确验证码');
               return;
           }if (val !=="") {
               $(this).siblings().find('.icon_19').hide();
               $(this).siblings('.vefy_warring_tips').text("");
           }
      });*/
      
      //-------------------------------修改绑定邮箱--------------------------------//
  //第一步验证码
      $('#alter_mail_bd_next01').click(function() {
          var val =$('.input_code').val();
          var patrn=/^\d{6}$/;
          if (val =="") {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text("请输入验证码");
           }
           if ( !patrn.exec(val)) {
               $(this).siblings().find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
               $(this).siblings('.vefy_warring_tips').text('请输入正确验证码');
               return;
           }if (val !=="") {
               $(this).siblings().find('.icon_19').hide();
               $(this).siblings('.vefy_warring_tips').text("");
           }
      });
      //第二步填写邮箱
      $('#btn_mail_code').click(function() {
          var val =$('.input_code').val();
          var patrn= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (val =="") {	
               $(this).parent().siblings('.vefy_warring_tips').text("请输入邮箱");
           }
           if ( !patrn.exec(val)) {
               $(this).parent().siblings('.vefy_warring_tips').text('请输入正确的邮箱地址');
               return;
           }if (val !=="") {
               $(this).parent().siblings('.vefy_warring_tips').text("");
           }
      });
      //
      $('.input_mail_bd').focus(function() {
          $(this).parent().siblings('.vefy_warring_tips').text("");
      });
  //联合登录
      $('#union_btn_seting').click(function() {
          var tel=$('.union_input_tel').val();
          var mm=$('.union_input_mm').val();
          var mm02=$('.union_input_mmagain').val();
          var code=$('.union_input_code').val();
          var patrn01=/^1[3|5][0-9]\d{4,8}$/;
          var patrn02=/^[a-zA-Z0-9_-]{6,20}$/;
          var patrn03=/^\d{6}$/;
          console.log('a');
          if (tel==""||mm==""||mm02==""||code=="") {
              $(this).siblings('.tps_tel').text('手机号码不能为空');
              $(this).siblings('.tps_mm').text('密码不能为空，请填写密码');
              $(this).siblings('.tps_mmagan').text('密码不能为空，请填写密码');
              $(this).siblings('.tps_code').text('验证码不能为空');
          }if (! isMobile(tel)||!patrn02.exec(mm)||!patrn02.exec(mm02)||!patrn03.exec(code)) {
              $(this).siblings('.tps_tel').text('请输入正确手机号');
              $(this).siblings('.tps_mm').text('6-20位大小写字母，数字及"-"、"_"组合');
              $(this).siblings('.tps_mmagan').text('6-20位大小写字母，数字及"-"、"_"组合');
              $(this).siblings('.tps_code').text('验证码输入有误');
              return;
          }if (tel!=""||mm!=""||mm02!=""||code!="") {
              $(this).siblings('.tps_tel').text('');
              $(this).siblings('.tps_mm').text('');
              $(this).siblings('.tps_mmagan').text('');
              $(this).siblings('.tps_code').text('');
          }
      });
      $('.union_input_tel,.union_input_mm,.union_input_mmagain,.union_input_code').focus(function() {
              $(this).parent().siblings('.union_tips').text("");
          });
  //----------------------------------收货地址----------------------//
      $('#checked_default').click(function() {
          if ($(this).children('i').hasClass('i_checked')) {
              $(this).children('i').removeClass('i_checked');
              $('.is_default').val(0);
          }else{
              $(this).children('i').addClass('i_checked');
              $('.is_default').val(1);
          }
      });
  //---------------------------------//
  $('#btn_add_addr').click(function() {
      alert("11")
      var state=$(this).attr('state');
      if (state=="none") {
          $(this).attr('state', 'able');
          $('.addr_hide_wp').slideDown();
          $(this).addClass('btn_add_on');
              
          }if (state=="able") {
              $(this).attr('state', 'none');
              $('.addr_hide_wp').slideUp();
              $(this).removeClass('btn_add_on');
          }
      });
  
  
  /*修改手机*/
  $('#new_code').click(function(){
      var phone = $('#new_phone').val();
      if (phone == ""){
          $('.bd_putin_wd').text('请输入正确的手机号');
          return false;
      }
      var strs = $(this).attr('data');
      if(typeof(strs) == 'undefined'){
          strs = '';
      }
      if( isMobile(phone)){
          $.ajax({
            type: 'GET',
            url: g_baseUrls.base+'/auth/onlyphone/',
            data : {'phone':phone},
            success: function(act){
              if(act == 0){
                alert('该手机号已经被其它会员绑定');
              }else{
                  $.ajax({
                    type: 'GET',
                    url: g_baseUrls.base+'/member/findpass/',
                    data : {'type':'phone','new_phone':phone, 'strs':strs},
                    dataType : 'json',
                    success: function(res){
                      if(res.error == 0){
                        timeover('new_code',60,'再次发送','免费获取验证码');
                      }else{
                        alert(res.msg);
                      }
                    }
                  });
              }
            }
          });
      }else{
          $('.bd_putin_wd').text('请输入正确的手机号');
      }
  })
  
  
  /*修改邮箱*/
  $('.get_email').click(function(){
      var again = $('this').attr('data');
      if(again == 'again'){
          var email = $(this).attr('data2');
      }else{
          var email = $('#new_email').val();
          $('.again_email').attr('data2',email);
          $('.again_newemail').html(email);
      }
      
      var emact = $(this).attr('data1');//邮件类型
      var patrn= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (email == ""){
          $('.steps01_bd_mail').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
          $('.vefy_warring_tips').text('请输入邮箱');
          return false;
      }
  
      if(patrn.exec(email)){
          $.ajax({
            type: 'GET',
            url: g_baseUrls.base+'/auth/onlyemail/',
            data : {'email':email},
            success: function(act){
              if(act == 0){
                $('.steps01_bd_mail').find('.icon_19').show().removeClass('icon_right_19').addClass('icon_warning_19');
                $('.vefy_warring_tips').text('该邮箱已经被其它会员使用');
              }else{
                  $.ajax({
                    type: 'GET',
                    url: g_baseUrls.base+'/member/findpass/',
                    data : {'type':'email','new_email':email, 'emact':emact},
                    dataType : 'json',
                    success: function(res){
                       if(res.code == 200){
                          $('.pass_a').hide();
                          $('.pass_z').show();
                          $('.mailUrl').attr('href', res.url);
                          if(again == 'again')
                          {
                              alert('邮件已发送请查收');
                          }
                        }else{
                          alert(res.msg);
                        }
                    }
                  });
              }
            }
          });
      }else{
          $('.vefy_warring_tips').text('请输入正确的邮箱地址');
      }
  })
  
  
  /*找回密码需要使用*/
  $('#get_code').click(function(){
      var strs = $(this).attr('data');
      if(typeof(strs) == 'undefined'){
          strs = '';
      }
      $.ajax({
        type: 'GET',
        url: g_baseUrls.base+'/member/findpass/',
        data : {'type':'phone', 'strs':strs},
        dataType : 'json',
        success: function(res){
          if(res.error == 0){
            timeover('get_code',60,'再次发送','免费获取验证码');
          }else{
            alert(res.msg);
          }
        }
      });
    });
   
  $('.findpass').click(function(){
      var phone = $('#new_phone').val();
      if(typeof(phone) == 'undefined'){
          phone = '';
      }
      var type = $(this).attr('data2');//操作类型
      var code = $('#check_sum').val();//手机验证码
      var emact = $(this).attr('data1');//邮件类型
      var again = $(this).attr('data');//再次请求
      $.ajax({
        type: 'GET',
        url: g_baseUrls.base+'/member/findpass/',
        data : {'type':type, 'code':code, 'emact':emact, 'new_phone':phone},
        dataType : 'json',
        success: function(res){
          if(type == 'checkCode'){
            if(res.code == 200){
              $('#findpassphone').submit();
            }else{
              var $eobj = $('.vefy_input_04').find('.icon_19');
              $eobj.show().removeClass('icon_right_19').addClass('icon_warning_19');
              $eobj.removeClass('icon_right_19');
              $eobj.addClass('icon_warning_19');
              $('.vefy_warring_tips').text('请输入正确验证码');
            }
          }else{
            if(res.code == 200){
              $('.pass_a').hide();
              $('.pass_z').show();
              $('.mailUrl').attr('href', res.url);
              if(again == 'again')
              {
                  alert('邮件已发送请查收');
              }
            }else{
              alert(res.msg);
            }
          }
        }
      });
    
    })
   
  })(jQ);
  export {			//关键
	timeover
}

