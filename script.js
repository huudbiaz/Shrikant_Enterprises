/* =========================================================
   SHRIKANT ENTERPRISES
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("mainNavigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen =
        navigation.classList.toggle("active");

      menuToggle.classList.toggle(
        "active",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );

    });


    /* =====================================================
       CLOSE MENU AFTER CLICKING A LINK
    ===================================================== */

    const navigationLinks =
      navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        document.body.classList.remove(
          "menu-open"
        );

      });

    });


    /* =====================================================
       CLOSE MENU WHEN RESIZING BACK TO DESKTOP
    ===================================================== */

    window.addEventListener("resize", function () {

      if (window.innerWidth > 768) {

        navigation.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "menu-open"
        );

      }

    });

  }


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const backToTop =
    document.querySelector(".back-to-top");

  if (backToTop) {

    backToTop.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =======================================================
     CLOSE MOBILE MENU WITH ESCAPE KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        navigation &&
        navigation.classList.contains("active")
      ) {

        navigation.classList.remove("active");

        if (menuToggle) {

          menuToggle.classList.remove("active");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
          );

        }

        document.body.classList.remove(
          "menu-open"
        );

      }

    }
  );

});
