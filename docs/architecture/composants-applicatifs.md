---
sidebar_position: 3
---

# 3. Liste des composants applicatifs

## 3.1. Serveurs pfSense

### 3.1.1. Composants matériels

| Composant              | Spécifications                                                 |
| ---------------------- | -------------------------------------------------------------- |
| Système d'exploitation | pfSense (stable 2.7.2)                                         |
| Processeur             | 1Ghz ou plus                                                   |
| Architecture           | 64-bit                                                         |
| Mémoire vive (RAM)     | 1GB ou plus                                                    |
| Disque dur             | 8GB ou plus                                                    |
| NIC                    | 5 (`WAN`, `LAN-OFFICE`, `LAN-SERV`, `DMZ`, `HONEYPOT`, `SYNC`) |
**Note** : Préférer des cartes réseau Intel plutôt que Realtek, qui peuvent engendrer des problèmes de compatibilité.

### 3.1.2. Composants logiciels

| Composant | Version | Notes                       |
| --------- | ------- | --------------------------- |
| FRR       | 2.0.2   | Démon de routage pour RIPv2 |
| Squid     | 0.4.46  | Web proxy cache             |

## 3.2. Serveur web

### 3.2.1. Composants matériels

| Composant              | Spécifications  |
| ---------------------- | --------------- |
| Système d'exploitation | Rocky Linux 8   |
| GUI                    | ---             |
| Processeur             | 1.1Ghz          |
| Architecture           | 64-bit          |
| Mémoire vive (RAM)     | 2-4GB ou plus   |
| Disque dur             | 20-40GB ou plus |
| NIC                    | 1 (`DMZ`)       |

### 3.2.2. Composants logiciels

| Composant | Version     | Notes |
| --------- | ----------- | ----- |
| Apache    | 2.4.37      | ---   |
| Rsync     | 3.1.3       | ---   |
| SSH       | OpenSSH_8.0 | ---   |

## 3.3 Serveur web-backup
### 3.3.1. Composants matériels

| Composant              | Spécifications  |
| ---------------------- | --------------- |
| Système d'exploitation | Rocky Linux 8   |
| GUI                    | ---             |
| Processeur             | 1.1Ghz          |
| Architecture           | 64-bit          |
| Mémoire vive (RAM)     | 2-4GB ou plus   |
| Disque dur             | 20-40GB ou plus |
| NIC                    | 1 (`LAN-SERV`)  |

### 3.3.2. Composants logiciels

| Composant | Version     | Notes |
| --------- | ----------- | ----- |
| Rsync     | 3.1.3       | ---   |
| SSH       | OpenSSH_8.0 | ---   |
| SSHPass   | 1.09        | ---   |

## 3.4 Machine honeypot

### 3.4.1. Composants matériels

| Composant              | Spécifications |
| ---------------------- | -------------- |
| Système d'exploitation | Ubuntu 22.04   |
| GUI                    | ---            |
| Processeur             | 8 vCores       |
| Architecture           | 64-bit         |
| Mémoire vive (RAM)     | 8GB ou plus    |
| Disque dur             | 64GB ou plus   |
| NIC                    | 1 (`HONEYPOT`) |

### 3.4.2. Composants logiciels

| Composant | Version | Notes                                                               |
| --------- | ------- | ------------------------------------------------------------------- |
| Tpotce    | 24.04.0 | [Script d'installation](https://github.com/telekom-security/tpotce) |

## 3.5. PCs client

Il n'y a pas d'impératif d'OS pour les PC clients ; cependant il faut veiller à ce que l'OS dispose d'une configuration hardware suffisante l'OS choisie et l'utilisation du poste de travail.

Cependant, voici un exemple de poste de travail minimal :
### 3.5.1. Composants matériels

| COMPOSANT              | SPECIFICATIONS                     |
| ---------------------- | ---------------------------------- |
| Système d'exploitation | Windows 10 ou 11, dernière version |
| GUI                    | Oui                                |
| Processeur             | 2Ghz                               |
| Mémoire vive (RAM)     | 8go                                |
| Disque dur             | 60go minimum                       |
| NIC                    | (`LAN-OFFICE`)                     |
