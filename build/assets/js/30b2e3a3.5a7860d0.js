"use strict";(self.webpackChunktestdocumentation=self.webpackChunktestdocumentation||[]).push([[554],{2823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(4848),t=s(8453);const r={sidebar_position:1},a="1. Gestion des outils et services li\xe9s \xe0 pfSense",d={id:"exploitation/pfSense",title:"1. Gestion des outils et services li\xe9s \xe0 pfSense",description:"1.1. Interface graphique de configuration",source:"@site/docs/exploitation/pfSense.md",sourceDirName:"exploitation",slug:"/exploitation/pfSense",permalink:"/docs/exploitation/pfSense",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation d'exploitation",permalink:"/docs/category/documentation-dexploitation"},next:{title:"2. Acc\xe8s au site web par les diff\xe9rents r\xe9seaux",permalink:"/docs/exploitation/site-web-acces"}},o={},c=[{value:"1.1. Interface graphique de configuration",id:"11-interface-graphique-de-configuration",level:2},{value:"1.2. Failover",id:"12-failover",level:2},{value:"1.2.1. Panne de <code>PF_MASTER</code>",id:"121-panne-de-pf_master",level:2},{value:"1.2.2. Maintenance",id:"122-maintenance",level:3},{value:"1.3. Sauvegarde et restoration de la configuration",id:"13-sauvegarde-et-restoration-de-la-configuration",level:2},{value:"1.3.1. Sauvegarde manuelle",id:"131-sauvegarde-manuelle",level:3},{value:"1.3.2. Restoration d&#39;une sauvegarde",id:"132-restoration-dune-sauvegarde",level:3}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1-gestion-des-outils-et-services-li\xe9s-\xe0-pfsense",children:"1. Gestion des outils et services li\xe9s \xe0 pfSense"}),"\n",(0,i.jsx)(n.h2,{id:"11-interface-graphique-de-configuration",children:"1.1. Interface graphique de configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, le configurateur graphique est accessible sur le port ",(0,i.jsx)(n.code,{children:"HTTPS"})," de l'adresse IP pfSense du r\xe9seau dans lequel se situe l'h\xf4te."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la configuration de la solution a \xe9t\xe9 faite au complet, il est possible de s'y connecter depuis le ",(0,i.jsx)(n.code,{children:"WAN"})," et depuis le ",(0,i.jsx)(n.code,{children:"LAN-SERV"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["S'il ne semble pas possible de s'y connecter, l'administrateur peut tenter de d\xe9sactiver les r\xe8gles du pare-feu par le shell du pfSense avec la commande\xa0",(0,i.jsx)(n.code,{children:"`pfctl -d`"}),". Elles seront r\xe9tablies au prochain red\xe9marrage du syst\xe8me."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(4022).A+"",width:"1918",height:"986"}),"\r\n",(0,i.jsxs)(n.em,{children:["GUI de ",(0,i.jsx)(n.code,{children:"PF_MASTER"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"12-failover",children:"1.2. Failover"}),"\n",(0,i.jsxs)(n.p,{children:["Le statut des serveurs ",(0,i.jsx)(n.code,{children:"PF_MASTER"})," et ",(0,i.jsx)(n.code,{children:"PF_BACKUP"})," peut \xeatre v\xe9rifi\xe9 dans ",(0,i.jsx)(n.code,{children:"Status > CARP"})," :\r\n",(0,i.jsx)(n.img,{src:s(561).A+"",width:"1274",height:"532"}),"\r\n",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.code,{children:"PF_MASTER* ![](./img/UF_Infra_SI/Exploitation/_attached_files/carp_backup.png) *"}),"PF_BACKUP`"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"121-panne-de-pf_master",children:["1.2.1. Panne de ",(0,i.jsx)(n.code,{children:"PF_MASTER"})]}),"\n",(0,i.jsxs)(n.p,{children:["En cas de d\xe9ficience de ",(0,i.jsx)(n.code,{children:"PF_MASTER"}),", qui ne r\xe9pondrait pas \xe0 un ping de ",(0,i.jsx)(n.code,{children:"PF_BACKUP"}),", celui-ci prendra automatiquement le relais en tant que routeur principal. Puisque les deux serveurs se trouvent derri\xe8re la m\xeame IP virtuelle, ce relais s'effectuera en toute transparence pour l'utilisateur, et aucune reconfiguration des h\xf4tes ne sera \xe0 r\xe9aliser."]}),"\n",(0,i.jsxs)(n.p,{children:["Une fois que ",(0,i.jsx)(n.code,{children:"PF_MASTER"})," retourne en \xe9tat de fonctionnement normal, il reprend son r\xf4le et ",(0,i.jsx)(n.code,{children:"PF_BACKUP"})," redevient inactif."]}),"\n",(0,i.jsx)(n.h3,{id:"122-maintenance",children:"1.2.2. Maintenance"}),"\n",(0,i.jsxs)(n.p,{children:["Il est possible d'entrer en maintenance ou de d\xe9sactiver temporairement le CARP \xe0 travers les options pr\xe9sentes via ",(0,i.jsx)(n.code,{children:"Status > CARP"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"13-sauvegarde-et-restoration-de-la-configuration",children:"1.3. Sauvegarde et restoration de la configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Apr\xe8s la mise en service de la solution, la backup automatique journali\xe8re a \xe9t\xe9 mise en place (modifiable dans ",(0,i.jsx)(n.code,{children:"Services > Auto Configuration Backup > Settings"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"131-sauvegarde-manuelle",children:"1.3.1. Sauvegarde manuelle"}),"\n",(0,i.jsxs)(n.p,{children:["Une sauvegarde manuelle peut \xeatre r\xe9alis\xe9e dans ",(0,i.jsx)(n.code,{children:"Services > Auto Configuration Backup > Backup now"}),".\r\n",(0,i.jsx)(n.img,{src:s(1244).A+"",width:"1277",height:"386"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention"})," : Il est conseill\xe9 de r\xe9aliser une sauvegarde manuelle des deux serveurs en m\xeame temps et d'\xe9viter de ne sauvegarder que ",(0,i.jsx)(n.code,{children:"PF_BACKUP"}),", dans la mesure o\xf9 sa configuration d\xe9pend de celle de ",(0,i.jsx)(n.code,{children:"PF_MASTER"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"132-restoration-dune-sauvegarde",children:"1.3.2. Restoration d'une sauvegarde"}),"\n",(0,i.jsxs)(n.p,{children:["Une sauvegarde peut \xeatre restaur\xe9e dans ",(0,i.jsx)(n.code,{children:"Services > Auto Configuration Backup > Backup now"})," :\r\n",(0,i.jsx)(n.img,{src:s(1340).A+"",width:"1271",height:"271"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention"})," : Il est fortement recommand\xe9 de restaurer les deux serveurs en m\xeame temps, avec des backups les plus proches possibles en termes d'heure et de jour de sauvegarde afin d'\xe9viter une trop grosse asym\xe9trie dans les configurations."]}),"\n",(0,i.jsxs)(n.p,{children:["De plus, il est ",(0,i.jsx)(n.strong,{children:"d\xe9conseill\xe9"})," d'utiliser une backup de ",(0,i.jsx)(n.code,{children:"PF_BACKUP"})," sur ",(0,i.jsx)(n.code,{children:"PF_MASTER"})," (sauf cas extr\xeame) : toute la configuration du CARP failover sera \xe0 refaire, et elle est particuli\xe8rement difficile \xe0 r\xe9aliser correctement dans ce sens."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1244:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/backupnow-09d7e31258d86056a61c293c42f009f6.png"},1340:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/backups-pfsense-463a54f8d12132c5cd1f22601f1e0642.png"},561:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/carp_master-af732d475b87e5c229bdcb6aafb8f3b1.png"},4022:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dashboard-ef1ff0b35731ee058d595189929eeeb1.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);