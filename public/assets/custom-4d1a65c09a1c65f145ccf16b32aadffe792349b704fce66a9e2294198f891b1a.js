!function(f){"use strict";var e,l,a,r;f(window).load(function(){f("ul.cd-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({highlightSelector:"ul.cd-nav li a",offset:40,scrollSpeed:1e3,scrollEasing:"easeInOutCubic"}),f("a[rel='next']").click(function(e){e.preventDefault();var t=f(this).parent().parent("section").next().attr("id");f.mPageScroll2id("scrollTo",t)})}),f(".parallax-contact").parallax("50%",.4),f(".parallax-about-1").parallax("50%",.4),f(".parallax-services-1").parallax("50%",.2),f(".tipped").tipper(),f(document).ready(function(){function e(e){s=e,t(),i()}function t(){a=f("<div>",{id:"progressBar"}),r=f("<div>",{id:"bar"}),a.append(r).prependTo(s)}function i(){c=0,u=!1,p=setInterval(o,10)}function o(){!1===u&&(c+=1/y,r.css({width:c+"%"}),100<=c&&s.trigger("owl.next"))}function n(){u=!0}function l(){clearTimeout(p),i()}var a,r,s,u,p,c,y=7;f("#owl-top").owlCarousel({pagination:!1,transitionStyle:"backSlide",slideSpeed:500,paginationSpeed:500,singleItem:!0,afterInit:e,afterMove:l,startDragging:n});var d=f("#owl-top");d.owlCarousel(),f(".next").click(function(){d.trigger("owl.next")}),f(".prev").click(function(){d.trigger("owl.prev")})}),jQuery(document).ready(function(){!function(i){function o(){var e=i(window).width(),t=1;return 1500<e?t=4:1200<e?t=3:900<e?t=2:600<e?t=2:300<e&&(t=1),t}function e(){var e=i(window).width(),t=o();Math.floor(e/t)}function t(){e(),n.isotope("reLayout")}var n=i("#projects-grid");i("#portfolio-filter #filter a").click(function(){var e=i(this).attr("data-filter");return i(this).parent().parent().find("a").removeClass("current"),i(this).addClass("current"),n.isotope({filter:e}),setTimeout(function(){t()},300),!1}),n.imagesLoaded(function(){e(),n.isotope({itemSelector:".portfolio-box-1",layoutMode:"masonry",resizable:!1})}),i(window).on("debouncedresize",function(){t()})}(jQuery)}),e=jQuery,r=e.event,l=r.special.debouncedresize={setup:function(){e(this).on("resize",l.handler)},teardown:function(){e(this).off("resize",l.handler)},handler:function(e,t){var i=this,o=arguments,n=function(){e.type="debouncedresize",r.dispatch.apply(i,o)};a&&clearTimeout(a),t?n():a=setTimeout(n,l.threshold)},threshold:150},f(document).ready(function(){f(".chaffle").chaffle({speed:10,time:60})}),f(document).ready(function(){f("#owl-quotes").owlCarousel({navigation:!1,autoPlay:5e3,slideSpeed:800,paginationSpeed:800,singleItem:!0})}),f(document).ready(function(){f("#owl-logos").owlCarousel({navigation:!1,autoPlay:6e3,pagination:!1,items:6,itemsDesktop:[1e3,4],itemsDesktopSmall:[900,3],itemsTablet:[600,2],itemsMobile:!1})}),jQuery(document).ready(function(e){e(".counter-facts").counterUp({delay:100,time:3e3})}),jQuery(document).ready(function(){function e(e,t){var i=document.getElementById("cd-zoom-in"),o=document.getElementById("cd-zoom-out");e.appendChild(i),e.appendChild(o),google.maps.event.addDomListener(i,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(o,"click",function(){t.setZoom(t.getZoom()-1)})}var t=44.8013716,i=20.4631372,o=15,n=-1<navigator.userAgent.toLowerCase().indexOf("trident")?"images/cd-icon-location.png":"images/cd-icon-location.svg",l="#cccccc",a=-100,r=9,s=[{elementType:"labels",stylers:[{saturation:a}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"landscape",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]},{featureType:"water",elementType:"geometry",stylers:[{hue:l},{visibility:"on"},{lightness:r},{saturation:a}]}],u={center:new google.maps.LatLng(t,i),zoom:o,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:s},p=new google.maps.Map(document.getElementById("google-container"),u),c=(new google.maps.Marker({position:new google.maps.LatLng(t,i),map:p,visible:!0,icon:n}),document.createElement("div"));new e(c,p);p.controls[google.maps.ControlPosition.LEFT_TOP].push(c)})}(jQuery);