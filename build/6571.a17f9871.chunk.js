"use strict";(self.webpackChunkintroduction_to_strapi_api=self.webpackChunkintroduction_to_strapi_api||[]).push([[6571],{46571:(k,M,s)=>{s.r(M),s.d(M,{default:()=>y});var t=s(74081),O=s(27279),L=s(93415),R=s(23298),P=s(74577),c=s(5627),m=s(78955),W=s(27997),B=s(73354),I=s(27875),U=s(48102),K=s(74758),g=s(87006),j=s(76827),h=s(59082),x=s(6078),d=s(70627),u=s(61020),a=s(69501),S=s(61815),z=s(98934),N=s(43433),w=s(31855),q=s(29206),ss=s(40464),ts=s(71563),is=s(47853),as=s(50547),es=s(74063),ns=s(10124);const C=({sort:n="",pageSize:_=10,onChange:e})=>{const{formatMessage:o}=(0,u.Z)();return(0,t.jsx)(L.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(R.r,{gap:4,children:[(0,t.jsx)(P.P,{s:12,col:6,children:(0,t.jsx)(c.P,{label:o({id:(0,a.g)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,a.g)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:i=>e({target:{name:"pageSize",value:i}}),name:"pageSize",value:_,children:a.C.map(i=>(0,t.jsx)(m.W,{value:i,children:i},i))})}),(0,t.jsx)(P.P,{s:12,col:6,children:(0,t.jsx)(c.P,{label:o({id:(0,a.g)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,a.g)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:i=>e({target:{name:"sort",value:i}}),name:"sort",value:n,"test-sort":n,"data-testid":"sort-select",children:a.D.map(i=>(0,t.jsx)(m.W,{"data-testid":`sort-option-${i.value}`,value:i.value,children:o({id:(0,a.g)(i.key),defaultMessage:`${i.value}`})},i.key))})})]})})};C.propTypes={sort:d.string.isRequired,pageSize:d.number.isRequired,onChange:d.func.isRequired};const v=`${a.p}/ON_CHANGE`,f=`${a.p}/SET_LOADED`,Z=({name:n,value:_})=>({type:v,keys:n,value:_}),$=()=>({type:f}),l={initialData:{},modifiedData:{}},p=n=>({...l,initialData:n,modifiedData:n}),b=(n=l,_)=>(0,S.ZP)(n,e=>{switch(_.type){case v:{N(e,["modifiedData",..._.keys.split(".")],_.value);break}case f:{const o=p(z(e,["modifiedData"],{}));e.initialData=o.initialData,e.modifiedData=o.modifiedData;break}default:return e}}),y=({config:n})=>{const{trackUsage:_}=(0,g.rS)(),{formatMessage:e}=(0,u.Z)(),o=(0,g.lm)(),{mutateConfig:i}=(0,a.z)(),{isLoading:T}=i,[H,F]=(0,O.useState)(!1),D=()=>F(E=>!E),[G,A]=(0,O.useReducer)(b,l,()=>p(n)),{initialData:Q,modifiedData:r}=G,V=E=>{E.preventDefault(),D()},Y=async()=>{_("willEditMediaLibraryConfig"),await i.mutateAsync(r),D(),A($()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},J=({target:{name:E,value:X}})=>{A(Z({name:E,value:X}))};return(0,g.go)(),(0,t.jsx)(W.A,{children:(0,t.jsx)(B.o,{"aria-busy":T,children:(0,t.jsxs)("form",{onSubmit:V,children:[(0,t.jsx)(I.T,{navigationAction:(0,t.jsx)(g.rU,{startIcon:(0,t.jsx)(j.Z,{}),to:`/plugins/${a.p}`,id:"go-back",children:e({id:(0,a.g)("config.back"),defaultMessage:"Back"})}),primaryAction:(0,t.jsx)(U.z,{size:"S",startIcon:(0,t.jsx)(h.Z,{}),disabled:x(r,Q),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,a.g)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:e({id:(0,a.g)("config.title"),defaultMessage:"Configure the view - Media Library"})}),(0,t.jsx)(K.D,{children:(0,t.jsx)(C,{"data-testid":"settings",pageSize:r.pageSize||"",sort:r.sort||"",onChange:J})}),(0,t.jsx)(g.QH,{bodyText:{id:(0,a.g)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:(0,t.jsx)(h.Z,{}),isConfirmButtonLoading:T,isOpen:H,onToggleDialog:D,onConfirm:Y,variantRightButton:"success-light"})]})})})};y.propTypes={config:d.shape({pageSize:d.number,sort:d.string}).isRequired}}}]);
