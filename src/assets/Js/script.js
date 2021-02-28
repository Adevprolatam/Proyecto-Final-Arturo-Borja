$(document).ready(function(){
    $('.container-menu li:has(ul)').click(function(e){
        e.preventDefault();
        if($(this).hasClass('activado')){

        }else{
            $('.container-menu li ul').slideUp();
            $('.container-menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });
    $('.btn-menu').click(function(){
       $('.container-menu .cont-menu').slideToggle();
    });
    $(window).resize(function(){
        if($(document).width()>450){
            $('..container-menu .cont-menu').css({'display':'block'});
           }
           if($(document).width()<450){
            $('.container-menu .cont-menu').css({'display':'none'});
           $('.container-menu li ul').slideUp();
           $('.cont-menu li').removeClass('activado');
           }
    });
});