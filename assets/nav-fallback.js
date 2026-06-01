(function () {
  const sectionBySubmenu = {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };

  function isHomePage() {
    return document.body?.dataset?.page === "home";
  }

  function closeOtherMenus(activeButton) {
    document.querySelectorAll(".nav-parent").forEach((button) => {
      if (button !== activeButton) {
        button.setAttribute("aria-expanded", "false");
        const submenu = document.getElementById(button.getAttribute("aria-controls"));
        submenu?.classList.remove("open");
      }
    });
  }

  function toggleMenu(button) {
    const submenuId = button.getAttribute("aria-controls");
    const submenu = document.getElementById(submenuId);
    if (!submenu) return;

    const willOpen = button.getAttribute("aria-expanded") !== "true";
    closeOtherMenus(button);
    button.setAttribute("aria-expanded", String(willOpen));
    submenu.classList.toggle("open", willOpen);

    if (willOpen && isHomePage()) {
      const sectionId = sectionBySubmenu[submenuId];
      const section = sectionId ? document.getElementById(sectionId) : null;
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${sectionId}`);
      }
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".nav-parent");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    toggleMenu(button);
  }, true);

  window.UFCD10788ToggleMenu = toggleMenu;
})();
