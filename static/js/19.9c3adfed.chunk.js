(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[19],{565:function(t,e,n){"use strict";n(93),n(94)},570:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u}));var r=n(15),o="#04d182",a=["#3e82f7",o,"#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(a),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},c=Object(r.a)({},i),s={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(a),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"".concat(t)}}}},l={colors:[].concat(a),plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},u={chart:{type:"line",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}}}},593:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return h}));var r=n(80),o=n.n(r),a=n(88),i="".concat(a.a,"/project");var c=n(236),s=(n(565),c.b.actions),l=function(t){return function(e){return(n=t,o.a.post("".concat(i,"/add-project"),n,{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOjEsImlhdCI6MTYyMTg2NDY4OX0.CSQnjulYvsKewlUINhB__jrrsKAicXbyviVmgZ0zOYc"}})).catch((function(t){t.clientMessage="Can't create product",e(s.catchError({error:t,callType:c.a.action}))}));var n}},u=function(){return function(t){return o.a.get("".concat(i),{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOjEsImlhdCI6MTYyMTg2NDY4OX0.CSQnjulYvsKewlUINhB__jrrsKAicXbyviVmgZ0zOYc"}}).then((function(e){var n=e.data;t(s.projectListFetched({data:n}))})).catch((function(e){e.clientMessage="Can't find vendors",t(s.catchError({error:e,callType:c.a.list}))}))}},d=function(t){return function(e){return function(t){return o.a.post("".concat(i,"/update"),t,{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOjEsImlhdCI6MTYyMTg2NDY4OX0.CSQnjulYvsKewlUINhB__jrrsKAicXbyviVmgZ0zOYc"}})}(t)}},h=function(t){return function(e){return function(t){return o.a.delete("".concat(i,"/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOjEsImlhdCI6MTYyMTg2NDY4OX0.CSQnjulYvsKewlUINhB__jrrsKAicXbyviVmgZ0zOYc"}})}(t)}}},676:function(t,e,n){"use strict";n.r(e);var r=n(79),o=n(0),a=n.n(o),i=n(168),c=n(574),s=n(575),l=n(700),u=n(695),d=n(532),h=n(195),f=(n(570),n(39)),p=n(593),b=(n(15),n(625),n(120),n(696),n(539),n(44),n(231),n(553),n(713),n(1));var j=n(276),g=n.n(j);i.a.Option,e.default=function(){var t=Object(f.d)();a.a.useEffect((function(){t(p.c())}),[]);var e=JSON.parse(localStorage.getItem("auth_token")),n=a.a.useState(e),o=Object(r.a)(n,2),i=o[0],j=(o[1],a.a.useState(!1)),I=Object(r.a)(j,2),m=(I[0],I[1],a.a.useState({title:"",currency:"",description:""})),O=Object(r.a)(m,2),y=(O[0],O[1],d.a.TextArea,Object(f.e)((function(t){return t.project.projectListData})),g()(String(i.email).trim().toLowerCase())),x="https://www.gravatar.com/avatar/".concat(y);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(c.a,{gutter:16,children:Object(b.jsx)(s.a,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,children:Object(b.jsx)(l.a,{style:{padding:"50px"},children:Object(b.jsx)(c.a,{gutter:16,children:Object(b.jsx)(s.a,{xs:24,sm:24,md:24,lg:8,style:{margin:"0 auto"},children:Object(b.jsxs)(h.a,{className:"h-100",flexDirection:"column",justifyContent:"center",children:[Object(b.jsx)("div",{style:{margin:"0 auto"},children:Object(b.jsx)(u.a,{src:x,width:200,align:"center",style:{borderRadius:"50%"}})}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsxs)("h1",{className:"mb-0",children:["Welcome ",i.firstname]}),Object(b.jsxs)("span",{className:"text-muted",children:["Last Login: ",i.lastLogin]})]})]})})})})})})})}}}]);
//# sourceMappingURL=19.9c3adfed.chunk.js.map