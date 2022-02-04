(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3837aa7a"],{"1c2a":function(e,t,i){"use strict";t["a"]={methods:{validateAlphabetCharacters:function(e){var t=/^[a-zA-Z ]{2,80}$/;return!!t.test(e)},validateEmail:function(e){var t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;return!!t.test(e)},validatePhoneNumbers:function(e){var t=/^\+?([0-9]+)\)?[-. ]?([0-9]+)[-. ]?([0-9]+)$/;return!!t.test(e)},validateNumbers:function(e){var t=/^[0-9.]+$/;return!!t.test(e)},validateLongText:function(e){var t=/^\w+/;return!(e.length>0&&!t.test(e))},checkFileSize:function(e){var t=e.size/1024/1024;return!(t>2)},checkNonEmpty:function(e){return 0!==e.length}}}},3732:function(e,t,i){},"8e6e":function(e,t,i){"use strict";i.r(t);i("caad"),i("2532"),i("b0c0");var n=i("7a23"),r=i("37b6"),a=i.n(r),c=Object(n["O"])("data-v-59dee1e5");Object(n["v"])("data-v-59dee1e5");var o={id:"training-registration-form"},u=Object(n["i"])("p",{class:"section-title"},"Register",-1),s={class:"registration-container"},l=Object(n["i"])("div",{id:"registration-image"},[Object(n["i"])("img",{src:a.a,alt:"welcome","aria-hidden":"true"})],-1),p={id:"form-container"},b=Object(n["i"])("p",{id:"description"},"Register with us",-1),d={key:0,class:"error-text"},m={key:1,class:"error-text"},h={key:2,class:"error-text"},O={key:3,class:"error-text"},j={class:"input-container"},f={class:"input-container"},v=Object(n["i"])("legend",null,"Select topics of interest",-1),k={class:"checkbox-list"},g={class:"checkbox-pair"},x=Object(n["h"])(" Coffee "),y=Object(n["h"])(" Matooke "),w={class:"checkbox-pair"},z=Object(n["h"])(" Chicken "),M=Object(n["h"])(" Others "),V={class:"checkbox-pair"},F=Object(n["h"])(" Irish "),U={class:"checkbox-pair"},I=Object(n["h"])(" Maize "),N=Object(n["i"])("div",{class:"submit-container"},[Object(n["i"])("button",{class:"submit",type:"submit"},"Submit")],-1);Object(n["t"])();var S=c((function(e,t,i,r,a,c){return Object(n["s"])(),Object(n["e"])("div",o,[u,Object(n["i"])("div",s,[l,Object(n["i"])("div",p,[b,Object(n["i"])("form",{onSubmit:t[13]||(t[13]=Object(n["N"])((function(){return c.handleSubmitForm&&c.handleSubmitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("div",{class:["input-container",a.error.input.includes("name")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"name",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.trainee.name=e}),required:""},null,512),[[n["I"],a.trainee.name]])],2),a.error.input.includes("name")?(Object(n["s"])(),Object(n["e"])("span",d," Only alphabets allowed. ")):Object(n["f"])("",!0),Object(n["i"])("div",{class:["input-container",a.error.input.includes("email")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"email",placeholder:"Email Address",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.trainee.email=e}),required:""},null,512),[[n["I"],a.trainee.email]])],2),a.error.input.includes("email")?(Object(n["s"])(),Object(n["e"])("span",m," Incorrect email format. ")):Object(n["f"])("",!0),Object(n["i"])("div",{class:["input-container",a.error.input.includes("phone")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",placeholder:"Telephone",name:"telephone","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.trainee.phone=e}),required:""},null,512),[[n["I"],a.trainee.phone]])],2),a.error.input.includes("phone")?(Object(n["s"])(),Object(n["e"])("span",h," Incorrect phone format characters detected. ")):Object(n["f"])("",!0),Object(n["i"])("div",{class:["input-container",a.error.input.includes("groupsize")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"groupsize",placeholder:"Group size","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.trainee.groupsize=e}),required:""},null,512),[[n["I"],a.trainee.groupsize]])],2),a.error.input.includes("groupsize")?(Object(n["s"])(),Object(n["e"])("span",O," Must be a number. ")):Object(n["f"])("",!0),Object(n["i"])("div",j,[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"checkin",placeholder:"Visitation date","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.trainee.checkin=e}),required:"",onfocus:'(this.type="date")'},null,512),[[n["I"],a.trainee.checkin]]),Object(n["M"])(Object(n["i"])("input",{type:"text",name:"bookingtype","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.trainee.bookingtype=e}),hidden:""},null,512),[[n["I"],a.trainee.bookingtype]])]),Object(n["i"])("div",f,[Object(n["i"])("fieldset",null,[v,Object(n["i"])("div",k,[Object(n["i"])("div",g,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"coffee","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),x]),Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"matooke","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),y])]),Object(n["i"])("div",w,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"chicken","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),z]),Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"others","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),M])]),Object(n["i"])("div",V,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"irish","onUpdate:modelValue":t[11]||(t[11]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),F])]),Object(n["i"])("div",U,[Object(n["i"])("span",null,[Object(n["M"])(Object(n["i"])("input",{type:"checkbox",name:"topics",value:"maize","onUpdate:modelValue":t[12]||(t[12]=function(e){return a.trainee.topics=e})},null,512),[[n["F"],a.trainee.topics]]),I])])])])]),N],32)])])])})),T=i("1da1"),q=(i("96cf"),i("3d20")),C=i.n(q),R=i("1c2a"),$={name:"TrainingRegistration",data:function(){return{trainee:{name:"",email:"",phone:"",groupsize:"",checkin:"",topics:[],bookingtype:"Training"},error:{input:""}}},mixins:[R["a"]],methods:{validateForm:function(e){this.error.input+=this.validateAlphabetCharacters(e.name)?"":" name",this.error.input+=this.validateEmail(e.email)?"":" email",this.error.input+=this.validatePhoneNumbers(e.phone)?"":" phone",this.error.input+=this.validateNumbers(e.groupsize)?"":" groupsize"},handleSubmitForm:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error.input="",e.validateForm(e.trainee),0!==e.error.input.length){t.next=13;break}return t.prev=3,t.next=6,e.$store.dispatch("saveTrainee",e.trainee);case 6:e.trainee={name:"",email:"",phone:"",groupsize:"",checkin:"",topics:[]},C.a.fire({title:"Thank you",text:"Your Booking has been received ",icon:"success",timer:1500,showConfirmButton:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),e.message="failed to submit; please, try again!";case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}};i("d6fe");$.render=S,$.__scopeId="data-v-59dee1e5";t["default"]=$},d6fe:function(e,t,i){"use strict";i("3732")}}]);
//# sourceMappingURL=chunk-3837aa7a.49522f3d.js.map