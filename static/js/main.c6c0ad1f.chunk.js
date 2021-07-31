(this["webpackJsonpbug-tracker-mern-stack"]=this["webpackJsonpbug-tracker-mern-stack"]||[]).push([[0],{167:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,u,d,b,l,j,g,p=n(0),O=n.n(p),h=n(34),f=n.n(h),v=(n(166),n(167),n(21)),x=n(22),m=n(24),y=n(23),k=n(17),A=n(10),w=n(48),R=n(159),S=n(26),L=function(e){e.dispatch,e.getState;return function(e){return function(t){if("error"!==t.type)return e(t);console.log(t.payload.message)}}},B=n(110),I=n.n(B),C=n(147),U=n(148),F=n.n(U),T=Object(S.b)("api/callBegan"),q=Object(S.b)("api/callSuccess"),D=Object(S.b)("api/callFailed"),K=function(e){var t=e.dispatch;return function(e){return function(){var n=Object(C.a)(I.a.mark((function n(r){var c,a,s,i,o,u,d,b;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.type===T.type){n.next=2;break}return n.abrupt("return",e(r));case 2:return c=r.payload,a=c.url,s=c.method,i=c.data,o=c.onStart,u=c.onSuccess,d=c.onError,o&&t({type:o}),e(r),n.prev=5,n.next=8,F.a.request({baseURL:"https://sunny-bug-tracker-mern.herokuapp.com/api",url:a,method:s,data:i});case 8:b=n.sent,t(q(b.data)),u&&t({type:u,payload:b.data}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(5),t(D(n.t0.message)),d&&t({type:d,payload:n.t0.message});case 17:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}()}},_=n(11),E=n(311),P=n(112),H=n.n(P),J=n(59),M=Object(S.c)({name:"bugs",initialState:{list:[],loading:!1,lastFetch:null},reducers:{bugsRequested:function(e,t){e.loading=!0},bugsReceived:function(e,t){e.list=t.payload,e.loading=!1,e.lastFetch=Date.now()},bugsRequestFailed:function(e,t){e.loading=!1},bugAdded:function(e,t){e.list.push(t.payload)},bugResolved:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id}));e.list[n].resolved=!0},bugRemoved:function(e,t){e.list.filter((function(e){return e.id!==t.pay}))},bugAssignedToUser:function(e,t){var n=t.payload,r=n.id,c=n.userId,a=e.list.findIndex((function(e){return e.id===r}));e.list[a].userId=c}}}),z=M.actions,G=z.bugsRequested,N=z.bugsReceived,Q=z.bugsRequestFailed,V=(z.bugAdded,z.bugResolved),W=(z.bugRemoved,z.bugAssignedToUser),X=M.reducer,Y="/bugs",Z=(Object(J.a)((function(e){return e.entities.bugs}),(function(e){return e.list.filter((function(e){return!e.resolved}))})),0),$=Object(S.c)({name:"projects",initialState:[],reducers:{projectAdded:function(e,t){e.push({id:++Z,name:t.payload.name})}}}),ee=($.actions.projectAdded,$.reducer),te=n(90),ne=n.n(te),re="a8bFrGk9",ce=function(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return ne.a.set(e,t,{expires:n})}(re,e,t)},ae=function(){return e=re,ne.a.get(e);var e},se=function(){var e;e=re,ne.a.remove(e)},ie=0,oe=Object(S.c)({name:"auth",initialState:{users:[],loginStatus:!!ae()},reducers:{userAdded:function(e,t){e.users.push({id:++ie,name:t.payload.name})},userRegistered:function(e,t){e.loginStatus=!0;var n=t.payload,r=n.jwt_token,c=n.expires_in;ce(r,c)},userLoggedIn:function(e,t){e.loginStatus=!0;var n=t.payload,r=n.jwt_token,c=n.expires_in;ce(r,c)},userLoggedOut:function(e,t){se(),e.loginStatus=!1}}}),ue=oe.actions,de=(ue.userAdded,ue.userRegistered),be=ue.userLoggedIn,le=ue.userLoggedOut,je="/users",ge=oe.reducer,pe=Object(_.combineReducers)({bugs:X,projects:ee,users:ge}),Oe=Object(_.combineReducers)({entities:pe,form:E.a}),he=Object(S.a)({reducer:Oe,middleware:[].concat(Object(R.a)(Object(S.d)()),[L,K])}),fe=n(155),ve=n(308),xe=n(306),me=n(2),ye=n(160),ke=n(307),Ae=n(12),we=n(13),Re=we.a.div(r||(r=Object(Ae.a)(["\n   display: flex;\n   flex-direction: column;\n   margin-bottom: 16px;\n"]))),Se=we.a.span(c||(c=Object(Ae.a)(["\n   color: red;\n"]))),Le=n(1),Be=function(e){return e?void 0:"*Required"},Ie=function(e){var t=e.input,n=e.label,r=e.type,c=e.meta,a=c.touched,s=c.error,i=c.warning;return Object(Le.jsxs)(Re,{children:[Object(Le.jsx)(ye.a,{children:n}),Object(Le.jsxs)("div",{children:[Object(Le.jsx)(ke.a.Control,Object(me.a)(Object(me.a)({},t),{},{placeholder:n,type:r})),a&&(s&&Object(Le.jsx)(Se,{children:s})||i&&Object(Le.jsx)(Se,{children:i}))]})]})},Ce=Object(xe.a)({form:"user"})((function(e){var t=e.handleSubmit,n=e.buttonText;return Object(Le.jsxs)("form",{onSubmit:t,children:[Object(Le.jsx)(ve.a,{name:"username",type:"text",component:Ie,label:"Username",validate:[Be]}),Object(Le.jsx)(ve.a,{name:"password",type:"password",component:Ie,label:"Password",validate:[Be]}),Object(Le.jsx)(fe.a,{type:"submit",variant:"primary",children:n})]})})),Ue=n(310),Fe=we.a.div(a||(a=Object(Ae.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: center;\n"]))),Te=Object(we.a)(Ue.a)(s||(s=Object(Ae.a)(["\n   width: 500px;\n   padding: 40px;\n   margin-top: 100px;\n"]))),qe=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onLogin=function(t){var n={username:t.username,password:t.password};(0,e.props.loginUser)(n)},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(Le.jsx)(Fe,{children:Object(Le.jsx)(Te,{children:Object(Le.jsx)(Ce,{onSubmit:this.onLogin,buttonText:"Login"})})})}}]),n}(O.a.Component),De=Object(k.b)((function(e){return{}}),(function(e){return{loginUser:function(t){e(function(e){return T({url:"".concat(je,"/login"),method:"post",data:e,onSuccess:be.type})}(t))}}}))(qe),Ke=n(301),_e=n(302),Ee=n(158),Pe=we.a.button(i||(i=Object(Ae.a)(["\n   color: grey;\n   border: 0px;\n"]))),He=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).renderResolveBug=function(){var t=e.props,n=t.bug,r=t.onResolveBug,c=n.resolved,a=n.id;return Object(Le.jsx)(Pe,{disabled:c,onClick:function(){r(a)},children:"Resolve"})},e.isActiveAssignee=function(t){return t===e.props.bug.userId},e.renderChangeAssignee=function(){var t=e.props,n=t.bug,r=t.onAssignABugUser,c=n.id,a=n.userId;return Object(Le.jsxs)(Ke.a,{as:_e.a,id:"dropdown-variants-".concat(c),variant:"secondary",title:a||"-1",onSelect:function(e){r(c,e)},children:[Object(Le.jsx)(Ee.a.Item,{eventKey:"1",active:e.isActiveAssignee(1),children:"1"}),Object(Le.jsx)(Ee.a.Item,{eventKey:"2",active:e.isActiveAssignee(2),children:"2"}),Object(Le.jsx)(Ee.a.Item,{eventKey:"3",active:e.isActiveAssignee(3),children:"3"}),Object(Le.jsx)(Ee.a.Item,{eventKey:"4",active:e.isActiveAssignee(4),children:"4"})]})},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.bug,t=e.id,n=e.description;return Object(Le.jsx)(Le.Fragment,{children:Object(Le.jsxs)("tr",{children:[Object(Le.jsx)("td",{children:t}),Object(Le.jsx)("td",{children:n}),Object(Le.jsx)("td",{children:this.renderChangeAssignee()}),Object(Le.jsx)("td",{children:this.renderResolveBug()})]},t)})}}]),n}(p.Component),Je=n(303),Me=Object(we.a)(Je.a)(o||(o=Object(Ae.a)(["\n   border-radius: 4px;\n   overflow: hidden;\n   width: 90vw;\n"]))),ze=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).renderBugs=function(){var t=e.props,n=t.bugs,r=t.onResolveBug,c=t.onAssignABugUser;return n.map((function(e){return Object(Le.jsx)(He,{bug:e,onResolveBug:r,onAssignABugUser:c},e.id)}))},e.renderTableHeading=function(){return Object(Le.jsxs)("tr",{children:[Object(Le.jsx)("th",{children:"#"}),Object(Le.jsx)("th",{children:"Description"}),Object(Le.jsx)("th",{children:"Assignee"}),Object(Le.jsx)("th",{children:"Status"})]})},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(Le.jsxs)(Me,{responsive:!0,striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(Le.jsx)("thead",{children:this.renderTableHeading()}),Object(Le.jsx)("tbody",{children:this.renderBugs()})]})}}]),n}(p.Component),Ge=we.a.div(u||(u=Object(Ae.a)(["\n   margin-top: 50px;\n   justify-content: center;\n   display: flex;\n"]))),Ne=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.loadBugs()}},{key:"render",value:function(){var e=this.props,t=e.bugs,n=e.resolveABug,r=e.assignABugUser;return Object(Le.jsx)(Ge,{children:Object(Le.jsx)(ze,{bugs:t,onResolveBug:n,onAssignABugUser:r})})}}]),n}(p.Component),Qe=Object(k.b)((function(e){return{bugs:e.entities.bugs.list}}),(function(e){return{loadBugs:function(){return e((function(e,t){var n=t().entities.bugs.lastFetch;H()().diff(H()(n),"minutes")<5||e(T({url:Y,onStart:G.type,onSuccess:N.type,onError:Q.type}))}))},resolveABug:function(t){return e(function(e){return T({url:"".concat(Y,"/").concat(e),method:"patch",data:{resolved:!0},onSuccess:V.type})}(t))},assignABugUser:function(t,n){e(function(e,t){return T({url:"".concat(Y,"/").concat(e),method:"patch",data:{userId:t},onSuccess:W.type})}(t,n))}}}))(Ne),Ve=we.a.div(d||(d=Object(Ae.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: center;\n"]))),We=Object(we.a)(Ue.a)(b||(b=Object(Ae.a)(["\n   width: 500px;\n   padding: 40px;\n   margin-top: 100px;\n"]))),Xe=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onRegister=function(t){var n={username:t.username,password:t.password};(0,e.props.registerUser)(n)},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(Le.jsx)(Ve,{children:Object(Le.jsx)(We,{children:Object(Le.jsx)(Ce,{onSubmit:this.onRegister,buttonText:"Register"})})})}}]),n}(O.a.Component),Ye=Object(k.b)((function(e){return{}}),(function(e){return{registerUser:function(t){e(function(e){return T({url:"".concat(je,"/register"),method:"post",data:e,onSuccess:de.type})}(t))}}}))(Xe),Ze="".concat("/bug-tracker-mern-stack","/register"),$e="".concat("/bug-tracker-mern-stack","/login"),et="".concat("/bug-tracker-mern-stack","/dashboard"),tt="".concat("/bug-tracker-mern-stack","/"),nt=function(e){return{isLoggedIn:e.entities.users.loginStatus}},rt=Object(k.b)(nt)((function(e){return e.isLoggedIn?Object(Le.jsx)(A.b,Object(me.a)({},e)):Object(Le.jsx)(A.a,{to:$e})})),ct=Object(k.b)(nt)((function(e){return e.isLoggedIn?Object(Le.jsx)(A.a,{to:tt}):Object(Le.jsx)(A.b,Object(me.a)({},e))})),at=n(309),st=n(304),it=n(305),ot=Object(we.a)(it.a)(l||(l=Object(Ae.a)(["\n   background: white;\n   box-shadow: 0 2px 2px 0 rgba(31, 45, 61, 0.15);\n"]))),ut=Object(we.a)(it.a.Brand)(j||(j=Object(Ae.a)(["\n   padding-bottom: 0px;\n   padding-top: 0px;\n   display: flex;\n   align-items: center;\n"]))),dt=we.a.img(g||(g=Object(Ae.a)(["\n   margin-right: 5px;\n"]))),bt=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onClickLogout=function(){(0,e.props.logoutUser)()},e.renderAuthItems=function(){return e.props.isLoggedIn?Object(Le.jsx)(at.a.Link,{children:Object(Le.jsx)("div",{onClick:e.onClickLogout,children:"Logout"})}):Object(Le.jsxs)(O.a.Fragment,{children:[Object(Le.jsx)(at.a.Link,{as:w.b,to:Ze,children:"Register"}),Object(Le.jsx)(at.a.Link,{as:w.b,to:$e,children:"Login"})]})},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(Le.jsx)(ot,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(Le.jsxs)(st.a,{children:[Object(Le.jsxs)(ut,{children:[Object(Le.jsx)(dt,{src:"https://zohowebstatic.com/sites/default/files/ogimage/bugtracker-logo.png",width:"35",height:"35",alt:"App Logo"}),"Bug Tracker"]}),Object(Le.jsx)(it.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(Le.jsx)(it.a.Collapse,{id:"responsive-navbar-nav",children:Object(Le.jsxs)(at.a,{className:"ms-auto",children:[Object(Le.jsx)(at.a.Link,{as:w.b,to:et,children:"Dashboard"}),this.renderAuthItems()]})})]})})}}]),n}(p.Component),lt=Object(A.g)(bt),jt=Object(k.b)((function(e){return{isLoggedIn:e.entities.users.loginStatus}}),(function(e){return{logoutUser:function(){e((function(e){return e(le())}))}}}))(lt),gt=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).renderRoutes=function(){return Object(Le.jsxs)(A.d,{children:[Object(Le.jsx)(ct,{path:$e,children:Object(Le.jsx)(De,{})}),Object(Le.jsx)(ct,{path:Ze,children:Object(Le.jsx)(Ye,{})}),Object(Le.jsx)(rt,{path:et,children:Object(Le.jsx)(Qe,{})}),Object(Le.jsx)(rt,{path:tt,children:Object(Le.jsx)(Qe,{})})]})},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(Le.jsx)(k.a,{store:he,children:Object(Le.jsxs)(w.a,{children:[Object(Le.jsx)(jt,{}),this.renderRoutes()]})})}}]),n}(p.Component),pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,312)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};f.a.render(Object(Le.jsx)(O.a.StrictMode,{children:Object(Le.jsx)(gt,{})}),document.getElementById("root")),pt()}},[[296,1,2]]]);
//# sourceMappingURL=main.c6c0ad1f.chunk.js.map