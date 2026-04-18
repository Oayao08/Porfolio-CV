// Scroll suave menú
console.log("Funciona correctamente");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const translations = {
  ca: {
    flag: "️️️️🚩", // Puedes usar emojis o texto
    langName: "CA",
    "nav-projects": "Projectes",
    "nav-about": "Sobre mi",
    "nav-contact": "Contacte",
    "hero-title": "Estudiant de microinformàtica",
    "hero-subtitle": "HTML · CSS · JavaScript bàsic",
    "projects-title": "Projectes",
    "card1-title": "Pàgina web HTML + CSS",
    "card1-text": "Projecte acadèmic de pàgina web estàtica amb HTML i CSS.",
    "card2-title": "Maquetació de prototips web",
    "card2-text": "Web responsive creada amb HTML, CSS i JavaScript.",
    "view-project": "Veure projecte",
    "view-repo": "Veure repositori",
    "more-github": "Veure més a GitHub",
    "about-title": "Sobre mi",
    "about-text":
      "Estudiant d'informàtica apassionat per la informàtica i l'analítica de dades. Amb 500h d'experiència en telecomunicacions.",
    "contact-title": "Contacte",
    "footer-text": "© 2026 Omar Ayaou",
  },
  es: {
    flag: "🇪🇸",
    langName: "ES",
    "nav-projects": "Proyectos",
    "nav-about": "Sobre mí",
    "nav-contact": "Contacto",
    "hero-title": "Estudiante de microinformática",
    "hero-subtitle": "HTML · CSS · JavaScript básico",
    "projects-title": "Proyectos",
    "card1-title": "Página web HTML + CSS",
    "card1-text": "Proyecto académico de página web estática con HTML y CSS.",
    "card2-title": "Maquetación de prototipos web",
    "card2-text": "Web responsive creada con HTML, CSS y JavaScript.",
    "view-project": "Ver proyecto",
    "view-repo": "Ver repositorio",
    "more-github": "Ver más en GitHub",
    "about-title": "Sobre mí",
    "about-text":
      "Estudiante de informática apasionado por la informática y la analítica de datos. Con 500h de experiencia en telecomunicaciones.",
    "contact-title": "Contacto",
    "footer-text": "© 2026 Omar Ayaou",
  },
  en: {
    flag: "🇬🇧",
    langName: "EN",
    "nav-projects": "Projects",
    "nav-about": "About me",
    "nav-contact": "Contact",
    "hero-title": "Microinformatics Student",
    "hero-subtitle": "HTML · CSS · Basic JavaScript",
    "projects-title": "Projects",
    "card1-title": "HTML + CSS Web Page",
    "card1-text": "Academic project of a static website using HTML and CSS.",
    "card2-title": "Web Prototype Layout",
    "card2-text": "Responsive web created with HTML, CSS, and JavaScript.",
    "view-project": "View project",
    "view-repo": "View repository",
    "more-github": "See more on GitHub",
    "about-title": "About me",
    "about-text":
      "Computer science student passionate about IT and data analytics. With 500h of experience in telecom.",
    "contact-title": "Contact",
    "footer-text": "© 2026 Omar Ayaou",
  },
};

// Función global para que el onclick del HTML la encuentre
window.changeLanguage = function (lang) {
  const langData = translations[lang];
  if (!langData) return;

  // 1. Actualizar el texto del botón principal
  const langBtnText = document.getElementById("current-lang-text");
  const flagIcon = document.getElementById("current-flag");

  if (langBtnText) langBtnText.textContent = langData.langName;
  if (flagIcon) flagIcon.flag = langData.flag; // Opcional si usas emojis

  // 2. Recorrer todos los elementos que tengan data-key
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (langData[key]) {
      element.innerHTML = langData[key];
    }
  });

  // 3. Cambiar el idioma del documento
  document.documentElement.lang = lang;
};
