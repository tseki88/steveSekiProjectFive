(this["webpackJsonpsteve-seki-project-five"]=this["webpackJsonpsteve-seki-project-five"]||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/alarm.91de772f.mp3"},171:function(e,t,a){e.exports=a.p+"static/media/diceThrow2.42028cbf.wav"},172:function(e,t,a){e.exports=a.p+"static/media/dieShuffle1.b29cf404.wav"},173:function(e,t,a){e.exports=a.p+"static/media/dieShuffle2.a058de46.wav"},174:function(e,t,a){e.exports=a.p+"static/media/dieShuffle3.6a594926.wav"},175:function(e,t,a){e.exports=a.p+"static/media/dieThrow1.07ec7caa.wav"},176:function(e,t,a){e.exports=a.p+"static/media/dieThrow2.60f2c07a.wav"},177:function(e,t,a){e.exports=a.p+"static/media/dieThrow3.f4755e95.wav"},180:function(e,t,a){e.exports=a.p+"static/media/coin.e1a04d9f.mp3"},190:function(e,t,a){e.exports=a(345)},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),o=a.n(r),l=a(155),i=a(156),u=a(181),s=a(157),m=a(182),d=a(359),f=a(18),p=a(9),E=a(346);var b=function(e){var t=e.time%100,a=Math.floor(e.time/100)%60,n=Math.floor(e.time/6e3)%60,r=Math.floor(e.time/36e4)%60;return c.a.createElement("p",{className:"timeDisplay"},r<10?"0"+r:r,c.a.createElement("span",{className:"mini"},"h"),":",n<10?"0"+n:n,c.a.createElement("span",{className:"mini"},"m"),":",a<10?"0"+a:a,c.a.createElement("span",{className:"mini"},"s"),":",t<10?"0"+t:t)},v=a(158),h=a.n(v);var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=new Audio(h.a),c=Object(n.useState)(0),r=Object(p.a)(c,2),o=r[0],l=r[1],i=Object(n.useState)(!1),u=Object(p.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(!1),f=Object(p.a)(d,2),E=f[0],b=f[1],v=function(){m(!s)},g=function(){l(0)};Object(n.useEffect)((function(){return t||(E?a.play():(a.pause(),a.currentTime=0)),function(){a.pause(),a.currentTime=0}}),[E]);var O=function(){e?l((function(e){return e+1})):(1===o&&(m(!1),b(!0)),l((function(e){return e-1})))},C=function(e){l((function(t){return t+e}))};return Object(n.useEffect)((function(){return function(){clearTimeout(O)}})),s?setTimeout(O,10):clearTimeout(O),{time:o,running:s,toggleRunning:v,resetTimer:g,addTimerValue:C,alert:E,setAlert:b}},O=a(42);var C=function(e){var t=g(!0),a=t.time,n=t.running,r=t.toggleRunning,o=t.resetTimer;return c.a.createElement("div",{className:"toolContainer"},c.a.createElement(d.a,{size:"medium",icon:"time",content:"Stop Watch",dividing:!0}),c.a.createElement(O.a,{name:"delete",onClick:e.delete}),c.a.createElement(b,{time:a}),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:n?"pause":"play",content:n?"Pause":"Start",onClick:r}),c.a.createElement(E.a,{icon:"undo",content:"Reset",onClick:o,disabled:n})))},j=a(356);var k=function(e){var t=g(!1,e.mute),a=t.time,n=t.running,r=t.toggleRunning,o=t.resetTimer,l=t.addTimerValue,i=t.alert,u=t.setAlert;return c.a.createElement("div",{className:"toolContainer"},c.a.createElement(j.a,{trigger:c.a.createElement(d.a,{size:"medium",dividing:!0},c.a.createElement(O.a,{name:"hourglass"}),c.a.createElement(d.a.Content,null,"Timer"),c.a.createElement(O.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),content:c.a.createElement(E.a,{content:"Time's Up!",color:"red",size:"large",onClick:function(){return u(!1)}}),position:"bottom left",open:i}),c.a.createElement(O.a,{name:"delete",onClick:e.delete}),c.a.createElement(b,{time:a}),c.a.createElement("div",{className:"buttonContainer"},c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:n?"pause":"play",content:n?"Pause":"Start",onClick:r,disabled:0===a}),c.a.createElement(E.a,{icon:"undo",content:"Reset",onClick:o,disabled:n})),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{compact:!0,content:"+ 10 sec.",disabled:n,onClick:function(){return l(100)}}),c.a.createElement(E.a,{compact:!0,content:"+ 30 sec.",disabled:n,onClick:function(){return l(3e3)}}),c.a.createElement(E.a,{compact:!0,content:"+ 1 min.",disabled:n,onClick:function(){return l(6e3)}}),c.a.createElement(E.a,{compact:!0,content:"+ 5 min.",disabled:n,onClick:function(){return l(3e4)}}))))},y=a(363),S=a(171),w=a.n(S),N=a(172),T=a.n(N),M=a(173),x=a.n(M),z=a(174),A=a.n(z),I=a(175),G=a.n(I),B=a(176),R=a.n(B),F=a(177),P=a.n(F);var W=function(e){var t=Object(n.useState)([[6,6]]),a=Object(p.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(p.a)(l,2),u=i[0],s=i[1],m=Object(n.useState)("Calc"),b=Object(p.a)(m,2),v=b[0],h=b[1],g=Object(n.useState)(!1),C=Object(p.a)(g,2),k=C[0],S=C[1],N=Object(n.useState)(!1),M=Object(p.a)(N,2),z=M[0],I=M[1],B=Object(n.useState)(!1),F=Object(p.a)(B,2),W=F[0],D=F[1],L=Object(n.useState)({}),H=Object(p.a)(L,2),V=H[0],J=H[1];Object(n.useEffect)((function(){var e={};r.forEach((function(t){e[t[0]]?e[t[0]]++:e[t[0]]=1})),J(e)}),[r]);var U=function(){var e=[];r.forEach((function(t){var a;a=10===t[0]?Math.floor(Math.random()*t[0]):Math.ceil(Math.random()*t[0]),e.push([t[0],a])})),e.sort((function(){return 1-Math.floor(3*Math.random())})),o(e)},K=function(e,t){return c.a.createElement(E.a,{onClick:function(){var a;t?(a=e,o([].concat(Object(f.a)(r),10===a?[[a,Math.floor(Math.random()*a)]]:[[a,Math.ceil(Math.random()*a)]])),h("Calc")):function(e){var t=Object(f.a)(r),a=t.findIndex((function(t){return t[0]===e}));t.splice(a,1),o(t),h("Calc")}(e)},disabled:!t&&!V["".concat(e)]},c.a.createElement("i",{className:"dice df-d".concat(e,"-").concat(e)}),V["".concat(e)]?V["".concat(e)]:0)};return Object(n.useEffect)((function(){var e;return u?e=setInterval(U,100):clearInterval(e),function(){clearInterval(e)}}),[u]),c.a.createElement("div",{className:"toolContainer"},c.a.createElement(d.a,{size:"medium",dividing:!0},c.a.createElement(O.a,{name:"cube"}),c.a.createElement(d.a.Content,null,"Dice"),c.a.createElement(O.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),c.a.createElement(O.a,{name:"delete",onClick:e.delete}),c.a.createElement("div",{className:"diceContainer"},r.map((function(e,t){return c.a.createElement(y.a,{animation:"tada",duration:"500",visible:!u},c.a.createElement("i",{className:"dice df-d".concat(e[0],"-").concat(e[1]),key:"".concat(t,"-").concat(e[1])}))}))),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:"shuffle",content:"Roll",onClick:function(){if(s(!0),e.mute)setTimeout((function(){s(!1)}),2e3);else{var t,a,n=new Audio(T.a),c=new Audio(x.a),o=new Audio(A.a);if(1===r.length)t=new Audio(w.a);else if(r.length>1){switch(Math.ceil(3*Math.random())){case 1:a=n;break;case 2:a=c;break;case 3:a=o}switch(a.play(),Math.ceil(3*Math.random())){case 1:t=new Audio(G.a);break;case 2:t=new Audio(R.a);break;case 3:t=new Audio(P.a);break;default:return}}setTimeout((function(){t.play(),s(!1)}),2e3)}h("Calc")},disabled:u||0===r.length}),c.a.createElement(j.a,{trigger:c.a.createElement(E.a,{icon:"add",disabled:u}),content:c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a.Group,{className:"diceButtons"},K(4,!0),K(6,!0),K(8,!0)),c.a.createElement(E.a.Group,{className:"diceButtons"},K(10,!0),K(12,!0),K(20,!0))),on:"click",onOpen:function(){return I(!0)},onClose:function(){return I(!1)},position:"bottom center",open:z}),c.a.createElement(j.a,{trigger:c.a.createElement(E.a,{icon:"minus",disabled:0===r.length||u}),content:c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a.Group,{className:"diceButtons"},K(4,!1),K(6,!1),K(8,!1)),c.a.createElement(E.a.Group,{className:"diceButtons"},K(10,!1),K(12,!1),K(20,!1))),on:"click",onOpen:function(){return D(!0)},onClose:function(){return D(!1)},position:"bottom right",open:W})),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:"sort",content:"Sort",onClick:function(){var e=Object(f.a)(r);e.sort((function(e,t){return e[1]-t[1]})),o(e)},disabled:u}),c.a.createElement(E.a,{icon:"calculator",content:v||"",onClick:function(){var e=0;r.forEach((function(t){e+=t[1]})),h(e)},disabled:u}),c.a.createElement(j.a,{trigger:c.a.createElement(E.a,{icon:"undo",content:"Clear",disabled:u}),content:c.a.createElement(E.a,{color:"red",content:"Clear Dice?",onClick:function(){o([]),h("Calc"),S(!1)}}),on:"click",onOpen:function(){return S(!0)},onClose:function(){return S(!1)},position:"top center",open:k})))},D=a(180),L=a.n(D);var H=function(e){var t=Object(n.useState)([[2]]),a=Object(p.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(p.a)(l,2),u=i[0],s=i[1],m=Object(n.useState)("Calc"),b=Object(p.a)(m,2),v=b[0],h=b[1],g=Object(n.useState)(!1),C=Object(p.a)(g,2),k=C[0],S=C[1],w=Object(n.useState)({}),N=Object(p.a)(w,2),T=N[0],M=N[1];Object(n.useEffect)((function(){var e={};r.forEach((function(t){e[t]?e[t]++:e[t]=1})),M(e)}),[r]);var x=function(){var e=[];r.forEach((function(t){var a;a=Math.ceil(2*Math.random()),e.push(a)})),o(e)};return Object(n.useEffect)((function(){var e;return u?e=setInterval(x,100):clearInterval(e),function(){clearInterval(e)}}),[u]),c.a.createElement("div",{className:"toolContainer"},c.a.createElement(d.a,{size:"medium",dividing:!0},c.a.createElement(O.a,{name:"bitcoin"}),c.a.createElement(d.a.Content,null,"Coin"),c.a.createElement(O.a,{name:e.mute?"volume off":"volume up",color:e.mute?"red":"green",className:"toolStatus"})),c.a.createElement(O.a,{name:"delete",onClick:e.delete}),c.a.createElement("div",{className:"diceContainer"},r.map((function(e,t){return c.a.createElement(y.a,{animation:"bounce",duration:"500",visible:!u},c.a.createElement("i",{className:"dice df-d2-".concat(e),key:"".concat(t,"-").concat(e)}))}))),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:"shuffle",content:"Flip",onClick:function(){if(!e.mute)for(var t=0;t<r.length;t++){new Audio(L.a).play()}s(!0),h("Calc"),x(),setTimeout((function(){s(!1)}),500)},disabled:u||0===r.length}),c.a.createElement(E.a,{icon:"add",onClick:function(){o([].concat(Object(f.a)(r),[Math.ceil(2*Math.random())])),h("Calc")},disabled:u}),c.a.createElement(E.a,{icon:"minus",onClick:function(){var e=Object(f.a)(r);e.pop(),o(e),h("Calc")},disabled:0===r.length||u})),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:"calculator",content:v||"",onClick:function(){var e="H - ".concat(T[2]?T[2]:0," : T - ").concat(T[1]?T[1]:0);h(e)},disabled:u}),c.a.createElement(j.a,{trigger:c.a.createElement(E.a,{icon:"undo",content:"Clear",disabled:u}),content:c.a.createElement(E.a,{color:"red",content:"Clear Coin?",onClick:function(){o([]),h("Calc"),S(!1)}}),on:"click",onOpen:function(){return S(!0)},onClose:function(){return S(!1)},position:"top center",open:k})))},V=a(104),J=a.n(V);a(339);J.a.initializeApp({apiKey:"AIzaSyBes64-XWVoEtMfOsWfW9s508zigEuBYA8",authDomain:"super-fun-practice-app-5a95e.firebaseapp.com",databaseURL:"https://super-fun-practice-app-5a95e.firebaseio.com",projectId:"super-fun-practice-app-5a95e",storageBucket:"super-fun-practice-app-5a95e.appspot.com",messagingSenderId:"769252543566",appId:"1:769252543566:web:30d01d2f10d09e6a1c471f"});var U=J.a,K=a(357),X=a(353),Y=a(361),$=a(360),_=a(354),q=a(358);var Q=function(e){var t=K.a.Row,a=K.a.HeaderCell,r=K.a.Body,o=K.a.Cell,l=K.a.Footer,i=Object(n.useState)([""]),u=Object(p.a)(i,2),s=u[0],m=u[1],b=Object(n.useState)([{category:"Category",scores:[0]}]),v=Object(p.a)(b,2),h=v[0],g=v[1],C=Object(n.useState)(null),k=Object(p.a)(C,2),y=k[0],S=k[1],w=Object(n.useState)(!1),N=Object(p.a)(w,2),T=N[0],M=N[1],x=Object(n.useState)(!1),z=Object(p.a)(x,2),A=z[0],I=z[1],G=Object(n.useState)(!1),B=Object(p.a)(G,2),R=B[0],F=B[1],P=Object(n.useState)(!1),W=Object(p.a)(P,2),D=W[0],L=W[1];console.log("rerender");var H=U.database().ref("players"),V=U.database().ref("scoreTypes"),J=function(e,t){var a={};a["".concat(e)]=t,S(a)},Q=s.map((function(e,t){return c.a.createElement(a,{key:t},A?y&&y.player===t?c.a.createElement(X.a,{type:"text",value:e,fluid:!0,placeholder:"Name",action:{icon:"trash alternate",color:"red",onClick:function(){return function(e){var t=Object(f.a)(s);t.splice(e,1),H.set(t);var a=Object(f.a)(h);a.forEach((function(t){t.scores.splice(e,1)})),V.set(a),S(null)}(t)}}}):c.a.createElement(X.a,{type:"text",value:e,fluid:!0,placeholder:"Name",label:{icon:"delete",onClick:function(){return J("player",t)}},labelPosition:"right corner"}):c.a.createElement(X.a,{type:"text",value:e,fluid:!0,placeholder:"Name",onChange:function(e){!function(e,t){var a=Object(f.a)(s);a[t]=e.target.value,H.set(a)}(e,t)}}))})),Z=h.map((function(e,n){return e?c.a.createElement(t,{key:n,id:n},c.a.createElement(a,null,A?y&&y.score===n?c.a.createElement(X.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,action:{icon:"trash alternate",color:"red",onClick:function(){return function(e){var t=Object(f.a)(h);t.splice(e,1),V.set(t),S(null)}(n)}}}):c.a.createElement(X.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,label:{icon:"delete",onClick:function(){return J("score",n)}},labelPosition:"right corner"}):c.a.createElement(X.a,{type:"text",value:e.category,placeholder:"Category",fluid:!0,onChange:function(e){!function(e,t){var a=Object(f.a)(h);a[t].category=e.target.value,V.set(a)}(e,n)}})),e.scores.map((function(e,t){return c.a.createElement(o,{key:t,id:t},c.a.createElement(X.a,{type:"number",value:e,fluid:!0,onChange:function(e){!function(e,t,a){var n=Object(f.a)(h),c=e.target.value;n[t].scores[a]=c,V.set(n)}(e,n,t)}}))}))):null})),ee=s.map((function(e,t){var n=0;return h.forEach((function(e){var a=parseInt(e.scores[t]);n+=isNaN(a)?0:a})),c.a.createElement(a,{key:t},D?n:"-")}));return Object(n.useEffect)((function(){return M(!0),U.database().ref("players").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),m(t),M(!1)})),function(){}}),[]),Object(n.useEffect)((function(){return M(!0),U.database().ref("scoreTypes").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),g(t),M(!1)})),function(){}}),[]),c.a.createElement("div",{className:"toolContainer scoreContainer"},c.a.createElement(d.a,{size:"medium",icon:"table",content:"Score Card",dividing:!0}),c.a.createElement(O.a,{name:"delete",onClick:e.delete}),T?c.a.createElement(Y.a,null,c.a.createElement($.a,{active:!0},c.a.createElement(_.a,{content:"Loading"})),c.a.createElement(q.a,{style:{height:200,width:300}})):c.a.createElement(K.a,{definition:!0,selectable:!0,unstackable:!0,columns:"3",singleLine:!0},c.a.createElement(K.a.Header,null,c.a.createElement(t,null,c.a.createElement(a,null),Q)),c.a.createElement(r,null,Z),c.a.createElement(l,null,c.a.createElement(t,null,c.a.createElement(o,null,c.a.createElement(E.a,{icon:D?"hide":"calculator",content:"Total",onClick:function(){return L(!D)},fluid:!0})),ee))),c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{icon:A?"unlock":"lock",active:!A,content:A?"Lock Table":"Edit Table",onClick:function(){S(null),I(!A)}}),c.a.createElement(E.a,{icon:"add user",content:"Player",onClick:function(){var e=[].concat(Object(f.a)(s),[""]);H.set(e);var t=Object(f.a)(h);t.forEach((function(e){e.scores.push(0)})),V.set(t),S(null)},disabled:!A}),c.a.createElement(E.a,{icon:"add",content:"Row",onClick:function(){for(var e=[],t=0;t<s.length;t++)e.push(0);var a={category:"",scores:e},n=[].concat(Object(f.a)(h),[a]);V.set(n),S(null)},disabled:!A}),c.a.createElement(j.a,{trigger:c.a.createElement(E.a,{icon:"undo",content:"Reset",disabled:!A}),content:c.a.createElement(E.a,{color:"red",content:"Clear?",onClick:function(){H.set([""]),V.set([{category:"Category",scores:[0]}]),F(!1),S(null)}}),on:"click",onOpen:function(){return F(!0)},onClose:function(){return F(!1)},position:"top center",open:R})))};var Z=function(){var e=Object(n.useState)([{tool:"dice",id:"0"},{tool:"timer",id:"1"},{tool:"stopwatch",id:"2"},{tool:"coin",id:"3"},{tool:"scoreboard",id:"4"}]),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),l=Object(p.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)(a.length),m=Object(p.a)(s,2),d=m[0],b=m[1],v=Object(n.useState)(!1),h=Object(p.a)(v,2),g=h[0],O=h[1],j=function(e){var t=[].concat(Object(f.a)(a),[{tool:e,id:d}]);r(t),b((function(e){return e+1})),S(t)},y=function(e){var t=a.findIndex((function(t){return t.id===e})),n=Object(f.a)(a);n.splice(t,1),r(n),S(n)},S=function(e){e.filter((function(e){return"scoreboard"===e.tool})).length?u(!0):u(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"componentAppender"},c.a.createElement(E.a,{size:"large",icon:g?"volume off":"volume up",color:g?"red":"green",onClick:function(){O(!g)}}),c.a.createElement(E.a,{size:"large",icon:"time",onClick:function(){return j("stopwatch")}}),c.a.createElement(E.a,{size:"large",icon:"hourglass",onClick:function(){return j("timer")}}),c.a.createElement(E.a,{size:"large",icon:"cube",onClick:function(){return j("dice")}}),c.a.createElement(E.a,{size:"large",icon:"bitcoin",onClick:function(){return j("coin")}}),c.a.createElement(E.a,{size:"large",icon:"table",content:"temp: max-1",onClick:function(){return j("scoreboard")},disabled:i})),c.a.createElement("div",{className:"flex"},a.map((function(e){return function(e,t){switch(e){case"timer":return c.a.createElement(k,{key:t,delete:function(){return y(t)},mute:g});case"stopwatch":return c.a.createElement(C,{key:t,delete:function(){return y(t)}});case"dice":return c.a.createElement(W,{key:t,delete:function(){return y(t)},mute:g});case"coin":return c.a.createElement(H,{key:t,delete:function(){return y(t)},mute:g});case"scoreboard":return c.a.createElement(Q,{key:t,delete:function(){return y(t)}});default:return}}(e.tool,e.id)}))))};var ee=function(){return c.a.createElement("div",null,c.a.createElement(Z,null))};var te=function(){return c.a.createElement("footer",null,c.a.createElement("a",{href:"https://github.com/tseki88/steveSekiProjectFive",target:"_blank"},"Created by Steve Seki ",c.a.createElement(O.a,{name:"github",size:"large"})))},ae=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("header",null,c.a.createElement(d.a,{as:"h1",inverted:!0},"Board Game Toolkit")),c.a.createElement(ee,null),c.a.createElement(te,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(342),a(343),a(344);o.a.render(c.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[190,1,2]]]);
//# sourceMappingURL=main.874e9d2d.chunk.js.map