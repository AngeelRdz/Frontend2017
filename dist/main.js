"use strict";!function(){function o(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("slow"),$("#sticky-navigation").slideDown("slow")}function n(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("slow"),$("#sticky-navigation").slideUp("slow")}function i(){var o=$("#description"),n=o.height();return $(window).scrollTop()>$(window).height()-1.5*n}var a=!1;$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),console.log($(window).height()),$(window).scroll(function(){var s=i();s&&!a&&(console.log("Cambiar la navegacion"),a=!0,o()),!s&&a&&(console.log("Regresar la navegacion"),a=!1,n())})}();
