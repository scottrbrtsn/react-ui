(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),u=n.n(r),i=(n(15),n(5)),c=n(6),l=n(8),h=n(7),s=n(2),p=n(9),d=n(1),m=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).createTable=function(){for(var e=[],t=0;t<21;t++){for(var o=[],r=0;r<21;r++){var u=(r+t)%40,i=20-t+r,c=20-r+t;r<=10&&t<=10?o.push(a.a.createElement("td",{key:t+r},n.playNoteButton(400-u*u))):r>=10&&t<=10?o.push(a.a.createElement("td",{key:t+r},n.playNoteButton(400-c*c))):t>=10&&r<=10?o.push(a.a.createElement("td",{key:t+r},n.playNoteButton(400-i*i))):o.push(a.a.createElement("td",{key:t+r},n.playNoteButton(t*r)))}e.push(a.a.createElement("tr",{key:t},o))}return e},n.playNoteButton=function(e){return a.a.createElement("button",{className:"button",onMouseEnter:function(){return n.playNote(e)}})},n.createPitchUpButton=function(){return a.a.createElement("button",{onMouseEnter:n.handleUp},"up")},n.createPitchDownButton=function(){return a.a.createElement("button",{onMouseEnter:n.handleDown},"down")},n.handleUp=n.handleUp.bind(Object(s.a)(n)),n.handleDown=n.handleDown.bind(Object(s.a)(n)),n.playNote=n.playNote.bind(Object(s.a)(n)),n.noteOne=73.42,n.noteTwo=110,n.noteThree=146.83,n.revDamp=10,n.synth=(new d.PolySynth).toMaster(),n.rev=(new d.Freeverb).toMaster(),n.synth.connect(n.rev),n.rev.dampening.value=n.revDamp,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleUp",value:function(){this.updateSynth(10)}},{key:"handleDown",value:function(){this.updateSynth(-10)}},{key:"updateSynth",value:function(e){this.revDamp=this.revDamp+e/10,this.rev.dampening.value=this.revDamp,this.noteOne=this.noteOne+e,this.noteTwo=this.noteTwo+e,this.noteThree=this.noteThree+e}},{key:"playNote",value:function(e){0!==(e*=.5)?d.Tone.context.resume().then.this.synth.triggerAttackRelease([this.noteOne+e,this.noteTwo+e,this.noteThree+e],1):d.Tone.context.resume().then.this.synth.triggerAttackRelease([this.noteOne,this.noteTwo,this.noteThree],1)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("tbody",null,this.createTable())))}}]),t}(a.a.Component));u.a.render(a.a.createElement(m,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.d4586e4f.chunk.js.map