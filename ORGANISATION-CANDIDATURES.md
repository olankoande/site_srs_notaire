# 💼 Organisation des Candidatures - SRS Notaires

## ✅ Structure Finale Optimisée

### 📋 **Page Carrières - Organisation**

#### **Postes Spécifiques** (Sans upload direct)

**1. Notaire**
- ✅ Description du poste
- ✅ Détails (lieu, type, durée)
- ✅ Bouton "Postuler" → Redirige vers candidature spontanée
- ❌ Pas d'upload CV direct

**2. Adjoint(e) juridique**
- ✅ Description du poste
- ✅ Détails (lieu, type, durée)
- ✅ Bouton "Postuler" → Redirige vers candidature spontanée
- ❌ Pas d'upload CV direct

---

#### **Section Candidature Spontanée** (Avec upload)

**Formulaire Complet**
- ✅ **Upload de CV en PDF** (requis)
- ✅ **Validation de fichier** (type + taille)
- ✅ **Bouton de soumission**
- ✅ **Message de confirmation**

**ID d'ancre** : `#candidature-spontanee`

---

## 🔗 **Flux de Navigation**

### Parcours Utilisateur

```
┌─────────────────────────┐
│  1. L'utilisateur voit  │
│     le poste "Notaire"  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  2. Clique sur          │
│     "Postuler"          │
└───────────┬─────────────┘
            │
            ▼ Scroll automatique
┌─────────────────────────┐
│  3. Arrive à la section │
│     "Candidature        │
│      spontanée"         │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  4. Upload son CV       │
│     (PDF, max 5MB)      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  5. Clique "Envoyer"    │
│     → Confirmation      │
└─────────────────────────┘
```

---

## 🎯 **Avantages de Cette Organisation**

### ✅ **Pour l'Utilisateur**

**Simplicité**
- Un seul formulaire à remplir
- Pas de confusion entre les postes
- Processus unifié et clair

**Efficacité**
- Redirection automatique vers le formulaire
- Scroll fluide vers la section
- Un seul CV pour tous les postes

**Clarté**
- Tous les postes visibles en un coup d'œil
- Formulaire centralisé
- Navigation intuitive

---

### ✅ **Pour l'Entreprise**

**Gestion Simplifiée**
- Toutes les candidatures au même endroit
- Un seul formulaire à gérer
- Tri plus facile des CVs

**Flexibilité**
- Les candidats peuvent postuler à plusieurs postes
- CV générique accepté
- Moins de maintenance technique

**Professionnalisme**
- Interface épurée
- Processus standard
- Moins d'erreurs de formulaire

---

## 💻 **Code HTML**

### Poste Notaire (Bouton de redirection)

```html
<div class="job-card">
    <h3>Notaire</h3>
    <div class="job-details">
        <p><i class="fas fa-map-marker-alt"></i> Laval, Québec</p>
        <p><i class="fas fa-briefcase"></i> Temps plein</p>
        <p><i class="fas fa-clock"></i> Permanent</p>
    </div>
    <p class="job-description">
        Nous recherchons un notaire expérimenté...
    </p>
    <a href="#candidature-spontanee" class="apply-button">
        <i class="fas fa-paper-plane"></i> Postuler
    </a>
</div>
```

---

### Candidature Spontanée (Formulaire avec upload)

```html
<div class="spontaneous-application" id="candidature-spontanee">
    <h3>Candidature spontanée</h3>
    <p>Aucun poste ne correspond à votre profil ? 
       Envoyez-nous votre CV et lettre de motivation.</p>
    
    <form class="application-form" 
          onsubmit="return submitApplication(event, 'Candidature spontanée')">
        
        <div class="file-upload-container">
            <label for="cv-spontanee" class="file-upload-label">
                <i class="fas fa-file-pdf"></i> Joindre votre CV (PDF)
            </label>
            <input type="file" 
                   id="cv-spontanee" 
                   accept=".pdf" 
                   required 
                   onchange="displayFileName(this, 'cv-spontanee-display')">
            <span class="file-name-display" id="cv-spontanee-display">
                Aucun fichier sélectionné
            </span>
            <span class="error-message" id="cv-spontanee-error"></span>
            <span class="file-size-info">
                Taille maximale: 5 MB - Format: PDF uniquement
            </span>
        </div>
        
        <button type="submit" class="apply-button">
            <i class="fas fa-paper-plane"></i> Envoyer votre candidature
        </button>
    </form>
</div>
```

---

## 🎨 **Effets Visuels**

### Scroll vers Candidature Spontanée

**Comportement** :
1. Clic sur "Postuler" d'un poste
2. Scroll fluide et automatique
3. Section mise en surbrillance (animation jaune)
4. Durée : 1.5 secondes

