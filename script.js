
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const navigation = document.getElementById('navigation');

    if (!menuButton || !navigation) return;

    function toggleMenu(open) {
        navigation.classList.toggle('active', open);
        document.body.classList.toggle('menu-open', open);

        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute(
            'aria-label',
            open ? 'Cerrar menú' : 'Abrir menú'
        );
    }

    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.contains('active');
        toggleMenu(!isOpen);
    });

    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 850) {
            toggleMenu(false);
        }
    });
});
