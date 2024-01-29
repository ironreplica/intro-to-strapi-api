"use strict";(self.webpackChunkintroduction_to_strapi_api=self.webpackChunkintroduction_to_strapi_api||[]).push([[9339],{9339:(ss,I,s)=>{s.d(I,{ProtectedCreatePage:()=>G});var t=s(74081),c=s(27279),T=s(73354),U=s(27875),P=s(10701),g=s(48102),W=s(74758),d=s(93415),h=s(32370),K=s(23298),C=s(74577),f=s(12881),x=s(39708),j=s(79213),r=s(87006),y=s(76827),u=s(84260),p=s(71563),S=s(61020),R=s(51447),$=s(47533),N=s(72450),O=s(47853),n=s(88220),Z=s(36734),ts=s(15816),as=s(97442),_s=s(13576),os=s(87830),rs=s(47184),ns=s(364),is=s(59461),Es=s(49204),ds=s(74919),es=s(29206),ls=s(40464),Ps=s(98934),Ms=s(43433),Ds=s(75719),Os=s(8175),ms=s(6078),gs=s(51943),hs=s(55783),Cs=s(92249),Rs=s(41942),As=s(22919),Ls=s(53915),vs=s(75041),Bs=s(30200),Is=s(91379),cs=s(33299),Ts=s(33409),Us=s(63645),Ws=s(7988),Ks=s(7055),fs=s(26757),xs=s(58311),js=s(24840),ys=s(29510),us=s(16946),ps=s(10124),Ss=s(69530),$s=s(86961),Ns=s(51527),Zs=s(19764),Fs=s(42982),zs=s(26126),Vs=s(10131),Gs=s(63799);const F=O.Ry().shape({name:O.Z_().required(r.I0.required),description:O.Z_().required(r.I0.required)}),z=()=>{const a=(0,R.$B)("/settings/roles/duplicate/:id"),e=(0,r.lm)(),{lockApp:H,unlockApp:J}=(0,r.o1)(),{formatMessage:_}=(0,S.Z)(),{replace:Y}=(0,R.k6)(),m=c.useRef(null),{trackUsage:A}=(0,r.rS)(),{_unstableFormatAPIError:L,_unstableFormatValidationErrors:v}=(0,r.So)(),M=a?.params.id??null,{isLoading:Q,data:B}=(0,n.A)({role:M??""}),{data:X,isLoading:b}=(0,n.B)({id:M},{skip:!M,refetchOnMountOrArgChange:!0}),[k]=(0,n.D)(),[w]=(0,n.E)(),q=async(D,i)=>{try{H(),A(M?"willDuplicateRole":"willCreateNewRole");const o=await k(D);if("error"in o){(0,n.x)(o.error)&&o.error.name==="ValidationError"?i.setErrors(v(o.error)):e({type:"warning",message:L(o.error)});return}const{permissionsToSend:l}=m.current?.getPermissions()??{};if(o.data.id&&Array.isArray(l)&&l.length>0){const E=await w({id:o.data.id,permissions:l});if("error"in E){(0,n.x)(E.error)&&E.error.name==="ValidationError"?i.setErrors(v(E.error)):e({type:"warning",message:L(E.error)});return}}e({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),Y(`/settings/roles/${o.data.id}`)}catch{e({type:"warning",message:{id:"notification.error"}})}finally{J()}};return(0,t.jsxs)(T.o,{children:[(0,t.jsx)(r.SL,{name:"Roles"}),(0,t.jsx)(p.J9,{initialValues:{name:"",description:`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.Z)(new Date,"PPP")}`},onSubmit:q,validationSchema:F,validateOnChange:!1,children:({values:D,errors:i,handleReset:o,handleChange:l,isSubmitting:E})=>(0,t.jsx)(r.l0,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.T,{primaryAction:(0,t.jsxs)(P.k,{gap:2,children:[(0,t.jsx)(g.z,{variant:"secondary",onClick:()=>{o(),m.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,t.jsx)(g.z,{type:"submit",loading:E,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(j.r,{as:$.OL,startIcon:(0,t.jsx)(y.Z,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.D,{children:(0,t.jsxs)(P.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(P.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(P.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.x,{children:[(0,t.jsx)(d.x,{children:(0,t.jsx)(h.Z,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(d.x,{children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(V,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,t.jsxs)(K.r,{gap:4,children:[(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(f.o,{name:"name",error:i.name&&_({id:i.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:l,required:!0,value:D.name})}),(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(x.g,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:i.description&&_({id:i.description}),onChange:l,children:D.description})})]})]})}),!Q&&!b&&B?(0,t.jsx)(d.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(Z.P,{isFormDisabled:!1,ref:m,permissions:X,layout:B})}):(0,t.jsx)(d.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(r.dO,{})})]})})]})})})]})},V=N.ZP.div`
  border: 1px solid ${({theme:a})=>a.colors.primary200};
  background: ${({theme:a})=>a.colors.primary100};
  padding: ${({theme:a})=>`${a.spaces[2]} ${a.spaces[4]}`};
  color: ${({theme:a})=>a.colors.primary600};
  border-radius: ${({theme:a})=>a.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,G=()=>{const a=(0,n.j)(e=>e.admin_app.permissions.settings?.roles.create);return(0,t.jsx)(r.O4,{permissions:a,children:(0,t.jsx)(z,{})})}}}]);
