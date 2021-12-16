$(document).ready(function(){
    $(".cover").mousemove(function(event) {
        let mousePos = { x: -1, y: -1 };
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
        if (mousePos.x < 300 && mousePos.y < 300 || mousePos.x > 1200 && mousePos.y > 1200){
          $(".main-imag-c").attr("src","images/halo.png");
        }
        else if (mousePos.x < 600 && mousePos.y < 600){
          $(".main-imag-c").attr("src","images/venti.png");
        }
        else if (mousePos.x < 900 && mousePos.y < 900){
          $(".main-imag-c").attr("src","images/destiny.png");
        }
        else if (mousePos.x < 1200 && mousePos.y < 1200){
          $(".main-imag-c").attr("src","images/doctor.png");
        }
      });
    $(".imag-test").click(function(event) {
      $(this).toggleClass("imag-test-op");
      let testSelect = $('.imag-test-op').length;
      $('.result').empty();
      $('.result').append(testSelect * 12.5 + '%');
    });
  });
