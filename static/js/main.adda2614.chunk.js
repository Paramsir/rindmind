(this.webpackJsonprindmind=this.webpackJsonprindmind||[]).push([[0],{108:function(e,a,t){e.exports=t(136)},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},128:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=(t(113),t(34)),i=t(43),m=t(99),u=t(98),s=(t(114),t(115),t(10)),d=t(7),E=t(30),p=t(13),b=t(15),h=t(3),f=t(182),v=t(22),g=t(207),x=t(199),O=t(200),j=t(208),k=t(198),N=t(67),w=t(202),C=t(201),y=t(90),S=t.n(y),q=t(92),A=t.n(q),D=t(91),M=t.n(D),T=t(209),B=t(203),I=t(204),L=t(97),R=t.n(L),W=t(95),P=t.n(W),_=t(94),F=t.n(_),H=t(96),J=t.n(H),Q=t(66),z=t(93),U=t.n(z),V=t(47),G=t.n(V),K=t(59),X=t(84),$=t.n(X),Z=(t(128),t(185)),Y=t(187),ee=t(188),ae=t(189),te=t(190),ne=Object(f.a)((function(e){return{root:{flexGrow:1,margin:2,"&:hover":{padding:1}},cardContent:{"&:hover":{}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:200}}}));function le(){var e=ne(),a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(){return(o=Object(K.a)(G.a.mark((function e(){var a,t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf",e.next=4,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf").catch((function(e){return console.error("Error to fetch data")}));case 4:return a=e.sent,e.next=7,a.json().catch((function(e){return console.error("Error to convert to JSON")}));case 7:t=e.sent,r(JSON.stringify(t)),console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),l.a.createElement("div",{id:"home"},l.a.createElement("main",{className:"myBody"},l.a.createElement("img",{src:"https://source.unsplash.com/1600x400/?laptop",alt:"Loading.."}),l.a.createElement("div",{className:e.root},l.a.createElement(Z.a,{container:!0,spacing:3},function(){var e;if(console.log("Data received is : "+c),null!=c)try{e=JSON.parse(c).articles.map((function(e,a){return l.a.createElement(ce,{key:a,class:"col col-1",title:e.title,img:e.urlToImage,para:e.description,originUrl:e.url})}))}catch(a){console.log(a)}return e}()))))}function ce(e){var a=ne(),t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],o=c[1];return l.a.createElement(Z.a,{item:!0,xs:12,sm:6,lg:4},l.a.createElement(Y.a,{className:a.root,elevation:5,onClick:function(){return o(!0)}},l.a.createElement(ee.a,{className:a.cardContent},l.a.createElement(ae.a,{className:a.media,image:e.img,title:"nop"}),l.a.createElement(te.a,null,l.a.createElement(N.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),l.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},e.para)))),l.a.createElement("div",null,l.a.createElement($.a,{className:"dialog",isOpen:r,onRequestClose:function(){return o(!1)}},l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{className:"dialog-close-btn",onClick:function(){return o(!1)}},"X")),l.a.createElement("div",{className:"dialog"},l.a.createElement("iframe",{className:"dialog",src:e.originUrl})))))}t(70);var re=t(192),oe=t(196),ie=t(195),me=t(191),ue=t(193),se=t(194),de=t(100),Ee=t(205),pe=t(211),be=t(197),he=t(210),fe=Object(f.a)((function(e){return{rootContainer:{paddingTop:e.spacing(3),padding:e.spacing(1),margin:e.spacing(0),marginTop:e.spacing(2)},table:{},formControl:{margin:e.spacing(0)},selectEmpty:{marginTop:e.spacing(0)}}}));function ve(){var e=fe();return l.a.createElement(be.a,{variant:"outlined",className:e.formControl},l.a.createElement(pe.a,{htmlFor:"outlined-age-native-simple"},"Task"),l.a.createElement(Ee.a,{native:!0,label:"task",inputProps:{name:"task",id:"outlined-age-native-simple"}},l.a.createElement("option",{"aria-label":"None",value:""}),l.a.createElement("option",null,"Frontend"),l.a.createElement("option",null,"Backend"),l.a.createElement("option",null,"Testing")))}var ge=function(){var e=fe();return l.a.createElement(he.a,{className:e.rootContainer},l.a.createElement(N.a,{variant:"h5"}," 1 - Use of react Component "),l.a.createElement(me.a,{component:de.a},l.a.createElement(re.a,{className:e.table},l.a.createElement(ue.a,null,l.a.createElement(se.a,null,l.a.createElement(ie.a,{scope:"col"}," Project Name "),l.a.createElement(ie.a,{scope:"col"}," Task Name "),l.a.createElement(ie.a,{scope:"col"}," Task Type "),l.a.createElement(ie.a,{scope:"col"}," Desc "),l.a.createElement(ie.a,{scope:"col"}," Assignee "))),l.a.createElement(oe.a,null,l.a.createElement(se.a,null,l.a.createElement(ie.a,{scope:"row"},"1"),l.a.createElement(ie.a,null,"Android"),l.a.createElement(ie.a,null,l.a.createElement(ve,null)),l.a.createElement(ie.a,null,"Welbuild application technician Android application "),l.a.createElement(ie.a,null,"Prafull")),l.a.createElement(se.a,null,l.a.createElement(ie.a,{scope:"row"},"2"),l.a.createElement(ie.a,null,"IOS "),l.a.createElement(ie.a,null,l.a.createElement(ve,null)),l.a.createElement(ie.a,null,"Welbuild application technician IOS application "),l.a.createElement(ie.a,null,"Nitin")),l.a.createElement(se.a,null,l.a.createElement(ie.a,{scope:"row"},"3"),l.a.createElement(ie.a,null,"WEB"),l.a.createElement(ie.a,null,l.a.createElement(ve,null)),l.a.createElement(ie.a,null,"Welbuild application technician web app"),l.a.createElement(ie.a,null,"Sakshi")),l.a.createElement(se.a,null,l.a.createElement(ie.a,{scope:"row"},"3"),l.a.createElement(ie.a,null,"NODE"),l.a.createElement(ie.a,null,l.a.createElement(ve,null)),l.a.createElement(ie.a,null,"Welbuild application technician Node server"),l.a.createElement(ie.a,null,"Harish "))))))},xe=t(46);function Oe(e){var a=e.empArray,t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],o=c[1],i=Object(n.useState)(a),m=Object(s.a)(i,2),u=m[0],E=m[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),f=h[0],v=h[1],g=Object(n.useState)({id:"",name:"",mobile:"",domain:""}),x=Object(s.a)(g,2),O=x[0],j=x[1];function k(e,a){switch(e){case"name":j(Object(d.a)(Object(d.a)({},O),{},{name:a}));break;case"mobile":j(Object(d.a)(Object(d.a)({},O),{},{mobile:a}));break;case"domain":j(Object(d.a)(Object(d.a)({},O),{},{domain:a}));break;default:j(Object(d.a)({},O))}console.log("data received ".concat(e," and ").concat(a)),console.log("name = ".concat(O.name," , mobile = ").concat(O.mobile," , domain = ").concat(O.domain))}return l.a.createElement("div",null,console.log("filter string received ".concat(r)),l.a.createElement("div",null,l.a.createElement("input",{className:"table",type:"text",name:"Search",placeholder:"Search Name , mobile , domain",onChange:function(e){return a=e.target.value,console.log("search string received is -",a),void o((function(e){return a}));var a}})),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"title"},l.a.createElement("tr",null,l.a.createElement("th",null," Name "),l.a.createElement("th",null," Mobile "),l.a.createElement("th",null," Domain "),l.a.createElement("th",null," Action "))),l.a.createElement("tbody",null,u.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.mobile.toLowerCase().includes(r.toLowerCase())||e.domain.toLowerCase().includes(r.toLowerCase())})).map((function(a,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null," ",a.name," "),l.a.createElement("td",null," ",a.mobile," "),l.a.createElement("td",null," ",a.domain," "),l.a.createElement("td",null," ",l.a.createElement("button",{onClick:function(t){return function(a){console.log("id received is",a),E(u.filter((function(e){return e.id!==a}))),e.callback(u)}(a.id)}}," delete ")," "))})),f&&l.a.createElement("tr",null,l.a.createElement(je,{name:"name",callback:k}),l.a.createElement(je,{name:"mobile",callback:k}),l.a.createElement(je,{name:"domain",callback:k})))),l.a.createElement("button",{onClick:function(){if(f&&O.name&&O.domain&&O.mobile){var a={id:u.length+1,name:O.name,mobile:O.mobile,domain:O.domain};E([].concat(Object(xe.a)(u),[a])),j({}),e.callback(a)}v(!f)}}," ADD HERE "),l.a.createElement(p.c,{to:"/addemp"},l.a.createElement("button",null," OPEN FORM ")))}function je(e){var a=e.name,t=e.callback;return l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:a,placeholder:a,onChange:function(e){e.persist();var n=e.target.value;t(a,n)}}))}var ke=[{id:1,name:"Param",mobile:"9762544581",domain:"Android"},{id:2,name:"Vikas",mobile:"9762523232",domain:"IOS"},{id:3,name:"Prashant",mobile:"9762547651",domain:"Android"},{id:4,name:"Shrutika",mobile:"9762549849",domain:"Android"},{id:5,name:"Rutuja",mobile:"9762547652",domain:"IOS"}];function Ne(e){var a=Object(n.useState)({name:"",mobile:"",domain:""}),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(e,a){switch(e){case"name":r(Object(d.a)(Object(d.a)({},c),{},{name:a}));break;case"mobile":r(Object(d.a)(Object(d.a)({},c),{},{mobile:a}));break;case"domain":r(Object(d.a)(Object(d.a)({},c),{},{domain:a}));break;default:r(Object(d.a)({},c))}console.log("data received ".concat(e," and ").concat(a)),console.log("name = ".concat(c.name," , mobile = ").concat(c.mobile," , domain = ").concat(c.domain))}return l.a.createElement("div",{className:"add-emp-root"},l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"name",value:c.name,placeholder:"Name",onChange:function(e){return o("name",e.target.value)}})),l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"mobile",value:c.mobile,placeholder:"Mobile",onChange:function(e){return o("mobile",e.target.value)}})),l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"domain",value:c.domain,placeholder:"Domain",onChange:function(e){return o("domain",e.target.value)}})),l.a.createElement(p.c,{to:"/training"},l.a.createElement("button",{onClick:function(){c.name&&c.domain&&c.mobile&&e.callback(c)}}," SAVE ")))}var we=function(){var e=Object(n.useState)(ke),a=Object(s.a)(e,2),t=a[0],c=a[1];function r(e){console.log("empoyee receied in task2 - ",e),c([].concat(Object(xe.a)(t),[e]))}return l.a.createElement(p.a,null,l.a.createElement("div",{className:"training-root"},l.a.createElement("h2",null," 2 - React Components and Nested Routing "),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/training"},l.a.createElement(Oe,{empArray:t,callback:r})),l.a.createElement(b.a,{exact:!0,path:"/addemp"},l.a.createElement(Ne,{callback:r})))))};function Ce(e){return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"title"},l.a.createElement("tr",null,l.a.createElement("th",null," Name "),l.a.createElement("th",null," owner "),l.a.createElement("th",null," status "))),l.a.createElement("tbody",null,e.projectsArray.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null," ",e.name," "),l.a.createElement("td",null," ",e.owner," "),l.a.createElement("td",null," ",e.status," "))})))))}var ye=function(){var e="http://127.0.0.1:3003/projects/",a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(){return(o=Object(K.a)(G.a.mark((function a(){var t,n;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e);case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,console.log("json received",n),r(n);case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),l.a.createElement("div",{className:"training-root"},l.a.createElement("h2",null," 3 - Mock Json server demo "),l.a.createElement(Ce,{projectsArray:c}))},Se=t(12);function qe(e){var a=e.name,t=e.callback;return l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:a,placeholder:a,onChange:function(e){e.persist();var n=e.target.value;t(a,n)}}))}var Ae=Object(Se.b)("empStore")(Object(Se.c)((function(e){var a=e.empStore.empData,t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],o=c[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],E=m[1],b=Object(n.useState)({id:"",name:"",mobile:"",domain:""}),h=Object(s.a)(b,2),f=h[0],v=h[1];function g(e,a){switch(e){case"name":v(Object(d.a)(Object(d.a)({},f),{},{name:a}));break;case"mobile":v(Object(d.a)(Object(d.a)({},f),{},{mobile:a}));break;case"domain":v(Object(d.a)(Object(d.a)({},f),{},{domain:a}));break;default:v(Object(d.a)({},f))}console.log("data received ".concat(e," and ").concat(a)),console.log("name = ".concat(f.name," , mobile = ").concat(f.mobile," , domain = ").concat(f.domain))}return l.a.createElement("div",null,console.log("filter string received ".concat(r)),l.a.createElement("div",null,l.a.createElement("input",{className:"table-mobx",type:"text",name:"Search",placeholder:"Search Name , mobile , domain",onChange:function(e){return a=e.target.value,console.log("search string received is -",a),void o((function(e){return a}));var a}})),l.a.createElement("table",{className:"table-mobx"},l.a.createElement("thead",{className:"title"},l.a.createElement("tr",null,l.a.createElement("th",null," Name "),l.a.createElement("th",null," Mobile "),l.a.createElement("th",null," Domain "),l.a.createElement("th",null," Action "))),l.a.createElement("tbody",null,e.empStore.empData.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.mobile.toLowerCase().includes(r.toLowerCase())||e.domain.toLowerCase().includes(r.toLowerCase())})).map((function(a,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null," ",a.name," "),l.a.createElement("td",null," ",a.mobile," "),l.a.createElement("td",null," ",a.domain," "),l.a.createElement("td",null," ",l.a.createElement("button",{onClick:function(t){return function(a){console.log("emp deleted is",a.name),e.empStore.deleteEmp(a)}(a)}}," delete ")," "))})),u&&l.a.createElement("tr",null,l.a.createElement(qe,{name:"name",callback:g}),l.a.createElement(qe,{name:"mobile",callback:g}),l.a.createElement(qe,{name:"domain",callback:g})))),l.a.createElement("button",{onClick:function(){if(u&&f.name&&f.domain&&f.mobile){var t={id:a.length+1,name:f.name,mobile:f.mobile,domain:f.domain};v({}),e.empStore.addEmp(t)}E(!u)}}," ADD HERE "),l.a.createElement(p.c,{to:"/addemp"},l.a.createElement("button",null," OPEN FORM ")))})));var De=Object(Se.b)("empStore")(Object(Se.c)((function(e){var a=Object(n.useState)({name:"",mobile:"",domain:""}),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(e,a){switch(e){case"name":r(Object(d.a)(Object(d.a)({},c),{},{name:a}));break;case"mobile":r(Object(d.a)(Object(d.a)({},c),{},{mobile:a}));break;case"domain":r(Object(d.a)(Object(d.a)({},c),{},{domain:a}));break;default:r(Object(d.a)({},c))}console.log("data received ".concat(e," and ").concat(a)),console.log("name = ".concat(c.name," , mobile = ").concat(c.mobile," , domain = ").concat(c.domain))}return l.a.createElement("div",{className:"add-emp-root"},l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"name",value:c.name,placeholder:"Name",onChange:function(e){return o("name",e.target.value)}})),l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"mobile",value:c.mobile,placeholder:"Mobile",onChange:function(e){return o("mobile",e.target.value)}})),l.a.createElement("div",{className:"form-field"},l.a.createElement("input",{type:"text",name:"domain",value:c.domain,placeholder:"Domain",onChange:function(e){return o("domain",e.target.value)}})),l.a.createElement(p.c,{to:"/training"},l.a.createElement("button",{onClick:function(){c.name&&c.domain&&c.mobile&&e.empStore.addEmp(c)}}," SAVE ")))})));var Me=Object(Se.b)("empStore")(Object(Se.c)((function(e){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"training-root"},l.a.createElement("h2",null," 4 - Mobx Data Passing "),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/training"},l.a.createElement(Ae,null)),l.a.createElement(b.a,{exact:!0,path:"/addemp"},l.a.createElement(De,null)))))}))),Te=t(6),Be=function(){function e(){Object(o.a)(this,e),this.empData=[{id:1,name:"Param",mobile:"9762544581",domain:"Android"},{id:2,name:"Vikas",mobile:"9762523232",domain:"IOS"},{id:3,name:"Prashant",mobile:"9762547651",domain:"Android"},{id:4,name:"Shrutika",mobile:"9762549849",domain:"Android"},{id:5,name:"Rutuja",mobile:"9762547652",domain:"IOS"}]}return Object(i.a)(e,[{key:"addEmp",value:function(e){this.empData.push(e)}},{key:"deleteEmp",value:function(e){var a=this.empData.indexOf(e);this.empData.splice(a,1)}}]),e}();Object(Te.j)(Be,{empData:Te.o,addEmp:Te.f,deleteEmp:Te.f});var Ie=new Be;function Le(){return l.a.createElement(Se.a,{empStore:Ie},l.a.createElement("div",null,l.a.createElement(Me,null),l.a.createElement(ye,null),l.a.createElement(we,null),l.a.createElement(ge,null)))}t(132);var Re=function(e){e.initial;var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],c=t[1];return{value:l,onChange:function(e){console.log("new value is ".concat(l)),c(e.target.value)}}};function We(e){var a=Re({}),t=Re({}),n=Re({});return l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"profile-container"},l.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"large","data-locale":"en_US","data-type":"vertical","data-theme":"dark","data-vanity":"parmeshwar-c-5aa39523"},l.a.createElement("a",{className:"LI-simple-link",href:"https://in.linkedin.com/in/parmeshwar-c-5aa39523?trk=profile-badge"},"Parmeshwar C."))),l.a.createElement("div",{className:"map-container"},l.a.createElement("p",null,l.a.createElement("iframe",{title:"my-location-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7842241010835!2d73.82456131446641!3d18.448103687451198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29546a43ae0c7%3A0xa96ed534588f907e!2sRajanigandha%20Sakshi%20Heights!5e0!3m2!1sen!2sin!4v1589552467235!5m2!1sen!2sin",width:"600",height:"450",frameBorder:"0",allowFullScreen:!1,"aria-hidden":"false",tabIndex:0}))),l.a.createElement("div",{className:"form"},l.a.createElement("h3",null," Contact Here "),l.a.createElement("input",Object.assign({type:"text",placeholder:"Name"},a)),l.a.createElement("input",Object.assign({type:"text"},t,{placeholder:"Email"})),l.a.createElement("textarea",Object.assign({className:"resizable-text"},n,{placeholder:"Reason"})),l.a.createElement("button",{name:"submit",value:"Submit",onClick:function(){console.log("submit button clicked")}},"Submit")))}t(133);var Pe=function e(){Object(o.a)(this,e),this.characters=[{text:"\u0905",audio:"1-a"},{text:"\u0906",audio:"2-aa"},{text:"\u0907",audio:"3-e"},{text:"\u0908",audio:"4-ie"},{text:"\u0909",audio:"5-u"},{text:"\u090a",audio:"6-uu"},{text:"\u090f",audio:"7-aye"},{text:"\u0910",audio:"8-aie"},{text:" \u0905\u0901",audio:"8.1-aae"},{text:"\u0913",audio:"9-oo"},{text:"\u0914",audio:"10-au"},{text:" \u0911 ",audio:"10.1-auu"},{text:"\u0905\u0902",audio:"11-um"},{text:"\u0905\u0903",audio:"12-aha"},{text:"\u0915",audio:"13-ka"},{text:"\u0916",audio:"14-kh"},{text:"\u0917",audio:"15-ga"},{text:"\u0918",audio:"16-gh"},{text:"\u0919",audio:"17-anga"},{text:"\u091a",audio:"18-ch"},{text:"\u091b",audio:"19-cha"},{text:"\u091c",audio:"20-ja"},{text:"\u091d",audio:"21-jha"},{text:"\u091e",audio:"22-tra"},{text:"\u091f",audio:"23-ta"},{text:"\u0920",audio:"24-tha"},{text:"\u0921",audio:"25-da"},{text:"\u0922",audio:"26-dha"},{text:"\u0923",audio:"27-na"},{text:"\u0924",audio:"28-ta"},{text:"\u0925",audio:"29-tha"},{text:"\u0926",audio:"30-da"},{text:"\u0927",audio:"31-dha"},{text:"\u0928",audio:"32-naa"},{text:"\u092a",audio:"33-pa"},{text:"\u092b",audio:"34-pha"},{text:"\u092c",audio:"35-ba"},{text:"\u092d",audio:"36-bha"},{text:"\u092e",audio:"37-ma"},{text:"\u092f",audio:"38-ya"},{text:"\u0930",audio:"39-ra"},{text:"\u0932",audio:"40-la"},{text:"\u0935",audio:"41-va"},{text:"\u0936",audio:"42-sh"},{text:"\u0937",audio:"43-sha"},{text:"\u0938",audio:"44-sa"},{text:"\u0939",audio:"45-ha"},{text:"\u0933",audio:"46-alaa"},{text:"\u0915\u094d\u0937",audio:"47-ksha"},{text:"\u091c\u094d\u091e",audio:"48-dnya"}],this.words=[{text:"\u0905\u092e\u0930",audio:"1-a"},{text:"\u0915\u092e\u0933",audio:"2-aa"},{text:"\u0917\u0917\u0928",audio:"3-e"},{text:"\u0918\u0930",audio:"4-ie"},{text:"\u091a\u092e\u091a\u093e",audio:"5-u"},{text:"\u091b\u0921\u0940",audio:"6-uu"},{text:"\u091d\u0917\u093e",audio:"7-aye"},{text:"\u0924\u0935\u093e",audio:"8-aie"},{text:" \u0925\u0935\u093e",audio:"8.1-aae"},{text:"\u0926\u092e",audio:"9-oo"},{text:"\u0927\u0930",audio:"10-au"},{text:" \u092a\u0930\u092e ",audio:"10.1-auu"},{text:"\u092b\u0928\u093e",audio:"11-um"},{text:"\u092c\u092c\u0928",audio:"12-aha"},{text:"\u092d\u093e\u0930\u0924",audio:"13-ka"},{text:"\u092e\u0917\u0930",audio:"14-kh"},{text:"\u092f\u092e",audio:"15-ga"},{text:"\u0930\u0935\u0940",audio:"16-gh"},{text:"\u0932\u093e\u0935",audio:"17-anga"},{text:"\u0935\u093e\u0930\u093e",audio:"18-ch"},{text:"\u0936\u0930\u0923",audio:"19-cha"},{text:"\u0938\u0938\u093e",audio:"20-ja"},{text:"\u0939\u0930\u0940\u0923",audio:"21-jha"},{text:"\u0915\u094d\u0937\u092e\u093e",audio:"22-tra"},{text:"\u091c\u094d\u091e\u093e\u0928",audio:"23-ta"}],this.numbers=[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1e3],this.maths=[{text:"0 + 0 = 0",audio:"1-a"},{text:"1 + 1 = 2",audio:"1-a"},{text:"2 + 2 = 4",audio:"2-aa"},{text:"3 + 3 = 6",audio:"3-e"},{text:"4 + 4 = 8",audio:"4-ie"},{text:"5 + 5 = 10",audio:"5-u"},{text:"6 + 6 = 12",audio:"6-uu"},{text:"7 + 7 = 14",audio:"7-aye"},{text:"8 + 8 = 16",audio:"8-aie"},{text:" 9 + 9 = 18",audio:"8.1-aae"},{text:"10 + 10 = 20",audio:"9-oo"},{text:"00 + 00 = 00",audio:"1-a"},{text:"10 + 10 = 20",audio:"1-a"},{text:"20 + 20 = 40",audio:"2-aa"},{text:"30 + 30 = 60",audio:"3-e"},{text:"40 + 40 = 80",audio:"4-ie"},{text:"50 + 50 = 100",audio:"5-u"},{text:"60 + 60 = 120",audio:"6-uu"},{text:"70 + 70 = 140",audio:"7-aye"},{text:"80 + 80 = 160",audio:"8-aie"},{text:" 90 + 90 = 180",audio:"8.1-aae"},{text:"100 + 100 = 200",audio:"9-oo"}],this.mathsMCQ=[{que:" 6 + 9 = ?",options:[69,16,19,15],ans:15},{que:"9 + 0 = ?",options:[9,90,19,900],ans:9},{que:"11 + 12 = ?",options:[13,31,23,32],ans:23},{que:"9 + 19 = ?",options:[20,28,29,39],ans:28},{que:"32 + 27 = ?",options:[37,57,73,59],ans:59},{que:"29 + 32 = ?",options:[52,61,71,59],ans:61},{que:"27 + 35 = ?",options:[57,52,62,75],ans:62},{que:"33 + 38 = ?",options:[70,78,71,61],ans:71},{que:"40 + 51 = ?",options:[90,91,81,71],ans:91},{que:"50 + 51 = ?",options:[501,551,101,100],ans:101}]};Object(Te.j)(Pe,{mainChars:Te.o});var _e=new Pe,Fe=Object(n.createContext)(_e);var He=Object(Se.c)((function(){var e=Object(n.useContext)(Fe).words;return l.a.createElement("div",{className:"data-grid"},e.map((function(e,a){return l.a.createElement("button",{className:"CharCard"},e.text)})))}));var Je=Object(Se.c)((function(){var e=Object(n.useContext)(Fe).numbers;return l.a.createElement("div",{className:"data-grid"},e.map((function(e,a){return l.a.createElement("button",{className:"CharCard"},e)})))}));var Qe=Object(Se.c)((function(){var e=Object(n.useContext)(Fe).maths;return l.a.createElement("div",{className:"data-grid"},e.map((function(e,a){return l.a.createElement("button",{className:"MathsCard"},e.text)})))}));function ze(e){var a=Object(n.useState)({isSected:!1,ans:""}),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(e){r({isSected:!0,ans:e})}return l.a.createElement("button",{className:"MCQCard"},l.a.createElement("div",{className:"question"},e.question.que),l.a.createElement("ul",null,e.question.options.map((function(a,t){return c.isSected&&c.ans!=e.question.ans&&c.ans==a?l.a.createElement("li",{className:"wrongAns",onClick:function(e){o(a)}},"      ",a):c.isSected&&e.question.ans==a?l.a.createElement("li",{className:"correctAns",onClick:function(e){o(a)}},"      ",a):l.a.createElement("li",{onClick:function(e){o(a)}},"      ",a," ")}))))}var Ue=Object(Se.c)((function(){var e=Object(n.useContext)(Fe).mathsMCQ;return l.a.createElement("div",{className:"data-grid"},e.map((function(e,a){return l.a.createElement(ze,{question:e})})))}));var Ve=Object(Se.c)((function(){var e=Object(n.useContext)(Fe).characters;return l.a.createElement("div",{className:"data-grid"},e.map((function(e,a){return l.a.createElement("button",{className:"CharCard"},e.text)})))}));function Ge(){return l.a.createElement(Se.a,{eduData:Fe},l.a.createElement(p.b,null,l.a.createElement("div",{className:"edu-root"},l.a.createElement("div",{className:"edu-header"},l.a.createElement("h1",null," \u0906\u0908\u091a\u0940 \u0936\u093e\u0933\u093e ")),l.a.createElement("div",null,l.a.createElement("ul",{className:"edu-menu"},l.a.createElement("li",{className:"tooltip"},l.a.createElement("span",{className:"tooltiptext"}," ",l.a.createElement(Ve,null)," "),l.a.createElement(p.d,{exact:!0,to:"/"}," \u091a\u094c\u0926\u093e\u0916\u0921\u0940  ")),l.a.createElement("li",{className:"tooltip"},l.a.createElement("span",{className:"tooltiptext"}," ",l.a.createElement(He,null)," "),l.a.createElement(p.d,{to:"/chars"}," \u0936\u092c\u094d\u0926 \u0913\u0933\u0916  ")),l.a.createElement("li",{className:"tooltip"},l.a.createElement("span",{className:"tooltiptext"}," ",l.a.createElement(Je,null)," "),l.a.createElement(p.d,{to:"/numbers"}," \u0905\u0902\u0915 \u0913\u0933\u0916 ")),l.a.createElement("li",{className:"tooltip"},l.a.createElement("span",{className:"tooltiptext"}," ",l.a.createElement(Qe,null)," "),l.a.createElement(p.d,{to:"/maths"}," \u0917\u0923\u093f\u0924\u0947  ")),l.a.createElement("li",{className:"tooltip"},l.a.createElement("span",{className:"tooltiptext"}," ",l.a.createElement(Ue,null)," "),l.a.createElement(p.d,{to:"/mcq"}," \u092a\u0930\u0940\u0915\u094d\u0937\u093e  ")))),l.a.createElement("div",null,l.a.createElement(b.a,{exact:!0,path:"/",component:Ve}),l.a.createElement(b.a,{path:"/chars",component:He}),l.a.createElement(b.a,{path:"/numbers",component:Je}),l.a.createElement(b.a,{path:"/maths",component:Qe}),l.a.createElement(b.a,{path:"/mcq",component:Ue})))))}t(134);var Ke=function(){function e(){Object(o.a)(this,e),this.sections=[{name:"C/C++ Programming",outOfMarks:0,marks:0,questions:[{que:"Which operator is used to resolve the scope of the global variable?",options:["->",".","*","::"],ans:"::"},{que:"What value strcmp() function returns when two strings are the same?",options:["0","2","1","Error"],ans:"0"},{que:"Which operator is used to continue the definition of macro in the next line?",options:["#","##","$","\\"],ans:"\\"},{que:"Choose the correct statement that is a combination of these two statements,:- Statement 1: char *p; Statement 2: p = (char*) malloc(100); ",options:["char p = *malloc(100);","char *p = (char*)malloc(100);","char *p = (char) malloc(100);","None of the above"],ans:"char *p = (char*)malloc(100);"},{que:"When overloading unary operators using Friend function,it requires_____ argument/s",options:["Zero","One","Two","None of the above"],ans:"One"}]},{name:"Data Structure",outOfMarks:0,marks:0,questions:[{que:"Time taken for the addition of elements in the queue is _____",options:["O(1)","O(n)","O(log n)","None of the above"],ans:"O(1)"},{que:"The data structure required for Breadth-First Traversal on a graph is",options:["Queue","Stack","Array","Tree"],ans:"Queue"},{que:"Which of the following operations is performed more efficiently by doubly linked list than by singly linked list?",options:["Searching of an unsorted list for a given item","Inverting a node after the node with the given location","Deleting a node whose location is given","Traversing a list to process each node"],ans:"Deleting a node whose location is given"},{que:"Convert the infix to postfix for A-(B+C)*(D/E)",options:["ABC+DE/*+","ABC+DE/*-","ABC+DE*/-","None of the above"],ans:"ABC+DE/*-"},{que:"The time complexities of the three algorithms are given. Which should execute the slowest for large values of N?",options:["O(N^1/2)","O(N)","O(log n)","None of the above"],ans:"O(log n)"}]}]}return Object(i.a)(e,[{key:"addMarks",value:function(e){this.sections[e].marks+=2}},{key:"getTotalOutOfMarks",get:function(){var e=this,a=0;return this.sections.map((function(e,a){e.outOfMarks=0})),this.sections.map((function(t,n){t.questions.map((function(t,l){a+=2,e.sections[n].outOfMarks+=2}))})),a}},{key:"getTotalMarks",get:function(){var e=0;return this.sections.map((function(a,t){e+=a.marks})),e}}]),e}();Object(Te.j)(Ke,{sections:Te.o,addmarks:Te.f,getTotalMarks:Te.g,getTotalOutOfMarks:Te.g});var Xe=Object(n.createContext)(new Ke);function $e(){return l.a.createElement("div",{className:"apti-root"},l.a.createElement("div",{className:"apti-header"},l.a.createElement(Ze,null),l.a.createElement("div",{className:"title"},l.a.createElement("h1",null," Aptitude Exam ")," "),l.a.createElement(Ye,null)),l.a.createElement("div",null,l.a.createElement(ea,null)))}function Ze(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){setInterval((function(){c(function(){function e(e){return(e<10?"0":"")+e}var a=new Date,t=e(a.getHours()),n=e(a.getMinutes()),l=e(a.getSeconds());return"".concat(t,":").concat(n,":").concat(l)}())}),1e3)}),[]),l.a.createElement("div",{className:"timer"},l.a.createElement("h2",null," ",t," "))}var Ye=Object(Se.c)((function(){var e=Object(n.useContext)(Xe);return l.a.createElement("div",{className:"marks"},l.a.createElement("h2",null," ",e.getTotalMarks," / ",e.getTotalOutOfMarks," "))})),ea=Object(Se.c)((function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=(a[0],a[1],Object(n.useContext)(Xe));return l.a.createElement("div",{className:"paper"},t.sections.map((function(e,a){return l.a.createElement(aa,{section:e,index:a})})))})),aa=Object(Se.c)((function(e){var a=Object(n.useState)(!0),t=Object(s.a)(a,2),c=t[0],r=t[1],o=Object(n.useContext)(Xe);return l.a.createElement("div",{className:"section"},l.a.createElement("div",{onClick:function(){r(!c)},className:"section-header"},l.a.createElement("h3",null," ",e.section.name," "),l.a.createElement("div",{className:"marks"},l.a.createElement("h3",null," ",o.sections[e.index].marks," / ",o.sections[e.index].outOfMarks," "))),l.a.createElement("div",{className:"section-questions"},c&&l.a.createElement("ul",null,e.section.questions.map((function(a,t){return l.a.createElement(ta,{question:a,callback:function(){o.addMarks(e.index)}})})))))}));function ta(e){var a=Object(n.useState)({answer:"",index:""}),t=Object(s.a)(a,2),c=t[0],r=t[1];function o(a,t){""==c.answer&&a==e.question.ans&&e.callback(),r({answer:a,index:t})}return l.a.createElement("div",{className:"exam-question"},l.a.createElement("li",null,l.a.createElement("h3",null," ",e.question.que," ")),l.a.createElement("ul",null,e.question.options.map((function(a,t){return""!=c.answer&&c.answer!=e.question.ans&&c.index==t?l.a.createElement("li",{className:"wrong-option",onClick:function(){return o(a,t)}}," ",a," "):""!=c.answer&&a==e.question.ans?l.a.createElement("li",{className:"correct-option",onClick:function(){return o(a,t)}}," ",a," "):l.a.createElement("li",{onClick:function(){return o(a,t)}}," ",a," ")}))))}var na=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(E.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,0)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(0),alignItems:"center"},link:{textDecoration:"none",color:e.palette.text.primary},span:{color:Q.a}}}));function la(){var e,a,t=na(),n=Object(v.a)(),c=l.a.useState(!1),r=Object(s.a)(c,2),o=r[0],i=r[1];return l.a.createElement(p.a,null,l.a.createElement("div",{className:t.root},l.a.createElement(k.a,null),l.a.createElement(x.a,{position:"fixed",className:Object(h.a)(t.appBar,Object(E.a)({},t.appBarShift,o))},l.a.createElement(O.a,null,l.a.createElement(C.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(h.a)(t.menuButton,Object(E.a)({},t.hide,o))},l.a.createElement(S.a,null)),l.a.createElement("div",null,l.a.createElement(N.a,{variant:"h4"},l.a.createElement("span",{className:t.span},"R"),"ind",l.a.createElement("span",{className:t.span},"M"),"ind"),l.a.createElement(N.a,{variant:"subtitle1"},"Mindful Technocrats")))),l.a.createElement(g.a,{variant:"permanent",className:Object(h.a)(t.drawer,(e={},Object(E.a)(e,t.drawerOpen,o),Object(E.a)(e,t.drawerClose,!o),e)),classes:{paper:Object(h.a)((a={},Object(E.a)(a,t.drawerOpen,o),Object(E.a)(a,t.drawerClose,!o),a))}},l.a.createElement("div",{className:t.toolbar},l.a.createElement(C.a,{onClick:function(){i(!1)}},"rtl"===n.direction?l.a.createElement(M.a,null):l.a.createElement(A.a,null))),l.a.createElement(w.a,null),l.a.createElement(p.c,{to:"/",className:t.link},l.a.createElement(j.a,null,l.a.createElement(T.a,{button:!0,key:"News"},l.a.createElement(B.a,null,l.a.createElement(U.a,null)," "),l.a.createElement(I.a,{primary:"News"})))),l.a.createElement(p.c,{to:"/edu",className:t.link},l.a.createElement(j.a,null,l.a.createElement(T.a,{button:!0,key:"edu"},l.a.createElement(B.a,null,l.a.createElement(F.a,null)," "),l.a.createElement(I.a,{primary:"Education"})))),l.a.createElement(p.c,{to:"/apti",className:t.link},l.a.createElement(j.a,null,l.a.createElement(T.a,null,l.a.createElement(B.a,null," ",l.a.createElement(P.a,null)," "),l.a.createElement(I.a,{primary:"Aptitude"})))),l.a.createElement(p.c,{to:"/about",className:t.link},l.a.createElement(j.a,null,l.a.createElement(T.a,{button:!0,key:"About"},l.a.createElement(B.a,null,l.a.createElement(J.a,null)," "),l.a.createElement(I.a,{primary:"About"})))),l.a.createElement(w.a,null),l.a.createElement(w.a,null),l.a.createElement(p.c,{to:"/training",className:t.link},l.a.createElement(j.a,null,l.a.createElement(T.a,{button:!0,key:"Training"},l.a.createElement(B.a,null,l.a.createElement(R.a,null)," "),l.a.createElement(I.a,{primary:"Training"}))))),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/"},l.a.createElement(le,null)),l.a.createElement(b.a,{exact:!0,path:"/rindmind"},l.a.createElement(le,null)),l.a.createElement(b.a,{exact:!0,path:"/training"},l.a.createElement(Le,null)),l.a.createElement(b.a,{exact:!0,path:"/edu"},l.a.createElement(Ge,null)),l.a.createElement(b.a,{exact:!0,path:"/apti"},l.a.createElement($e,null)),l.a.createElement(b.a,{exact:!0,path:"/about"},l.a.createElement(We,null))))))}var ca=function(){return l.a.createElement("div",null,l.a.createElement(la,null))},ra=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ca,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ra,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.adda2614.chunk.js.map