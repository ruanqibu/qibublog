﻿var T,baidu=T=baidu||{version:"1.5.0"};baidu.guid="$BAIDU$";baidu.$$=window[baidu.guid]=window[baidu.guid]||{global:{}};baidu.flash=baidu.flash||{};baidu.dom=baidu.dom||{};baidu.dom.g=function(b){if(!b){return null}if("string"==typeof b||b instanceof String){return document.getElementById(b)}else{if(b.nodeName&&(b.nodeType==1||b.nodeType==9)){return b}}return null};baidu.g=baidu.G=baidu.dom.g;baidu.array=baidu.array||{};baidu.each=baidu.array.forEach=baidu.array.each=function(m,j,n){var l,i,h,k=m.length;if("function"==typeof j){for(h=0;h<k;h++){i=m[h];l=j.call(n||m,i,h);if(l===false){break}}}return m};baidu.lang=baidu.lang||{};baidu.lang.isFunction=function(b){return"[object Function]"==Object.prototype.toString.call(b)};baidu.lang.isString=function(b){return"[object String]"==Object.prototype.toString.call(b)};baidu.isString=baidu.lang.isString;baidu.browser=baidu.browser||{};baidu.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp["\x246"]||RegExp["\x242"]):undefined;baidu.dom.insertHTML=function(g,i,h){g=baidu.dom.g(g);var j,f;if(g.insertAdjacentHTML&&!baidu.browser.opera){g.insertAdjacentHTML(i,h)}else{j=g.ownerDocument.createRange();i=i.toUpperCase();if(i=="AFTERBEGIN"||i=="BEFOREEND"){j.selectNodeContents(g);j.collapse(i=="AFTERBEGIN")}else{f=i=="BEFOREBEGIN";j[f?"setStartBefore":"setEndAfter"](g);j.collapse(f)}j.insertNode(j.createContextualFragment(h))}return g};baidu.insertHTML=baidu.dom.insertHTML;baidu.swf=baidu.swf||{};baidu.swf.version=(function(){var j=navigator;if(j.plugins&&j.mimeTypes.length){var k=j.plugins["Shockwave Flash"];if(k&&k.description){return k.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}}else{if(window.ActiveXObject&&!window.opera){for(var i=12;i>=2;i--){try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);if(c){var l=c.GetVariable("$version");return l.replace(/WIN/g,"").replace(/,/g,".")}}catch(e){}}}}})();baidu.string=baidu.string||{};baidu.string.encodeHTML=function(b){return String(b).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};baidu.encodeHTML=baidu.string.encodeHTML;baidu.swf.createHTML=function(z){z=z||{};var F=baidu.swf.version,x=z.ver||"6.0.0",G,H,t,v,w,u,D={},i=baidu.string.encodeHTML;for(v in z){D[v]=z[v]}z=D;if(F){F=F.split(".");x=x.split(".");for(t=0;t<3;t++){G=parseInt(F[t],10);H=parseInt(x[t],10);if(H<G){break}else{if(H>G){return""}}}}else{return""}var E=z.vars,y=["classid","codebase","id","width","height","align"];z.align=z.align||"middle";z.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";z.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";z.movie=z.url||"";delete z.vars;delete z.url;if("string"==typeof E){z.flashvars=E}else{var k=[];for(v in E){u=E[v];k.push(v+"="+encodeURIComponent(u))}z.flashvars=k.join("&")}var C=["<object "];for(t=0,w=y.length;t<w;t++){u=y[t];C.push(" ",u,'="',i(z[u]),'"')}C.push(">");var A={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(v in z){u=z[v];v=v.toLowerCase();if(A[v]&&(u||u===false||u===0)){C.push('<param name="'+v+'" value="'+i(u)+'" />')}}z.src=z.movie;z.name=z.id;delete z.id;delete z.movie;delete z.classid;delete z.codebase;z.type="application/x-shockwave-flash";z.pluginspage="http://www.macromedia.com/go/getflashplayer";C.push("<embed");var B;for(v in z){u=z[v];if(u||u===false||u===0){if((new RegExp("^salign\x24","i")).test(v)){B=u;continue}C.push(" ",v,'="',i(u),'"')}}if(B){C.push(' salign="',i(B),'"')}C.push("></embed></object>");return C.join("")};baidu.swf.create=function(e,f){e=e||{};var d=baidu.swf.createHTML(e)||e.errorMessage||"";if(f&&"string"==typeof f){f=document.getElementById(f)}baidu.dom.insertHTML(f||document.body,"beforeEnd",d)};baidu.browser.ie=baidu.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;baidu.array.remove=function(f,e){var d=f.length;while(d--){if(d in f&&f[d]===e){f.splice(d,1)}}return f};baidu.lang.isArray=function(b){return"[object Array]"==Object.prototype.toString.call(b)};baidu.lang.toArray=function(f){if(f===null||f===undefined){return[]}if(baidu.lang.isArray(f)){return f}if(typeof f.length!=="number"||typeof f==="string"||baidu.lang.isFunction(f)){return[f]}if(f.item){var e=f.length,d=new Array(e);while(e--){d[e]=f[e]}return d}return[].slice.call(f)};baidu.swf.getMovie=function(e){var d=document[e],f;return baidu.browser.ie==9?d&&d.length?(f=baidu.array.remove(baidu.lang.toArray(d),function(a){return a.tagName.toLowerCase()!="embed"})).length==1?f[0]:f:d:d||window[e]};baidu.flash._Base=(function(){var l="bd__flash__";function j(){return l+Math.floor(Math.random()*2147483648).toString(36)}function h(a){if(typeof a!=="undefined"&&typeof a.flashInit!=="undefined"&&a.flashInit()){return true}else{return false}}function g(a,c){var b=null;a=a.reverse();baidu.each(a,function(d){b=c.call(d.fnName,d.params);d.callBack(b)})}function i(a){var b="";if(baidu.lang.isFunction(a)){b=j();window[b]=function(){a.apply(window,arguments)};return b}else{if(baidu.lang.isString){return a}}}function k(b){if(!b.id){b.id=j()}var a=b.container||"";delete (b.container);baidu.swf.create(b,a);return baidu.swf.getMovie(b.id)}return function(t,d){var s=this,c=(typeof t.autoRender!=="undefined"?t.autoRender:true),f=t.createOptions||{},u=null,r=false,e=[],v=null,d=d||[];s.render=function(){u=k(f);if(d.length>0){baidu.each(d,function(m,n){d[n]=i(t[m]||new Function())})}s.call("setJSFuncName",[d])};s.isReady=function(){return r};s.call=function(n,o,m){if(!n){return null}m=m||new Function();var p=null;if(r){p=u.call(n,o);m(p)}else{e.push({fnName:n,params:o,callBack:m});(!v)&&(v=setInterval(b,200))}};s.createFunName=function(m){return i(m)};function b(){if(h(u)){clearInterval(v);v=null;a();r=true}}function a(){g(e,u);e=[]}c&&s.render()}})();baidu.flash.imageUploader=baidu.flash.imageUploader||function(f){var e=this,f=f||{},d=new baidu.flash._Base(f,["selectFileCallback","exceedFileCallback","deleteFileCallback","startUploadCallback","uploadCompleteCallback","uploadErrorCallback","allCompleteCallback","changeFlashHeight"]);e.upload=function(){d.call("upload")};e.pause=function(){d.call("pause")};e.addCustomizedParams=function(a,b){d.call("addCustomizedParams",[a,b])}};baidu.object=baidu.object||{};baidu.extend=baidu.object.extend=function(f,e){for(var d in e){if(e.hasOwnProperty(d)){f[d]=e[d]}}return f};baidu.flash.fileUploader=baidu.flash.fileUploader||function(f){var e=this,f=f||{};f.createOptions=baidu.extend({wmod:"transparent"},f.createOptions||{});var d=new baidu.flash._Base(f,["selectFile","exceedMaxSize","deleteFile","uploadStart","uploadComplete","uploadError","uploadProgress"]);d.call("setMaxNum",f.maxNum?[f.maxNum]:[1]);e.setHandCursor=function(a){d.call("setHandCursor",[a||false])};e.setMSFunName=function(a){d.call("setMSFunName",[d.createFunName(a)])};e.upload=function(h,a,c,b){if(typeof h!=="string"||typeof a!=="string"){return null}if(typeof b==="undefined"){b=-1}d.call("upload",[h,a,c,b])};e.cancel=function(a){if(typeof a==="undefined"){a=-1}d.call("cancel",[a])};e.deleteFile=function(c,a){var b=function(h){a&&a(h)};if(typeof c==="undefined"){d.call("deleteFilesAll",[],b);return}if(typeof c==="Number"){c=[c]}c.sort(function(i,j){return j-i});baidu.each(c,function(h){d.call("deleteFileBy",h,b)})};e.addFileType=function(a){var a=a||[[]];if(a instanceof Array){a=[a]}else{a=[[a]]}d.call("addFileTypes",a)};e.setFileType=function(a){var a=a||[[]];if(a instanceof Array){a=[a]}else{a=[[a]]}d.call("setFileTypes",a)};e.setMaxNum=function(a){d.call("setMaxNum",[a])};e.setMaxSize=function(a){d.call("setMaxSize",[a])};e.getFileAll=function(a){d.call("getFileAll",[],a)};e.getFileByIndex=function(b,a){d.call("getFileByIndex",[],a)};e.getStatusByIndex=function(b,a){d.call("getStatusByIndex",[],a)}};baidu.sio=baidu.sio||{};baidu.sio._createScriptTag=function(e,f,d){e.setAttribute("type","text/javascript");d&&e.setAttribute("charset",d);e.setAttribute("src",f);document.getElementsByTagName("head")[0].appendChild(e)};baidu.sio._removeScriptTag=function(d){if(d.clearAttributes){d.clearAttributes()}else{for(var c in d){if(d.hasOwnProperty(c)){delete d[c]}}}if(d&&d.parentNode){d.parentNode.removeChild(d)}d=null};baidu.sio.callByBrowser=function(t,m,n){var p=document.createElement("SCRIPT"),q=0,o=n||{},l=o.charset,k=m||function(){},r=o.timeOut||0,s;p.onload=p.onreadystatechange=function(){if(q){return}var a=p.readyState;if("undefined"==typeof a||a=="loaded"||a=="complete"){q=1;try{k();clearTimeout(s)}finally{p.onload=p.onreadystatechange=null;baidu.sio._removeScriptTag(p)}}};if(r){s=setTimeout(function(){p.onload=p.onreadystatechange=null;baidu.sio._removeScriptTag(p);o.onfailure&&o.onfailure()},r)}baidu.sio._createScriptTag(p,t,l)};baidu.sio.callByServer=function(D,p,v){var A=document.createElement("SCRIPT"),x="bd__cbs__",r,q,w=v||{},s=w.charset,y=w.queryField||"callback",B=w.timeOut||0,C,z=new RegExp("(\\?|&)"+y+"=([^&]*)"),u;if(baidu.lang.isFunction(p)){r=x+Math.floor(Math.random()*2147483648).toString(36);window[r]=t(0)}else{if(baidu.lang.isString(p)){r=p}else{if(u=z.exec(D)){r=u[2]}}}if(B){C=setTimeout(t(1),B)}D=D.replace(z,"\x241"+y+"="+r);if(D.search(z)<0){D+=(D.indexOf("?")<0?"?":"&")+y+"="+r}baidu.sio._createScriptTag(A,D,s);function t(a){return function(){try{if(a){w.onfailure&&w.onfailure()}else{p.apply(window,arguments);clearTimeout(C)}window[r]=null;delete window[r]}catch(b){}finally{baidu.sio._removeScriptTag(A)}}}};baidu.sio.log=function(f){var d=new Image(),e="tangram_sio_log_"+Math.floor(Math.random()*2147483648).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=null;window[e]=null;d=null};d.src=f};baidu.json=baidu.json||{};baidu.json.parse=function(b){return(new Function("return ("+b+")"))()};baidu.json.decode=baidu.json.parse;baidu.json.stringify=(function(){var i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function h(a){if(/["\\\x00-\x1f]/.test(a)){a=a.replace(/["\\\x00-\x1f]/g,function(c){var b=i[c];if(b){return b}b=c.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)})}return'"'+a+'"'}function f(l){var e=["["],c=l.length,d,a,b;for(a=0;a<c;a++){b=l[a];switch(typeof b){case"undefined":case"function":case"unknown":break;default:if(d){e.push(",")}e.push(baidu.json.stringify(b));d=1}}e.push("]");return e.join("")}function j(a){return a<10?"0"+a:a}function g(a){return'"'+a.getFullYear()+"-"+j(a.getMonth()+1)+"-"+j(a.getDate())+"T"+j(a.getHours())+":"+j(a.getMinutes())+":"+j(a.getSeconds())+'"'}return function(l){switch(typeof l){case"undefined":return"undefined";case"number":return isFinite(l)?String(l):"null";case"string":return h(l);case"boolean":return String(l);default:if(l===null){return"null"}else{if(l instanceof Array){return f(l)}else{if(l instanceof Date){return g(l)}else{var e=["{"],a=baidu.json.stringify,d,b;for(var c in l){if(Object.prototype.hasOwnProperty.call(l,c)){b=l[c];switch(typeof b){case"undefined":case"unknown":case"function":break;default:if(d){e.push(",")}d=1;e.push(a(c)+":"+a(b))}}}e.push("}");return e.join("")}}}}}})();baidu.json.encode=baidu.json.stringify;