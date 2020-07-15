(window).scroll(function(e){
    parallax();
  });
  
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.banner').css('top',-(scrolled*0.0315)+'rem');
    $('.banner > h1').css('top',-(scrolled*-0.005)+'rem');
    $('.banner > h1').css('opacity',1-(scrolled*.00175));
  };