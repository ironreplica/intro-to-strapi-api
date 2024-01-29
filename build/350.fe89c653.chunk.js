"use strict";(self.webpackChunkintroduction_to_strapi_api=self.webpackChunkintroduction_to_strapi_api||[]).push([[350],{60350:(B,M,_)=>{_.r(M),_.d(M,{AdminSeatInfoEE:()=>m});var s=_(74081),D=_(74577),E=_(32370),O=_(10701),t=_(2981),P=_(50703),d=_(79213),a=_(87006),i=_(15206),n=_(48157),l=_(61020),R=_(59461),U=_(13067),T=_(88108),S=_(27279),F=_(64797),N=_(85811),Z=_(88220),G=_(15816),H=_(97442),u=_(13576),z=_(87830),J=_(47184),Q=_(364),V=_(71563),X=_(49204),Y=_(47853),$=_(74919),p=_(29206),k=_(40464),w=_(98934),b=_(43433),q=_(75719),__=_(8175),s_=_(6078),E_=_(51943),t_=_(55783),a_=_(92249),n_=_(41942),M_=_(22919),O_=_(53915),o_=_(75041),D_=_(30200),P_=_(91379),d_=_(33299),i_=_(33409),l_=_(63645),L_=_(7988),C_=_(7055),A_=_(26757),I_=_(58311),v_=_(24840),B_=_(29510),R_=_(16946),U_=_(10124),T_=_(69530),W_=_(86961),K_=_(51527),m_=_(19764),r_=_(42982),h_=_(26126);const W="https://cloud.strapi.io/profile/billing",K="https://strapi.io/billing/request-seats",m=()=>{const{formatMessage:o}=(0,l.Z)(),{settings:r}=(0,R.v9)(U.s),{isLoading:C,allowedActions:{canRead:h,canCreate:g,canUpdate:f,canDelete:x}}=(0,a.ss)(r?.users??{}),{license:A,isError:j,isLoading:c}=(0,T.u)({enabled:!C&&h&&g&&f&&x});if(j||(C||c)||!A)return null;const{licenseLimitStatus:e,enforcementUserCount:I,permittedSeats:L,isHostedOnStrapiCloud:v}=A;return L?(0,s.jsxs)(D.P,{col:6,s:12,children:[(0,s.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:o({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,s.jsxs)(O.k,{gap:2,children:[(0,s.jsx)(O.k,{children:(0,s.jsx)(E.Z,{as:"p",children:o({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:L,enforcementUserCount:I,text:y=>(0,s.jsx)(E.Z,{fontWeight:"semiBold",textColor:I>L?"danger500":void 0,children:y})})})}),e==="OVER_LIMIT"&&(0,s.jsx)(t.u,{description:o({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,s.jsx)(P.J,{width:(0,a.Q1)(14),height:(0,a.Q1)(14),color:"danger500",as:i.Z})})]}),(0,s.jsx)(d.r,{href:v?W:K,isExternal:!0,endIcon:(0,s.jsx)(n.Z,{}),children:o({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:v})})]}):null}},88108:(B,M,_)=>{_.d(M,{u:()=>E});var s=_(27279),D=_(88220);function E({enabled:O}={enabled:!0}){const{data:t,isError:P,isLoading:d}=(0,D.n)(void 0,{skip:!O}),a=s.useCallback(i=>{const n=t?.data?.features.find(l=>l.name===i);return n&&"options"in n?n.options:{}},[t]);return{license:t?.data,getFeature:a,isError:P,isLoading:d}}}}]);
