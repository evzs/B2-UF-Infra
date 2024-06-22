"use strict";(self.webpackChunktestdocumentation=self.webpackChunktestdocumentation||[]).push([[367],{773:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=r(4848),n=r(8453);const t={sidebar_position:3},a="3. Gestion et sauvegarde des fichiers du serveur web",d={id:"exploitation/site-web-gestion",title:"3. Gestion et sauvegarde des fichiers du serveur web",description:"Pr\xe9requis :",source:"@site/docs/exploitation/site-web-gestion.md",sourceDirName:"exploitation",slug:"/exploitation/site-web-gestion",permalink:"/B2-UF-Infra/docs/exploitation/site-web-gestion",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Acc\xe8s au site web par les diff\xe9rents r\xe9seaux",permalink:"/B2-UF-Infra/docs/exploitation/site-web-acces"},next:{title:"4. Gestion et maintenance du serveur honeypot",permalink:"/B2-UF-Infra/docs/exploitation/honeypot"}},c={},o=[{value:"3.1. Sauvegarde des fichiers",id:"31-sauvegarde-des-fichiers",level:2},{value:"3.1.1. Sauvegarde manuelle",id:"311-sauvegarde-manuelle",level:3},{value:"3.1.2. Sauvegarde automatique",id:"312-sauvegarde-automatique",level:3},{value:"3.2. Restoration des fichiers",id:"32-restoration-des-fichiers",level:2},{value:"3.2 Suppression des anciennes sauvegardes",id:"32-suppression-des-anciennes-sauvegardes",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"3-gestion-et-sauvegarde-des-fichiers-du-serveur-web",children:"3. Gestion et sauvegarde des fichiers du serveur web"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Pr\xe9requis"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["L'administrateur doit \xeatre connect\xe9 en ",(0,i.jsx)(s.code,{children:"root"})," ou ",(0,i.jsx)(s.code,{children:"sudo"})," au serveur de backup ",(0,i.jsx)(s.code,{children:"web-backup"})," \xe0 l'adresse ",(0,i.jsx)(s.code,{children:"10.10.1.242"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Une premi\xe8re connexion en ",(0,i.jsx)(s.code,{children:"SSH"})," depuis ",(0,i.jsx)(s.code,{children:"web-backup"})," vers le serveur web ",(0,i.jsx)(s.code,{children:"web-serv"})," doit avoir \xe9t\xe9 r\xe9alis\xe9e une premi\xe8re fois avant d'ex\xe9cuter les scripts mentionn\xe9s ci-apr\xe8s."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Bien qu'il soit possible de se connecter \xe0 ",(0,i.jsx)(s.code,{children:"web-backup"})," en ",(0,i.jsx)(s.code,{children:"SSH"}),", il est fortement conseill\xe9 de r\xe9aliser les manipulations directement sur la machine."]}),"\n",(0,i.jsx)(s.h2,{id:"31-sauvegarde-des-fichiers",children:"3.1. Sauvegarde des fichiers"}),"\n",(0,i.jsxs)(s.p,{children:["Le fichier de sauvegarde du serveur web se trouve au chemin ",(0,i.jsx)(s.code,{children:"/home/backup-server/scripts/backups.sh"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["A l'ex\xe9cution, le script \xe9tablit une connexion par ",(0,i.jsx)(s.code,{children:"SSH"})," \xe0 ",(0,i.jsx)(s.code,{children:"web-serv"}),", y r\xe9cup\xe8re les fichiers pr\xe9sents dans ",(0,i.jsx)(s.code,{children:"/var/www/html/"})," et les compresse en une archive stock\xe9e dans son dossier ",(0,i.jsx)(s.code,{children:"/home/backup-server/backups/"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["La nomenclature de ces fichiers est norm\xe9e : elle contient la date et l'heure de la sauvegarde au format ",(0,i.jsx)(s.code,{children:"YY-ss-DD_HH-MM-SS"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(3453).A+"",width:"802",height:"286"})}),"\n",(0,i.jsx)(s.h3,{id:"311-sauvegarde-manuelle",children:"3.1.1. Sauvegarde manuelle"}),"\n",(0,i.jsxs)(s.p,{children:["Le fichier de sauvegarde ",(0,i.jsx)(s.code,{children:"backup.sh"})," peut \xeatre appel\xe9 \xe0 n'importe quel moment et ne n\xe9cessite aucun param\xe8tre pour s'ex\xe9cuter correctement."]}),"\n",(0,i.jsx)(s.h3,{id:"312-sauvegarde-automatique",children:"3.1.2. Sauvegarde automatique"}),"\n",(0,i.jsx)(s.p,{children:"Le serveur de backup g\xe8re les sauvegardes automatiques, tous les jours \xe0 une heure donn\xe9e, gr\xe2ce \xe0 l'utilitaire de planificateur de t\xe2ches crontab."}),"\n",(0,i.jsxs)(s.p,{children:["Il est possible de modifier l'heure de sauvegarde en \xe9ditant l'avant-derni\xe8re ligne du fichier de configuration crontab, accessible par\xa0",(0,i.jsx)(s.code,{children:"`sudo crontab -e`"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Par d\xe9faut, l'heure journali\xe8re de sauvegarde automatique se trouve \xe0 ",(0,i.jsx)(s.code,{children:"1h00 AM"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," : Pour l'instant, ",(0,i.jsx)(s.code,{children:"crontab"})," ne signale pas de plantage du processus."]}),"\n",(0,i.jsx)(s.h2,{id:"32-restoration-des-fichiers",children:"3.2. Restoration des fichiers"}),"\n",(0,i.jsxs)(s.p,{children:["Le fichier de restoration d'une sauvegarde se trouve au chemin ",(0,i.jsx)(s.code,{children:"/home/backup-server/scripts/restore.sh"}),". La restoration est manuelle et se r\xe9alise en appelant le script, sans param\xe8tre."]}),"\n",(0,i.jsxs)(s.p,{children:["A l'ex\xe9cution, le script propose \xe0 l'utilisateur de choisir parmi la liste des sauvegardes stock\xe9es dans ",(0,i.jsx)(s.code,{children:"/home/backup-server/backups/"}),".\r\n",(0,i.jsx)(s.img,{src:r(1268).A+"",width:"626",height:"224"})]}),"\n",(0,i.jsxs)(s.p,{children:["Une fois l'archive choisie, il l'envoie \xe0 ",(0,i.jsx)(s.code,{children:"web-serv"}),", qui ex\xe9cutera lui-m\xeame son propre script ",(0,i.jsx)(s.code,{children:"backup.sh"})," afin de d\xe9compresser l'archive et la d\xe9placer dans le dossier du serveur."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," : Le mot de passe super-utilisateur du serveur web est demand\xe9 lors de l'ex\xe9cution de la restauration. Il est imp\xe9ratif de conna\xeetre les identifiants des deux serveurs pour pouvoir remplacer les donn\xe9es sur le serveur web."]}),"\n",(0,i.jsx)(s.h2,{id:"32-suppression-des-anciennes-sauvegardes",children:"3.2 Suppression des anciennes sauvegardes"}),"\n",(0,i.jsxs)(s.p,{children:["Afin d'\xe9viter une surcharge du disque dur, le script ",(0,i.jsx)(s.code,{children:"/home/backup-server/scripts/remove.sh"})," permet la suppression des fichiers vieux de plus de 30j."]}),"\n",(0,i.jsxs)(s.p,{children:["Il est ex\xe9cut\xe9 quotidiennement, en m\xeame temps que la sauvegarde du fichier web. De la m\xeame mani\xe8re, l'heure de son ex\xe9cution peut \xeatre modifi\xe9e en utilisant ",(0,i.jsx)(s.code,{children:"crontab -e"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Il est possible de r\xe9duire ou d'augmenter le nombre de jours avant suppression en changeant le rempla\xe7ant le ",(0,i.jsx)(s.code,{children:"30"})," situ\xe9 \xe0 la troisi\xe8me ligne du script :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(5092).A+"",width:"768",height:"91"})})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3453:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/backup_archive-cdedd935d26c0407a2bb2dc9cb8f0753.png"},5092:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/remove_crontab-aee884c0d646f87120e9d7af7042aa82.png"},1268:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/restore-0e386559d4a52a0c68f4a26cf5d0b27e.png"},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>d});var i=r(6540);const n={},t=i.createContext(n);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);