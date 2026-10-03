/* =========================================================
MENÚ MÓVIL
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

```
navLinks.classList.toggle("active");
```

});

/* =========================================================
CERRAR MENÚ AL PULSAR UN ENLACE
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

```
link.addEventListener("click", () => {

    navLinks.classList.remove("active");

});
```

});

/* =========================================================
AÑO AUTOMÁTICO
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

```
yearElement.textContent = new Date().getFullYear();
```

}
