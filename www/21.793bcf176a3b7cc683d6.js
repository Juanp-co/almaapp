(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1U7r":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("mrSG"),o=i("fXoL"),r=i("TEn/"),s=i("QTu/");let a=(()=>{class t{constructor(t,e,i){this.modalController=t,this.navCtrl=e,this.cookiesService=i,this.history=[],this.modal=!1}ngOnInit(){this.titleHeader=this.title}back(){return Object(n.a)(this,void 0,void 0,function*(){this.slugValue&&this.cookiesService.removeCookie(this.slugValue),yield this.navCtrl.back()})}closeModal(){return Object(n.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(r.K),o.Jb(r.L),o.Jb(s.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-minheader"]],inputs:{title:"title",slugValue:"slugValue",modal:"modal"},decls:12,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],[1,"fondoCool"],[1,"ion-margin-top","ion-margin-bottom"],["color","light",3,"click"],["name","arrow-back"],["size","8",1,"ion-margin-top","ion-margin-bottom"],["color","light",1,"titulo1"],["src","assets/logo.png",1,"logo-2"]],template:function(t,e){1&t&&(o.Mb(0,"ion-toolbar",0),o.Mb(1,"div",1),o.Mb(2,"ion-row"),o.Mb(3,"ion-col",2),o.Mb(4,"ion-buttons"),o.Mb(5,"ion-button",3),o.Ub("click",function(){return e.modal?e.closeModal():e.back()}),o.Kb(6,"ion-icon",4),o.Lb(),o.Lb(),o.Lb(),o.Mb(7,"ion-col",5),o.Mb(8,"ion-text",6),o.kc(9),o.Lb(),o.Lb(),o.Mb(10,"ion-col"),o.Kb(11,"img",7),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&t&&(o.xb(9),o.lc(e.titleHeader))},directives:[r.G,r.C,r.m,r.f,r.e,r.t,r.D],styles:[".max-icon-bar[_ngcontent-%COMP%]{max-height:100px}"]}),t})()},j1ZV:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("ofXK"),o=i("TEn/"),r=i("fXoL");let s=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.H]]}),t})()},"vDr/":function(t,e,i){"use strict";i.r(e),i.d(e,"PadresPageModule",function(){return k});var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("fXoL"),l=i("4WDQ"),b=i("1Ldg");let u=(()=>{class t{constructor(t,e,i){this.globalSer=t,this.navCtrl=e,this.axios=i}getReferrals(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData("/user/referrals");return t&&t.success&&t.data.referrals||[]})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(l.a),c.Qb(r.L),c.Qb(b.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=i("QTu/"),f=i("1U7r"),p=i("d4vQ");function h(t,e){1&t&&c.Kb(0,"app-personcard",7),2&t&&c.Zb("data",e.$implicit)}function g(t,e){if(1&t&&(c.Mb(0,"div"),c.ic(1,h,1,1,"app-personcard",6),c.Lb()),2&t){const t=c.Wb();c.xb(1),c.Zb("ngForOf",t.referrals)}}function m(t,e){1&t&&(c.Mb(0,"ion-card",8),c.Mb(1,"ion-text",9),c.Mb(2,"p"),c.Kb(3,"ion-icon",10),c.kc(4," No tienes hijos espirituales."),c.Lb(),c.Lb(),c.Lb())}const v=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.globalSer=t,this.navCtrl=e,this.padreService=i,this.cookieService=n,this.referrals=[]}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){yield this.getData()})}getData(){return Object(a.a)(this,void 0,void 0,function*(){this.cookieService.getCookie("token")?this.referrals=yield this.padreService.getReferrals():yield this.globalSer.errorSession()})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.a),c.Jb(r.L),c.Jb(u),c.Jb(d.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-padres"]],decls:11,vars:3,consts:[["title","Padres espirituales"],[1,"ion-no-margin","ion-no-padding"],["size","12",1,"ion-margin-start","ion-margin-end"],[1,""],[4,"ngIf","ngIfElse"],["noReferrals",""],[3,"data",4,"ngFor","ngForOf"],[3,"data"],[1,"ion-no-padding"],[1,"ion-text-center"],["name","alert-circle-outline"]],template:function(t,e){if(1&t&&(c.Mb(0,"ion-content"),c.Mb(1,"ion-header"),c.Kb(2,"app-minheader",0),c.Lb(),c.Mb(3,"ion-row",1),c.Mb(4,"ion-col",2),c.Mb(5,"ion-text",3),c.Mb(6,"h4"),c.kc(7),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.ic(8,g,2,1,"div",4),c.ic(9,m,5,0,"ng-template",null,5,c.jc),c.Lb()),2&t){const t=c.dc(10);c.xb(7),c.mc("Tus hijos espirituales (",e.referrals.length,")"),c.xb(1),c.Zb("ngIf",e.referrals&&e.referrals.length>0)("ngIfElse",t)}},directives:[r.n,r.s,f.a,r.C,r.m,r.D,n.i,n.h,p.a,r.g,r.t],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(v)],s.i]}),t})();var M=i("j1ZV");let k=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.H,L,M.a]]}),t})()}}]);