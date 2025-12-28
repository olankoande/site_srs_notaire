// ====================================
// MENU HAMBURGER - VERSION ULTRA-ROBUSTE
// ====================================

(function() {
    'use strict';
    
    // Attendre que TOUT soit chargé
    window.addEventListener('load', function() {
        console.log('🚀 Script chargé');
        
        // Récupérer les éléments
        var menuToggle = document.getElementById('menuToggle');
        var navLinks = document.querySelector('.nav-links');
        
        // Vérifier qu'ils existent
        if (!menuToggle || !navLinks) {
            console.error('❌ Éléments du menu non trouvés');
            return;
        }
        
        console.log('✅ Éléments trouvés');
        console.log('📍 menuToggle:', menuToggle);
        console.log('📍 navLinks:', navLinks);
        
        // ====================================
        // FONCTION TOGGLE MENU
        // ====================================
        function toggleMenu() {
            var isOpen = navLinks.classList.contains('active');
            console.log('🔄 Toggle menu - État actuel:', isOpen ? 'OUVERT' : 'FERMÉ');
            
            if (isOpen) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                console.log('🔴 Menu fermé');
            } else {
                navLinks.classList.add('active');
                menuToggle.classList.add('active');
                console.log('🟢 Menu ouvert');
            }
        }
        
        // ====================================
        // ATTACHER LES ÉVÉNEMENTS
        // ====================================
        
        // Méthode 1 : onclick (la plus fiable)
        menuToggle.onclick = function(e) {
            console.log('💥 CLICK onclick détecté!');
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
            return false;
        };
        
        // Méthode 2 : addEventListener
        menuToggle.addEventListener('click', function(e) {
            console.log('💥 CLICK addEventListener détecté!');
            e.preventDefault();
            e.stopPropagation();
        }, false);
        
        // Méthode 3 : touch pour mobile
        menuToggle.addEventListener('touchstart', function(e) {
            console.log('👆 TOUCH détecté!');
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        }, { passive: false });
        
        console.log('✅ Événements attachés');
        console.log('✅ onclick:', typeof menuToggle.onclick);
        
        // ====================================
        // SOUS-MENU MOBILE
        // ====================================
        var submenuLinks = navLinks.querySelectorAll('.has-submenu > a');
        console.log('📋 Sous-menus trouvés:', submenuLinks.length);
        
        for (var i = 0; i < submenuLinks.length; i++) {
            submenuLinks[i].addEventListener('click', function(e) {
                // Sur mobile seulement
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    var parent = this.parentElement;
                    var wasActive = parent.classList.contains('active');
                    
                    // Fermer tous les autres sous-menus
                    var allSubmenuParents = navLinks.querySelectorAll('.has-submenu');
                    for (var j = 0; j < allSubmenuParents.length; j++) {
                        allSubmenuParents[j].classList.remove('active');
                    }
                    
                    // Toggle celui-ci
                    if (!wasActive) {
                        parent.classList.add('active');
                        console.log('📂 Sous-menu ouvert');
                    } else {
                        console.log('📁 Sous-menu fermé');
                    }
                }
            });
        }
        
        // ====================================
        // FERMER EN CLIQUANT SUR UN LIEN
        // ====================================
        var allLinks = navLinks.querySelectorAll('a');
        for (var i = 0; i < allLinks.length; i++) {
            allLinks[i].addEventListener('click', function(e) {
                var isSubmenuLink = this.parentElement.classList.contains('has-submenu');
                
                // Si c'est un lien de sous-menu (pas le parent)
                if (!isSubmenuLink && window.innerWidth <= 768) {
                    setTimeout(function() {
                        navLinks.classList.remove('active');
                        menuToggle.classList.remove('active');
                        console.log('🔗 Menu fermé après clic sur lien');
                    }, 300);
                }
            });
        }
        
        // ====================================
        // FERMER EN CLIQUANT DEHORS
        // ====================================
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                    console.log('🔴 Menu fermé (clic extérieur)');
                }
            }
        });
        
        console.log('✅ Menu hamburger 100% prêt!');
    });
    
})();

// ====================================
// SMOOTH SCROLL
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
});

// ====================================
// BOUTONS "LIRE PLUS"
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.read-more-btn');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var card = this.closest('.service-card-detail');
            var content = card.querySelector('.full-content');
            
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Lire moins';
            } else {
                content.style.display = 'none';
                this.innerHTML = '<i class="fas fa-chevron-down"></i> Lire plus';
            }
        });
    }
});

// ====================================
// ANIMATIONS AU SCROLL
// ====================================
if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        var elements = document.querySelectorAll('.service-card-home, .service-card, .team-member, .why-choose-card');
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = '0';
            elements[i].style.transform = 'translateY(20px)';
            elements[i].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(elements[i]);
        }
    });
}

// Cookie Consent
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    
    // Vérifier si l'utilisateur a déjà répondu
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }
    
    // Accepter les cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
    });
    
    // Refuser les cookies
    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');
    });
});
