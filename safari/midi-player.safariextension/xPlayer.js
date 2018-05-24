function _Player(){if(JZZ.gui||(JZZ.gui={}),!JZZ.gui.Player){r.prototype.on=function(){this.div.style.backgroundColor="#ddd",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},r.prototype.off=function(){this.div.style.backgroundColor="#aaa",this.div.style.borderColor="#ccc",this.div.firstChild.style.fill="#000"},r.prototype.disable=function(){this.div.style.backgroundColor="#888",this.div.style.borderColor="#aaa",this.div.firstChild.style.fill="#555"};var o='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',n='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',l='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',a='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>',p='<svg fill="#555" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>',h=0;d.prototype.disable=function(){this.playBtn.disable(),this.pauseBtn.disable(),this.stopBtn.disable(),this.loopBtn.disable(),this.moreBtn.disable(),this.rail.style.borderColor="#aaa",this.rail.style.backgroundColor="#888",this.caret.style.borderColor="#aaa",this.caret.style.backgroundColor="#888"},d.prototype.enable=function(){this.playBtn.off(),this.pauseBtn.off(),this.stopBtn.off(),this.loopBtn.off(),this.moreBtn.off(),this.rail.style.borderColor="#ccc",this.caret.style.backgroundColor="#aaa",this.caret.style.borderColor="#ccc"},d.prototype.load=function(t){var i=this;this._player=t.player(),this._out&&this._player.connect(this._out),this._player.onEnd=function(){i._onEnd()},this.enable()},d.prototype._onEnd=function(){this._loop&&-1!=this._loop&&this._loop--,this._loop?1==this._loop?(this._loop=0,this.loopBtn.off(),this.loopBtn.div.title="loop"):this.loopBtn.div.title="loop: "+(-1==this._loop?"∞":this._loop):(this._moving&&clearInterval(this._moving),this._move(),this._playing=!1,this.playBtn.off())},d.prototype._move=function(){var t=Math.round(100*this._player.position()/this._player.duration())-5;this.caret.style.left=t+"px"},d.prototype.play=function(){if(this._player){var t=this;if(this.playBtn.on(),this.pauseBtn.off(),this._out){if(this._playing)return;this._waiting=!1,this._player.connect(this._out),this._paused?this._player.resume():this._player.play(),this._moving=setInterval(function(){t._move()},100),this._playing=!0,this._paused=!1}else this._waiting||(this._waiting=!0,JZZ().openMidiOut().and(function(){t._out=this,t._outname=this.name(),t.play()}))}},d.prototype.stop=function(){this._player&&(this._player.stop(),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!1,this.playBtn.off(),this.pauseBtn.off(),this._move())},d.prototype.pause=function(){if(this._player){var t=this;this._paused?this._out?(this._player.resume(),this._moving=setInterval(function(){t._move()},100),this._playing=!0,this._paused=!1,this.playBtn.on(),this.pauseBtn.off()):this.play():this._playing&&(this._player.pause(),this._moving&&clearInterval(this._moving),this._playing=!1,this._paused=!0,this.playBtn.off(),this.pauseBtn.on())}},d.prototype.loop=function(t){this._player&&(void 0===t&&(t=!this._loop),t==parseInt(t)&&0<t?this._loop=t:this._loop=t?-1:0,1==this._loop&&(this._loop=0),this._player.loop(this._loop),this._loop?(this.loopBtn.on(),this.loopBtn.div.title="loop: "+(-1==this._loop?"∞":this._loop)):(this.loopBtn.off(),this.loopBtn.div.title="loop"))},d.prototype._closeselect=function(){this.moreBtn.off(),this.select.style.display="none",this._more=!1},d.prototype.settings=function(){if(this._player&&!this._more&&!this._connector){var e=this;this._more=!0,this.moreBtn.on(),this.select.style.display="inline-block",JZZ().refresh().and(function(){var t,i=this.info().outputs;for(t=0;t<e.select.options.length;t++)e.select.remove(t);for(t=0;t<i.length;t++)e.select[t]=new Option(i[t].name,i[t].name,i[t].name==e._outname,i[t].name==e._outname);e.select.size=i.length<2?2:i.length,e.select.focus()})}},d.prototype._selectMidi=function(){var t=this;JZZ().openMidiOut(this._newname).or(function(){t._newname=void 0,t._closeselect()}).and(function(){t._connector||(t._outname=t._newname,t._player&&(t._player.sndOff(),t._player.disconnect(t._out)),t._out=this,t._player&&t._player.connect(t._out),t._newname=void 0,t._closeselect())})},d.prototype._selected=function(){var t=this;this._newname=this.select.options[this.select.selectedIndex].value,this._newname==this._outname?(this._newname=void 0,t._closeselect()):setTimeout(function(){t._selectMidi()},0)},d.prototype._keydown=function(t){13!=t.keyCode&&32!=t.keyCode||this._selected()},d.prototype.duration=function(){return this._player?this._player.duration():0},d.prototype.position=function(){return this._player?this._player.position():0},d.prototype.jump=function(t){this._player&&(this._player.jump(t),this._move(),this._playing||(t?(this._paused=!0,this.playBtn.off(),this.pauseBtn.on()):(this._paused=!1,this.playBtn.off(),this.pauseBtn.off())))},d.prototype._mousedown=function(t){i(t)&&this._player&&(this.caret.style.backgroundColor="#ddd",this._wasPlaying=this._playing,this._player.pause(),this._caretX=t.clientX,this._caretPos=parseInt(this.caret.style.left)+5)},d.prototype._startmove=function(t){i(t)&&(this._startX=parseInt(this.gui.style.left),this._startY=parseInt(this.gui.style.top),this._clickX=t.clientX,this._clickY=t.clientY)},d.prototype._mouseup=function(t){this._player&&void 0!==this._caretX&&(this._wasPlaying&&(this._wasPlaying=void 0,this._player.resume()),this.caret.style.backgroundColor="#aaa",this._caretX=void 0),void 0!==this._startX&&(this._startX=void 0,this._startY=void 0,this._clickX=void 0,this._clickY=void 0)},d.prototype._mousemove=function(t){if(t.preventDefault(),this._player&&void 0!==this._caretX){var i=this._caretPos+t.clientX-this._caretX;i<0&&(i=0),100<i&&(i=100),this.jump(this.duration()*i/100)}else void 0!==this._startX&&(this.gui.style.left=this._startX-this._clickX+t.clientX+"px",this.gui.style.top=this._startY-this._clickY+t.clientY+"px")},d.prototype.connect=function(t){this._connector||(this._connector=new JZZ.Widget,this._player&&(this._playing&&this._player.sndOff(),this._player.disconnect(),this._player.connect(this._connector)),this.moreBtn.disable(),this._out=this._connector),this._connector.connect(t)},d.prototype.disconnect=function(t){this._connector&&(this._player&&this._playing&&this._player.sndOff(),this._connector.disconnect(t),this._connector.connected()||(this.moreBtn.off(),this.select.style.display="none",this._out=JZZ().openMidiOut(),this._player&&this._player.connect(this._out),this._connector=void 0))},JZZ.gui.Player=d}function r(t){this.div=document.createElement("div"),this.div.style.display="inline-block",this.div.style.position="absolute",this.div.style.top="8px",this.div.style.margin="0",this.div.style.padding="2px",this.div.style.borderStyle="solid",this.div.style.borderWidth="1px",this.div.style.borderColor="#aaa",this.div.style.backgroundColor="#888",this.div.style.width="18px",this.div.style.height="18px",this.div.innerHTML=t}function d(t,i){if(!(this instanceof d))return new d(t,i);var e;if((e=this).gui=document.createElement("div"),e.gui.style.display="inline-block",e.gui.style.position="relative",e.gui.style.margin="0px",e.gui.style.padding="0px",e.gui.style.borderStyle="none",e.gui.style.backgroundColor="#888",e.gui.style.width="270px",e.gui.style.height="40px",e.playBtn=new r(o),e.playBtn.div.style.left="8px",e.playBtn.div.title="play",e.playBtn.div.addEventListener("click",function(){e.play()}),e.gui.appendChild(e.playBtn.div),e.pauseBtn=new r(n),e.pauseBtn.div.style.left="36px",e.pauseBtn.div.title="pause",e.pauseBtn.div.addEventListener("click",function(){e.pause()}),e.gui.appendChild(e.pauseBtn.div),e.stopBtn=new r(l),e.stopBtn.div.style.left="64px",e.stopBtn.div.title="stop",e.stopBtn.div.addEventListener("click",function(){e.stop()}),e.gui.appendChild(e.stopBtn.div),e.loopBtn=new r(a),e.loopBtn.div.style.left="92px",e.loopBtn.div.title="loop",e.loopBtn.div.addEventListener("click",function(){e.loop()}),e.gui.appendChild(e.loopBtn.div),e.moreBtn=new r(p),e.moreBtn.div.style.left="238px",e.moreBtn.div.title="midi",e.moreBtn.div.addEventListener("click",function(){e.settings()}),e.gui.appendChild(e.moreBtn.div),e.select=document.createElement("select"),e.select.style.position="absolute",e.select.style.top="30px",e.select.style.left="40px",e.select.style.width="230px",e.select.style.display="none",e.select.style.zIndex=1,e.select.addEventListener("click",function(){e._selected()}),e.select.addEventListener("keydown",function(t){e._keydown(t)}),e.select.addEventListener("focusout",function(){e._closeselect()}),e.gui.appendChild(e.select),e.rail=document.createElement("div"),e.rail.style.display="inline-block",e.rail.style.position="absolute",e.rail.style.top="19px",e.rail.style.left="125px",e.rail.style.width="100px",e.rail.style.height="0",e.rail.style.padding="1px",e.rail.style.borderStyle="solid",e.rail.style.borderWidth="1px",e.rail.style.borderRadius="2px",e.rail.style.borderColor="#aaa",e.rail.style.backgroundColor="#888",e.gui.appendChild(e.rail),e.caret=document.createElement("div"),e.caret.style.display="inline-block",e.caret.style.position="absolute",e.caret.style.width="2px",e.caret.style.height="2px",e.caret.style.top="-5px",e.caret.style.left="-5px",e.caret.style.padding="4px",e.caret.style.borderStyle="solid",e.caret.style.borderWidth="1px",e.caret.style.borderRadius="6px",e.caret.style.borderColor="#aaa",e.caret.style.backgroundColor="#888",e.caret.addEventListener("mousedown",function(t){e._mousedown(t)}),e.rail.appendChild(e.caret),window.addEventListener("mousemove",function(t){e._mousemove(t)}),window.addEventListener("mouseup",function(t){e._mouseup(t)}),"string"==typeof t)try{return document.getElementById(t).appendChild(this.gui),this}catch(t){}try{return t.appendChild(this.gui),this}catch(t){}t==parseInt(t)&&i==parseInt(i)||(t=45*h+5,i=15*h+5,h++),this.gui.style.position="fixed",this.gui.style.top=t+"px",this.gui.style.left=i+"px",this.gui.style.opacity=.9;var s=this;this.gui.addEventListener("mousedown",function(t){s._startmove(t)}),document.body.appendChild(this.gui)}function i(t){return void 0===t.buttons?!t.button:1&t.buttons}}