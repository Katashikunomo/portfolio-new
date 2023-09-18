$(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 5){
    // Estilos para el contenedor
      document.getElementById('test').style.backgroundColor='';
      document.getElementById('test').style.backdropFilter='blur(10px)';
      document.getElementById('test').style.boxShadow='0 1px 8px #000 ';
       
    //   Estilos para los elementos call to action
      // document.getElementById('navScroll').style.color='#fff';
      // document.getElementById('navScroll1').style.color='#fff';
      // document.getElementById('navScroll2').style.color='#fff';
    }
  
   if(scrollTop < 20){
    // Estilos para el contenedor
      document.getElementById('test').style.backgroundColor='';
      document.getElementById('test').style.boxShadow='none';
      document.getElementById('test').style.transition="all ease 0.3s";
      
    // //   Estilos para los elementos call to action
    //   document.getElementById('navScroll').style.color='';
    //   document.getElementById('navScroll1').style.color='';
    //   document.getElementById('navScroll2').style.color='';
      
    }
  
  });