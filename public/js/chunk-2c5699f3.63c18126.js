(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5699f3"],{4834:function(e,t,i){"use strict";i("b0c0");var a=i("7a23"),c=Object(a["O"])("data-v-75392292");Object(a["v"])("data-v-75392292");var n={class:"modal-overlay"},s={class:"content"},o={class:"content-header"},r={class:"slot"},l=Object(a["h"])(" Only registered "),d=Object(a["h"])(" can review. "),u={class:"close-btn"},b={class:"input-container"},v={class:"input-container"},O={class:"input-container"},j={class:"text-limits"},w=Object(a["i"])("div",{class:"submit-container"},[Object(a["i"])("button",{class:"submit",type:"submit"}," Submit ")],-1);Object(a["t"])();var h=c((function(e,t,i,c,h,p){return Object(a["s"])(),Object(a["e"])("div",n,[Object(a["i"])("div",s,[Object(a["i"])("div",o,[Object(a["i"])("span",r,[l,Object(a["A"])(e.$slots,"default",{},void 0,!0),d]),Object(a["i"])("span",u,[Object(a["i"])("a",{onClick:t[1]||(t[1]=Object(a["N"])((function(){return p.closeModal&&p.closeModal.apply(p,arguments)}),["prevent"]))},"×")])]),Object(a["i"])("form",{onSubmit:t[6]||(t[6]=Object(a["N"])((function(){return p.submitReview&&p.submitReview.apply(p,arguments)}),["prevent"]))},[Object(a["i"])("div",b,[Object(a["M"])(Object(a["i"])("input",{type:"text",name:"name",placeholder:"Name",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.name=e})},null,512),[[a["I"],h.name]])]),Object(a["i"])("div",v,[Object(a["M"])(Object(a["i"])("input",{type:"email",placeholder:"Email Address",name:"email",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return h.email=e})},null,512),[[a["I"],h.email]])]),Object(a["i"])("div",O,[Object(a["M"])(Object(a["i"])("textarea",{rows:"8",placeholder:"Write review",name:"review","onUpdate:modelValue":t[4]||(t[4]=function(e){return h.review=e}),maxlength:"300",onInput:t[5]||(t[5]=function(){return p.checkInputLength&&p.checkInputLength.apply(p,arguments)})},null,544),[[a["I"],h.review]]),Object(a["i"])("span",j,Object(a["D"])(h.textlimit)+" / 300",1)]),w],32)])])})),p={name:"ReviewModal",data:function(){return{textlimit:0,name:"",email:"",review:""}},methods:{checkInputLength:function(e){this.textlimit=e.target.value.length},closeModal:function(){this.$emit("close-modal")},createReviewObject:function(){return{name:this.name,email:this.email,review:this.review,createdAt:new Date}},submitReview:function(){var e=this.createReviewObject();this.$emit("user-review",e)}}};i("6231");p.render=h,p.__scopeId="data-v-75392292";t["a"]=p},6231:function(e,t,i){"use strict";i("e146")},6385:function(e,t,i){"use strict";i("7f57")},"7f57":function(e,t,i){},"9c68":function(e,t,i){"use strict";i.r(t);i("b0c0");var a=i("7a23"),c=i("9e9a"),n=i.n(c),s=Object(a["O"])("data-v-51489add");Object(a["v"])("data-v-51489add");var o={class:"reviews-container unselectable"},r=Object(a["h"])(" guests "),l={id:"review-details"},d={id:"review-left"},u=Object(a["i"])("p",{class:"section-title"}," Our visitors describe their experiences. ",-1),b={id:"review-text"},v={id:"reviewee-details"},O={key:1},j={id:"cta-container"},w={class:"forward-back-navigation"},h={class:"contact-btn-container"},p={id:"review-right"},m=Object(a["i"])("div",{id:"img-container"},[Object(a["i"])("img",{src:n.a,alt:"coffee reviews","aria-hidden":"true"})],-1),f={class:"icon-container",id:"highlight-1"},R={class:"icon",id:"smile-icon"},g=Object(a["i"])("span",{class:"icon-text"}," Great Service ",-1),y={class:"icon-container",id:"highlight-2"},M={class:"icon",id:"heart-icon"},D=Object(a["i"])("span",{class:"icon-text"}," Beautiful ",-1);Object(a["t"])();var k=s((function(e,t,i,c,n,k){var x=Object(a["B"])("ReviewModal"),A=Object(a["B"])("ArrowNavigation"),I=Object(a["B"])("fa");return Object(a["s"])(),Object(a["e"])("div",o,[n.showModal?(Object(a["s"])(),Object(a["e"])(x,{key:0,onCloseModal:k.closeModal,onUserReview:k.submitReview},{default:s((function(){return[r]})),_:1},8,["onCloseModal","onUserReview"])):Object(a["f"])("",!0),Object(a["i"])("div",l,[Object(a["i"])("div",d,[u,n.displayData.length>0?(Object(a["s"])(),Object(a["e"])(a["a"],{key:0},[Object(a["i"])("p",b,Object(a["D"])(n.displayData[0].review),1),Object(a["i"])("div",v,[Object(a["i"])("span",null,Object(a["D"])(e.capitalizeEachWord(n.displayData[0].name)),1)])],64)):(Object(a["s"])(),Object(a["e"])("p",O," No reviews to display ")),Object(a["i"])("div",j,[Object(a["i"])("div",w,[Object(a["i"])(A,{itemList:e.reviews,perPage:1,onDisplayData:k.setDisplayData},null,8,["itemList","onDisplayData"])]),Object(a["i"])("div",h,[Object(a["i"])("a",{onClick:t[1]||(t[1]=Object(a["N"])((function(){return k.showReviewModal&&k.showReviewModal.apply(k,arguments)}),["prevent"]))},"Write Review")])])]),Object(a["i"])("div",p,[m,Object(a["i"])("div",f,[Object(a["i"])("span",R,[Object(a["i"])(I,{icon:"smile"})]),g]),Object(a["i"])("div",y,[Object(a["i"])("span",M,[Object(a["i"])(I,{icon:"heart"})]),D])])])])})),x=i("5530"),A=i("eddd"),I=i("0833"),C=i("4834"),N=i("b14f"),B=i("5502"),V=i("3d20"),L=i.n(V),U={name:"OurReviews",created:function(){this.$store.dispatch("fetchAllVisitorReviews")},data:function(){return{showModal:!1,displayData:[]}},components:{ArrowNavigation:I["a"],ReviewModal:C["a"]},mixins:[N["a"]],methods:{setDisplayData:function(e){this.displayData=e},showReviewModal:function(){this.showModal=!0},closeModal:function(){this.showModal=!1},showWaitingAlert:function(){L.a.fire({icon:"info",title:"Checking status",text:"Checking if you stayed with us",showConfirmButton:!1})},showReviewAccepted:function(){L.a.fire({icon:"success",title:"Review submitted",timer:2e3,showConfirmButton:!1})},showReviewRejected:function(){L.a.fire({icon:"error",title:"Review rejected",text:"Submitted user data does not match any record"})},submitReview:function(e){var t=this;this.closeModal(),this.showWaitingAlert(),A["a"].postReview("visitor",e).then((function(e){"success"===e.data.status&&(L.a.close(),t.showReviewAccepted()),"rejected"===e.data.status&&(L.a.close(),t.showReviewRejected())}))}},computed:Object(x["a"])({},Object(B["b"])({reviews:"getVerifiedVisitorReviews"}))};i("6385");U.render=k,U.__scopeId="data-v-51489add";t["default"]=U},e146:function(e,t,i){}}]);
//# sourceMappingURL=chunk-2c5699f3.63c18126.js.map