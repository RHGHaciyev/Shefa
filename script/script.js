$(document).ready(function () {
    $(".sec_play").click(function () {
        $(".iframes").css({ "display": "block" });
        return false;
    });
    $(window).click(function (event) {
        if (event.target.className == "iframes") {
            $(".iframes").fadeOut(400);
        }
    });
    $(".icon ").click(function () {
        $(this).css({ "text-decoration": "none", "color": "white", "color": "#13bfb1" })
    });
    $(".icons ").click(function () {
        $(this).css({ "text-decoration": "none", "color": "white", "color": "#13bfb1" })
    });
    $(".order_active").click(function () {
        $(this).css({ "text-decoration": "none", "color": "#ff5f83" })
    });
    $(".first_menu a").click(function () {
        $(this).css({ "text-decoration": "none", "color": "black" })
    });

    $(".activea").click(function () {
        $(this).css({ "text-decoration": "none", "color": "#ff5f83" })
    });
    // Start Scroll_Up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            $('.navul').css({ "background": "black" });
            $('.static').css({ "background": "black", "top": "0px" });

        } else {
            $('.scrollup').fadeOut();
            $('.navul').css({ "background": "transparent" });
            $('.static').css({ "background": "transparent", "top": "25px" });
        }
    });
    $('.scrollup').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        $(this).css({ "color": "white" })
        return false;
    });
    // End Scroll_Up
    // Start Firt_menu Scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.first_menu').fadeIn();
        } else {
            $('.first_menu').fadeOut();
        }
    });
    // End Firt_menu Scrolling
    // Start animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 944.875) {
            $('.photo').fadeIn();
        } else {
            $('.photo').fadeOut();
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1550) {
            $('.image').fadeIn();
        } else {
            $('.image').fadeOut();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 7300) {
            $('.s_name').css({ "margin-left": "70px" });
            $('.end li').css({ "padding-right": "30px", "padding-left": "10px" });
        }
        else {
            $('.s_name').css({ "margin-left": "0px" });
            $('.end li').css({ "padding-right": "0px", "padding-left": "0px" });
        }
    });
    setSection();
});
// End animation
// Start click_Scroll
function setSection() {
    $("nav  a").click(function (c) {
        c.preventDefault();
        var changeID = c.currentTarget.id + "change";
        $("html,body").animate({

            scrollTop: $("#" + changeID).offset().top
        }, 1500)
    })
    // End click_Scroll

    var click = true

    $(".bars").click(function () {
        $(this).css({ "color": "black" })
        if (click == true) {
            $(".navul").slideDown();
            click = false;
        } else {
            $(".navul").slideUp();
            click = true;
        }
        return false;
    })
    // first_menu
    //Start slider
    $(".dot").click(function () {
        if ($(this).hasClass("swipe")) {
            $(this).css({ "opacity": "1" });
            $(".active_dot").css({ "opacity": "0.5" });
            $(".slide_image").stop().animate({ "margin-left": "-570px" }, 500)
        } else {
            $(".slide_image").stop().animate({ "margin-left": "0px" }, 500)
        }
        return false;
    })
    $(".active_dot").click(function () {
        $(this).css({ "opacity": "1" });
        $(".dot").css({ "opacity": "0.5" });
        if ($(this).hasClass("swipe")) {
            $(".slide_image").stop().animate({ "margin-left": "0" }, 500)

        } else {
            $(".slide_image").stop().animate({ "margin-left": "-1140px" }, 500)
        }
        return false;
    })
    $(document).ready(function () {
        setInterval(function () {
            $(".slide_image").animate({ "margin-left": "-285px" }, 500, function () {

                $(this).find(".item:last").after($(this).find(".item:first")); {
                    $(this).css({ "margin-left": "0px" });
                }
            })
        }, 7000);
    });
    // 
    $(".sec_dot").click(function () {
        $(this).css({ "opacity": "1", "background": "#13bfb1" });
        $(".act_dot").css({ "background": "black" });
        if ($(this).hasClass("turn")) {
            $(".company_slide").stop().animate({ "margin-left": "-1250px" }, 300)
        } else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 300)
        }
    })
    $(".act_dot").click(function () {
        $(".sec_dot").css({ "opacity": "1", "background": "black" });
        $(".sec_dot_hidden,.sec_dot1_hidden,.sec_dot2_hidden,.sec_dot3_hidden,.sec_dot4_hidden")
            .css({ "background": "black" });
        $(this).css({ "opacity": "1", "background": "#13bfb1" });
        if ($(this).hasClass("turn")) {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        } else {
            $(".company_slide").stop().animate({ "margin-left": "-1250px" }, 500)
        }
    })
    // Owl slider
    $(".second_dot_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot1_hidden,.second_dot4_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot3_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
        else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot1_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot4_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot3_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot1_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-285px" }, 500)
        }
        else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot2_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot4_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot2_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-570px" }, 500)
        } else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot3_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot4_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot3_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-855px" }, 500)
        }
        else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot4_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot4_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-1140px" }, 500)
        }
        else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot5_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot4_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot5_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-1425px" }, 500)
        } else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot6_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden").css({ "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot5_hidden,.second_dot4_hidden,.second_dot2_hidden,.second_dot7_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot6_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-1710px" }, 500)
        } else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".second_dot7_hidden").click(function () {
        $(".active_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot5_hidden,.second_dot6_hidden,.second_dot2_hidden,.second_dot4_hidden,.second_dot8_hidden")
            .css({ "background": "black" });
        $(".second_dot7_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("again")) {
            $(".slide_owl").stop().animate({ "margin-left": "-1995px" }, 500)
        } else {
            $(".slide_owl").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    // Owl slider  
    $(".dot1").click(function () {
        $(".second_dot1_hidden,.second_dot3_hidden,.second_dot2_hidden,.second_dot4_hidden")
            .css({ "background": "black" });
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".dot1").css({ "background": "#13bfb1" });
        if ($(this).hasClass("other")) {
            $(".company_slide").stop().animate({ "margin-left": "-640px" }, 500)
        } else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".sec_dot_hidden").click(function () {
        $(".second_dot1_hidden,.second_dot3_hidden,.second_dot2_hidden,.second_dot4_hidden")
            .css({ "background": "black" });
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".sec_dot_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("return")) {
            $(".company_slide").stop().animate({ "margin-left": "-320px" }, 500)
        } else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".sec_dot1_hidden").click(function () {
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot4_hidden,.second_dot3_hidden,.second_dot2_hidden")
            .css({ "background": "black" });
        $(".sec_dot1_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("return")) {
            $(".company_slide").stop().animate({ "margin-left": "-640px" }, 500)
        } else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".sec_dot2_hidden").click(function () {
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot4_hidden")
            .css({ "background": "black" });
        $(".sec_dot2_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("return")) {
            $(".company_slide").stop().animate({ "margin-left": "-948px" }, 500)
        }
        else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".sec_dot3_hidden").click(function () {
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot2_hidden,.second_dot4_hidden")
            .css({ "background": "black" });
        if ($(this).hasClass("return")) {
            $(".company_slide").stop().animate({ "margin-left": "-1256px" }, 500)
        }
        else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    $(".sec_dot4_hidden").click(function () {
        $(".act_dot").css({ "opacity": "1", "background": "black" });
        $(".second_dot_hidden,.second_dot1_hidden,.second_dot3_hidden,.second_dot2_hidden")
            .css({ "background": "black" });
        $(".sec_dot4_hidden").css({ "background": "#13bfb1" });
        if ($(this).hasClass("return")) {
            $(".company_slide").stop().animate({ "margin-left": "-1564px" }, 500)
        }
        else {
            $(".company_slide").stop().animate({ "margin-left": "0px" }, 500)
        }
    })
    // End slider
}
