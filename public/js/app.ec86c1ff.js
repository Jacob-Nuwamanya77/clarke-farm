(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2142aa48":"21d263b9","chunk-2d0c4d85":"2272212d","chunk-046c2572":"076fada9","chunk-5b8a5bf9":"e1dc30a6","chunk-6fd9aa8b":"dc307793","chunk-f12ac122":"a0ca3080","chunk-3d16ea4f":"12c78fb7","chunk-651a36a6":"969be217","chunk-18d9e678":"db88e03e","chunk-5b51de02":"216718ba","chunk-6deb9873":"5e6e296e","chunk-93d2ef32":"c179e29d","chunk-1173a428":"b92a0614","chunk-39871502":"0625c31e","chunk-2c5699f3":"6f67d083","chunk-441ec62a":"dba7a355","chunk-70f2b986":"806f4065","chunk-f9a82194":"2e08ef9a","chunk-58d93317":"7baba5c2","chunk-f7d953fe":"208bcf37","chunk-091e0565":"2457ec56","chunk-0d68af88":"63397b12","chunk-10ec003c":"80e59ca1","chunk-7efd7a4b":"739c7836","chunk-dd620472":"cb9dc7cc","chunk-503e5a92":"da92bbf9","chunk-7152aee0":"56763497","chunk-6ddd8f80":"13451c5d","chunk-65c77b74":"9d62fa94"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2142aa48":1,"chunk-046c2572":1,"chunk-5b8a5bf9":1,"chunk-6fd9aa8b":1,"chunk-f12ac122":1,"chunk-3d16ea4f":1,"chunk-651a36a6":1,"chunk-18d9e678":1,"chunk-5b51de02":1,"chunk-6deb9873":1,"chunk-93d2ef32":1,"chunk-1173a428":1,"chunk-39871502":1,"chunk-2c5699f3":1,"chunk-441ec62a":1,"chunk-70f2b986":1,"chunk-f9a82194":1,"chunk-58d93317":1,"chunk-f7d953fe":1,"chunk-091e0565":1,"chunk-0d68af88":1,"chunk-10ec003c":1,"chunk-7efd7a4b":1,"chunk-dd620472":1,"chunk-503e5a92":1,"chunk-7152aee0":1,"chunk-6ddd8f80":1,"chunk-65c77b74":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2142aa48":"cbe367fa","chunk-2d0c4d85":"31d6cfe0","chunk-046c2572":"0ae93c43","chunk-5b8a5bf9":"ce1c1cc7","chunk-6fd9aa8b":"e84896a9","chunk-f12ac122":"86fef219","chunk-3d16ea4f":"2263a8ca","chunk-651a36a6":"dc7aa066","chunk-18d9e678":"f12810c7","chunk-5b51de02":"74b2e86d","chunk-6deb9873":"a2d1f94f","chunk-93d2ef32":"321e6211","chunk-1173a428":"ae8b7d2a","chunk-39871502":"9a86d5d0","chunk-2c5699f3":"52eea25e","chunk-441ec62a":"8f351141","chunk-70f2b986":"37603fc1","chunk-f9a82194":"d23eb053","chunk-58d93317":"35bfb31d","chunk-f7d953fe":"11c386bc","chunk-091e0565":"96ac34c9","chunk-0d68af88":"2b1239f5","chunk-10ec003c":"46a77a5e","chunk-7efd7a4b":"5eb4ff9f","chunk-dd620472":"b876e6a3","chunk-503e5a92":"6d236192","chunk-7152aee0":"ac8e48ce","chunk-6ddd8f80":"b2d6a1bf","chunk-65c77b74":"bff9ae62"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],l.parentNode.removeChild(l),n(o)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0377":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getTrainees:function(){return a.get("/api/trainees")},postTrainee:function(e){return a.post("/api/trainees",e)},delete:function(e){return a.delete("/api/trainees/delete/".concat(e))}}},1456:function(e,t,n){"use strict";n("99af");var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getCoffeeOrders:function(){return a.get("/api/coffee-orders")},postCoffeeOrder:function(e){return a.post("/api/coffee-orders",e)},delete:function(e){return a.delete("/api/coffee-orders/delete/".concat(e))},update:function(e,t){return a.put("/api/coffee-orders/update/".concat(e,"/").concat(t))}}},"32d4":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getActivities:function(){return a.get("/api/activities")},postActivity:function(e){return a.post("/api/activities",e)},deleteActivity:function(e){return a.delete("/api/activities/delete/".concat(e))}}},"36c4":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getFoods:function(){return a.get("/api/foods")},postFood:function(e){return a.post("/api/foods",e)},deleteFood:function(e){return a.delete("/api/foods/delete/".concat(e))}}},"3a61":function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s}));var r=function(){var e=new Date,t=e.getDay(),n=e.getDate(),r=e.getMonth(),i=e.getFullYear();return{day:t,date:n,month:r,year:i}},i=function(e){var t=[];return t[0]="Sun",t[1]="Mon",t[2]="Tue",t[3]="Wed",t[4]="Thu",t[5]="Fri",t[6]="Sat",t[e]},a=function(e){var t=[];return t[0]="January",t[1]="February",t[2]="March",t[3]="April",t[4]="May",t[5]="June",t[6]="July",t[7]="August",t[8]="September",t[9]="October",t[10]="November",t[11]="December",t[e]},o=function(e){var t=new Date(e);return t.getDate()},c=function(e){var t=new Date(e);return t.getMonth()},u=function(e){var t=new Date(e);return i(t.getDay())},s=function(e){var t=new Date(e);return t.getFullYear()}},"494a":function(e,t,n){},"52f4":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getTrainings:function(){return a.get("/api/trainings")},postTraining:function(e){return a.post("/api/trainings",e)},deleteTraining:function(e){return a.delete("/api/trainings/delete/".concat(e))}}},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"state",(function(){return N})),n.d(r,"actions",(function(){return M})),n.d(r,"mutations",(function(){return P}));var i={};n.r(i),n.d(i,"state",(function(){return V})),n.d(i,"actions",(function(){return G})),n.d(i,"mutations",(function(){return x}));var a={};n.r(a),n.d(a,"state",(function(){return W})),n.d(a,"actions",(function(){return z})),n.d(a,"mutations",(function(){return B}));var o={};n.r(o),n.d(o,"state",(function(){return J})),n.d(o,"actions",(function(){return Y})),n.d(o,"mutations",(function(){return q})),n.d(o,"getters",(function(){return K}));var c={};n.r(c),n.d(c,"state",(function(){return Q}));var u={};n.r(u),n.d(u,"state",(function(){return re})),n.d(u,"actions",(function(){return ie})),n.d(u,"mutations",(function(){return ae})),n.d(u,"getters",(function(){return oe}));var s={};n.r(s),n.d(s,"state",(function(){return he})),n.d(s,"actions",(function(){return pe})),n.d(s,"mutations",(function(){return me})),n.d(s,"getters",(function(){return ge}));var f={};n.r(f),n.d(f,"state",(function(){return be})),n.d(f,"actions",(function(){return ke})),n.d(f,"mutations",(function(){return Ae}));var d={};n.r(d),n.d(d,"state",(function(){return De})),n.d(d,"actions",(function(){return ye})),n.d(d,"mutations",(function(){return we}));var l={};n.r(l),n.d(l,"state",(function(){return _e}));var h={};n.r(h),n.d(h,"state",(function(){return Te})),n.d(h,"actions",(function(){return Ee})),n.d(h,"mutations",(function(){return Ce}));n("e623"),n("e379"),n("5dc8"),n("37e1");var p=n("7a23"),m=n("ecee"),g=n("c074"),v=n("ad3d"),b=n("f2d1"),k=n("af56"),A=n("7b13"),O=n("4d6a"),D=n.n(O),y=n("8c47"),w=(new D.a({baseUrl:"https://dev-5812657.okta.com",clientId:"0oavzxa1dSRsQO4gU5d6",redirectUri:"http://localhost:3000/callback",authParams:{pkce:!0,issuer:"https://dev-5812657.okta.com/oauth2/default",display:"page",scopes:["openid","profile","email"]}}),new y["OktaAuth"]({issuer:"https://dev-5812657.okta.com/oauth2/default",clientId:"0oavzxa1dSRsQO4gU5d6",redirectUri:"http://localhost:3000/callback",scopes:["openid","profile","email"]})),_=(n("7b17"),n("ab8b"),{class:"page-container"});function T(e,t){var n=Object(p["B"])("router-view");return Object(p["s"])(),Object(p["e"])("div",_,[Object(p["i"])(n)])}n("c95c");const E={};E.render=T;var C=E,R=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),S=n("5502"),I=n("2909"),j=n("1da1"),L=(n("4de4"),n("96cf"),n("32d4")),N={activities:[]},M={fetchAllActivities:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,L["a"].getActivities();case 3:r=t.sent,n("ADD_ALL_ACTIVITIES",r.data);case 5:case"end":return t.stop()}}),t)})))()},deleteActivity:function(e,t){var n=e.commit;n("REMOVE_ACTIVITY",t)},addActivity:function(e,t){var n=e.commit;n("ADD_ACTIVITY",t)}},P={ADD_ALL_ACTIVITIES:function(e,t){e.activities=t},REMOVE_ACTIVITY:function(e,t){var n=Object(I["a"])(e.activities);e.activities=n.filter((function(e){return e._id!==t._id}))},ADD_ACTIVITY:function(e,t){e.activities.push(t)}},F=n("66e7"),V={accomodations:[]},G={fetchAllAccomodations:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F["a"].getAccomodations();case 3:r=t.sent,n("ADD_ALL_ACCOMODATIONS",r.data);case 5:case"end":return t.stop()}}),t)})))()},deleteAccomodation:function(e,t){var n=e.commit;n("REMOVE_ACCOMODATION",t)},addAccomodation:function(e,t){var n=e.commit;n("ADD_ACCOMODATION",t)}},x={ADD_ALL_ACCOMODATIONS:function(e,t){e.accomodations=t},REMOVE_ACCOMODATAION:function(e,t){var n=Object(I["a"])(e.accomodations);e.accomodations=n.filter((function(e){return e._id!==t._id}))},ADD_ACCOMODATION:function(e,t){e.accomodations.push(t)}},U=n("36c4"),W={foods:[]},z={fetchAllFoods:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,U["a"].getFoods();case 3:r=t.sent,n("ADD_ALL_FOODS",r.data);case 5:case"end":return t.stop()}}),t)})))()},deleteFood:function(e,t){var n=e.commit;n("REMOVE_FOOD",t)},addFood:function(e,t){var n=e.commit;n("ADD_FOOD",t)}},B={ADD_ALL_FOODS:function(e,t){e.foods=t},REMOVE_FOOD:function(e,t){var n=Object(I["a"])(e.foods);e.foods=n.filter((function(e){return e._id!==t._id}))},ADD_FOOD:function(e,t){e.foods.push(t)}},H=(n("99af"),n("eddd")),J={coffeeReviews:[],visitorReviews:[]},Y={fetchAllCoffeeReviews:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,H["a"].getReviews("coffee").then((function(e){n("ADD_ALL_COFFEE_REVIEWS",e.data)}));case 2:case"end":return t.stop()}}),t)})))()},fetchAllVisitorReviews:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,H["a"].getReviews("visitor").then((function(e){n("ADD_ALL_VISITOR_REVIEWS",e.data)}));case 2:case"end":return t.stop()}}),t)})))()}},q={ADD_ALL_COFFEE_REVIEWS:function(e,t){e.coffeeReviews=t},ADD_ALL_VISITOR_REVIEWS:function(e,t){e.visitorReviews=t}},K={getVerifiedCoffeeReviews:function(e){return e.coffeeReviews.filter((function(e){return!0===e.verified}))},getUnverifiedCoffeeReviews:function(e){return e.coffeeReviews.filter((function(e){return!1===e.verified}))},getVerifiedVisitorReviews:function(e){return e.visitorReviews.filter((function(e){return!0===e.verified}))},getUnverifiedVisitorReviews:function(e){return e.visitorReviews.filter((function(e){return!1===e.verified}))},getAllUnverifiedReviews:function(e){var t=e.coffeeReviews.filter((function(e){return!1===e.verified})),n=e.visitorReviews.filter((function(e){return!1===e.verified}));return[].concat(Object(I["a"])(t),Object(I["a"])(n))}},Q={projects:[{title:"Coffee",description:"750 acres of robusta coffee planted. Predominant crop on the farm",filename:"coffee.jpg"},{title:"Eucalyptus",description:"500 acres of eucalyptus planted for conservation.",filename:"eucalyptus.jpg"},{title:"Egg production",description:"10,000 layer chickens on the farm.",filename:"eggs.jpg"},{title:"Goats",description:"Goat rearing on a small scale.",filename:"goat.jpg"},{title:"Maize",description:"Maize is grown on about 120ha.",filename:"maize.jpg"},{title:"Fruit trees",description:"Mangoes, oranges and many more different fruit trees",filename:"fruits.jpg"},{title:"Irish",description:"Irish is grown on a large scale, & after harvest can be stored in our large refrigerated warehouses at the farm",filename:"irish.jpg"},{title:"River trails conservation",description:"Bamboo is planted along river banks to protect the rivers running through the farm.",filename:"bamboo.jpg"},{title:"Matooke",description:"There is about 9ha of matooke planted at the farm.",filename:"matooke.jpg"}]},X=(n("159b"),n("4e82"),n("a9e3"),n("3a61")),Z=function(e){var t=[];return e.forEach((function(e){var n=X["b"](e.checkout),r=X["g"]().date,i=X["g"]().month,a=X["d"](e.checkin),o=n-r;a===i&&0===o&&t.push(e)})),t},$=function(e){var t=[];return e.forEach((function(e){var n=X["b"](e.checkin),r=X["g"]().date,i=X["g"]().month,a=X["d"](e.checkin),o=n-r;a===i&&o>=0&&o<2&&t.push(e)})),t.sort((function(e,t){var n=X["b"](e.checkin),r=X["b"](t.checkin);return n-r})),t},ee=function(e){var t=X["g"]().day,n=X["g"]().date,r=X["a"](t),i="Sun"===r?n:"Sat"===r?n-6:n-t,a="Sun"===r?i+6:"Sat"===r?n:n+(6-t);return e.filter((function(e){var t=X["b"](e.checkin);return t>=i&&t<=a}))},te=function(e){var t={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};return e.forEach((function(e){var n=X["c"](e.checkin);t[n]+=Number(e.guestNumber)})),t},ne=n("f015"),re={bookings:[]},ie={saveGuest:function(e,t){ne["a"].postGuest(t)},fetchAllGuests:function(e){var t=e.commit;ne["a"].getGuests().then((function(e){t("ADD_ALL_GUESTS",e.data)})).catch((function(e){return console.log(e)}))}},ae={ADD_ALL_GUESTS:function(e,t){e.bookings=t}},oe={sortIncomingGuests:function(e){return $(e.bookings)},sortCheckOutGuests:function(e){return Z(e.bookings)},sortCurrentWeekGuests:function(e){var t=ee(e.bookings);return te(t)}},ce=function(e){var t=[];return e.forEach((function(e){var n=X["b"](e.estimatedDelivery),r=X["g"]().date,i=X["g"]().month,a=X["d"](e.estimatedDelivery),o=r-n;a===i&&o>=0&&o<=3&&t.push(e)})),t.sort((function(e,t){var n=X["b"](e.estimatedDelivery),r=X["b"](t.estimatedDelivery);return r-n})),t},ue=function(e){var t=[],n=[];return e.forEach((function(e){e.delivered?t.push(e):n.push(e)})),{deliveredArr:t,pendingDeliveryArr:n}},se=function(e){var t=X["g"]().day,n=X["g"]().date,r=X["a"](t),i="Sun"===r?n:"Sat"===r?n-6:n-t,a="Sun"===r?i+6:"Sat"===r?n:n+(6-t);return e.filter((function(e){var t=X["b"](e.estimatedDelivery);return t>=i&&t<=a}))},fe=function(e){var t={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};return e.forEach((function(e){var n=X["c"](e.estimatedDelivery);t[n]+=Number(e.order)})),t},de=function(e){var t=X["g"]().month,n=X["g"]().year;return e.filter((function(e){var r=X["d"](e.estimatedDelivery),i=X["e"](e.estimatedDelivery);return t===r&&n===i}))},le=n("1456"),he={orders:[]},pe={saveCoffeeOrder:function(e,t){le["a"].postCoffeeOrder(t)},fetchAllCoffeeOrders:function(e){var t=e.commit;le["a"].getCoffeeOrders().then((function(e){t("ADD_ALL_ORDERS",e.data)})).catch((function(e){return console.log(e)}))}},me={ADD_ALL_ORDERS:function(e,t){e.orders=t}},ge={sortIncomingOrders:function(e){return ce(e.orders)},sortDeliveredOrders:function(e){return ue(e.orders).deliveredArr},sortPendingOrders:function(e){return ue(e.orders).pendingDeliveryArr},sortCurrentWeekOrders:function(e){var t=se(e.orders);return fe(t)},sortCurrentMonthOrders:function(e){return de(e.orders)},paperBags:function(e){var t=e.orders.filter((function(e){return"Paper bag"===e.package}));return t},sacks:function(e){var t=e.orders.filter((function(e){return"Sack"===e.package}));return t}},ve=n("0377"),be={trainees:[]},ke={saveTrainee:function(e,t){ve["a"].postTrainee(t)},fetchAllTrainees:function(e){var t=e.commit;ve["a"].getTrainees().then((function(e){t("ADD_ALL_TRAINEES",e.data)})).catch((function(e){return console.log(e)}))}},Ae={ADD_ALL_TRAINEES:function(e,t){e.trainees=t}},Oe=n("52f4"),De={trainings:[]},ye={fetchAllTrainings:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Oe["a"].getTrainings();case 3:r=t.sent,n("ADD_ALL_TRAININGS",r.data);case 5:case"end":return t.stop()}}),t)})))()},deleteTraining:function(e,t){var n=e.commit;n("REMOVE_TRAINING",t)},addTraining:function(e,t){var n=e.commit;n("ADD_TRAINING",t)}},we={ADD_ALL_TRAININGS:function(e,t){e.trainings=t},REMOVE_TRAINING:function(e,t){var n=Object(I["a"])(e.trainings);e.trainings=n.filter((function(e){return e._id!==t._id}))},ADD_TRAINING:function(e,t){e.trainings.push(t)}},_e={processing:[{title:"Coffee Nursery",description:"The nursery produces 70,000 - 100,000 seedlings per year both Clonal & Elite approved by UCDA.",filename:"nursery.jpg"},{title:"Mother Garden",description:"The mother garden has 7 lines of Coffee Wilt Disease Resistant, 4 lines of traditional clones & 1 line of Arabica",filename:"mother_garden.png"},{title:"Pest Control",description:"We use an integrated pest management system, using traps for berry & twig borer plus removal & burning of branches with twig borer. ",filename:"pest_control.png"},{title:"Fertilizer",description:"We apply according to the age of the trees & supplement with compost from coffee pulp, chicken manure & other vegatative matter from the farm.",filename:"fertilizer.png"},{title:"Weeding",description:"Weed control is carried out through cycles of slashing alternating with application of glyphosate",filename:"nursery.jpg"},{title:"Cherry Picking",description:"Fields become productive after 2.5 to 3 years. We handpick only the ripe red cherry.",filename:"cherry_picking.png"},{title:"Soaked Pachment",description:"The pachment is left overnight in water causing a light fermentation which improves the taste.",filename:"pachment.jpg"},{title:"Sun Drying",description:"The pachment is sun dried before completing the drying process in an echo dryer.",filename:"sun_drying.png"},{title:"Echo Drying",description:"The last step in the drying process. Coffee is then stored at 12% moisture until buyer is found.",filename:"echo.png"},{title:"Hulling",description:"Pachment coat is removed when buyer is found",filename:"hulling.png"},{title:"Cleaning",description:"Cleaning the coffee before sorting and grading",filename:"cleaning.png"},{title:"Sorting & Grading",description:"Last step before packing the coffee in bags.",filename:"sort.png"}]},Te={user:null,isAuthenticated:!1},Ee={authenticateUser:function(e,t){var n=e.commit;n("SET_USER",t),n("SET_AUTHENTICATION",!0)},logOutUser:function(e){var t=e.commit;t("SET_USER",null),t("SET_AUTHENTICATION",!1),sessionStorage.removeItem("access_token"),sessionStorage.removeItem("user")}},Ce={SET_AUTHENTICATION:function(e,t){e.isAuthenticated=t},SET_USER:function(e,t){e.user=t}},Re=Object(S["a"])({modules:{activities:r,accomodations:i,foods:a,reviews:o,projects:c,bookings:u,orders:s,trainees:f,trainings:d,processing:l,users:h}}),Se=[{path:"/",name:"HomePage",component:function(){return Promise.all([n.e("chunk-651a36a6"),n.e("chunk-5b51de02")]).then(n.bind(null,"f4a9"))}},{path:"/visit",name:"VisitPage",component:function(){return n.e("chunk-2142aa48").then(n.bind(null,"f422"))}},{path:"/coffee",name:"CoffeePage",component:function(){return n.e("chunk-93d2ef32").then(n.bind(null,"43ab"))}},{path:"/training-programs",name:"TrainingPrograms",component:function(){return Promise.all([n.e("chunk-651a36a6"),n.e("chunk-18d9e678")]).then(n.bind(null,"1b76"))}},{path:"/admin",name:"LoginPage",component:function(){return n.e("chunk-3d16ea4f").then(n.bind(null,"1569"))}},{path:"/admin/dashboard",name:"Dashboard",component:function(){return n.e("chunk-6deb9873").then(n.bind(null,"7277"))},beforeEnter:function(e,t,n){!0===Re.state.users.isAuthenticated?n():(sessionStorage.removeItem("access_token"),n("/admin"))}},{path:"/admin/booking",name:"AdminBooking",component:function(){return Promise.all([n.e("chunk-2d0c4d85"),n.e("chunk-f12ac122")]).then(n.bind(null,"33ff"))},beforeEnter:function(e,t,n){!0===Re.state.users.isAuthenticated?n():(sessionStorage.removeItem("access_token"),n("/admin"))}},{path:"/admin/orders",name:"CoffeeOrders",component:function(){return Promise.all([n.e("chunk-2d0c4d85"),n.e("chunk-046c2572")]).then(n.bind(null,"a217"))},beforeEnter:function(e,t,n){!0===Re.state.users.isAuthenticated?n():(sessionStorage.removeItem("access_token"),n("/admin"))}},{path:"/admin/reviews",name:"Reviews",component:function(){return Promise.all([n.e("chunk-2d0c4d85"),n.e("chunk-5b8a5bf9")]).then(n.bind(null,"7846"))},beforeEnter:function(e,t,n){!0===Re.state.users.isAuthenticated?n():(sessionStorage.removeItem("access_token"),n("/admin"))}},{path:"/admin/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-2d0c4d85"),n.e("chunk-6fd9aa8b")]).then(n.bind(null,"a4b7"))},beforeEnter:function(e,t,n){!0===Re.state.users.isAuthenticated?n():(sessionStorage.removeItem("access_token"),n("/admin"))}}],Ie=Object(R["a"])({history:Object(R["b"])(),routes:Se}),je=Ie;m["c"].add(g["w"],g["f"],b["a"],b["c"],g["m"],g["I"],g["z"],g["s"],g["d"],b["b"],g["s"],g["E"],g["B"],g["D"],g["L"],g["n"],g["g"],g["K"],g["x"],g["o"],g["b"],g["c"],g["y"],g["a"],g["p"],g["F"],g["l"],g["A"],g["J"],g["h"],g["H"],g["j"],g["e"],g["u"],g["i"],g["C"],g["r"],g["G"],g["q"],g["v"],g["t"],g["k"]),Object(p["d"])(C).component("fa",v["a"]).use(k["a"]).use(Re).use(je).use(A["a"],{oktaAuth:w,onAuthRequired:function(){je.push("/admin")},onAuthResume:function(){je.push("/admin")}}).mount("#app")},"66e7":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getAccomodations:function(){return a.get("/api/accomodations")},postAccomodation:function(e){return a.post("/api/accomodations",e)},deleteAccomodation:function(e){return a.delete("/api/accomodations/delete/".concat(e))}}},c95c:function(e,t,n){"use strict";n("494a")},eddd:function(e,t,n){"use strict";n("99af");var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getReviews:function(e){return a.get("/api/reviews/".concat(e))},postReview:function(e,t){return a.post("/api/reviews/".concat(e),t)},delete:function(e,t){return a.delete("/api/reviews/delete/".concat(e,"/").concat(t))},update:function(e,t){return a.put("/api/reviews/update/".concat(e,"/").concat(t),{verified:!0})}}},f015:function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),a=i.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={getGuests:function(){return a.get("/api/guests")},postGuest:function(e){return a.post("/api/guests",e)},delete:function(e){return a.delete("/api/guests/delete/".concat(e))}}}});
//# sourceMappingURL=app.ec86c1ff.js.map