**CSS** :
```css
.spontaneous-application {
    scroll-margin-top: 140px; /* Espace pour le header */
}

.spontaneous-application:target {
    animation: highlightSection 1.5s ease-in-out;
}

@keyframes highlightSection {
    0%, 100% {
        background: #f8f9fa;
    }
    50% {
        background: #fff3cd; /* Surbrillance jaune */
    }
}
```

---

## 📱 **Interface Utilisateur**

### Vue Desktop

```
┌─────────────────────────────────────────┐
│  CARRIÈRES                              │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────┐  ┌──────────────┐ │
│  │ Notaire         │  │ Adjoint(e)   │ │
│  │                 │  │ juridique    │ │
│  │ Description...  │  │ Description  │ │
│  │                 │  │              │ │
│  │ [📤 Postuler]  │  │ [📤 Postuler]│ │
│  └─────────────────┘  └──────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 💼 Candidature spontanée            ││
│  │                                     ││
│  │ 📄 Joindre votre CV (PDF)          ││
│  │ ✓ MonCV.pdf (1.2 MB)               ││
│  │                                     ││
│  │ [📤 Envoyer votre candidature]     ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

### Vue Mobile

```
┌─────────────────┐
│ Notaire         │
│ Description...  │
│ [📤 Postuler]   │
├─────────────────┤
│ Adjoint(e)      │
│ juridique       │
│ [📤 Postuler]   │
├─────────────────┤
│ Candidature     │
│ spontanée       │
│                 │
│ 📄 Joindre CV   │
│ [📤 Envoyer]    │
└─────────────────┘
```

---

## 🧪 **Tests à Effectuer**

### Test 1 : Navigation

| Action | Résultat Attendu |
|--------|------------------|
| Clic sur "Postuler" (Notaire) | Scroll vers candidature spontanée |
| Clic sur "Postuler" (Adjoint) | Scroll vers candidature spontanée |
| Observation | Animation de surbrillance jaune |

---

### Test 2 : Upload de CV

| Action | Résultat Attendu |
|--------|------------------|
| Sélectionner .docx | ❌ Erreur "PDF uniquement" |
| Sélectionner PDF > 5MB | ❌ Erreur "trop volumineux" |
| Sélectionner PDF valide | ✅ Nom + taille affichés |
| Soumettre sans fichier | ❌ Erreur "sélectionner fichier" |
| Soumettre avec PDF | ✅ Message de confirmation |

---

### Test 3 : Responsive

| Appareil | Vérification |
|----------|--------------|
| Desktop | Postes en grille, formulaire visible |
| Tablette | Postes en 2 colonnes, scroll fluide |
| Mobile | Postes empilés, bouton pleine largeur |

---

## 📊 **Comparaison Avant/Après**

| Aspect | Avant | Après |
|--------|-------|-------|
| **Formulaires** | 3 formulaires séparés | 1 formulaire centralisé |
| **Upload CV** | Sur chaque poste | Uniquement spontanée |
| **Navigation** | Liens vers contact | Ancre vers formulaire |
| **UX** | Répétitif | Simplifié et fluide |
| **Maintenance** | Complexe | Facile |

---

## ✨ **Points Forts**

### ✅ **Simplicité**
- Un seul formulaire à gérer
- Processus unifié
- Moins de code à maintenir

### ✅ **Efficacité**
- Navigation automatique
- Scroll fluide
- Animation de guidage

### ✅ **Professionnalisme**
- Interface épurée
- Workflow logique
- Expérience cohérente

### ✅ **Flexibilité**
- Facile d'ajouter de nouveaux postes
- CV unique pour toutes candidatures
- Adaptable aux besoins futurs

---

## 🚀 **Mise en Place**

### Pour Ajouter un Nouveau Poste

1. **Copier** une carte de poste existante
2. **Modifier** le titre et la description
3. **Garder** le lien `href="#candidature-spontanee"`
4. **Tester** le scroll automatique

**Exemple** :
```html
<div class="job-card">
    <h3>Nouveau Poste</h3>
    <div class="job-details">
        <p><i class="fas fa-map-marker-alt"></i> Laval, Québec</p>
        <p><i class="fas fa-briefcase"></i> Temps plein</p>
        <p><i class="fas fa-clock"></i> Permanent</p>
    </div>
    <p class="job-description">Description du poste...</p>
    <a href="#candidature-spontanee" class="apply-button">
        <i class="fas fa-paper-plane"></i> Postuler
    </a>
</div>
```

---

## 📞 **Support**

Pour toute modification ou personnalisation :
- Consultez `GUIDE-COMPLET.md`
- Référez-vous à `VALIDATION-FORMULAIRES.md`
- Testez sur `carrieres.html`

---

**Version** : 6.0 - Organisation Optimisée  
**Date** : Novembre 2025  
**Statut** : ✅ Production Ready

**Cette organisation offre la meilleure expérience utilisateur tout en simplifiant la gestion des candidatures.**
