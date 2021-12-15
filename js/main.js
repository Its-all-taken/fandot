$(document).ready(function(){
    $(".cover").mousemove(function(event) {
        let mousePos = { x: -1, y: -1 };
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
        if (mousePos.x < 400 && mousePos.y < 400){
          $(".main-imag-c").attr("src","images/halo.png");
        }
        else if (mousePos.x < 500 && mousePos.y < 800){
          $(".main-imag-c").attr("src","images/venti.png");
        }
        else if (mousePos.x < 900 && mousePos.y < 900){
          $(".main-imag-c").attr("src","images/destiny.png");
        }
        else if (mousePos.x < 1000 && mousePos.y < 400){
          $(".main-imag-c").attr("src","images/doctor.png");
        }
      });

    });
