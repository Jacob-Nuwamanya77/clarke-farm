(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76f00fea"],{1569:function(e,t,s){"use strict";s.r(t);var n=s("7a23");function a(e,t,s,a,r,o){var c=Object(n["B"])("login");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["i"])(c)])}var r=s("f619"),o=s.n(r),c=Object(n["O"])("data-v-18f6b475");Object(n["v"])("data-v-18f6b475");var i={class:"container"},l={class:"login-wrap "},d={class:"row justify-content-center d-flex align-items-center"},u={class:"col-xl-10 col-lg-12 col-md-9"},b={class:"card shadow-lg my-5 d-flex"},m={class:"card-body p-0"},g={class:"row"},p={class:"col-lg-5"},f=Object(n["i"])("div",{class:"text-center"},[Object(n["i"])("h2",{class:"p-3 logo-text"},"CLARKE FARM")],-1),j={class:"auth text-center"},O={class:"auth-form mt-4"},v=Object(n["i"])("h6",{class:"text-center text-muted mb-3 "}," Welcome Back, Login to get Started",-1),h={class:"alert alert-danger alert-dismissible fade show d-none",role:"alert",id:"close-alert"},w=Object(n["i"])("strong",null,"Opps!  ",-1),k={class:"mb-3 ml-3"},y={class:"form-floating relative mb-2"},L=Object(n["i"])("label",{for:"name"},"Username",-1),x={class:"mb-3 text-left "},C={class:"form-floating mb-2"},I=Object(n["i"])("label",{for:"password"},"Password",-1),A=Object(n["i"])("hr",null,null,-1),B={class:"go-to-home mb-3"},U=Object(n["i"])("button",{type:"submit",class:"btn btn-outline-secondary  btn-block"}," Go to Home Page",-1),P=Object(n["i"])("div",{class:"col-lg-7"},[Object(n["i"])("img",{src:o.a})],-1);Object(n["t"])();var _=c((function(e,t,s,a,r,o){var _=Object(n["B"])("router-link");return Object(n["s"])(),Object(n["e"])("div",i,[Object(n["i"])("div",l,[Object(n["i"])("div",d,[Object(n["i"])("div",u,[Object(n["i"])("div",b,[Object(n["i"])("div",m,[Object(n["i"])("div",g,[Object(n["i"])("div",p,[f,Object(n["i"])("div",j,[Object(n["i"])("div",O,[Object(n["i"])("div",null,[v,Object(n["i"])("form",{class:"col-12 mt-5",onSubmit:t[4]||(t[4]=Object(n["N"])((function(){return o.userLogin&&o.userLogin.apply(o,arguments)}),["prevent"]))},[Object(n["i"])("div",h,[w,Object(n["h"])(Object(n["D"])(r.errormessage)+" ",1),Object(n["i"])("span",{"aria-hidden":"true",class:"close-alert","data-dismiss":"alert","aria-label":"Close",id:"close",onClick:t[1]||(t[1]=function(){return o.dismissAlert&&o.dismissAlert.apply(o,arguments)})},"×")]),Object(n["i"])("div",k,[Object(n["i"])("div",y,[Object(n["M"])(Object(n["i"])("input",{type:"text",class:"form-control",name:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.username=e})},null,512),[[n["I"],r.username]]),L])]),Object(n["i"])("div",x,[Object(n["i"])("div",C,[Object(n["M"])(Object(n["i"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.password=e})},null,512),[[n["I"],r.password]]),I])])],32),Object(n["i"])("div",null,[Object(n["i"])("button",{type:"submit",class:"btn  login-btn btn-block",onClick:t[5]||(t[5]=function(){return o.userLogin&&o.userLogin.apply(o,arguments)}),id:"login-btn"},Object(n["D"])(r.status),1)]),A,Object(n["i"])("div",B,[Object(n["i"])(_,{to:"/"},{default:c((function(){return[U]})),_:1})])])])])]),P])])])])])])])})),E=s("1da1"),S=(s("96cf"),s("4eef")),R={name:"LoginPage",data:function(){return{username:"",password:"",status:"Login",errormessage:""}},methods:{createCredentialsObject:function(){var e={username:this.username,password:this.password,access_token:""};return e},userLogin:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.status="Logging in",s=e.createCredentialsObject(),t.next=4,S["a"].checkCredentials(s).then((function(t){e.status="Login",e.$store.dispatch("authenticateUser",t.data.data),sessionStorage.setItem("access_token",t.data.data.access_token),sessionStorage.setItem("user",JSON.stringify(t.data.data)),e.$router.push("/admin/dashboard"),e.username="",e.password=""})).catch((function(t){setTimeout(e.errorButton(),2e3),"user not found"===t.response.data.message?e.errormessage="User does not exist":"Incorrect Password"===t.response.data.message?e.errormessage="Check your password and try again":"Failed to update User token"===t.response.data.message?e.errormessage="Network Error occured! Please Try Again":e.errormessage="Wrong Credentials! Contact Admin for assistance"}));case 4:case"end":return t.stop()}}),t)})))()},errorButton:function(){this.status="Login Failed!",document.getElementById("login-btn").style.backgroundColor="red",document.getElementById("close-alert").classList.remove("d-none")},dismissAlert:function(){document.getElementById("close-alert").classList.add("d-none")}}};s("36fe");R.render=_,R.__scopeId="data-v-18f6b475";var F=R,J={name:"LoginPage",components:{Login:F}};J.render=a;t["default"]=J},"36fe":function(e,t,s){"use strict";s("8931")},"4eef":function(e,t,s){"use strict";var n=s("bc3a"),a=s.n(n),r=a.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={createUser:function(e){return r.post("/api/users",e)},checkCredentials:function(e){return r.post("/api/users/login",e)}}},8931:function(e,t,s){},f619:function(e,t,s){e.exports=s.p+"img/forestwalk.9b29e615.jpg"}}]);
//# sourceMappingURL=chunk-76f00fea.b7b6edf0.js.map