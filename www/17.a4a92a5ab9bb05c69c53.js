(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1U7r":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("mrSG"),r=n("fXoL"),o=n("TEn/"),a=n("QTu/");let s=(()=>{class t{constructor(t,e,n){this.modalController=t,this.navCtrl=e,this.cookiesService=n,this.history=[],this.modal=!1}ngOnInit(){this.titleHeader=this.title}back(){return Object(i.a)(this,void 0,void 0,function*(){this.slugValue&&this.cookiesService.removeCookie(this.slugValue),yield this.navCtrl.back()})}closeModal(){return Object(i.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.J),r.Lb(o.K),r.Lb(a.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-minheader"]],inputs:{title:"title",slugValue:"slugValue",modal:"modal"},decls:12,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],[1,"fondoCool"],[1,"ion-margin-top","ion-margin-bottom"],["color","light",3,"click"],["name","arrow-back"],["size","8",1,"ion-margin-top","ion-margin-bottom"],["color","light",1,"titulo1"],["src","assets/logo.png",1,"logo-2"]],template:function(t,e){1&t&&(r.Ob(0,"ion-toolbar",0),r.Ob(1,"div",1),r.Ob(2,"ion-row"),r.Ob(3,"ion-col",2),r.Ob(4,"ion-buttons"),r.Ob(5,"ion-button",3),r.Wb("click",function(){return e.modal?e.closeModal():e.back()}),r.Mb(6,"ion-icon",4),r.Nb(),r.Nb(),r.Nb(),r.Ob(7,"ion-col",5),r.Ob(8,"ion-text",6),r.nc(9),r.Nb(),r.Nb(),r.Ob(10,"ion-col"),r.Mb(11,"img",7),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.zb(9),r.oc(e.titleHeader))},directives:[o.F,o.B,o.l,o.e,o.d,o.s,o.C],styles:[".max-icon-bar[_ngcontent-%COMP%]{max-height:100px}.content[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{position:sticky}"]}),t})()},TjVE:function(t,e,n){"use strict";n.r(e),n.d(e,"EventosPageModule",function(){return L});var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("Wgwc"),u=n.n(c),l=n("fXoL"),d=n("4WDQ"),h=n("1Ldg");let b=(()=>{class t{constructor(t,e){this.axios=t,this.globalSer=e}getEvents(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.axios.getData("/events",t);return e&&e.success?e.data.events:this.globalSer.altResponse(e)})}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(h.a),l.Sb(d.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n("1U7r"),m=n("13Ln"),g=n.n(m),v=(n("4HKe"),n("QgiU")),p=n.n(v),y=n("OmbT");function O(t,e){if(1&t){const t=l.Pb();l.Ob(0,"ion-card",1),l.Wb("click",function(){return l.hc(t),l.Yb().showEvent()}),l.Ob(1,"ion-card-content",2),l.Ob(2,"ion-row"),l.Ob(3,"ion-col",3),l.Mb(4,"ion-img",4),l.Nb(),l.Ob(5,"ion-col",5),l.Ob(6,"ion-text",6),l.Ob(7,"h3"),l.nc(8),l.Nb(),l.Nb(),l.Ob(9,"ion-text"),l.Ob(10,"b"),l.nc(11,"Fecha:"),l.Nb(),l.nc(12),l.Nb(),l.Mb(13,"br"),l.Ob(14,"ion-text",7),l.Ob(15,"i",8),l.nc(16,"Toca para m\xe1s informaci\xf3n."),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&t){const t=l.Yb();l.zb(4),l.bc("src","/assets/icon/evento_lista.svg"),l.zb(4),l.oc(t.eventData.title?t.eventData.title:""),l.zb(4),l.pc(" ",t.eventData.date?t.eventData.date:"","")}}let $=(()=>{class t{constructor(t){this.alertController=t,this.eventData={_id:null,title:null,user:null,description:null,date:null,initHour:null,endHour:null},u.a.extend(g.a),u.a.extend(p.a)}ngOnInit(){this.data&&(this.eventData._id=this.data._id,this.eventData.title=this.data.title,this.eventData.user=this.data.user,this.eventData.description=this.data.description,this.eventData.date=u()(this.data.date).locale("es").format("dddd, DD [de] MMMM [de] YYYY"),this.eventData.initHour=u()(`${this.data.date} ${this.eventData.initHour}`).format("hh:mm a"),this.eventData.endHour=this.data.endHour?u()(`${this.data.date} ${this.data.endHour}`).format("hh:mm a"):null)}showEvent(){return Object(s.a)(this,void 0,void 0,function*(){const t=this.eventData.description?Object(y.l)(this.eventData.description):null,e=yield this.alertController.create({header:this.eventData.title,subHeader:"Por: "+(this.eventData.user?`${this.eventData.user.names} ${this.eventData.user.lastNames}`:"An\xf3nimo"),message:`\n        <b>Fecha:</b> ${this.eventData.date}<br/>\n        <b>Hora de inicio:</b> ${this.eventData.initHour}<br/>\n        ${this.eventData.endHour?`<b>Hora fin:</b> ${this.eventData.endHour}<br/>`:""}\n        <b>Descripci\xf3n:</b><br>\n        ${t||"No especificada."}<br/>\n      `,buttons:["Ok"]});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(o.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-eventcard"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","ion-no-padding ion-no-margin ion-margin-start ion-margin-end ion-margin-bottom",3,"click",4,"ngIf"],[1,"ion-no-padding","ion-no-margin","ion-margin-start","ion-margin-end","ion-margin-bottom",3,"click"],[1,"ion-no-margin","ion-no-padding"],["size","3"],[1,"pictureIcon",3,"src"],["size","9"],["color","primary",1,"ion-margin-top","ion-margin-bottom"],[1,"ion-margin-top"],[1,"toSmall"]],template:function(t,e){1&t&&l.lc(0,O,17,3,"ion-card",0),2&t&&l.bc("ngIf",e.eventData._id)},directives:[i.i,o.f,o.g,o.B,o.l,o.t,o.C],styles:[""]}),t})();function D(t,e){1&t&&l.Mb(0,"ion-icon",8)}function M(t,e){1&t&&l.Mb(0,"ion-icon",9)}function w(t,e){if(1&t){const t=l.Pb();l.Ob(0,"ion-card"),l.Ob(1,"ion-card-content"),l.Ob(2,"ion-item"),l.Ob(3,"ion-label",10),l.nc(4,"Ordenar por:"),l.Nb(),l.Ob(5,"ion-input",11),l.Wb("click",function(){return l.hc(t),l.Yb().setOrderData()}),l.Nb(),l.Nb(),l.Ob(6,"ion-item"),l.Ob(7,"ion-label",10),l.nc(8,"A partir de:"),l.Nb(),l.Ob(9,"ion-datetime",12),l.Wb("ngModelChange",function(e){return l.hc(t),l.Yb().queryParams.initDate=e}),l.Nb(),l.Nb(),l.Ob(10,"ion-item"),l.Ob(11,"ion-label",10),l.nc(12,"Hasta:"),l.Nb(),l.Ob(13,"ion-datetime",13),l.Wb("ngModelChange",function(e){return l.hc(t),l.Yb().queryParams.endDate=e}),l.Nb(),l.Nb(),l.Ob(14,"ion-row",14),l.Ob(15,"ion-col",15),l.Ob(16,"ion-button",16),l.Wb("click",function(){return l.hc(t),l.Yb().resetQueryParams()}),l.Mb(17,"ion-icon",17),l.Ob(18,"ion-text"),l.nc(19,"Limpiar"),l.Nb(),l.Nb(),l.Ob(20,"ion-button",18),l.Wb("click",function(){return l.hc(t),l.Yb().getEventsList()}),l.Mb(21,"ion-icon",19),l.Ob(22,"ion-text"),l.nc(23,"Aplicar"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&t){const t=l.Yb();l.zb(5),l.bc("readonly",!0)("value",-1===t.queryParams.value?"Pr\xf3ximas primero":"Ant\xedguas primero"),l.zb(4),l.bc("ngModel",t.queryParams.initDate),l.zb(4),l.bc("ngModel",t.queryParams.endDate)}}function N(t,e){if(1&t&&(l.Ob(0,"ion-list"),l.Mb(1,"app-eventcard",21),l.Nb()),2&t){const t=e.$implicit;l.zb(1),l.bc("data",t)}}function S(t,e){if(1&t&&(l.Ob(0,"div"),l.lc(1,N,2,1,"ion-list",20),l.Nb()),2&t){const t=l.Yb();l.zb(1),l.bc("ngForOf",t.events)}}function Y(t,e){1&t&&(l.Ob(0,"ion-card",22),l.Ob(1,"ion-text",23),l.Ob(2,"p"),l.Mb(3,"ion-icon",24),l.nc(4," No se encontraron eventos."),l.Nb(),l.Nb(),l.Nb())}const k=[{path:"",component:(()=>{class t{constructor(t,e,n,i,r,o,a){this.activateRoute=t,this.alertCtrl=e,this.globalSer=n,this.eventsService=i,this.navCtrl=r,this.modalController=o,this.router=a,this.events=[],this.showFilter=!1,this.queryParams={input:"date",value:-1,initDate:u()().format("YYYY-MM-DD"),endDate:null}}ngOnInit(){return Object(s.a)(this,void 0,void 0,function*(){yield this.getEventsList()})}getEventsList(){return Object(s.a)(this,void 0,void 0,function*(){this.showFilter&&(this.showFilter=!1),yield this.globalSer.presentLoading();const t=yield this.eventsService.getEvents(this.queryParams);t&&!t.error?(this.events=t,yield this.globalSer.dismissLoading()):t&&t.error?(this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}setShowFilter(){this.showFilter=!this.showFilter}setOrderData(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"Seleccione",inputs:[{name:"order-asc",type:"radio",label:"Ant\xedguas primero",value:1,checked:1===this.queryParams.value},{name:"order-desc",type:"radio",label:"Pr\xf3ximas primero",value:-1,checked:-1===this.queryParams.value}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Ok",handler:t=>{this.queryParams.value=t}}]});yield t.present()})}setDate(t){this.queryParams[t]&&(this.queryParams[t]=u()(this.queryParams[t]).format("YYYY-MM-DD"))}resetQueryParams(){this.queryParams.input="date",this.queryParams.value=-1,this.queryParams.initDate=u()().format("YYYY-MM-DD"),this.queryParams.endDate=null}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(a.a),l.Lb(o.a),l.Lb(d.a),l.Lb(b),l.Lb(o.K),l.Lb(o.J),l.Lb(a.g))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-eventos"]],decls:13,vars:5,consts:[["title","Eventos"],[1,"ion-margin"],["color","light",3,"click"],["name","filter-outline","slot","start",4,"ngIf"],["name","close-outline","slot","start",4,"ngIf"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noEvents",""],["name","filter-outline","slot","start"],["name","close-outline","slot","start"],["position","floating","color","medium"],[3,"readonly","value","click"],["displayFormat","DD/MM/YYYY","min","2020-01-01","doneText","Listo","cancelText","Cancelar","onchange","setDate('initDate')",3,"ngModel","ngModelChange"],["displayFormat","DD/MM/YYYY","min","2020-01-01","doneText","Listo","cancelText","Cancelar","onchange","setDate('endDate')",3,"ngModel","ngModelChange"],[1,"ion-margin-top"],["size","12",1,"ion-text-center"],["color","light",1,"ion-text-center",3,"click"],["name","trash-outline","slot","start"],["color","primary",1,"ion-text-center",3,"click"],["name","checkmark-outline","slot","start"],[4,"ngFor","ngForOf"],[3,"data"],[1,"ion-no-padding"],["color","medium",1,"ion-text-center"],["name","alert-circle-outline"]],template:function(t,e){if(1&t&&(l.Ob(0,"ion-content"),l.Ob(1,"ion-header"),l.Mb(2,"app-minheader",0),l.Nb(),l.Ob(3,"div",1),l.Ob(4,"ion-button",2),l.Wb("click",function(){return e.setShowFilter()}),l.lc(5,D,1,0,"ion-icon",3),l.lc(6,M,1,0,"ion-icon",4),l.Ob(7,"ion-text"),l.nc(8,"Filtrar"),l.Nb(),l.Nb(),l.Nb(),l.lc(9,w,24,4,"ion-card",5),l.lc(10,S,2,1,"div",6),l.lc(11,Y,5,0,"ng-template",null,7,l.mc),l.Nb()),2&t){const t=l.gc(12);l.zb(5),l.bc("ngIf",!e.showFilter),l.zb(1),l.bc("ngIf",e.showFilter),l.zb(3),l.bc("ngIf",e.showFilter),l.zb(1),l.bc("ngIf",e.events&&e.events.length>0)("ngIfElse",t)}},directives:[o.m,o.r,f.a,o.d,i.i,o.C,o.s,o.f,o.g,o.v,o.w,o.u,o.O,o.n,o.N,r.e,r.f,o.B,o.l,i.h,o.x,$],styles:[""]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({imports:[[a.i.forChild(k)],a.i]}),t})();var C=n("j1ZV");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({imports:[[i.b,r.a,o.G,x,C.a]]}),t})()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",o="week",a="month",s="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},f={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+b(i,2,"0")+":"+b(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),o=n-r<0,s=e.clone().add(i+(o?-1:1),a);return+(-(i+(n-r)/(o?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:c,w:o,d:r,D:u,h:i,m:n,s:e,ms:t,Q:s}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=h;var v=function(t){return t instanceof $},p=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},y=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},O=f;O.l=p,O.i=v,O.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function h(t){this.$L=p(t.locale,null,!0),this.parse(t)}var b=h.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return O},b.isValid=function(){return!("Invalid Date"===this.$d.toString())},b.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return y(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<y(t)},b.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,s){var l=this,d=!!O.u(s)||s,h=O.p(t),b=function(t,e){var n=O.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(r)},f=function(t,e){return O.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},m=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case c:return d?b(1,0):b(31,11);case a:return d?b(1,g):b(0,g+1);case o:var y=this.$locale().weekStart||0,$=(m<y?m+7:m)-y;return b(d?v-$:v+(6-$),g);case r:case u:return f(p+"Hours",0);case i:return f(p+"Minutes",1);case n:return f(p+"Seconds",2);case e:return f(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(o,s){var l,d=O.p(o),h="set"+(this.$u?"UTC":""),b=(l={},l[r]=h+"Date",l[u]=h+"Date",l[a]=h+"Month",l[c]=h+"FullYear",l[i]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],f=d===r?this.$D+(s-this.$W):s;if(d===a||d===c){var m=this.clone().set(u,1);m.$d[b](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[O.p(t)]()},b.add=function(t,s){var u,l=this;t=Number(t);var d=O.p(s),h=function(e){var n=y(l);return O.w(n.date(n.date()+Math.round(e*t)),l)};if(d===a)return this.set(a,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return h(1);if(d===o)return h(7);var b=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[d]||1,f=this.$d.getTime()+t*b;return O.w(f,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),r=this.$locale(),o=this.$H,a=this.$m,s=this.$M,c=r.weekdays,u=r.months,l=function(t,i,r,o){return t&&(t[i]||t(e,n))||r[i].substr(0,o)},h=function(t){return O.s(o%12||12,t,"0")},b=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:l(r.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:O.s(o,2,"0"),h:h(1),hh:h(2),a:b(o,a,!0),A:b(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return n.replace(d,function(t,e){return e||f[t]||i.replace(":","")})},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(t,u,l){var d,h=O.p(u),b=y(t),f=6e4*(b.utcOffset()-this.utcOffset()),m=this-b,g=O.m(this,b);return g=(d={},d[c]=g/12,d[a]=g,d[s]=g/3,d[o]=(m-f)/6048e5,d[r]=(m-f)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[h]||m,l?g:O.a(g)},b.daysInMonth=function(){return this.endOf(a).$D},b.$locale=function(){return g[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=p(t,e,!0);return i&&(n.$L=i),n},b.clone=function(){return O.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},h}(),D=$.prototype;return y.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",u]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,$,y),t.$i=!0),y},y.locale=p,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=g[m],y.Ls=g,y.p={},y}()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ofXK"),r=n("TEn/"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[i.b,r.G]]}),t})()}}]);