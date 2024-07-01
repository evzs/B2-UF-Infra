"use strict";(self.webpackChunktestdocumentation=self.webpackChunktestdocumentation||[]).push([[759],{5243:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=n(4848),t=n(8453);const c={sidebar_position:2},r="2. Acc\xe8s au site web par les diff\xe9rents r\xe9seaux",d={id:"exploitation/site-web-acces",title:"2. Acc\xe8s au site web par les diff\xe9rents r\xe9seaux",description:"2.1. Acc\xe8s au site web",source:"@site/docs/exploitation/site-web-acces.md",sourceDirName:"exploitation",slug:"/exploitation/site-web-acces",permalink:"/docs/exploitation/site-web-acces",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Gestion des outils et services li\xe9s \xe0 pfSense",permalink:"/docs/exploitation/pfSense"},next:{title:"3. Gestion et sauvegarde des fichiers du serveur web",permalink:"/docs/exploitation/site-web-gestion"}},o={},u=[{value:"2.1. Acc\xe8s au site web",id:"21-acc\xe8s-au-site-web",level:2},{value:"2.1.3. Depuis les r\xe9seaux internes (LAN-OFFICE)",id:"213-depuis-les-r\xe9seaux-internes-lan-office",level:3},{value:"2.1.2. Depuis l&#39;ext\xe9rieur (WAN)",id:"212-depuis-lext\xe9rieur-wan",level:3},{value:"2.2. Maintenance du site web",id:"22-maintenance-du-site-web",level:2}];function h(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"2-acc\xe8s-au-site-web-par-les-diff\xe9rents-r\xe9seaux",children:"2. Acc\xe8s au site web par les diff\xe9rents r\xe9seaux"}),"\n",(0,s.jsx)(i.h2,{id:"21-acc\xe8s-au-site-web",children:"2.1. Acc\xe8s au site web"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Pr\xe9requis / troubleshooting"})," :"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Le serveur web ",(0,s.jsx)(i.code,{children:"web-serv.infra.uf"})," doit se trouver \xe0 l'IP fixe ",(0,s.jsx)(i.code,{children:"10.10.10.242"})," et \xeatre connect\xe9 aux routeurs ",(0,s.jsx)(i.code,{children:"PF_MASTER"})," et ",(0,s.jsx)(i.code,{children:"PF_BACKUP"})," ;"]}),"\n",(0,s.jsxs)(i.li,{children:["Le service Apache ",(0,s.jsx)(i.code,{children:"httpd"})," doit \xeatre en \xe9tat de fonctionnement ;"]}),"\n",(0,s.jsxs)(i.li,{children:["Les r\xe8gles de pare-feu doivent permettre la communication du ",(0,s.jsx)(i.code,{children:"LAN-OFFICE"})," vers le ",(0,s.jsx)(i.code,{children:"DMZ"})," sur le port ",(0,s.jsx)(i.code,{children:"80"})," pour que le site soit accessible depuis celui-ci ;"]}),"\n",(0,s.jsxs)(i.li,{children:["Une correspondance ",(0,s.jsx)(i.code,{children:"documentation.infra.uf"})," -> ",(0,s.jsx)(i.code,{children:"10.10.10.242"})," doit avoir \xe9t\xe9 entr\xe9e dans le ",(0,s.jsx)(i.code,{children:"DNS"})," pour que le site soit accessible par cette URL dans les r\xe9seaux ayant acc\xe8s au DNS ;"]}),"\n",(0,s.jsxs)(i.li,{children:["Un r\xe8gle de redirection de port (",(0,s.jsx)(i.code,{children:"port forward"}),") doit relier un port du ",(0,s.jsx)(i.code,{children:"WAN"})," (par d\xe9faut ",(0,s.jsx)(i.code,{children:"8080"}),") au port ouvert de ",(0,s.jsx)(i.code,{children:"web-server"})," (par d\xe9faut ",(0,s.jsx)(i.code,{children:"80"}),") pour que le site soit accessible depuis l'ext\xe9rieur."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"213-depuis-les-r\xe9seaux-internes-lan-office",children:"2.1.3. Depuis les r\xe9seaux internes (LAN-OFFICE)"}),"\n",(0,s.jsxs)(i.p,{children:["Si tous les \xe9l\xe9ments pr\xe9c\xe9dents sont configur\xe9s, le site web devrait \xeatre accessible depuis le ",(0,s.jsx)(i.code,{children:"LAN-OFFICE"})," par son URL ",(0,s.jsx)(i.code,{children:"http://documentation.infra.uf"})," ou directement par son adresse IP ",(0,s.jsx)(i.code,{children:"http://10.10.10.242"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:n(5529).A+"",width:"1917",height:"1032"}),"\r\n",(0,s.jsxs)(i.em,{children:["Site acc\xe9d\xe9 depuis le LAN-OFFICE par l'URL ",(0,s.jsx)(i.code,{children:"documentation.infra.uf"}),"."]})]}),"\n",(0,s.jsx)(i.h3,{id:"212-depuis-lext\xe9rieur-wan",children:"2.1.2. Depuis l'ext\xe9rieur (WAN)"}),"\n",(0,s.jsxs)(i.p,{children:["Si tous les \xe9l\xe9ments pr\xe9c\xe9dents sont configur\xe9s, le site web devrait \xeatre accessible depuis le ",(0,s.jsx)(i.code,{children:"WAN"})," par l'une des trois adresses IP ",(0,s.jsx)(i.code,{children:"WAN"})," (",(0,s.jsx)(i.code,{children:"PF_MASTER"}),", ",(0,s.jsx)(i.code,{children:"PF_BACKUP"})," et ",(0,s.jsx)(i.code,{children:"VIP"}),") des routeurs pfSense."]}),"\n",(0,s.jsxs)(i.p,{children:["Il est \xe0 noter que par d\xe9faut, un client du ",(0,s.jsx)(i.code,{children:"WAN"})," n'aura pas acc\xe8s aux entr\xe9es du DNS et ne pourra pas acc\xe9der tel quel \xe0 ",(0,s.jsx)(i.code,{children:"documentation.infra.uf"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Deux solutions sont possibles :"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Le client peut ajouter le ",(0,s.jsx)(i.code,{children:"hostname"})," et l'IP virtuelle du ",(0,s.jsx)(i.code,{children:"WAN"})," dans son propre fichier ",(0,s.jsx)(i.code,{children:"hosts"})," :\r\n",(0,s.jsx)(i.img,{src:n(1051).A+"",width:"491",height:"192"})]}),"\n",(0,s.jsxs)(i.li,{children:["Le client peut ajouter l'IP virtuelle du ",(0,s.jsx)(i.code,{children:"WAN"})," dans la liste de ses DNS :\r\n",(0,s.jsx)(i.img,{src:n(7283).A+"",width:"501",height:"145"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"22-maintenance-du-site-web",children:"2.2. Maintenance du site web"}),"\n",(0,s.jsxs)(i.p,{children:["Le site web peut \xeatre modifi\xe9 en changeant les fichiers situ\xe9s \xe0 ",(0,s.jsx)(i.code,{children:"var/www/html"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Il est important de noter que pour l'instant, le serveur web ne g\xe8re que des sites statiques et n'utilise aucun acc\xe8s \xe0 un quelconque serveur externe."}),"\n",(0,s.jsxs)(i.p,{children:["En r\xe9activant la r\xe8gle de pare-feu de l'interface ",(0,s.jsx)(i.code,{children:"DMZ"})," permettant l'acc\xe8s \xe0 Internet, l'administrateur peut par exemple cloner un d\xe9p\xf4t GitHub et placer les fichiers manuellement dans le dossier ",(0,s.jsx)(i.code,{children:"/var/www/html"}),"."]})]})}function l(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7283:(e,i,n)=>{n.d(i,{A:()=>s});const s="data:image/png;base64,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"},1051:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/hosts-2bf0c70d46080f1442e56498118a1bce.png"},5529:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/website-9611152d556df98eb1b249e0cd5cfe5a.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>d});var s=n(6540);const t={},c=s.createContext(t);function r(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);