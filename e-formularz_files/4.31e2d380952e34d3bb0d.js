(window.webpackJsonp=window.webpackJsonp||[]).push([[4,135],{"2VDX":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("2kYt"),a=n("TUxC"),i=n("Qrsi"),r=n("Jzyt"),s=n("EM62");let c=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.o,i.b,r.d]]}),e})()},"7DOY":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n("kuMc"),a=n("MWQY"),i=n("Jp/e"),r=n("EM62"),s=n("nIj0"),c=n("8WQN"),l=n("2kYt"),d=n("TUxC");function p(e,t){1&e&&(r.Tb(0,"div",5),r.hc(1),r.Sb())}function b(e,t){if(1&e&&(r.Tb(0,"span",24),r.Jc(1),r.Sb()),2&e){const e=r.cc().$implicit;r.Ab(1),r.Kc(e.message)}}function u(e,t){if(1&e&&(r.Rb(0),r.Hc(1,b,2,1,"span",23),r.Qb()),2&e){const e=t.$implicit;r.Ab(1),r.jc("ngIf",!0===(null==e?null:e.show))}}function m(e,t){if(1&e&&(r.Tb(0,"div",6),r.Tb(1,"div",7),r.Tb(2,"div",8),r.Ob(3,"ds-dropdown",9),r.Sb(),r.Tb(4,"div",10),r.Jc(5," . "),r.Sb(),r.Tb(6,"div",11),r.Tb(7,"label",12),r.Tb(8,"span"),r.Jc(9,"Wydzia\u0142"),r.Sb(),r.Ob(10,"i",13),r.Sb(),r.Ob(11,"ds-inputmask",14),r.Sb(),r.Tb(12,"div",10),r.Jc(13),r.Sb(),r.Tb(14,"div",15),r.Ob(15,"ds-inputmask",16),r.Sb(),r.Tb(16,"div",10),r.Jc(17," / "),r.Sb(),r.Tb(18,"div",17),r.Ob(19,"ds-inputmask",18),r.Sb(),r.Tb(20,"div",10),r.Jc(21," / "),r.Sb(),r.Tb(22,"div",19),r.Ob(23,"ds-inputmask",20),r.Hc(24,u,2,1,"ng-container",21),r.Sb(),r.Tb(25,"div",22),r.hc(26,1),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.cc(2);r.Ab(3),r.jc("options",e.sadyKod)("optionLabel","label"),r.Ab(8),r.jc("showClear",!1)("capitalize",!0),r.Ab(2),r.Lc(" Ns-Rej.",e.nsRej," "),r.Ab(2),r.jc("showClear",!1),r.Ab(4),r.jc("showClear",!1),r.Ab(4),r.jc("showClear",!1),r.Ab(1),r.jc("ngForOf",e.errorLiczbaKontrolna)}}function h(e,t){1&e&&(r.Tb(0,"div",6),r.Tb(1,"div",7),r.Tb(2,"div",25),r.Ob(3,"ds-input",26),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Ab(3),r.jc("showClear",!1))}function g(e,t){if(1&e&&(r.Tb(0,"fieldset",1),r.Hc(1,p,2,0,"div",2),r.Tb(2,"div",3),r.Hc(3,m,27,9,"div",4),r.Hc(4,h,4,1,"div",4),r.Sb(),r.Sb()),2&e){const e=r.cc();r.jc("formGroup",e.form),r.Ab(1),r.jc("ngIf",!e.hideTitle),r.Ab(1),r.jc("ngClass",e.class),r.Ab(1),r.jc("ngIf",!e.isAdministrator),r.Ab(1),r.jc("ngIf",!e.hideSignature)}}const f=["*",[["","panelButton",""]]],y=["*","[panelButton]"];let C=(()=>{class e extends a.a{constructor(e,t){super(),this.container=e,this.dictService=t,this.isAdministrator=!1,this.nsRej="Za",this.class="card",this.czyKRS=!0,this.loaded=!1,this.errorLiczbaKontrolna=[]}ngOnInit(){this.init()}init(){this.initSelect()}initForm(){this.form=this.container.control,this.loaded=!0,this.assignSelect(this.form.value),this.form.valueChanges.pipe(Object(o.a)(this.destroy$)).subscribe(e=>{this.assignSelect(e)}),this.statusChangesSygnatura()}assignSelect(e){let t="";if(e.sad&&void 0!==e.sad.kod&&!this.czyKRS&&(t=e.sad.kod,null==e.sad.id||""===e.sad.id)){const e=this.sady.filter(e=>e.kod===t)[0];this.form.patchValue({sad:e},{emitEvent:!1})}this.form.patchValue({sygnaturaAkt:`${t}.${e.wydzial} Ns-Rej.${this.nsRej} ${e.numerSprawy}/${e.rok}/${e.liczbaKontrolna}`},{emitEvent:!1})}initSelect(){this.dictService.getSad().subscribe(e=>{this.fullSady=e,this.sady=this.fullSady.filter(e=>"00000000-0000-0000-0000-000000000000"===e.parentId);const t=Array.from(new Set(e.map(e=>e.kod.substring(0,2))));this.sadyKod=t.map(e=>({label:""+e,value:""+e,kod:""+e}))}),this.initForm()}statusChangesSygnatura(){this.form.statusChanges.pipe(Object(o.a)(this.destroy$)).subscribe(()=>{this.errorLiczbaKontrolna=this.form.get("liczbaKontrolna").hasError(i.a.errorCode)?[{show:!0,minValue:0,message:"Niepoprawna liczba konrolna"}]:[]})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(s.a),r.Nb(c.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["sirsim-signature"]],inputs:{isAdministrator:"isAdministrator",hideTitle:"hideTitle",hideSignature:"hideSignature",nsRej:"nsRej",class:"class",czyKRS:"czyKRS"},features:[r.xb],ngContentSelectors:y,decls:1,vars:1,consts:[["class","fieldset",3,"formGroup",4,"ngIf"],[1,"fieldset",3,"formGroup"],["class","h2 text-semi-bold p-py-3",4,"ngIf"],[3,"ngClass"],["class","container",4,"ngIf"],[1,"h2","text-semi-bold","p-py-3"],[1,"container"],[1,"p-grid","w-100"],[1,"p-col-fixed","sad-width"],["label","S\u0105d","formControlName","sad",3,"options","optionLabel"],[1,"slash"],[1,"p-col-fixed","wydzial-width"],["for","wydzialMask",1,"ds-textarea-label"],["dsTooltip","Wprowad\u017a dane w formacie cyfr rzymskich, np. III, XXIII","dsTooltip-theme","light",1,"pi","pi-info-circle","icon","p-ml-2"],["id","wydzialMask","maxLength","6","mask","aaaaaa","formControlName","wydzial","pattern","(^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)","characterPattern","(^(?=[mdclxvi])m*(c[md]|d?c{0,3})(x[cl]|l?x{0,3})(i[xv]|v?i{0,3})$)|(^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)",3,"showClear","capitalize"],[1,"p-col-fixed","numer-sprawy-width"],["label","Numer sprawy","maxLength","8","pattern","^\\d{0,8}$","formControlName","numerSprawy","mask","99999999",3,"showClear"],[1,"p-col-fixed","rok-width"],["maxLength","2","pattern","^\\d{0,2}$","label","Rok","formControlName","rok","mask","99",3,"showClear"],[1,"p-col-fixed","liczba-kontrolna-width"],["maxLength","3","label","Liczba kontrolna","formControlName","liczbaKontrolna","mask","999",3,"showClear"],[4,"ngFor","ngForOf"],[1,"p-col","p-as-end"],["class","errorCtrlMessage",4,"ngIf"],[1,"errorCtrlMessage"],[1,"p-col-fixed","signature-width"],["label","Sygnatura","formControlName","sygnaturaAkt",3,"showClear"]],template:function(e,t){1&e&&(r.ic(f),r.Hc(0,g,5,5,"fieldset",0)),2&e&&r.jc("ngIf",t.loaded)},directives:[l.o,s.q,s.h,l.m,d.v,s.p,s.f,d.Ab,d.A,s.t,l.n,d.y],styles:[".slash[_ngcontent-%COMP%]{padding-top:2rem;font-size:16px}.sad-width[_ngcontent-%COMP%]{width:11ch}.wydzial-width[_ngcontent-%COMP%]{width:9ch}.numer-sprawy-width[_ngcontent-%COMP%]{width:12ch}.rok-width[_ngcontent-%COMP%]{width:8ch}.liczba-kontrolna-width[_ngcontent-%COMP%]{width:14ch}"]}),e})()},"A+qS":function(e,t,n){"use strict";n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return a.a})),n("ObxD"),n("EM62"),n("nIj0"),n("2kYt"),n("TUxC"),n("K86B"),n("bTc2"),n("lT6L"),n("VdPn"),n("5FaW"),n("e7OE"),n("kuMc"),n("MWQY"),n("Dand"),n("/VEu"),n("56if"),n("vobO"),n("e4iD"),n("HClg"),n("8WQN"),n("sEIs"),n("PuzO"),n("AGU8"),n("EOns"),n("4kYy"),n("lED5"),n("jUu1"),n("9e5b");var o=n("TBSx");n("RLiG"),n("01Jp"),n("mcFN"),n("z3U6"),n("MKbv"),n("7DOY"),n("beT6"),n("DEY+"),n("eGWA");var a=n("2VDX")},AGU8:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return e.OSOBA_FIZYCZNA="OsobaFizyczna",e.OSOBA_PRAWNA="OsobaPrawna",e}({})},"DEY+":function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var o=n("ObxD"),a=n("9e5b"),i=n("PuzO"),r=n("lT6L"),s=n("VdPn"),c=n("bTc2"),l=n("MKbv"),d=n("4kYy"),p=n("Dand"),b=n("z3U6"),u=n("RLiG"),m=n("/VEu"),h=n("mcFN"),g=n("5FaW"),f=n("e7OE"),y=n("HClg"),C=n("lNof"),v=n("beT6"),w=n("01Jp"),z=n("iEYn"),O=n("Q2zY"),k=n("xkqN"),M=n("T1Ya"),P=n("q1/n"),x=n("XJqX"),S=n("Emtq"),T=n("TUxC"),I=n("2kYt"),_=n("nIj0"),A=n("EM62");let j=(()=>{class e{}return e.\u0275mod=A.Lb({type:e}),e.\u0275inj=A.Kb({factory:function(t){return new(t||e)},imports:[[I.c,_.u,T.zb]]}),e})();var N=n("izMj"),L=n("TBSx"),E=n("c5eT"),D=n("nIpk"),K=n("bdHW"),H=n("hdKQ"),W=n("R//x"),U=n("Ve9K"),R=n("s+70"),J=n("Knv4"),V=n("EIbE"),Y=n("bnhU"),G=n("2VDX"),$=n("Ivfk"),B=n("LIPh"),Q=n("e4Sp");let X=(()=>{class e{}return e.\u0275mod=A.Lb({type:e}),e.\u0275inj=A.Kb({factory:function(t){return new(t||e)},imports:[[I.c]]}),e})();var Z=n("1PAb");let F=(()=>{class e{}return e.\u0275mod=A.Lb({type:e}),e.\u0275inj=A.Kb({factory:function(t){return new(t||e)},imports:[o.a,c.a,r.a,s.a,g.a,f.a,p.a,m.a,y.a,C.a,i.a,d.a,a.a,u.a,w.a,h.a,b.a,l.a,v.a,z.a,O.a,k.a,M.a,P.a,x.a,S.a,j,N.a,L.a,E.a,R.a,D.a,K.a,H.a,W.a,U.a,G.a,U.a,J.a,V.a,Y.a,$.a,B.InformacjeOKapitaleSlownieModule,Q.PartnerzyModule,X,Z.a]}),e})()},HDrW:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("MWQY"),a=n("kuMc");class i extends o.a{constructor(e,t){super(),this.container=e,this.formTableService=t,this.model=[],this.handleTableAction=this.formTableService.handleTableAction,this.handleRowAction=this.formTableService.handleRowAction}add(){this.selectedIndex=null,this.showOverlay()}edit(e){this.setSelectedIndex(e),this.danePodmiotuPowstania=e,this.showOverlay()}save(e){this.formTableService.update(this.arrayControl,e.getRawValue(),this.selectedIndex),this.hideOverlay()}openDeleteDialog(e){this.setSelectedIndex(e),this.danePodmiotuPowstania=e,this.openDialog=!0}delete(e){e&&(this.formTableService.removeAt(this.arrayControl,this.selectedIndex),this.selectedIndex=null,this.danePodmiotuPowstania=null)}clear(){this.arrayControl.reset([]),this.selectedIndex=null,this.danePodmiotuPowstania=null}hideOverlay(){this.openOverlay=!1,this.selectedIndex=null,this.danePodmiotuPowstania=null}showOverlay(){this.openOverlay=!0}updateModel(){var e;this.model=this.mapModel((null===(e=this.arrayControl)||void 0===e?void 0:e.value)||[])}initTable(){this.initTableDriver(),this.initModel()}initTableDriver(){this.sterownik={key:"",columns:this.getColumns(),tableActions:[this.formTableService.getAddButton()],placeholder:"-",rowButtonActionWidth:"105px",rowButtonActionHeader:"Dzia\u0142ania",rowButtonAction:[this.formTableService.getEditButton(),this.formTableService.getDeleteButton()],paginator:{rows:10}}}initModel(){this.updateModel(),this.arrayControl.valueChanges.pipe(Object(a.a)(this.destroy$)).subscribe(()=>this.updateModel())}setSelectedIndex(e){this.selectedIndex=this.model.findIndex(t=>t===e)}}},ObxD:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("2kYt"),a=n("nIj0"),i=n("TUxC"),r=n("29mQ"),s=n("EM62");let c=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.u,i.z,r.a]]}),e})()},VdPn:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("2kYt"),a=n("nIj0"),i=n("TUxC"),r=n("EM62");let s=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.u,i.z,i.lb]]}),e})()},e4Sp:function(e,t,n){"use strict";n.r(t),n.d(t,"PartnerzyModule",(function(){return S}));var o=n("2kYt"),a=n("HDrW"),i=n("EM62"),r=n("nIj0"),s=n("oetf"),c=n("TUxC"),l=n("R9BS"),d=n("/ICw"),p=n("azj9"),b=n("EOns"),u=n("SGac"),m=n("Jzyt");let h=(()=>{class e{constructor(e){this.container=e}ngOnInit(){this.form=this.container.control,this.disabled&&this.form.disable(),this.yesNoAnswers=[{label:"tak",value:"TAK"},{label:"nie",value:"NIE"}]}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(r.a))},e.\u0275cmp=i.Hb({type:e,selectors:[["sirsim-dane-partnera-form"]],inputs:{disabled:"disabled"},decls:11,vars:14,consts:[[3,"formGroup"],[3,"showHeader"],["controlName","CzyPonosiOdpowiedzialnoscKSHArt95_2","direction","column",3,"showLegend","hideErrors","answers"],["question",""],["formGroupName","ZwiazekMalzenski"],["controlName","CzyOgraniczonaZdolnoscDoCzynnosciPrawnych","direction","column",3,"showLegend","hideErrors","answers"]],template:function(e,t){1&e&&(i.Rb(0,0),i.Ob(1,"sirsim-dane-osoby-fizycznej",1),i.Tb(2,"sirsim-radio",2),i.Tb(3,"div",3),i.Jc(4),i.dc(5,"transloco"),i.Sb(),i.Sb(),i.Ob(6,"sirsim-zwiazek-malzenski",4),i.Tb(7,"sirsim-radio",5),i.Tb(8,"div",3),i.Jc(9),i.dc(10,"transloco"),i.Sb(),i.Sb(),i.Qb()),2&e&&(i.jc("formGroup",t.form),i.Ab(1),i.jc("showHeader",!1),i.Ab(1),i.jc("showLegend",!1)("hideErrors",!0)("answers",t.yesNoAnswers),i.Ab(2),i.Kc(i.ec(5,10,"czyPonosiOdpowiedzialnoscKSHArt95_2")),i.Ab(3),i.jc("showLegend",!1)("hideErrors",!0)("answers",t.yesNoAnswers),i.Ab(2),i.Kc(i.ec(10,12,"czyMaOgraniczonaZdolnoscDoCzynnosciPrawnych")))},directives:[r.q,r.h,p.a,b.a,u.a,r.i],pipes:[m.e],styles:[".container[_ngcontent-%COMP%]{display:flex}.fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.fieldset[_ngcontent-%COMP%] > .ds-panel--margin[_ngcontent-%COMP%]:first-child{margin-top:0}.card[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border:1px solid #e0e0e0;border-radius:2px}.p-grid[_ngcontent-%COMP%]   ds-checkbox[_ngcontent-%COMP%]     p-checkbox{margin-top:1.85rem}label[_ngcontent-%COMP%]{color:#606060;display:block;font-size:14px;padding:0}ds-table[_ngcontent-%COMP%]    >div>p-table   tr.table-row td.row-button-actions ds-button.p-mr-2:last-child{margin-right:0!important}ds-table[_ngcontent-%COMP%]    >div>p-table   th{word-break:break-word}ds-table[_ngcontent-%COMP%]    >div>p-table   .ekrs-shrink-padding{padding:.75rem .25rem}ds-inputmask[_ngcontent-%COMP%]     .p-inputtext{height:33.61px!important}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::-moz-placeholder{text-transform:none}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::placeholder{text-transform:none}sirsim-overlay[_ngcontent-%COMP%]   ds-table[_ngcontent-%COMP%]     .p-datatable  {padding:20px 0}ds-table[_ngcontent-%COMP%]     .custom-table-footer{padding:0 1rem;margin-bottom:1rem}"]}),e})(),g=(()=>{class e{constructor(e){this.formGroupService=e,this.save=new i.n,this.hideOverlay=new i.n}ngOnInit(){this.form=this.formGroupService[this.getMethodName](),this.osoba&&this.form.patchValue(this.osoba),this.disabled&&this.form.disable()}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(l.a))},e.\u0275cmp=i.Hb({type:e,selectors:[["sirsim-partner-overlay"]],inputs:{overlayHeader:"overlayHeader",osoba:"osoba",getMethodName:"getMethodName",disabled:"disabled"},outputs:{save:"save",hideOverlay:"hideOverlay"},decls:3,vars:8,consts:[[3,"overlayHeader","formGroup","center","margin","paddingLeft","autoReadonly","submitForm","hide","alternate"]],template:function(e,t){1&e&&(i.Tb(0,"sirsim-overlay",0),i.ac("submitForm",(function(e){return t.save.emit(e)}))("hide",(function(){return t.hideOverlay.emit()}))("alternate",(function(){return t.hideOverlay.emit()})),i.dc(1,"transloco"),i.Ob(2,"sirsim-dane-partnera-form"),i.Sb()),2&e&&i.jc("overlayHeader",i.ec(1,6,t.overlayHeader))("formGroup",t.form)("center",!1)("margin",!0)("paddingLeft",!0)("autoReadonly",!0)},directives:[d.a,r.q,r.h,h],pipes:[m.e],styles:[".container[_ngcontent-%COMP%]{display:flex}.fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.fieldset[_ngcontent-%COMP%] > .ds-panel--margin[_ngcontent-%COMP%]:first-child{margin-top:0}.card[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border:1px solid #e0e0e0;border-radius:2px}.p-grid[_ngcontent-%COMP%]   ds-checkbox[_ngcontent-%COMP%]     p-checkbox{margin-top:1.85rem}label[_ngcontent-%COMP%]{color:#606060;display:block;font-size:14px;padding:0}ds-table[_ngcontent-%COMP%]    >div>p-table   tr.table-row td.row-button-actions ds-button.p-mr-2:last-child{margin-right:0!important}ds-table[_ngcontent-%COMP%]    >div>p-table   th{word-break:break-word}ds-table[_ngcontent-%COMP%]    >div>p-table   .ekrs-shrink-padding{padding:.75rem .25rem}ds-inputmask[_ngcontent-%COMP%]     .p-inputtext{height:33.61px!important}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::-moz-placeholder{text-transform:none}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::placeholder{text-transform:none}sirsim-overlay[_ngcontent-%COMP%]   ds-table[_ngcontent-%COMP%]     .p-datatable  {padding:20px 0}ds-table[_ngcontent-%COMP%]     .custom-table-footer{padding:0 1rem;margin-bottom:1rem}"]}),e})();function f(e,t){if(1&e){const e=i.Ub();i.Tb(0,"sirsim-partner-overlay",7),i.ac("save",(function(t){return i.zc(e),i.cc().save(t)}))("hideOverlay",(function(){return i.zc(e),i.cc().hideOverlay()})),i.Sb()}if(2&e){const e=i.cc();i.jc("overlayHeader",e.overlayHeader)("osoba",null==e.arrayControl?null:e.arrayControl.value[e.selectedIndex])("getMethodName","getPartnerGroup")}}function y(e,t){if(1&e&&(i.Tb(0,"p"),i.Jc(1),i.Sb()),2&e){const e=t.$implicit;i.Ab(1),i.Kc(e.NazwiskoIICzlon?e.NazwiskoICzlon+"-"+e.NazwiskoIICzlon:e.NazwiskoICzlon)}}function C(e,t){if(1&e&&(i.Tb(0,"p"),i.Jc(1),i.Sb()),2&e){const e=t.$implicit;i.Ab(1),i.Mc("",e.Imie," ",e.ImieDrugie,"")}}const v=function(e,t){return{NazwiskoICzlon:e,Imie:t}};let w=(()=>{class e extends a.a{constructor(e,t){super(e,t),this.container=e,this.ftService=t,this.overlayHeader="danePartnera"}ngOnInit(){this.form=this.container.control.get("Partnerzy"),this.arrayControl=this.form.get("Partner"),this.initTable()}getColumns(){return[{field:"NazwiskoICzlon",header:"Nazwisko",dataType:"string"},{field:"Imie",header:"Imiona",dataType:"string"},{field:"PESEL",header:"PESEL",dataType:"string"}]}mapModel(e){return e.map(e=>Object.assign(Object.assign(Object.assign({},e),e.ZwiazekMalzenski),{originalValue:e}))}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(r.a),i.Nb(s.a))},e.\u0275cmp=i.Hb({type:e,selectors:[["sirsim-partnerzy"]],features:[i.xb],decls:13,vars:17,consts:[["id","danePartnerow",1,"legend","p-mb-3"],["styleClass","p-panel-header-display-none","role","group","aria-labelledby","danePartnerow"],[3,"sterownik","model","columnTemplates","tableAction","rowAction"],[3,"overlayHeader","osoba","getMethodName","save","hideOverlay",4,"ngIf"],["icon","pi-trash","width","350px",3,"header","message","openDialog","closed","openDialogChange"],["nazwiskoTmpl",""],["imionaTmpl",""],[3,"overlayHeader","osoba","getMethodName","save","hideOverlay"]],template:function(e,t){if(1&e&&(i.Tb(0,"div",0),i.Jc(1),i.dc(2,"transloco"),i.Sb(),i.Tb(3,"ds-panel",1),i.Tb(4,"ds-table",2),i.ac("tableAction",(function(e){return t.handleTableAction(e)}))("rowAction",(function(e){return t.handleRowAction(e)})),i.Sb(),i.Sb(),i.Hc(5,f,1,3,"sirsim-partner-overlay",3),i.Tb(6,"ds-confirm-dialog",4),i.ac("closed",(function(e){return t.delete(e)}))("openDialogChange",(function(e){return t.openDialog=e})),i.dc(7,"transloco"),i.dc(8,"transloco"),i.Sb(),i.Hc(9,y,2,1,"ng-template",null,5,i.Ic),i.Hc(11,C,2,2,"ng-template",null,6,i.Ic)),2&e){const e=i.xc(10),n=i.xc(12);i.Ab(1),i.Lc("I. ",i.ec(2,8,"danePartnerow"),""),i.Ab(3),i.jc("sterownik",t.sterownik)("model",t.model)("columnTemplates",i.pc(14,v,e,n)),i.Ab(1),i.jc("ngIf",t.openOverlay),i.Ab(1),i.kc("header",i.ec(7,10,"dialogPotwierdzenia.usuniecieNaglowek")),i.kc("message",i.ec(8,12,"dialogPotwierdzenia.usuniecieWiadomosc")),i.jc("openDialog",t.openDialog)}},directives:[c.db,c.vb,o.o,c.t,g],pipes:[m.e],styles:["",".container[_ngcontent-%COMP%]{display:flex}.fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.fieldset[_ngcontent-%COMP%] > .ds-panel--margin[_ngcontent-%COMP%]:first-child{margin-top:0}.card[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border:1px solid #e0e0e0;border-radius:2px}.p-grid[_ngcontent-%COMP%]   ds-checkbox[_ngcontent-%COMP%]     p-checkbox{margin-top:1.85rem}label[_ngcontent-%COMP%]{color:#606060;display:block;font-size:14px;padding:0}ds-table[_ngcontent-%COMP%]    >div>p-table   tr.table-row td.row-button-actions ds-button.p-mr-2:last-child{margin-right:0!important}ds-table[_ngcontent-%COMP%]    >div>p-table   th{word-break:break-word}ds-table[_ngcontent-%COMP%]    >div>p-table   .ekrs-shrink-padding{padding:.75rem .25rem}ds-inputmask[_ngcontent-%COMP%]     .p-inputtext{height:33.61px!important}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::-moz-placeholder{text-transform:none}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::placeholder{text-transform:none}sirsim-overlay[_ngcontent-%COMP%]   ds-table[_ngcontent-%COMP%]     .p-datatable  {padding:20px 0}ds-table[_ngcontent-%COMP%]     .custom-table-footer{padding:0 1rem;margin-bottom:1rem}"]}),e})();var z=n("sEIs"),O=n("Mboa"),k=n("hwj3"),M=n("TBSx"),P=n("mEsQ");let x=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[o.c,O.a,k.a,M.a,P.a,m.d,r.u]]}),e})(),S=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[o.c,c.fb,m.d,c.wb,r.u,c.u,z.i.forChild([{path:"",component:w}]),x]]}),e})()},e7OE:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("2kYt"),a=n("nIj0"),i=n("TUxC"),r=n("EM62");let s=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.u,i.w,i.z]]}),e})()},eGWA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("EM62"),a=n("TUxC"),i=n("Qrsi"),r=n("Jzyt");let s=(()=>{class e{constructor(){this.clicked=new o.n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["sirsim-table-action"]],inputs:{icon:"icon",tooltip:"tooltip"},outputs:{clicked:"clicked"},decls:2,vars:4,consts:[["tooltipPosition","top","severity","link",1,"p-mr-2",3,"icon","pTooltip","onClick"]],template:function(e,t){1&e&&(o.Tb(0,"ds-button",0),o.ac("onClick",(function(){return t.clicked.emit()})),o.dc(1,"transloco"),o.Sb()),2&e&&(o.lc("icon","pi ",t.icon,""),o.jc("pTooltip",o.ec(1,2,t.tooltip)))},directives:[a.n,i.a],pipes:[r.e],styles:["i[_ngcontent-%COMP%]{cursor:pointer}i[_ngcontent-%COMP%]:hover{font-size:18px}"]}),e})()},jUu1:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n("TUxC"),a=n("kuMc"),i=n("MWQY"),r=n("EM62"),s=n("nIj0"),c=n("sEIs"),l=n("2kYt"),d=n("Jzyt");function p(e,t){1&e&&(r.Tb(0,"ds-panel",7),r.Tb(1,"div",8),r.Jc(2),r.dc(3,"transloco"),r.Sb(),r.Tb(4,"div",3),r.Ob(5,"ds-radio",9),r.dc(6,"transloco"),r.Ob(7,"ds-radio",9),r.dc(8,"transloco"),r.Sb(),r.Sb()),2&e&&(r.Ab(2),r.Lc("",r.ec(3,5,"oswiadczenieZeWlascicelLubUzytkownikWieczysty"),":"),r.Ab(3),r.jc("value","TAK")("label",r.ec(6,7,"tak")),r.Ab(2),r.jc("value","NIE")("label",r.ec(8,9,"nie")))}let b=(()=>{class e extends i.a{constructor(e,t){super(),this.container=e,this.router=t,t.events.pipe(Object(a.a)(this.destroy$)).subscribe(e=>{this.onValidate()})}ngOnInit(){this.form=this.container.control.get("DanePodmiotu.OswiadczenieCudzoziemiec")||this.container.control.get("PodmiotZmieniany.OswiadczenieCudzoziemiec")}onValidate(){null!=this.form&&this.form.updateValueAndValidity()}ngDoCheck(){var e;null===(e=this.dsPanelComponent)||void 0===e||e.forEach(e=>e.showHeader=!1)}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(s.a),r.Nb(c.e))},e.\u0275cmp=r.Hb({type:e,selectors:[["sirsim-oswiadczenie-cudzoziemiec"]],viewQuery:function(e,t){var n;1&e&&r.Oc(o.db,!0),2&e&&r.wc(n=r.bc())&&(t.dsPanelComponent=n)},features:[r.xb],decls:11,vars:13,consts:[[1,"fieldset",3,"formGroup"],["role","radiogroup","aria-labelledby","oswiadczamZeSpolkaJestCudzoziemcem","styleClass","p-panel-header-display-none"],["id","oswiadczamZeSpolkaJestCudzoziemcem",1,"question"],[1,"flex","column","p-mt-2"],["formControlName","CzyCudzoziemiecWRozumieniuUstawy","name","CzyCudzoziemiecWRozumieniuUstawy",3,"value","label"],["formControlName","CzyCudzoziemiecWRozumieniuUstawy","name","CzyCudzoziemiecWRozumieniuUstawy",3,"value","label","ngModelChange"],["class","ds-panel--margin","role","radiogroup","aria-labelledby","oswiadczenieZeWlascicelLubUzytkownikWieczysty","styleClass","p-panel-header-display-none",4,"ngIf"],["role","radiogroup","aria-labelledby","oswiadczenieZeWlascicelLubUzytkownikWieczysty","styleClass","p-panel-header-display-none",1,"ds-panel--margin"],["id","oswiadczenieZeWlascicelLubUzytkownikWieczysty",1,"question"],["formControlName","CzyWlascicelLubUzytkownikWieczysty","name","CzyWlascicelLubUzytkownikWieczysty",3,"value","label"]],template:function(e,t){1&e&&(r.Tb(0,"fieldset",0),r.Tb(1,"ds-panel",1),r.Tb(2,"div",2),r.Jc(3),r.dc(4,"transloco"),r.Sb(),r.Tb(5,"div",3),r.Ob(6,"ds-radio",4),r.dc(7,"transloco"),r.Tb(8,"ds-radio",5),r.ac("ngModelChange",(function(){return t.form.controls.CzyWlascicelLubUzytkownikWieczysty.reset()})),r.dc(9,"transloco"),r.Sb(),r.Sb(),r.Sb(),r.Hc(10,p,9,11,"ds-panel",6),r.Sb()),2&e&&(r.jc("formGroup",t.form),r.Ab(3),r.Lc("",r.ec(4,7,"oswiadczamZeSpolkaJestCudzoziemcem"),":"),r.Ab(3),r.jc("value","TAK")("label",r.ec(7,9,"tak")),r.Ab(2),r.jc("value","NIE")("label",r.ec(9,11,"nie")),r.Ab(2),r.jc("ngIf","TAK"==t.form.get("CzyCudzoziemiecWRozumieniuUstawy").value))},directives:[s.q,s.h,o.db,o.kb,s.p,s.f,l.o],pipes:[d.e],styles:["",".container[_ngcontent-%COMP%]{display:flex}.fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.fieldset[_ngcontent-%COMP%] > .ds-panel--margin[_ngcontent-%COMP%]:first-child{margin-top:0}.card[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border:1px solid #e0e0e0;border-radius:2px}.p-grid[_ngcontent-%COMP%]   ds-checkbox[_ngcontent-%COMP%]     p-checkbox{margin-top:1.85rem}label[_ngcontent-%COMP%]{color:#606060;display:block;font-size:14px;padding:0}ds-table[_ngcontent-%COMP%]    >div>p-table   tr.table-row td.row-button-actions ds-button.p-mr-2:last-child{margin-right:0!important}ds-table[_ngcontent-%COMP%]    >div>p-table   th{word-break:break-word}ds-table[_ngcontent-%COMP%]    >div>p-table   .ekrs-shrink-padding{padding:.75rem .25rem}ds-inputmask[_ngcontent-%COMP%]     .p-inputtext{height:33.61px!important}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::-moz-placeholder{text-transform:none}ds-autocomplete[_ngcontent-%COMP%]    >div>p-autocomplete  >span>input::placeholder{text-transform:none}sirsim-overlay[_ngcontent-%COMP%]   ds-table[_ngcontent-%COMP%]     .p-datatable  {padding:20px 0}ds-table[_ngcontent-%COMP%]     .custom-table-footer{padding:0 1rem;margin-bottom:1rem}"]}),e})()},lED5:function(e,t,n){"use strict";n.r(t),n.d(t,"OswiadczenieCudzoziemiecModule",(function(){return d}));var o=n("2kYt"),a=n("nIj0"),i=n("jUu1"),r=n("Jzyt"),s=n("TUxC"),c=n("sEIs"),l=n("EM62");let d=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.u,r.d,s.lb,s.fb,c.i.forChild([{path:"",component:i.a}])]]}),e})()}}]);