﻿function clickHandler(s,r,q){for(var n=0,o=s.length;n<o;n++){s[n].className=""}q.className="focus";var t=q.getAttribute("tabSrc");for(var m=0,p=r.length;m<p;m++){var j=r[m],k=j.getAttribute("id");j.onclick=function(){this.style.zoom=1};if(k!=t){j.style.zIndex=1}else{j.style.zIndex=200}}}function switchTab(n){var l=$G(n).children,m=l[0].children,k=l[1].children;for(var i=0,j=m.length;i<j;i++){var h=m[i];if(h.className==="focus"){clickHandler(m,k,h)}h.onclick=function(){clickHandler(m,k,this)}}}switchTab("helptab");document.getElementById("version").innerHTML=parent.UE.version;