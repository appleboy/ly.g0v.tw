function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}function deepEq$(e,t,n){function r(e,t,o){var l,s,c,u,d,g,f,p;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(l=i.call(e),i.call(t)!=l)return!1;switch(l){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(s=o.length;s--;)if(o[s]==e)return!0;if(o.push(e),c=0,u=!0,"[object Array]"==l){if(d=e.length,g=t.length,first){switch(n){case"===":u=d===g;break;case"<==":u=g>=d;break;case"<<=":u=g>d}c=d,first=!1}else u=d===g,c=d;if(u)for(;c--&&(u=c in e==c in t&&r(e[c],t[c],o)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(f in e)if(a(e,f)&&(c++,!(u=a(t,f)&&r(e[f],t[f],o))))break;if(u){p=0;for(f in t)a(t,f)&&++p;first?u="<<="===n?p>c:"<=="===n?p>=c:c===p:(first=!1,u=c===p)}}return o.pop(),u}var i={}.toString,o={}.hasOwnProperty,a=function(e,t){return o.call(e,t)};return first=!0,r(e,t,[])}function curry$(e,t){var n,r=function(i){return e.length>1?function(){var o=i?i.concat():[];return n=t?n||this:this,o.push.apply(o,arguments)<e.length&&arguments.length?r.call(n,o):e.apply(n,o)}:e};return r()}(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n,r,i=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var o=0,a=n.length;a>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},a=function(t){return function(n){var r=o(t),a=i(r,n);return e.require(a)}},l=function(e,t){var r={id:e,exports:{}};t(r.exports,a(e),r);var i=n[e]=r.exports;return i},s=function(e){var o=i(e,".");if(r(n,o))return n[o];if(r(t,o))return l(o,t[o]);var a=i(o,"./index");if(r(n,a))return n[a];if(r(t,a))return l(a,t[a]);throw Error('Cannot find module "'+e+'"')},c=function(e,n){if("object"==typeof e)for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=s,e.require.define=c,e.require.register=c,e.require.brunch=!0}})(),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("ly.g0v.tw",["ngGrid","app.controllers","app.directives","app.filters","app.services","scroll","partials","ui.state","utils"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("motions",{url:"/motions",templateUrl:"/partials/motions.html",controller:"LYMotions"}).state("motions.sitting",{url:"/{session}/{sitting}"}).state("bill",{url:"/bill/{billId}",templateUrl:"/partials/bill.html",controller:"LYBill"}).state("calendar",{url:"/calendar",templateUrl:"/partials/calendar.html"}).state("sitting",{url:"/sitting",templateUrl:"/partials/sitting.html",controller:"LYSitting"}).state("debates",{url:"/debates",templateUrl:"/partials/debates.html"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}),t.otherwise("/motions"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)}}));var committees,renderCommittee;committees={IAD:"內政",FND:"外交及國防",ECO:"經濟",FIN:"財政",EDU:"教育及文化",TRA:"交通",JUD:"司法及法制",SWE:"社會福利及衛生環境",PRO:"程序"},renderCommittee=function(e){var t,n,r,i,o;if(null==e)return"院會";if("null"===e)return"院會";for($.isArray(e)||(e=[e]),n=[],r=0,i=e.length;i>r;++r)o=e[r],n.push('<img class="avatar small" src="http://avatars.io/50a65bb26e293122b0000073/committee-'+o+'?size=small" alt="'+committees[o]+'">'+committees[o]);return t=n,t.join("")},angular.module("app.controllers",[]).controller({AppCtrl:["$scope","$location","$rootScope"].concat(function(e,t){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).filter("committee",function(){return renderCommittee}).controller({LYCalendar:["$scope","$http","LYService"].concat(function(e,t,n){function r(){var e;return e={start:moment(i).day(0-a),end:moment(i).day(0-a+7)},e.label=e.start.format("YYYY:  MM-DD to "+e.end.format("MM-DD")),e}var i,o,a,l;for(e.type="hearing",e.committee=function(e){var t,n,r,i,o,a,l;if(t=e.entity,n=t.committee,!n)return"院會";for(i=[],o=0,a=n.length;a>o;++o)l=n[o],i.push('<img class="avatar small" src="http://avatars.io/50a65bb26e293122b0000073/committee-'+l+'?size=small" alt="'+committees[l]+'">'+committees[l]);return r=i,r.join("")},e.chair=function(e){var t,r,i,o;return t=e.entity,(r=t.chair)?(i=n.resolveParty(r),o=""+CryptoJS.MD5("MLY/"+r),r+('<img class="avatar small '+i+'" src="http://avatars.io/50a65bb26e293122b0000073/'+o+'?size=small" alt="'+r+'">')):""},e.onair=function(e){var t,n,r,o,a,l,s;return t=e.entity,n=t.date,r=t.time,o=moment(n).startOf("day"),+i!==+o?!1:(a=r.split("~").map(function(e){return moment(o.format("YYYY-MM-DD")+" "+e)}),l=a[0],s=a[1],(a=moment())>=l&&s>=a)},e.gridOptions=import$({showFilter:!0,showColumnMenu:!0,showGroupPanel:!0,enableHighlighting:!0,groupsCollapsedByDefault:!1,inlineAggregate:!0,enableRowSelection:!0},{groups:["primaryCommittee"],rowHeight:65,data:"calendar",i18n:"zh-tw",aggregateTemplate:'<div ng-click="row.toggleExpand()" ng-style="rowStyle(row)" class="ngAggregate" ng-switch on="row.field">\n  <span ng-switch-when="primaryCommittee" class="ngAggregateText" ng-bind-html-unsafe="row.label | committee"></span>\n  <span ng-switch-default class="ngAggregateText">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}} {{AggItemsLabel}})</span>\n  <div class="{{row.aggClass()}}"></div>\n</div>',columnDefs:[{field:"primaryCommittee",visible:!1,displayName:"委員會",width:130,cellTemplate:'<div ng-bind-html-unsafe="row.getProperty(col.field) | committee"></div>'},{field:"committee",visible:!1,displayName:"委員會",width:130,cellTemplate:'<div ng-bind-html-unsafe="row.getProperty(col.field) | committee"></div>'},{field:"chair",displayName:"主席",width:130,cellTemplate:'<div ng-bind-html-unsafe="chair(row)"></div>'},{field:"date",cellFilter:"date: mediumDate",width:100,displayName:"日期"},{field:"time",width:100,displayName:"時間",cellTemplate:'<div ng-class="{onair: onair(row)}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>\'}]'},{field:"name",displayName:"名稱",width:320},{field:"summary",displayName:"議程",cellClass:"summary",width:"*"}]}),e.$watch("height",function(){var t;return $(".grid").height(e.height-65),t=e.gridOptions,t.$gridServices.DomUtilityService.RebuildGrid(t.$gridScope,t.ngGrid)},!1),i=moment().startOf("day"),e.weeksOpts=[],o=0;49>=o;o+=7)a=o,e.weeksOpts.push(r());return e.weeks=e.weeksOpts[0],l=function(){var n,r,i;return n=[e.weeks.start,e.weeks.end].map(function(e){return e.format("YYYY-MM-DD")}),r=n[0],i=n[1],e.start=e.weeks.start.format("YYYY-MM-DD"),e.end=e.weeks.end.format("YYYY-MM-DD"),t.get("http://api.ly.g0v.tw/v0/collections/calendar",{params:{s:JSON.stringify({date:1,time:1}),q:JSON.stringify({date:{$gt:r,$lt:i},type:e.type})}}).success(function(t){var n,r;return n=t.paging,r=t.entries,e.calendar=r.map(function(e){var t;return e.primaryCommittee=null!=(t=e.committee)?t[0]:void 0,e})})},e.$watch("weeks",l()),e.change=function(t){e.type=t,l()}})}).controller({LYBill:["$scope","$http","$state","LYService"].concat(function(e,t,n,r){return e.$watch("$state.params.billId",function(){var i;return i=n.params.billId,t.get("http://api.ly.g0v.tw/v0/collections/bills",{params:{fo:!0,q:JSON.stringify({bill_id:i})}}).success(function(t){var n,i,o;return n=t.data,i=t.committee,i&&(i=i.map(function(e){return{abbr:e,name:committees[e]}})),import$((e.summary=t.summary,e.abstract=t.abstract,e),{committee:i,related:t.committee?null!=n?null!=(o=n.related)?o.map(function(e){var t,n,i,o,a;return t=e[0],n=e[1],import$({id:t,summary:n},null!=(i=n.match(/本院委員(.*?)等/))&&(o=i[0],a=i[1],i)?{party:r.resolveParty(a),avatar:""+CryptoJS.MD5("MLY/"+a),name:a}:{})}):void 0:void 0:void 0,proposal:null!=(o=t.proposal)?o.map(function(e){var t;return t=r.resolveParty(e),{party:t,name:e,avatar:""+CryptoJS.MD5("MLY/"+e)}}):void 0,petition:null!=(o=t.petition)?o.map(function(e){var t;return t=r.resolveParty(e),{party:t,name:e,avatar:""+CryptoJS.MD5("MLY/"+e)}}):void 0,setDiff:function(e,t){var n,r,i,o,a,l,s,c,u;for(r=[],i=0,a=(o=e.header).length;a>i;++i)l=i,s=o[i],s===t&&r.push(l);return n=r,c=e.baseIndex,u=e.commentIndex,import$(e,{diffnew:t,diffcontent:e.content.map(function(t){var r;return{comment:null!=(r=t[u][e.header[n].replace(/審查會通過條文/,"審查會")])?r.replace(/\n/g,"<br>\n"):void 0,diff:diffview({baseTextLines:t[c]||" ",newTextLines:t[n]||t[c],baseTextName:e.header[c],newTextName:e.header[n],tchar:"",tsize:0})[0]}})})},diff:null!=n?null!=(o=n.content)?o.map(function(e){var t,n,r,i,o;return t=e.header,i=function(){var e,i,o,a=[];for(e=0,o=(i=t).length;o>e;++e)n=e,r=i[e],/^現行/.exec(r)&&a.push(n);return a}()[0],o=function(){var e,i,o,a=[];for(e=0,o=(i=t).length;o>e;++e)n=e,r=i[e],"說明"===r&&a.push(n);return a}()[0],import$({header:e.header,content:e.content,name:e.name},{versions:t.filter(function(e,t){return"說明"!==e&&t!==i}),baseIndex:i,commentIndex:o,diffbase:t[i],diffnew:t[0],diffcontent:e.content.map(function(e){var n;return{comment:null!=(n=e[o][t[0].replace(/審查會通過條文/,"審查會")])?n.replace(/\n/g,"<br>\n"):void 0,diff:diffview({baseTextLines:e[i]||" ",newTextLines:e[0]||e[i],baseTextName:null!=(n=t[i])?n:"",newTextName:t[0],tchar:"",tsize:0})[0]}})})}):void 0:void 0})})})})}).controller({LYMotions:["$scope","$state","LYService"].concat(function(e,t,n){return e.session="8-2",e.$on("data",function(t,n){return e.$apply(function(){return e.data=n})}),e.$watch("$state.params.sitting",function(){var n;return(n=t.params.sitting)?e.$watch("data",function(t){return t?(e.sitting=+n,e.setType("announcement"),e.setStatus(null)):void 0}):(e.sitting=null,void 0)}),e.$on("show",function(n,r,i,o){return e.$apply(function(){return t.transitionTo("motions.sitting",{session:e.session,sitting:r}),e.sitting=r,e.status=o,e.setType(i),e.setStatus(o)})}),import$(e,{allTypes:[{key:"announcement",value:"報告事項"},{key:"discussion",value:"討論事項"},{key:"exmotion",value:"臨時提案"}],setType:function(t){var r,i,o,a,l,s,c,u,d,g,f;for(i=function(){var t,n,i,o=[];for(t=0,i=(n=e.data).length;i>t;++t)r=n[t],r.meeting.sitting===e.sitting&&o.push(r);return o}()[0],o=i[t],a=[{key:"all",value:"全部"}].concat(function(){function t(){var e,t,n,r,i={};for(e=0,n=(t=o).length;n>e;++e)s=t[e],i[null!=(r=s.status)?r:"unknown"]=!0;return i}var n=[];for(l in t())n.push({key:l,value:e.statusName(l)});return n}()),in$(e.status,a.map(function(e){return e.key}))||(e.status=""),c=0,u=o.length;u>c;++c)s=o[c],null==s.avatars&&(d=null!=(g=s.proposer)?g.match(/委員(.*?)(、|等)/):void 0)&&(f=n.resolveParty(d[1]),s.avatars=[{party:f,name:d[1],avatar:""+CryptoJS.MD5("MLY/"+d[1])}]);return e.type=t,e.entries=o,e.allStatus=a,e},setStatus:function(t){return"all"===t&&(t=""),"unknown"===t&&(t=""),e.status=t},statusName:function(e){var t,n;return t={unknown:"未知",other:"其他",passed:"通過",consultation:"協商",retrected:"撤回",unhandled:"未處理",ey:"請行政院研處",prioritized:"逕付二讀",committee:"交委員會",rejected:"退回",accepted:"查照"},null!=(n=t[e])?n:e}}),window.loadMotions(e)})}).controller({LYSitting:["$scope","$http"].concat(function(e,t){return t.get("/data/yslog/ly-4004.json").success(function(t){var n,r,i,o,a,l=[];for(e.json=t,e.meta=t.meta,e.annoucement=[],e.interpellation={answers:[],questions:[],interpellations:[]},e.interp=[],n=function(t,n){var r,i,o,a,l,s,c,u,d,g,f,p,h,m,v,w,y=[];switch(t){case"Announcement":e.Announcement=n;for(r in n){for(i=n[r],o={subject:i.subject,conversation:[]},a=0,s=(l=i.conversation).length;s>a;++a)c=l[a],u=c[0],d=c[1],o.conversation.push({speaker:u,words:d});y.push(e.annoucement.push(o))}return y;case"Interpellation":for(g in l=n.answers)c=l[g],f=c[0],d=c[1],e.interpellation.answers.push({receiver:f,words:d});for(g in l=n.questions)c=l[g],p=c[0],d=c[1],e.interpellation.questions.push({asker:p,words:d});for(a=0,s=(l=n.interpellation).length;s>a;++a)c=l[a],t=c[0],h=c[1],"interp"===t&&e.interp.push(h);for(a=0,s=(l=n.interpellation).length;s>a;++a){if(c=l[a],t=c[0],h=c[1],m=[],"interp"===t||"interpdoc"===t||"exmotion"===t)for(o={questioner:h[0][0],conversation:[]},v=0,w=h.length;w>v;++v)c=h[v],u=c[0],d=c[1],o.conversation.push({speaker:u,words:d});else o={questioner:null,conversation:[{speaker:t,words:h}]};m.push(e.interpellation.interpellations.push(o)),y.push(m)}return y;default:return e.otherwise=n}},r=0,o=(i=t.log).length;o>r;++r)a=i[r],l.push(n.apply(null,a));return l})})}).controller({LYDebates:["$scope","$http","LYService"].concat(function(e,t,n){var r;return e.answer=function(e){switch(!1){case!e:return"已答";default:return"未答"}},e.mly=function(e){var t,r,i,o;return t=e.entity,r=t.mly,r[0]?(i=n.resolveParty(r[0]),o=""+CryptoJS.MD5("MLY/"+r[0]),r[0]+('<img class="avatar small '+i+'" src="http://avatars.io/50a65bb26e293122b0000073/'+o+'?size=small" alt="'+r[0]+'">')):""},r=function(e,t){return e.length>=t?e:r("0"+e,t)},e.source=function(e){var t,n,i,o,a;return t=e.entity,n=t.source,(i=n.link)?(o=(""+i[1]).concat(r(i[2],3)).concat(r(i[3],2)),a="http://lis.ly.gov.tw/lgcgi/lypdftxt?"+o+";".concat(r(i[4],4)).concat(";"+r(i[5],4)),'<a href="'+a+'" target="_blank">質詢公報</a>'):""},e.answers=function(e){var t,n,i;return t=e.entity,n=t.answers,i="",angular.forEach(n,function(e){var t,n,o;e.source.text.match(/口頭答復/)||(t=e.source.link,n=(""+t[1]).concat(r(t[2],3)).concat(r(t[3],2)),o="http://lis.ly.gov.tw/lgcgi/lypdftxt?"+n+";".concat(r(t[4],4)).concat(";"+r(t[5],4)),i+='<div><a href="'+o+'" target="_blank">書面答復</a></div>')}),deepEq$(i,"","===")&&(i+="口頭(見質詢公報)"),i},e.pagingOptions={pageSizes:[10,20,30],pageSize:30,currentPage:1},e.$watch("pagingOptions",function(t,n){deepEq$(t.pageSize,n.pageSize,"===")&&deepEq$(t.currentPage,n.currentPage,"===")||e.getData(t)},!0),e.gridOptions=import$({showFilter:!0,showColumnMenu:!0,showGroupPanel:!0,enableHighlighting:!0,enableRowSelection:!0,enablePaging:!0,showFooter:!0},{rowHeight:80,data:"debates",pagingOptions:e.pagingOptions,i18n:"zh-tw",columnDefs:[{field:"tts_id",displayName:"系統號",width:80},{field:"mly",displayName:"質詢人",width:130,cellTemplate:'<div ng-bind-html-unsafe="mly(row)"></div>'},{field:"source",displayName:"質詢公報",width:80,cellTemplate:'<div ng-bind-html-unsafe="source(row)"></div>'},{field:"answers",displayName:"答復公報",width:100,cellTemplate:'<div ng-bind-html-unsafe="answers(row)"></div>'},{field:"summary",displayName:"案由",visible:!1},{field:"answered",displayName:"答復",width:"50",cellTemplate:'<div ng-bind-html-unsafe="answer(row)"></div>'},{field:"date_asked",cellFilter:"date: mediumDate",width:"100",displayName:"質詢日期"},{field:"category",width:"*",displayName:"類別",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"topic",displayName:"主題",width:"*",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"keywords",displayName:"關鍵詞",width:"*",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"answered_by",displayName:"答復人",width:"80",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span >{{c}}</span></div>'},{field:"debate_type",displayName:"質詢性質",width:"*"}]}),e.getData=function(n){var r,i;return r=n.currentPage,i=n.pageSize,t.get("http://api.ly.g0v.tw/v0/collections/debates",{params:{sk:(r-1)*i,l:i}}).success(function(t){var n,r;return n=t.paging,r=t.entries,angular.forEach(r,function(e){e.date_asked=new Date(e.date_asked),e.source=JSON.parse(e.source)}),e.debates=r})},e.getData(e.pagingOptions)})}),angular.module("app.directives",["app.services"]).directive("ngxResize",["$window"].concat(function(e){return function(t){return t.width=e.innerWidth,t.height=e.innerHeight,angular.element(e).bind("resize",function(){return t.$apply(function(){return t.width=e.innerWidth,t.height=e.innerHeight})})}})),angular.module("app.filters",[]).filter("interpolate",["version"].concat(function(e){return function(t){return(t+"").replace(/\%VERSION\%/gm,e)}}));var mod;mod={LYService:["$http"].concat(function(e){var t;return t=[],e.get("/data/mly-8.json").success(function(e){return t=e}),{resolveParty:function(e){var n,r;return n=function(){var i,o,a,l,s=[];for(i=0,a=(o=t).length;a>i;++i)l=o[i],n=l.party,r=l.name,r===e&&s.push(n);return s}()[0]}}})},angular.module("app.services",[]).factory(mod);var maketree;maketree=function(e,t,n){var r,i,o,a,l,s,c,u,d,g;return r={top:0,right:40,bottom:0,left:40},i=960-r.right,o=n-r.top-r.bottom,a=d3.layout.tree().size([o,1]).separation(function(){return 1}),a.sort(function(e,t){return+e.name-+t.name}),l=d3.select(e).append("svg").attr("width",i+r.left+r.right).attr("height",o+r.top+r.bottom).style("margin","1em 0 1em "+-r.left+"px"),s=l.append("g").attr("transform","translate("+r.left+","+r.top+")"),c=a.nodes(t),u=d3.scale.linear().range([0,i]),u.domain([d3.min(c,function(e){return+e.name}),d3.max(c,function(e){return+e.name})]),d=s.selectAll(".link").data(a.links(c)).enter().append("path").attr("class","link").attr("d",d3.svg.diagonal().source(function(e){return{y:u(+e.source.name),x:e.source.x}}).target(function(e){return{y:u(+e.target.name),x:e.target.x}}).projection(function(e){return[e.y,e.x]})),g=s.selectAll(".node").data(c).enter().append("g").attr("class",function(e){return(e.type||"")+" node"}).attr("transform",function(e){return"translate("+u(+e.name)+","+e.x+")"}),g.append("text").attr("x",6).attr("dy",".32em").text(function(e){return e.name}).each(function(e){return e.width=this.getComputedTextLength()+12}),g.insert("rect","text").attr("ry",6).attr("rx",6).attr("y",-10).attr("height",20).attr("width",function(e){return Math.max(32,e.width)}),l},window.billHistory=function(e){var t,n,r,i,o,a,l,s,c,u,d;return t={top:20,right:20,bottom:100,left:40},n=960-t.left-t.right,r=500-t.top-t.bottom,i=d3.scale.ordinal().rangeRoundBands([0,n],.1),o=d3.scale.linear().rangeRound([r,0]),a=e.map(function(e){return e.motions.map(function(e){return e.meeting})}).reduce(curry$(function(e,t){return e.concat(t)})),l=d3.min(a),s=d3.max(a),i.domain(e.map(function(e){return e.motions.map(function(e){return e.meeting})}).reduce(curry$(function(e,t){return e.concat(t)}))),c=d3.svg.axis().scale(i).orient("bottom"),u=function(e,t,n){var r,i,o,a,l,s,c,d,g,f,p,h=[];if(i=function(){var e,i,o,a=[];for(e=0,o=(i=t).length;o>e;++e)r=i[e],r.id===n&&a.push(r);return a}()[0],null!=i){for(o=e,a=0,s=(l=i.motions).length;s>a;++a)c=l[a],d={name:c.meeting,bill:i,"class":"motion",children:[],type:"text"},console.log("push",o,d),o.children.push(d),o=d;for(a=0,s=(l=null!=(g=i.related)?g:[]).length;s>a;++a)f=l[a],h.push(p=u(o,t,f));return h}},d={name:17,"class":"root",children:[]},u(d,e,e[0].id),u(d,e,e[0].id),console.log(d),maketree(".history",d,360)};var stackedBars;window.loadMotions=function(e){return $(function(){return d3.json("/data/8-2.json",function(t){var n;return n=t.map(function(e){var t,n,r,i,o,a,l,s,c,u,d,g;for(t=e.meeting,n=e.announcement,r=e.discussion,i=function(){return d3.nest().key(function(e){var t;return null!=(t=e.status)?t:"unknown"}).rollup(function(e){return e.length})},a=[],l=0,s=r.length;s>l;++l)c=r[l],"exmotion"===c.type&&a.push(c);for(o=a,a=[],l=0,s=r.length;s>l;++l)c=r[l],"exmotion"!==c.type&&a.push(c);return r=a,u=i().map(n),d=i().map(r),g=i().map(o),{sitting:t.sitting,ann:n.length,dis:null!=r?r.length:void 0,ann_status:u,dis_status:d,exm_status:g,announcement:n,discussion:r,exmotion:o,meeting:t}}),e.$root.$broadcast("data",n),stackedBars(n,e)})})},stackedBars=function(e,t){var n,r,i,o,a,l,s,c,u,d,g,f,p,h,m,v,w,y,x,b,C;return n={top:10,right:20,bottom:10,left:60},r=1600,i=600,o=d3.scale.ordinal().rangeRoundBands([0,r],.1),a=d3.scale.linear().rangeRound([i,0]),l=d3.scale.ordinal().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]),s=d3.svg.axis().scale(o).orient("bottom"),c=d3.svg.axis().scale(a).orient("left").tickFormat(d3.format(".2s")),u=r+n.left+n.right,d=i+n.top+n.bottom,g="0 0 "+u+" "+d,f=d3.select(".chart").append("svg").attr("width","100%").attr("height","80%").attr("viewBox",g).append("g").attr("transform","translate("+n.left+","+n.top+")"),p=200,h=800,m=d3.select(".legends").append("svg").attr("width","100%").attr("height","80%").attr("viewbox","0 0 "+p+" "+h),v=d3.scale.ordinal().range(["#cccccc","#8a89a6","#7b6888","#6b486b","#ff8c00","#ff1c00","#000000","#23ff8c","#6b486b","#dddddd","#dddddd"]).domain(["retrected","rejected","accepted","committee","prioritized","unhandled","consultation","passed","ey","other","unknown"]),l.domain(["ann","dis"]),e.forEach(function(e){var t,n;return t=0,e.cum=l.domain().map(function(n){return{name:n,y0:t,y1:t+=+e[n]}}),t=0,e.ann_cum=v.domain().map(function(n){var r;return{name:n,y0:t,y1:t+=+(null!=(r=e.ann_status[n])?r:0)}}),t=0,e.dis_cum=v.domain().map(function(n){var r;return{name:n,y0:t,y1:t+=+(null!=(r=e.dis_status[n])?r:0)}}),t=0,e.exm_cum=v.domain().map(function(n){var r;return{name:n,y0:t,y1:t+=+(null!=(r=e.exm_status[n])?r:0)}}),e.total=(n=e.cum)[n.length-1].y1}),o.domain(e.map(function(e){return e.sitting})),a.domain([0,d3.max(e,function(e){return e.total})]),w=function(e,n,r){return t.$root.$broadcast("show",r,e,n)},f.append("g").attr("class","x axis").attr("transform","translate(0,"+i+")").call(s),y=f.selectAll(".sitting").data(e).enter().append("g").attr("class","g").attr("transform",function(e){return"translate("+o(e.sitting)+",0)"}).on("click",function(e){return w("announcement",e.name,b)}),x=f.append("g").selectAll(".desc").data(["報告事項","討論事項","臨時提案"]).enter().append("text").attr("class","desc").attr("transform",function(e,t){return"rotate(-90)translate("+(-i-10)+","+(o.rangeBand()*t/3+o(5))+")"}).attr("dy",".71em").style("text-anchor","end").text(function(e){return e}),b=null,y.selectAll("rect.sep").data(function(e){return[e.sitting]}).enter().append("rect").attr("class","sep").attr("width",1).attr("y",0).attr("x",o.rangeBand()+3).attr("height",i).style("fill","none").style("stroke","black").style("stroke-width",1).style("opacity",.2),y.selectAll("rect.col").data(function(e){return[e.sitting]}).enter().append("rect").attr("class","col").attr("width",o.rangeBand()).attr("y",0).attr("height",i).style("fill","white").style("opacity",0).on("mouseover",function(e){return e!==b?(x.attr("transform",function(t,n){return"rotate(-90)translate("+(-i-20)+","+(o.rangeBand()*n/3+o(e))+")"}),b=e):void 0}),y.selectAll("rect.ann").data(function(e){return e.ann_cum}).enter().append("rect").attr("class","ann").attr("width",o.rangeBand()/3-2).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),y.selectAll("rect.dis").data(function(e){return e.dis_cum}).enter().append("rect").attr("class","dis").attr("width",o.rangeBand()/3-2).attr("x",function(){return o.rangeBand()/3+1}).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),y.selectAll("rect.exm").data(function(e){return e.exm_cum}).enter().append("rect").attr("class","exm").attr("width",o.rangeBand()/3-2).attr("x",function(){return 2*(o.rangeBand()/3)+1}).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),C=m.selectAll(".legend").data(v.domain().slice().reverse()).enter().append("g").attr("class","legend").attr("transform",function(e,t){return"translate(0,"+20*t+")"}),C.append("rect").attr("x",0).attr("width",18).attr("height",18).style("fill",v),C.append("text").attr("x",20).attr("y",9).attr("dy",".35em").text(function(e){return t.statusName(e)}),f.append("g").attr("class","y axis").call(c).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("議案數")},angular.module("utils",[]).controller("topBtnCtrl",["$scope","$window"].concat(function(e,t){return e.showBtn=!1,angular.element(t).bind("scroll",function(){return console.log(window.pageYOffset),e.showBtn=window.pageYOffset>500?!0:!1,e.$apply()}),e.jumpToTop=function(){return window.scrollTo(0,0)}}));var ctemplate,renderConversation,render,renderYs,slice$=[].slice;ctemplate=require("view/ys/conversation"),renderConversation=function(e){return ctemplate({conversation:e,renderConversation:renderConversation})},render=function(e,t,n){var r,i,o,a,l,s,c=[];switch(t){case"Announcement":return e.append(require("view/ys/announcement")({content:n,renderConversation:renderConversation})),$(".sidebarnav").append($("<ul><li><a href='#announcement'>報告事項</a><li/></ul>").html());case"Interpellation":for(e.append(require("view/ys/interpellation")({content:n,renderConversation:renderConversation})),$(".sidebarnav").append($("<ul><li><a href='#interpellation'>質詢事項</a><li/></ul>").html()),r=0,o=(i=n.interpellation).length;o>r;++r)a=i[r],t=a[0],l=a[1],"interp"===t&&(s=l[0][0],c.push($(".sidebarnav").append($("<ul><li><a scrollto href='#interpellation-"+s+"'>"+s+"</a><li/></ul>").html())));return c;default:return e.append(renderConversation({conversation:[t,n]}))}},renderYs=function(e,t){var n,r,i,o,a,l;for(n=t.meta,r=t.log,e.append(require("view/ys/meta")(n)),i=0,o=r.length;o>i;++i)a=r[i],render.apply(null,[e].concat(slice$.call(a)));return $('[data-spy="affix"]').affix(),l=function(){return $('[data-spy="scroll"]').each(function(){return $(this).scrollspy("refresh")})},$(".collapse").on("hidden",l),l()},window.init=function(){return $.get("/data/yslog/ly-4004.json",{type:"json"},function(e){return renderYs($(".content"),e)})};