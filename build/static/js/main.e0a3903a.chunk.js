(this.webpackJsonptalksapp=this.webpackJsonptalksapp||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},71:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(28),i=c.n(n),r=(c(64),c(15)),o=(c(65),c(106)),j=c(98),d=c(99),l=c(100),h=c(97),b=c(53),u=c.n(b),m=(c(66),c(31)),O=m.a.initializeApp({apiKey:"AIzaSyDopH5579hFc-IrjeMzUR5uFJRr6VE4kME",authDomain:"talksapp-9e67c.firebaseapp.com",projectId:"talksapp-9e67c",storageBucket:"talksapp-9e67c.appspot.com",messagingSenderId:"178748544432",appId:"1:178748544432:web:9963b38650933f1f5c3275",measurementId:"G-CGZW4GTFT9"}).firestore(),p=m.a.auth(),x=new m.a.auth.GoogleAuthProvider,f=O,v=(c(71),c(32)),g=c(4);var N=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1],h=Object(a.useState)([""]),b=Object(r.a)(h,2),u=b[0],m=b[1];return Object(a.useEffect)((function(){c&&f.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(g.jsx)("div",{onClick:function(){var e=prompt("Please enter name for the chat");e&&f.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(g.jsx)("h2",{children:"Add new Chat"})}):Object(g.jsx)(v.b,{to:"/rooms/".concat(c),children:Object(g.jsxs)("div",{className:"sidebarChat",children:[Object(g.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(g.jsxs)("div",{className:"sidebarChat_info",children:[Object(g.jsxs)("h2",{children:[s," "]}),Object(g.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})})},S=Object(a.createContext)(),C=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(g.jsx)(S.Provider,{value:Object(a.useReducer)(t,c),children:s})},_=function(){return Object(a.useContext)(S)};var w=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=_(),i=Object(r.a)(n,2),b=i[0].user;return i[1],Object(a.useEffect)((function(){var e=f.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsxs)("div",{className:"sidebar_header",children:[Object(g.jsx)(o.a,{src:null===b||void 0===b?void 0:b.photoURL})," ",Object(g.jsxs)("div",{className:"sidebar_headerRight",children:[Object(g.jsx)(h.a,{children:Object(g.jsx)(j.a,{})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(d.a,{})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{})})]})]}),Object(g.jsx)("div",{className:"sidebar_search",children:Object(g.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(g.jsx)(u.a,{}),Object(g.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(g.jsxs)("div",{className:"sidebar_chats",children:[Object(g.jsx)(N,{addNewChat:!0}),c.map((function(e){return Object(g.jsx)(N,{id:e.id,name:e.data.name},e.id)}))]})]})},y=(c(81),c(10)),k=c(101),I=c(102),E=c(103),T=c(104);var D=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),b=d[0],u=d[1],O=Object(y.f)().roomId,p=Object(a.useState)(""),x=Object(r.a)(p,2),v=x[0],N=x[1],S=Object(a.useState)([""]),C=Object(r.a)(S,2),w=C[0],D=C[1],F=_(),M=Object(r.a)(F,2),R=M[0].user;return M[1],Object(a.useEffect)((function(){O&&(f.collection("rooms").doc(O).onSnapshot((function(e){return N(e.data().name)})),f.collection("rooms").doc(O).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return D(e.docs.map((function(e){return e.data()})))})))}),[O]),Object(a.useEffect)((function(){u(Math.floor(5e3*Math.random()))}),[]),Object(g.jsxs)("div",{className:"chat",children:[Object(g.jsxs)("div",{className:"chat_header",children:[Object(g.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(b,".svg")}),Object(g.jsxs)("div",{className:"chat_headerInfo",children:[Object(g.jsx)("h3",{children:v}),Object(g.jsxs)("p",{children:["last seen "," ",new Date(null===(e=w[w.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(g.jsxs)("div",{className:"chat_headerRight",children:[Object(g.jsx)(h.a,{children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(I.a,{})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{})})]})]}),Object(g.jsx)("div",{className:"chat_body",children:w.map((function(e){var t;return Object(g.jsxs)("p",{className:"chat_message ".concat(e.name===R.displayName&&"chat_receiver"),children:[Object(g.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(g.jsx)("span",{className:"chat_timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(g.jsxs)("div",{className:"chat_footer",children:[Object(g.jsx)(E.a,{}),Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},placeholder:"Type a message"}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("You typed>>",n),f.collection("rooms").doc(O).collection("messages").add({message:n,name:R.displayName,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),i("")},type:"submit",children:" Send a message "})]}),Object(g.jsx)(T.a,{})]})]})},F=c(54),M=c(105),R=(c(82),c(46)),B="SET_USER",P=function(e,t){switch(console.log(t),t.type){case B:return Object(R.a)(Object(R.a)({},e),{},{user:t.user});default:return e}};var G=function(){var e=_(),t=Object(r.a)(e,2);Object(F.a)(t[0]);var c=t[1];return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login_container",children:[Object(g.jsx)("img",{src:"https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png",alt:""}),Object(g.jsx)("div",{className:"login_text",children:Object(g.jsx)("h1",{children:"Sign in to Talksapp"})}),Object(g.jsx)(M.a,{onClick:function(){p.signInWithPopup(x).then((function(e){c({type:B,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in with Google"})]})})};var U=function(){var e=_(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(g.jsx)("div",{className:"app",children:c?Object(g.jsx)("div",{className:"app_body",children:Object(g.jsxs)(v.a,{children:[Object(g.jsx)(w,{}),Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/rooms/:roomId",children:Object(g.jsx)(D,{})}),Object(g.jsx)(y.a,{path:"/",children:Object(g.jsx)(D,{})})]})]})}):Object(g.jsx)(G,{})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsxs)(C,{initialState:{user:null},reducer:P,children:[" ",Object(g.jsx)(U,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),A()}},[[83,1,2]]]);
//# sourceMappingURL=main.e0a3903a.chunk.js.map