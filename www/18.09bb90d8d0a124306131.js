(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"09LG":function(i,o,t){"use strict";t.d(o,"a",function(){return b});var n=t("mrSG"),e=t("fXoL"),s=t("1Ldg"),a=t("4WDQ");let b=(()=>{class i{constructor(i,o){this.axios=i,this.globalSer=o}getMember(i,o){return Object(n.a)(this,void 0,void 0,function*(){const t=yield this.axios.getData(`${o}/${i}`);return t&&t.success?t.data.data:this.globalSer.altResponse(t)})}saveVisit(i){return Object(n.a)(this,void 0,void 0,function*(){const o=yield this.axios.postData("user/referrals/visit",i);return o&&o.success?o.data.msg:this.globalSer.altResponse(o)})}}return i.\u0275fac=function(o){return new(o||i)(e.Sb(s.a),e.Sb(a.a))},i.\u0275prov=e.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},QPGG:function(i,o,t){"use strict";t.d(o,"a",function(){return S});var n=t("mrSG"),e=t("Wgwc"),s=t.n(e),a=(t("4HKe"),t("13Ln")),b=t.n(a),r=t("QgiU"),c=t.n(r),l=t("cJKd"),d=t("fXoL"),u=t("QTu/"),h=t("4WDQ"),f=t("TEn/"),m=t("09LG"),O=t("1U7r"),N=t("ofXK");function g(i,o){if(1&i&&(d.Ob(0,"ion-card",1),d.Ob(1,"ion-card-content"),d.Ob(2,"ion-row"),d.Ob(3,"ion-col",2),d.Ob(4,"ion-text"),d.Ob(5,"b"),d.nc(6),d.Nb(),d.Nb(),d.Mb(7,"br"),d.Ob(8,"ion-text"),d.Ob(9,"b"),d.nc(10,"Fecha:"),d.Nb(),d.nc(11),d.Nb(),d.Mb(12,"br"),d.Ob(13,"ion-text",3),d.Ob(14,"i",4),d.nc(15,"Toca para m\xe1s informaci\xf3n."),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()),2&i){const i=d.Yb();d.zb(6),d.oc(i.visit.observation||"Sin observaci\xf3n."),d.zb(5),d.pc(" ",i.visit.date||"","")}}let v=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d.Fb({type:i,selectors:[["app-visitscard"]],inputs:{visit:"visit",index:"index"},decls:1,vars:1,consts:[["class","ion-no-padding ion-no-margin",4,"ngIf"],[1,"ion-no-padding","ion-no-margin"],["size","12"],[1,"ion-margin-top"],[1,"toSmall"]],template:function(i,o){1&i&&d.lc(0,g,16,2,"ion-card",0),2&i&&d.bc("ngIf",o.visit)},directives:[N.i,f.f,f.g,f.B,f.l,f.C],styles:[""]}),i})();var p=t("3Pt+");function w(i,o){if(1&i){const i=d.Pb();d.Ob(0,"ion-col",10),d.Ob(1,"app-visitscard",11),d.Wb("click",function(){d.hc(i);const t=o.index;return d.Yb(3).showVisit(t)}),d.Nb(),d.Nb()}if(2&i){const i=o.$implicit;d.zb(1),d.bc("visit",i)}}function z(i,o){if(1&i&&(d.Ob(0,"ion-row",8),d.lc(1,w,2,1,"ion-col",9),d.Ob(2,"ion-col"),d.Mb(3,"br"),d.Nb(),d.Nb()),2&i){const i=d.Yb(2);d.zb(1),d.bc("ngForOf",i.visits)}}function x(i,o){1&i&&(d.Ob(0,"ion-card"),d.Ob(1,"ion-card-content"),d.Ob(2,"ion-text",12),d.Ob(3,"p"),d.Mb(4,"ion-icon",13),d.nc(5," No existen visitas registradas para este miembro."),d.Nb(),d.Nb(),d.Nb(),d.Nb())}function M(i,o){if(1&i){const i=d.Pb();d.Ob(0,"ion-col",2),d.Ob(1,"ion-row"),d.Ob(2,"ion-col",3),d.Ob(3,"ion-button",4),d.Wb("click",function(){return d.hc(i),d.Yb().setShowForm()}),d.Mb(4,"ion-icon",5),d.nc(5," Registrar visita "),d.Nb(),d.Nb(),d.Nb(),d.lc(6,z,4,1,"ion-row",6),d.lc(7,x,6,0,"ng-template",null,7,d.mc),d.Nb()}if(2&i){const i=d.gc(8),o=d.Yb();d.bc("size",12),d.zb(6),d.bc("ngIf",o.visits&&o.visits.length>0)("ngIfElse",i)}}function y(i,o){if(1&i){const i=d.Pb();d.Ob(0,"ion-col",2),d.Ob(1,"ion-card",14),d.Ob(2,"ion-card-content"),d.Ob(3,"ion-row"),d.Ob(4,"ion-col",2),d.Ob(5,"ion-text",15),d.Ob(6,"i"),d.nc(7,"Registre la visita realizada a su hijo espiritual. Indique la fecha y la observaci\xf3n realizada."),d.Nb(),d.Nb(),d.Nb(),d.Ob(8,"ion-col",16),d.Ob(9,"ion-row"),d.Ob(10,"ion-col",17),d.Ob(11,"ion-item"),d.Ob(12,"ion-label",18),d.nc(13,"Fecha de la visita (*)"),d.Nb(),d.Ob(14,"ion-datetime",19),d.Wb("ngModelChange",function(o){return d.hc(i),d.Yb().formData.date=o}),d.Nb(),d.Nb(),d.Nb(),d.Ob(15,"ion-col",17),d.Ob(16,"ion-item"),d.Ob(17,"ion-label",18),d.nc(18,"Observaciones (*)"),d.Nb(),d.Ob(19,"ion-textarea",20),d.Wb("ngModelChange",function(o){return d.hc(i),d.Yb().formData.observation=o}),d.Nb(),d.Nb(),d.Nb(),d.Ob(20,"ion-col",21),d.Ob(21,"ion-text",15),d.Ob(22,"i",22),d.nc(23,"(*) Campos requeridos."),d.Nb(),d.Nb(),d.Nb(),d.Ob(24,"ion-col",23),d.Ob(25,"ion-button",24),d.Wb("click",function(){return d.hc(i),d.Yb().confirmCancelForm()}),d.Mb(26,"ion-icon",25),d.Ob(27,"ion-text"),d.nc(28,"Cancelar"),d.Nb(),d.Nb(),d.Ob(29,"ion-button",26),d.Wb("click",function(){return d.hc(i),d.Yb().confirmSave()}),d.Mb(30,"ion-icon",27),d.Ob(31,"ion-text"),d.nc(32,"Guardar"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&i){const i=d.Yb();d.bc("size",12),d.zb(4),d.bc("size",12),d.zb(10),d.bc("ngModel",i.formData.date)("min",i.minInitDate)("max",i.maxInitDate),d.zb(5),d.bc("ngModel",i.formData.observation)}}let S=(()=>{class i{constructor(i,o,t,n){this.cookiesService=i,this.globalSer=o,this.modalController=t,this.personaService=n,this.visits=[],this.showForm=!1,this.minInitDate=s()("2021-01-01").format("YYYY-MM-DD"),this.maxInitDate=s()().format("YYYY-MM-DD"),this.formData={userId:null,observation:null,date:null},s.a.extend(b.a),s.a.extend(c.a)}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){yield this.setVisits()})}saveVisit(){return Object(n.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading("Guardando, por favor espere...");const i=Object.assign({},this.formData);i.date=s()(i.date).format("YYYY-MM-DD"),i.userId=this.id||null;const o=yield this.personaService.saveVisit(i);o&&!o.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.presentAlert("\xa1\xc9xito!",o||"Se ha registrado la visita exitosamente."),this.data.unshift(Object.assign({consolidator:this.getMyDataToCard()},i)),yield this.setVisits(),this.setShowForm()):o&&o.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()})}setVisits(){return Object(n.a)(this,void 0,void 0,function*(){this.visits=[],this.data&&this.data.length>0&&this.data.forEach(i=>{this.visits.push({consolidator:i.consolidator,observation:i.observation&&i.observation.length>50?`${i.observation.substr(0,50)} ...`:i.observation||"No indicada.",date:i.date?s()(i.date,"YYYY-MM-DD",!0).locale("es").format("dddd, DD [de] MMMM [de] YYYY"):"No encontrada."})})})}showVisit(i){return Object(n.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const o={data:{consolidator:this.data[i].consolidator||"NO ENCONTRADO",observation:this.data[i].observation||"No indicada.",date:this.data[i].date?s()(this.data[i].date,"YYYY-MM-DD",!0).locale("es").format("dddd, DD [de] MMMM [de] YYYY"):"No encontrada."}};yield this.globalSer.dismissLoading(),yield this.globalSer.loadModal(l.a,o,!1)})}setShowForm(){this.showForm&&(this.formData.date=null,this.formData.userId=null,this.formData.observation=null),this.showForm=!this.showForm}getMyDataToCard(){const i=this.cookiesService.getCookie("data");return i?{_id:i._id,names:i.names,lastNames:i.lastNames,gender:i.gender,document:i.document}:null}confirmCancelForm(){return Object(n.a)(this,void 0,void 0,function*(){yield this.globalSer.alertConfirm({message:"\xbfEst\xe1 seguro qu\xe9 desea cancelar el registro de la visita?",confirmAction:()=>{this.setShowForm()}})})}confirmSave(){return Object(n.a)(this,void 0,void 0,function*(){yield this.globalSer.alertConfirm({message:"\xbfEst\xe1 seguro qu\xe9 desea guardar la informaci\xf3n suministrada de la visita?",confirmAction:()=>Object(n.a)(this,void 0,void 0,function*(){yield this.saveVisit()})})})}}return i.\u0275fac=function(o){return new(o||i)(d.Lb(u.a),d.Lb(h.a),d.Lb(f.J),d.Lb(m.a))},i.\u0275cmp=d.Fb({type:i,selectors:[["app-modal-visitas"]],inputs:{data:"data",id:"id"},decls:6,vars:3,consts:[["title","Visitas",3,"modal"],[3,"size",4,"ngIf"],[3,"size"],["size","12",1,"ion-text-end"],[3,"click"],["name","add-outline","slot","start"],["class","ion-margin-top ion-margin-bottom",4,"ngIf","ngIfElse"],["noVisits",""],[1,"ion-margin-top","ion-margin-bottom"],["size","12",4,"ngFor","ngForOf"],["size","12"],[3,"visit","click"],["color","medium",1,"ion-text-center"],["name","alert-circle-outline"],[1,"ion-no-padding"],["color","medium"],["size","12",1,""],["size","12","size-sm","6"],["position","floating","color","medium"],["displayFormat","DD/MM/YYYY","doneText","Listo","cancelText","Cancelar",3,"ngModel","min","max","ngModelChange"],["rows","5","placeholder","Indica alguna observaci\xf3n...",1,"ion-text-uppercase",3,"ngModel","ngModelChange"],["size","12",1,"ion-margin-top"],[1,"toSmall"],["size","12",1,"ion-margin-top","ion-margin-bottom","ion-text-center"],["color","light",3,"click"],["name","close-outline","slot","start"],["color","primary",3,"click"],["name","save-outline","slot","start"]],template:function(i,o){1&i&&(d.Ob(0,"ion-content"),d.Ob(1,"ion-header"),d.Mb(2,"app-minheader",0),d.Nb(),d.Ob(3,"ion-row"),d.lc(4,M,9,3,"ion-col",1),d.lc(5,y,33,6,"ion-col",1),d.Nb(),d.Nb()),2&i&&(d.zb(2),d.bc("modal",!0),d.zb(2),d.bc("ngIf",!o.showForm),d.zb(1),d.bc("ngIf",o.showForm))},directives:[f.m,f.r,O.a,f.B,N.i,f.l,f.d,f.s,N.h,v,f.f,f.g,f.C,f.v,f.w,f.n,f.N,p.e,p.f,f.D,f.O],styles:[""]}),i})()},R6vB:function(i,o,t){"use strict";t.r(o),t.d(o,"PersonaPageModule",function(){return Y});var n=t("ofXK"),e=t("3Pt+"),s=t("TEn/"),a=t("tyNb"),b=t("mrSG"),r=t("QPGG"),c=t("ZrT4"),l=t("0ox5"),d=t("fXoL"),u=t("4WDQ"),h=t("09LG"),f=t("1U7r"),m=t("d4vQ");function O(i,o){if(1&i&&(d.Ob(0,"ion-col",24),d.Mb(1,"app-personcard",25),d.Nb()),2&i){const i=o.$implicit;d.bc("size",12)("sizeSm",6)("sizeMd",4)("sizeLg",3),d.zb(1),d.bc("data",i)("disabledClick",!0)}}function N(i,o){if(1&i&&(d.Ob(0,"ion-col",6),d.Ob(1,"ion-row"),d.lc(2,O,2,6,"ion-col",23),d.Nb(),d.Nb()),2&i){const i=d.Yb(2);d.zb(2),d.bc("ngForOf",i.views.referrals.data)}}function g(i,o){if(1&i&&(d.Ob(0,"ion-col",28),d.Mb(1,"img",29),d.Nb()),2&i){const i=o.$implicit;d.zb(1),d.ec("src","assets/icon/level-",i.level,"",i.approved?"":"-gray",".svg",d.jc)}}function v(i,o){if(1&i&&(d.Ob(0,"ion-row",26),d.lc(1,g,2,2,"ion-col",27),d.Nb()),2&i){const i=d.Yb(2);d.zb(1),d.bc("ngForOf",i.views.courses.data)}}function p(i,o){1&i&&(d.Ob(0,"ion-text",30),d.Ob(1,"p"),d.Mb(2,"ion-icon",31),d.nc(3," Este miembro no posee ning\xfan curso en su perfil."),d.Nb(),d.Nb())}function w(i,o){if(1&i){const i=d.Pb();d.Ob(0,"div"),d.Ob(1,"ion-row",5),d.Ob(2,"ion-col",6),d.Ob(3,"ion-card"),d.Ob(4,"ion-card-header",7),d.Ob(5,"ion-toolbar",8),d.Ob(6,"ion-buttons",9),d.Ob(7,"ion-button",10),d.Wb("click",function(){return d.hc(i),d.Yb().setShowView("info")}),d.Mb(8,"ion-icon",11),d.Nb(),d.Nb(),d.Ob(9,"ion-title"),d.nc(10),d.Nb(),d.Nb(),d.Nb(),d.Ob(11,"ion-card-content"),d.Ob(12,"ion-row"),d.Ob(13,"ion-col",12),d.Ob(14,"ion-text"),d.Ob(15,"b"),d.nc(16,"Nombres:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(17,"ion-col",13),d.Ob(18,"ion-text"),d.nc(19),d.Nb(),d.Nb(),d.Ob(20,"ion-col",12),d.Ob(21,"ion-text"),d.Ob(22,"b"),d.nc(23,"Apellidos:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(24,"ion-col",13),d.Ob(25,"ion-text"),d.nc(26),d.Nb(),d.Nb(),d.Ob(27,"ion-col",12),d.Ob(28,"ion-text"),d.Ob(29,"b"),d.nc(30,"Tel\xe9fono:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(31,"ion-col",13),d.Ob(32,"ion-text"),d.nc(33),d.Nb(),d.Nb(),d.Ob(34,"ion-col",12),d.Ob(35,"ion-text"),d.Ob(36,"b"),d.nc(37,"Correo electr\xf3nico:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(38,"ion-col",13),d.Ob(39,"ion-text"),d.nc(40),d.Nb(),d.Nb(),d.Ob(41,"ion-col",12),d.Ob(42,"ion-text"),d.Ob(43,"b"),d.nc(44,"Fecha de nac.:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(45,"ion-col",13),d.Ob(46,"ion-text"),d.nc(47),d.Nb(),d.Nb(),d.Ob(48,"ion-col",12),d.Ob(49,"ion-text"),d.Ob(50,"b"),d.nc(51,"Sexo:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(52,"ion-col",13),d.Ob(53,"ion-text"),d.nc(54),d.Nb(),d.Nb(),d.Ob(55,"ion-col",12),d.Ob(56,"ion-text"),d.Ob(57,"b"),d.nc(58,"Estado civil:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(59,"ion-col",13),d.Ob(60,"ion-text"),d.nc(61),d.Nb(),d.Nb(),d.Ob(62,"ion-col",12),d.Ob(63,"ion-text"),d.Ob(64,"b"),d.nc(65,"Departamento:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(66,"ion-col",13),d.Ob(67,"ion-text"),d.nc(68),d.Nb(),d.Nb(),d.Ob(69,"ion-col",12),d.Ob(70,"ion-text"),d.Ob(71,"b"),d.nc(72,"Cuidad:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(73,"ion-col",13),d.Ob(74,"ion-text"),d.nc(75),d.Nb(),d.Nb(),d.Ob(76,"ion-col",12),d.Ob(77,"ion-text"),d.Ob(78,"b"),d.nc(79,"Barrio:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(80,"ion-col",13),d.Ob(81,"ion-text"),d.nc(82),d.Nb(),d.Nb(),d.Ob(83,"ion-col",12),d.Ob(84,"ion-text"),d.Ob(85,"b"),d.nc(86,"Direcci\xf3n:"),d.Nb(),d.Nb(),d.Nb(),d.Ob(87,"ion-col",13),d.Ob(88,"ion-text"),d.nc(89),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(90,"ion-row",14),d.Ob(91,"ion-col",15),d.Ob(92,"ion-button",16),d.Wb("click",function(){return d.hc(i),d.Yb().setShowGroup(!0)}),d.nc(93," Hijos espirituales "),d.Nb(),d.Nb(),d.Ob(94,"ion-col",15),d.Ob(95,"ion-button",16),d.Wb("click",function(){return d.hc(i),d.Yb().setShowGroup()}),d.nc(96," Educaci\xf3n "),d.Nb(),d.Nb(),d.Nb(),d.Ob(97,"ion-card"),d.Ob(98,"ion-card-content",17),d.Ob(99,"ion-row"),d.Ob(100,"ion-col",18),d.Ob(101,"ion-text",19),d.Ob(102,"b"),d.nc(103),d.Nb(),d.Nb(),d.Nb(),d.lc(104,N,3,1,"ion-col",20),d.Nb(),d.Nb(),d.Nb(),d.Ob(105,"ion-card"),d.Ob(106,"ion-card-content"),d.lc(107,v,2,1,"ion-row",21),d.lc(108,p,4,0,"ng-template",null,22,d.mc),d.Nb(),d.Nb(),d.Mb(110,"br"),d.Nb()}if(2&i){const i=d.gc(109),o=d.Yb();d.zb(8),d.dc("name","chevron-",o.views.info.show?"up":"down","-outline"),d.zb(2),d.oc(o.views.info.title),d.zb(1),d.Bb(o.views.info.show?"":"ion-hide"),d.zb(8),d.oc(o.views.info.data.names||"No indicado"),d.zb(7),d.oc(o.views.info.data.lastNames||"No indicado"),d.zb(7),d.oc(o.views.info.data.phone||"No indicado"),d.zb(7),d.oc(o.views.info.data.email||"No indicado"),d.zb(7),d.oc(o.views.info.data.birthday||"No indicado"),d.zb(7),d.oc(o.views.info.data.birthday||"No indicado"),d.zb(7),d.oc(o.views.info.data.birthday||"No indicado"),d.zb(7),d.oc(o.views.info.data.department||"No indicado"),d.zb(7),d.oc(o.views.info.data.city||"No indicado"),d.zb(7),d.oc(o.views.info.data.locality||"No indicado"),d.zb(7),d.oc(o.views.info.data.direction||"No indicado"),d.zb(3),d.cc("color",o.views.referrals.show?"primary":"light"),d.zb(3),d.cc("color",o.views.courses.show?"primary":"light"),d.zb(2),d.Bb(o.views.referrals.show?"":"ion-hide"),d.zb(6),d.pc("Hijos espirituales (",o.views.referrals.totals,")"),d.zb(1),d.bc("ngIf",o.views.referrals.totals>0),d.zb(1),d.Bb(o.views.courses.show?"":"ion-hide"),d.zb(2),d.bc("ngIf",o.views.courses.data&&o.views.courses.data.length>0)("ngIfElse",i)}}function z(i,o){1&i&&(d.Ob(0,"ion-card"),d.Ob(1,"ion-card-content"),d.Ob(2,"ion-text",30),d.Ob(3,"p"),d.Mb(4,"ion-icon",31),d.nc(5," Disculpe, pero no se logr\xf3 obtener la informaci\xf3n solicitada."),d.Nb(),d.Nb(),d.Nb(),d.Nb())}function x(i,o){if(1&i){const i=d.Pb();d.Ob(0,"ion-fab",32),d.Ob(1,"ion-fab-button",33),d.Wb("click",function(){return d.hc(i),d.Yb().showVisits()}),d.Mb(2,"ion-icon",34),d.Nb(),d.Nb()}}const M=[{path:"",component:(()=>{class i{constructor(i,o,t,n){this.activateRoute=i,this.globalSer=o,this.personaService=t,this.navCtrl=n,this.visits=[],this.id=null,this.totalCourses=0,this.totalReferrals=0,this.group=!1,this.path="/user/referrals",this.views={info:{show:!0,title:"Datos de contacto",data:null},courses:{show:!1,data:[]},referrals:{show:!0,totals:0,data:[]}}}ngOnInit(){return Object(b.a)(this,void 0,void 0,function*(){if(yield this.activateRoute.paramMap.subscribe(i=>{this.id=i.get("personId")}),this.activateRoute.queryParams.subscribe(i=>{i.group&&(this.path="/user/group",this.group=!0)}),this.id){yield this.globalSer.presentLoading();const i=yield this.personaService.getMember(this.id,this.path);if(i&&!i.error){if(this.views.info.data=i.member||null,this.views.info.data.civilStatus=l.b[this.views.info.data.civilStatus]||null,this.views.info.data.gender=l.f[this.views.info.data.gender]||null,this.views.info.data.department){const i=c.a[this.views.info.data.department]||null;this.views.info.data.department=i?i.department:null,this.views.info.data.city=i&&i.cities[this.views.info.data.city]||null}this.visits=i.visits||[],this.views.courses.data=i.courses||[],this.views.referrals.totals=i.totalReferrals||0,this.views.referrals.data=i.referrals||[],yield this.globalSer.dismissLoading()}else i&&i.error?(yield this.globalSer.dismissLoading(),yield this.globalSer.errorSession()):yield this.globalSer.dismissLoading()}else yield this.globalSer.presentAlert("Error","Error al obtener el par\xe1metro a consultar."),yield this.navCtrl.back()})}setShowView(i){this.views[i].show=!this.views[i].show}setShowGroup(i=!1){this.views.referrals.show=i,this.views.courses.show=!i}showVisits(){return Object(b.a)(this,void 0,void 0,function*(){yield this.globalSer.presentLoading();const i={data:this.visits,id:this.id};yield this.globalSer.dismissLoading(),yield this.globalSer.loadModal(r.a,i,!1,i=>{i&&(this.visits=i)})})}}return i.\u0275fac=function(o){return new(o||i)(d.Lb(a.a),d.Lb(u.a),d.Lb(h.a),d.Lb(s.K))},i.\u0275cmp=d.Fb({type:i,selectors:[["app-persona"]],decls:7,vars:3,consts:[[1,"content"],["title","Detalles del miembro"],[4,"ngIf","ngIfElse"],["noData",""],["class","ion-margin-end ion-margin-bottom","vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],[1,"ion-margin-top"],["size","12"],["color","primary",1,"ion-no-padding"],["color","primary"],["slot","start"],[3,"click"],[3,"name"],["size","5"],["size","7"],[1,"ion-margin-top","ion-padding"],["size","6"],["expand","block",3,"color","click"],[1,"ion-no-padding"],["size","12",1,"ion-padding"],["color","medium"],["size","12",4,"ngIf"],["class","ion-no-padding ion-justify-content-center ion-margin-bottom",4,"ngIf","ngIfElse"],["noCourses",""],[3,"size","sizeSm","sizeMd","sizeLg",4,"ngFor","ngForOf"],[3,"size","sizeSm","sizeMd","sizeLg"],[3,"data","disabledClick"],[1,"ion-no-padding","ion-justify-content-center","ion-margin-bottom"],["class","ion-text-center ion-margin-bottom","size","4",4,"ngFor","ngForOf"],["size","4",1,"ion-text-center","ion-margin-bottom"],[1,"icon-courses",3,"src"],["color","medium",1,"ion-text-center"],["name","alert-circle-outline"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-margin-end","ion-margin-bottom"],["color","primary",3,"click"],["name","clipboard-outline"]],template:function(i,o){if(1&i&&(d.Ob(0,"ion-content",0),d.Ob(1,"ion-header"),d.Mb(2,"app-minheader",1),d.Nb(),d.lc(3,w,111,28,"div",2),d.lc(4,z,6,0,"ng-template",null,3,d.mc),d.lc(6,x,3,0,"ion-fab",4),d.Nb()),2&i){const i=d.gc(5);d.zb(3),d.bc("ngIf",o.views.info.data)("ngIfElse",i),d.zb(3),d.bc("ngIf",o.views.info.data&&!o.group)}},directives:[s.m,s.r,f.a,n.i,s.B,s.l,s.f,s.h,s.F,s.e,s.d,s.s,s.E,s.g,s.C,n.h,m.a,s.o,s.p],styles:[".pictureLogo[_ngcontent-%COMP%]{width:65px!important;margin:0 auto!important}"]}),i})()},{path:"modal-visitas",loadChildren:()=>t.e(30).then(t.bind(null,"Uwaq")).then(i=>i.ModalVisitasPageModule)},{path:"modal-detalles-visita",loadChildren:()=>t.e(29).then(t.bind(null,"tjCO")).then(i=>i.ModalDetallesVisitaPageModule)}];let y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=d.Jb({type:i}),i.\u0275inj=d.Ib({imports:[[a.i.forChild(M)],a.i]}),i})();var S=t("j1ZV");let Y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=d.Jb({type:i}),i.\u0275inj=d.Ib({imports:[[n.b,e.a,s.G,y,S.a]]}),i})()},cJKd:function(i,o,t){"use strict";t.d(o,"a",function(){return l});var n=t("mrSG"),e=t("fXoL"),s=t("TEn/"),a=t("ofXK"),b=t("1U7r"),r=t("d4vQ");function c(i,o){if(1&i&&(e.Ob(0,"ion-content"),e.Ob(1,"ion-header"),e.Mb(2,"app-minheader",1),e.Nb(),e.Ob(3,"ion-row"),e.Ob(4,"ion-col",2),e.Ob(5,"ion-text",3),e.Ob(6,"b"),e.nc(7,"Visita realizada por: "),e.Nb(),e.Nb(),e.Nb(),e.Ob(8,"ion-col",2),e.Mb(9,"app-personcard",4),e.Nb(),e.Ob(10,"ion-col",2),e.Ob(11,"ion-card"),e.Ob(12,"ion-card-content"),e.Ob(13,"ion-row"),e.Ob(14,"ion-col",5),e.Ob(15,"ion-text"),e.Ob(16,"b"),e.nc(17,"Fecha: "),e.Nb(),e.nc(18),e.Nb(),e.Nb(),e.Ob(19,"ion-col",5),e.Ob(20,"ion-text"),e.Ob(21,"b"),e.nc(22,"Observaci\xf3n:"),e.Nb(),e.Mb(23,"br"),e.Nb(),e.Ob(24,"ion-text"),e.nc(25),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb(),e.Nb()),2&i){const i=e.Yb();e.zb(2),e.bc("modal",!0),e.zb(7),e.bc("disabledClick",!0)("data",i.data.consolidator),e.zb(5),e.bc("size",12),e.zb(4),e.pc(" ",i.data.date," "),e.zb(1),e.bc("size",12),e.zb(6),e.pc(" ",i.data.observation," ")}}let l=(()=>{class i{constructor(i){this.modalController=i}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){this.data||(yield this.closeModal())})}closeModal(){return Object(n.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}}return i.\u0275fac=function(o){return new(o||i)(e.Lb(s.J))},i.\u0275cmp=e.Fb({type:i,selectors:[["app-modal-detalles-visita"]],inputs:{data:"data"},decls:1,vars:1,consts:[[4,"ngIf"],["title","Detalles visita",3,"modal"],["size","12"],[1,"ion-margin-start"],[3,"disabledClick","data"],[3,"size"]],template:function(i,o){1&i&&e.lc(0,c,26,7,"ion-content",0),2&i&&e.bc("ngIf",o.data)},directives:[a.i,s.m,s.r,b.a,s.B,s.l,s.C,r.a,s.f,s.g],styles:[""]}),i})()}}]);