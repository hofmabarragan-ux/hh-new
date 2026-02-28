import { CONTACT } from "../../config/site";

const da = {
  seo: {
    title: "Strategisk ejendomsinvestering",
    description: "Strategi, analyse og sparring til ejendomsinvestering i Spanien med nordisk tilgang.",
    canonical: "https://hofmahomes.com/da",
    og: {
      title: "HOFMA HOMES",
      description: "Strategisk klarhed og ekspert-sparring til ejendomsinvestering.",
      image: "https://hofmahomes.com/images/hero.jpg",
      locale: "da_DK",
    },
  },

  nav: {
    home: "Hjem",
    services: "Services",
    investment: "Investering",
    projects: "Projekter",
    properties: "Ejendomme", // (fremtid; vises ikke i menu endnu)
    about: "Om os",
    blog: "Blog",
    terms: "Vilkår",
    cookie: "Cookies og privatliv",
    bookCall: "Book møde",
    email: "Email",
    call: "Ring",
  },

  /**
   * Global strings (used by new pages: Contact section + ContactForm)
   */
  global: {
    contact: {
      title: "Kontakt",
      subtitle: "Send os en besked, og vi vender straks tilbage.",
    },
    cta: {
      call: "Ring",
      whatsapp: "WhatsApp",
      bookACall: "Book møde",
    },
    form: {
      button: "Send besked",
      submit: "Send besked",
      nameLabel: "Navn",
      namePlaceholder: "Navn",
      emailLabel: "Email",
      emailPlaceholder: "Email",
      messageLabel: "Besked",
      messagePlaceholder: "Besked",
    },
  },

  ctas: {
    primary: { label: "Book strategisk samtale", href: CONTACT.calendly },
    services: { label: "Se services" },
    projects: { label: "Se projektkatalog" },
    about: { label: "Mød teamet" },
    viewProject: { label: "Se projekt" },
    requestInfo: { label: "Anmod om information", href: "/da/investment" },
  },

  /**
   * (legacy) kept for compatibility
   */
  contactSection: {
    title: "Kontakt",
    text: "Vælg kanal, så taler vi om din case.",
    actions: {
      call: "Ring",
      whatsapp: "WhatsApp",
      bookCall: "Book møde",
    },
  },

  home: {
    hero: {
      title: "Strategisk ejendomsinvestering",
      subtitle: "Strategi, analyse og sparring til ejendomsinvestering i Spanien med nordisk tilgang.",
      primaryCta: "Book strategisk samtale",
      primaryHref: CONTACT.calendly,
      contactCta: "Kontakt",
    },

    services: {
      kicker: "Hvad vi tilbyder",
      title: "Services",
      lead: "Vi arbejder strategisk og guider dig hele vejen fra start til slut.",
    },

    why: {
      title: "Hvorfor HOFMA Homes",
      lead: "En nordisk tilgang: klarhed, kriterier og beslutninger med kontekst ved investering i Spanien.",
    },

    featuredProjects: {
      title: "Udvalgte projekter",
      lead: "Udvalgte projekter med potentiale, vurderet efter beliggenhed, efterspørgsel og langsigtet perspektiv.",
    },

    follow: {
      title: "Følg os",
      subtitle: "Find os på sociale medier",
    },
  },

  services: {
    hero: {
      title: "Services",
      subtitle: "Strategisk sparring til at investere med klarhed, kriterier og et langsigtet perspektiv.",
    },
    list: [
      {
        title: "Strategisk rådgivning",
        text: "Vi analyserer din profil, dine mål og din tidshorisont for at definere en strategi, der passer til dig.",
      },
      {
        title: "Udvælgelse af muligheder",
        text: "Adgang til projekter vurderet ud fra beliggenhed, efterspørgsel og potentiale for værdistigning.",
      },
      {
        title: "End-to-end sparring",
        text: "Vi følger dig gennem hele processen med transparens og et strategisk fokus.",
      },
    ],

    process: {
      kicker: "Metode",
      title: "Sådan arbejder vi",
      lead: "En klar proces trin for trin, som reducerer usikkerhed og accelererer beslutninger.",
      steps: [
        {
          title: "1. Strategisk samtale",
          text: "Vi afklarer mål, budget og tidshorisont. Vi definerer kriterier og næste skridt.",
        },
        {
          title: "2. Kuratering af muligheder",
          text: "Vi filtrerer muligheder og præsenterer muligheder, der matcher dine kriterier.",
        },
        {
          title: "3. Analyse & beslutning",
          text: "Vi gennemgår tal, risici og scenarier. Du beslutter med klarhed og sparring.",
        },
        {
          title: "4. Eksekvering & støtte",
          text: "Vi koordinerer og støtter closing og implementering afhængigt af service.",
        },
      ],
    },
  },

  why: {
    title: "Hvorfor HOFMA HOMES?",
    items: [
      { title: "Klar strategi", text: "Vi sælger ikke boliger. Vi designer investeringsstrategier, der matcher dine mål." },
      { title: "Nordisk mindset", text: "Transparens, langsigtet planlægning og beslutninger baseret på rationel analyse." },
      { title: "Reel lokal adgang", text: "Stærkt kendskab til det spanske marked og adgang til udvalgte muligheder." },
    ],
  },

  featuredProjects: {
    title: "Udvalgte projekter",
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Premium boligprojekt med fokus på investering og langsigtet værdi.",
        slug: "higueron",
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "En særlig mulighed i naturlige omgivelser med stærkt strategisk potentiale.",
        slug: "barbate",
      },
    ],
  },

  projects: {
    hero: {
      title: "Projekter",
      subtitle: "Overblik over aktuelle projekter, deres beliggenhed og typen af mulighed.",
    },
    intro: {
      eyebrow: "KATALOG",
      title: "Tilgængelige projekter",
      subtitle: "Udforsk udvalgte muligheder. Bed om fuldt dossier eller en shortlist efter din profil.",
    },
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Premium boligprojekt med fokus på investering og langsigtet værdi.",
        slug: "higueron",
        seo: {
          title: "Higuerón | HOFMA Homes",
          description: "Premium projekt på Costa del Sol med fokus på investering og langsigtet værdi.",
          canonical: "https://hofmahomes.com/da/projects/higueron",
        },
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "En særlig mulighed i Cádiz med strategisk potentiale.",
        slug: "barbate",
        seo: {
          title: "Barbate | HOFMA Homes",
          description: "En særlig mulighed i Cádiz med strategisk potentiale.",
          canonical: "https://hofmahomes.com/da/projects/barbate",
        },
      },
    ],
  },

  properties: {
    hero: {
      title: "Ejendomskatalog",
      subtitle:
        "Udvalgte ejendomme og investeringsmuligheder i Spanien. Strukturen er klar til at vokse (filtre og profiler i næste fase).",
    },
    intro2: "Strukturerede filtre, kategorier og detaljerede ejendomsprofiler implementeres i næste fase.",
  },

  investment: {
    hero: {
      title: "Investering",
      subtitle: "Strategi, kriterier og rådgivning til investering i Spanien med et langsigtet perspektiv.",
    },
    bullets: [
      {
        title: "Strategi før produkt",
        text: "Vi afklarer mål, tidshorisont og risikotolerance før vi udvælger muligheder.",
      },
      {
        title: "Udvælgelse med kriterier",
        text: "Vi analyserer beliggenhed, efterspørgsel, likviditet og værdistigningspotentiale.",
      },
      {
        title: "Rådgivning gennem hele processen",
        text: "Vi følger dig med klarhed i due diligence, forhandling og closing.",
      },
    ],
    info: {
      kicker: "Guide",
      title: "Hvad vi dækker",
      lead: "Lån, fraktioner, ejere, lejeindtægter og kriterier for at investere i Spanien.",
      items: [
        {
          title: "Lån",
          text: "Overblik over finansiering, scenarier og kriterier (uden juridisk/skatterådgivning i denne sektion).",
        },
        {
          title: "Fraktioner",
          text: "Hvordan modellen fungerer, typiske risici og hvad der skal valideres før du går ind.",
        },
        { title: "Ejere", text: "Typiske strukturer, ansvar og kontrolpunkter." },
        { title: "Afkast og leje", text: "Hvilke variabler påvirker afkast, og hvordan man tænker i scenarier." },
      ],
    },
    calculator: {
      title: "Leje-beregner (kommer snart)",
      text: "Her tilføjer vi et værktøj til at estimere indtægter, omkostninger og afkast med klare antagelser.",
      ctaLabel: "Tal med os",
    },
  },

  /**
   * cookie.astro uses `cookiePolicy`
   */
  cookiePolicy: {
    hero: {
      title: "Cookies og privatliv",
      subtitle: "Overblik over cookies, privatliv og grundlæggende brug af sitet.",
    },
    sections: [
      {
        title: "1. Cookies",
        text: "Vi bruger tekniske cookies og kan senere tilføje analytiske cookies for at forbedre sitet.",
      },
      {
        title: "2. Persondata",
        text: "Hvis du kontakter os, bruger vi dine data udelukkende til at svare på din henvendelse.",
      },
      {
        title: "3. Tredjeparter",
        text: "Nogle links (fx WhatsApp eller Calendly) fører til tredjepartstjenester med egne privatlivspolitikker.",
      },
    ],
  },

  newsletter: {
    title: "Nyhedsbrev",
    text: "Analyse, strategiske indsigter og udvalgte muligheder. Ingen støj. Ingen spam.",
    placeholder: "Din email",
    button: "Tilmeld",
  },

  contactForm: {
    title: "Kontakt os",
    text: "Fortæl kort om din situation og dine mål. Vi svarer hurtigst muligt.",
    button: "Send besked",
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

export default da;