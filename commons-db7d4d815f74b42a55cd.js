"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{1046:function(e,t,n){n.d(t,{w_:function(){return d},Pd:function(){return o}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function d(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,a=e.attr,o=e.size,c=e.title,d=l(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},6592:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(7294),a=n(3201),o=n(1046),i=n(1082),l=n(3494),c=l.default.nav.withConfig({displayName:"NavbarElements__Nav",componentId:"sc-1rzqmq7-0"})(["background:var(--dark);height:90px;display:flex;z-index:999;top:0;right:0;margin:0;padding:0 2%;position:sticky;justify-content:space-between;vertical-align:middle;@media screen and (max-width:960px){transition:0.8s all ease;}"]),d=l.default.div.withConfig({displayName:"NavbarElements__NavbarContainer",componentId:"sc-1rzqmq7-1"})(["display:flex;position:sticky;height:80px;z-index:1;width:100%;max-width:1000px;"]),s=(0,l.default)(i.Link).withConfig({displayName:"NavbarElements__NavLogo",componentId:"sc-1rzqmq7-2"})(["color:var(--white);justify-self:flex-start;cursor:pointer;text-decoration:none;display:flex;font-weight:600;margin:1.1rem 1.4rem;min-height:60px;position:relative;@media screen and (max-width:960px){margin:0.8rem 1.4rem;}"]),m=((0,l.default)(a.v7m).withConfig({displayName:"NavbarElements__NavIcon",componentId:"sc-1rzqmq7-3"})(["margin:0 0.5rem;font-size:1.8rem;"]),l.default.div.withConfig({displayName:"NavbarElements__MobileIcon",componentId:"sc-1rzqmq7-4"})(["display:none;@media screen and (max-width:960px){display:flex;transform:translate(-50%,54%);font-size:1.8rem;margin:0;padding:0;position:relative;cursor:pointer;height:100px;top:-26px;background:none;margin:0 4%;}"])),p=l.default.ul.withConfig({displayName:"NavbarElements__NavMenu",componentId:"sc-1rzqmq7-5"})(["display:flex;align-items:center;list-style:none;text-align:center;@media screen and (max-width:960px){flex-direction:column;width:100%;height:100vh;padding:2%;position:fixed;top:80px;right:0;opacity:",";visibility:",";transform:",";transition:all 0.2s ease;background:var(--dark);}"],(function(e){return e.click?1:0}),(function(e){return e.click?"visible":"hidden"}),(function(e){return e.click?"translate(0)":"translate(100%)"})),u=(l.default.li.withConfig({displayName:"NavbarElements__NavItem",componentId:"sc-1rzqmq7-6"})(["height:80px;text-align:center;@media screen and (max-width:960px){width:100%;}"]),(0,l.default)(i.Link).withConfig({displayName:"NavbarElements__NavLinks",componentId:"sc-1rzqmq7-7"})(["display:flex;align-items:center;text-decoration:none;padding:4% 4%;height:100%;width:100%;margin-top:1rem;color:var(--orange);position:relative;height:80px;cursor:pointer;text-transform:uppercase;font-size:1rem;font-weight:600;background-color:transparent !important;vertical-align:middle;&:hover{color:var(--white);}@media screen and (max-width:960px){text-align:center;background:var(--dark);padding:2rem;width:100%;display:block;font-size:1.8rem;&:hover{color:var(--white);transition:all 0.3s ease;}}"])),h=(0,l.default)(i.Link).withConfig({displayName:"NavbarElements__PhoneLink",componentId:"sc-1rzqmq7-8"})(["text-decoration:none;color:var(--orange);position:absolute;cursor:pointer;font-size:1.3rem;font-weight:600;margin-top:1.8rem;display:inline-flex;border:2px solid var(--orange);border-radius:50px;white-space:nowrap;background:var(--dark);height:40px;vertical-align:middle;padding:0 1%;align-items:center;right:-80px;&:hover{color:var(--white);border:2px solid var(--white);}@media screen and (max-width:960px){background:var(--dark);padding:0 6%;margin:5% 10%;font-size:1rem;right:0;}h4{font-size:1.1rem;background:none;font-weight:600;display:inline-flex;padding:2%;margin-left:4px;text-align:center;justify-content:center;@media screen and (max-width:960px){display:none !important;}}"]),g=function(e){var t=e.className;return r.createElement("svg",{viewBox:"0 0 478 100",style:{width:"140px"},className:t},r.createElement("g",{fill:"var(--white)"},r.createElement("path",{d:"M64 31.2H50v47H38.6v-47H24.8v-9.5H64v9.5zM108.9 21.7v39.2c-.1 5.9-1.7 10.4-4.9 13.5-3.2 3.1-7.8 4.7-13.7 4.7-6.1 0-10.7-1.6-13.9-4.7-3.2-3.2-4.8-7.7-4.8-13.7v-39h11.5v38.9c0 3.2.5 5.5 1.6 6.9 1 1.4 2.9 2.1 5.6 2.1s4.6-.7 5.6-2 1.5-3.6 1.6-6.7V21.7h11.4zM136.2 57.6h-5.7v20.7h-11.4V21.7h18.2c5.7 0 10.1 1.5 13.3 4.4 3.1 3 4.7 7.2 4.7 12.6 0 7.5-2.7 12.8-8.2 15.8l9.9 23.2v.5h-12.3l-8.5-20.6zm-5.7-9.6h6.5c2.3 0 4-.8 5.1-2.3 1.1-1.5 1.7-3.5 1.7-6.1 0-5.7-2.2-8.5-6.6-8.5h-6.7V48zM164.6 78.2V21.7h17.5c5.9 0 10.4 1.3 13.5 3.9 3.1 2.6 4.6 6.5 4.6 11.6 0 2.9-.6 5.3-1.9 7.4-1.3 2.1-3 3.6-5.2 4.5 2.5.7 4.5 2.2 5.9 4.4 1.4 2.2 2.1 4.9 2.1 8.1 0 5.5-1.5 9.6-4.5 12.4-3 2.8-7.4 4.2-13.1 4.2h-18.9zm11.5-32.9h5.9c4.5 0 6.7-2.3 6.7-7 0-2.6-.5-4.4-1.6-5.5-1-1.1-2.7-1.7-5-1.7H176v14.2zm0 8.3v15.1h7.3c2 0 3.6-.6 4.7-1.9 1.1-1.3 1.6-3.1 1.6-5.4 0-5.1-1.8-7.7-5.5-7.8h-8.1z"})),r.createElement("g",{fill:"var(--white)"},r.createElement("path",{d:"M314.8 31.2h-14v47h-11.5v-47h-13.8v-9.5h39.2v9.5zM352.1 53.8h-17.8v15h21.1v9.5h-32.5V21.7h32.4v9.5h-21v13.4h17.8v9.2zM401.8 59.4c-.3 6.4-2.1 11.3-5.4 14.6-3.3 3.3-8.1 5-14.1 5-6.4 0-11.3-2.1-14.7-6.3-3.4-4.2-5.1-10.2-5.1-18v-9.5c0-7.8 1.8-13.8 5.3-18 3.5-4.2 8.4-6.3 14.7-6.3 6.2 0 10.8 1.7 14 5.2 3.2 3.4 5 8.4 5.5 14.8h-11.5c-.1-4-.7-6.7-1.8-8.3-1.1-1.5-3.2-2.3-6.2-2.3-3.1 0-5.2 1.1-6.5 3.2-1.3 2.1-1.9 5.7-2 10.5v10.7c0 5.6.6 9.5 1.9 11.6 1.3 2.1 3.4 3.1 6.5 3.1 3 0 5.1-.7 6.2-2.2 1.1-1.5 1.8-4.1 1.9-7.9h11.3zM450 78.2h-11.4V54h-16.9v24.2h-11.4V21.7h11.4v22.9h16.9V21.7H450v56.5z"})),r.createElement("path",{fill:"var(--orange)",d:"M245.4 27.3c-3.6-4.3-8.6-6.4-14.9-6.4-6.4 0-11.4 2.2-15 6.5-3.6 4.4-5.4 10.4-5.4 18.2v9.7c.1 7.5 1.9 13.3 5.5 17.5 3.6 4.2 8.6 6.2 15 6.2s11.3-2.1 14.9-6.3c3.6-4.2 5.4-10.1 5.4-17.7v-9.7c0-7.7-1.9-13.7-5.5-18z"}),r.createElement("path",{fill:"var(--dark)",d:"M230.8 68.8s19.1-.2 8.5-23.6c0 0-2 5.1-3 5.2-1 .1 2.9-11.6-6-18.7 0 0-.2 5.2-3.1 9-1.8 2.4-2.9 5.2-3 8.2 0 0-2.8-3-2.5-5.6.2-2.6-9.5 25.6 9.1 25.5"}))},f=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)(!1),l=i[0],f=i[1],v=function(){return n(!t)},x=function(){window.scrollY<-80?f(!0):f(!1)};return(0,r.useEffect)((function(){x(),window.addEventListener("scroll",x)}),[]),r.createElement(r.Fragment,null,r.createElement(o.Pd.Provider,{value:{color:"orange"}},r.createElement(c,{active:l,click:t},r.createElement(d,null,r.createElement(s,{to:"/",onClick:function(){return n(!1)}},r.createElement(g,null)),r.createElement(m,{onClick:v},t?r.createElement(a.aHS,null):r.createElement(a.Fm7,null)),r.createElement(p,{onClick:v,click:t},r.createElement(u,{to:"/debouchage"},"Debouchage"),r.createElement(u,{to:"/installation"},"Installation"),r.createElement(u,{to:"/depannage"},"Depannage"),r.createElement(u,{to:"/entretien"},"Entretien"),r.createElement(u,{to:"/contact"},"Contact")),r.createElement(h,{href:"tel:0032484915516"},r.createElement(a.DNl,null),r.createElement("h4",null,"+32 484 91 55 16"))))))},v=n(7416),x=n(3750),w=function(){var e=(0,r.useState)("TVA"),t=e[0],n=e[1];return r.createElement(y,null,r.createElement(E,null,r.createElement(k,null,r.createElement(N,null," ","Besoin d’un devis ",r.createElement("br",null),"ou d’un rendez-vous?"),r.createElement(z,{href:"tel:0032484915516"},r.createElement(a.DNl,{style:{backgroundColor:"transparent"}}),r.createElement("h4",null,"+32 484 91 55 16")))),r.createElement(b,null,r.createElement(k,null,r.createElement(_,null,r.createElement(j,null," ",r.createElement("a",{href:"https://www.facebook.com/moustafa.chaou"},r.createElement(v.SpX,{size:42,style:{textDecoration:"none"}}))),r.createElement(j,null," ",r.createElement("a",{href:"mailto:turbotech.brussels@gmail.com",style:{textDecoration:"none"}},r.createElement(x.Imn,{size:40}))),r.createElement(j,null," ",r.createElement(C,{onClick:function(){n("N° TVA 9532 4567 7890")},style:{textDecoration:"none"}},t))))," "))},y=l.default.div.withConfig({displayName:"Footer__StyledContainer",componentId:"sc-1xqajj9-0"})(["color:white;background-color:none;width:100%;max-width:100%;margin:0 auto;padding:0 auto;"]),E=l.default.div.withConfig({displayName:"Footer__StyledRow",componentId:"sc-1xqajj9-1"})(["display:flex;margin:0 auto;justify-content:center;align-items:center;padding:3% 0;background-color:var(--orange);@media (max-width:768px){padding:6% 0;margin:6% 0;}"]),b=l.default.div.withConfig({displayName:"Footer__DarkRow",componentId:"sc-1xqajj9-2"})(["display:flex;margin:0 auto;justify-content:center;padding-top:3%;padding-bottom:1%;background-color:var(--dark);"]),k=l.default.div.withConfig({displayName:"Footer__StyledCol",componentId:"sc-1xqajj9-3"})(["background-color:var(--orange);display:flex;justify-content:center;align-items:center;flex-direction:column;"]),N=l.default.div.withConfig({displayName:"Footer__FooterText",componentId:"sc-1xqajj9-4"})(["display:flex;color:var(--dark);font-size:1.6rem;font-weight:600;line-height:2.2rem;text-align:center;background-color:var(--orange);"]),z=(0,l.default)(i.Link).withConfig({displayName:"Footer__FooterButton",componentId:"sc-1xqajj9-5"})(["display:flex;margin:4% 2%;text-align:center;background-color:var(--orange);color:var(--dark);border-radius:50px;text-decoration:none;color:var(--dark);cursor:pointer;font-size:1.3rem;font-weight:600;border:3px solid var(--dark);border-radius:50px;white-space:nowrap;height:40px;vertical-align:middle;padding:0 8%;align-items:center;:hover{color:var(--white);border:2px solid var(--white);transform:translateY(-2px);}h4{font-size:1.1rem;background:none;font-weight:600;display:inline-flex;padding:2%;margin-left:4px;text-align:center;justify-content:center;}"]),_=l.default.div.withConfig({displayName:"Footer__LinkBanner",componentId:"sc-1xqajj9-6"})(["display:flex;justify-content:center;align-items:center;text-decoration:none;color:var(--white) !important;"]),C=l.default.button.withConfig({displayName:"Footer__TVAButton",componentId:"sc-1xqajj9-7"})(["color:var(--white);font-size:1rem;font-weight:600;border:3px solid var(--white);border-radius:50px;padding:6px;white-space:nowrap;:hover{color:var(--orange);border:3px solid var(--orange);}"]),j=l.default.div.withConfig({displayName:"Footer__IconBox",componentId:"sc-1xqajj9-8"})(["padding:8%;a{:hover{color:var(--orange) !important;text-decoration:none;}:link{color:inherit;text-decoration:none;}:visited{color:inherit;text-decoration:none;}:focus{color:inherit;text-decoration:none;}:active{color:inherit;text-decoration:none;}}"]),q=(0,l.createGlobalStyle)(["*{font-family:'Roboto Condensed',sans-serif;margin:0;padding:0;box-sizing:border-box;background-color:var(--dark);letter-spacing:0.03rem;}:root{--dark:#1C1C1C;--orange:#FE9D2B;--white:#eeeeee;}ul{padding-left:0 !important;}a{color:inherit;:hover{color:var(--orange);}}"]),I=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(q,null),r.createElement(f,null),r.createElement("main",null,t),r.createElement(w,null))}},9357:function(e,t,n){var r=n(7294),a=n(1082);function o(e){var t,n,o=e.description,i=e.title,l=e.children,c=(0,a.useStaticQuery)("63159454").site,d=o||c.siteMetadata.description,s=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,s?i+" | "+s:i),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:d}),l)}o.defaultProps={description:""},t.Z=o}}]);
//# sourceMappingURL=commons-db7d4d815f74b42a55cd.js.map