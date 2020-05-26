$(window).scroll(() => { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 70) {
        console.log(scroll);
        $('.header').addClass('header-aux2');
    } else {
        $('.header').removeClass('header-aux2');
    }
});

