(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(70),o=n.n(i),s=(n(79),n(14)),a=n(12),r=(n(80),n(2)),l=n(29),j=n.n(l),u="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("ea28d4ba34f34b44b59c640052c6e098","&redirect_uri=").concat("https://spotifiq.herokuapp.com/","&scope=").concat(["streaming","playlist-modify-public","ugc-image-upload","user-read-email","user-read-private","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),d=n(21),b=n(41),h=(n(109),n(15)),p=n.n(h),f=n(0);function x(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)([]),r=Object(a.a)(s,2),l=r[0],u=r[1],h=Object(c.useState)([]),x=Object(a.a)(h,2),g=x[0],m=x[1],v=Object(c.useState)([]),k=Object(a.a)(v,2),y=k[0],w=k[1],C=Object(c.useState)(""),T=Object(a.a)(C,2),I=T[0],S=T[1],A=e.token,N=Object(c.useState)(""),P=Object(a.a)(N,2),_=P[0],q=P[1];console.log("API",e.spotifyAPI),Object(c.useEffect)((function(){e.socket.on("track added",(function(e){m((function(t){return[].concat(Object(b.a)(t),[e.track])}))})),e.match.params.inviteCode&&p.a.get("/api/auth/".concat(e.match.params.inviteCode)).then((function(e){var t=new j.a;console.log("This is the selectedDevice",e.data.selectedDevice),console.log("This is the token",e.data.token),t.setAccessToken(e.data.token),t.setSelecedDevice(e.data.selectedDevice)})).catch((function(e){q(e)}))}),[]);var Q=Object(c.useState)(""),R=Object(a.a)(Q,2),B=R[0],D=R[1],L="https://spotifiq.herokuapp.com/".concat(B);return _?Object(f.jsxs)("div",{className:"svenContainer",children:[Object(f.jsx)("img",{style:{height:"400px"},src:"https://www.fazemag.de/wp-content/uploads/2016/02/sven_marquardt_c_mitteldeutscher_verlag__1000.jpg",alt:"Sven Marquardt"}),Object(f.jsx)("br",{}),Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Heute leider nicht"})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"containerQ",children:[Object(f.jsxs)("div",{className:"flexItem1 device",children:[Object(f.jsxs)("div",{className:"deviceContainer",children:[Object(f.jsxs)("button",{style:{marginBottom:"20px"},onClick:function(){e.spotifyAPI.getMyDevices().then((function(e){w(e.body.devices)}))},children:["Select a device  ",Object(f.jsx)("i",{class:"far fa-hand-pointer"})]}),y.length>0&&Object(f.jsxs)("select",{style:{marginBottom:"15px",width:"170px",marginRight:"20px"},name:"device",id:"",onChange:function(e){S(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Choose a device"}),y.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name})}))]})]}),Object(f.jsxs)("div",{className:"inviteContainer",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{style:{marginBottom:"20px"},onClick:function(e){var t={selectedDevice:I,token:A,inviteCode:B};p.a.post("/api/queue",t).then((function(e){D(e.data.inviteCode)})).catch((function(e){return console.log(e)}))},children:"Invite friends to join your Q"})}),B&&Object(f.jsx)("div",{children:Object(f.jsxs)("div",{style:{marginRight:"15px"},onClick:function(){navigator.clipboard.writeText(L)},children:[Object(f.jsx)("input",Object(d.a)({style:{marginRight:"15px"},type:"text",value:L,id:"createdQ"},"style",{width:"160px"})),Object(f.jsx)("i",{style:{fontSize:"25px",paddingLeft:"10px",cursor:"pointer"},class:"fas fa-copy"})]})})]})]}),Object(f.jsxs)("div",{className:"flexItem2 searchContainer",children:[Object(f.jsx)("input",{style:{width:"185px",marginBottom:"20px"},value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("button",{style:{height:"40px",marginLeft:"10px"},onClick:function(){e.spotifyAPI.searchTracks(i).then((function(e){console.log("TRACKS:",e.body.tracks.items),u(e.body.tracks.items)}),(function(e){console.error(e)}))},children:Object(f.jsx)("i",{class:"fa fa-search"})}),Object(f.jsx)("div",{children:l.map((function(t){return Object(f.jsx)("div",{className:"searchResults",children:Object(f.jsxs)("div",{className:"addTrack",onClick:function(){return function(t){g.find((function(e){return e.id===t.id}))||(m([].concat(Object(b.a)(g),[t])),e.socket.emit("new track",{track:t}),e.spotifyAPI.addToQueue(t.uri).then((function(e){console.log(e)})))}(t)},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{float:"left",fontSize:"25px",marginRight:"6px",marginTop:"3px"},class:"fas fa-plus-circle"}),Object(f.jsx)("h4",{children:t.name})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("p",{children:["\ud83c\udfa4 ",t.artists[0].name]})})]})},t.id)}))})]}),Object(f.jsxs)("div",{className:" flexItem3 Queue",children:[Object(f.jsx)("h2",{children:"Queue"}),g.map((function(e){return Object(f.jsx)("ul",{className:"queueTracks",children:Object(f.jsx)("li",{children:Object(f.jsx)("p",{children:e.name})})})}))]})]}),Object(f.jsxs)("div",{style:O,children:[Object(f.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.skipToPrevious().then((function(e){console.log("skip to previous track",e)}),(function(e){console.log(e)}))},children:Object(f.jsx)("i",{className:"fa fa-backward fa-lg"})}),Object(f.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.transferMyPlayback([I],{play:!0}).then((function(){console.log("Transfering playback to "+I)}),(function(e){console.log("Something went wrong!",e)}))},children:Object(f.jsx)("i",{className:"fa fa-play fa-lg"})}),Object(f.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.transferMyPlayback([I],{play:!1}).then((function(){console.log("Transfering playback to "+I)}),(function(e){console.log("Something went wrong!",e)}))},children:Object(f.jsx)("i",{className:"fa fa-pause fa-lg"})}),Object(f.jsx)("button",{type:"button",onClick:function(){e.spotifyAPI.skipToNext().then((function(e){console.log("skip to next track",e)}),(function(e){console.log(e)}))},children:Object(f.jsx)("i",{className:"fa fa-forward fa-lg"})})]})]})}var O={position:"fixed",bottom:"0",left:"0",height:"15px",background:"black",color:"white",width:"100% ",paddingBottom:"90px",textAlign:"center"};function g(e){return Object(f.jsx)("div",{style:{flexGrow:"1",padding:"15px"},children:Object(f.jsx)(x,Object(s.a)(Object(d.a)({spotifyAPI:e.spotifyAPI,socket:e.socket,token:e.token,setToken:e.setToken},"spotifyAPI",e.spotifyAPI),e))})}var m=n(74),v=["component","user","path","token","redirectPath"],k=function(e){var t=e.component,n=(e.user,e.path),c=e.token,i=e.redirectPath,o=void 0===i?"/login":i,a=Object(m.a)(e,v);return Object(f.jsx)(r.b,{exact:!0,path:n,render:function(e){return c?Object(f.jsx)(t,Object(s.a)(Object(s.a)(Object(s.a)({},e),a),{},{token:c})):Object(f.jsx)(r.a,{to:o})}})},y=n(17);n(133);function w(e){var t=function(){p.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setToken(null)}))};return Object(f.jsx)("nav",{className:"containerSidebar",children:e.token?Object(f.jsxs)("div",{className:"links",children:[Object(f.jsx)(y.b,{to:"/queue",children:Object(f.jsx)("button",{style:{width:"160px"},children:"Create a Queue"})}),Object(f.jsx)(y.b,{to:"/",onClick:function(){return t()},children:Object(f.jsx)("button",{style:{width:"160px",marginTop:"20px"},children:"Logout"})})]}):Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"links",children:Object(f.jsx)("a",{href:u,children:Object(f.jsx)("button",{style:{width:"160px",marginTop:"30px"},children:"LOGIN WITH SPOTIFY"})})})})})}n(134);function C(e){return Object(f.jsx)("div",{className:"center-div",children:e.token?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Welcome to SpotifyQ"}),Object(f.jsx)("br",{}),Object(f.jsxs)("h3",{children:["\u26a0 Open your Spotify in the background",Object(f.jsx)("h4",{children:"to be able to connect your device and queue up tracks when joining or creating a Queue"})]})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Welcome to SpotifyQ"}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{children:"Login with your Spotify to continue"})]})})}var T=n(73),I=n.n(T),S=new j.a({ClientId:"ea28d4ba34f34b44b59c640052c6e098"}),A=I()("https://spotifiq.herokuapp.com/");var N=function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),i=n[0],o=n[1];console.log("THE TOKEN:",i),Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(o(t),S.setAccessToken(t))}),[]);var l=Object(c.useState)(e.user),j=Object(a.a)(l,2),u=j[0],d=(j[1],function(e){o(e)});return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w,{token:i,setToken:d}),Object(f.jsxs)(r.d,{children:[Object(f.jsx)(k,{path:"/queue",user:u,token:i,spotifyAPI:S,socket:A,component:g}),Object(f.jsx)(r.b,{exact:!0,path:"/:inviteCode",render:function(e){return Object(f.jsx)(g,Object(s.a)({token:i,socket:A,setToken:d,spotifyAPI:S},e))}}),Object(f.jsx)(r.b,{exact:!0,path:"/",render:function(e){return Object(f.jsx)(C,Object(s.a)({token:i},e))}})]}),Object(f.jsx)("footer",{className:"footer",children:"Created by Rahaf Abu Alhassan"})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};p.a.get("/api/auth/loggedin").then((function(e){console.log("logged in user: ",e.data);e.data;o.a.render(Object(f.jsx)(y.a,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))})),P()},79:function(e,t,n){},80:function(e,t,n){},97:function(e,t){}},[[160,1,2]]]);
//# sourceMappingURL=main.6be8ae77.chunk.js.map