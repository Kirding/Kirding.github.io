// build time:Mon Mar 04 2019 13:00:46 GMT+0800 (中国标准时间)
!function(n,t){var e=n(".ins-search"),i=e.find(".ins-search-input"),r=e.find(".ins-section-wrapper"),a=e.find(".ins-section-container");function s(e,i,r,a,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("icon").addClass("icon-"+e)).append(null!=i&&""!=i?i:t.TRANSLATION.UNTITLED).append(r?n("<span>").addClass("ins-slug").text(r):null)).append(a?n("<p>").addClass("ins-search-preview").text(a):null).attr("data-url",s)}function o(e,i){var r,a,o;if(0===i.length)return null;switch(r=t.TRANSLATION[e],e){case"POSTS":case"PAGES":a=i.map(function(n){return s("file",n.title,null,n.text.slice(0,150),t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":a=i.map(function(n){return s("CATEGORIES"===e?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return(o=r,n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(o))).append(a)}function c(n,t){var e={};n.pages.concat(n.posts).forEach(function(n){n[t]&&n[t].forEach(function(n){e[n.name]=n})});var i=[];for(var t in e)i.push(e[t]);return i}function u(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function l(n,t,e){var i=u(n);return i.filter(function(n){return 0<e.filter(function(e){return!!t.hasOwnProperty(e)&&(-1<t[e].toUpperCase().indexOf(n)||void 0)}).length}).length===i.length}function f(n,t,e,i){var r=0;return u(n).forEach(function(n){var a=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(a);r+=s?s.length*i[e]:0}})}),r}function p(n,t){var e,i,r=(e=t,{POST:function(n){return f(e,n,["title","text"],[3,1])},PAGE:function(n){return f(e,n,["title","text"],[3,1])},CATEGORY:function(n){return f(e,n,["name","slug"],[1,1])},TAG:function(n){return f(e,n,["name","slug"],[1,1])}}),a=(i=t,{POST:function(n){return l(i,n,["title","text"])},PAGE:function(n){return l(i,n,["title","text"])},CATEGORY:function(n){return l(i,n,["name","slug"])},TAG:function(n){return l(i,n,["name","slug"])}}),s=n.posts,o=n.pages,u=c(n,"tags"),p=c(n,"categories");return{posts:s.filter(a.POST).sort(function(n,t){return r.POST(t)-r.POST(n)}).slice(0,5),pages:o.filter(a.PAGE).sort(function(n,t){return r.PAGE(t)-r.PAGE(n)}).slice(0,5),categories:p.filter(a.CATEGORY).sort(function(n,t){return r.CATEGORY(t)-r.CATEGORY(n)}).slice(0,5),tags:u.filter(a.TAG).sort(function(n,t){return r.TAG(t)-r.TAG(n)}).slice(0,5)}}function d(t){var e=n.makeArray(a.find(".ins-selectable")),i=-1;e.forEach(function(t,e){n(t).hasClass("active")&&(i=e)});var s=(e.length+i+t)%e.length;n(e[i]).removeClass("active"),n(e[s]).addClass("active"),function(n){if(0!==n.length){var t=r[0].clientHeight,e=n.position().top-r.scrollTop(),i=n[0].clientHeight+n.position().top;i>t+r.scrollTop()&&r.scrollTop(i-r[0].clientHeight),e<0&&r.scrollTop(n.position().top)}}(n(e[s]))}function h(n){n&&n.length&&(location.href=n.attr("data-url"))}e.parent().remove(".ins-search"),n("body").append(e),n.getJSON(t.CONTENT_URL,function(t){"#ins-search"===location.hash.trim()&&e.addClass("show"),i.on("input",function(){var e=n(this).val();!function(n){for(var t in a.empty(),n)a.append(o(t.toUpperCase(),n[t]))}(p(t,e))}),i.trigger("input")}),n(document).on("click focus",".search-form-input",function(){e.addClass("show"),e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){h(n(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(e.hasClass("show"))switch(n.keyCode){case 27:e.removeClass("show");break;case 38:d(-1);break;case 40:d(1);break;case 13:h(a.find(".ins-selectable.active").eq(0))}})}(jQuery,window.INSIGHT_CONFIG);
//rebuild by neat 