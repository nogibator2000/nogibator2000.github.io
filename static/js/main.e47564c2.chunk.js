(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{106:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(75),o=n.n(l),s=(n(87),n(12)),i=n(13),c=n(15),h=n(14),m=n(16),p=n(44),u=n(21),d=n(24),b=n(33),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{textAlign:"right",color:this.props.theme.tc,border:this.props.theme.border,background:this.props.theme.mainBG,width:"100%",height:this.props.theme.fh+"px"}},r.a.createElement("span",null," \xa9 ",(new Date).getFullYear(),"  "),"Artem Ganebnykh \xa0",r.a.createElement("a",{href:"https://github.com/nogibator2000"},"  ",r.a.createElement(u.a,null)," ",r.a.createElement("span",null)," ")," \xa0",r.a.createElement("a",{href:"https://vk.com/nogibator228"},"  ",r.a.createElement(d.c,null)," ",r.a.createElement("span",null))," \xa0",r.a.createElement("a",{href:"mailto:nogibator2000@gmail.com"},"  ",r.a.createElement(b.a,null)," ",r.a.createElement("span",null)," "),r.a.createElement("span",null,"\xa0 \xa0 \xa0 \xa0 \xa0"))}}]),t}(a.Component),f=n(76),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(p.a)({},this.props.comp),t=this.props.showMenu?this.props.theme.menuWidth:0;return e.props=Object(p.a)({},e.props,{wd:this.props.wd-t-1,ht:this.props.ht-this.props.theme.hh-this.props.theme.fh}),r.a.createElement(f.Scrollbars,{style:{width:this.props.wd,height:this.props.ht}},r.a.createElement("div",null,r.a.createElement("div",{class:"pageWrapper",style:{width:this.props.wd-t+"px",position:"relative",left:this.props.showMenu?this.props.theme.menuWidth+"px":"0px",top:this.props.theme.hh+"px",borderRight:this.props.theme.border,borderLeft:this.props.theme.border}},r.a.createElement("div",{class:"fullPage",style:{minHeight:this.props.ht-this.props.theme.hh-this.props.theme.fh}},e),r.a.createElement(E,{theme:this.props.theme}))))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).mouseEnter=function(){n.setState({tColor:n.props.theme.tc2,color:null==n.props.colorH?n.props.theme.altColor:n.props.colorH})},n.mouseLeave=function(){n.setState({tColor:n.props.theme.tc,color:null==n.props.color?n.props.theme.menuBGIA:n.props.color})},n.state={tColor:n.props.theme.tc,color:null==n.props.color?n.props.theme.menuBGIA:n.props.color},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.click,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"Button",style:{cursor:"pointer",borderRight:this.props.theme.border,background:this.state.color,display:"flex",flexDirection:"row",margin:"auto",alignItems:"center",width:this.props.width,height:this.props.height}},r.a.createElement("h4",{style:{width:"100%",textAlign:"center",color:this.state.tColor}},this.props.name))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{zIndex:"9990",position:"fixed",border:this.props.theme.border,display:"flex",background:this.props.theme.mainBG,height:this.props.theme.hh+"px"}},r.a.createElement(g,{theme:this.props.theme,width:this.props.theme.menuWidth+"px",height:this.props.theme.hh-2+"px",name:r.a.createElement("div",{style:{paddingTop:"15px"}},r.a.createElement(u.b,null),this.props.showMenu?r.a.createElement(u.c,null):r.a.createElement(u.d,null)),click:this.props.toggleMenu}),r.a.createElement("div",{style:{width:window.innerWidth-this.props.theme.menuWidth,textAlign:"center",color:this.props.theme.tc}},r.a.createElement("h4",null,"Welcome!")))}}]),t}(a.Component),k=(n(106),n(77)),v=n.n(k),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).PlayEvent=function(e,t){e.preventDefault(),n.state.animation||32!==e.keyCode&&"mouse"!==t||(n.setState({name:"shut face-bar",animation:!0}),setTimeout((function(){document.querySelector("#anekdot").innerHTML="",v()("#anekdot",'<script language="javascript" src="https://www.anekdot.ru/rss/randomu.html" charset="utf-8"><\/script>'),n.setState({name:"open face-bar"}),setTimeout((function(){n.setState({name:"face-bar",animation:!1})}),2500)}),2500))},n.state={name:"face-bar",animation:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.PlayEvent)}},{key:"render",value:function(){var e=this,t=this.props.wd/960,n=this.props.ht/540,a=Math.min(t,n),l="scale("+a+")",o=(this.props.wd-960*a)/2+"px",s=(this.props.ht-540*a)/2+"px";return r.a.createElement("div",{className:"canvas",onClick:function(t){return e.PlayEvent(t,"mouse")},style:{position:"absolute",left:o,top:s,width:"960px",height:"540px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4.6px",border:"3px solid tomato",transform:l,transformOrigin:"0 0",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement(O,{name:this.state.name}),r.a.createElement(O,{name:this.state.name}),r.a.createElement(O,{name:this.state.name}),r.a.createElement(O,{name:this.state.name}),r.a.createElement(O,{name:this.state.name}),r.a.createElement(O,{name:this.state.name}),r.a.createElement("div",{id:"anekdot",style:{fontSize:"35px"}},r.a.createElement("span",{style:{fontSize:"35px"},id:"joke"},"Press ",r.a.createElement("span",{id:"space"},"Space")," or ",r.a.createElement("span",{id:"space"},"\u0421lick")," for a joke.")))}}]),t}(r.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.name},r.a.createElement("div",{className:"face"}))}}]),t}(r.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page",ref:this.mainRef,style:{width:this.props.wd,height:this.props.ht}},r.a.createElement(j,{wd:this.props.wd,ht:this.props.ht,theme:this.props.theme}))}}]),t}(r.a.Component),C=(n(107),n(78)),W=n(28),B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).toggleHow=function(){n.setState({showHow:!n.state.showHow})},n.toggleWiki=function(){n.setState({showWiki:!n.state.showWiki})},n.state={showHow:!1,showWiki:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page",style:{display:"flex",flexDirection:"column",alignItems:"center",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement("h2",null,"Screen detection chess bot"),r.a.createElement(C.Player,{playsInline:!0,fluid:!1,width:window.innerWidth/2,height:window.innerWidth/4,autoPlay:!0,poster:"file/loading.mp4",muted:!0,src:"file/loading.mp4"}),r.a.createElement("br",null),r.a.createElement("h5",{style:{marginRight:"150px",marginLeft:"150px",padding:"10px"}},"This chess bot can win every chess game and avoid ban because he do mistakes. Download it, open any chess site, show to it your board and press start button. It will work but only if you have windows. This bot was tested on those sites ",r.a.createElement("a",{href:"https:Lichess.org"},"Lichess.org")," and ",r.a.createElement("a",{href:"https:Chess.com"},"Chess.com")," WITH NO BAN."),r.a.createElement(W.b,{to:"file/ChessBot.zip",target:"_blank",download:!0},r.a.createElement(g,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"Download .zip"})),r.a.createElement("br",null),r.a.createElement(g,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"How to run",click:this.toggleHow}),this.state.showHow&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h4",null," How to run")," ",r.a.createElement("br",null)," \xb7 Clone the ",r.a.createElement("a",{href:"https://github.com/nogibator2000/ChessBot"},"project")," or skip it and ",r.a.createElement(W.b,{to:"file/ChessBot.zip",target:"_blank",download:!0}," download")," binaries",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("pre",null," git clone https://github.com/nogibator2000/ChessBot"),r.a.createElement("br",null),"\xb7 open it with Microsoft Visual Studio.",r.a.createElement("br",null),"\xb7 Compile it and run.",r.a.createElement("br",null),"\xb7 Open a chess website.",r.a.createElement("br",null),"\xb7 Click Colibrate button then click top left point of chess board, then click bottom right point of chess board.",r.a.createElement("br",null),"\xb7 Your bot is ready to run. Press F2 or start button to start."),r.a.createElement("br",null),r.a.createElement(g,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"Wiki",click:this.toggleWiki}),this.state.showWiki&&r.a.createElement("div",null,r.a.createElement("br",null)," ",r.a.createElement("h4",null,"Wiki"),r.a.createElement("br",null),"Open setting file. Inside bin derictory. If there is none run app, it will be autocreated.",r.a.createElement("br",null),r.a.createElement("pre",null,"BoardSize.Width",r.a.createElement("br",null),"BoardSize.Height",r.a.createElement("br",null),"BoardPosition.X",r.a.createElement("br",null),"BoardPosition.Y",r.a.createElement("br",null)),"Parameters automaticly setting up by calibrate button. ",r.a.createElement("br",null),r.a.createElement("pre",null,"Hash",r.a.createElement("br",null),"RefreshDelay",r.a.createElement("br",null),"AnimationDelay",r.a.createElement("br",null),"AnimationHash",r.a.createElement("br",null)),"Parameter of hash function lower it(or increase delay) to increase speed and increase miss turn chance",r.a.createElement("pre",null,"MaxEngineTime",r.a.createElement("br",null)),"Engine time per turn in ms.",r.a.createElement("pre",null,"MissplayEveryXTurns"),"You need those missplays to avoid ban, set 0 to fully play like chess Engine.",r.a.createElement("br",null),r.a.createElement("pre",null,"Window",r.a.createElement("br",null),"Treshold",r.a.createElement("br",null)),"Thouse parameters are avoid your calibration inaccuracy.",r.a.createElement("pre",null,"WhiteBrightTreshold",r.a.createElement("br",null),"BlackBrightTreshold",r.a.createElement("br",null)),"Parameters for classify backgroud black and white pieses.",r.a.createElement("pre",null,"TurnDelayMin",r.a.createElement("br",null),"TurnDelayMax",r.a.createElement("br",null),"TurnsForExtraDelay",r.a.createElement("br",null),"DelayPart",r.a.createElement("br",null),"MouseClickDelay",r.a.createElement("br",null)),"Customise your turn to make in more humanable.",r.a.createElement("pre",null,"StockfishPath"),"Insert here your stockFish or any other uci engine path.",r.a.createElement("pre",null,"LogEnable"),"Debug option, when enable logging data.            "),r.a.createElement("br",null))}}]),t}(a.Component),M=n(43),S=n.n(M),H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).hide=function(){n.setState({show:!1})},n.state={show:!0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{textAlign:"center",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h2",null,"Contact Me")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/nogibator2000"},"  ",r.a.createElement(u.a,null)," ",r.a.createElement("span",null," Github: ")," "),r.a.createElement("span",null," nogibator2000 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://vk.com/nogibator228"},"  ",r.a.createElement(d.c,null)," ",r.a.createElement("span",null,"Vk.com: ")),r.a.createElement("span",null," nogibator228 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://www.facebook.com/temik214"},"  ",r.a.createElement(d.a,null)," ",r.a.createElement("span",null,"Facebook: ")),r.a.createElement("span",null," temik214 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"mailto:nogibator2000@gmail.com"},"  ",r.a.createElement(b.a,null)," ",r.a.createElement("span",null,"Gmail: ")," "),r.a.createElement("span",null,"nogibator2000@gmail.com"))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://t.me/@artem2228"},"  ",r.a.createElement(d.b,null)," ",r.a.createElement("span",null,"Telegram: ")," "),r.a.createElement("span",null,"@Artem2228"))),r.a.createElement("br",null),r.a.createElement(S.a,{src:"file/swamp.jpg"}),r.a.createElement("br",null),this.state.show&&r.a.createElement("div",{onClick:this.hide,style:{position:"fixed",right:"50px",bottom:"0px"}},r.a.createElement(S.a,{src:"file/shrek.gif"})),r.a.createElement("br",null))}}]),t}(a.Component),I=n(25),T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).setColor=function(){return n.props.path.path===window.location.pathname?n.props.theme.menuBGIA:n.props.theme.menuBGI},n.mouseEnter=function(){n.setState({tColor:n.props.theme.tc2,color:n.props.theme.altColor})},n.mouseLeave=function(){n.setState({tColor:n.props.theme.tc,color:n.setColor()})},n.state={tColor:n.props.theme.tc,color:n.setColor()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menuItem",style:{cursor:"pointer",background:this.state.color}},r.a.createElement("a",{href:this.props.path.path},r.a.createElement("h6",{style:{color:this.state.tColor}},this.props.path.name)))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).renderItem=function(e,t){var n=e.path===window.location.pathname?t.menuBGIA:t.menuBGI;return r.a.createElement("div",{onmouseenter:"Enter()",className:"menuItem",style:{background:n,width:t.menuWidth+"px"}},r.a.createElement("a",{href:e.path},e.name))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu",style:{position:"fixed",top:this.props.theme.hh+"px",borderLeft:this.props.theme.border,borderBottom:this.props.theme.border,background:this.props.theme.menuBG,display:"block",width:this.props.theme.menuWidth+"px",height:window.innerHeight-this.props.theme.hh+"px"}},this.props.pathes.map((function(t){return r.a.createElement(T,{path:t,theme:e.props.theme})})))}}]),t}(a.Component),G={border:"1px solid #8a2be2",menuBG:"#ff7575",menuBGI:"#ff6060",menuBGIA:"#ff2020",pc:"#f0d0d0",altColor:"#b63903",tc:"darkblue",tc2:"yellow",menuWidth:"150",mainBG:"#ff9090",fh:"25",hh:"40"},z=[{path:"/",name:"Home",component:r.a.createElement(x,{theme:G})},{path:"/ChessBot",name:"Chess bot",component:r.a.createElement(B,{theme:G})},{path:"/contact",name:"Contact me",component:r.a.createElement(H,{theme:G})}],A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).setSize=function(){n.setState({wd:window.innerWidth,ht:window.innerHeight})},n.handleResize=function(e){n.setSize()},n.toggleMenu=function(){n.setState({showMenu:!n.state.showMenu})},n.state={showMenu:!0,wd:0,ht:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.setSize()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,{theme:G,toggleMenu:this.toggleMenu,showMenu:this.state.showMenu}),r.a.createElement(W.a,null,r.a.createElement(I.c,null,z.map((function(t){return r.a.createElement(I.a,{exact:!0,path:t.path},r.a.createElement(w,{wd:e.state.wd-1,ht:e.state.ht-1,theme:G,comp:t.component,showMenu:e.state.showMenu}))})))),r.a.createElement("div",{className:"menu",style:{display:"flex"}},this.state.showMenu&&r.a.createElement(D,{pathes:z,theme:G})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(130);o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,n){e.exports=n(131)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.e47564c2.chunk.js.map