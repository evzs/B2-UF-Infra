"use strict";(self.webpackChunktestdocumentation=self.webpackChunktestdocumentation||[]).push([[551],{7286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(4848),s=r(8453);const i={sidebar_position:1},o="1. Introduction",c={id:"architecture/Introduction",title:"1. Introduction",description:"1.1. Objet",source:"@site/docs/architecture/Introduction.md",sourceDirName:"architecture",slug:"/architecture/Introduction",permalink:"/docs/architecture/Introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation d'architecture",permalink:"/docs/category/documentation-darchitecture"},next:{title:"2. Infrastructure g\xe9n\xe9rale",permalink:"/docs/architecture/infrastructure-generale"}},u={},a=[{value:"1.1. Objet",id:"11-objet",level:2},{value:"1.2 P\xe9rim\xe8tre",id:"12-p\xe9rim\xe8tre",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,n.jsx)(t.h2,{id:"11-objet",children:"1.1. Objet"}),"\n",(0,n.jsx)(t.p,{children:'Ce projet a pour but d\'\xe9valuer les comp\xe9tences acquises dans le cadre des modules de l\'UF "Infrastructure et Syst\xe8mes d\'Information (SI)" en Bachelor 2 Informatique \xe0 Ynov Aix. R\xe9alis\xe9 par Eva Chibane et Marianne Corbel, il porte sur le deuxi\xe8me projet propos\xe9, "Architecture r\xe9seau et s\xe9curit\xe9".'}),"\n",(0,n.jsx)(t.p,{children:"Le pr\xe9sent document couvre l'architecture et les fonctionnalit\xe9s relatives aux r\xe9seaux internes d'une petite entreprise, ainsi que leurs communications avec l'ext\xe9rieur."}),"\n",(0,n.jsx)(t.h2,{id:"12-p\xe9rim\xe8tre",children:"1.2 P\xe9rim\xe8tre"}),"\n",(0,n.jsx)(t.p,{children:"Ce document vise \xe0 la mise en place d'une architecture r\xe9seau correspondant \xe0 celle d'une petit entreprise, \xe0 la fois robuste, s\xe9curis\xe9e et \xe9volutive et open-source dans la mesure du possible."}),"\n",(0,n.jsx)(t.p,{children:"Cette architecture doit \xeatre en mesure d'accueillir au minimum les h\xf4tes suivants :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"PCs et autres appareils client des employ\xe9s de l'entreprise ;"}),"\n",(0,n.jsx)(t.li,{children:"Serveur web expos\xe9 h\xe9bergeant le site de l'entreprise ;"}),"\n",(0,n.jsx)(t.li,{children:"Routeur pfSense faisant office de routeur et proposant les diff\xe9rents services n\xe9cessaires au bon fonctionnement de la solution (DHCP, DNS, pare-feu...)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Afin d'assurer la robustesse des diff\xe9rents services, des serveurs suppl\xe9mentaires seront mis en place :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Deuxi\xe8me serveur pfSense ",(0,n.jsx)(t.code,{children:"failover"})," ;"]}),"\n",(0,n.jsx)(t.li,{children:"Serveur de sauvegarde des fichiers du site web ;"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Enfin, \xe0 des fins de s\xe9curit\xe9, un serveur ",(0,n.jsx)(t.code,{children:"honeypot"})," sera mis en place pour attirer les cyber-attaquants, monitorer et analyser les attaques qu'ils pourraient r\xe9aliser contre le syst\xe8me afin de mieux le prot\xe9ger."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);