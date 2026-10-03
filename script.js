document.addEventListener('DOMContentLoaded', () => {

    // 1. Actualizar automáticamente el año en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Control del Menú Hamburguesa para dispositivos móviles
    const menuButton = document.getElementById('menuButton');
    const navigation = document.getElementById('navigation');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            navigation.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace de navegación
        const navLinks = navigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuButton.classList.remove('active');
                navigation.classList.remove('active');
            });
        });
    }

    // 3. Resaltar la sección activa en el menú al hacer scroll
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavOnScroll = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navItem = document.querySelector(`.navigation a[href*="${sectionId}"]`);

            if (navItem) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navItem.style.color = 'var(--accent)';
                } else {
                    navItem.style.color = '';
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNavOnScroll);
});
