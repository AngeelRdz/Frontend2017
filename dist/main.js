"use strict";!function(){function t(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("100"),$("#sticky-navigation").slideDown("100")}function i(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("100"),$("#sticky-navigation").slideUp("100")}function n(t){$.ajax({url:t.attr("action"),method:"POST",data:t.formObject(),dataType:"json",success:function(){alert("Todo salio bien")}})}function e(){var t=$("#description"),i=t.height();return $(window).scrollTop()>$(window).height()-5.5*i}var o=!1,s=0,a=$("[data-name='image-counter']").attr("content");console.log(a);$("#contact-form").on("submit",function(t){return t.preventDefault(),n($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){a>s?s++:s=0,$("#gallery .inner").css({left:"-"+100*s+"%"})},3e3),console.log($(window).height()),$(window).scroll(function(){var n=e();n&&!o&&(console.log("Cambiar la navegacion"),o=!0,t()),!n&&o&&(console.log("Regresar la navegacion"),o=!1,i())})}();
