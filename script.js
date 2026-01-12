document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: window.innerWidth < 768 ? 0.05 : 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- 2. Parallax (Only on supported elements, removed from buggy bottom grid) ---
    // This only affects elements that explicitly have the 'parallax-img' class
    const parallaxImages = document.querySelectorAll('.parallax-img');
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxImages.forEach(img => {
                const speed = img.getAttribute('data-speed');
                if(speed) {
                    const yPos = -(scrolled * speed);
                    img.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    }

    // --- 3. Header Fade ---
    const header = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(header) {
            const fadeRate = isMobile ? 900 : 700;
            header.style.opacity = 1 - (scrolled / fadeRate);
            if(!isMobile) {
                const rate = scrolled * 0.5;
                header.style.transform = `translateY(${rate}px)`;
            }
        }
    });

    console.log("%c Strategy Loaded (Safe Mode Active) ", "background: #00d4ff; color: #000; padding: 5px; font-weight: bold;");
});