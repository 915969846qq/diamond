jQ(function($){
  $("#cjbg_02 a,#cjbg_01,.f_rng_focus a").mouseenter(function(){
    $(this).fadeTo(100, 0.8,function(){
      $(this).fadeTo(100, 1);
    });
  });
  $(".cjp4").mouseenter(function(){
    $(this).fadeTo(100, 0.8,function(){
      $(this).fadeTo(100, 1);
    });
  });
  $(".cjp1").mouseenter(function(){
    $(this).fadeTo(100, 0.2,function(){
      $(this).fadeTo(100, 0);
    });
  });
  // 戒托
  var rngind=0;
  var _this=$('.f_rng_focus').find('ul');
  var num=_this.find('li').length;
  var li_w=274;
  var view_count=3;
  $('#u_rngs_next').click(function(){
    rngind++;
    if(rngind + view_count >= num){
      rngind--;
    }
    _this.animate({'left':'-'+(li_w*rngind)+'px'},400);

    if(rngind === num-(view_count+1)){
      $('#u_rngs_next').addClass('on');
    }else{
      $('#u_rngs_prev').addClass('on');
    }
  });

  $('#u_rngs_prev').click(function(){
    rngind--;
    if(rngind < 0){
      rngind = 0;
    }
    _this.animate({'left':'-'+(li_w*rngind)+'px'},400);

    if(rngind === 0){
      $('#u_rngs_prev').removeClass('on');
    }else{
      $('#u_rngs_next').removeClass('on');
    }
  });

  $('.f_rng_focus ul li').hover(
    function () {
      $(this).animate({'margin-top':'-12px'},400);
    },function () {
      $(this).animate({'margin-top':'0'},400);
    });

});
