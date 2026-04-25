console.log("Portafolio cargado correctamente");

// Scroll suave menú (modificado para evitar conflictos si el anchor no existe)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const translations = {
  es: {
    flag: "🇪🇸",
    langName: "ES",
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "hero-greeting": "Hola, soy Omar Ayaou 👋",
    "hero-title": "Técnico Microinformático Junior",
    "hero-subtitle": "Enfocado en soporte técnico, redes y desarrollo web front-end. Busco mi primera gran oportunidad para aportar valor y seguir creciendo.",
    "hero-btn": "Hablemos",
    "about-title": "Sobre mí",
    "about-text-1": "Soy estudiante de informática con un perfil versátil. Me apasiona entender cómo funcionan los sistemas desde la base hasta la interfaz que ve el usuario.",
    "about-text-2": "Cuento con experiencia práctica en telecomunicaciones, donde aprendí a diagnosticar problemas, dar soporte técnico y trabajar en equipo. Destaco por mi capacidad de aprendizaje rápido y mi actitud proactiva ante nuevos retos tecnológicos.",
    "skills-title": "Habilidades Técnicas",
    "projects-title": "Proyectos Destacados",
    "projects-subtitle": "Trabajos académicos y prácticas personales",
    "card1-title": "Página web Corporativa (HTML/CSS)",
    "card1-text": "Proyecto académico construyendo una página web estática desde cero utilizando semántica HTML y estilos CSS.",
    "card2-title": "Maquetación de Prototipos",
    "card2-text": "Implementación de diseño web responsive, asegurando la adaptabilidad en dispositivos móviles usando HTML, CSS y JavaScript básico.",
    "view-project": "Ver web",
    "view-repo": "Código",
    "more-github": "Ver mi perfil en GitHub",
    "contact-title": "Contacto",
    "contact-desc": "¿Buscas un perfil junior motivado para tu equipo? Estaré encantado de hablar contigo.",
    "footer-text": "© 2026 Omar Ayaou Ouahdane. Todos los derechos reservados."
  },
  ca: {
    flag: "🚩",
    langName: "CA",
    "nav-home": "Inici",
    "nav-about": "Sobre mi",
    "nav-projects": "Projectes",
    "nav-contact": "Contacte",
    "hero-greeting": "Hola, soc l'Omar Ayaou 👋",
    "hero-title": "Tècnic Microinformàtic Junior",
    "hero-subtitle": "Enfocat en suport tècnic, xarxes i desenvolupament web front-end. Busco la meva primera gran oportunitat per aportar valor i continuar creixent.",
    "hero-btn": "Parlem",
    "about-title": "Sobre mi",
    "about-text-1": "Soc estudiant d'informàtica amb un perfil versàtil. M'apassiona entendre com funcionen els sistemes des de la base fins a la interfície que veu l'usuari.",
    "about-text-2": "Compto amb d'experiència pràctica en telecomunicacions, on vaig aprendre a diagnosticar problemes, donar suport tècnic i treballar en equip. Destaco per la meva capacitat d'aprenentatge ràpid i actitud proactiva.",
    "skills-title": "Habilitats Tècniques",
    "projects-title": "Projectes Destacats",
    "projects-subtitle": "Treballs acadèmics i pràctiques personals",
    "card1-title": "Pàgina web Corporativa (HTML/CSS)",
    "card1-text": "Projecte acadèmic construint una pàgina web estàtica des de zero utilitzant semàntica HTML i estils CSS.",
    "card2-title": "Maquetació de Prototips",
    "card2-text": "Implementació de disseny web responsive, assegurant l'adaptabilitat en dispositius mòbils usant HTML, CSS i JavaScript bàsic.",
    "view-project": "Veure web",
    "view-repo": "Codi",
    "more-github": "Veure el meu perfil a GitHub",
    "contact-title": "Contacte",
    "contact-desc": "Busques un perfil junior motivat per al teu equip? Estaré encantat de parlar amb tu.",
    "footer-text": "© 2026 Omar Ayaou Ouahdane. Tots els drets reservats."
  },
  en: {
    flag: "🇬🇧",
    langName: "EN",
    "nav-home": "Home",
    "nav-about": "About me",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-greeting": "Hi, I'm Omar Ayaou 👋",
    "hero-title": "Junior Microinformatics Technician",
    "hero-subtitle": "Focused on technical support, networking, and front-end web development. Looking for my first professional opportunity to add value and keep growing.",
    "hero-btn": "Let's talk",
    "about-title": "About me",
    "about-text-1": "I am a computer science student with a versatile profile. I am passionate about understanding how systems work from the core to the user interface.",
    "about-text-2": "I have practical experience in telecommunications, where I learned to diagnose issues, provide tech support, and work as a team. I stand out for my quick learning and proactive attitude.",
    "skills-title": "Technical Skills",
    "projects-title": "Featured Projects",
    "projects-subtitle": "Academic work and personal practice",
    "card1-title": "Corporate Website (HTML/CSS)",
    "card1-text": "Academic project building a static website from scratch using semantic HTML and CSS styling.",
    "card2-title": "Prototype Layout",
    "card2-text": "Responsive web design implementation, ensuring adaptability on mobile devices using basic HTML, CSS, and JavaScript.",
    "view-project": "View site",
    "view-repo": "Code",
    "more-github": "View my GitHub profile",
    "contact-title": "Contact",
    "contact-desc": "Looking for a motivated junior profile for your team? I'd be happy to chat with you.",
    "footer-text": "© 2026 Omar Ayaou Ouahdane. All rights reserved."
  }
};

window.changeLanguage = function (lang) {
  const langData = translations[lang];
  if (!langData) return;

  // 1. Actualizar el texto del botón principal
  const langBtnText = document.getElementById("current-lang-text");
  const flagIcon = document.getElementById("current-flag");

  if (langBtnText) langBtnText.textContent = langData.langName;
  // Corregido: para que el icono cambie visualmente en el HTML
  if (flagIcon) flagIcon.textContent = langData.flag; 

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