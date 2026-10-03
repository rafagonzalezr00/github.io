document.addEventListener("DOMContentLoaded", () => {

```
/* =====================================================
   MENÚ MÓVIL
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });


    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

            });

        });

}


/* =====================================================
   AÑO AUTOMÁTICO
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CAMBIO DE CABECERA AL HACER SCROLL
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }


    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.05)";

    } else {

        header.style.boxShadow =
            "none";

    }

});
```

});
