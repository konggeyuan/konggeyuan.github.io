// build time:Sun Mar 06 2022 21:33:23 GMT+0800 (GMT+08:00)
!function(){function e(e,t,n){if(n===true){return e.getAttribute(t)||n}return Number(e.getAttribute(t))||n}var t=document.getElementById("ribbon"),n={z:e(t,"zIndex",-1),a:e(t,"alpha",.6),s:e(t,"size",90),c:e(t,"data-click",true)};var i=document.createElement("canvas"),o=i.getContext("2d"),a=window.devicePixelRatio||1,c=window.innerWidth,l=window.innerHeight,r=n.s,d,u,h=Math,s=0,x=h.PI*2,f=h.cos,g=h.random;i.width=c*a;i.height=l*a;o.scale(a,a);o.globalAlpha=n.a;i.style.cssText="opacity: "+n.a+";position:fixed;top:0;left:0;z-index: "+n.z+";width:100%;height:100%;pointer-events:none;";document.getElementsByTagName("body")[0].appendChild(i);function m(){o.clearRect(0,0,c,l);d=[{x:0,y:l*.7+r},{x:0,y:l*.7-r}];while(d[1].x<c+r)y(d[0],d[1])}function y(e,t){o.beginPath();o.moveTo(e.x,e.y);o.lineTo(t.x,t.y);var n=t.x+(g()*2-.25)*r,i=w(t.y);o.lineTo(n,i);o.closePath();s-=x/-50;o.fillStyle="#"+(f(s)*127+128<<16|f(s+x/3)*127+128<<8|f(s+x/3*2)*127+128).toString(16);o.fill();d[0]=d[1];d[1]={x:n,y:i}}function w(e){u=e+(g()*2-1.1)*r;return u>l||u<0?w(e):u}if(n.c!=="false"){document.onclick=m;document.ontouchstart=m}m()}();
//rebuild by neat 