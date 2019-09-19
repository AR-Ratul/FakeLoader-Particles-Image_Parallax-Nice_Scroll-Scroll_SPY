
$(function(){
    $("body").niceScroll({
        cursorcolor: "#40afcc",
        cursorwidth: "10px",
        cursorborder: "0",
    });

	$.fakeLoader({

// Time in milliseconds for fakeLoader disappear
timeToHide:2000, 

// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner6",//Options: 

// Background color. Hex, RGB or RGBA colors
bgColor:"#59ACCA",
            
});


	var images = document.getElementsByClassName('simple-parallax');
	var para = new simpleParallax(images,{

    delay: .0,
    orientation:'left',
    scale:'1.2',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,
    });



    


});


! function(e) {
    "use strict";
    e('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = e(this.hash);
            if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
                scrollTop: t.offset().top - 48
            }, 1e3, "easeOutBack"), !1
        }
    }), e("a").click(function() {
        e(".navbar-collapse").collapse("hide")
    }), e("body").scrollspy({
        target: ".navbar",
        offset: 54
    });
    var t = function() {
        e(".navbar").offset().top > 100 ? e(".navbar").addClass("navbar-shrink") : e(".navbar").removeClass("navbar-shrink")
    };
    t(), e(window).scroll(t)
}(jQuery);


