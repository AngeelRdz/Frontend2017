"use strict";$.fn.formObject=function(){var i={};return $.each($(this).serializeArray(),function(n,o){i[o.name]=o.value||""}),i};
