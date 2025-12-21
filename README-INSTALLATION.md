# 📧 SRS NOTAIRES - Site Web Complet

Site web professionnel pour SRS Notaires avec formulaire de contact fonctionnel.

## 📦 CONTENU DU PACKAGE

### Pages HTML (5 fichiers)
- `index.html` - Page d'accueil
- `services.html` - Nos services notariaux
- `equipe.html` - Notre équipe
- `carrieres.html` - Opportunités de carrière
- `contact.html` - Formulaire de contact

### Design & Fonctionnalités
- `style.css` - Feuille de style (palette orange professionnelle)
- `script.js` - JavaScript (menu hamburger, validations)
- `traiter-formulaire.php` - ⭐ **NOUVEAU** - Script PHP pour envoi d'emails

### Images
- `logo-srs-notaires.png` - Logo officiel (71 KB)
- `consultation-notaires.png` - Image de consultation (59 KB)

### SEO
- `robots.txt` - Configuration pour les moteurs de recherche
- `sitemap.xml` - Plan du site

### Documentation
- `README-INSTALLATION.md` - Ce fichier
- `SEO-GUIDE-COMPLET.md` - Guide d'optimisation SEO

---

## 🚀 INSTALLATION

### Option 1 : Hébergement avec PHP (Recommandé)

**Prérequis :** Serveur web avec PHP 7.0+ et fonction `mail()` activée

1. **Uploader tous les fichiers** sur votre serveur via FTP
2. **Vérifier les permissions** du fichier `traiter-formulaire.php` (644 ou 755)
3. **Tester le formulaire** en remplissant le formulaire de contact
4. **Vérifier la réception** des emails à `infos@srs-notaires.com`

### Option 2 : Hébergement sans PHP

Si votre hébergeur ne supporte pas PHP, vous avez 2 options :

#### A. Utiliser FormSpree (Gratuit)

1. Aller sur [formspree.io](https://formspree.io)
2. Créer un compte gratuit
3. Créer un nouveau formulaire
4. Remplacer dans `contact.html` :
   ```html
   action="traiter-formulaire.php"
   ```
   par :
   ```html
   action="https://formspree.io/f/VOTRE_ID_FORMSPREE"
   ```

#### B. Utiliser un service d'email alternatif

Autres services gratuits compatibles :
- **EmailJS** (emailjs.com)
- **Basin** (usebasin.com)
- **Getform** (getform.io)

---

## ⚙️ CONFIGURATION DE L'EMAIL

### Fichier : `traiter-formulaire.php`

Pour modifier l'adresse email de réception, ouvrir `traiter-formulaire.php` et modifier la ligne 3 :

```php
$recipient_email = "infos@srs-notaires.com";  // ← Modifier ici
```

### Configuration avancée

Vous pouvez également modifier :
- **Préfixe du sujet** (ligne 4)
- **Format de l'email** (lignes 35-45)
- **Messages d'erreur** (lignes 60-80)

---

## 🧪 TESTER LE FORMULAIRE

### En local (avec XAMPP, WAMP, MAMP)

1. **Installer un serveur local** (XAMPP recommandé)
2. **Copier les fichiers** dans le dossier `htdocs`
3. **Démarrer Apache** et **PHP**
4. **Ouvrir** `http://localhost/nom-du-dossier/index.html`
5. **Remplir le formulaire** de contact
6. **Note :** En local, l'envoi d'email peut ne pas fonctionner sans configuration SMTP

### En production (sur votre serveur)

1. **Uploader** tous les fichiers
2. **Visiter** votre site
3. **Aller** sur la page Contact
4. **Remplir** le formulaire avec vos informations
5. **Soumettre** le formulaire
6. **Vérifier** votre boîte email `infos@srs-notaires.com`

---

## 📧 ADRESSE EMAIL CONFIGURÉE

**Email de réception :** `infos@srs-notaires.com`

Tous les messages du formulaire de contact seront envoyés à cette adresse.

**Important :** Assurez-vous que cette adresse email existe et est active !

---

## 🎨 PALETTE DE COULEURS

- **Bleu principal :** `#2c5f8d`
- **Orange (CTA) :** `#e67e22`
- **Orange hover :** `#ff8c42`
- **Blanc :** `#ffffff`
- **Gris clair :** `#f5f5f5`

---

## 📱 RESPONSIVE

Le site est entièrement responsive et s'adapte à :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## 🔍 SEO

Le site inclut :
- ✅ Meta tags optimisés
- ✅ Open Graph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Schema.org (Organization)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Alt text sur toutes les images

---

## 🛠️ SUPPORT TECHNIQUE

### Problèmes courants

**1. Le formulaire ne fonctionne pas**
- Vérifier que PHP est installé sur le serveur
- Vérifier que la fonction `mail()` est activée
- Vérifier les permissions du fichier PHP
- Consulter les logs d'erreur du serveur

**2. Les emails ne sont pas reçus**
- Vérifier le dossier spam
- Vérifier que l'adresse `infos@srs-notaires.com` existe
- Vérifier la configuration SMTP du serveur
- Essayer d'envoyer un email test depuis le serveur

**3. Problèmes d'affichage**
- Vider le cache du navigateur (Ctrl + Shift + Delete)
- Vérifier que tous les fichiers sont uploadés
- Vérifier les chemins des images

---

## 📋 CHECKLIST DE DÉPLOIEMENT

Avant de mettre en ligne :

- [ ] Uploader tous les fichiers sur le serveur
- [ ] Vérifier que l'adresse email existe
- [ ] Tester le formulaire de contact
- [ ] Vérifier l'affichage sur mobile
- [ ] Vérifier l'affichage sur desktop
- [ ] Tester tous les liens de navigation
- [ ] Vérifier que le menu hamburger fonctionne
- [ ] Soumettre le sitemap.xml à Google Search Console
- [ ] Configurer Google Analytics (optionnel)

---

## 🚨 SÉCURITÉ

Le fichier `traiter-formulaire.php` inclut :
- ✅ Validation des champs
- ✅ Nettoyage des données (strip_tags)
- ✅ Validation de l'email
- ✅ Protection contre les injections

**Recommandations supplémentaires :**
- Ajouter un CAPTCHA pour éviter le spam (Google reCAPTCHA)
- Limiter le nombre de soumissions par IP
- Activer HTTPS sur votre serveur

---

## 📞 CONTACT

Pour toute question technique ou support :
**Email :** infos@srs-notaires.com

---

## 📄 LICENCE

Tous droits réservés © 2025 SRS Notaires

---

**✅ SITE PRÊT À ÊTRE DÉPLOYÉ !**

Version : 1.0 - Décembre 2025
