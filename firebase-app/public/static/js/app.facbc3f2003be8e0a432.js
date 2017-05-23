webpackJsonp([1],{11:function(t,e,o){"use strict";var r=o(46),s=o.n(r),a=s.a.initializeApp({apiKey:"AIzaSyAYYtsPixEV7rd34HrJVkH0bOZDgjGvYtc",authDomain:"cooperate-for-food.firebaseapp.com",databaseURL:"https://cooperate-for-food.firebaseio.com",projectId:"cooperate-for-food",storageBucket:"cooperate-for-food.appspot.com",messagingSenderId:"1031851904352"});e.a=a},163:function(t,e,o){var r=o(3)(o(176),o(239),null,null);t.exports=r.exports},164:function(t,e,o){"use strict";var r=o(17),s=o(248),a=o(236),n=o.n(a),i=o(235),l=o.n(i),c=o(234),m=o.n(c),d=o(237),u=o.n(d);r.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"room-list",component:n.a},{path:"/add",name:"room-add",component:m.a},{path:"/sign-in",name:"sign-in",component:u.a},{path:"/:id",name:"room-view",component:l.a}]})},165:function(t,e,o){"use strict";var r=o(32),s=o.n(r),a=o(31),n=o.n(a),i=o(17),l=o(18),c=o(250),m=o.n(c),d=o(11);i.a.use(l.a),i.a.use(m.a);var u=d.a.database();e.a=new l.a.Store({state:{rooms:null,user:null,company:null},mutations:n()({},m.a.mutations),actions:{createRoom:function(t,e){return u.ref("/rooms").push(e)},addRoom:function(t,e){return u.ref("/"+t.state.company+"/rooms").push(e)},addMessage:function(t,e){var o=s()(e,2),r=o[0],a=o[1];return u.ref("/"+t.state.company+"/rooms/"+r+"/discussion").push(a)},removeRoom:function(t,e){return u.ref("/"+t.state.company+"/rooms/"+e).remove()},addOrderItem:function(t,e){var o=s()(e,2),r=o[0],a=o[1],n=t.state.user.uid,i=r.orderItems;i||(i=[]);var l=i.find(function(t){return t.id===n});return l?l.orders?l.orders.push(a):l.orders=[a]:(l={id:n,name:t.state.user.displayName,orders:[a]},i.push(l)),u.ref("/"+t.state.company+"/rooms/"+r[".key"]+"/orderItems").set(i)},removeOrderItem:function(t,e){var o=s()(e,2),r=o[0],a=o[1],n=t.state.user.uid,i=r.orderItems;i||(i=[]);var l=i.find(function(t){return t.id===n});if(l.orders.splice(a,1),!l.orders.length){var c=i.findIndex(function(t){return t.id===n});i.splice(c,1)}return u.ref("/"+t.state.company+"/rooms/"+r[".key"]+"/orderItems").set(i)},setRoomLock:function(t,e){var o=s()(e,2),r=o[0],a=o[1];return u.ref("/"+t.state.company+"/rooms/"+r+"/locked").set(a)}},getters:{}})},167:function(t,e,o){var r=o(3)(o(171),o(242),null,null);t.exports=r.exports},169:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(166),s=o.n(r),a=o(17),n=o(167),i=o.n(n),l=o(18),c=o(164),m=o(165),d=o(11),u=o(168),p=o(0),v=o.n(p);a.a.use(u.a),a.a.config.productionTip=!1,a.a.filter("formattedDate",function(t){return v()(t).format("HH:mm, MMM Do")});var f=d.a.database();d.a.auth().onAuthStateChanged(function(t){var e=s.a.resolve(),o={};if(t){var r=localStorage.getItem("company");m.a.state.user=t,m.a.state.company=r,e=t.getToken().then(function(t){m.a.state.accessToken=t}),o.rooms=f.ref("/"+r+"/rooms")}return e.then(function(){new a.a({el:"#app",router:c.a,store:m.a,template:"<App/>",components:{App:i.a},computed:l.a.mapGetters(["rooms"]),firebase:o})})})},170:function(t,e,o){"use strict";e.a={beforeCreate:function(){this.$store.state.user||(console.log("replacing"),this.$router.replace("/sign-in"))}}},171:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(31),s=o.n(r),a=o(11),n=o(18),i=o(232),l=o.n(i);e.default={name:"app",components:{appNotificationsBar:l.a},computed:s()({},o.i(n.b)(["user"])),methods:{logout:function(){a.a.auth().signOut()}},beforeCreate:function(){var t=this;a.a.auth().onAuthStateChanged(function(e){e&&"/sign-in"===t.$route.path?t.$router.replace("/"):e||"/sign-in"===t.$route.path||t.$router.replace("/sign-in")})}}},172:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["inputId"],data:function(){return{autocomplete:null,googleValue:""}},mounted:function(){var t=this;this.autocomplete=new window.google.maps.places.Autocomplete(this.$refs.input,{types:["establishment"],componentRestrictions:{country:"ua"}}),this.autocomplete.addListener("place_changed",function(){var e=t.autocomplete.getPlace();e&&t.$emit("placeChanged",e)})}}},173:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),s=o.n(r);e.default={props:["messages"],filters:{timeFormatted:function(t){return s()(t).format("HH:mm")}},mounted:function(){var t=this;this.$nextTick(function(){t.$el.scrollTop=t.$el.scrollHeight})},updated:function(){var t=this;this.$nextTick(function(){t.$el.scrollTop=t.$el.scrollHeight})}}},174:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{notifications:[]}}}},175:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"",price:""}},methods:{addItem:function(){var t=this.name,e=this.price;this.$emit("itemAdded",{name:t,price:e})}}}},176:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["label","value"]}},177:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(32),s=o.n(r),a=o(0),n=o.n(a),i=o(230),l=o.n(i),c=o(170);e.default={name:"room-add",mixins:[c.a],components:{appAutocompleteField:l.a},data:function(){return{room:{title:"",description:"",indoor:!0,timeCreated:null,place:{googleId:"",name:"",url:""},timeArranged:null,hostId:this.$store.state.user.uid,orderItems:[],discussion:[],deliveryPrice:0,comment:"",locked:!1},time:"",googlePlace:null}},methods:{addOrderItem:function(){this.orderItems.push({name:"",price:0,userId:this.$store.state.user.uid})},submitForm:function(){var t=this,e=this.time.split(":"),o=s()(e,2),r=o[0],a=o[1];this.room.timeCreated=n()().format(),this.room.timeArranged=n()().startOf("day").hours(r).minutes(a).format(),this.$store.dispatch("addRoom",this.room).then(function(){t.$router.replace("/")})},googlePlaceChanged:function(t){this.room.place.googleId=t.place_id,this.room.place.url=t.website,this.room.place.name=t.name,this.googlePlace=t}},computed:{total:function(){return this.orderItems.reduce(function(t,e){return t+e.price})+this.deliveryPrice}}}},178:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),s=o.n(r),a=o(231),n=o.n(a),i=o(233),l=o.n(i),c=o(163),m=o.n(c);e.default={name:"room-view",filters:{totalFilter:function(t){var e=0;return(t||[]).forEach(function(t){e+=parseFloat(t.price)}),e}},data:function(){return{messageText:""}},components:{appChatWindow:n.a,appOrderItemAdder:l.a,appRoomInfoField:m.a},computed:{room:function(){var t=this.$route.params.id;return this.$store.state.rooms.find(function(e){return e[".key"]===t})},ownUid:function(){return this.$store.state.user.uid},presentInOrders:function(){var t=this;return!!(this.room.orderItems||[]).find(function(e){return e.id===t.ownUid})}},methods:{keyPressed:function(t){13===t.which&&this.sendMessage()},sendMessage:function(){var t=this.$store.state.user.displayName,e=this.messageText;e.trim()&&(this.$store.dispatch("addMessage",[this.room[".key"],{userName:t,text:e,time:s()().format()}]),this.messageText="")},removeRoom:function(){var t=this;confirm("Are you sure, you want to remove this room?")&&this.$store.dispatch("removeRoom",this.room[".key"]).then(function(){t.$router.replace("/")})},itemAdded:function(t){this.$store.dispatch("addOrderItem",[this.room,t])},removeItem:function(t){this.$store.dispatch("removeOrderItem",[this.room,t])},toggleRoomLock:function(){this.$store.dispatch("setRoomLock",[this.room[".key"],!this.room.locked])}}}},179:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),s=o.n(r),a=o(163),n=o.n(a);e.default={name:"rooms-list",components:{appRoomInfoField:n.a},computed:{rooms:function(){var t=s()();return this.$store.state.rooms.filter(function(e){return t.isSameOrBefore(s()(e.timeArranged))})}}}},180:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(11),s=o(46),a=o.n(s);e.default={name:"sign-in",data:function(){return{company:"",companyApproved:!1,isSearching:!1}},methods:{signIn:function(){var t=new a.a.auth.GoogleAuthProvider;t.addScope("profile"),t.addScope("email"),localStorage.setItem("company",this.company),r.a.auth().signInWithPopup(t)},checkCompany:function(){var t=this;this.isSearching||setTimeout(function(){t.isSearching=!0,t.$http.get("https://us-central1-cooperate-for-food.cloudfunctions.net/check_company?company="+t.company).then(function(){t.companyApproved=!0}).catch(function(){t.companyApproved=!1}).finally(function(){t.isSearching=!1})},500)}}}},220:function(t,e){},221:function(t,e){},222:function(t,e){},227:function(t,e,o){function r(t){return o(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./af":47,"./af.js":47,"./ar":54,"./ar-dz":48,"./ar-dz.js":48,"./ar-kw":49,"./ar-kw.js":49,"./ar-ly":50,"./ar-ly.js":50,"./ar-ma":51,"./ar-ma.js":51,"./ar-sa":52,"./ar-sa.js":52,"./ar-tn":53,"./ar-tn.js":53,"./ar.js":54,"./az":55,"./az.js":55,"./be":56,"./be.js":56,"./bg":57,"./bg.js":57,"./bn":58,"./bn.js":58,"./bo":59,"./bo.js":59,"./br":60,"./br.js":60,"./bs":61,"./bs.js":61,"./ca":62,"./ca.js":62,"./cs":63,"./cs.js":63,"./cv":64,"./cv.js":64,"./cy":65,"./cy.js":65,"./da":66,"./da.js":66,"./de":69,"./de-at":67,"./de-at.js":67,"./de-ch":68,"./de-ch.js":68,"./de.js":69,"./dv":70,"./dv.js":70,"./el":71,"./el.js":71,"./en-au":72,"./en-au.js":72,"./en-ca":73,"./en-ca.js":73,"./en-gb":74,"./en-gb.js":74,"./en-ie":75,"./en-ie.js":75,"./en-nz":76,"./en-nz.js":76,"./eo":77,"./eo.js":77,"./es":79,"./es-do":78,"./es-do.js":78,"./es.js":79,"./et":80,"./et.js":80,"./eu":81,"./eu.js":81,"./fa":82,"./fa.js":82,"./fi":83,"./fi.js":83,"./fo":84,"./fo.js":84,"./fr":87,"./fr-ca":85,"./fr-ca.js":85,"./fr-ch":86,"./fr-ch.js":86,"./fr.js":87,"./fy":88,"./fy.js":88,"./gd":89,"./gd.js":89,"./gl":90,"./gl.js":90,"./gom-latn":91,"./gom-latn.js":91,"./he":92,"./he.js":92,"./hi":93,"./hi.js":93,"./hr":94,"./hr.js":94,"./hu":95,"./hu.js":95,"./hy-am":96,"./hy-am.js":96,"./id":97,"./id.js":97,"./is":98,"./is.js":98,"./it":99,"./it.js":99,"./ja":100,"./ja.js":100,"./jv":101,"./jv.js":101,"./ka":102,"./ka.js":102,"./kk":103,"./kk.js":103,"./km":104,"./km.js":104,"./kn":105,"./kn.js":105,"./ko":106,"./ko.js":106,"./ky":107,"./ky.js":107,"./lb":108,"./lb.js":108,"./lo":109,"./lo.js":109,"./lt":110,"./lt.js":110,"./lv":111,"./lv.js":111,"./me":112,"./me.js":112,"./mi":113,"./mi.js":113,"./mk":114,"./mk.js":114,"./ml":115,"./ml.js":115,"./mr":116,"./mr.js":116,"./ms":118,"./ms-my":117,"./ms-my.js":117,"./ms.js":118,"./my":119,"./my.js":119,"./nb":120,"./nb.js":120,"./ne":121,"./ne.js":121,"./nl":123,"./nl-be":122,"./nl-be.js":122,"./nl.js":123,"./nn":124,"./nn.js":124,"./pa-in":125,"./pa-in.js":125,"./pl":126,"./pl.js":126,"./pt":128,"./pt-br":127,"./pt-br.js":127,"./pt.js":128,"./ro":129,"./ro.js":129,"./ru":130,"./ru.js":130,"./sd":131,"./sd.js":131,"./se":132,"./se.js":132,"./si":133,"./si.js":133,"./sk":134,"./sk.js":134,"./sl":135,"./sl.js":135,"./sq":136,"./sq.js":136,"./sr":138,"./sr-cyrl":137,"./sr-cyrl.js":137,"./sr.js":138,"./ss":139,"./ss.js":139,"./sv":140,"./sv.js":140,"./sw":141,"./sw.js":141,"./ta":142,"./ta.js":142,"./te":143,"./te.js":143,"./tet":144,"./tet.js":144,"./th":145,"./th.js":145,"./tl-ph":146,"./tl-ph.js":146,"./tlh":147,"./tlh.js":147,"./tr":148,"./tr.js":148,"./tzl":149,"./tzl.js":149,"./tzm":151,"./tzm-latn":150,"./tzm-latn.js":150,"./tzm.js":151,"./uk":152,"./uk.js":152,"./ur":153,"./ur.js":153,"./uz":155,"./uz-latn":154,"./uz-latn.js":154,"./uz.js":155,"./vi":156,"./vi.js":156,"./x-pseudo":157,"./x-pseudo.js":157,"./yo":158,"./yo.js":158,"./zh-cn":159,"./zh-cn.js":159,"./zh-hk":160,"./zh-hk.js":160,"./zh-tw":161,"./zh-tw.js":161};r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id=227},230:function(t,e,o){var r=o(3)(o(172),o(247),null,null);t.exports=r.exports},231:function(t,e,o){o(222);var r=o(3)(o(173),o(245),null,null);t.exports=r.exports},232:function(t,e,o){o(221);var r=o(3)(o(174),o(241),null,null);t.exports=r.exports},233:function(t,e,o){var r=o(3)(o(175),o(243),null,null);t.exports=r.exports},234:function(t,e,o){var r=o(3)(o(177),o(244),null,null);t.exports=r.exports},235:function(t,e,o){o(220);var r=o(3)(o(178),o(240),null,null);t.exports=r.exports},236:function(t,e,o){var r=o(3)(o(179),o(246),null,null);t.exports=r.exports},237:function(t,e,o){var r=o(3)(o(180),o(238),null,null);t.exports=r.exports},238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-xs-6 col-xs-offset-3 pushed"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"company"}},[t._v("Company")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"form-control",attrs:{type:"text",input:"company"},domProps:{value:t.company},on:{input:[function(e){e.target.composing||(t.company=e.target.value)},t.checkCompany]}})]),t._v(" "),t.companyApproved?o("div",[o("button",{staticClass:"btn btn-default btn-block",on:{click:t.signIn}},[t._v("\n      Sign in with "),o("i",{staticClass:"fa fa-google"}),t._v("oogle\n    ")])]):t._e()])},staticRenderFns:[]}},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.value?o("p",[o("b",[t._v(t._s(t.label)+":")]),t._v(" "+t._s(t.value))]):t._e()},staticRenderFns:[]}},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.room?o("div",{staticClass:"room-view"},[o("h3",[t._v(t._s(t.room.title)+" "),o("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"room-list"},tag:"button"}},[t._v("Back")])],1),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"col-xs-3"},[o("app-room-info-field",{attrs:{label:"Description",value:t.room.description}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Indoor",value:t.room.indoor?"Yes":"Out"}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Place",value:t.room.place.name}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Time",value:t._f("formattedDate")(t.room.timeArranged)}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Comment",value:t.room.comment}}),t._v(" "),o("hr"),t._v(" "),t.room.hostId===t.ownUid?o("button",{staticClass:"btn btn-success btn-block",domProps:{textContent:t._s(t.room.locked?"Unlock":"Lock")},on:{click:t.toggleRoomLock}}):t._e(),t._v(" "),o("br"),t._v(" "),t.room.hostId===t.ownUid?o("button",{staticClass:"btn btn-danger btn-block",on:{click:t.removeRoom}},[t._v("Remove room")]):t._e()],1),t._v(" "),o("div",{class:t.room.indoor?"col-xs-6":"col-xs-9"},[o("app-chat-window",{attrs:{messages:t.room.discussion}}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-9"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.messageText,expression:"messageText"}],staticClass:"form-control chat-field",attrs:{type:"text"},domProps:{value:t.messageText},on:{keydown:t.keyPressed,input:function(e){e.target.composing||(t.messageText=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-xs-3"},[o("button",{staticClass:"btn btn-primary btn-block",on:{click:t.sendMessage}},[t._v("Send")])])])],1),t._v(" "),t.room.indoor?o("div",{staticClass:"col-xs-3"},[o("div",{staticClass:"row"},t._l(t.room.orderItems,function(e){return o("div",{staticClass:"col-xs-12"},[o("h5",[t._v(t._s(e.name))]),t._v(" "),t._l(e.orders,function(e,r){return o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-8"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"col-xs-2"},[t._v(t._s(e.price))]),t._v(" "),o("div",{staticClass:"col-xs-2 text-center",on:{click:function(e){t.removeItem(r)}}},[t._v("-")])])}),t._v(" "),t.room.locked||e.id!=t.ownUid?t._e():o("app-order-item-adder",{on:{itemAdded:t.itemAdded}}),t._v(" "),o("div",{staticClass:"row total"},[o("div",{staticClass:"col-xs-8"},[t._v("Total:")]),t._v(" "),o("div",{staticClass:"col-xs-2"},[t._v(t._s(t._f("totalFilter")(e.orders)))])])],2)})),t._v(" "),t.presentInOrders||t.room.locked?t._e():o("div",{staticClass:"row"},[o("app-order-item-adder",{on:{itemAdded:t.itemAdded}})],1)]):t._e()]):t._e()},staticRenderFns:[]}},241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"notifications-wrapper"}},t._l(t.notifications,function(e){return o("div",[o("div",{class:"alert alert-"+e.status},[t._v("\n      "+t._s(e.text)+"\n    ")])])}))},staticRenderFns:[]}},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("app-notifications-bar"),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-12"},[o("router-view")],1)])],1)},staticRenderFns:[]}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row order-item-adder"},[o("div",{staticClass:"text-center",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v("+")]),t._v(" "),o("div",{staticClass:"modal fade",attrs:{tabindex:"-1",id:"exampleModal",role:"dialog"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"order-item-name"}},[t._v("Order item name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"order-item-name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"order-item-price"}},[t._v("Order item price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number",id:"order-item-price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){e.preventDefault(),t.addItem(e)}}},[t._v("Add item")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),o("h4",{staticClass:"modal-title"},[t._v("Add item")])])}]}},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-xs-12",attrs:{id:"room-add"}},[o("h3",[t._v("Add new room "),o("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{tag:"button",to:"/"}},[t._v("Back")])],1),t._v(" "),o("form",{staticClass:"form-horizontal"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.room.title,expression:"room.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.room.title},on:{input:function(e){e.target.composing||(t.room.title=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.room.description,expression:"room.description"}],staticClass:"form-control",attrs:{id:"description"},domProps:{value:t.room.description},on:{input:function(e){e.target.composing||(t.room.description=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"time"}},[t._v("Time")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"form-control",attrs:{type:"time",id:"time",step:"300"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"indoor"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.room.indoor,expression:"room.indoor"}],attrs:{type:"checkbox",id:"indoor"},domProps:{checked:Array.isArray(t.room.indoor)?t._i(t.room.indoor,null)>-1:t.room.indoor},on:{__c:function(e){var o=t.room.indoor,r=e.target,s=!!r.checked;if(Array.isArray(o)){var a=t._i(o,null);s?a<0&&(t.room.indoor=o.concat(null)):a>-1&&(t.room.indoor=o.slice(0,a).concat(o.slice(a+1)))}else t.room.indoor=s}}}),t._v(" Indoor\n      ")])]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"place"},[t.room.indoor?t._e():o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"place-google-autocomplete"}},[t._v("Address")]),t._v(" "),o("app-autocomplete-field",{attrs:{inputId:"place-google-autocomplete"},on:{placeChanged:t.googlePlaceChanged}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"place-name"}},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.room.place.name,expression:"room.place.name"}],staticClass:"form-control",attrs:{type:"text",id:"place-name"},domProps:{value:t.room.place.name},on:{input:function(e){e.target.composing||(t.room.place.name=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"place-url"}},[t._v("Website")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.room.place.url,expression:"room.place.url"}],staticClass:"form-control",attrs:{type:"text",id:"place-url"},domProps:{value:t.room.place.url},on:{input:function(e){e.target.composing||(t.room.place.url=e.target.value)}}})]),t._v(" "),t.room.deliveryPrice?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"place-delivery-price"}},[t._v("Delivery price, UAH")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.room.deliveryPrice,expression:"room.deliveryPrice"}],staticClass:"form-control",attrs:{type:"number",id:"place-delivery-price"},domProps:{value:t.room.deliveryPrice},on:{input:function(e){e.target.composing||(t.room.deliveryPrice=e.target.value)},blur:function(e){t.$forceUpdate()}}})]):t._e()]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comment"}},[t._v("Comment")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.room.comment,expression:"room.comment"}],staticClass:"form-control",attrs:{id:"comment",rows:"4"},domProps:{value:t.room.comment},on:{input:function(e){e.target.composing||(t.room.comment=e.target.value)}}})]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"col-xs-4 col-xs-offset-4"},[o("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){e.preventDefault(),t.submitForm(e)}}},[t._v("Add")])])])])},staticRenderFns:[]}},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"well chat-window"},t._l(t.messages,function(e){return o("p",[o("b",[t._v(t._s(e.userName)+" ("+t._s(t._f("timeFormatted")(e.time))+"):")]),t._v(" "+t._s(e.text))])}))},staticRenderFns:[]}},246:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rooms-list"},[o("h3",[t._v("Rooms list "),o("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"room-add"},tag:"button"}},[t._v("Add")])],1),t._v(" "),o("hr"),t._v(" "),t._l(t.rooms,function(e,r){return o("router-link",{key:r,staticClass:"panel panel-primary",attrs:{tag:"div",to:{name:"room-view",params:{id:e[".key"]}}}},[o("div",{staticClass:"panel-body"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("app-room-info-field",{attrs:{label:"Description",value:e.description}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Indoor",value:e.indoor?"Indoor":"Out"}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Place",value:e.place.name}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Time",value:t._f("formattedDate")(e.timeArranged)}}),t._v(" "),o("app-room-info-field",{attrs:{label:"Comment",value:e.comment}})],1)])})],2)},staticRenderFns:[]}},247:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.googleValue,expression:"googleValue"}],ref:"input",staticClass:"form-control",attrs:{type:"text",id:t.inputId},domProps:{value:t.googleValue},on:{input:function(e){e.target.composing||(t.googleValue=e.target.value)}}})},staticRenderFns:[]}},252:function(t,e){}},[169]);
//# sourceMappingURL=app.facbc3f2003be8e0a432.js.map