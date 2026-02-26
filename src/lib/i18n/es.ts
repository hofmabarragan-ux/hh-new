import { CONTACT } from "../../config/site";

const es = {
  seo: {
    title: "Inversión inmobiliaria estratégica",
    description:
      "Estrategia, análisis y acompañamiento en inversión inmobiliaria en España con enfoque nórdico.",
    canonical: "https://hofmahomes.com/es",
    og: {
      title: "HOFMA HOMES",
      description: "Claridad estratégica y acompañamiento experto en inversión inmobiliaria.",
      image: "https://hofmahomes.com/images/hero.jpg",
      locale: "es_ES",
    },
  },

  nav: {
    home: "Inicio",
    services: "Servicios",
    investment: "Inversión",
    projects: "Proyectos",
    properties: "Propiedades", // (futuro; no se muestra en menu por ahora)
    about: "Sobre nosotros",
    blog: "Blog",
    terms: "Términos",
    cookie: "Cookies y privacidad",
    bookCall: "Agendar llamada",
    email: "Email",
    call: "Llamar",
  },

  /**
   * Global strings (usado por las páginas nuevas con Contact section + ContactForm)
   */
  global: {
    contact: {
      title: "Contacto",
      subtitle: "Elige el canal más rápido. Respondemos rápido.",
    },
    cta: {
      call: "Llamar",
      whatsapp: "WhatsApp",
      bookACall: "Agendar llamada",
    },
    form: {
      button: "Enviar mensaje",
      submit: "Enviar mensaje",
      nameLabel: "Nombre",
      namePlaceholder: "Nombre",
      emailLabel: "Email",
      emailPlaceholder: "Email",
      messageLabel: "Mensaje",
      messagePlaceholder: "Mensaje",
    },
  },

  ctas: {
    primary: {
      label: "Agendar llamada",
      href: CONTACT.calendly,
    },
    services: { label: "Ver servicios" },
    projects: { label: "Ver catálogo de proyectos" },
    about: { label: "Conocer el equipo" },
    viewProject: { label: "Ver proyecto" },
    requestInfo: {
      label: "Solicitar información",
      href: "/es/investment",
    },
  },

  /**
   * (legacy) Contacto unificado para componentes/páginas antiguas
   * Recomendación: migrar a global.contact/global.cta.
   */
  contact: {
    title: "Contacto",
    text: "Elige el canal más rápido y hablamos de tu caso.",
    actions: {
      call: "Llamar",
      whatsapp: "WhatsApp",
      bookCall: "Agendar llamada",
    },
  },

  home: {
    hero: {
      title: "Inversión inmobiliaria estratégica",
      subtitle:
        "Estrategia, análisis y acompañamiento en inversión inmobiliaria en España con enfoque nórdico.",
      primaryCta: "Agendar llamada",
      primaryHref: CONTACT.calendly,
      contactCta: "Contactar",
    },

    services: {
      kicker: "Qué ofrecemos",
      title: "Servicios",
      lead: "Trabajamos con un enfoque estratégico y acompañamiento de principio a fin.",
    },

    why: {
      title: "Por qué HOFMA Homes",
      lead: "Un enfoque nórdico: claridad, criterio y decisiones con contexto para invertir en España.",
    },

    featuredProjects: {
      title: "Proyectos destacados",
      lead:
        "Selección de proyectos con potencial, evaluados con criterios de ubicación, demanda y visión a largo plazo.",
    },

    follow: {
      title: "Síguenos",
      subtitle: "Encuéntranos en redes sociales",
    },
  },

  services: {
    hero: {
      title: "Servicios",
      subtitle: "Acompañamiento estratégico para invertir con claridad, criterio y visión a largo plazo.",
    },

    list: [
      {
        title: "Asesoramiento estratégico",
        text:
          "Analizamos tu perfil, objetivos y horizonte de inversión para definir una estrategia inmobiliaria alineada contigo.",
      },
      {
        title: "Selección de oportunidades",
        text:
          "Acceso a proyectos evaluados bajo criterios de ubicación, demanda y potencial de revalorización.",
      },
      {
        title: "Acompañamiento integral",
        text: "Te acompañamos durante todo el proceso con transparencia y criterio estratégico.",
      },
    ],

    process: {
      kicker: "Metodología",
      title: "Cómo trabajamos",
      lead: "Un proceso claro, paso a paso, para reducir incertidumbre y acelerar decisiones.",
      steps: [
        {
          title: "1. Llamada estratégica",
          text: "Entendemos objetivos, presupuesto y horizonte. Definimos criterios y siguientes pasos.",
        },
        {
          title: "2. Curación de opciones",
          text: "Filtramos oportunidades y presentamos opciones alineadas con tus criterios.",
        },
        {
          title: "3. Análisis y decisión",
          text: "Revisamos números, riesgos y escenarios. Decides con claridad y soporte.",
        },
        {
          title: "4. Ejecución y acompañamiento",
          text: "Coordinamos y acompañamos el cierre y la implementación según el servicio.",
        },
      ],
    },

    // compatibilidad (si alguna página lo usa)
    contact: {
      title: "Hablemos",
      text:
        "Si estás considerando invertir en España, conversemos y evaluemos si existe una oportunidad adecuada para ti.",
      actions: {
        call: "Llamar",
        whatsapp: "WhatsApp",
        bookCall: "Agendar llamada",
        email: "Email",
      },
    },
  },

  why: {
    title: "¿Por qué HOFMA HOMES?",
    items: [
      {
        title: "Estrategia clara",
        text: "No vendemos propiedades. Diseñamos estrategias de inversión alineadas con tus objetivos.",
      },
      {
        title: "Mentalidad nórdica",
        text: "Transparencia, planificación a largo plazo y decisiones basadas en análisis racional.",
      },
      {
        title: "Acceso local real",
        text: "Conocimiento profundo del mercado español y acceso a oportunidades seleccionadas.",
      },
    ],
  },

  featuredProjects: {
    title: "Proyectos destacados",
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Proyecto residencial premium enfocado en inversión y valor a largo plazo.",
        slug: "higueron",
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "Oportunidad singular en entorno natural con fuerte potencial estratégico.",
        slug: "barbate",
      },
    ],
  },

  projects: {
    hero: {
      title: "Proyectos",
      subtitle: "Descripción general de los proyectos actuales, su ubicación y el tipo de oportunidad.",
    },
    intro: {
      eyebrow: "CATÁLOGO",
      title: "Proyectos disponibles",
      subtitle:
        "Explora oportunidades seleccionadas. Solicita dossier completo o una shortlist según tu perfil.",
    },
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Proyecto residencial premium enfocado en inversión y valor a largo plazo.",
        slug: "higueron",
        seo: {
          title: "Higuerón | HOFMA Homes",
          description: "Proyecto premium en Costa del Sol. Enfoque en inversión y valor a largo plazo.",
          canonical: "https://hofmahomes.com/es/projects/higueron",
        },
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "Oportunidad singular en Cádiz con potencial estratégico.",
        slug: "barbate",
        seo: {
          title: "Barbate | HOFMA Homes",
          description: "Oportunidad singular en Cádiz con potencial estratégico.",
          canonical: "https://hofmahomes.com/es/projects/barbate",
        },
      },
    ],
  },

  properties: {
    hero: {
      title: "Catálogo de Propiedades",
      subtitle:
        "Propiedades seleccionadas y oportunidades para inversión en España. Estructura lista para crecer (filtros y fichas en fase siguiente).",
    },
    intro2: "Filtros estructurados, categorías y fichas detalladas se implementarán en la siguiente fase.",
  },

  investment: {
    hero: {
      title: "Inversión",
      subtitle: "Estrategia, criterios y acompañamiento para invertir en España con visión a largo plazo.",
    },

    bullets: [
      {
        title: "Estrategia antes que producto",
        text: "Definimos objetivos, horizonte y tolerancia al riesgo antes de seleccionar oportunidades.",
      },
      {
        title: "Selección con criterios",
        text: "Analizamos ubicación, demanda, liquidez y potencial de revalorización.",
      },
      {
        title: "Acompañamiento en todo el proceso",
        text: "Te acompañamos con claridad en due diligence, negociación y cierre.",
      },
    ],

    info: {
      kicker: "Guía",
      title: "Qué cubrimos",
      lead: "Préstamos, fracciones, propietarios, rentas y criterios para invertir en España.",
      items: [
        {
          title: "Préstamos",
          text: "Opciones generales de financiación, escenarios y criterios (sin asesoría legal/fiscal en esta sección).",
        },
        {
          title: "Fracciones",
          text: "Cómo funciona el modelo, riesgos comunes y qué validar antes de entrar.",
        },
        {
          title: "Propietarios",
          text: "Estructuras típicas, responsabilidades y puntos de control.",
        },
        {
          title: "Ganancias y rentas",
          text: "Qué variables mueven el rendimiento y cómo pensar escenarios.",
        },
      ],
    },

    calculator: {
      title: "Calculadora de rentas (próximamente)",
      text: "Aquí agregaremos una herramienta para estimar ingresos, costes y rentabilidad con supuestos claros.",
      ctaLabel: "Hablar con nosotros",
    },

    cta: {
      title: "¿Quieres que evaluemos tu caso?",
      text:
        "Agenda una llamada estratégica o escríbenos por WhatsApp. Te diremos si tiene sentido avanzar y con qué enfoque.",
    },
  },

  about: {
    hero: {
      title: "Sobre HOFMA Homes",
      subtitle: "Estrategia, criterio y acompañamiento humano en inversión inmobiliaria en España.",
    },
  },

  blog: {
    hero: {
      title: "Blog",
      subtitle: "Artículos y análisis sobre inversión inmobiliaria en España.",
    },
    posts: [],
  },

  terms: {
    hero: {
      title: "Términos y Condiciones",
      lastUpdateLabel: "Última actualización:",
      lastUpdateValue: String(new Date().getFullYear()),
    },
    sections: [
      {
        title: "1. Información General",
        text:
          "HOFMA Homes ofrece información relacionada con inversión inmobiliaria en España. Esta información tiene carácter general y no constituye asesoramiento legal, fiscal o financiero personalizado.",
      },
      {
        title: "2. Uso del Sitio Web",
        text:
          "El usuario se compromete a utilizar el sitio de forma lícita y adecuada. No se permite el uso indebido, fraudulento o contrario a la normativa aplicable.",
      },
      {
        title: "3. Limitación de Responsabilidad",
        text:
          "HOFMA Homes no garantiza la exactitud absoluta de la información publicada y no se hace responsable de decisiones tomadas en base a dicha información sin asesoramiento profesional independiente.",
      },
      {
        title: "4. Propiedad Intelectual",
        text:
          "Todos los contenidos del sitio (textos, diseño, estructura y marca) están protegidos por derechos de propiedad intelectual.",
      },
      {
        title: "5. Modificaciones",
        text: "HOFMA Homes se reserva el derecho de modificar estos términos en cualquier momento.",
      },
    ],
  },

  /**
   * IMPORTANTE: cookie.astro usa `cookiePolicy`, no `cookie`.
   */
  cookiePolicy: {
    hero: {
      title: "Cookies y Privacidad",
      subtitle: "Resumen de cookies, privacidad y uso básico del sitio.",
    },
    sections: [
      {
        title: "1. Cookies",
        text: "Utilizamos cookies técnicas y, en el futuro, cookies analíticas para mejorar el sitio.",
      },
      {
        title: "2. Datos personales",
        text: "Si nos contactas, utilizaremos tus datos únicamente para responder a tu solicitud.",
      },
      {
        title: "3. Terceros",
        text: "Algunos enlaces (WhatsApp o Calendly) te llevan a servicios de terceros con sus propias políticas.",
      },
    ],
  },

  newsletter: {
    title: "Newsletter",
    text: "Análisis, ideas estratégicas y oportunidades seleccionadas. Sin ruido. Sin spam.",
    placeholder: "Tu email",
    button: "Suscribirme",
  },

  /**
   * ContactForm ahora es “solo el form”.
   * Mantenemos `contactForm` para páginas que aún lo usan.
   */
  contactForm: {
    title: "Contacta con nosotros",
    text: "Cuéntanos brevemente tu situación y objetivos. Te responderemos lo antes posible.",
    button: "Enviar mensaje",
  },

  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
    linkedin: "#",
  },

  contactInfo: {
    email: "hofmahomes@gmail.com",
    phone: "",
  },
};

export default es;