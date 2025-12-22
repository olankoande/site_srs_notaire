# 🚀 GUIDE DE DÉPLOIEMENT - SRS NOTAIRES

## 📦 CONTENU DE L'ARCHIVE

### Pages HTML (5 fichiers)
- **index.html** - Page d'accueil avec vidéo professionnelle
- **services.html** - 7 services détaillés avec textes complets
- **equipe.html** - Présentation de l'équipe
- **carrieres.html** - Opportunités de carrière
- **contact.html** - Formulaire de contact fonctionnel

### Design & Fonctionnalités (3 fichiers)
- **style.css** - Feuille de style complète (palette orange + vidéo hero)
- **script.js** - JavaScript (menu hamburger + interactions)
- **traiter-formulaire.php** - Script PHP pour envoi automatique d'emails

### Images (2 fichiers)
- **logo-srs-notaires.png** - Logo officiel (71 KB)
- **consultation-notaires.png** - Image consultation (59 KB)

### SEO (2 fichiers)
- **robots.txt** - Configuration moteurs de recherche
- **sitemap.xml** - Plan du site pour Google

### Documentation (3 fichiers)
- **README-INSTALLATION.md** - Guide d'installation complet
- **GUIDE-DEPLOIEMENT.md** - Ce fichier
- **HERO-VIDEO-AJOUTE.html** - Documentation vidéo hero

**TOTAL : 15 fichiers**

---

## 🎯 CARACTÉRISTIQUES DU SITE

