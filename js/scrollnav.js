
// scroll para agregar color al nav al hacer scroll

$(window).on('scroll', function(){
  
    if($(window).scrollTop()){
    
    $('nav').addClass('navegador');
    }else{
        $('nav').removeClass('navegador');
    }
    })