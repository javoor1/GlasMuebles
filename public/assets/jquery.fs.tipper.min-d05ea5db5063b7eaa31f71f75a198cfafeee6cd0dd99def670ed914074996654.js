!function(a){"use strict";function e(t){return r.formatter=i,a(this).not(".tipper-attached").addClass("tipper-attached").on("mouseenter.tipper",a.extend({},r,t||{}),o)}function o(t){d=a("body");var e=a(this),o=a.extend(!0,{},t.data,e.data("tipper-options")),i="";i+='<div class="tipper '+o.direction+'">',i+='<div class="tipper-content">',i+=o.formatter.apply(d,[e]),i+='<span class="tipper-caret"</span>',i+="</div>",i+="</div>",o.$target=e,o.$tipper=a(i),d.append(o.$tipper),o.$content=o.$tipper.find(".tipper-content"),o.$caret=o.$tipper.find(".tipper-caret"),o.offset=e.offset(),o.height=e.outerHeight(),o.width=e.outerWidth(),o.tipperPos={},o.caretPos={},o.contentPos={};var r=o.$caret.outerHeight(!0),p=o.$caret.outerWidth(!0),n=o.$content.outerHeight(!0),s=o.$content.outerWidth(!0)+p;"right"===o.direction||"left"===o.direction?(o.caretPos.top=(n-r)/2,o.contentPos.top=-n/2,"right"===o.direction?o.contentPos.left=p+o.margin:"left"===o.direction&&(o.contentPos.left=-(s+o.margin))):(o.caretPos.left=(s-p)/2,o.contentPos.left=-s/2,"bottom"===o.direction?o.contentPos.top=o.margin:"top"===o.direction&&(o.contentPos.top=-(n+o.margin))),o.$content.css(o.contentPos),o.$caret.css(o.caretPos),o.follow?o.$target.on("mousemove.tipper",o,c).trigger("mousemove"):("right"===o.direction||"left"===o.direction?(o.tipperPos.top=o.offset.top+o.height/2,"right"===o.direction?o.tipperPos.left=o.offset.left+o.width:"left"===o.direction&&(o.tipperPos.left=o.offset.left)):(o.tipperPos.left=o.offset.left+o.width/2,"bottom"===o.direction?o.tipperPos.top=o.offset.top+o.height:"top"===o.direction&&(o.tipperPos.top=o.offset.top)),o.$tipper.css(o.tipperPos)),o.$target.one("mouseleave.tipper",o,f)}function i(t){return t.data("title")}function c(t){t.data.$tipper.css({left:t.pageX,top:t.pageY})}function f(t){var e=t.data;e.$tipper.remove(),e.$target.off("mousemove.tipper mouseleave.tipper")}var d,r={direction:"top",follow:!1,formatter:a.noop,margin:15},p={defaults:function(t){return r=a.extend(r,t||{}),a(this)},destroy:function(){return a(this).trigger("mouseleave.tipper").off(".tipper").removeClass("tipper-attached")}};a.fn.tipper=function(t){return p[t]?p[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?this:e.apply(this,arguments)},a.tipper=function(t){"defaults"===t&&p.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery);