(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1U7r":function(t,i,o){"use strict";o.d(i,"a",function(){return a});var n=o("mrSG"),e=o("fXoL"),r=o("TEn/"),s=o("QTu/");let a=(()=>{class t{constructor(t,i,o){this.modalController=t,this.navCtrl=i,this.cookiesService=o,this.history=[],this.modal=!1}ngOnInit(){this.titleHeader=this.title}back(){return Object(n.a)(this,void 0,void 0,function*(){this.slugValue&&this.cookiesService.removeCookie(this.slugValue),yield this.navCtrl.back()})}closeModal(){return Object(n.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return t.\u0275fac=function(i){return new(i||t)(e.Lb(r.J),e.Lb(r.K),e.Lb(s.a))},t.\u0275cmp=e.Fb({type:t,selectors:[["app-minheader"]],inputs:{title:"title",slugValue:"slugValue",modal:"modal"},decls:12,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],[1,"fondoCool"],[1,"ion-margin-top","ion-margin-bottom"],["color","light",3,"click"],["name","arrow-back"],["size","8",1,"ion-margin-top","ion-margin-bottom"],["color","light",1,"titulo1"],["src","assets/logo.png",1,"logo-2"]],template:function(t,i){1&t&&(e.Ob(0,"ion-toolbar",0),e.Ob(1,"div",1),e.Ob(2,"ion-row"),e.Ob(3,"ion-col",2),e.Ob(4,"ion-buttons"),e.Ob(5,"ion-button",3),e.Wb("click",function(){return i.modal?i.closeModal():i.back()}),e.Mb(6,"ion-icon",4),e.Nb(),e.Nb(),e.Nb(),e.Ob(7,"ion-col",5),e.Ob(8,"ion-text",6),e.nc(9),e.Nb(),e.Nb(),e.Ob(10,"ion-col"),e.Mb(11,"img",7),e.Nb(),e.Nb(),e.Nb(),e.Nb()),2&t&&(e.zb(9),e.oc(i.titleHeader))},directives:[r.F,r.B,r.l,r.e,r.d,r.s,r.C],styles:[".max-icon-bar[_ngcontent-%COMP%]{max-height:100px}.content[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{position:sticky}"]}),t})()},d4vQ:function(t,i,o){"use strict";o.d(i,"a",function(){return u});var n=o("mrSG"),e=o("fXoL"),r=o("tyNb"),s=o("QTu/"),a=o("ofXK"),c=o("TEn/");function b(t,i){if(1&t&&(e.Ob(0,"ion-text"),e.Mb(1,"ion-icon",10),e.nc(2),e.Mb(3,"br"),e.Nb()),2&t){const t=e.Yb(2);e.zb(2),e.pc(" ",t.member.totalsReferrals||0," Hijo(s) Espirituales.")}}function l(t,i){if(1&t){const t=e.Pb();e.Ob(0,"ion-card",1),e.Wb("click",function(){e.hc(t);const i=e.Yb();return i.member._id&&i.showButton?i.goToDetails(i.member._id):null}),e.Ob(1,"ion-card-content",2),e.Ob(2,"ion-row"),e.Ob(3,"ion-col",3),e.Mb(4,"ion-img",4),e.Nb(),e.Ob(5,"ion-col",5),e.Ob(6,"b"),e.nc(7),e.Nb(),e.Mb(8,"br"),e.Ob(9,"ion-text"),e.Mb(10,"ion-icon",6),e.nc(11),e.Mb(12,"br"),e.Nb(),e.lc(13,b,4,1,"ion-text",7),e.Ob(14,"ion-text",8),e.Ob(15,"i",9),e.nc(16),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb()}if(2&t){const t=e.Yb();e.zb(4),e.dc("src","/assets/icon/",1===t.member.gender?"mujer_lista":"hombre_lista",".svg"),e.zb(3),e.qc("",t.member.names||""," ",t.member.lastNames||"",""),e.zb(4),e.pc(" ",t.member.phone||"No indicado.",""),e.zb(2),e.bc("ngIf",void 0!==t.member.totalsReferrals),e.zb(3),e.oc(t.showButton?"Toca para m\xe1s informaci\xf3n.":"\xa0")}}let u=(()=>{class t{constructor(t,i){this.router=t,this.cookiesService=i,this.disabledClick=!1,this.member=null,this.group=!1,this.showButton=!1}ngOnInit(){this.member=this.data,this.group=this.getGroup,this.disabledClick?this.showButton=!1:this.member&&this.member._id&&(this.showButton=this.checkIdMember(this.member._id))}checkIdMember(t){const i=this.cookiesService.getCookie("data");return!!i&&i._id!==t}goToDetails(t=null){return Object(n.a)(this,void 0,void 0,function*(){yield this.router.navigate([`persona/${t}`],{queryParams:{group:this.group}})})}}return t.\u0275fac=function(i){return new(i||t)(e.Lb(r.g),e.Lb(s.a))},t.\u0275cmp=e.Fb({type:t,selectors:[["app-personcard"]],inputs:{data:"data",getGroup:"getGroup",disabledClick:"disabledClick"},decls:1,vars:1,consts:[["class","height-100",3,"click",4,"ngIf"],[1,"height-100",3,"click"],[1,"ion-margin-top","ion-no-padding"],["size","3",1,"ion-text-center"],[1,"pictureiconcard",3,"src"],["size","9"],["name","call-outline"],[4,"ngIf"],[1,"ion-margin-top"],[1,"toSmall"],["name","people-outline"]],template:function(t,i){1&t&&e.lc(0,l,17,6,"ion-card",0),2&t&&e.bc("ngIf",i.member)},directives:[a.i,c.f,c.g,c.B,c.l,c.t,c.C,c.s],styles:[".pictureiconcard[_ngcontent-%COMP%]{width:100%!important;max-height:65px!important;margin:0 auto!important}.height-100[_ngcontent-%COMP%]{height:100%!important}"]}),t})()},j1ZV:function(t,i,o){"use strict";o.d(i,"a",function(){return s});var n=o("ofXK"),e=o("TEn/"),r=o("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({imports:[[n.b,e.G]]}),t})()},"vDr/":function(t,i,o){"use strict";o.r(i),o.d(i,"PadresPageModule",function(){return z});var n=o("ofXK"),e=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),a=o("mrSG"),c=o("fXoL"),b=o("1Ldg");let l=(()=>{class t{constructor(t){this.axios=t}getReferrals(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData("/user/referrals");return t&&t.success?t&&t.data:null})}getFamiliesGroups(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData("/families-groups");return t&&t.success?t&&t.data.groups:[]})}}return t.\u0275fac=function(i){return new(i||t)(c.Sb(b.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=o("1U7r"),d=o("d4vQ");function m(t,i){if(1&t&&(c.Ob(0,"ion-row",5),c.Ob(1,"ion-col",6),c.Ob(2,"b",7),c.nc(3,"Mi padre espiritual"),c.Nb(),c.Mb(4,"br"),c.Mb(5,"app-personcard",8),c.Nb(),c.Nb()),2&t){const t=c.Yb();c.zb(5),c.bc("data",t.referred)}}function p(t,i){if(1&t&&(c.Ob(0,"ion-col",11),c.Mb(1,"app-personcard",8),c.Nb()),2&t){const t=i.$implicit;c.zb(1),c.bc("data",t)}}function g(t,i){if(1&t&&(c.Ob(0,"ion-row",5),c.Ob(1,"ion-col",9),c.Ob(2,"ion-text"),c.Ob(3,"b"),c.nc(4),c.Nb(),c.Nb(),c.Nb(),c.lc(5,p,2,1,"ion-col",10),c.Ob(6,"ion-col",9),c.Mb(7,"br"),c.Nb(),c.Nb()),2&t){const t=c.Yb();c.zb(4),c.pc("Mis hijos espirituales (",t.totals,")"),c.zb(1),c.bc("ngForOf",t.referrals)}}function f(t,i){1&t&&(c.Ob(0,"ion-row",5),c.Ob(1,"ion-col",9),c.Ob(2,"ion-card",12),c.Ob(3,"ion-text",13),c.Ob(4,"p"),c.Mb(5,"ion-icon",14),c.nc(6," No tienes hijos espirituales."),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb())}function h(t,i){if(1&t){const t=c.Pb();c.Ob(0,"ion-fab",15),c.Ob(1,"ion-fab-button",16),c.Wb("click",function(){return c.hc(t),c.Yb().goToFamiliesGroups()}),c.Mb(2,"ion-icon",17),c.Nb(),c.Nb()}}const O=[{path:"",component:(()=>{class t{constructor(t,i){this.padreService=t,this.router=i,this.referrals=[],this.totalsGroups=0,this.referred=null,this.totals=0}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){yield this.getData()})}getData(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.padreService.getReferrals();t&&(this.referrals=t.referrals,this.referred=t.referred,this.totals=t.totals,this.totalsGroups=t.totalsGroups)})}goToFamiliesGroups(){return Object(a.a)(this,void 0,void 0,function*(){yield this.router.navigate(["grupos-familiares"])})}}return t.\u0275fac=function(i){return new(i||t)(c.Lb(l),c.Lb(s.g))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-padres"]],decls:8,vars:4,consts:[["title","Padres espirituales"],["class","ion-margin-top ion-no-padding",4,"ngIf"],["class","ion-margin-top ion-no-padding",4,"ngIf","ngIfElse"],["noReferrals",""],["class","ion-margin-end ion-margin-bottom","vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],[1,"ion-margin-top","ion-no-padding"],["size","12","size-sm","6","size-md","4","size-lg","3"],[1,"ion-margin-start"],[3,"data"],["size","12"],["class","ion-margin-top ion-no-padding","size","12","size-sm","6","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-md","4","size-lg","3",1,"ion-margin-top","ion-no-padding"],[1,"ion-no-padding"],["color","medium",1,"ion-text-center"],["name","alert-circle-outline"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-margin-end","ion-margin-bottom"],["color","primary",3,"click"],["name","people-outline"]],template:function(t,i){if(1&t&&(c.Ob(0,"ion-content"),c.Ob(1,"ion-header"),c.Mb(2,"app-minheader",0),c.Nb(),c.lc(3,m,6,1,"ion-row",1),c.lc(4,g,8,2,"ion-row",2),c.lc(5,f,7,0,"ng-template",null,3,c.mc),c.lc(7,h,3,0,"ion-fab",4),c.Nb()),2&t){const t=c.gc(6);c.zb(3),c.bc("ngIf",i.referred),c.zb(1),c.bc("ngIf",i.referrals&&i.referrals.length>0)("ngIfElse",t),c.zb(3),c.bc("ngIf",i.totalsGroups>0)}},directives:[r.m,r.r,u.a,n.i,r.B,r.l,d.a,r.C,n.h,r.f,r.s,r.o,r.p],styles:[".pictureLogo[_ngcontent-%COMP%]{width:65px!important;margin:0 auto!important}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[s.i.forChild(O)],s.i]}),t})();var N=o("j1ZV");let z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[n.b,e.a,r.G,v,N.a]]}),t})()}}]);