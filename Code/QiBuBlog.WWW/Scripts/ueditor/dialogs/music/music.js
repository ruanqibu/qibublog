﻿function Music(){this.init()}(function(){var d=[],e=[],f=null;Music.prototype={total:70,pageSize:10,dataUrl:"http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.common",playerUrl:"http://box.baidu.com/widget/flash/bdspacesong.swf",init:function(){var a=this;domUtils.on($G("J_searchName"),"keyup",function(c){var b=window.event||c;if(b.keyCode==13){a.dosearch()}});domUtils.on($G("J_searchBtn"),"click",function(){a.dosearch()})},callback:function(a){var b=this;b.data=a.song_list;setTimeout(function(){$G("J_resultBar").innerHTML=b._renderTemplate(a.song_list)},300)},dosearch:function(){var b=this;f=null;var a=$G("J_searchName").value;if(utils.trim(a)==""){return false}a=encodeURIComponent(a);b._sent(a)},doselect:function(a){var b=this;if(typeof a=="object"){f=a}else{if(typeof a=="number"){f=b.data[a]}}},onpageclick:function(b){var c=this;for(var a=0;a<d.length;a++){$G(d[a]).className="pageoff";$G(e[a]).className="paneloff"}$G("page"+b).className="pageon";$G("panel"+b).className="panelon"},listenTest:function(a){var c=this,j=$G("J_preview"),b=(a.className=="m-try"),i=c._getTryingElem();if(i){i.className="m-try";j.innerHTML=""}if(b){a.className="m-trying";j.innerHTML=c._buildMusicHtml(c._getUrl(true))}},_sent:function(b){var a=this;$G("J_resultBar").innerHTML='<div class="loading"></div>';utils.loadFile(document,{src:a.dataUrl+"&query="+b+"&page_size="+a.total+"&callback=music.callback&.r="+Math.random(),tag:"script",type:"text/javascript",defer:"defer"})},_removeHtml:function(b){var a=/<\s*\/?\s*[^>]*\s*>/gi;return b.replace(a,"")},_getUrl:function(a){var b=this;var c="from=tiebasongwidget&url=&name="+encodeURIComponent(b._removeHtml(f.title))+"&artist="+encodeURIComponent(b._removeHtml(f.author))+"&extra="+encodeURIComponent(b._removeHtml(f.album_title))+"&autoPlay="+a+"&loop=true";return b.playerUrl+"?"+c},_getTryingElem:function(){var b=$G("J_listPanel").getElementsByTagName("span");for(var a=0;a<b.length;a++){if(b[a].className=="m-trying"){return b[a]}}return null},_buildMusicHtml:function(b){var a='<embed class="BDE_try_Music" allowfullscreen="false" pluginspage="http://www.macromedia.com/go/getflashplayer"';a+=' src="'+b+'"';a+=' width="1" height="1" style="position:absolute;left:-2000px;"';a+=' type="application/x-shockwave-flash" wmode="transparent" play="true" loop="false"';a+=' menu="false" allowscriptaccess="never" scale="noborder">';return a},_byteLength:function(a){return a.replace(/[^\u0000-\u007f]/g,"\u0061\u0061").length},_getMaxText:function(b){var a=this;b=a._removeHtml(b);if(a._byteLength(b)>12){return b.substring(0,5)+"..."}if(!b){b="&nbsp;"}return b},_rebuildData:function(b){var l=this,m=[],a=l.pageSize,i;for(var c=0;c<b.length;c++){if((c+a)%a==0){i=[];m.push(i)}i.push(b[c])}return m},_renderTemplate:function(a){var i=this;if(a.length==0){return'<div class="empty">'+lang.emptyTxt+"</div>"}a=i._rebuildData(a);var o=[],j=[],p=[];o.push('<div id="J_listPanel" class="listPanel">');j.push('<div class="page">');for(var b=0,q;q=a[b++];){e.push("panel"+b);d.push("page"+b);if(b==1){o.push('<div id="panel'+b+'" class="panelon">');if(a.length!=1){p.push('<div id="page'+b+'" onclick="music.onpageclick('+b+')" class="pageon">'+(b)+"</div>")}}else{o.push('<div id="panel'+b+'" class="paneloff">');p.push('<div id="page'+b+'" onclick="music.onpageclick('+b+')" class="pageoff">'+(b)+"</div>")}o.push('<div class="m-box">');o.push('<div class="m-h"><span class="m-t">'+lang.chapter+'</span><span class="m-s">'+lang.singer+'</span><span class="m-z">'+lang.special+'</span><span class="m-try-t">'+lang.listenTest+"</span></div>");for(var c=0,r;r=q[c++];){o.push('<label for="radio-'+b+"-"+c+'" class="m-m">');o.push('<input type="radio" id="radio-'+b+"-"+c+'" name="musicId" class="m-l" onclick="music.doselect('+(i.pageSize*(b-1)+(c-1))+')"/>');o.push('<span class="m-t">'+i._getMaxText(r.title)+"</span>");o.push('<span class="m-s">'+i._getMaxText(r.author)+"</span>");o.push('<span class="m-z">'+i._getMaxText(r.album_title)+"</span>");o.push('<span class="m-try" onclick="music.doselect('+(i.pageSize*(b-1)+(c-1))+');music.listenTest(this)"></span>');o.push("</label>")}o.push("</div>");o.push("</div>")}p.reverse();j.push(p.join(""));o.push("</div>");j.push("</div>");return o.join("")+j.join("")},exec:function(){var a=this;if(f==null){return}$G("J_preview").innerHTML="";editor.execCommand("music",{url:a._getUrl(false),width:400,height:95})}}})();