### ✅ Design Professionnel
- Palette orange moderne (Bleu #2c5f8d + Orange #e67e22)
- Vidéo hero avec personnes épanouies
- Boutons uniformisés et lisibles
- Footer stylé avec titres professionnels
- Icônes dans tous les menus

### ✅ Contenu Complet
- 7 services avec textes détaillés (3 paragraphes chacun)
- Présentation de l'équipe
- Formulaire de contact fonctionnel
- Page carrières complète

### ✅ Fonctionnalités
- Vidéo hero en lecture automatique
- Menu hamburger responsive
- Formulaire avec envoi email automatique
- Navigation fluide
- Animations et transitions

### ✅ SEO & Performance
- Meta tags optimisés
- Open Graph pour réseaux sociaux
- robots.txt et sitemap.xml
- Images optimisées
- Code propre et valide

### ✅ Responsive
- Mobile (< 768px) ✅
- Tablette (768px - 1024px) ✅
- Desktop (> 1024px) ✅

---

## 🚀 INSTALLATION EN 5 ÉTAPES

### 1️⃣ EXTRAIRE L'ARCHIVE
```bash
Décompresser SRS-NOTAIRES-FINAL.zip
Vous obtiendrez 15 fichiers
```

### 2️⃣ VÉRIFIER L'EMAIL
```
L'email configuré est : infos@srs-notaires.com
⚠️ IMPORTANT : Créez cette adresse email AVANT de déployer
```

### 3️⃣ UPLOADER SUR VOTRE SERVEUR
```
Via FTP (FileZilla, Cyberduck, etc.) :
- Transférer TOUS les 15 fichiers à la racine
- Vérifier les permissions (644 pour fichiers, 755 pour dossiers)
- Vérifier que PHP est activé
```

### 4️⃣ TESTER LE SITE
```
1. Visiter votre site
2. Vérifier que la vidéo se charge
3. Tester le menu hamburger (mobile)
4. Remplir le formulaire de contact
5. Vérifier la réception de l'email
```

### 5️⃣ OPTIMISATIONS POST-DÉPLOIEMENT
```
- Soumettre sitemap.xml à Google Search Console
- Configurer Google Analytics (optionnel)
- Activer HTTPS/SSL
- Tester sur plusieurs navigateurs
- Tester sur mobile réel
```

---

## ⚙️ CONFIGURATION SERVEUR REQUISE

### Prérequis Obligatoires
- **PHP 7.0+** (pour le formulaire de contact)
- **Fonction mail()** activée
- **Apache ou Nginx** comme serveur web
- **Certificat SSL** recommandé (HTTPS)

### Vérifier PHP
```bash
php -v
# Doit retourner PHP 7.0 ou supérieur
```

### Si pas de PHP disponible
Utilisez un service alternatif pour le formulaire :
- **FormSpree** (gratuit) - https://formspree.io
- **EmailJS** (gratuit) - https://emailjs.com
- **Getform** (gratuit) - https://getform.io

Instructions dans README-INSTALLATION.md

---

## 📧 CONFIGURATION EMAIL

### Email de Réception
**infos@srs-notaires.com**

### Modifier l'Email
Ouvrir `traiter-formulaire.php` et modifier ligne 3 :
```php
$recipient_email = "votre-nouvelle-adresse@exemple.com";
```

### Test d'Envoi
1. Aller sur la page Contact
2. Remplir le formulaire
3. Cliquer "Envoyer"
4. Vérifier la réception dans votre boîte mail
5. Vérifier le dossier spam si nécessaire

---

## 🎥 À PROPOS DE LA VIDÉO HERO

### Source
- **Coverr.co** - Vidéos professionnelles libres de droits
- Qualité Full HD 1080p
- Personnes épanouies et professionnelles

### Fonctionnement
- Lecture automatique au chargement
- Boucle infinie
- Pas de son (muted)
- Compatible tous navigateurs
- Responsive mobile

### Changer la Vidéo
Pour utiliser votre propre vidéo :
1. Ouvrir `index.html`
2. Chercher `<video autoplay muted loop>`
3. Remplacer l'URL de la source
4. Format MP4 recommandé

```html
<source src="VOTRE-VIDEO.mp4" type="video/mp4">
```

---

## 🎨 PERSONNALISATION

### Changer les Couleurs
Ouvrir `style.css` et modifier les variables (lignes 6-13) :
```css
:root {
    --primary-color: #2c5f8d;      /* Bleu principal */
    --secondary-color: #e67e22;    /* Orange boutons */
    --accent-color: #ff8c42;       /* Orange hover */
    --text-dark: #2c3e50;          /* Texte foncé */
    --bg-white: #ffffff;           /* Fond blanc */
    --bg-light: #f5f5f5;          /* Fond gris clair */
}
```

### Changer le Logo
1. Remplacer `logo-srs-notaires.png` par votre logo
2. Garder le même nom de fichier
3. Format PNG recommandé (fond transparent)
4. Taille recommandée : 200-300px de largeur

### Modifier les Textes
- **Accueil** : Éditer `index.html`
- **Services** : Éditer `services.html`
- **Équipe** : Éditer `equipe.html`
- **Carrières** : Éditer `carrieres.html`
- **Contact** : Éditer `contact.html`

---

## 🔍 SEO - OPTIMISATION

### Sitemap
Le fichier `sitemap.xml` est prêt. À soumettre à :
- Google Search Console
- Bing Webmaster Tools

### Meta Tags
Toutes les pages ont des meta tags optimisés :
- Title
- Description
- Open Graph (Facebook, LinkedIn)
- Twitter Cards

### Images
Toutes les images ont des attributs `alt` pour l'accessibilité

### Performance
- Code minifié
- Images optimisées
- Pas de ressources externes lourdes

---

## 📱 TEST RESPONSIVE

### Desktop (> 1024px)
- ✅ Vidéo plein écran
- ✅ Menu horizontal
- ✅ Grilles 3 colonnes

### Tablette (768px - 1024px)
- ✅ Vidéo adaptée
- ✅ Menu horizontal
- ✅ Grilles 2 colonnes

### Mobile (< 768px)
- ✅ Vidéo optimisée
- ✅ Menu hamburger
- ✅ Grilles 1 colonne
- ✅ Boutons tactiles

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### La vidéo ne se charge pas
1. Vider le cache navigateur (Ctrl + Shift + Delete)
2. Vérifier la connexion internet
3. Tester sur un autre navigateur
4. Vérifier les permissions fichiers

### Le formulaire ne fonctionne pas
1. Vérifier que PHP est installé
2. Vérifier que mail() est activé
3. Vérifier l'adresse email existe
4. Consulter les logs serveur
5. Tester avec FormSpree si nécessaire

### Les boutons ne sont pas visibles
1. Vider le cache navigateur
2. Recharger avec Ctrl + F5
3. Vérifier que style.css est chargé

### Le menu hamburger ne fonctionne pas
1. Vérifier que script.js est chargé
2. Ouvrir la console navigateur (F12)
3. Chercher les erreurs JavaScript

### Les images ne s'affichent pas
1. Vérifier les chemins des fichiers
2. Vérifier que les images sont uploadées
3. Vérifier les permissions (644)

---

## 📊 STATISTIQUES DU SITE

| Élément | Valeur |
|---------|--------|
| Pages HTML | 5 |
| Services détaillés | 7 |
| Fichiers CSS | 1 (35 KB) |
| Fichiers JS | 1 (8 KB) |
| Images PNG | 2 (132 KB) |
| Taille totale | ~175 KB |
| Temps de chargement | < 3 secondes |
| Compatibilité mobile | 100% |

---

## 🔒 SÉCURITÉ

### Formulaire
- Validation des données (PHP + JS)
- Protection contre injections SQL
- Nettoyage des entrées (strip_tags)
- Validation email

### Recommandations
- Activer HTTPS/SSL
- Ajouter reCAPTCHA (anti-spam)
- Limiter soumissions par IP
- Mettre à jour PHP régulièrement
- Sauvegardes régulières

---

## 📞 SUPPORT

### Contact
**Email :** infos@srs-notaires.com

### Ressources
- Documentation PHP : https://php.net
- FormSpree (alternative) : https://formspree.io
- Coverr (vidéos) : https://coverr.co
- Unsplash (images) : https://unsplash.com

---

## ✅ CHECKLIST FINALE

Avant de mettre en ligne, vérifier :

- [ ] Tous les fichiers uploadés (15 fichiers)
- [ ] Adresse email créée et active
- [ ] PHP et mail() fonctionnent
- [ ] Vidéo se charge correctement
- [ ] Formulaire testé et emails reçus
- [ ] Menu hamburger fonctionne (mobile)
- [ ] Toutes les pages accessibles
- [ ] Liens de navigation fonctionnent
- [ ] Images s'affichent
- [ ] Logo visible
- [ ] Footer complet
- [ ] Responsive testé (mobile + tablette)
- [ ] Navigateurs testés (Chrome, Firefox, Safari)
- [ ] SSL/HTTPS activé
- [ ] Sitemap soumis à Google

---

## 🎉 FÉLICITATIONS !

Votre site SRS Notaires est maintenant prêt à être déployé !

**Caractéristiques principales :**
✅ Vidéo hero professionnelle
✅ 7 services détaillés
✅ Formulaire de contact fonctionnel
✅ Design moderne et responsive
✅ SEO optimisé
✅ Performance optimale

**Bonne chance avec votre site ! 🚀**

---

Version : 1.0 Final
Date : Décembre 2025
© 2025 SRS Notaires - Tous droits réservés
