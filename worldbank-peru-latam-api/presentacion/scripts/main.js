// =====================================================
// PRESENTACIÓN - SCROLL FLUIDO Y NATURAL
// Solo animaciones visuales, sin control de navegación
// El scroll lo maneja el navegador de forma nativa
// =====================================================

// Animaciones al hacer scroll (elementos aparecen suavemente)
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupHoverEffects();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observar elementos que necesitan animación
        const elementsToAnimate = document.querySelectorAll(
            '.slide-title, .hero-title, .problem-card, .indicator-card, ' +
            '.insight-card, .method-card, .chart-container, .kpi-highlight, ' +
            '.conclusion-box, .synthesis-box, .result-section, .swot-section, ' +
            '.question-box, .solution-box, .definition-box, .flow-step, ' +
            '.code-section, .explanation-block, .limitation-card, .validation-item'
        );

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    animateElement(element) {
        // Pequeño delay aleatorio para efecto escalonado
        const delay = Math.random() * 200;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    setupHoverEffects() {
        // Efectos hover para tarjetas
        const cards = document.querySelectorAll(
            '.problem-card, .indicator-card, .insight-card, .method-card, ' +
            '.team-member, .swot-section, .limitation-card'
        );

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 20px 40px -5px rgba(0, 0, 0, 0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
    }
}

// Animación de contadores numéricos
class CounterAnimator {
    constructor() {
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animateCounter(entry.target);
                    this.animated.add(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(updateCounter);
    }
}

// Lazy loading de imágenes
class ImageLoader {
    constructor() {
        this.init();
    }

    init() {
        const images = document.querySelectorAll('img.chart-image, img.chart-image-small');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    if (img.complete) {
                        img.style.opacity = '1';
                    } else {
                        img.onload = () => {
                            img.style.opacity = '1';
                        };
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '100px' });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Atajos de teclado útiles
class KeyboardShortcuts {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+F o F11 para pantalla completa
            if ((e.ctrlKey && e.key.toLowerCase() === 'f') || e.key === 'F11') {
                e.preventDefault();
                this.toggleFullscreen();
            }
            
            // Ctrl+H para ayuda
            if (e.ctrlKey && e.key.toLowerCase() === 'h') {
                e.preventDefault();
                this.showHelp();
            }
            
            // Ctrl+P para imprimir
            if (e.ctrlKey && e.key.toLowerCase() === 'p') {
                e.preventDefault();
                window.print();
            }
            
            // Home - ir al inicio
            if (e.key === 'Home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // End - ir al final
            if (e.key === 'End') {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Error al entrar en pantalla completa:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    showHelp() {
        const helpHTML = `
            <div style="background: white; padding: 32px; border-radius: 16px; max-width: 450px; margin: 0 auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
                <h3 style="color: #0066cc; margin-bottom: 24px; font-size: 24px;">⌨️ Atajos de Teclado</h3>
                <div style="display: grid; gap: 16px; font-size: 16px;">
                    <div><strong>Scroll normal:</strong> Rueda del mouse / Trackpad</div>
                    <div><strong>Home:</strong> Ir al inicio</div>
                    <div><strong>End:</strong> Ir al final</div>
                    <div><strong>Ctrl+F / F11:</strong> Pantalla completa</div>
                    <div><strong>Escape:</strong> Salir de pantalla completa</div>
                    <div><strong>Ctrl+H:</strong> Mostrar esta ayuda</div>
                    <div><strong>Ctrl+P:</strong> Imprimir presentación</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="margin-top: 24px; padding: 12px 32px; background: #0066cc; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500;">
                    Cerrar
                </button>
            </div>
        `;
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 24px;
            backdrop-filter: blur(4px);
        `;
        overlay.innerHTML = helpHTML;
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }
}

// Actualizar título según la sección visible
class TitleUpdater {
    constructor() {
        this.titles = [
            'Portada - World Bank API',
            'Objetivo',
            'Problema',
            'API World Bank',
            'Funcionamiento Técnico',
            'Indicadores',
            'Proceso Python',
            'Perú vs Latinoamérica',
            'Impacto COVID-19',
            'Insights',
            'Metodología',
            'Resultados Finales'
        ];
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.section) || 0;
                    const title = this.titles[index] || 'Análisis Económico';
                    document.title = `${title} | Análisis Económico Perú`;
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide);
        });
    }
}

// =====================================================
// INICIALIZACIÓN
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando Presentación: Análisis Económico Perú vs Latinoamérica');
    
    // Inicializar módulos
    new ScrollAnimations();
    new CounterAnimator();
    new ImageLoader();
    new KeyboardShortcuts();
    new TitleUpdater();
    
    console.log('✅ Presentación lista - Scroll fluido activado');
    console.log('💡 Tip: Presiona Ctrl+H para ver atajos de teclado');
});

// Mensaje en consola
console.log(`
🎯 PRESENTACIÓN: World Bank API - Análisis Económico Perú
========================================================

📊 Datos: 7 países × 8 indicadores × 9 años = 504 puntos
🌍 Enfoque: Perú vs Latinoamérica (2015-2023)
🦠 Incluye: Impacto y recuperación COVID-19

🖱️  NAVEGACIÓN:
• Scroll normal con mouse/trackpad
• Home/End para inicio/final
• Ctrl+F para pantalla completa
• Ctrl+H para ayuda

📱 Optimizado para: Proyección 16:9
🎨 Diseño: Moderno, profesional, accesible
`);