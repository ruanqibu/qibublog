﻿(function(d){var a=d.getOptions(),b=a.plotOptions,g=d.seriesTypes,e=d.merge,f=function(){},c=d.each;b.funnel=e(b.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:true,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});g.funnel=d.extendClass(g.pie,{type:"funnel",animate:f,translate:function(){var o=function(K,L){return(/%$/).test(K)?L*parseInt(K,10)/100:parseInt(K,10)},A=0,z=this,k=z.chart,y=k.plotWidth,x=k.plotHeight,l=0,v=z.options,h=v.center,i=o(h[0],y),j=o(h[0],x),C=o(v.width,y),B,p,r=o(v.height,x),t=o(v.neckWidth,y),s=o(v.neckHeight,x),u=r-s,m=z.data,w,n,q=v.dataLabels.position==="left"?1:0,D,H,E,F,I,G,J;z.getWidthAt=p=function(K){return K>r-s||r===s?t:t+(C-t)*((r-s-K)/(r-s))};z.getX=function(L,K){return i+(K?-1:1)*((p(L)/2)+v.dataLabels.distance)};z.center=[i,j,r];z.centerX=i;c(m,function(K){A+=K.y});c(m,function(K){J=null;n=A?K.y/A:0;H=j-r/2+l*r;I=H+n*r;B=p(H);D=i-B/2;E=D+B;B=p(I);F=i-B/2;G=F+B;if(H>u){D=F=i-t/2;E=G=i+t/2}else{if(I>u){J=I;B=p(u);F=i-B/2;G=F+B;I=u}}w=["M",D,H,"L",E,H,G,I];if(J){w.push(G,J,F,J)}w.push(F,I,"Z");K.shapeType="path";K.shapeArgs={d:w};K.percentage=n*100;K.plotX=i;K.plotY=(H+(J||I))/2;K.tooltipPos=[i,K.plotY];K.slice=f;K.half=q;l+=n});z.setTooltipPoints()},drawPoints:function(){var k=this,i=k.options,h=k.chart,j=h.renderer;c(k.data,function(m){var l=m.graphic,n=m.shapeArgs;if(!l){m.graphic=j.path(n).attr({fill:m.color,stroke:i.borderColor,"stroke-width":i.borderWidth}).add(k.group)}else{l.animate(n)}})},sortByAngle:f,drawDataLabels:function(){var h=this.data,k=this.options.dataLabels.distance,l,n,m,j=h.length,o,p;this.center[2]-=2*k;while(j--){m=h[j];l=m.half;n=l?1:-1;p=m.plotY;o=this.getX(p,l);m.labelPos=[0,p,o+(k-5)*n,p,o+k*n,p,l?"right":"left",0]}g.pie.prototype.drawDataLabels.call(this)}})}(Highcharts));