﻿(function(a){var b=a.each,c=function(e,d){this.init(e,d)};a.extend(c.prototype,{init:function(e,d){this.options=e;this.chartOptions=d;this.columns=e.columns||this.rowsToColumns(e.rows)||[];this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},getColumnDistribution:function(){var e=this.chartOptions,d=e&&e.chart&&e.chart.type,f=[];b(e&&e.series||[],function(g){f.push((a.seriesTypes[g.type||d||"line"].prototype.pointArrayMap||[0]).length)});this.valueCount={global:(a.seriesTypes[d||"line"].prototype.pointArrayMap||[0]).length,individual:f}},dataFound:function(){this.parseTypes();this.findHeaderRow();this.parsed();this.complete()},parseCSV:function(){var k=this,h=this.options,l=h.csv,m=this.columns,o=h.startRow||0,q=h.endRow||Number.MAX_VALUE,r=h.startColumn||0,n=h.endColumn||Number.MAX_VALUE,p=0;l&&(l=l.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(h.lineDelimiter||"\n"),b(l,function(d,e){var f=k.trim(d),g=f.indexOf("#")===0;e>=o&&e<=q&&!g&&f!==""&&(f=d.split(h.itemDelimiter||","),b(f,function(j,i){i>=r&&i<=n&&(m[i-r]||(m[i-r]=[]),m[i-r][p]=j)}),p+=1)}),this.dataFound())},parseTable:function(){var h=this.options,g=h.table,k=this.columns,l=h.startRow||0,n=h.endRow||Number.MAX_VALUE,o=h.startColumn||0,p=h.endColumn||Number.MAX_VALUE,m;g&&(typeof g==="string"&&(g=document.getElementById(g)),b(g.getElementsByTagName("tr"),function(d,e){m=0;e>=l&&e<=n&&b(d.childNodes,function(f){if((f.tagName==="TD"||f.tagName==="TH")&&m>=o&&m<=p){k[m]||(k[m]=[]),k[m][e-l]=f.innerHTML,m+=1}})}),this.dataFound())},parseGoogleSpreadsheet:function(){var l=this,k=this.options,m=k.googleSpreadsheetKey,n=this.columns,p=k.startRow||0,s=k.endRow||Number.MAX_VALUE,t=k.startColumn||0,o=k.endColumn||Number.MAX_VALUE,q,r;m&&jQuery.getJSON("https://spreadsheets.google.com/feeds/cells/"+m+"/"+(k.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",function(d){var d=d.feed.entry,e,f=d.length,h=0,i=0,g;for(g=0;g<f;g++){e=d[g],h=Math.max(h,e.gs$cell.col),i=Math.max(i,e.gs$cell.row)}for(g=0;g<h;g++){if(g>=t&&g<=o){n[g-t]=[],n[g-t].length=Math.min(i,s-p)}}for(g=0;g<f;g++){if(e=d[g],q=e.gs$cell.row-1,r=e.gs$cell.col-1,r>=t&&r<=o&&q>=p&&q<=s){n[r-t][q-p]=e.content.$t}}l.dataFound()})},findHeaderRow:function(){b(this.columns,function(){});this.headerRow=0},trim:function(d){return typeof d==="string"?d.replace(/^\s+|\s+$/g,""):d},parseTypes:function(){for(var g=this.columns,e=g.length,h,j,k,l;e--;){for(h=g[e].length;h--;){j=g[e][h],k=parseFloat(j),l=this.trim(j),l==k?(g[e][h]=k,k>31536000000?g[e].isDatetime=!0:g[e].isNumeric=!0):(j=this.parseDate(j),e===0&&typeof j==="number"&&!isNaN(j)?(g[e][h]=j,g[e].isDatetime=!0):g[e][h]=l===""?null:l)}}},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(d){return Date.UTC(+d[1],d[2]-1,+d[3])}}},parseDate:function(g){var e=this.options.parseDate,h,i,j;e&&(h=e(g));if(typeof g==="string"){for(i in this.dateFormats){e=this.dateFormats[i],(j=g.match(e.regex))&&(h=e.parser(j))}}return h},rowsToColumns:function(g){var e,h,j,k,l;if(g){l=[];h=g.length;for(e=0;e<h;e++){k=g[e].length;for(j=0;j<k;j++){l[j]||(l[j]=[]),l[j][e]=g[e][j]}}}return l},parsed:function(){this.options.parsed&&this.options.parsed.call(this,this.columns)},complete:function(){var l=this.columns,h,m,n=this.options,p,r,s,o,q,t;if(n.complete){this.getColumnDistribution();l.length>1&&(h=l.shift(),this.headerRow===0&&h.shift(),h.isDatetime?m="datetime":h.isNumeric||(m="category"));for(o=0;o<l.length;o++){if(this.headerRow===0){l[o].name=l[o].shift()}}r=[];for(o=0,t=0;o<l.length;t++){p=a.pick(this.valueCount.individual[t],this.valueCount.global);s=[];for(q=0;q<l[o].length;q++){s[q]=[h[q],l[o][q]!==void 0?l[o][q]:null],p>1&&s[q].push(l[o+1][q]!==void 0?l[o+1][q]:null),p>2&&s[q].push(l[o+2][q]!==void 0?l[o+2][q]:null),p>3&&s[q].push(l[o+3][q]!==void 0?l[o+3][q]:null),p>4&&s[q].push(l[o+4][q]!==void 0?l[o+4][q]:null)}r[t]={name:l[o].name,data:s};o+=p}n.complete({xAxis:{type:m},series:r})}}});a.Data=c;a.data=function(e,d){return new c(e,d)};a.wrap(a.Chart.prototype,"init",function(f,e,g){var h=this;e&&e.data?a.data(a.extend(e.data,{complete:function(d){e.series&&b(e.series,function(i,j){e.series[j]=a.merge(i,d.series[j])});e=a.merge(d,e);f.call(h,e,g)}}),e):f.call(h,e,g)})})(Highcharts);