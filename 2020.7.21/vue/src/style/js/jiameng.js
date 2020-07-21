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
