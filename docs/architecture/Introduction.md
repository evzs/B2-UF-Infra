---
sidebar_position: 1
---

# 1. Introduction

## 1.1. Objet

Ce projet a pour but d'évaluer les compétences acquises dans le cadre des modules de l'UF "Infrastructure et Systèmes d'Information (SI)" en Bachelor 2 Informatique à Ynov Aix. Réalisé par Eva Chibane et Marianne Corbel, il porte sur le deuxième projet proposé, "Architecture réseau et sécurité".

Le présent document couvre l'architecture et les fonctionnalités relatives aux réseaux internes d'une petite entreprise, ainsi que leurs communications avec l'extérieur.

## 1.2 Périmètre

Ce document vise à la mise en place d'une architecture réseau correspondant à celle d'une petit entreprise, à la fois robuste, sécurisée et évolutive et open-source dans la mesure du possible.

Cette architecture doit être en mesure d'accueillir au minimum les hôtes suivants :
- PCs et autres appareils client des employés de l'entreprise ;
- Serveur web exposé hébergeant le site de l'entreprise ;
- Routeur pfSense faisant office de routeur et proposant les différents services nécessaires au bon fonctionnement de la solution (DHCP, DNS, pare-feu...).

Afin d'assurer la robustesse des différents services, des serveurs supplémentaires seront mis en place :
- Deuxième serveur pfSense `failover` ;
- Serveur de sauvegarde des fichiers du site web ;

Enfin, à des fins de sécurité, un serveur `honeypot` sera mis en place pour attirer les cyber-attaquants, monitorer et analyser les attaques qu'ils pourraient réaliser contre le système afin de mieux le protéger.