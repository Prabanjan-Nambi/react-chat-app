(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},173:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(0),c=a.n(n),i=a(19),r=a.n(i),l=(a(148),a(54)),o=a(55),h=a(58),d=a(57),j=(a(149),a.p,a(20)),u=a(232),b=u.a.Header,m=u.a.Content,p=u.a.Footer;function x(e){return Object(s.jsxs)(u.a,{children:[Object(s.jsx)(b,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(s.jsx)("div",{className:"logo"})}),Object(s.jsx)(m,{className:"site-layout",style:{padding:"0 50px",marginTop:64}}),Object(s.jsx)(p,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})}var O=a(39),v=a.n(O),f=a(59),g=a(50),y=a(38),w=a(91);w.a.initializeApp({apiKey:"AIzaSyB0loSM8cgnyl4FP2vLJedoIKtNdagEvQs",authDomain:"kloudchat-31a87.firebaseapp.com",databaseURL:"https://kloudchat-31a87.firebaseio.com"});var k=w.a.auth,S=w.a.database(),C=(a(172),a(173),a(231)),N=a(234),F=a(235),D=a(236),E=a(230),L=a(233),I=a(136),A=a(140),P=a(229),H=a(237),M=a(238),T=a(239),U=a(240),z=a(243),K=a(241),W=a(242),B=a(132),J=a.p+"static/media/chat.0ac4a633.jpg",R=u.a.Header,Y=(u.a.Footer,C.a.TextArea),Q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).like=function(e){var t=parseInt(e.value.likes);S.ref("/feeds/".concat(e.key)).update({likes:t+1})},s.dislike=function(e){var t=parseInt(e.value.dislikes);S.ref("/feeds/".concat(e.key)).update({dislikes:t+1})},s.share=function(e){var t=parseInt(e.value.shares);S.ref("/feeds/".concat(e.key)).update({shares:t+1}),N.a.info({message:"Share",description:"Your post has been shared.",placement:"bottomLeft"})},s.state={user:k().currentUser,chats:[],content:"",readError:null,writeError:null,feeds:[],message:""},s.handleChange=s.handleChange.bind(Object(y.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(y.a)(s)),s.handleNewFeed=s.handleNewFeed.bind(Object(y.a)(s)),s.postFeeds=s.postFeeds.bind(Object(y.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(u.a,{style:{backgroundColor:"#dedede !important"},children:[Object(s.jsx)(R,{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white"},children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(D.a,{xs:2,sm:2,md:2,lg:2,children:Object(s.jsx)(E.a,{style:{width:"40px"},src:J,alt:"Han Solo",title:this.state.user})}),Object(s.jsx)(D.a,{xs:4,sm:4,md:4,lg:6,children:Object(s.jsx)(C.a,{className:"app-search-input",placeholder:"Search Friends..."})}),Object(s.jsx)(D.a,{xs:0,sm:0,md:4,lg:4}),Object(s.jsxs)(D.a,{style:{height:"64px",overflow:"hidden"},xs:10,sm:10,md:4,lg:6,children:[Object(s.jsx)(H.a,{className:"app-header-icons"}),Object(s.jsx)(M.a,{className:"app-header-icons",children:Object(s.jsx)(L.a,{count:5})}),Object(s.jsx)(T.a,{className:"app-header-icons"})]}),Object(s.jsxs)(D.a,{style:{height:"64px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},xs:8,sm:8,md:4,lg:6,children:[Object(s.jsx)(E.a,{src:"https://avatars3.githubusercontent.com/u/10627086?s=460&u=6a06199761992e8d933380f1b57371925675f5ba&v=4",alt:"Han Solo",title:this.state.user}),Object(s.jsxs)("span",{title:this.state.user.email,className:"app-login-name",children:["Logged In as : ",this.state.user.email]})]})]})}),Object(s.jsx)(B.Content,{style:{marginTop:"6%"},children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(D.a,{xs:0,sm:0,md:0,lg:7,children:Object(s.jsx)("div",{className:"app-news-feeds"})}),Object(s.jsxs)(D.a,{xs:24,sm:24,md:24,lg:10,children:[Object(s.jsxs)("div",{className:"create-feeds",children:[Object(s.jsxs)("div",{className:"create-feeds-header",children:[Object(s.jsx)(U.a,{className:"create-feeds-icon"}),Object(s.jsx)("label",{className:"create-feeds-label",children:"Create Post"})]}),Object(s.jsx)("div",{className:"create-feeds-input",children:Object(s.jsx)(Y,{placeholder:"What's on your mind?",onChange:this.handleNewFeed,value:this.state.message,style:{borderRadius:"20px",borderWidth:"1px",borderColor:"#e4e4e4"},rows:4})}),Object(s.jsx)("div",{className:"create-feeds-controls",children:Object(s.jsx)(I.a,{className:"create-feeds-button",type:"primary",onClick:this.postFeeds,children:"Post"})})]}),Object(s.jsxs)("div",{className:"feeds-list",children:[0===this.state.feeds.length&&Object(s.jsx)("p",{className:"app-no-feeds",children:"No Feeds Available!"}),this.state.feeds.map((function(t){return Object(s.jsx)(P.a,{className:"app-feeds-list",actions:[Object(s.jsx)(A.a,{title:"Like",children:Object(s.jsxs)("span",{onClick:function(){return e.like(t)},children:[Object(s.jsx)(K.a,{className:"app-comments-actions"}),Object(s.jsx)("span",{className:"comment-action",children:t.value.likes})]})},"comment-basic-like"),Object(s.jsx)(A.a,{title:"Dislike",children:Object(s.jsxs)("span",{onClick:function(){return e.dislike(t)},children:[Object(s.jsx)(W.a,{className:"app-comments-actions"}),Object(s.jsx)("span",{className:"comment-action",children:t.value.dislikes})]})},"comment-basic-dislike"),Object(s.jsx)(A.a,{title:"Share",children:Object(s.jsxs)("span",{onClick:function(){return e.share(t)},children:[Object(s.jsx)(z.a,{className:"app-comments-actions"}),Object(s.jsx)("span",{className:"comment-action",children:t.value.shares})]})},"comment-basic-share")],author:Object(s.jsx)("a",{children:t.value.author}),avatar:Object(s.jsx)(E.a,{src:"https://i.pravatar.cc/150?img=56",alt:t.value.author}),content:Object(s.jsx)("p",{children:t.value.content}),datetime:Object(s.jsx)(A.a,{title:new Date(t.value.timestamp).toLocaleDateString(),children:Object(s.jsx)("span",{children:new Date(t.value.timestamp).toLocaleDateString()})})},t.value.timestamp)}))]})]}),Object(s.jsx)(D.a,{xs:0,sm:0,md:0,lg:7})]})}),Object(s.jsxs)("div",{className:"chat-box-container",children:[Object(s.jsx)("div",{className:"chat-box-header",children:Object(s.jsxs)("p",{className:"chat-box-header-content",children:["Chat Room",Object(s.jsx)("span",{className:"chat-box-active-icon"})]})}),Object(s.jsxs)("div",{className:"chat-box-conversations",children:[0===this.state.chats.length&&Object(s.jsx)("p",{className:"app-no-chats",children:"No Chats Available!"}),this.state.chats.map((function(t){return t.userInfo!=e.state.user.email?Object(s.jsxs)(F.a,{style:Object(g.a)({padding:"1rem 0 0 0",transition:"all 0.15s ease-in-out",animation:"fadeNewMessage 0.5s"},"animation","forwards"),children:[Object(s.jsx)(D.a,{xs:22,sm:22,md:22,lg:22,children:Object(s.jsx)("div",{className:"chat-box-message chat-box-message-right",children:t.content},t.timestamp)}),Object(s.jsx)(D.a,{xs:2,sm:2,md:2,lg:2,children:Object(s.jsx)(E.a,{src:"https://i.pravatar.cc/150?img=32",alt:"Han Solo",title:e.state.user})})]},t.timestamp):Object(s.jsxs)(F.a,{style:Object(g.a)({padding:"1rem 0 0 0",transition:"all 0.15s ease-in-out",animation:"fadeNewMessage 0.5s"},"animation","forwards"),children:[Object(s.jsx)(D.a,{xs:2,sm:2,md:2,lg:2,children:Object(s.jsx)(E.a,{src:"https://avatars1.githubusercontent.com/u/7843281?s=460&v=4",alt:"Han Solo",title:e.state.user})}),Object(s.jsx)(D.a,{xs:22,sm:22,md:22,lg:22,children:Object(s.jsx)("div",{className:"chat-box-message chat-box-message-left",children:t.content},t.timestamp)})]},t.timestamp)}))]}),Object(s.jsx)("div",{className:"chat-box-controls",children:Object(s.jsxs)(F.a,{style:{padding:"5px"},children:[Object(s.jsx)(D.a,{xs:10,sm:10,md:20,lg:20,children:Object(s.jsx)(C.a,{className:"chat-box-input",onChange:this.handleChange,placeholder:"Type your message here...",value:this.state.content})}),Object(s.jsx)(D.a,{xs:14,sm:14,md:4,lg:4,children:Object(s.jsx)(A.a,{title:"Send",children:Object(s.jsx)(I.a,{className:"chat-send-button",onClick:this.handleSubmit,type:"primary",shape:"circle",icon:Object(s.jsx)(z.a,{})})})})]})})]})]})}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleNewFeed",value:function(e){this.setState({message:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null});try{S.ref("chats").on("value",(function(e){var a=[];e.forEach((function(e){a.push(e.val())})),t.setState({chats:a})})),S.ref("feeds").on("value",(function(e){var a=[];e.forEach((function(e){a.push({key:e.key,value:e.val()})})),t.setState({feeds:a})}))}catch(a){this.setState({readError:a.message})}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(f.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),e.prev=2,e.next=5,S.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid,userInfo:this.state.user.email});case 5:this.setState({content:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({writeError:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"postFeeds",value:function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="bottomLeft",t.preventDefault(),this.setState({writeError:null}),e.prev=3,e.next=6,S.ref("feeds").push({content:this.state.message,timestamp:Date.now(),author:this.state.user.email,likes:0,dislikes:0,shares:0});case 6:N.a.info({message:"Post",description:"Your post has been created.",placement:a}),this.setState({message:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(n.Component),q=a(45);var G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={error:null,email:"",password:""},s.handleChange=s.handleChange.bind(Object(y.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(y.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(f.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,s=this.state.password,k().createUserWithEmailAndPassword(a,s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,s}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("h1",{children:["Sign Up to",Object(s.jsx)(q.b,{to:"/",children:"KloudChat"})]}),Object(s.jsx)("p",{children:"Fill in the form below to create an account."}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(s.jsxs)("div",{children:[this.state.error?Object(s.jsx)("p",{children:this.state.error}):null,Object(s.jsx)("button",{type:"submit",children:"Sign up"})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["Already have an account? ",Object(s.jsx)(q.b,{to:"/login",children:"Login"})]})]})})}}]),a}(n.Component),V=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={error:null,email:"",password:""},s.handleChange=s.handleChange.bind(Object(y.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(y.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(f.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,s=this.state.password,k().signInWithEmailAndPassword(a,s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,s}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("h1",{children:["Login to",Object(s.jsx)(q.b,{to:"/",children:"KloudChat"})]}),Object(s.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(s.jsxs)("div",{children:[this.state.error?Object(s.jsx)("p",{children:this.state.error}):null,Object(s.jsx)("button",{type:"submit",children:"Login"})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{children:["Don't have an account? ",Object(s.jsx)(q.b,{to:"/signup",children:"Sign up"})]})]})})}}]),a}(n.Component),X=a(61),Z=a(89);function $(e){var t=e.component,a=e.authenticated,n=Object(Z.a)(e,["component","authenticated"]);return Object(s.jsx)(j.b,Object(X.a)(Object(X.a)({},n),{},{render:function(e){return!0===a?Object(s.jsx)(t,Object(X.a)({},e)):Object(s.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function _(e){var t=e.component,a=e.authenticated,n=Object(Z.a)(e,["component","authenticated"]);return Object(s.jsx)(j.b,Object(X.a)(Object(X.a)({},n),{},{render:function(e){return!1===a?Object(s.jsx)(t,Object(X.a)({},e)):Object(s.jsx)(j.a,{to:"/chat"})}}))}var ee=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={authenticated:!1,loading:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;k().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?Object(s.jsx)("h2",{children:"Loading..."}):Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{exact:!0,path:"/",component:x}),Object(s.jsx)($,{exact:!0,path:"/chat",authenticated:this.state.authenticated,component:Q}),Object(s.jsx)(_,{exact:!0,path:"/signup",authenticated:this.state.authenticated,component:G}),Object(s.jsx)(_,{exact:!0,path:"/login",authenticated:this.state.authenticated,component:V})]})}}]),a}(n.Component),te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};r.a.render(Object(s.jsxs)(c.a.StrictMode,{children:[Object(s.jsx)(q.a,{basename:"/",children:Object(s.jsx)(ee,{})}),","]}),document.getElementById("root")),te()}},[[226,1,2]]]);
//# sourceMappingURL=main.b4cfe7f6.chunk.js.map