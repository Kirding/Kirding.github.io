// build time:Sun Mar 03 2019 18:51:14 GMT+0800 (中国标准时间)
$(function(){$('[data-toggle="tooltip"]').tooltip(),void 0!==$.fn.slimScroll&&$(".sidebar .slimContent").slimScroll({height:$(window).height(),color:"rgba(0,0,0,0.15)",size:"5px",position:"right"}),$("#collapseToc").on("shown.bs.collapse",function(){void 0!==$.fn.slimScroll&&$(".sidebar .slimContent").slimScroll().on("slimscroll")}),$(".geopattern").each(function(){$(this).geopattern($(this).data("pattern-id"))});$("#nav-main").okayNav({swipe_enabled:!1});if($("[data-stick-bottom]").keepInView({fixed:!1,parentClass:"has-sticky",customClass:"sticky",trigger:"bottom",zindex:42,edgeOffset:0}),$("[data-stick-top]").keepInView({fixed:!0,parentClass:"has-sticky",customClass:"sticky",trigger:"top",zindex:42,edgeOffset:0}),$("ul.main-nav").hasClass("menu-highlight")){for(var t=location.pathname,i=$("ul.main-nav>li"),e=-1,a=0,s=i.length;a<s;a++){var o=$(i[a]).find("a").attr("href");(-1<t.indexOf(o)||"/"===t&&("/."===o||"/"===o||"index.html"===o||"/index.html"===o))&&(e=a),$(i[a]).removeClass("active")}i[e]&&$(i[e]).addClass("active")}});
//rebuild by neat 