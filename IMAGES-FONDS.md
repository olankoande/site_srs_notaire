# Images de Fond par Page - SRS Notaires

## 📸 Récapitulatif des Images de Hero Banner

Chaque page possède maintenant une image de fond unique et pertinente :

### 🏠 **Page d'Accueil (index.html)**
**Image** : Bureau professionnel avec documents et ordinateur
- **URL** : `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80`
- **Thème** : Professionnalisme, juridique, bureau
- **Effet** : Gradient bleu avec opacité 0.85

---

### ⚖️ **Page Services (services.html)**
**Image** : Documents juridiques et stylo sur un bureau
- **URL** : `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80`
- **Thème** : Documents légaux, signature, contrats
- **Effet** : Gradient bleu avec opacité 0.85

---

### 👥 **Page Équipe (equipe.html)**
**Image** : Équipe professionnelle en réunion
- **URL** : `https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80`
- **Thème** : Collaboration, travail d'équipe, professionnels
- **Effet** : Gradient bleu avec opacité 0.85

---

### 💼 **Page Carrières (carrieres.html)**
**Image** : Équipe en collaboration autour d'une table
- **URL** : `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80`
- **Thème** : Croissance, opportunités, travail d'équipe
- **Effet** : Gradient bleu avec opacité 0.85

---

### 📞 **Page Contact (contact.html)**
**Image** : Main écrivant avec stylo - communication
- **URL** : `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80`
- **Thème** : Communication, écriture, contact
- **Effet** : Gradient bleu avec opacité 0.85

---

## 🎨 Caractéristiques Techniques

### Effet Visuel
- **Gradient** : `linear-gradient(rgba(27, 77, 137, 0.85), rgba(13, 59, 102, 0.85))`
- **Opacité** : 85% pour maintenir la lisibilité du texte
- **Position** : `center/cover` pour un remplissage optimal
- **Effet parallaxe** : `background-attachment: fixed` (optionnel)

### Responsive
- Les images s'adaptent automatiquement à toutes les tailles d'écran
- Pas de déformation grâce à `background-size: cover`
- Centrage automatique avec `background-position: center`

### Performance
- Images optimisées depuis Unsplash (CDN rapide)
- Qualité `q=80` pour un bon compromis taille/qualité
- Largeur `w=1600` pour les écrans haute résolution

---

## 🔄 Personnalisation

### Pour changer une image :

1. Trouvez une image sur [Unsplash](https://unsplash.com)
2. Copiez l'URL de l'image (format : `https://images.unsplash.com/photo-XXXXX`)
3. Dans le fichier HTML de la page concernée, modifiez l'URL dans la section hero :

```html
<section class="hero" style="background: linear-gradient(rgba(27, 77, 137, 0.85), rgba(13, 59, 102, 0.85)), url('VOTRE_NOUVELLE_URL') center/cover; background-attachment: fixed;">
```

### Suggestions de mots-clés Unsplash :
- **Notaire/Juridique** : "legal documents", "law office", "notary"
- **Immobilier** : "house keys", "real estate", "property"
- **Business** : "business meeting", "professional office", "handshake"
- **Famille** : "family home", "happy family"
- **Immigration** : "airplane", "passport", "travel"

---

## ✨ Avantages de cette Approche

✅ **Identité visuelle forte** : Chaque page a sa propre personnalité
✅ **Navigation intuitive** : L'utilisateur sait immédiatement où il se trouve
✅ **Professionnalisme** : Images de haute qualité
✅ **Cohérence** : Même traitement visuel (gradient, opacité)
✅ **Performance** : Images optimisées et légères
✅ **Facilement modifiable** : URLs simples à changer

---

**Note** : Toutes les images proviennent d'Unsplash et sont libres de droits pour usage commercial.
