import { CONTACT } from "../../config/site";

const en = {
  seo: {
    title: "Strategic Real Estate Investment",
    description:
      "Strategy, analysis, and end-to-end guidance for real estate investment in Spain with a Nordic approach.",
    canonical: "https://hofmahomes.com/en",
    og: {
      title: "HOFMA HOMES",
      description: "Strategic clarity and expert guidance for real estate investment.",
      image: "https://hofmahomes.com/images/hero.jpg",
      locale: "en_US",
    },
  },

  nav: {
    home: "Home",
    services: "Services",
    investment: "Investment",
    projects: "Projects",
    properties: "Properties", // (future; not in menu for now)
    about: "About",
    blog: "Blog",
    terms: "Terms",
    cookie: "Cookies & privacy",
    bookCall: "Book a call",
    email: "Email",
    call: "Call",
  },

  /**
   * Global strings (used by new pages: Contact section + ContactForm)
   */
  global: {
    contact: {
      title: "Contact",
      subtitle: "Send us a message and we will get back to you shortly.",
    },
    cta: {
      call: "Call",
      whatsapp: "WhatsApp",
      bookACall: "Book a call",
    },
    form: {
      button: "Send message",
      submit: "Send message",
      nameLabel: "Name",
      namePlaceholder: "Name",
      emailLabel: "Email",
      emailPlaceholder: "Email",
      messageLabel: "Message",
      messagePlaceholder: "Message",
    },
  },

  ctas: {
    primary: { label: "Book a call", href: CONTACT.calendly },
    services: { label: "View services" },
    projects: { label: "View project catalogue" },
    about: { label: "Meet the team" },
    viewProject: { label: "View project" },
    requestInfo: { label: "Request information", href: "/en/investment" },
  },

  /**
   * (legacy) kept for compatibility
   */
  contactSection: {
    title: "Contact",
    text: "Choose a channel and we’ll discuss your case.",
    actions: {
      call: "Call us",
      whatsapp: "WhatsApp",
      bookCall: "Book a call",
    },
  },

  home: {
    hero: {
      title: "Strategic Real Estate Investment",
      subtitle:
        "Strategy, analysis, and end-to-end guidance for real estate investment in Spain with a Nordic approach.",
      primaryCta: "Book a call",
      primaryHref: CONTACT.calendly,
      contactCta: "Contact",
    },

    services: {
      kicker: "What we offer",
      title: "Services",
      lead: "We work strategically and guide you end-to-end.",
    },

    why: {
      title: "Why HOFMA Homes",
      lead: "A Nordic approach: clarity, criteria, and decisions with context for investing in Spain.",
    },

    featuredProjects: {
      title: "Featured projects",
      lead: "Selected projects with potential, evaluated by location, demand, and long-term perspective.",
    },

    follow: {
      title: "Follow us",
      subtitle: "Find us on social media",
    },
  },

  services: {
    hero: {
      title: "Services",
      subtitle: "Strategic guidance to invest with clarity, criteria, and a long-term view.",
    },
    list: [
      {
        title: "Strategic advisory",
        text: "We assess your profile, goals, and time horizon to define an investment strategy aligned with you.",
      },
      {
        title: "Opportunity selection",
        text: "Access to projects evaluated by location, demand, and potential for appreciation.",
      },
      {
        title: "End-to-end guidance",
        text: "We support you throughout the process with transparency and strategic criteria.",
      },
    ],

    process: {
      kicker: "Method",
      title: "How we work",
      lead: "A clear, step-by-step process to reduce uncertainty and speed up decisions.",
      steps: [
        {
          title: "1. Strategic call",
          text: "We align on goals, budget, and horizon. We define criteria and next steps.",
        },
        {
          title: "2. Options curation",
          text: "We filter opportunities and present options aligned with your criteria.",
        },
        {
          title: "3. Analysis & decision",
          text: "We review numbers, risks, and scenarios. You decide with clarity and support.",
        },
        {
          title: "4. Execution & support",
          text: "We coordinate and support the closing and implementation per service.",
        },
      ],
    },
  },

  why: {
    title: "Why HOFMA HOMES?",
    items: [
      { title: "Clear strategy", text: "We don’t sell properties. We design investment strategies aligned with your goals." },
      { title: "Nordic mindset", text: "Transparency, long-term planning, and decisions grounded in rational analysis." },
      { title: "Real local access", text: "Deep knowledge of the Spanish market and access to selected opportunities." },
    ],
  },

  featuredProjects: {
    title: "Featured projects",
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Premium residential project focused on investment and long-term value.",
        slug: "higueron",
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "A unique opportunity in a natural setting with strong strategic potential.",
        slug: "barbate",
      },
    ],
  },

  projects: {
    hero: {
      title: "Projects",
      subtitle: "Overview of current projects, their location, and the type of opportunity.",
    },
    intro: {
      eyebrow: "CATALOGUE",
      title: "Available projects",
      subtitle: "Explore selected opportunities. Request the full dossier or a shortlist based on your profile.",
    },
    items: [
      {
        title: "Higuerón",
        location: "Costa del Sol",
        text: "Premium residential project focused on investment and long-term value.",
        slug: "higueron",
        seo: {
          title: "Higuerón | HOFMA Homes",
          description: "Premium project in Costa del Sol focused on investment and long-term value.",
          canonical: "https://hofmahomes.com/en/projects/higueron",
        },
      },
      {
        title: "Barbate",
        location: "Cádiz",
        text: "A unique opportunity in Cádiz with strategic potential.",
        slug: "barbate",
        seo: {
          title: "Barbate | HOFMA Homes",
          description: "A unique opportunity in Cádiz with strategic potential.",
          canonical: "https://hofmahomes.com/en/projects/barbate",
        },
      },
    ],
  },

  properties: {
    hero: {
      title: "Properties Catalogue",
      subtitle:
        "Curated properties and investment opportunities in Spain. Structure is ready to scale (filters and sheets in the next phase).",
    },
    intro2: "Structured filters, categories and detailed property sheets will be implemented in the next phase.",
  },

  investment: {
    hero: {
      title: "Investment",
      subtitle: "Strategy, criteria and guidance to invest in Spain with a long-term perspective.",
    },
    bullets: [
      {
        title: "Strategy before product",
        text: "We define goals, horizon and risk tolerance before selecting opportunities.",
      },
      {
        title: "Criteria-based selection",
        text: "We analyse location, demand, liquidity and appreciation potential.",
      },
      {
        title: "End-to-end guidance",
        text: "We guide you with clarity through due diligence, negotiation and closing.",
      },
    ],
    info: {
      kicker: "Guide",
      title: "What we cover",
      lead: "Loans, fractions, owners, rental income and criteria to invest in Spain.",
      items: [
        {
          title: "Loans",
          text: "High-level financing options, scenarios and criteria (no legal/tax advice in this section).",
        },
        {
          title: "Fractions",
          text: "How the model works, common risks, and what to validate before entering.",
        },
        { title: "Owners", text: "Typical structures, responsibilities and checkpoints." },
        { title: "Returns & rent", text: "What drives performance and how to think in scenarios." },
      ],
    },
    calculator: {
      title: "Rental calculator (coming soon)",
      text: "We’ll add a tool here to estimate income, costs and returns with clear assumptions.",
      ctaLabel: "Talk to us",
    },
  },

  /**
   * cookie.astro uses `cookiePolicy`
   */
  cookiePolicy: {
    hero: {
      title: "Cookies & Privacy",
      subtitle: "An overview of cookies, privacy, and basic website use.",
    },
    sections: [
      {
        title: "1. Cookies",
        text: "We use technical cookies and may add analytics cookies in the future to improve the website.",
      },
      {
        title: "2. Personal data",
        text: "If you contact us, we use your data only to respond to your request.",
      },
      {
        title: "3. Third parties",
        text: "Some links (e.g., WhatsApp or Calendly) take you to third-party services with their own privacy policies.",
      },
    ],
  },

  newsletter: {
    title: "Newsletter",
    text: "Analysis, strategic insights, and selected opportunities. No noise. No spam.",
    placeholder: "Your email",
    button: "Subscribe",
  },

  contactForm: {
    title: "Contact us",
    text: "Tell us briefly about your situation and goals. We’ll get back to you as soon as possible.",
    button: "Send message",
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

export default en;