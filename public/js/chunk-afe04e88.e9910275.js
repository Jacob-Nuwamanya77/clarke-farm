(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afe04e88"],{"1c2a":function(e,t,r){"use strict";t["a"]={methods:{validateAlphabetCharacters:function(e){var t=/^[a-zA-Z ]{2,80}$/;return!!t.test(e)},validateEmail:function(e){var t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;return!!t.test(e)},validatePhoneNumbers:function(e){var t=/^\+?([0-9]+)\)?[-. ]?([0-9]+)[-. ]?([0-9]+)$/;return!!t.test(e)},validateNumbers:function(e){var t=/^[0-9.]+$/;return!!t.test(e)},validateLongText:function(e){var t=/^\w+/;return!(e.length>0&&!t.test(e))},checkFileSize:function(e){var t=e.size/1024/1024;return!(t>2)},checkNonEmpty:function(e){return 0!==e.length}}}},5601:function(e,t,r){"use strict";r("fbf1")},b936:function(e,t,r){e.exports=r.p+"img/stalk.55ec5472.jpg"},fbf1:function(e,t,r){},fcbd:function(e,t,r){"use strict";r.r(t);r("caad"),r("2532"),r("b0c0");var n=r("7a23"),a=r("b936"),i=r.n(a),c=Object(n["O"])("data-v-87e0686c");Object(n["v"])("data-v-87e0686c");var o={id:"coffee-registration-form"},s=Object(n["i"])("div",{class:"description"},[Object(n["i"])("p",{class:"section-title"},"Register")],-1),u={class:"registration-container"},d=Object(n["i"])("div",{id:"registration-image"},[Object(n["i"])("img",{src:i.a,alt:"welcome","aria-hidden":"true"})],-1),l={id:"form-container"},p=Object(n["i"])("p",{id:"description"},"We promise to contact you within 24 hours.",-1),b={key:0,class:"error-text"},m={key:1,class:"error-text"},h={key:2,class:"error-text"},O={class:"input-container"},j={name:"packages"},f=Object(n["i"])("legend",null,"Select package type",-1),v={class:"checkbox-list"},g={class:"checkbox-pair"},k=Object(n["h"])(" Paper Bag "),y={class:"checkbox-pair"},x=Object(n["h"])(" Sacks "),w={key:3,class:"error-text"},q={class:"input-container"},I={class:"text-limits"},M={key:4,class:"error-text"},S=Object(n["i"])("div",{class:"submit-container"},[Object(n["i"])("button",{class:"submit",type:"submit"}," Submit ")],-1);Object(n["t"])();var U=c((function(e,t,r,a,i,c){return Object(n["s"])(),Object(n["e"])("div",o,[s,Object(n["i"])("div",u,[d,Object(n["i"])("div",l,[p,Object(n["i"])("form",{onSubmit:t[10]||(t[10]=Object(n["N"])((function(){return c.handleSubmitForm&&c.handleSubmitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("div",{class:["input-container",i.error.input.includes("name")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"name",placeholder:"Name",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.order.name=e})},null,512),[[n["I"],i.order.name]])],2),i.error.input.includes("name")?(Object(n["s"])(),Object(n["e"])("span",b," Only alphabets are allowed. ")):Object(n["f"])("",!0),Object(n["i"])("div",{class:["input-container",i.error.input.includes("email")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"email",placeholder:"Email Address",name:"email",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.order.email=e})},null,512),[[n["I"],i.order.email]])],2),i.error.input.includes("email")?(Object(n["s"])(),Object(n["e"])("span",m," Incorrect email format. ")):Object(n["f"])("",!0),Object(n["i"])("div",{class:["input-container",i.error.input.includes("phone")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",placeholder:"Telephone",name:"phone",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.order.phone=e})},null,512),[[n["I"],i.order.phone]])],2),i.error.input.includes("phone")?(Object(n["s"])(),Object(n["e"])("span",h," Incorrect phone format characters detected. ")):Object(n["f"])("",!0),Object(n["i"])("div",O,[Object(n["i"])("fieldset",j,[f,Object(n["i"])("div",v,[Object(n["i"])("div",g,[Object(n["M"])(Object(n["i"])("input",{type:"radio",name:"package",value:"Paper bag",checked:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.order.package=e})},null,512),[[n["G"],i.order.package]]),k]),Object(n["i"])("div",y,[Object(n["M"])(Object(n["i"])("input",{type:"radio",name:"package",value:"Sack","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.order.package=e})},null,512),[[n["G"],i.order.package]]),x])])])]),Object(n["i"])("div",{class:["input-container",i.error.input.includes("order")?"error":""]},[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"order",placeholder:"Estimated order",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.order.order=e})},null,512),[[n["I"],i.order.order]])],2),i.error.input.includes("order")?(Object(n["s"])(),Object(n["e"])("span",w," Must be a number. ")):Object(n["f"])("",!0),Object(n["i"])("div",q,[Object(n["M"])(Object(n["i"])("input",{type:"text",name:"bookingtype",placeholder:"When do you want this order",onfocus:'(this.type="date")',"onUpdate:modelValue":t[7]||(t[7]=function(e){return i.order.estimatedDelivery=e}),required:""},null,512),[[n["I"],i.order.estimatedDelivery]])]),Object(n["i"])("div",{class:["input-container",i.error.input.includes("requests")?"error":""]},[Object(n["M"])(Object(n["i"])("textarea",{placeholder:"Questions or special requests",name:"requests","onUpdate:modelValue":t[8]||(t[8]=function(e){return i.order.requests=e}),maxlength:"180",onInput:t[9]||(t[9]=function(){return c.checkInputLength&&c.checkInputLength.apply(c,arguments)})},null,544),[[n["I"],i.order.requests]]),Object(n["i"])("span",I,Object(n["D"])(i.textarea)+" / 180",1)],2),i.error.input.includes("requests")?(Object(n["s"])(),Object(n["e"])("span",M," Unsupported characters in text. ")):Object(n["f"])("",!0),S],32)])])])})),V=r("1da1"),F=(r("96cf"),r("3d20")),N=r.n(F),C=r("1c2a"),P={name:"BookingForm",data:function(){return{order:{name:"",email:"",phone:"",package:"Paper bag",order:"",estimatedDelivery:"",delivered:!1,requests:"",bookingtype:"Coffee"},error:{input:""},textarea:0}},mixins:[C["a"]],methods:{checkInputLength:function(e){this.textarea=e.target.value.length},validateForm:function(e){this.error.input+=this.validateAlphabetCharacters(e.name)?"":" name",this.error.input+=this.validateEmail(e.email)?"":" email",this.error.input+=this.validatePhoneNumbers(e.phone)?"":" phone",this.error.input+=this.validateNumbers(e.order)?"":" order",this.error.input+=this.validateLongText(e.requests)?"":"requests"},handleSubmitForm:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error.input="",e.validateForm(e.order),0!==e.error.input.length){t.next=13;break}return t.prev=3,t.next=6,e.$store.dispatch("saveCoffeeOrder",e.order);case 6:e.order={name:"",email:"",phone:"",package:"Paper bag",order:"",estimatedDelivery:"",delivered:!1,requests:"",bookingtype:"Coffee"},N.a.fire({title:"Thank you",text:"Your Booking has been received ",icon:"success",timer:1500,showConfirmButton:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),e.message="failed to submit; please, try again!";case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}};r("5601");P.render=U,P.__scopeId="data-v-87e0686c";t["default"]=P}}]);
//# sourceMappingURL=chunk-afe04e88.e9910275.js.map