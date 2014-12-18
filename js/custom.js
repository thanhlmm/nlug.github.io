$().ready(function() {
	//alert($(window).scrollTop());
	$('a').smoothScroll();
	$(window).scroll(function() {
        if ($(this).scrollTop() > 137) {
        	scrolltop = $(this).scrollTop();
        	//alert('fucker');
            $('.main-nav').css('top', function (index) {
            	//alert(index);
            	return scrolltop-127;
            });
        } else {
            $('.main-nav').css('top', '0px');
        }
    });
});