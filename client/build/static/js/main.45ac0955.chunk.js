(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(69),i=n.n(o),s=(n(79),n(14)),a=n(12),r=(n(80),n(2)),l=n(70),u=n.n(l),j="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("ea28d4ba34f34b44b59c640052c6e098","&redirect_uri=").concat("https://spotifiq.herokuapp.com/","&scope=").concat(["streaming","playlist-modify-public","ugc-image-upload","user-read-email","user-read-private","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),d=n(27),b=n(40),h=(n(109),n(15)),f=n.n(h),p=n(0);function O(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)([]),r=Object(a.a)(s,2),l=r[0],u=r[1],j=Object(c.useState)([]),d=Object(a.a)(j,2),h=d[0],O=d[1],v=Object(c.useState)([]),k=Object(a.a)(v,2),g=k[0],m=k[1],y=Object(c.useState)(""),C=Object(a.a)(y,2),w=C[0],A=C[1],I=e.token,P=Object(c.useState)(""),T=Object(a.a)(P,2),N=T[0],S=T[1];console.log("API",e.spotifyAPI),Object(c.useEffect)((function(){e.socket.on("track added",(function(e){O((function(t){return[].concat(Object(b.a)(t),[e.track])}))})),e.match.params.inviteCode&&f.a.get("/api/auth/".concat(e.match.params.inviteCode)).then((function(t){console.log("This is the selectedDevice",t.data.selectedDevice),console.log("This is the token",t.data.token),A(t.data.selectedDevice),e.spotifyAPI.setAccessToken(t.data.token)})).catch((function(e){S(e)}))}),[]);var Q=Object(c.useState)(""),_=Object(a.a)(Q,2),q=_[0],D=_[1],E="https://spotifiq.herokuapp.com/".concat(q);return N?Object(p.jsxs)("div",{className:"svenContainer",children:[Object(p.jsx)("img",{style:{height:"400px"},src:"https://www.fazemag.de/wp-content/uploads/2016/02/sven_marquardt_c_mitteldeutscher_verlag__1000.jpg",alt:"Sven Marquardt"}),Object(p.jsx)("br",{}),Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Heute leider nicht"})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"containerQ",children:[Object(p.jsx)("div",{className:"device",children:Object(p.jsxs)("div",{className:"deviceContainer",children:[Object(p.jsx)("button",{onClick:function(){e.spotifyAPI.getMyDevices().then((function(e){m(e.body.devices)}))},children:Object(p.jsx)("i",{class:"far fa-hand-pointer",children:" Select a device"})}),g.length>0&&Object(p.jsxs)("select",{name:"device",id:"",onChange:function(e){A(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Choose a device"}),g.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})]})}),Object(p.jsxs)("div",{className:"searchContainer",children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{value:o,onChange:function(e){return i(e.target.value)},placeholder:"Search for a Track",name:"search"}),Object(p.jsx)("button",{onClick:function(){e.spotifyAPI.searchTracks(o).then((function(e){console.log("TRACKS:",e.body.tracks.items),u(e.body.tracks.items)}),(function(e){console.error(e)}))},children:Object(p.jsx)("i",{class:"fa fa-search"})})]}),Object(p.jsx)("div",{className:"searchResults",children:l.map((function(t){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:t.name}),Object(p.jsxs)("p",{children:["\ud83c\udfa4",t.artists[0].name]}),Object(p.jsx)("button",{className:"buttonQ",onClick:function(){return function(t){h.find((function(e){return e.id===t.id}))||(O([].concat(Object(b.a)(h),[t])),e.socket.emit("new track",{track:t}),e.spotifyAPI.addToQueue(t.uri).then((function(e){console.log(e)})))}(t)},children:"+"})]})},t.id)}))})]}),Object(p.jsxs)("div",{className:"Queue",children:[Object(p.jsxs)("div",{className:"inviteContainer",children:[Object(p.jsx)("button",{onClick:function(e){var t={selectedDevice:w,token:I,inviteCode:q};f.a.post("/api/queue",t).then((function(e){D(e.data.inviteCode)})).catch((function(e){return console.log(e)}))},children:"Invite friends to join your Q"}),q&&Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",value:E,id:"createdQ",style:{width:"160px"}}),Object(p.jsx)("button",{className:"buttonQ",onClick:function(){navigator.clipboard.writeText(E)},children:"Copy to Clipboard"})]})]}),Object(p.jsx)("h2",{children:"Queue"}),h.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:e.name})})}))]})]}),Object(p.jsxs)("div",{style:x,children:[Object(p.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.skipToPrevious().then((function(e){console.log("skip to previous track",e)}),(function(e){console.log(e)}))},children:Object(p.jsx)("i",{className:"fa fa-backward fa-lg"})}),Object(p.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.transferMyPlayback([w],{play:!0}).then((function(){console.log("Transfering playback to "+w)}),(function(e){console.log("Something went wrong!",e)}))},children:Object(p.jsx)("i",{className:"fa fa-play fa-lg"})}),Object(p.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.transferMyPlayback([w],{play:!1}).then((function(){console.log("Transfering playback to "+w)}),(function(e){console.log("Something went wrong!",e)}))},children:Object(p.jsx)("i",{className:"fa fa-pause fa-lg"})}),Object(p.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.skipToNext().then((function(e){console.log("skip to next track",e)}),(function(e){console.log(e)}))},children:Object(p.jsx)("i",{className:"fa fa-forward fa-lg"})})]})]})}var x={position:"fixed",bottom:"0",left:"0",height:"15px",background:"black",color:"white",width:"100% ",paddingBottom:"90px",textAlign:"center"};function v(e){return Object(p.jsx)("div",{children:Object(p.jsx)(O,Object(s.a)(Object(d.a)({spotifyAPI:e.spotifyAPI,socket:e.socket,token:e.token,setToken:e.setToken},"spotifyAPI",e.spotifyAPI),e))})}var k=n(74),g=["component","user","path","token","redirectPath"],m=function(e){var t=e.component,n=(e.user,e.path),c=e.token,o=e.redirectPath,i=void 0===o?"/login":o,a=Object(k.a)(e,g);return Object(p.jsx)(r.b,{exact:!0,path:n,render:function(e){return c?Object(p.jsx)(t,Object(s.a)(Object(s.a)(Object(s.a)({},e),a),{},{token:c})):Object(p.jsx)(r.a,{to:i})}})},y=n(17);n(133);function C(e){var t=function(){f.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setToken(null)}))};return Object(p.jsx)("nav",{className:"containerSidebar",children:e.token?Object(p.jsxs)("div",{className:"links",children:[Object(p.jsx)(y.b,{to:"/queue",children:Object(p.jsx)("button",{children:"Create a Queue"})}),Object(p.jsx)(y.b,{to:"/",onClick:function(){return t()},children:Object(p.jsx)("button",{children:"Logout"})})]}):Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"links",children:Object(p.jsx)("a",{href:j,children:Object(p.jsx)("button",{children:"LOGIN WITH SPOTIFY"})})})})})}n(134);function w(e){return Object(p.jsx)("div",{className:"center-div",children:e.token?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Welcome to SpotifyQ"}),Object(p.jsx)("br",{}),Object(p.jsxs)("h3",{children:["\u26a0 Open your Spotify in the background",Object(p.jsx)("h4",{children:"to be able to connect your device and queue up tracks when joining or creating a Queue"})]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Welcome to SpotifyQ"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Login with your Spotify to continue"})]})})}var A=n(73),I=n.n(A),P=new u.a({ClientId:"ea28d4ba34f34b44b59c640052c6e098"}),T=I()("https://spotifiq.herokuapp.com/");var N=function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),o=n[0],i=n[1];console.log("THE TOKEN:",o),Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(i(t),P.setAccessToken(t))}),[]);var l=Object(c.useState)(e.user),u=Object(a.a)(l,2),j=u[0],d=(u[1],function(e){i(e)});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{token:o,setToken:d}),Object(p.jsxs)(r.d,{children:[Object(p.jsx)(m,{path:"/queue",user:j,token:o,spotifyAPI:P,socket:T,component:v}),Object(p.jsx)(r.b,{exact:!0,path:"/:inviteCode",render:function(e){return Object(p.jsx)(v,Object(s.a)({token:o,socket:T,setToken:d,spotifyAPI:P},e))}}),Object(p.jsx)(r.b,{exact:!0,path:"/",render:function(e){return Object(p.jsx)(w,Object(s.a)({token:o},e))}})]}),Object(p.jsx)("footer",{className:"footer",children:"Created by Rahaf Abu Alhassan"})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};f.a.get("/api/auth/loggedin").then((function(e){console.log("logged in user: ",e.data);e.data;i.a.render(Object(p.jsx)(y.a,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))})),S()},79:function(e,t,n){},80:function(e,t,n){},97:function(e,t){}},[[160,1,2]]]);
//# sourceMappingURL=main.45ac0955.chunk.js.map