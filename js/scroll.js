// build time:Sun Mar 06 2022 21:33:22 GMT+0800 (GMT+08:00)
$(function(){var t=0;$(".toc-child").hide();$(window).scroll(throttle(function(t){var i=$(this).scrollTop();if(!isMobile()){a(i);s(i)}var o=e(i);if(i>56){if(o){$("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log()}else{$("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible")}$("#page-header").addClass("fixed");if($("#go-up").css("opacity")==="0"){$("#go-up").velocity("stop").velocity({translateX:-30,rotateZ:360,opacity:1},{easing:"easeOutQuart",duration:200})}}else{if(i===0){$("#page-header").removeClass("fixed").removeClass("visible")}$("#go-up").velocity("stop").velocity({translateX:0,rotateZ:180,opacity:0},{easing:"linear",duration:200})}},50,100));$("#go-up").on("click",function(){$("body").velocity("stop").velocity("scroll",{duration:500,easing:"easeOutQuart"})});$("#post-content").find("h1,h2,h3,h4,h5,h6").on("click",function(t){i("#"+$(this).attr("id"))});$(".toc-link").on("click",function(t){t.preventDefault();i($(this).attr("href"))});function e(e){var i=e>t;t=e;return i}function i(t){var e;try{e=$(t)}catch(i){e=$(decodeURI(t))}e.velocity("stop").velocity("scroll",{duration:500,easing:"easeInOutQuart"})}function o(t){if(t.is(":visible")){return}t.velocity("stop").velocity("transition.fadeIn",{duration:500,easing:"easeInQuart"})}function a(t){var e=$("#content-outer").height();var i=$(window).height();var o=e>i?e-i:$(document).height()-i;var a=t/o;var n=Math.round(a*100);var s=n>100?100:n<=0?0:n;$(".progress-num").text(s);$(".sidebar-toc__progress-bar").velocity("stop").velocity({width:s+"%"},{duration:100,easing:"easeInOutQuart"})}function n(t){if(window.history.replaceState&&t!==window.location.hash){window.history.replaceState(undefined,undefined,t)}}function s(t){if($(".toc-link").length===0){return false}var e=$("#post-content").find("h1,h2,h3,h4,h5,h6");var i="";e.each(function(){var e=$(this);if(t>e.offset().top-25){i="#"+$(this).attr("id")}});if(i===""){$(".toc-link").removeClass("active");$(".toc-child").hide()}var a=GLOBAL_CONFIG.hexoVersion[0];if(a==="5"){i=encodeURI(i)}var s=$(".toc-link.active");if(i&&s.attr("href")!==i){n(i);$(".toc-link").removeClass("active");var r=$('.toc-link[href="'+i+'"]');r.addClass("active");var c=r.parents(".toc-child");var l=c.length>0?c.last():r;o(l.closest(".toc-item").find(".toc-child"));l.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}}});
//rebuild by neat 