!function(){function l(){var e=!1;e&&i("keydown",t),v.keyboardSupport&&!e&&a("keydown",t)}function n(){if(document.body){var e=document.body,t=document.documentElement,o=window.innerHeight,a=e.scrollHeight;if(S=0<=document.compatMode.indexOf("CSS")?t:e,m=e,l(),x=!0,top!=self)y=!0;else if(o<a&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r=!1,n=function(){r||t.scrollHeight==document.height||(r=!0,setTimeout(function(){t.style.height=document.height+"px",r=!1},500))};if(t.style.height="auto",setTimeout(n,10),S.offsetHeight<=o){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}}v.fixedBackground||b||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}function c(s,d,f,h){if(h||(h=1e3),w(d,f),1!=v.accelerationMax){var e=+new Date-C;if(e<v.accelerationDelta){var t=(1+30/e)/2;1<t&&(t=Math.min(t,v.accelerationMax),d*=t,f*=t)}C=+new Date}if(M.push({x:d,y:f,lastX:d<0?.99:-.99,lastY:f<0?.99:-.99,start:+new Date}),!T){var m=s===document.body,p=function(){for(var e=+new Date,t=0,o=0,a=0;a<M.length;a++){var r=M[a],n=e-r.start,i=n>=v.animationTime,l=i?1:n/v.animationTime;v.pulseAlgorithm&&(l=g(l));var c=r.x*l-r.lastX>>0,u=r.y*l-r.lastY>>0;t+=c,o+=u,r.lastX+=c,r.lastY+=u,i&&(M.splice(a,1),a--)}m?window.scrollBy(t,o):(t&&(s.scrollLeft+=t),o&&(s.scrollTop+=o)),d||f||(M=[]),M.length?K(p,s,h/v.frameRate+1):T=!1};K(p,s,0),T=!0}}function e(e){x||n();var t=e.target,o=u(t);if(!o||e.defaultPrevented||s(m,"embed")||s(t,"embed")&&/\.pdf/i.test(t.src))return!0;var a=e.wheelDeltaX||0,r=e.wheelDeltaY||0;return a||r||(r=e.wheelDelta||0),!(v.touchpadSupport||!d(r))||(1.2<Math.abs(a)&&(a*=v.stepSize/120),1.2<Math.abs(r)&&(r*=v.stepSize/120),c(o,-a,-r),void e.preventDefault())}function t(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var a=0,r=0,n=u(m),i=n.clientHeight;switch(n==document.body&&(i=window.innerHeight),e.keyCode){case H.up:r=-v.arrowScroll;break;case H.down:r=v.arrowScroll;break;case H.spacebar:r=-(e.shiftKey?1:-1)*i*.9;break;case H.pageup:r=.9*-i;break;case H.pagedown:r=.9*i;break;case H.home:r=-n.scrollTop;break;case H.end:var l=n.scrollHeight-n.scrollTop-i;r=0<l?l+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}c(n,a,r),e.preventDefault()}function o(e){m=e.target}function r(e,t){for(var o=e.length;o--;)z[E(e[o])]=t;return t}function u(e){var t=[],o=S.scrollHeight;do{var a=z[E(e)];if(a)return r(t,a);if(t.push(e),o===e.scrollHeight){if(!y||S.clientHeight+10<o)return r(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return r(t,e)}while(e=e.parentNode)}function a(e,t,o){window.addEventListener(e,t,o||!1)}function i(e,t,o){window.removeEventListener(e,t,o||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function w(e,t){e=0<e?1:-1,t=0<t?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function d(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],o=f(D[0],120)&&f(D[1],120)&&f(D[2],120);return!(t||o)}}function f(e,t){return Math.floor(e/t)==e/t}function h(e){var t,o;return(e*=v.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*v.pulseNormalize}function g(e){return 1<=e?1:e<=0?0:(1==v.pulseNormalize&&(v.pulseNormalize/=h(1)),h(e))}var m,p={frameRate:150,animationTime:800,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=p,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},M=(v=p,[]),T=!1,C=+new Date,z={};setInterval(function(){z={}},1e4);var A,N,E=(N=0,function(e){return e.uniqueID||(e.uniqueID=N++)}),K=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},L=/chrome/i.test(window.navigator.userAgent);"onmousewheel"in document&&L&&(a("mousedown",o),a("mousewheel",e),a("load",n))}();