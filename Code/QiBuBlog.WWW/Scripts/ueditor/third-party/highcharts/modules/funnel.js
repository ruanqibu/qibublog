﻿(function(b){var f=b.getOptions().plotOptions,e=b.seriesTypes,c=b.merge,g=function(){},a=b.each;f.funnel=c(f.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}});e.funnel=b.extendClass(e.pie,{type:"funnel",animate:g,translate:function(){var k=function(h,d){return/%$/.test(h)?d*parseInt(h,10)/100:parseInt(h,10)},I=0,G=this.chart,H=G.plotWidth,G=G.plotHeight,J=0,D=this.options,E=D.center,z=k(E[0],H),F=k(E[0],G),Q=k(D.width,H),K,R,L=k(D.height,G),S=k(D.neckWidth,H),T=k(D.neckHeight,G),W=L-T,k=this.data,X,Y,V=D.dataLabels.position==="left"?1:0,Z,N,A,O,M,U,P;this.getWidthAt=R=function(d){return d>L-T||L===T?S:S+(Q-S)*((L-T-d)/(L-T))};this.getX=function(h,d){return z+(d?-1:1)*(R(h)/2+D.dataLabels.distance)};this.center=[z,F,L];this.centerX=z;a(k,function(d){I+=d.y});a(k,function(d){P=null;Y=I?d.y/I:0;N=F-L/2+J*L;M=N+Y*L;K=R(N);Z=z-K/2;A=Z+K;K=R(M);O=z-K/2;U=O+K;N>W?(Z=O=z-S/2,A=U=z+S/2):M>W&&(P=M,K=R(W),O=z-K/2,U=O+K,M=W);X=["M",Z,N,"L",A,N,U,M];P&&X.push(U,P,O,P);X.push(O,M,"Z");d.shapeType="path";d.shapeArgs={d:X};d.percentage=Y*100;d.plotX=z;d.plotY=(N+(P||M))/2;d.tooltipPos=[z,d.plotY];d.slice=g;d.half=V;J+=Y});this.setTooltipPoints()},drawPoints:function(){var d=this,i=d.options,h=d.chart.renderer;a(d.data,function(k){var l=k.graphic,j=k.shapeArgs;l?l.animate(j):k.graphic=h.path(j).attr({fill:k.color,stroke:i.borderColor,"stroke-width":i.borderWidth}).add(d.group)})},sortByAngle:g,drawDataLabels:function(){var i=this.data,o=this.options.dataLabels.distance,m,n,p,k=i.length,l,j;for(this.center[2]-=2*o;k--;){p=i[k],n=(m=p.half)?1:-1,j=p.plotY,l=this.getX(j,m),p.labelPos=[0,j,l+(o-5)*n,j,l+o*n,j,m?"right":"left",0]}e.pie.prototype.drawDataLabels.call(this)}})})(Highcharts);