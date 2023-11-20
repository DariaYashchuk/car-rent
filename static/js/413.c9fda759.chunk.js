"use strict";(self.webpackChunkcar_rent=self.webpackChunkcar_rent||[]).push([[413],{409:(n,e,r)=>{r.d(e,{H:()=>Zn});var i,s=r(791),o=r(434),t=r(116),l=r(923),a=r(488),c=r(168),d=r(867);const p=d.ZP.button(i||(i=(0,c.Z)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--regular-btn-color);\n  color: var(--white-color);\n  margin-top: 28px;\n\n  font-weight: 600;\n  line-height: 1.43;\n\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.01);\n    background: var(--active-btn-color);\n  }\n"])));var x=r(184);const h=n=>{let{openModal:e}=n;return(0,x.jsx)(p,{onClick:e,children:"Learm More"})};var j,f,g,u,Z,m,v,w,b,P,k,y,z,C,E,M=r(164);const S=d.ZP.div(j||(j=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--backdrop-color);\n\n  z-index: 998;\n\n  transition: all 250ms ease-in-out;\n"]))),T=d.ZP.div(f||(f=(0,c.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--white-color);\n  border-radius: 24px;\n  padding: 40px;\n\n  z-index: 999;\n\n  transition: all 250ms ease-in-out;\n\n  overflow: auto;\n"]))),I=d.ZP.div(g||(g=(0,c.Z)(["\n  max-width: 461px;\n  overflow: scroll;\n  height: 500px;\n"]))),O=d.ZP.button(u||(u=(0,c.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n\n  font-size: 24px;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),F=d.ZP.img(Z||(Z=(0,c.Z)(["\n  border-radius: 14px;\n"]))),L=d.ZP.h2(m||(m=(0,c.Z)(["\n  margin-top: 14px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),R=d.ZP.span(v||(v=(0,c.Z)(["\n  color: var(--accent-text-color);\n"]))),A=d.ZP.div(w||(w=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n\n  margin-top: 8px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n"]))),H=d.ZP.p(b||(b=(0,c.Z)(["\n  margin-top: 14px;\n"]))),N=d.ZP.p(P||(P=(0,c.Z)(["\n  margin-top: 24px;\n  font-weight: 500;\n"]))),_=d.ZP.p(k||(k=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n\n  margin-top: 8px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n"]))),B=d.ZP.p(y||(y=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n\n  margin-top: 4px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n"]))),V=d.ZP.div(z||(z=(0,c.Z)(["\n  padding: 7px 14px;\n  font-size: 12px;\n  border-radius: 35px;\n  background: #f9f9f9;\n"]))),Y=d.ZP.div(C||(C=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n\n  margin-top: 8px;\n"]))),$=d.ZP.a(E||(E=(0,c.Z)(["\n  display: inline-block;\n\n  padding: 12px 50px;\n  border-radius: 12px;\n  background: var(--regular-btn-color);\n  color: var(--white-color);\n  margin-top: 24px;\n\n  font-weight: 600;\n  line-height: 1.43;\n\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.01);\n    background: var(--active-btn-color);\n  }\n"])));var q=r(71);const D=n=>{let{isModalOpened:e,closeModal:r,car:i}=n;const{model:o,img:t,description:l,make:a,address:c,year:d,id:p,type:h,fuelConsumption:j,engineSize:f,accessories:g,functionalities:u,rentalConditions:Z,mileage:m,rentalPrice:v}=i,w=Z.split("\n"),b=w[0].split(": "),P=m.toString().split("");P.splice(-3,0,",");const k=P.join(""),y=v.split("");y.splice(0,1),y.push("$");const z=y.join("");if((0,s.useEffect)((()=>{const n=n=>{e&&"Escape"===n.key&&r()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,r]),!e)return null;const C=c.split(", "),E=C[1],D=C[2];return M.createPortal((0,x.jsx)(S,{onClick:n=>{n.target===n.currentTarget&&r()},children:(0,x.jsxs)(T,{children:[(0,x.jsx)(O,{onClick:r,children:(0,x.jsx)(q.IOM,{})}),(0,x.jsxs)(I,{children:[(0,x.jsx)(F,{src:t,alt:o}),(0,x.jsxs)(L,{children:[a," ",(0,x.jsx)(R,{children:o}),", ",d]}),(0,x.jsxs)(A,{children:[(0,x.jsx)("p",{children:E}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("p",{children:D}),(0,x.jsx)("span",{children:"|"}),(0,x.jsxs)("p",{children:["Id: ",p]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsxs)("p",{children:["Year: ",d]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsxs)("p",{children:["Type: ",h]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsxs)("p",{children:["Fuel Consumption: ",j]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsxs)("p",{children:["Engine Size: ",f]})]}),(0,x.jsx)(H,{children:l}),(0,x.jsx)(N,{children:"Accessories and functionalities:"}),(0,x.jsxs)(_,{children:[(0,x.jsx)("p",{children:g[0]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("p",{children:g[1]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("p",{children:g[2]})]}),(0,x.jsxs)(B,{children:[(0,x.jsx)("p",{children:u[0]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("p",{children:u[1]}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("p",{children:u[2]})]}),(0,x.jsx)(N,{children:"Rental Conditions: "}),(0,x.jsxs)(Y,{children:[(0,x.jsx)(V,{children:(0,x.jsxs)("p",{children:[b[0],": ",(0,x.jsx)(R,{children:b[1]})]})}),(0,x.jsx)(V,{children:(0,x.jsx)("p",{children:w[1]})}),(0,x.jsx)(V,{children:(0,x.jsx)("p",{children:w[2]})}),(0,x.jsx)(V,{children:(0,x.jsxs)("p",{children:["Mileage: ",(0,x.jsx)(R,{children:k})]})}),(0,x.jsx)(V,{children:(0,x.jsxs)("p",{children:["Price: ",(0,x.jsx)(R,{children:z})]})})]}),(0,x.jsx)($,{href:"tel:+380730000000",children:"Rental car"})]})]})}),document.getElementById("modal"))};var G,J,K,Q,U,W,X,nn,en,rn,sn=r(692);const on=d.ZP.li(G||(G=(0,c.Z)(["\n  max-width: 274px;\n"]))),tn=d.ZP.div(J||(J=(0,c.Z)(["\n  position: relative;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.01);\n  }\n"]))),ln=d.ZP.img(K||(K=(0,c.Z)(["\n  width: 274px;\n  height: 268px;\n  border-radius: 14px;\n  object-fit: cover;\n  cursor: pointer;\n"]))),an=d.ZP.div(Q||(Q=(0,c.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),cn=(0,d.ZP)(sn.kTx)(U||(U=(0,c.Z)(["\n  fill: #ffffff;\n  width: 100%;\n  height: 100%;\n"]))),dn=(0,d.ZP)(sn.SEb)(W||(W=(0,c.Z)(["\n  color: var(--regular-btn-color);\n  width: 100%;\n  height: 100%;\n"]))),pn=d.ZP.div(X||(X=(0,c.Z)(["\n  margin-top: 14px;\n  display: flex;\n  justify-content: space-between;\n"]))),xn=d.ZP.h2(nn||(nn=(0,c.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n"]))),hn=d.ZP.span(en||(en=(0,c.Z)(["\n  color: var(--accent-text-color);\n"]))),jn=d.ZP.p(rn||(rn=(0,c.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  margin-top: 8px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n"]))),fn=n=>{let{car:e}=n;const{id:r,year:i,make:c,model:d,type:p,img:j,functionalities:f,rentalPrice:g,rentalCompany:u,address:Z}=e,[m,v]=(0,s.useState)(!1),[w,b]=(0,s.useState)(!1),P=(0,o.I0)(),{favorites:k}=(0,o.v9)(l.T);(0,s.useEffect)((()=>{k.some((n=>n.id===e.id))&&v(!0)}),[k,e]);const y=Z.split(", "),z=y[1],C=y[2];return(0,x.jsxs)(on,{children:[(0,x.jsxs)(tn,{children:[(0,x.jsx)(ln,{src:j,alt:d}),(0,x.jsx)(an,{onClick:()=>{v(!m),k.some((n=>n.id===e.id))?P((0,a.Ni)(e)):P((0,a.a3)(e))},children:m?(0,x.jsx)(dn,{}):(0,x.jsx)(cn,{})})]}),(0,x.jsxs)(pn,{children:[(0,x.jsxs)(xn,{children:[c," ",(0,x.jsx)(hn,{children:d}),", ",i]}),(0,x.jsx)(xn,{children:g})]}),(0,x.jsxs)(jn,{children:[z," | ",C," | ",u," | ",p]}),(0,x.jsxs)(jn,{children:[d," | ",r," | ",f[0]]}),(0,x.jsx)(h,{openModal:()=>{b(!0),P((0,t.j)(r))}}),w&&(0,x.jsx)(D,{isModalOpened:w,closeModal:()=>{b(!1)},car:e})]})};var gn;const un=d.ZP.ul(gn||(gn=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n  margin-top: 50px;\n"]))),Zn=n=>{let{cars:e}=n;return(0,x.jsx)(un,{children:e.map((n=>(0,x.jsx)(fn,{car:n},n.id)))})}},413:(n,e,r)=>{r.r(e),r.d(e,{default:()=>l});var i=r(434),s=r(409),o=r(923),t=r(184);const l=()=>{const{favorites:n}=(0,i.v9)(o.T);return(0,t.jsx)(t.Fragment,{children:n.length>0?(0,t.jsx)(s.H,{cars:n}):(0,t.jsx)("p",{children:"NO FAVORITES"})})}},923:(n,e,r)=>{r.d(e,{T:()=>i});const i=n=>n.favorites}}]);
//# sourceMappingURL=413.c9fda759.chunk.js.map