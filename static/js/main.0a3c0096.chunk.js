(this["webpackJsonpsteve-seki-project-five"]=this["webpackJsonpsteve-seki-project-five"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),i=(a(27),a(2)),o=a(3),l=a(5),u=a(4),m=a(6),b=(a(28),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Placeholder")}}]),t}(n.Component)),d=a(13),h=a.n(d);a(29);h.a.initializeApp({apiKey:"AIzaSyDc29x3tdKHxQURl3f9mZhQgKFFpkW_R5s",authDomain:"juno-react-project.firebaseapp.com",databaseURL:"https://juno-react-project.firebaseio.com",projectId:"juno-react-project",storageBucket:"juno-react-project.appspot.com",messagingSenderId:"626440056280",appId:"1:626440056280:web:07c8d249dbbff3e61196ad"});var f=h.a,p=a(8),j=a(9),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).editEnable=function(){e.setState({sessionNameEdit:!e.state.sessionNameEdit})},e.editSessionName=function(t){var a=f.database().ref("sessionName"),n=e.state.sessionName;n=t.target.value,a.set(n)},e.state={sessionName:"",sessionNameEdit:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("sessionName").on("value",(function(t){var a=t.val();e.setState({sessionName:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,!1===this.state.sessionNameEdit?r.a.createElement("h3",{className:"sessionName"},this.state.sessionName," ",r.a.createElement("span",{className:"icon editIcon",onClick:this.editEnable},r.a.createElement(p.a,{icon:j.b}))," "):r.a.createElement("div",null,r.a.createElement("input",{className:"sessionName",type:"text",onChange:this.editSessionName,value:this.state.sessionName,onKeyPress:function(t){"Enter"===t.key&&e.editEnable()}}),r.a.createElement("span",{className:"sessionName icon checkIcon",onClick:this.editEnable},r.a.createElement(p.a,{icon:j.a}))))}}]),t}(n.Component),O=a(7),E=a(15),g=a.n(E),C=a(21),y=a.n(C)()(g.a),N=function(){return y.fire({title:"Time is Up!!",icon:"warning",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reset"})},k=function(e){return y.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&(g.a.fire("Deleted!","Your file has been deleted.","success"),e())}))},T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"userComponent relative",key:this.props.keyValue},1!==this.props.userbaseData.length&&r.a.createElement("button",{className:"delete deleteUserObject",onClick:function(){k((function(){return e.props.removeUserObject(e.props.keyValue)}))},id:this.props.keyValue},"x"),r.a.createElement("input",{type:"text",placeholder:"Enter User",className:"userName cell",onChange:function(t){return e.props.handleUserNameChange(t)},id:this.props.keyValue,value:this.props.userbaseObjects.userName}),this.props.userbaseObjects.userScore.map((function(t,a){return r.a.createElement("input",{type:"number",className:"cell",key:a,name:e.props.keyValue,id:a,onChange:function(t){return e.props.handleCellValueChange(t)},value:t})})))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).addNewUserObject=function(){for(var t=f.database().ref("userbaseObjects"),a=Object(O.a)(e.state.userbaseObjects),n={userName:"",userScore:[]},r=n.userScore.length;r<e.state.scoreType.length;r++)n.userScore.push(0);a.push(n),t.set(a)},e.removeUserObject=function(t){var a=f.database().ref("userbaseObjects"),n=Object(O.a)(e.state.userbaseObjects);n.splice(t,1),a.set(n)},e.handleUserNameChange=function(t){var a=f.database().ref("userbaseObjects"),n=Object(O.a)(e.state.userbaseObjects);n[t.target.id].userName=t.target.value,a.set(n)},e.handleCellValueChange=function(t){var a=f.database().ref("userbaseObjects"),n=Object(O.a)(e.state.userbaseObjects);n[t.target.name].userScore[t.target.id]=t.target.value,a.set(n)},e.addNewScoreCategory=function(){var t=f.database().ref("scoreType"),a=Object(O.a)(e.state.scoreType);a.push(""),t.set(a);var n=f.database().ref("userbaseObjects"),r=Object(O.a)(e.state.userbaseObjects);r.forEach((function(e){var t=Object(O.a)(e.userScore);t.push(0),e.userScore=t})),n.set(r)},e.removeScoreCategory=function(t){var a=f.database().ref("scoreType"),n=Object(O.a)(e.state.scoreType);n.splice(t,1),a.set(n);var r=f.database().ref("userbaseObjects"),s=Object(O.a)(e.state.userbaseObjects);s.forEach((function(e){e.userScore.splice(t,1)})),r.set(s)},e.handleScoreTypeChange=function(t){var a=f.database().ref("scoreType"),n=Object(O.a)(e.state.scoreType);n[parseInt(t.target.id)]=t.target.value,a.set(n)},e.resetComponent=function(){var e=f.database().ref("userbaseObjects"),t=f.database().ref("scoreType");e.set([{userName:"",userScore:[0]}]);t.set([""])},e.clearScore=function(){var t=f.database().ref("userbaseObjects"),a=Object(O.a)(e.state.userbaseObjects);a.forEach((function(e){e.userScore.forEach((function(e,t,a){a[t]=0}))})),t.set(a)},e.state={userbaseObjects:[],scoreType:[""]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("scoreType").on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push(n[r]);e.setState({scoreType:a})})),f.database().ref("userbaseObjects").on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push(n[r]);e.setState({userbaseObjects:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scoreContainer"},r.a.createElement("h3",null,"Score Card"),r.a.createElement("div",{className:"grid relative"},r.a.createElement("div",null,r.a.createElement("div",{className:"cell"},r.a.createElement("button",{onClick:function(){k((function(){return e.resetComponent()}))}},"Reset All"),r.a.createElement("button",{onClick:function(){k((function(){return e.clearScore()}))}},"Clear Score")),this.state.scoreType.map((function(t,a){return r.a.createElement("div",{className:"relative",key:a},1!==e.state.scoreType.length&&r.a.createElement("button",{className:"delete deleteScoreType",onClick:function(){k((function(){return e.removeScoreCategory(a)}))},id:a},"x"),r.a.createElement("input",{placeholder:"Category Name",type:"text",className:"cell scoreType",onChange:e.handleScoreTypeChange,value:t,id:a}))}))),r.a.createElement("button",{className:"addScoreTypeIcon",onClick:this.addNewScoreCategory},r.a.createElement(p.a,{icon:j.c})),this.state.userbaseObjects.map((function(t,a){return r.a.createElement(T,{userbaseObjects:t,userbaseData:e.state.userbaseObjects,scoreTypeReferenceRow:a,keyValue:a,key:a,handleUserNameChange:e.handleUserNameChange,handleCellValueChange:e.handleCellValueChange,removeUserObject:e.removeUserObject})})),r.a.createElement("button",{className:"addUserObjectIcon",onClick:this.addNewUserObject},r.a.createElement(p.a,{icon:j.d}))),r.a.createElement("div",{className:"sumRow grid"},r.a.createElement("div",{className:"cell"},r.a.createElement("p",null,"Total")),this.state.userbaseObjects.map((function(t,a){return r.a.createElement("div",{className:"cell",key:a},r.a.createElement("p",null,e.state.userbaseObjects[a].userScore.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)))}))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleTimer=function(){e.setState({running:!e.state.running})},e.resetTimer=function(){e.setState({time:0})},e.format=function(){var t=e.state.time%100,a=Math.floor(e.state.time/100)%60,n=Math.floor(e.state.time/6e3)%60,s=Math.floor(e.state.time/36e4)%60;return r.a.createElement(r.a.Fragment,null,s<10?"0"+s:s," : ",n<10?"0"+n:n," : ",a<10?"0"+a:a," : ",t<10?"0"+t:t)},e.step=function(){e.setState({time:e.state.time+1})},e.state={time:0,running:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.running?setTimeout(this.step,10):clearInterval(this.step),r.a.createElement("div",{className:"timerContainer"},r.a.createElement("h3",null,"Stop Watch"),r.a.createElement("p",{className:"timeDisplay"},this.format()),!1===this.state.running?r.a.createElement("button",{onClick:this.toggleTimer,onKeyPress:function(t){" "===t.key&&e.toggleTimer()}},"Start"):r.a.createElement("button",{onClick:this.toggleTimer,onKeyPress:function(t){" "===t.key&&e.toggleTimer()}},"Pause"),r.a.createElement("button",{onClick:this.resetTimer,disabled:this.state.running},"Reset"))}}]),t}(n.Component),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleTimer=function(){e.setState({running:!e.state.running})},e.resetTimer=function(){e.setState({time:0,setTimer:!0})},e.format=function(){var t=e.state.time%100,a=Math.floor(e.state.time/100)%60,n=Math.floor(e.state.time/6e3)%60,s=Math.floor(e.state.time/36e4)%60;return r.a.createElement(r.a.Fragment,null,s<10?"0"+s:s," : ",n<10?"0"+n:n," : ",a<10?"0"+a:a," : ",t<10?"0"+t:t)},e.step=function(){1===e.state.time&&(e.setState({running:!1,setTimer:!0}),N()),e.setState({time:e.state.time-1})},e.addTimerValue=function(t){var a=e.state.time+t;e.setState({time:a})},e.startTimer=function(){e.setState({setTimer:!1,running:!0})},e.state={time:0,running:!1,setTimer:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.running?setTimeout(this.step,10):clearInterval(this.step),r.a.createElement("div",{className:"timerContainer"},r.a.createElement("h3",null,"Timer"),!0===this.state.setTimer?r.a.createElement("div",null,r.a.createElement("p",{className:"timeDisplay"},this.format()),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.addTimerValue(1e3)}},"+ 10 Seconds"),r.a.createElement("button",{onClick:function(){return e.addTimerValue(3e3)}},"+ 30 Seconds"),r.a.createElement("button",{onClick:function(){return e.addTimerValue(6e3)}},"+ 1 Minute"),r.a.createElement("button",{onClick:function(){return e.addTimerValue(3e4)}},"+ 5 Minutes"),r.a.createElement("button",{onClick:function(){return e.addTimerValue(18e4)}},"+ 30 Minutes"),r.a.createElement("button",{onClick:function(){return e.addTimerValue(36e4)}},"+ 1 Hour")),r.a.createElement("button",{onClick:this.startTimer},"Start Countdown")):r.a.createElement("div",null,r.a.createElement("p",{className:"timeDisplay"},this.format()),!1===this.state.running?r.a.createElement("button",{onClick:this.toggleTimer},"Start"):r.a.createElement("button",{onClick:this.toggleTimer},"Pause"),r.a.createElement("button",{onClick:this.resetTimer,disabled:this.state.running},"Reset")))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"toolContainer"},r.a.createElement(v,null),r.a.createElement(S,null)),r.a.createElement("div",{className:"toolContainer halfContainer"},r.a.createElement(w,null)),r.a.createElement("div",{className:"toolContainer halfContainer"},r.a.createElement(V,null)))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,"Created by Steve Seki")}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(I,null),r.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0a3c0096.chunk.js.map