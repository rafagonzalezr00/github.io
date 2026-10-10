
/* =====================================================
   MEJORA RESPONSIVE — HERO Y MENÚ MÓVIL
===================================================== */

/* Evitar desbordamientos horizontales */
html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    overflow-x: hidden;
}

section[id] {
    scroll-margin-top: 90px;
}

img {
    max-width: 100%;
}

/* Menú activo */
.navigation a.nav-active {
    color: var(--accent, #59682d);
}

/* Tablet y móvil */
@media (max-width: 850px) {

    /* Primera pantalla */
    .hero {
        padding: 54px 0 56px;
        min-height: auto;
    }

    .hero-grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 34px;
    }

    .hero-content {
        width: 100%;
        max-width: 650px;
        order: 1;
    }

    .hero-image-wrapper {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        order: 2;
    }

    .hero h1 {
        font-size: clamp(2.7rem, 8vw, 4.5rem);
        line-height: 1.04;
        letter-spacing: -0.045em;
        overflow-wrap: break-word;
    }

    .hero-subtitle {
        font-size: clamp(1.05rem, 3.5vw, 1.3rem);
        line-height: 1.5;
    }

    .hero-description {
        font-size: 1rem;
        line-height: 1.8;
        max-width: 580px;
    }

    .hero-label {
        margin-bottom: 22px;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .hero-actions .button {
        min-height: 48px;
        justify-content: center;
    }

    .hero-social {
        margin-top: 26px;
        flex-wrap: wrap;
        gap: 18px;
    }

    .hero-scroll {
        display: none;
    }

    /* Navegación */
    .header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(248, 248, 245, 0.94);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .nav-container {
        min-height: 72px;
    }

    .navigation {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 12px 24px 20px;
        background: #fff;
        border-top: 1px solid rgba(40, 54, 24, 0.08);
        box-shadow: 0 16px 28px rgba(31, 42, 27, 0.09);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(-8px);
        transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;
    }

    .navigation.active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
    }

    .navigation a {
        display: block;
        padding: 14px 4px;
        border-bottom: 1px solid rgba(40, 54, 24, 0.07);
    }

    .navigation a:last-child {
        border-bottom: none;
    }

    .menu-button {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    body.menu-open {
        overflow: hidden;
    }
}


/* Móviles */
@media (max-width: 600px) {

    .container {
        width: min(100% - 36px, 100%);
    }

    .hero {
        padding: 38px 0 44px;
    }

    .hero-grid {
        gap: 28px;
    }

    .hero-content {
        text-align: left;
    }

    .hero-label {
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        margin-bottom: 18px;
    }

    .hero h1 {
        font-size: clamp(2.45rem, 11vw, 3.6rem);
        line-height: 1.02;
        margin-bottom: 18px;
    }

    .hero-subtitle {
        font-size: 1.05rem;
        margin-bottom: 14px;
    }

    .hero-description {
        font-size: 0.94rem;
        line-height: 1.75;
        margin-bottom: 24px;
    }

    /* Botones en columna, cómodos para pulsar */
    .hero-actions {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        width: 100%;
    }

    .hero-actions .button {
        width: 100%;
        min-height: 50px;
        padding: 14px 20px;
        box-sizing: border-box;
        text-align: center;
    }

    .hero-social {
        gap: 16px;
        margin-top: 22px;
        font-size: 0.9rem;
    }

    /* Fotografía */
    .hero-image-wrapper {
        width: 100%;
        max-width: 330px;
        margin: 0 auto;
    }

    .hero-image-frame {
        width: 100%;
        border-radius: 22px;
        overflow: hidden;
    }

    .hero-image {
        display: block;
        width: 100%;
        height: auto;
        max-height: 430px;
        object-fit: cover;
        object-position: center 30%;
        border-radius: inherit;
    }

    .hero-image-info {
        font-size: 0.85rem;
    }

    /* Títulos de las secciones */
    .section {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    .section-title {
        font-size: clamp(2rem, 8vw, 3rem);
        line-height: 1.08;
    }

    .technology-heading {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}


/* Móviles estrechos */
@media (max-width: 380px) {

    .container {
        width: calc(100% - 28px);
    }

    .hero h1 {
        font-size: 2.3rem;
    }

    .hero-image-wrapper {
        max-width: 100%;
    }

    .hero-actions .button {
        font-size: 0.9rem;
    }
}


/* Respetar las preferencias de movimiento */
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
