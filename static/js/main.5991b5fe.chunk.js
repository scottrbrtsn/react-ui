(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),u=(n(15),n(5)),c=n(6),l=n(8),h=n(7),s=n(1),p=n(9),d=n(3),y=(n(16),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).createTable=function(){for(var e=[],t=0;t<21;t++){for(var a=[],r=0;r<21;r++){var i=(r+t)%40,u=20-t+r,c=20-r+t;r<=10&&t<=10?a.push(o.a.createElement("td",{key:t+r},n.playNoteButton(400-i*i))):r>=10&&t<=10?a.push(o.a.createElement("td",{key:t+r},n.playNoteButton(400-c*c))):t>=10&&r<=10?a.push(o.a.createElement("td",{key:t+r},n.playNoteButton(400-u*u))):a.push(o.a.createElement("td",{key:t+r},n.playNoteButton(t*r)))}e.push(o.a.createElement("tr",{key:t},a))}return e},n.playNoteButton=function(e){return o.a.createElement("button",{className:"button",onMouseEnter:function(){return n.playNote(e)}})},n.createPitchUpButton=function(){return o.a.createElement("button",{onMouseEnter:n.handleUp},"up")},n.createPitchDownButton=function(){return o.a.createElement("button",{onMouseEnter:n.handleDown},"down")},n.handleUp=n.handleUp.bind(Object(s.a)(n)),n.handleDown=n.handleDown.bind(Object(s.a)(n)),n.playNote=n.playNote.bind(Object(s.a)(n)),n.noteOne=73.42,n.noteTwo=110,n.noteThree=146.83,n.revDamp=10,n.synth=(new d.PolySynth).toMaster(),n.rev=(new d.Freeverb).toMaster(),n.synth.connect(n.rev),n.rev.dampening.value=n.revDamp,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleUp",value:function(){this.updateSynth(10)}},{key:"handleDown",value:function(){this.updateSynth(-10)}},{key:"updateSynth",value:function(e){this.revDamp=this.revDamp+e/10,this.rev.dampening.value=this.revDamp,this.noteOne=this.noteOne+e,this.noteTwo=this.noteTwo+e,this.noteThree=this.noteThree+e}},{key:"playNote",value:function(e){0!==(e*=.5)?this.synth.triggerAttackRelease([this.noteOne+e,this.noteTwo+e,this.noteThree+e],1):this.synth.triggerAttackRelease([this.noteOne,this.noteTwo,this.noteThree],1)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tbody",null,this.createTable())))}}]),t}(o.a.Component));i.a.render(o.a.createElement(y,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.5991b5fe.chunk.js.map