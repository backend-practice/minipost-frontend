(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"isLoggedIn",(function(){return P}));var o={};t.r(o),t.d(o,"setCurrentUser",(function(){return U}));var a={};t.r(a),t.d(a,"login",(function(){return y})),t.d(a,"refreshCurrentUser",(function(){return S}));var s=t("967e"),u=t.n(s),i=(t("96cf"),t("fa84")),c=t.n(i),l=(t("35fc"),t("7d6e"),t("a4b7"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),p=t("b178");l["a"].use(p["a"],{config:{}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},d=[],h={name:"App"},m=h,b=t("2877"),w=Object(b["a"])(m,f,d,!1,null,null,null),g=w.exports,v=t("2f62"),k={currentUser:{}};function P(e){return Boolean(e.currentUser&&e.currentUser.id)}function U(e,n){e.currentUser=n}var x=t("bc3a"),M=t.n(x);function y(e,n){e.commit;var t=n.username,r=n.password;return M.a.post("/authentications/",{username:t,password:r}).then((function(e){var n=e.data.token;F(n),localStorage.setItem("token",n)}))}function S(e){var n=e.commit;return M.a.get("/user/").then((function(e){n("setCurrentUser",e.data)}))}function F(e){M.a.defaults.headers.common["Authorization"]="Token "+e}var R={namespaced:!0,state:k,getters:r,mutations:o,actions:a};l["a"].use(v["a"]);var A=function(){var e=new v["a"].Store({modules:{auth:R},strict:!1});return e},C=t("8c4f"),I=[{path:"/",component:function(){return t.e("f5e7a8e2").then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e("19b12d7f").then(t.bind(null,"8b24"))}},{path:"/sign-up",component:function(){return t.e("a04f0784").then(t.bind(null,"89a8"))}},{path:"/login",component:function(){return t.e("d7274e72").then(t.bind(null,"013f"))}},{path:"/u/:id",component:function(){return t.e("521e522a").then(t.bind(null,"4336"))},props:function(e){return{id:parseInt(e.params.id)}}}]}];I.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var L=I;l["a"].use(C["a"]);var z=function(){var e=new C["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:L,mode:"hash",base:""});return e},V=function(){var e="function"===typeof A?A({Vue:l["a"]}):A,n="function"===typeof z?z({Vue:l["a"],store:e}):z;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(g)}};return{app:t,store:e,router:n}},N=t("a925"),$={failed:"Action failed",success:"Action was successful",signUp:"Sign Up",login:"Login",username:"Username",password:"Password",nickname:"Nickname",gender:"Gender",unknown:"Unknown",male:"Male",female:"Female",register:"Register",miniPosts:"MiniPosts",following:"Following",followers:"Followers",recent:"Recent",feed:"Feed",noRecentMiniPosts:"No Recent MiniPosts",noFeedMiniPosts:"No Feed MiniPosts",newPostPlaceholder:"Post something",publish:"Publish",publishSucceeded:"Publish Succeeded"},j={failed:"失败",success:"成功",signUp:"注册",login:"登录",username:"用户名",password:"密码",nickname:"昵称",gender:"性别",unknown:"未知",male:"男",female:"女",register:"注册",miniPosts:"MiniPosts",following:"关注",followers:"粉丝",recent:"最近",feed:"关注",noRecentMiniPosts:"没有最近的MiniPosts",noFeedMiniPosts:"没有MiniPosts，请登录或关注其他用户",newPostPlaceholder:"发布点什么吧",publish:"发布",publishSucceeded:"发布成功"},q={"en-us":$,"zh-hans":j};l["a"].use(N["a"]);var B=new N["a"]({locale:"zh-hans",fallbackLocale:"en-us",messages:q}),J=function(e){var n=e.app;n.i18n=B},T=function(){var e=c()(u.a.mark((function e(n){var t,r,o,a;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.Vue,r=n.store,t.prototype.$axios=M.a,o="https://minipost-django.herokuapp.com",M.a.defaults.baseURL=localStorage.getItem("baseURL")||o,a=localStorage.getItem("token"),a&&(M.a.defaults.headers.common["Authorization"]="Token "+a,r.dispatch("auth/refreshCurrentUser"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=V(),E=_.app,G=_.store,O=_.router;function Q(){return D.apply(this,arguments)}function D(){return D=c()(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[J,T],t=0;case 2:if(!(t<n.length)){e.next=20;break}if("function"===typeof n[t]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[t]({app:E,router:O,store:G,Vue:l["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:t++,e.next=2;break;case 20:new l["a"](E);case 21:case"end":return e.stop()}}),e,null,[[5,10]])}))),D.apply(this,arguments)}Q()},"7e6d":function(e,n,t){}},[[0,"runtime","vendor"]]]);