!function(m,v,s,i){var t,O,a,l,o,n,r,c,u,f,e="mPageScroll2id",S="mPS2id",g=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id']",h={scrollSpeed:1300,autoScrollSpeed:!0,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:S+"-clicked",targetClass:S+"-target",highlightClass:S+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,disablePluginBelow:!1,clickEvents:!0,onStart:function(){},onComplete:function(){},defaultSelector:!1},d={init:function(e){e=m.extend(!0,{},h,e);m(s).data(S,e),O=m(s).data(S),t=t?t+","+this.selector:this.selector,O.defaultSelector&&("object"==typeof m(t)&&0!==m(t).length||(t=g)),O.clickEvents&&m(s).undelegate("."+S).delegate(t,"click."+S,function(e){if(p._isDisabled.call(null))p._removeClasses.call(null);else{var t=m(this),a=t.attr("href"),n=t.prop("href");a&&-1!==a.indexOf("#/")||(p._reset.call(null),f=t.data("ps2id-offset")||0,p._isValid.call(null,a,n)&&p._findTarget.call(null,a)&&(e.preventDefault(),l="selector",o=t,p._setClasses.call(null,!0),p._scrollTo.call(null)))}}),m(v).unbind("."+S).bind("scroll."+S+" resize."+S,function(){if(p._isDisabled.call(null))p._removeClasses.call(null);else{var l=m("._"+S+"-t");l.each(function(e){var t=m(this),a=t.attr("id"),n=p._findHighlight.call(null,a);p._setClasses.call(null,!1,t,n),e==l.length-1&&p._extendClasses.call(null)})}}),a=!0,p._setup.call(null)},scrollTo:function(e,t){if(p._isDisabled.call(null))p._removeClasses.call(null);else if(e&&void 0!==e){p._isInit.call(null);var a={layout:O.layout,offset:O.offset,clicked:!1};t=m.extend(!0,{},a,t);p._reset.call(null),c=t.layout,u=t.offset,e=-1!==e.indexOf("#")?e:"#"+e,p._isValid.call(null,e)&&p._findTarget.call(null,e)&&(l="scrollTo",(o=t.clicked)&&p._setClasses.call(null,!0),p._scrollTo.call(null))}},destroy:function(){m(v).unbind("."+S),m(s).undelegate("."+S).removeData(S),m("._"+S+"-t").removeData(S),p._removeClasses.call(null,!0)}},p={_isDisabled:function(){var e=v,t="inner",a=O.disablePluginBelow instanceof Array?[O.disablePluginBelow[0]||0,O.disablePluginBelow[1]||0]:[O.disablePluginBelow||0,0];return"innerWidth"in v||(t="client",e=s.documentElement||s.body),e[t+"Width"]<=a[0]||e[t+"Height"]<=a[1]},_isValid:function(e,t){if(e){var a=-1!==(t=t||e).indexOf("#/")?t.split("#/")[0]:t.split("#")[0],n=v.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===a||a===n)}},_setup:function(){var i=O.highlightSelector&&""!==O.highlightSelector?O.highlightSelector:t,o=1;return m(i).each(function(){var e=m(this),t=e.attr("href"),a=e.prop("href");if(p._isValid.call(null,t,a)){var n=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],l=m("#"+n);if(0<l.length){l.hasClass("_"+S+"-t")||l.addClass("_"+S+"-t").data(S,{i:o}),e.hasClass("_"+S+"-h")||e.addClass("_"+S+"-h");var s=p._findHighlight.call(null,n);p._setClasses.call(null,!1,l,s),++o==m(i).length&&p._extendClasses.call(null)}}})},_findTarget:function(e){var t=-1!==e.indexOf("#/")?e.split("#/")[1]:e.split("#")[1],a=m("#"+t);if(a.length<1||"fixed"===a.css("position")){if("top"!==t)return;a=m("body")}return n=a,c||(c=O.layout),u=p._setOffset.call(null),(r=[(a.offset().top-u[0]).toString(),(a.offset().left-u[1]).toString()])[0]=r[0]<0?0:r[0],r[1]=r[1]<0?0:r[1],r},_setOffset:function(){var e,t,a,n;switch(u||(u=O.offset?O.offset:0),f&&(u=f),typeof u){case"object":case"string":0<(t=[(e=[u.y?u.y:u,u.x?u.x:u])[0]instanceof jQuery?e[0]:m(e[0]),e[1]instanceof jQuery?e[1]:m(e[1])])[0].length?(a=t[0].height(),"fixed"===t[0].css("position")&&(a+=t[0][0].offsetTop)):a=!isNaN(parseFloat(e[0]))&&isFinite(e[0])?parseInt(e[0]):0,0<t[1].length?(n=t[1].width(),"fixed"===t[1].css("position")&&(n+=t[1][0].offsetLeft)):n=!isNaN(parseFloat(e[1]))&&isFinite(e[1])?parseInt(e[1]):0;break;case"function":(e=u.call(null))instanceof Array?(a=e[0],n=e[1]):a=n=e;break;default:a=n=parseInt(u)}return[a,n]},_findHighlight:function(e){var t=v.location.toString().split("#")[0],a=m("._"+S+"-h[href='#"+e+"']"),n=m("._"+S+"-h[href='"+t+"#"+e+"']"),l=m("._"+S+"-h[href='#/"+e+"']"),s=m("._"+S+"-h[href='"+t+"#/"+e+"']");return a=0<a.length?a:n,0<(l=0<l.length?l:s).length?l:a},_setClasses:function(e,t,a){var n=O.clickedClass,l=O.targetClass,s=O.highlightClass;e&&n&&""!==n?(m("."+n).removeClass(n),o.addClass(n)):t&&l&&""!==l&&a&&s&&""!==s&&(p._currentTarget.call(null,t)?(t.addClass(l),a.addClass(s)):(!O.keepHighlightUntilNext||1<m("."+s).length)&&(t.removeClass(l),a.removeClass(s)))},_extendClasses:function(){var e=O.targetClass,t=O.highlightClass,a=m("."+e),n=m("."+t),l=e+"-first",s=e+"-last",i=t+"-first",o=t+"-last";m("._"+S+"-t").removeClass(l+" "+s),m("._"+S+"-h").removeClass(i+" "+o),O.forceSingleHighlight?O.keepHighlightUntilNext&&1<a.length?(a.slice(0,1).removeClass(e),n.slice(0,1).removeClass(t)):(a.slice(1).removeClass(e),n.slice(1).removeClass(t)):(a.slice(0,1).addClass(l).end().slice(-1).addClass(s),n.slice(0,1).addClass(i).end().slice(-1).addClass(o))},_removeClasses:function(e){m("."+O.clickedClass).removeClass(O.clickedClass),m("."+O.targetClass).removeClass(O.targetClass+" "+O.targetClass+"-first "+O.targetClass+"-last"),m("."+O.highlightClass).removeClass(O.highlightClass+" "+O.highlightClass+"-first "+O.highlightClass+"-last"),e&&(m("._"+S+"-t").removeClass("_"+S+"-t"),m("._"+S+"-h").removeClass("_"+S+"-h"))},_currentTarget:function(e){var t=O["target_"+e.data(S).i],a=e[0].getBoundingClientRect();if(void 0!==t){var n=e.offset().top,l=e.offset().left,s=t.from?t.from+n:n,i=t.to?t.to+n:n,o=t.fromX?t.fromX+l:l,r=t.toX?t.toX+l:l;return a.top>=i&&a.top<=s&&a.left>=r&&a.left<=o}var c=m(v).height(),u=m(v).width(),f=e.height(),g=e.width(),h=1+f/c,d=h,p=f<c?h*(c/f):h,C=1+g/u,_=C,I=g<u?C*(u/g):C;return a.top<=c/d&&a.bottom>=c/p&&a.left<=u/_&&a.right>=u/I},_scrollTo:function(){O.scrollSpeed=parseInt(O.scrollSpeed),r=O.pageEndSmoothScroll?p._pageEndSmoothScroll.call(null):r;var e=m("html,body"),t=O.autoScrollSpeed?p._autoScrollSpeed.call(null):O.scrollSpeed,a=e.is(":animated")?O.scrollingEasing:O.scrollEasing,n=m(v).scrollTop(),l=m(v).scrollLeft();switch(c){case"horizontal":l!=r[1]&&(p._callbacks.call(null,"onStart"),e.stop().animate({scrollLeft:r[1]},t,a).promise().then(function(){p._callbacks.call(null,"onComplete")}));break;case"auto":var s;if(n!=r[0]||l!=r[1])if(p._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))e.stop().animate({pageYOffset:r[0],pageXOffset:r[1]},{duration:t,easing:a,step:function(e,t){"pageXOffset"==t.prop?s=e:"pageYOffset"==t.prop&&v.scrollTo(s,e)}}).promise().then(function(){p._callbacks.call(null,"onComplete")});else e.stop().animate({scrollTop:r[0],scrollLeft:r[1]},t,a).promise().then(function(){p._callbacks.call(null,"onComplete")});break;default:n!=r[0]&&(p._callbacks.call(null,"onStart"),e.stop().animate({scrollTop:r[0]},t,a).promise().then(function(){p._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var e=m(s).height(),t=m(s).width(),a=m(v).height(),n=m(v).width();return[e-r[0]<a?e-a:r[0],t-r[1]<n?t-n:r[1]]},_autoScrollSpeed:function(){var e=m(v).scrollTop(),t=m(v).scrollLeft(),a=m(s).height(),n=m(s).width(),l=[O.scrollSpeed+O.scrollSpeed*Math.floor(Math.abs(r[0]-e)/a*100)/100,O.scrollSpeed+O.scrollSpeed*Math.floor(Math.abs(r[1]-t)/n*100)/100];return Math.max.apply(Math,l)},_callbacks:function(e){if(O)switch(this[S]={trigger:l,clicked:o,target:n,scrollTo:{y:r[0],x:r[1]}},e){case"onStart":O.onStart.call(null,this[S]);break;case"onComplete":O.onComplete.call(null,this[S])}},_reset:function(){c=u=f=!1},_isInit:function(){a||d.init.apply(this)},_easing:function(){m.easing.easeInQuad=m.easing.easeInQuad||function(e,t,a,n,l){return n*(t/=l)*t+a},m.easing.easeOutQuad=m.easing.easeOutQuad||function(e,t,a,n,l){return-n*(t/=l)*(t-2)+a},m.easing.easeInOutQuad=m.easing.easeInOutQuad||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},m.easing.easeInCubic=m.easing.easeInCubic||function(e,t,a,n,l){return n*(t/=l)*t*t+a},m.easing.easeOutCubic=m.easing.easeOutCubic||function(e,t,a,n,l){return n*((t=t/l-1)*t*t+1)+a},m.easing.easeInOutCubic=m.easing.easeInOutCubic||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},m.easing.easeInQuart=m.easing.easeInQuart||function(e,t,a,n,l){return n*(t/=l)*t*t*t+a},m.easing.easeOutQuart=m.easing.easeOutQuart||function(e,t,a,n,l){return-n*((t=t/l-1)*t*t*t-1)+a},m.easing.easeInOutQuart=m.easing.easeInOutQuart||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},m.easing.easeInQuint=m.easing.easeInQuint||function(e,t,a,n,l){return n*(t/=l)*t*t*t*t+a},m.easing.easeOutQuint=m.easing.easeOutQuint||function(e,t,a,n,l){return n*((t=t/l-1)*t*t*t*t+1)+a},m.easing.easeInOutQuint=m.easing.easeInOutQuint||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},m.easing.easeInExpo=m.easing.easeInExpo||function(e,t,a,n,l){return 0==t?a:n*Math.pow(2,10*(t/l-1))+a},m.easing.easeOutExpo=m.easing.easeOutExpo||function(e,t,a,n,l){return t==l?a+n:n*(1-Math.pow(2,-10*t/l))+a},m.easing.easeInOutExpo=m.easing.easeInOutExpo||function(e,t,a,n,l){return 0==t?a:t==l?a+n:(t/=l/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(2-Math.pow(2,-10*--t))+a},m.easing.easeInSine=m.easing.easeInSine||function(e,t,a,n,l){return-n*Math.cos(t/l*(Math.PI/2))+n+a},m.easing.easeOutSine=m.easing.easeOutSine||function(e,t,a,n,l){return n*Math.sin(t/l*(Math.PI/2))+a},m.easing.easeInOutSine=m.easing.easeInOutSine||function(e,t,a,n,l){return-n/2*(Math.cos(Math.PI*t/l)-1)+a},m.easing.easeInCirc=m.easing.easeInCirc||function(e,t,a,n,l){return-n*(Math.sqrt(1-(t/=l)*t)-1)+a},m.easing.easeOutCirc=m.easing.easeOutCirc||function(e,t,a,n,l){return n*Math.sqrt(1-(t=t/l-1)*t)+a},m.easing.easeInOutCirc=m.easing.easeInOutCirc||function(e,t,a,n,l){return(t/=l/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},m.easing.easeInElastic=m.easing.easeInElastic||function(e,t,a,n,l){var s=1.70158,i=0,o=n;if(0==t)return a;if(1==(t/=l))return a+n;if(i||(i=.3*l),o<Math.abs(n)){o=n;s=i/4}else s=i/(2*Math.PI)*Math.asin(n/o);return-o*Math.pow(2,10*(t-=1))*Math.sin((t*l-s)*(2*Math.PI)/i)+a},m.easing.easeOutElastic=m.easing.easeOutElastic||function(e,t,a,n,l){var s=1.70158,i=0,o=n;if(0==t)return a;if(1==(t/=l))return a+n;if(i||(i=.3*l),o<Math.abs(n)){o=n;s=i/4}else s=i/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*t)*Math.sin((t*l-s)*(2*Math.PI)/i)+n+a},m.easing.easeInOutElastic=m.easing.easeInOutElastic||function(e,t,a,n,l){var s=1.70158,i=0,o=n;if(0==t)return a;if(2==(t/=l/2))return a+n;if(i||(i=l*(.3*1.5)),o<Math.abs(n)){o=n;s=i/4}else s=i/(2*Math.PI)*Math.asin(n/o);return t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*l-s)*(2*Math.PI)/i)*-.5+a:o*Math.pow(2,-10*(t-=1))*Math.sin((t*l-s)*(2*Math.PI)/i)*.5+n+a},m.easing.easeInBack=m.easing.easeInBack||function(e,t,a,n,l,s){return s==i&&(s=1.70158),n*(t/=l)*t*((s+1)*t-s)+a},m.easing.easeOutBack=m.easing.easeOutBack||function(e,t,a,n,l,s){return s==i&&(s=1.70158),n*((t=t/l-1)*t*((s+1)*t+s)+1)+a},m.easing.easeInOutBack=m.easing.easeInOutBack||function(e,t,a,n,l,s){return s==i&&(s=1.70158),(t/=l/2)<1?n/2*(t*t*((1+(s*=1.525))*t-s))+a:n/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+a},m.easing.easeInBounce=m.easing.easeInBounce||function(e,t,a,n,l){return n-m.easing.easeOutBounce(e,l-t,0,n,l)+a},m.easing.easeOutBounce=m.easing.easeOutBounce||function(e,t,a,n,l){return(t/=l)<1/2.75?n*(7.5625*t*t)+a:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},m.easing.easeInOutBounce=m.easing.easeInOutBounce||function(e,t,a,n,l){return t<l/2?.5*m.easing.easeInBounce(e,2*t,0,n,l)+a:.5*m.easing.easeOutBounce(e,2*t-l,0,n,l)+.5*n+a}}};p._easing.call(),m.fn[e]=function(e){return d[e]?d[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void m.error("Method "+e+" does not exist"):d.init.apply(this,arguments)},m[e]=function(e){return d[e]?d[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void m.error("Method "+e+" does not exist"):d.init.apply(this,arguments)},m[e].defaults=h}(jQuery,window,document);