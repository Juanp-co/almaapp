(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"13Ln":function(t,e,n){t.exports=function(){"use strict";var t,e,n=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,i=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,o={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},s=function(t){return t instanceof d},r=function(t,e,n){return new d(t,n,e.$l)},a=function(t){return e.p(t)+"s"},c=function(t){return t<0},l=function(t){return c(t)?Math.ceil(t):Math.floor(t)},u=function(t,e){return t?c(t)?{negative:!0,format:""+function(t){return Math.abs(t)}(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},d=function(){function c(t,e,n){var s=this;if(this.$d={},this.$l=n,e)return r(t*o[a(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(e){s.$d[a(e)]=t[e]}),this.calMilliseconds(),this;if("string"==typeof t){var c=t.match(i);if(c)return this.$d.years=c[2],this.$d.months=c[3],this.$d.weeks=c[4],this.$d.days=c[5],this.$d.hours=c[6],this.$d.minutes=c[7],this.$d.seconds=c[8],this.calMilliseconds(),this}return this}var d=c.prototype;return d.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(e,n){return e+(t.$d[n]||0)*o[n]},0)},d.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=l(t/31536e6),this.$d.months=l((t%=31536e6)/2592e6),this.$d.days=l((t%=2592e6)/864e5),this.$d.hours=l((t%=864e5)/36e5),this.$d.minutes=l((t%=36e5)/6e4),this.$d.seconds=l((t%=6e4)/1e3),this.$d.milliseconds=t%=1e3},d.toISOString=function(){var t=u(this.$d.years,"Y"),e=u(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=u(n,"D"),o=u(this.$d.hours,"H"),s=u(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var a=u(r,"S"),c=(t.negative||e.negative||i.negative||o.negative||s.negative||a.negative?"-":"")+"P"+t.format+e.format+i.format+(o.format||s.format||a.format?"T":"")+o.format+s.format+a.format;return"P"===c||"-P"===c?"P0D":c},d.toJSON=function(){return this.toISOString()},d.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",o={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(n,function(t,e){return e||String(o[t])})},d.as=function(t){return this.$ms/o[a(t)]},d.get=function(t){var e=this.$ms,n=a(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?l(e/o[n]):this.$d[n],0===e?0:e},d.add=function(t,e,n){var i;return i=e?t*o[a(e)]:s(t)?t.$ms:r(t,this).$ms,r(this.$ms+i*(n?-1:1),this)},d.subtract=function(t,e){return this.add(t,e,!0)},d.locale=function(t){var e=this.clone();return e.$l=t,e},d.clone=function(){return r(this.$ms,this)},d.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},c}();return function(n,i,o){t=o,e=o().$utils(),o.duration=function(t,e){var n=o.locale();return r(t,{$l:n},e)},o.isDuration=s;var a=i.prototype.add,c=i.prototype.subtract;i.prototype.add=function(t,e){return s(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)},i.prototype.subtract=function(t,e){return s(t)&&(t=t.asMilliseconds()),c.bind(this)(t,e)}}}()},"1U7r":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),o=n("fXoL"),s=n("TEn/"),r=n("QTu/");let a=(()=>{class t{constructor(t,e,n){this.modalController=t,this.navCtrl=e,this.cookiesService=n,this.history=[],this.modal=!1}ngOnInit(){this.titleHeader=this.title}back(){return Object(i.a)(this,void 0,void 0,function*(){this.slugValue&&this.cookiesService.removeCookie(this.slugValue),yield this.navCtrl.back()})}closeModal(){return Object(i.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(s.J),o.Lb(s.K),o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-minheader"]],inputs:{title:"title",slugValue:"slugValue",modal:"modal"},decls:12,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],[1,"fondoCool"],[1,"ion-margin-top","ion-margin-bottom"],["color","light",3,"click"],["name","arrow-back"],["size","8",1,"ion-margin-top","ion-margin-bottom"],["color","light",1,"titulo1"],["src","assets/logo.png",1,"logo-2"]],template:function(t,e){1&t&&(o.Ob(0,"ion-toolbar",0),o.Ob(1,"div",1),o.Ob(2,"ion-row"),o.Ob(3,"ion-col",2),o.Ob(4,"ion-buttons"),o.Ob(5,"ion-button",3),o.Wb("click",function(){return e.modal?e.closeModal():e.back()}),o.Mb(6,"ion-icon",4),o.Nb(),o.Nb(),o.Nb(),o.Ob(7,"ion-col",5),o.Ob(8,"ion-text",6),o.nc(9),o.Nb(),o.Nb(),o.Ob(10,"ion-col"),o.Mb(11,"img",7),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&t&&(o.zb(9),o.oc(e.titleHeader))},directives:[s.F,s.B,s.l,s.e,s.d,s.s,s.C],styles:[".max-icon-bar[_ngcontent-%COMP%]{max-height:100px}.content[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{position:sticky}"]}),t})()},"4HKe":function(t,e,n){t.exports=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},ordinal:function(t){return t+"\xba"}};return t.locale(e,null,!0),e}(n("Wgwc"))},"4WDQ":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),o=n("fXoL"),s=n("TEn/"),r=n("QTu/");let a=(()=>{class t{constructor(t,e,n,i,o){this.alertCtrl=t,this.loadingCtrl=e,this.navCtrl=n,this.cookieService=i,this.modalController=o}presentAlert(t,e){return Object(i.a)(this,void 0,void 0,function*(){const n=yield this.alertCtrl.create({header:t,message:e,buttons:["OK"]});yield n.present()})}presentLoading(t=null){return Object(i.a)(this,void 0,void 0,function*(){return this.loading=yield this.loadingCtrl.create({message:t||"Cargando..."}),this.loading.present()})}dismissLoading(){return Object(i.a)(this,void 0,void 0,function*(){yield this.loading.dismiss()})}alertConfirm({header:t,message:e,confirmAction:n,rejectAction:o}){return Object(i.a)(this,void 0,void 0,function*(){const i=yield this.alertCtrl.create({header:t||"Confirme",message:e||"\xbfEst\xe1 seguro?",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{o&&o()}},{text:"S\xed",handler:()=>{n&&n()}}]});yield i.present()})}alertWithList({header:t,inputs:e,confirmAction:n,rejectAction:o}){return Object(i.a)(this,void 0,void 0,function*(){const i=yield this.alertCtrl.create({header:t||"Seleccione",inputs:e,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{o&&o()}},{text:"Ok",handler:t=>{n&&n(t)}}]});yield i.present()})}loadModal(t,e={},n=!0,o=null){return Object(i.a)(this,void 0,void 0,function*(){if(t){const i=yield this.modalController.create({component:t,componentProps:e,backdropDismiss:n});if(i.present(),o){const{data:t}=yield i.onWillDismiss();t?o(t):o()}}})}checkSession(){const t=this.cookieService.getCookie("token");return t||this.clearAllData(),!!t}getRole(){const t=this.cookieService.getCookie("data");return t&&null!=t.role?t.role:null}clearAllData(){this.cookieService.removeCookie("token"),this.cookieService.removeCookie("data")}altResponse(t){return Object(i.a)(this,void 0,void 0,function*(){return t&&t.status&&401===t.status?(this.clearAllData(),{error:401}):(yield this.presentAlert("Alerta",t&&t.error?t.error:"Error desconocido."),null)})}errorSession(){return Object(i.a)(this,void 0,void 0,function*(){yield this.presentAlert("Alerta","Disculpe, pero no se encontr\xf3 una sesi\xf3n activa."),yield this.navCtrl.navigateBack(["/"])})}getPagination(t,e){let n=t>0?Math.trunc(t/e):0;return t>0&&t%e>0&&(n+=1),n}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.a),o.Sb(s.I),o.Sb(s.K),o.Sb(r.a),o.Sb(s.J))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,o){return i.fromToBase(t,e,n,o)}n.en.relativeTime=o,i.fromToBase=function(e,i,s,r,a){for(var c,l,u,d=s.$locale().relativeTime||o,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=h.length,m=0;m<b;m+=1){var f=h[m];f.d&&(c=r?n(e).diff(s,f.d,!0):s.diff(e,f.d,!0));var v=(t.rounding||Math.round)(Math.abs(c));if(u=c>0,v<=f.r||!f.r){v<=1&&m>0&&(f=h[m-1]);var g=d[f.l];a&&(v=a(""+v)),l="string"==typeof g?g.replace("%d",v):g(v,i,f.l,u);break}}if(i)return l;var p=u?d.future:d.past;return"function"==typeof p?p(l):p.replace("%s",l)},i.to=function(t,e){return s(t,e,this,!0)},i.from=function(t,e){return s(t,e,this)};var r=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(r(this),t)},i.fromNow=function(t){return this.from(r(this),t)}}}()},TjVE:function(t,e,n){"use strict";n.r(e),n.d(e,"EventosPageModule",function(){return L});var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("Wgwc"),l=n.n(c),u=n("fXoL"),d=n("4WDQ"),h=n("1Ldg");let b=(()=>{class t{constructor(t,e){this.axios=t,this.globalSer=e}getEvents(t){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.axios.getData("/events",t);return e&&e.success?e.data.events:this.globalSer.altResponse(e)})}}return t.\u0275fac=function(e){return new(e||t)(u.Sb(h.a),u.Sb(d.a))},t.\u0275prov=u.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("1U7r"),f=n("13Ln"),v=n.n(f),g=(n("4HKe"),n("QgiU")),p=n.n(g),y=n("OmbT");function M(t,e){if(1&t){const t=u.Pb();u.Ob(0,"ion-card",1),u.Wb("click",function(){return u.hc(t),u.Yb().showEvent()}),u.Ob(1,"ion-card-content",2),u.Ob(2,"ion-row"),u.Ob(3,"ion-col",3),u.Mb(4,"ion-img",4),u.Nb(),u.Ob(5,"ion-col",5),u.Ob(6,"ion-text",6),u.Ob(7,"h3"),u.nc(8),u.Nb(),u.Nb(),u.Ob(9,"ion-text"),u.Ob(10,"b"),u.nc(11,"Fecha:"),u.Nb(),u.nc(12),u.Nb(),u.Mb(13,"br"),u.Ob(14,"ion-text",7),u.Ob(15,"i",8),u.nc(16,"Toca para m\xe1s informaci\xf3n."),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&t){const t=u.Yb();u.zb(4),u.bc("src","/assets/icon/evento_lista.svg"),u.zb(4),u.oc(t.eventData.title?t.eventData.title:""),u.zb(4),u.pc(" ",t.eventData.date?t.eventData.date:"","")}}let O=(()=>{class t{constructor(t){this.alertController=t,this.eventData={_id:null,title:null,user:null,description:null,date:null,initHour:null,endHour:null},l.a.extend(v.a),l.a.extend(p.a)}ngOnInit(){this.data&&(this.eventData._id=this.data._id,this.eventData.title=this.data.title,this.eventData.user=this.data.user,this.eventData.description=this.data.description,this.eventData.date=l()(this.data.date).locale("es").format("dddd, DD [de] MMMM [de] YYYY"),this.eventData.initHour=l()(`${this.data.date} ${this.eventData.initHour}`).format("hh:mm a"),this.eventData.endHour=this.data.endHour?l()(`${this.data.date} ${this.data.endHour}`).format("hh:mm a"):null)}showEvent(){return Object(a.a)(this,void 0,void 0,function*(){const t=this.eventData.description?Object(y.l)(this.eventData.description):null,e=yield this.alertController.create({header:this.eventData.title,subHeader:"Por: "+(this.eventData.user?`${this.eventData.user.names} ${this.eventData.user.lastNames}`:"An\xf3nimo"),message:`\n        <b>Fecha:</b> ${this.eventData.date}<br/>\n        <b>Hora de inicio:</b> ${this.eventData.initHour}<br/>\n        ${this.eventData.endHour?`<b>Hora fin:</b> ${this.eventData.endHour}<br/>`:""}\n        <b>Descripci\xf3n:</b><br>\n        ${t||"No especificada."}<br/>\n      `,buttons:["Ok"]});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(s.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-eventcard"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","ion-no-padding ion-no-margin ion-margin-start ion-margin-end ion-margin-bottom",3,"click",4,"ngIf"],[1,"ion-no-padding","ion-no-margin","ion-margin-start","ion-margin-end","ion-margin-bottom",3,"click"],[1,"ion-no-margin","ion-no-padding"],["size","3"],[1,"pictureIcon",3,"src"],["size","9"],["color","primary",1,"ion-margin-top","ion-margin-bottom"],[1,"ion-margin-top"],[1,"toSmall"]],template:function(t,e){1&t&&u.lc(0,M,17,3,"ion-card",0),2&t&&u.bc("ngIf",e.eventData._id)},directives:[i.i,s.f,s.g,s.B,s.l,s.t,s.C],styles:[""]}),t})();function D(t,e){1&t&&u.Mb(0,"ion-icon",8)}function $(t,e){1&t&&u.Mb(0,"ion-icon",9)}function Y(t,e){if(1&t){const t=u.Pb();u.Ob(0,"ion-card"),u.Ob(1,"ion-card-content"),u.Ob(2,"ion-item"),u.Ob(3,"ion-label",10),u.nc(4,"Ordenar por:"),u.Nb(),u.Ob(5,"ion-input",11),u.Wb("click",function(){return u.hc(t),u.Yb().setOrderData()}),u.Nb(),u.Nb(),u.Ob(6,"ion-item"),u.Ob(7,"ion-label",10),u.nc(8,"A partir de:"),u.Nb(),u.Ob(9,"ion-datetime",12),u.Wb("ngModelChange",function(e){return u.hc(t),u.Yb().queryParams.initDate=e}),u.Nb(),u.Nb(),u.Ob(10,"ion-item"),u.Ob(11,"ion-label",10),u.nc(12,"Hasta:"),u.Nb(),u.Ob(13,"ion-datetime",13),u.Wb("ngModelChange",function(e){return u.hc(t),u.Yb().queryParams.endDate=e}),u.Nb(),u.Nb(),u.Ob(14,"ion-row",14),u.Ob(15,"ion-col",15),u.Ob(16,"ion-button",16),u.Wb("click",function(){return u.hc(t),u.Yb().resetQueryParams()}),u.Mb(17,"ion-icon",17),u.Ob(18,"ion-text"),u.nc(19,"Limpiar"),u.Nb(),u.Nb(),u.Ob(20,"ion-button",18),u.Wb("click",function(){return u.hc(t),u.Yb().getEventsList()}),u.Mb(21,"ion-icon",19),u.Ob(22,"ion-text"),u.nc(23,"Aplicar"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&t){const t=u.Yb();u.zb(5),u.bc("readonly",!0)("value",-1===t.queryParams.value?"Pr\xf3ximas primero":"Ant\xedguas primero"),u.zb(4),u.bc("ngModel",t.queryParams.initDate),u.zb(4),u.bc("ngModel",t.queryParams.endDate)}}function k(t,e){if(1&t&&(u.Ob(0,"ion-list"),u.Mb(1,"app-eventcard",21),u.Nb()),2&t){const t=e.$implicit;u.zb(1),u.bc("data",t)}}function N(t,e){if(1&t&&(u.Ob(0,"div"),u.lc(1,k,2,1,"ion-list",20),u.Nb()),2&t){const t=u.Yb();u.zb(1),u.bc("ngForOf",t.events)}}function S(t,e){1&t&&(u.Ob(0,"ion-card",22),u.Ob(1,"ion-text",23),u.Ob(2,"p"),u.Mb(3,"ion-icon",24),u.nc(4," No se encontraron eventos."),u.Nb(),u.Nb(),u.Nb())}const _=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,s,r){this.activateRoute=t,this.alertCtrl=e,this.globalSer=n,this.eventsService=i,this.navCtrl=o,this.modalController=s,this.router=r,this.events=[],this.showFilter=!1,this.queryParams={input:"date",value:-1,initDate:l()().format("YYYY-MM-DD"),endDate:null}}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){yield this.getEventsList()})}getEventsList(){return Object(a.a)(this,void 0,void 0,function*(){this.showFilter&&(this.showFilter=!1),yield this.globalSer.presentLoading();const t=yield this.eventsService.getEvents(this.queryParams);t&&!t.error?(this.events=t,yield this.globalSer.dismissLoading()):t&&t.error?(this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}setShowFilter(){this.showFilter=!this.showFilter}setOrderData(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"Seleccione",inputs:[{name:"order-asc",type:"radio",label:"Ant\xedguas primero",value:1,checked:1===this.queryParams.value},{name:"order-desc",type:"radio",label:"Pr\xf3ximas primero",value:-1,checked:-1===this.queryParams.value}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Ok",handler:t=>{this.queryParams.value=t}}]});yield t.present()})}setDate(t){this.queryParams[t]&&(this.queryParams[t]=l()(this.queryParams[t]).format("YYYY-MM-DD"))}resetQueryParams(){this.queryParams.input="date",this.queryParams.value=-1,this.queryParams.initDate=l()().format("YYYY-MM-DD"),this.queryParams.endDate=null}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(r.a),u.Lb(s.a),u.Lb(d.a),u.Lb(b),u.Lb(s.K),u.Lb(s.J),u.Lb(r.g))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-eventos"]],decls:13,vars:5,consts:[["title","Eventos"],[1,"ion-margin"],["color","light",3,"click"],["name","filter-outline","slot","start",4,"ngIf"],["name","close-outline","slot","start",4,"ngIf"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noEvents",""],["name","filter-outline","slot","start"],["name","close-outline","slot","start"],["position","floating","color","medium"],[3,"readonly","value","click"],["displayFormat","DD/MM/YYYY","min","2020-01-01","doneText","Listo","cancelText","Cancelar","onchange","setDate('initDate')",3,"ngModel","ngModelChange"],["displayFormat","DD/MM/YYYY","min","2020-01-01","doneText","Listo","cancelText","Cancelar","onchange","setDate('endDate')",3,"ngModel","ngModelChange"],[1,"ion-margin-top"],["size","12",1,"ion-text-center"],["color","light",1,"ion-text-center",3,"click"],["name","trash-outline","slot","start"],["color","primary",1,"ion-text-center",3,"click"],["name","checkmark-outline","slot","start"],[4,"ngFor","ngForOf"],[3,"data"],[1,"ion-no-padding"],["color","medium",1,"ion-text-center"],["name","alert-circle-outline"]],template:function(t,e){if(1&t&&(u.Ob(0,"ion-content"),u.Ob(1,"ion-header"),u.Mb(2,"app-minheader",0),u.Nb(),u.Ob(3,"div",1),u.Ob(4,"ion-button",2),u.Wb("click",function(){return e.setShowFilter()}),u.lc(5,D,1,0,"ion-icon",3),u.lc(6,$,1,0,"ion-icon",4),u.Ob(7,"ion-text"),u.nc(8,"Filtrar"),u.Nb(),u.Nb(),u.Nb(),u.lc(9,Y,24,4,"ion-card",5),u.lc(10,N,2,1,"div",6),u.lc(11,S,5,0,"ng-template",null,7,u.mc),u.Nb()),2&t){const t=u.gc(12);u.zb(5),u.bc("ngIf",!e.showFilter),u.zb(1),u.bc("ngIf",e.showFilter),u.zb(3),u.bc("ngIf",e.showFilter),u.zb(1),u.bc("ngIf",e.events&&e.events.length>0)("ngIfElse",t)}},directives:[s.m,s.r,m.a,s.d,i.i,s.C,s.s,s.f,s.g,s.v,s.w,s.u,s.O,s.n,s.N,o.e,o.f,s.B,s.l,i.h,s.x,O],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({imports:[[r.i.forChild(_)],r.i]}),t})();var C=n("j1ZV");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({imports:[[i.b,o.a,s.G,w,C.a]]}),t})()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("ofXK"),o=n("TEn/"),s=n("fXoL");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[i.b,o.G]]}),t})()}}]);