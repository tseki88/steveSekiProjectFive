(this["webpackJsonpsteve-seki-project-five"]=this["webpackJsonpsteve-seki-project-five"]||[]).push([[0],{156:function(e,t,n){e.exports=n.p+"static/media/alarm.91de772f.mp3"},169:function(e,t,n){e.exports=n.p+"static/media/diceThrow2.42028cbf.wav"},170:function(e,t,n){e.exports=n.p+"static/media/dieShuffle1.b29cf404.wav"},171:function(e,t,n){e.exports=n.p+"static/media/dieShuffle2.a058de46.wav"},172:function(e,t,n){e.exports=n.p+"static/media/dieShuffle3.6a594926.wav"},173:function(e,t,n){e.exports=n.p+"static/media/dieThrow1.07ec7caa.wav"},174:function(e,t,n){e.exports=n.p+"static/media/dieThrow2.60f2c07a.wav"},175:function(e,t,n){e.exports=n.p+"static/media/dieThrow3.f4755e95.wav"},178:function(e,t,n){e.exports=n.p+"static/media/coin.e1a04d9f.mp3"},187:function(e,t,n){e.exports=n(341)},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(41),o=n.n(r),i=n(8),l=n(356),u=n(43),s=n(361),d=n(18),m=n(342);var f=function(e){var t=e.time%100,n=Math.floor(e.time/100)%60,a=Math.floor(e.time/6e3)%60,r=Math.floor(e.time/36e4)%60;return c.a.createElement("p",{className:"timeDisplay"},r<10?"0"+r:r,c.a.createElement("span",{className:"mini"},"h"),":",a<10?"0"+a:a,c.a.createElement("span",{className:"mini"},"m"),":",n<10?"0"+n:n,c.a.createElement("span",{className:"mini"},"s"),":",t<10?"0"+t:t)},v=n(156),E=n.n(v);var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(0),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(0),u=Object(i.a)(l,2),s=u[0],d=u[1],m=Object(a.useState)(!1),f=Object(i.a)(m,2),v=f[0],p=f[1],b=Object(a.useState)(!1),h=Object(i.a)(b,2),g=h[0],C=h[1],O=function(){p(!v)},j=function(){d(0),o(0)};Object(a.useEffect)((function(){var e=new Audio(E.a);return t||(g?e.play():(e.pause(),e.currentTime=0)),o(0),function(){e.pause(),e.currentTime=0}}),[g]);var k=function(t){e||o((function(e){return e+t})),d((function(e){return e+t}))};return Object(a.useEffect)((function(){var t=setInterval((function(){v&&(e?d((function(e){return e+2})):s<=0?(p(!1),C(!0),clearInterval(t)):d((function(e){return e-2})))}),20);return function(){clearInterval(t)}})),{time:s,running:v,toggleRunning:O,resetTimer:j,addTimerValue:k,alert:g,setAlert:C,maxTime:r}};var b=function(e){var t=p(!0),n=t.time,r=t.running,o=t.toggleRunning,i=t.resetTimer,s=Object(a.useContext)(Z);return c.a.createElement("div",{className:"toolContainer ".concat(s?"darkMode":null)},c.a.createElement(l.a,{size:"medium",icon:"time",content:"Stop Watch",dividing:!0,inverted:s}),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:s}),c.a.createElement(f,{time:n}),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:r?"pause":"play",content:r?"Pause":"Start",onClick:o,inverted:s}),c.a.createElement(m.a,{icon:"undo",content:"Reset",onClick:i,disabled:r,inverted:s})))},h=n(353);var g=function(e){var t=p(!1,e.mute),n=t.time,r=t.running,o=t.toggleRunning,i=t.resetTimer,s=t.addTimerValue,d=t.alert,v=t.setAlert,E=t.maxTime,b=Object(a.useContext)(Z);return c.a.createElement("div",{className:"toolContainer ".concat(b?"darkMode":null)},c.a.createElement(h.a,{trigger:c.a.createElement(l.a,{size:"medium",dividing:!0,inverted:b},c.a.createElement(u.a,{name:!r&&E?"hourglass":r&&n/E>.9?"hourglass start":r&&n/E>.1?"hourglass half":"hourglass end"}),c.a.createElement(l.a.Content,null,"Timer"),c.a.createElement(u.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),content:c.a.createElement(m.a,{content:"Time's Up!",color:"red",size:"large",onClick:function(){return v(!1)},inverted:b}),position:"bottom left",open:d,inverted:b}),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:b}),c.a.createElement(f,{time:n}),c.a.createElement("div",{className:"buttonContainer"},c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:r?"pause":"play",content:r?"Pause":"Start",onClick:o,disabled:0===n,inverted:b}),c.a.createElement(m.a,{icon:"undo",content:"Reset",onClick:i,disabled:r,inverted:b})),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{compact:!0,content:"+ 10 sec.",disabled:r,onClick:function(){return s(1e3)},inverted:b}),c.a.createElement(m.a,{compact:!0,content:"+ 30 sec.",disabled:r,onClick:function(){return s(3e3)},inverted:b}),c.a.createElement(m.a,{compact:!0,content:"+ 1 min.",disabled:r,onClick:function(){return s(6e3)},inverted:b}),c.a.createElement(m.a,{compact:!0,content:"+ 5 min.",disabled:r,onClick:function(){return s(3e4)},inverted:b}))))},C=n(360),O=n(169),j=n.n(O),k=n(170),y=n.n(k),S=n(171),w=n.n(S),x=n(172),N=n.n(x),M=n(173),T=n.n(M),L=n(174),z=n.n(L),I=n(175),A=n.n(I);var R=function(e){var t=Object(a.useState)([[6,6]]),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(!1),f=Object(i.a)(s,2),v=f[0],E=f[1],p=Object(a.useState)("Calc"),b=Object(i.a)(p,2),g=b[0],O=b[1],k=Object(a.useState)(!1),S=Object(i.a)(k,2),x=S[0],M=S[1],L=Object(a.useState)(!1),I=Object(i.a)(L,2),R=I[0],G=I[1],B=Object(a.useState)(!1),P=Object(i.a)(B,2),W=P[0],F=P[1],D=Object(a.useContext)(Z),Y=Object(a.useState)({}),H=Object(i.a)(Y,2),J=H[0],V=H[1];Object(a.useEffect)((function(){var e={};r.forEach((function(t){e[t[0]]?e[t[0]]++:e[t[0]]=1})),V(e)}),[r]);var X=function(){var e=[];r.forEach((function(t){var n;n=10===t[0]?Math.floor(Math.random()*t[0]):Math.ceil(Math.random()*t[0]),e.push([t[0],n])})),e.sort((function(){return 1-Math.floor(3*Math.random())})),o(e)},U=function(e,t){return c.a.createElement(m.a,{onClick:function(){var n;t?(n=e,o([].concat(Object(d.a)(r),10===n?[[n,Math.floor(Math.random()*n)]]:[[n,Math.ceil(Math.random()*n)]])),O("Calc")):function(e){var t=Object(d.a)(r),n=t.findIndex((function(t){return t[0]===e}));t.splice(n,1),o(t),O("Calc")}(e)},disabled:!t&&!J["".concat(e)],inverted:D},c.a.createElement("i",{className:"dice df-d".concat(e,"-").concat(e)}),J["".concat(e)]?J["".concat(e)]:0)};return Object(a.useEffect)((function(){var e;return v?e=setInterval(X,100):clearInterval(e),function(){clearInterval(e)}}),[v]),c.a.createElement("div",{className:"toolContainer ".concat(D?"darkMode":null)},c.a.createElement(l.a,{size:"medium",dividing:!0,inverted:D},c.a.createElement(u.a,{name:"cube"}),c.a.createElement(l.a.Content,null,"Dice"),c.a.createElement(u.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:D}),c.a.createElement("div",{className:"diceContainer"},r.map((function(e,t){return c.a.createElement(C.a,{animation:"tada",duration:"500",visible:!v},c.a.createElement("i",{className:"dice df-d".concat(e[0],"-").concat(e[1]," ").concat(D?"darkMode":null),key:"".concat(t,"-").concat(e[1])}))}))),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:"shuffle",content:"Roll",onClick:function(){if(E(!0),e.mute)setTimeout((function(){E(!1)}),2e3);else{var t,n,a=new Audio(y.a),c=new Audio(w.a),o=new Audio(N.a);if(1===r.length)t=new Audio(j.a);else if(r.length>1){switch(Math.ceil(3*Math.random())){case 1:n=a;break;case 2:n=c;break;case 3:n=o}switch(n.play(),Math.ceil(3*Math.random())){case 1:t=new Audio(T.a);break;case 2:t=new Audio(z.a);break;case 3:t=new Audio(A.a);break;default:return}}setTimeout((function(){t.play(),E(!1)}),2e3)}O("Calc")},disabled:v||0===r.length,inverted:D}),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"add",disabled:v,inverted:D}),content:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a.Group,{className:"diceButtons"},U(4,!0),U(6,!0),U(8,!0)),c.a.createElement(m.a.Group,{className:"diceButtons"},U(10,!0),U(12,!0),U(20,!0))),on:"click",onOpen:function(){return G(!0)},onClose:function(){return G(!1)},position:"bottom center",open:R,inverted:D}),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"minus",disabled:0===r.length||v,inverted:D}),content:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a.Group,{className:"diceButtons"},U(4,!1),U(6,!1),U(8,!1)),c.a.createElement(m.a.Group,{className:"diceButtons"},U(10,!1),U(12,!1),U(20,!1))),on:"click",onOpen:function(){return F(!0)},onClose:function(){return F(!1)},position:"bottom right",open:W,inverted:D})),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:"sort",content:"Sort",onClick:function(){var e=Object(d.a)(r);e.sort((function(e,t){return e[1]-t[1]})),o(e)},disabled:v,inverted:D}),c.a.createElement(m.a,{icon:"calculator",content:g||"",onClick:function(){var e=0;r.forEach((function(t){e+=t[1]})),O(e)},disabled:v,inverted:D}),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"undo",content:"Clear",disabled:v,inverted:D}),content:c.a.createElement(m.a,{color:"red",content:"Clear Dice?",onClick:function(){o([]),O("Calc"),M(!1)},inverted:D}),on:"click",onOpen:function(){return M(!0)},onClose:function(){return M(!1)},position:"top center",open:x,inverted:D})))},G=n(178),B=n.n(G);var P=function(e){var t=Object(a.useContext)(Z),n=Object(a.useState)([[2]]),r=Object(i.a)(n,2),o=r[0],s=r[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),E=v[0],p=v[1],b=Object(a.useState)("Calc"),g=Object(i.a)(b,2),O=g[0],j=g[1],k=Object(a.useState)(!1),y=Object(i.a)(k,2),S=y[0],w=y[1],x=Object(a.useState)({}),N=Object(i.a)(x,2),M=N[0],T=N[1];Object(a.useEffect)((function(){var e={};o.forEach((function(t){e[t]?e[t]++:e[t]=1})),T(e)}),[o]);var L=function(){var e=[];o.forEach((function(t){var n;n=Math.ceil(2*Math.random()),e.push(n)})),s(e)};return Object(a.useEffect)((function(){var e;return E?e=setInterval(L,100):clearInterval(e),function(){clearInterval(e)}}),[E]),c.a.createElement("div",{className:"toolContainer ".concat(t?"darkMode":null)},c.a.createElement(l.a,{size:"medium",dividing:!0,inverted:t},c.a.createElement(u.a,{name:"bitcoin"}),c.a.createElement(l.a.Content,null,"Coin"),c.a.createElement(u.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:t}),c.a.createElement("div",{className:"diceContainer"},o.map((function(e,n){return c.a.createElement(C.a,{animation:"bounce",duration:"500",visible:!E},c.a.createElement("i",{className:"dice df-d2-".concat(e," ").concat(t?"darkMode":null),key:"".concat(n,"-").concat(e)}))}))),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:"shuffle",content:"Flip",onClick:function(){if(!e.mute)for(var t=0;t<o.length;t++){new Audio(B.a).play()}p(!0),j("Calc"),L(),setTimeout((function(){p(!1)}),500)},disabled:E||0===o.length,inverted:t}),c.a.createElement(m.a,{icon:"add",onClick:function(){s([].concat(Object(d.a)(o),[Math.ceil(2*Math.random())])),j("Calc")},disabled:E,inverted:t}),c.a.createElement(m.a,{icon:"minus",onClick:function(){var e=Object(d.a)(o);e.pop(),s(e),j("Calc")},disabled:0===o.length||E,inverted:t})),c.a.createElement(m.a.Group,null,c.a.createElement(m.a,{icon:"calculator",content:O||"",onClick:function(){var e="H - ".concat(M[2]?M[2]:0," : T - ").concat(M[1]?M[1]:0);j(e)},disabled:E,inverted:t}),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"undo",content:"Clear",disabled:E,inverted:t}),content:c.a.createElement(m.a,{color:"red",content:"Clear Coin?",onClick:function(){s([]),j("Calc"),w(!1)},inverted:t}),on:"click",onOpen:function(){return w(!0)},onClose:function(){return w(!1)},position:"top center",open:S,inverted:t})))},W=n(104),F=n.n(W);n(335);F.a.initializeApp({apiKey:"AIzaSyBes64-XWVoEtMfOsWfW9s508zigEuBYA8",authDomain:"super-fun-practice-app-5a95e.firebaseapp.com",databaseURL:"https://super-fun-practice-app-5a95e.firebaseio.com",projectId:"super-fun-practice-app-5a95e",storageBucket:"super-fun-practice-app-5a95e.appspot.com",messagingSenderId:"769252543566",appId:"1:769252543566:web:30d01d2f10d09e6a1c471f"});var D=F.a,Y=n(354),H=n(350),J=n(358),V=n(357),X=n(351),U=n(355);var K=function(e){var t=Y.a.Row,n=Y.a.HeaderCell,r=Y.a.Body,o=Y.a.Cell,s=Y.a.Footer,f=Object(a.useContext)(Z),v=Object(a.useState)([""]),E=Object(i.a)(v,2),p=E[0],b=E[1],g=Object(a.useState)([{category:"Category",scores:[0]}]),C=Object(i.a)(g,2),O=C[0],j=C[1],k=Object(a.useState)(null),y=Object(i.a)(k,2),S=y[0],w=y[1],x=Object(a.useState)(!1),N=Object(i.a)(x,2),M=N[0],T=N[1],L=Object(a.useState)(!1),z=Object(i.a)(L,2),I=z[0],A=z[1],R=Object(a.useState)(!1),G=Object(i.a)(R,2),B=G[0],P=G[1],W=Object(a.useState)(!1),F=Object(i.a)(W,2),K=F[0],$=F[1];console.log("rerender");var _=D.database().ref("players"),q=D.database().ref("scoreTypes"),Q=function(e,t){var n={};n["".concat(e)]=t,w(n)},ee=p.map((function(e,t){return c.a.createElement(n,{key:t},I?S&&S.player===t?c.a.createElement(H.a,{type:"text",value:e,fluid:!0,placeholder:"Name",action:{icon:"trash alternate",color:"red",onClick:function(){return function(e){var t=Object(d.a)(p);t.splice(e,1),_.set(t);var n=Object(d.a)(O);n.forEach((function(t){t.scores.splice(e,1)})),q.set(n),w(null)}(t)}},inverted:f}):c.a.createElement(H.a,{type:"text",value:e,fluid:!0,placeholder:"Name",label:{icon:"delete",onClick:function(){return Q("player",t)}},labelPosition:"right corner",inverted:f}):c.a.createElement(H.a,{type:"text",value:e,fluid:!0,placeholder:"Name",onChange:function(e){!function(e,t){var n=Object(d.a)(p);n[t]=e.target.value,_.set(n)}(e,t)},inverted:f}))})),te=O.map((function(e,a){return e?c.a.createElement(t,{key:a,id:a},c.a.createElement(n,null,I?S&&S.score===a?c.a.createElement(H.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,action:{icon:"trash alternate",color:"red",onClick:function(){return function(e){var t=Object(d.a)(O);t.splice(e,1),q.set(t),w(null)}(a)}},inverted:f}):c.a.createElement(H.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,label:{icon:"delete",onClick:function(){return Q("score",a)}},labelPosition:"right corner",inverted:f}):c.a.createElement(H.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,onChange:function(e){!function(e,t){var n=Object(d.a)(O);n[t].category=e.target.value,q.set(n)}(e,a)},inverted:f})),e.scores.map((function(e,t){return c.a.createElement(o,{key:t,id:t},c.a.createElement(H.a,{type:"number",value:e,fluid:!0,onChange:function(e){!function(e,t,n){var a=Object(d.a)(O),c=e.target.value;a[t].scores[n]=c,q.set(a)}(e,a,t)},inverted:f}))}))):null})),ne=p.map((function(e,t){var a=0;return O.forEach((function(e){var n=parseInt(e.scores[t]);a+=isNaN(n)?0:n})),c.a.createElement(n,{key:t},K?a:"-")}));return Object(a.useEffect)((function(){return T(!0),D.database().ref("players").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),b(t),T(!1)})),function(){}}),[]),Object(a.useEffect)((function(){return T(!0),D.database().ref("scoreTypes").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),j(t),T(!1)})),function(){}}),[]),c.a.createElement("div",{className:"toolContainer scoreContainer ".concat(f?"darkMode":null)},c.a.createElement(l.a,{size:"medium",icon:"table",content:"Score Card",dividing:!0,inverted:f}),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:f}),M?c.a.createElement(J.a,null,c.a.createElement(V.a,{active:!0},c.a.createElement(X.a,{content:"Loading",inverted:f})),c.a.createElement(U.a,{style:{height:200,width:300}})):c.a.createElement(Y.a,{definition:!0,selectable:!0,unstackable:!0,columns:"3",singleLine:!0,inverted:f},c.a.createElement(Y.a.Header,null,c.a.createElement(t,null,c.a.createElement(n,null),ee)),c.a.createElement(r,null,te),c.a.createElement(s,null,c.a.createElement(t,null,c.a.createElement(o,null,c.a.createElement(m.a,{icon:K?"hide":"calculator",content:"Total",onClick:function(){return $(!K)},fluid:!0,inverted:f})),ne))),c.a.createElement(m.a.Group,{compact:!0},c.a.createElement(m.a,{icon:I?"unlock":"lock",active:!I,content:I?"Lock Table":"Edit Table",onClick:function(){w(null),A(!I)},inverted:f}),c.a.createElement(m.a,{icon:"add user",content:"Player",onClick:function(){var e=[].concat(Object(d.a)(p),[""]);_.set(e);var t=Object(d.a)(O);t.forEach((function(e){e.scores.push(0)})),q.set(t),w(null)},disabled:!I,inverted:f}),c.a.createElement(m.a,{icon:"add",content:"Row",onClick:function(){for(var e=[],t=0;t<p.length;t++)e.push(0);var n={category:"",scores:e},a=[].concat(Object(d.a)(O),[n]);q.set(a),w(null)},disabled:!I,inverted:f}),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"undo",content:"Reset",disabled:!I,inverted:f}),content:c.a.createElement(m.a,{color:"red",content:"Clear?",onClick:function(){_.set([""]),q.set([{category:"Category",scores:[0]}]),P(!1),w(null)},inverted:f}),on:"click",onOpen:function(){return P(!0)},onClose:function(){return P(!1)},position:"top center",open:B,inverted:f})))};var $=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(!1),d=Object(i.a)(s,2),f=d[0],v=d[1],E=Object(a.useState)("#ff0000"),p=Object(i.a)(E,2),b=p[0],g=p[1],C=Object(a.useState)(!1),O=Object(i.a)(C,2),j=O[0],k=O[1],y=Object(a.useRef)(null),S=Object(a.useRef)(null),w=Object(a.useContext)(Z),x=Object(a.useCallback)((function(e){e.preventDefault();var t=N(e);t&&(v(!0),o(t))}),[]),N=function(e){if(y.current){var t=y.current,n=t.getBoundingClientRect();return e.touches?(t.removeEventListener("mouseup",L),t.removeEventListener("mouseleave",L),t.removeEventListener("mousedown",x),t.removeEventListener("mousemove",M),{x:e.touches[0].pageX-n.left,y:e.touches[0].pageY-window.scrollY-n.top}):{x:e.pageX-n.left,y:e.pageY-window.scrollY-n.top}}},M=Object(a.useCallback)((function(e){if(f){var t=N(e);r&&t&&(T(r,t),o(t))}}),[f,r]),T=function(e,t){if(y.current){var n=y.current.getContext("2d");n&&(n.strokeStyle=b,n.lineJoin="round",n.lineWidth=3,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.closePath(),n.stroke())}},L=Object(a.useCallback)((function(){v(!1)}),[]);return Object(a.useEffect)((function(){if(y.current){var e=y.current,t=S.current;return e.width=t.clientWidth,e.height=t.clientHeight,e.addEventListener("touchstart",x),e.addEventListener("mousedown",x),function(){e.removeEventListener("touchstart",x),e.removeEventListener("mousedown",x)}}}),[x]),Object(a.useEffect)((function(){if(y.current){var e=y.current;return e.addEventListener("touchmove",M),e.addEventListener("mousemove",M),function(){e.removeEventListener("touchmove",M),e.removeEventListener("mousemove",M)}}}),[M]),Object(a.useEffect)((function(){if(y.current){var e=y.current;return e.addEventListener("touchend",L),e.addEventListener("touchcancel",L),e.addEventListener("mouseup",L),e.addEventListener("mouseleave",L),function(){e.removeEventListener("touchend",L),e.removeEventListener("touchcancel",L),e.removeEventListener("mouseup",L),e.removeEventListener("mouseleave",L)}}}),[L]),c.a.createElement("div",{className:"toolContainer ".concat(w?"darkMode":null)},c.a.createElement(l.a,{size:"medium",icon:"pencil",content:"Canvas",dividing:!0,inverted:w}),c.a.createElement(u.a,{name:"delete",onClick:e.delete,inverted:w}),c.a.createElement("div",{className:"canvasContainer",ref:S},c.a.createElement("canvas",{ref:y,style:{border:"1px solid black"}})),c.a.createElement("div",null,c.a.createElement(H.a,{type:"color",list:"colorList",value:b,onChange:function(e){g(e.target.value)},inverted:w}),c.a.createElement("datalist",{id:"colorList"},c.a.createElement("option",{value:"#ff0000"}),c.a.createElement("option",{value:"#000000"}),c.a.createElement("option",{value:"#00ff00"}),c.a.createElement("option",{value:"#0000ff"})),c.a.createElement(h.a,{trigger:c.a.createElement(m.a,{icon:"erase",content:"Clear",inverted:w}),content:c.a.createElement(m.a,{color:"red",content:"Clear Canvas?",onClick:function(){if(y.current){var e=y.current;e.getContext("2d").clearRect(0,0,e.width,e.height),k(!1)}},inverted:w}),on:"click",onOpen:function(){return k(!0)},onClose:function(){return k(!1)},position:"top center",open:j,inverted:w})))};var _=function(){var e=Object(a.useContext)(Z),t=Object(a.useState)([{tool:"dice",id:"0"},{tool:"timer",id:"1"},{tool:"stopwatch",id:"2"},{tool:"coin",id:"3"},{tool:"scoreboard",id:"4"}]),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(!0),u=Object(i.a)(l,2),s=u[0],f=u[1],v=Object(a.useState)(r.length),E=Object(i.a)(v,2),p=E[0],h=E[1],C=Object(a.useState)(!1),O=Object(i.a)(C,2),j=O[0],k=O[1],y=function(e){var t=[].concat(Object(d.a)(r),[{tool:e,id:p}]);o(t),h((function(e){return e+1})),w(t)},S=function(e){var t=r.findIndex((function(t){return t.id===e})),n=Object(d.a)(r);n.splice(t,1),o(n),w(n)},w=function(e){e.filter((function(e){return"scoreboard"===e.tool})).length?f(!0):f(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"componentAppender"},c.a.createElement(m.a,{size:"large",icon:j?"volume off":"volume up",color:j?"red":"green",onClick:function(){k(!j)},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"time",onClick:function(){return y("stopwatch")},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"hourglass",onClick:function(){return y("timer")},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"cube",onClick:function(){return y("dice")},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"bitcoin",onClick:function(){return y("coin")},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"pencil",onClick:function(){return y("canvas")},inverted:e}),c.a.createElement(m.a,{size:"large",icon:"table",content:"temp: max-1",onClick:function(){return y("scoreboard")},disabled:s,inverted:e})),c.a.createElement("div",{className:"flex"},r.map((function(e){return function(e,t){switch(e){case"timer":return c.a.createElement(g,{key:t,delete:function(){return S(t)},mute:j});case"stopwatch":return c.a.createElement(b,{key:t,delete:function(){return S(t)}});case"dice":return c.a.createElement(R,{key:t,delete:function(){return S(t)},mute:j});case"coin":return c.a.createElement(P,{key:t,delete:function(){return S(t)},mute:j});case"scoreboard":return c.a.createElement(K,{key:t,delete:function(){return S(t)}});case"canvas":return c.a.createElement($,{key:t,delete:function(){return S(t)}});default:return}}(e.tool,e.id)}))))};var q=function(){return c.a.createElement("div",null,c.a.createElement(_,null))};var Q=function(){return c.a.createElement("footer",null,c.a.createElement("a",{href:"https://github.com/tseki88/steveSekiProjectFive",target:"_blank"},"Created by Steve Seki ",c.a.createElement(u.a,{name:"github",size:"large"})))},Z=c.a.createContext();var ee=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"app ".concat(n?"darkMode":null)},c.a.createElement("header",null,c.a.createElement(l.a,{as:"h1",inverted:!0},"Board Game Toolkit"),c.a.createElement("div",{className:"darkToggle"},c.a.createElement(u.a,{name:"sun",size:"large",color:"orange",inverted:n}),c.a.createElement(s.a,{className:"darkToggleSwitch",toggle:!0,onChange:function(){return r(!n)},checked:n}),c.a.createElement(u.a,{name:"moon",size:"large",color:"yellow",inverted:n}))),c.a.createElement(Z.Provider,{value:n},c.a.createElement(q,null)),c.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(338),n(339),n(340);o.a.render(c.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[187,1,2]]]);
//# sourceMappingURL=main.e2f0941f.chunk.js.map