$(document).ready(function(){

    $(window).on('scroll load',function(){
        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar .navlist li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });   
    $('.accordion-heading').click(function(){
        $('.accordion .accordion-content').slideUp();
        $(this).next('.accordion-content').slideDown()
    });  
});