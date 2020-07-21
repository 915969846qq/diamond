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
