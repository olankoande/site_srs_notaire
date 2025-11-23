// ============================================
// NE RIEN FAIRE POUR LE MENU HAMBURGER
// Le onclick est géré directement dans le HTML
// ============================================

console.log('✅ Script.js chargé - Menu géré en inline');

// ============================================
// SMOOTH SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
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

// ============================================
// BOUTONS "LIRE PLUS"
// ============================================
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

// ============================================
// ANIMATIONS AU SCROLL
// ============================================
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
