(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{108:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(75),o=a.n(l),s=(a(87),a(7)),i=a(8),c=a(10),h=a(9),m=a(11),p=a(44),u=a(21),d=a(24),b=a(34),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{textAlign:"right",color:this.props.theme.tc,border:this.props.theme.border,background:this.props.theme.mainBG,width:"100%",height:this.props.theme.fh+"px"}},r.a.createElement("span",null," \xa9 ",(new Date).getFullYear(),"  "),"Artem Ganebnykh \xa0",r.a.createElement("a",{href:"https://github.com/nogibator2000"},"  ",r.a.createElement(u.a,null)," ",r.a.createElement("span",null)," ")," \xa0",r.a.createElement("a",{href:"https://vk.com/nogibator228"},"  ",r.a.createElement(d.c,null)," ",r.a.createElement("span",null))," \xa0",r.a.createElement("a",{href:"mailto:nogibator2000@gmail.com"},"  ",r.a.createElement(b.a,null)," ",r.a.createElement("span",null)," "),r.a.createElement("span",null,"\xa0 \xa0 \xa0 \xa0 v0.0.1 \xa0"))}}]),t}(n.Component),f=a(76),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(p.a)({},this.props.comp),t=this.props.showMenu?this.props.theme.menuWidth:0;return e.props=Object(p.a)({},e.props,{wd:this.props.wd-t-1,ht:this.props.ht-this.props.theme.hh-this.props.theme.fh}),r.a.createElement(f.Scrollbars,{style:{width:this.props.wd,height:this.props.ht}},r.a.createElement("div",null,r.a.createElement("div",{class:"pageWrapper",style:{width:this.props.wd-t+"px",position:"relative",left:this.props.showMenu?this.props.theme.menuWidth+"px":"0px",top:this.props.theme.hh+"px",borderRight:this.props.theme.border,borderLeft:this.props.theme.border}},r.a.createElement("div",{class:"fullPage",style:{minHeight:this.props.ht-this.props.theme.hh-this.props.theme.fh}},e),r.a.createElement(E,{theme:this.props.theme}))))}}]),t}(n.Component),g=a(28),y=a.n(g),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(y.a,{src:"../file/pnf.jpg"}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).mouseEnter=function(){a.setState({tColor:a.props.theme.tc2,color:null==a.props.colorH?a.props.theme.altColor:a.props.colorH})},a.mouseLeave=function(){a.setState({tColor:a.props.theme.tc,color:null==a.props.color?a.props.theme.menuBGIA:a.props.color})},a.state={tColor:a.props.theme.tc,color:null==a.props.color?a.props.theme.menuBGIA:a.props.color},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.click,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"Button",style:{cursor:"pointer",borderRight:this.props.theme.border,background:this.state.color,display:"flex",flexDirection:"row",margin:"auto",alignItems:"center",width:this.props.width,height:this.props.height}},r.a.createElement("h4",{style:{width:"100%",textAlign:"center",color:this.state.tColor}},this.props.name))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{zIndex:"9990",position:"fixed",border:this.props.theme.border,display:"flex",background:this.props.theme.mainBG,height:this.props.theme.hh+"px"}},r.a.createElement(k,{theme:this.props.theme,width:this.props.theme.menuWidth+"px",height:this.props.theme.hh-2+"px",name:r.a.createElement("div",{style:{paddingTop:"15px"}},r.a.createElement(u.b,null),this.props.showMenu?r.a.createElement(u.c,null):r.a.createElement(u.d,null)),click:this.props.toggleMenu}),r.a.createElement("div",{style:{width:window.innerWidth-this.props.theme.menuWidth,textAlign:"center",color:this.props.theme.tc}},r.a.createElement("h4",null,"Welcome!")))}}]),t}(n.Component),O=(a(108),a(77)),C=a.n(O),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).PlayEvent=function(e,t){e.preventDefault(),a.state.animation||32!==e.keyCode&&"mouse"!==t||(a.setState({name:"shut face-bar",animation:!0}),setTimeout((function(){document.querySelector("#anekdot").innerHTML="",C()("#anekdot",'<script language="javascript" src="https://www.anekdot.ru/rss/randomu.html" charset="utf-8"><\/script>'),a.setState({name:"open face-bar"}),setTimeout((function(){a.setState({name:"face-bar",animation:!1})}),2500)}),2500))},a.state={name:"face-bar",animation:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.PlayEvent)}},{key:"render",value:function(){var e=this,t=this.props.wd/960,a=this.props.ht/540,n=Math.min(t,a),l="scale("+n+")",o=(this.props.wd-960*n)/2+"px",s=(this.props.ht-540*n)/2+"px";return r.a.createElement("div",{className:"canvas",onClick:function(t){return e.PlayEvent(t,"mouse")},style:{position:"absolute",left:o,top:s,width:"960px",height:"540px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4.6px",border:"3px solid tomato",transform:l,transformOrigin:"0 0",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement(W,{name:this.state.name}),r.a.createElement(W,{name:this.state.name}),r.a.createElement(W,{name:this.state.name}),r.a.createElement(W,{name:this.state.name}),r.a.createElement(W,{name:this.state.name}),r.a.createElement(W,{name:this.state.name}),r.a.createElement("div",{id:"anekdot",style:{fontSize:"35px"}},r.a.createElement("span",{style:{fontSize:"35px"},id:"joke"},"Press ",r.a.createElement("span",{id:"space"},"Space")," or ",r.a.createElement("span",{id:"space"},"\u0421lick")," for a joke.")))}}]),t}(r.a.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.name},r.a.createElement("div",{className:"face"}))}}]),t}(r.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page",ref:this.mainRef,style:{width:this.props.wd,height:this.props.ht}},r.a.createElement(x,{wd:this.props.wd,ht:this.props.ht,theme:this.props.theme}))}}]),t}(r.a.Component),B=(a(109),a(78)),S=a(29),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).toggleHow=function(){a.setState({showHow:!a.state.showHow})},a.toggleWiki=function(){a.setState({showWiki:!a.state.showWiki})},a.state={showHow:!1,showWiki:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page",style:{display:"flex",flexDirection:"column",alignItems:"center",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement("h2",null,"Screen detection chess bot"),r.a.createElement(B.Player,{playsInline:!0,fluid:!1,width:window.innerWidth/2,height:window.innerWidth/4,autoPlay:!0,poster:"../file/loading.mp4",muted:!0,src:"../file/loading.mp4"}),r.a.createElement("br",null),r.a.createElement("h5",{style:{marginRight:"150px",marginLeft:"150px",padding:"10px"}},"This chess bot can win every chess game and avoid ban because he do mistakes. Download it, open any chess site, show to it your board and press start button. It will work but only if you have windows. This bot was tested on those sites ",r.a.createElement("a",{href:"https:Lichess.org"},"Lichess.org")," and ",r.a.createElement("a",{href:"https:Chess.com"},"Chess.com")," WITH NO BAN."),r.a.createElement(S.b,{to:"../file/ChessBot.zip",target:"_blank",download:!0},r.a.createElement(k,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"Download .zip"})),r.a.createElement("br",null),r.a.createElement(k,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"How to run",click:this.toggleHow}),this.state.showHow&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h4",null," How to run")," ",r.a.createElement("br",null)," \xb7 Clone the ",r.a.createElement("a",{href:"https://github.com/nogibator2000/ChessBot"},"project")," or skip it and ",r.a.createElement(S.b,{to:"../file/ChessBot.zip",target:"_blank",download:!0}," download")," binaries",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("pre",null," git clone https://github.com/nogibator2000/ChessBot"),r.a.createElement("br",null),"\xb7 open it with Microsoft Visual Studio.",r.a.createElement("br",null),"\xb7 Compile it and run.",r.a.createElement("br",null),"\xb7 Open a chess website.",r.a.createElement("br",null),"\xb7 Click Colibrate button then click top left point of chess board, then click bottom right point of chess board.",r.a.createElement("br",null),"\xb7 Your bot is ready to run. Press F2 or start button to start."),r.a.createElement("br",null),r.a.createElement(k,{width:window.innerWidth/4,height:window.innerWidth/16,theme:this.props.theme,color:"#6060ff",colorH:"#2020cF",name:"Wiki",click:this.toggleWiki}),this.state.showWiki&&r.a.createElement("div",null,r.a.createElement("br",null)," ",r.a.createElement("h4",null,"Wiki"),r.a.createElement("br",null),"Open setting file. Inside bin derictory. If there is none run app, it will be autocreated.",r.a.createElement("br",null),r.a.createElement("pre",null,"BoardSize.Width",r.a.createElement("br",null),"BoardSize.Height",r.a.createElement("br",null),"BoardPosition.X",r.a.createElement("br",null),"BoardPosition.Y",r.a.createElement("br",null)),"Parameters automaticly setting up by calibrate button. ",r.a.createElement("br",null),r.a.createElement("pre",null,"Hash",r.a.createElement("br",null),"RefreshDelay",r.a.createElement("br",null),"AnimationDelay",r.a.createElement("br",null),"AnimationHash",r.a.createElement("br",null)),"Parameter of hash function lower it(or increase delay) to increase speed and increase miss turn chance",r.a.createElement("pre",null,"MaxEngineTime",r.a.createElement("br",null)),"Engine time per turn in ms.",r.a.createElement("pre",null,"MissplayEveryXTurns"),"You need those missplays to avoid ban, set 0 to fully play like chess Engine.",r.a.createElement("br",null),r.a.createElement("pre",null,"Window",r.a.createElement("br",null),"Treshold",r.a.createElement("br",null)),"Thouse parameters are avoid your calibration inaccuracy.",r.a.createElement("pre",null,"WhiteBrightTreshold",r.a.createElement("br",null),"BlackBrightTreshold",r.a.createElement("br",null)),"Parameters for classify backgroud black and white pieses.",r.a.createElement("pre",null,"TurnDelayMin",r.a.createElement("br",null),"TurnDelayMax",r.a.createElement("br",null),"TurnsForExtraDelay",r.a.createElement("br",null),"DelayPart",r.a.createElement("br",null),"MouseClickDelay",r.a.createElement("br",null)),"Customise your turn to make in more humanable.",r.a.createElement("pre",null,"StockfishPath"),"Insert here your stockFish or any other uci engine path.",r.a.createElement("pre",null,"LogEnable"),"Debug option, when enable logging data.            "),r.a.createElement("br",null))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).hide=function(){a.setState({show:!1})},a.state={show:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{textAlign:"center",color:this.props.theme.tc,background:this.props.theme.pc}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h2",null,"Contact Me")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/nogibator2000"},"  ",r.a.createElement(u.a,null)," ",r.a.createElement("span",null," Github: ")," "),r.a.createElement("span",null," nogibator2000 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://vk.com/nogibator228"},"  ",r.a.createElement(d.c,null)," ",r.a.createElement("span",null,"Vk.com: ")),r.a.createElement("span",null," nogibator228 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://www.facebook.com/temik214"},"  ",r.a.createElement(d.a,null)," ",r.a.createElement("span",null,"Facebook: ")),r.a.createElement("span",null," temik214 "))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"mailto:nogibator2000@gmail.com"},"  ",r.a.createElement(b.a,null)," ",r.a.createElement("span",null,"Gmail: ")," "),r.a.createElement("span",null,"nogibator2000@gmail.com"))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h4",null,r.a.createElement("a",{href:"https://t.me/@artem2228"},"  ",r.a.createElement(d.b,null)," ",r.a.createElement("span",null,"Telegram: ")," "),r.a.createElement("span",null,"@Artem2228"))),r.a.createElement("br",null),r.a.createElement(y.a,{src:"../file/swamp.jpg"}),r.a.createElement("br",null),this.state.show&&r.a.createElement("div",{onClick:this.hide,style:{position:"fixed",right:"50px",bottom:"0px"}},r.a.createElement(y.a,{src:"../file/shrek.gif"})),r.a.createElement("br",null))}}]),t}(n.Component),T=a(25),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).setColor=function(){return a.props.path.path===window.location.pathname?a.props.theme.menuBGIA:a.props.theme.menuBGI},a.mouseEnter=function(){a.setState({tColor:a.props.theme.tc2,color:a.props.theme.altColor})},a.mouseLeave=function(){a.setState({tColor:a.props.theme.tc,color:a.setColor()})},a.state={tColor:a.props.theme.tc,color:a.setColor()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menuItem",style:{cursor:"pointer",background:this.state.color}},r.a.createElement("a",{href:this.props.path.path},r.a.createElement("h6",{style:{color:this.state.tColor}},this.props.path.name)))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).renderItem=function(e,t){var a=e.path===window.location.pathname?t.menuBGIA:t.menuBGI;return r.a.createElement("div",{onmouseenter:"Enter()",className:"menuItem",style:{background:a,width:t.menuWidth+"px"}},r.a.createElement("a",{href:e.path},e.name))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu",style:{position:"fixed",top:this.props.theme.hh+"px",borderLeft:this.props.theme.border,borderBottom:this.props.theme.border,background:this.props.theme.menuBG,display:"block",width:this.props.theme.menuWidth+"px",height:window.innerHeight-this.props.theme.hh+"px"}},this.props.pathes.map((function(t){return r.a.createElement(D,{path:t,theme:e.props.theme})})))}}]),t}(n.Component),N={border:"1px solid #8a2be2",menuBG:"#ff7575",menuBGI:"#ff6060",menuBGIA:"#ff2020",pc:"#f0d0d0",altColor:"#b63903",tc:"darkblue",tc2:"yellow",menuWidth:"150",mainBG:"#ff9090",fh:"25",hh:"40"},z=[{path:"/",name:"Home",component:r.a.createElement(M,{theme:N})},{path:"/ChessBot/",name:"Chess bot",component:r.a.createElement(H,{theme:N})},{path:"/contact/",name:"Contact me",component:r.a.createElement(I,{theme:N})}],A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).setSize=function(){a.setState({wd:window.innerWidth,ht:window.innerHeight})},a.handleResize=function(e){a.setSize()},a.toggleMenu=function(){a.setState({showMenu:!a.state.showMenu})},a.state={showMenu:!0,wd:0,ht:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.setSize()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j,{theme:N,toggleMenu:this.toggleMenu,showMenu:this.state.showMenu}),r.a.createElement(S.a,{basename:""},r.a.createElement(T.c,null,z.map((function(t){return r.a.createElement(T.a,{exact:!0,path:t.path},r.a.createElement(w,{wd:e.state.wd-1,ht:e.state.ht-1,theme:N,comp:t.component,showMenu:e.state.showMenu}))})),r.a.createElement(T.a,null,r.a.createElement(w,{wd:this.state.wd-1,ht:this.state.ht-1,theme:N,comp:r.a.createElement(v,null),showMenu:this.state.showMenu})))),r.a.createElement("div",{className:"menu",style:{display:"flex"}},this.state.showMenu&&r.a.createElement(G,{pathes:z,theme:N})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(130);o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(131)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.c5e43c89.chunk.js.map