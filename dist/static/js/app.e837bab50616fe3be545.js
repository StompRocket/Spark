webpackJsonp([1],{106:function(s,e,t){"use strict";var a=t(341),n=t.n(a),i=t(343),r=t.n(i),o=t(357),l=t.n(o),u=t(20),c=t.n(u),d=t(388),j=(t.n(d),t(389)),m=t.n(j),h=(t(376),t(381)),p=t(0);e.a={name:"app",data:function(){return{chats:[],chatID:this.$route.params.id,messages:[],newMessage:"",loading:!0,chatTitle:null}},components:{Slideout:m.a},created:function(){var s=this;c.a.auth().onAuthStateChanged(function(e){if(e){var t=void 0,a=void 0;t=e.displayName,e.email,e.photoURL,e.emailVerified,a=e.uid,console.log(t,a),c.a.database().ref("/users/"+a).on("value",function(e){var t=!0,a=!1,n=void 0;try{for(var i,o=l()(r()(e.val()));!(t=(i=o.next()).done);t=!0){var u=i.value;u.id&&s.chats.push(u)}}catch(s){a=!0,n=s}finally{try{!t&&o.return&&o.return()}finally{if(a)throw n}}s.loading=!1}),s.$route.params.id&&s.loadChat()}else s.$router.replace("/")})},methods:{isMine:function(s){console.log(s);var e=c.a.auth().currentUser,t=e.uid;e.displayName;return!!s.sender.uid&&(s.sender.uid===t&&(console.log(s.sender.uid,t),!0))},open:function(){console.log("slideoutOpen")},closeSlider:function(){this.$children[0].slideout.close()},loadChat:function(){var s=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route.params.id;console.log("loading "+e);var t=c.a.auth().currentUser,a=t.uid;t.displayName;this.$children[0].slideout.close(),this.loading=!0,this.messages=[];var n=document.getElementById("messages");c.a.database().ref("chats/"+e).on("value",function(t){if(t.val()){s.chatTitle=t.val().title,c.a.database().ref("users/"+a+"/"+e).set({title:t.val().title,id:e});c.a.database().ref("chats/"+e+"/mesages/").on("child_added",function(e){s.messages.push(e.val()),n.scrollTop=n.scrollHeight,s.scrollBottom(),s.loading=!1})}else s.$router.replace("/c/")})},scrollBottom:function(){var s=document.getElementById("messages");setTimeout(function(){s.scrollTop=s.scrollHeight},500)},richTextParse:function(s){return h(s,{defaultProtocol:"https"})},send:function(){var s=this.$route.params.id,e=n()(p().utc()),t=c.a.auth().currentUser,a=c.a.database().ref("chats/"+s+"/mesages/").push(),i=void 0,r=void 0,o=void 0;null!=t&&(i=t.displayName,t.email,r=t.photoURL,t.emailVerified,o=t.uid),a.set({sender:{name:i,image:r,time:e,uid:o},text:this.newMessage}),this.newMessage=""}}}},248:function(s,e,t){"use strict";var a=t(395),n=(t.n(a),t(20)),i=new n.auth.GoogleAuthProvider;e.a={name:"login",created:function(){var s=this;n.auth().onAuthStateChanged(function(e){e&&(console.log("loggedIn"),s.$router.push("/c/"))})},methods:{login:function(){n.auth().signInWithRedirect(i)}}}},249:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(62),n=t(251),i=t(338),r=t(20),o=void 0,l={apiKey:"AIzaSyC33Gp6-aRbajLAp22adwWJdIvXX4CVHcM",authDomain:"spark-524b4.firebaseapp.com",databaseURL:"https://spark-524b4.firebaseio.com",projectId:"spark-524b4",storageBucket:"spark-524b4.appspot.com",messagingSenderId:"1043381207552"};r.initializeApp(l),a.a.config.productionTip=!1,r.auth().onAuthStateChanged(function(s){o||(o=new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}}))})},251:function(s,e,t){"use strict";var a=t(65),n=t(337),i=t(42),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports},252:function(s,e){},254:function(s,e){},337:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},338:function(s,e,t){"use strict";var a=t(62),n=t(339),i=t(340),r=t(394),o=t(20),l=t.n(o);a.a.use(n.a);var u=new n.a({routes:[{path:"/",name:"Login",component:r.a},{path:"/c/",name:"app",component:i.a,meta:{requiresAuth:!0},params:{id:!1}},{path:"/c/:id",name:"appWithChat",component:i.a,meta:{requiresAuth:!0},params:{id:!1}}]});u.beforeEach(function(s,e,t){var a=s.matched.some(function(s){return s.meta.requiresAuth}),n=l.a.auth().currentUser;console.log("requiresAuth: "+a+" user: "+n),a&&!n?t("/"):t()}),e.a=u},340:function(s,e,t){"use strict";var a=t(106),n=t(393),i=t(42),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports},387:function(s,e,t){function a(s){return t(n(s))}function n(s){var e=i[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}var i={"./af":125,"./af.js":125,"./ar":126,"./ar-dz":127,"./ar-dz.js":127,"./ar-kw":128,"./ar-kw.js":128,"./ar-ly":129,"./ar-ly.js":129,"./ar-ma":130,"./ar-ma.js":130,"./ar-sa":131,"./ar-sa.js":131,"./ar-tn":132,"./ar-tn.js":132,"./ar.js":126,"./az":133,"./az.js":133,"./be":134,"./be.js":134,"./bg":135,"./bg.js":135,"./bm":136,"./bm.js":136,"./bn":137,"./bn.js":137,"./bo":138,"./bo.js":138,"./br":139,"./br.js":139,"./bs":140,"./bs.js":140,"./ca":141,"./ca.js":141,"./cs":142,"./cs.js":142,"./cv":143,"./cv.js":143,"./cy":144,"./cy.js":144,"./da":145,"./da.js":145,"./de":146,"./de-at":147,"./de-at.js":147,"./de-ch":148,"./de-ch.js":148,"./de.js":146,"./dv":149,"./dv.js":149,"./el":150,"./el.js":150,"./en-au":151,"./en-au.js":151,"./en-ca":152,"./en-ca.js":152,"./en-gb":153,"./en-gb.js":153,"./en-ie":154,"./en-ie.js":154,"./en-il":155,"./en-il.js":155,"./en-nz":156,"./en-nz.js":156,"./eo":157,"./eo.js":157,"./es":158,"./es-do":159,"./es-do.js":159,"./es-us":160,"./es-us.js":160,"./es.js":158,"./et":161,"./et.js":161,"./eu":162,"./eu.js":162,"./fa":163,"./fa.js":163,"./fi":164,"./fi.js":164,"./fo":165,"./fo.js":165,"./fr":166,"./fr-ca":167,"./fr-ca.js":167,"./fr-ch":168,"./fr-ch.js":168,"./fr.js":166,"./fy":169,"./fy.js":169,"./gd":170,"./gd.js":170,"./gl":171,"./gl.js":171,"./gom-latn":172,"./gom-latn.js":172,"./gu":173,"./gu.js":173,"./he":174,"./he.js":174,"./hi":175,"./hi.js":175,"./hr":176,"./hr.js":176,"./hu":177,"./hu.js":177,"./hy-am":178,"./hy-am.js":178,"./id":179,"./id.js":179,"./is":180,"./is.js":180,"./it":181,"./it.js":181,"./ja":182,"./ja.js":182,"./jv":183,"./jv.js":183,"./ka":184,"./ka.js":184,"./kk":185,"./kk.js":185,"./km":186,"./km.js":186,"./kn":187,"./kn.js":187,"./ko":188,"./ko.js":188,"./ky":189,"./ky.js":189,"./lb":190,"./lb.js":190,"./lo":191,"./lo.js":191,"./lt":192,"./lt.js":192,"./lv":193,"./lv.js":193,"./me":194,"./me.js":194,"./mi":195,"./mi.js":195,"./mk":196,"./mk.js":196,"./ml":197,"./ml.js":197,"./mn":198,"./mn.js":198,"./mr":199,"./mr.js":199,"./ms":200,"./ms-my":201,"./ms-my.js":201,"./ms.js":200,"./mt":202,"./mt.js":202,"./my":203,"./my.js":203,"./nb":204,"./nb.js":204,"./ne":205,"./ne.js":205,"./nl":206,"./nl-be":207,"./nl-be.js":207,"./nl.js":206,"./nn":208,"./nn.js":208,"./pa-in":209,"./pa-in.js":209,"./pl":210,"./pl.js":210,"./pt":211,"./pt-br":212,"./pt-br.js":212,"./pt.js":211,"./ro":213,"./ro.js":213,"./ru":214,"./ru.js":214,"./sd":215,"./sd.js":215,"./se":216,"./se.js":216,"./si":217,"./si.js":217,"./sk":218,"./sk.js":218,"./sl":219,"./sl.js":219,"./sq":220,"./sq.js":220,"./sr":221,"./sr-cyrl":222,"./sr-cyrl.js":222,"./sr.js":221,"./ss":223,"./ss.js":223,"./sv":224,"./sv.js":224,"./sw":225,"./sw.js":225,"./ta":226,"./ta.js":226,"./te":227,"./te.js":227,"./tet":228,"./tet.js":228,"./tg":229,"./tg.js":229,"./th":230,"./th.js":230,"./tl-ph":231,"./tl-ph.js":231,"./tlh":232,"./tlh.js":232,"./tr":233,"./tr.js":233,"./tzl":234,"./tzl.js":234,"./tzm":235,"./tzm-latn":236,"./tzm-latn.js":236,"./tzm.js":235,"./ug-cn":237,"./ug-cn.js":237,"./uk":238,"./uk.js":238,"./ur":239,"./ur.js":239,"./uz":240,"./uz-latn":241,"./uz-latn.js":241,"./uz.js":240,"./vi":242,"./vi.js":242,"./x-pseudo":243,"./x-pseudo.js":243,"./yo":244,"./yo.js":244,"./zh-cn":245,"./zh-cn.js":245,"./zh-hk":246,"./zh-hk.js":246,"./zh-tw":247,"./zh-tw.js":247};a.keys=function(){return Object.keys(i)},a.resolve=n,s.exports=a,a.id=387},388:function(s,e){},393:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"app page"},[t("Slideout",{attrs:{id:"Slideout",menu:"#menu",panel:"#panel",toggleSelectors:[".toggle-button"]},on:{"on-open":s.open}},[t("nav",{attrs:{id:"menu"}},[t("h2",[s._v("Chats")]),s._v(" "),t("div",{staticClass:"chats"},s._l(s.chats,function(e){return t("div",{key:e.id,staticClass:"chatItem"},[t("a",{attrs:{href:"/#/c/"+e.id},on:{click:function(t){s.loadChat(e.id)}}},[t("p",{staticClass:"name"},[s._v(s._s(e.title))])])])}))]),s._v(" "),t("main",{attrs:{id:"panel"}},[t("nav",[t("button",{staticClass:"toggle-button"},[t("i",{staticClass:"material-icons"},[s._v("menu")])]),s._v(" "),t("h1",[s._v("Spark")]),s._v(" "),t("h2",[s._v(s._s(s.chatTitle))])]),s._v(" "),t("div",{staticClass:"messages",attrs:{id:"messages"},on:{click:s.closeSlider}},s._l(s.messages,function(e){return t("div",{staticClass:"message"},[t("div",{staticClass:"text",class:{mine:s.isMine(e)}},[t("p",{staticClass:"messageText",domProps:{innerHTML:s._s(s.richTextParse(e.text))}})]),s._v(" "),s.isMine(e)?s._e():t("p",{staticClass:"messageSender"},[s._v(s._s(e.sender.name))])])})),s._v(" "),t("form",{staticClass:"newMessage",on:{click:s.closeSlider,submit:function(e){return e.preventDefault(),s.send(e)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.newMessage,expression:"newMessage"}],attrs:{autocomplete:"off",type:"text",name:"newMessage",placeholder:"Type your message here then press enter to send"},domProps:{value:s.newMessage},on:{input:function(e){e.target.composing||(s.newMessage=e.target.value)}}})])])])],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},394:function(s,e,t){"use strict";var a=t(248),n=t(396),i=t(42),r=i(a.a,n.a,!1,null,null,null);e.a=r.exports},395:function(s,e){},396:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login page"},[t("div",{staticClass:"loginStack"},[t("h1",[s._v("Login")]),s._v(" "),t("div",{staticClass:"loginButtons"},[t("button",{on:{click:s.login}},[s._v("Login With Google")])])])])},n=[],i={render:a,staticRenderFns:n};e.a=i},65:function(s,e,t){"use strict";var a=t(252),n=(t.n(a),t(254));t.n(n),t(20);e.a={name:"app"}}},[249]);
//# sourceMappingURL=app.e837bab50616fe3be545.js.map