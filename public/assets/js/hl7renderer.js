//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

function goToByScroll(id)
{
    $(id).addClass("grid-item").show(0, function()
    {
        // animation completed. update the layout of the panels
        $("#panels").masonry("reloadItems").masonry();
        var scrollPosition=$(id).offset().top+$(".navbar-static-top").height();
        $("body").animate({scrollTop: ($(id).offset().top-$(".navbar-static-top").height())}, "fast", function()
        {
            var originalColor=$(id+" .pn-bg").css("color");
            var originalBgColor=$(id+" .mint-header").css("background-color");

            $(id+" .pn").effect("bounce", {distance: 20, times:4}, 1000);

            $(id+" .pn-bg").animate(
            {
                color: 'rgb(141, 208, 182)'
            }, 1000, function ()
            {
                $(this).animate({ color: originalColor });
            });

            $(id+" .mint-header").animate(
            {
                backgroundColor: 'white'
            }, 1000, function ()
            {
                $(this).animate({ backgroundColor: originalBgColor });
            });
        });
    });
}
