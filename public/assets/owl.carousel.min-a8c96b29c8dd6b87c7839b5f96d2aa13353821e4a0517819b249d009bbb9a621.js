"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(l,p,m){var o={init:function(t,e){var o=this;o.$elem=l(e),o.options=l.extend({},l.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){function t(t){var e,o="";if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(o+=t.owl[e].item);n.$elem.html(o)}n.logIn()}var e,n=this;"function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath?(e=n.options.jsonPath,l.getJSON(e,t)):n.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;if(0===t.$elem.children().length)return!1;t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),t.onStartup()},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),!1!==t.options.transitionStyle&&t.transitionTypes(t.options.transitionStyle),!0===t.options.autoPlay&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;!0===t.options.lazyLoad&&t.lazyLoad(),!0===t.options.autoHeight&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;p.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;if(!1!==t.$elem.is(":visible"))return!1;t.$elem.css({opacity:0}),p.clearInterval(t.autoPlayInterval),p.clearInterval(t.checkVisible),t.checkVisible=p.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),p.clearInterval(t.checkVisible))},500)},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var t,e,o=this;if(!1===o.options.responsive)return!1;if(!0===o.options.singleItem)return o.options.items=o.orignalItems=1,o.options.itemsCustom=!1,o.options.itemsDesktop=!1,o.options.itemsDesktopSmall=!1,o.options.itemsTablet=!1,o.options.itemsTabletSmall=!1,o.options.itemsMobile=!1;if((t=l(o.options.responsiveBaseWidth).width())>(o.options.itemsDesktop[0]||o.orignalItems)&&(o.options.items=o.orignalItems),!1!==o.options.itemsCustom)for(o.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),e=0;e<o.options.itemsCustom.length;e+=1)o.options.itemsCustom[e][0]<=t&&(o.options.items=o.options.itemsCustom[e][1]);else t<=o.options.itemsDesktop[0]&&!1!==o.options.itemsDesktop&&(o.options.items=o.options.itemsDesktop[1]),t<=o.options.itemsDesktopSmall[0]&&!1!==o.options.itemsDesktopSmall&&(o.options.items=o.options.itemsDesktopSmall[1]),t<=o.options.itemsTablet[0]&&!1!==o.options.itemsTablet&&(o.options.items=o.options.itemsTablet[1]),t<=o.options.itemsTabletSmall[0]&&!1!==o.options.itemsTabletSmall&&(o.options.items=o.options.itemsTabletSmall[1]),t<=o.options.itemsMobile[0]&&!1!==o.options.itemsMobile&&(o.options.items=o.options.itemsMobile[1]);o.options.items>o.itemsAmount&&!0===o.options.itemsScaleUp&&(o.options.items=o.itemsAmount)},response:function(){var t,e,o=this;if(!0!==o.options.responsive)return!1;e=l(p).width(),o.resizer=function(){l(p).width()!==e&&(!1!==o.options.autoPlay&&p.clearInterval(o.autoPlayInterval),p.clearTimeout(t),t=p.setTimeout(function(){e=l(p).width(),o.updateVars()},o.options.responsiveRefreshRate))},l(p).resize(o.resizer)},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),!1!==t.options.autoPlay&&t.checkAp()},appendItemsSizes:function(){var o=this,n=0,i=o.itemsAmount-o.options.items;o.$owlItems.each(function(t){var e=l(this);e.css({width:o.itemWidth}).data("owl-item",Number(t)),t%o.options.items!=0&&t!==i||i<t||(n+=1),e.data("owl-roundPages",n)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(e=t.maximumItem=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var t,e,o=this,n=0,i=0;for(o.positionsInArray=[0],o.pagesInArray=[],t=0;t<o.itemsAmount;t+=1)i+=o.itemWidth,o.positionsInArray.push(-i),!0===o.options.scrollPerPage&&(e=l(o.$owlItems[t]).data("owl-roundPages"))!==n&&(o.pagesInArray[n]=o.positionsInArray[t],n=e)},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=l('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var e=this,t=l('<div class="owl-buttons"/>');e.owlControls.append(t),e.buttonPrev=l("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=l("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),t.append(e.buttonPrev).append(e.buttonNext),t.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),t.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(t){t.preventDefault(),l(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=l('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(t){t.preventDefault(),Number(l(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(l(this).data("owl-page")),!0)})},updatePagination:function(){var t,e,o,n,i,s,a=this;if(!1===a.options.pagination)return!1;for(a.paginationWrapper.html(""),t=0,e=a.itemsAmount-a.itemsAmount%a.options.items,n=0;n<a.itemsAmount;n+=1)n%a.options.items==0&&(t+=1,e===n&&(o=a.itemsAmount-a.options.items),i=l("<div/>",{"class":"owl-page"}),s=l("<span></span>",{text:!0===a.options.paginationNumbers?t:"","class":!0===a.options.paginationNumbers?"owl-numbers":""}),i.append(s),i.data("owl-page",e===n?o:n),i.data("owl-roundPages",t),a.paginationWrapper.append(i));a.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(){l(this).data("owl-roundPages")===l(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),l(this).addClass("active"))})},checkNavigation:function(){var t=this;if(!1===t.options.navigation)return!1;!1===t.options.rewindNav&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled")))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem>e.maximumItem+(!0===e.options.scrollPerPage?e.options.items-1:0)){if(!0!==e.options.rewindNav)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(!0===e.options.scrollPerPage&&0<e.currentItem&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem<0){if(!0!==e.options.rewindNav)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,e,o){var n,i=this;return!i.isTransition&&("function"==typeof i.options.beforeMove&&i.options.beforeMove.apply(this,[i.$elem]),t>=i.maximumItem?t=i.maximumItem:t<=0&&(t=0),i.currentItem=i.owl.currentItem=t,!1!==i.options.transitionStyle&&"drag"!==o&&1===i.options.items&&!0===i.browser.support3d?(i.swapSpeed(0),!0===i.browser.support3d?i.transition3d(i.positionsInArray[t]):i.css2slide(i.positionsInArray[t],1),i.afterGo(),i.singleItemTransition(),!1):(n=i.positionsInArray[t],!0===i.browser.support3d?(i.isCss3Finish=!1,!0===e?(i.swapSpeed("paginationSpeed"),p.setTimeout(function(){i.isCss3Finish=!0},i.options.paginationSpeed)):"rewind"===e?(i.swapSpeed(i.options.rewindSpeed),p.setTimeout(function(){i.isCss3Finish=!0},i.options.rewindSpeed)):(i.swapSpeed("slideSpeed"),p.setTimeout(function(){i.isCss3Finish=!0},i.options.slideSpeed)),i.transition3d(n)):!0===e?i.css2slide(n,i.options.paginationSpeed):"rewind"===e?i.css2slide(n,i.options.rewindSpeed):i.css2slide(n,i.options.slideSpeed),void i.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:t<=0&&(t=0),e.swapSpeed(0),!0===e.browser.support3d?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),!1!==t.options.autoPlay&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",p.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;if(t.apStatus="play",!1===t.options.autoPlay)return!1;p.clearInterval(t.autoPlayInterval),t.autoPlayInterval=p.setInterval(function(){t.next(!0)},t.options.autoPlay)},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){this.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t,e=this,o=m.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in m.body.insertBefore(o,null),n)o.style[i]!==undefined&&(o.style[i]="translate3d(1px,1px,1px)",t=p.getComputedStyle(o).getPropertyValue(n[i]));m.body.removeChild(o),isTouch="ontouchstart"in p||p.navigator.msMaxTouchPoints,e.browser={support3d:t!==undefined&&0<t.length&&"none"!==t,isTouch:isTouch}},moveEvents:function(){var t=this;!1===t.options.mouseDrag&&!1===t.options.touchDrag||(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},!0===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===t.options.mouseDrag&&!1===t.options.touchDrag&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(t){t.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return l(t.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(t.touches!==undefined)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(t.touches===undefined){if(t.pageX!==undefined)return{x:t.pageX,y:t.pageY};if(t.pageX===undefined)return{x:t.clientX,y:t.clientY}}}function s(t){"on"===t?(l(m).on(a.ev_types.move,e),l(m).on(a.ev_types.end,o)):"off"===t&&(l(m).off(a.ev_types.move),l(m).off(a.ev_types.end))}function t(t){var e,o=t.originalEvent||t||p.event;if(3===o.which)return!1;if(!(a.itemsAmount<=a.options.items)){if(!1===a.isCssFinish&&!a.options.dragBeforeAnimFinish)return!1;if(!1===a.isCss3Finish&&!a.options.dragBeforeAnimFinish)return!1;!1!==a.options.autoPlay&&p.clearInterval(a.autoPlayInterval),!0===a.browser.isTouch||a.$owlWrapper.hasClass("grabbing")||a.$owlWrapper.addClass("grabbing"),a.newPosX=0,a.newRelativeX=0,l(this).css(a.removeTransition()),e=l(this).position(),r.relativePos=e.left,r.offsetX=i(o).x-e.left,r.offsetY=i(o).y-e.top,s("on"),r.sliding=!1,r.targetElement=o.target||o.srcElement}}function e(t){var e,o,n=t.originalEvent||t||p.event;a.newPosX=i(n).x-r.offsetX,a.newPosY=i(n).y-r.offsetY,a.newRelativeX=a.newPosX-r.relativePos,"function"==typeof a.options.startDragging&&!0!==r.dragging&&0!==a.newRelativeX&&(r.dragging=!0,a.options.startDragging.apply(a,[a.$elem])),(8<a.newRelativeX||a.newRelativeX<-8)&&!0===a.browser.isTouch&&(n.preventDefault!==undefined?n.preventDefault():n.returnValue=!1,r.sliding=!0),(10<a.newPosY||a.newPosY<-10)&&!1===r.sliding&&l(m).off("touchmove.owl"),e=function(){return a.newRelativeX/5},o=function(){return a.maximumPixels+a.newRelativeX/5},a.newPosX=Math.max(Math.min(a.newPosX,e()),o()),!0===a.browser.support3d?a.transition3d(a.newPosX):a.css2move(a.newPosX)}function o(t){var e,o,n,i=t.originalEvent||t||p.event;i.target=i.target||i.srcElement,r.dragging=!1,!0!==a.browser.isTouch&&a.$owlWrapper.removeClass("grabbing"),a.newRelativeX<0?a.dragDirection=a.owl.dragDirection="left":a.dragDirection=a.owl.dragDirection="right",0!==a.newRelativeX&&(e=a.getNewPosition(),a.goTo(e,!1,"drag"),r.targetElement===i.target&&!0!==a.browser.isTouch&&(l(i.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),l(t.target).off("click.disable")}),n=(o=l._data(i.target,"events").click).pop(),o.splice(0,0,n))),s("off")}var a=this,r={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};a.isCssFinish=!0,a.$elem.on(a.ev_types.start,".owl-wrapper",t)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):0<=t.newPosX&&(e=0,t.currentItem=0),e},closestItem:function(){var o=this,n=!0===o.options.scrollPerPage?o.pagesInArray:o.positionsInArray,i=o.newPosX,s=null;return l.each(n,function(t,e){i-o.itemWidth/20>n[t+1]&&i-o.itemWidth/20<e&&"left"===o.moveDirection()?(s=e,!0===o.options.scrollPerPage?o.currentItem=l.inArray(s,o.positionsInArray):o.currentItem=t):i+o.itemWidth/20<e&&i+o.itemWidth/20>(n[t+1]||n[t]-o.itemWidth)&&"right"===o.moveDirection()&&(!0===o.options.scrollPerPage?(s=n[t+1]||n[n.length-1],o.currentItem=l.inArray(s,o.positionsInArray)):(s=n[t+1],o.currentItem=t+1))}),o.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var o=this;o.$elem.on("owl.next",function(){o.next()}),o.$elem.on("owl.prev",function(){o.prev()}),o.$elem.on("owl.play",function(t,e){o.options.autoPlay=e,o.play(),o.hoverStatus="play"}),o.$elem.on("owl.stop",function(){o.stop(),o.hoverStatus="stop"}),o.$elem.on("owl.goTo",function(t,e){o.goTo(e)}),o.$elem.on("owl.jumpTo",function(t,e){o.jumpTo(e)})},stopOnHover:function(){var t=this;!0===t.options.stopOnHover&&!0!==t.browser.isTouch&&!1!==t.options.autoPlay&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var t,e,o,n,i=this;if(!1===i.options.lazyLoad)return!1;for(t=0;t<i.itemsAmount;t+=1)"loaded"!==(e=l(i.$owlItems[t])).data("owl-loaded")&&(o=e.data("owl-item"),"string"==typeof(n=e.find(".lazyOwl")).data("src")?(e.data("owl-loaded")===undefined&&(n.hide(),e.addClass("loading").data("owl-loaded","checked")),(!0!==i.options.lazyFollow||o>=i.currentItem)&&o<i.currentItem+i.options.items&&n.length&&n.each(function(){i.lazyPreload(e,l(this))})):e.data("owl-loaded","loaded"))},lazyPreload:function(t,e){function o(){t.data("owl-loaded","loaded").removeClass("loading"),e.removeAttr("data-src"),"fade"===s.options.lazyEffect?e.fadeIn(400):e.show(),"function"==typeof s.options.afterLazyLoad&&s.options.afterLazyLoad.apply(this,[s.$elem])}function n(){a+=1,s.completeImg(e.get(0))||!0===i?o():a<=100?p.setTimeout(n,100):o()}var i,s=this,a=0;"DIV"===e.prop("tagName")?(e.css("background-image","url("+e.data("src")+")"),i=!0):e[0].src=e.data("src"),n()},autoHeight:function(){function t(){var t=l(n.$owlItems[n.currentItem]).height();n.wrapperOuter.css("height",t+"px"),n.wrapperOuter.hasClass("autoHeight")||p.setTimeout(function(){n.wrapperOuter.addClass("autoHeight")},0)}function e(){o+=1,n.completeImg(i.get(0))?t():o<=100?p.setTimeout(e,100):n.wrapperOuter.css("height","")}var o,n=this,i=l(n.$owlItems[n.currentItem]).find("img");i.get(0)!==undefined?(o=0,e()):t()},completeImg:function(t){return!!t.complete&&("undefined"===typeof t.naturalWidth||0!==t.naturalWidth)},onVisibleItems:function(){var t,e=this;for(!0===e.options.addClassActive&&e.$owlItems.removeClass("active"),e.visibleItems=[],t=e.currentItem;t<e.currentItem+e.options.items;t+=1)e.visibleItems.push(t),!0===e.options.addClassActive&&l(e.$owlItems[t]).addClass("active");e.owl.visibleItems=e.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,o=e.outClass,n=e.inClass,i=e.$owlItems.eq(e.currentItem),s=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),s.css(t(a,10)).addClass(o).on(l,function(){e.endPrev=!0,s.off(l),e.clearTransStyle(s,o)}),i.addClass(n).on(l,function(){e.endCurrent=!0,i.off(l),e.clearTransStyle(i,n)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var t=this;t.$elem.off(".owl owl mousedown.disableTextSelect"),l(m).off(".owl owl"),l(p).off("resize",t.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr("style",t.$elem.data("owl-originalStyles")||""),t.$elem.attr("class",t.$elem.data("owl-originalClasses"))},destroy:function(){var t=this;t.stop(),p.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(t){var e=this,o=l.extend({},e.userOptions,t);e.unWrap(),e.init(o,e.$elem)},addItem:function(t,e){var o,n=this;return!!t&&(0===n.$elem.children().length?(n.$elem.append(t),n.setVars(),!1):(n.unWrap(),(o=e===undefined||-1===e?-1:e)>=n.$userItems.length||-1===o?n.$userItems.eq(-1).after(t):n.$userItems.eq(o).before(t),void n.setVars()))},removeItem:function(t){var e,o=this;if(0===o.$elem.children().length)return!1;e=t===undefined||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),o.setVars()}};l.fn.owlCarousel=function(e){return this.each(function(){if(!0===l(this).data("owl-init"))return!1;l(this).data("owl-init",!0);var t=Object.create(o);t.init(e,this),l.data(this,"owlCarousel",t)})},l.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:p,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);