import type { Translations } from './cs';

export const en: Translations = {
  lang: 'en',
  locale: 'en-US',
  dir: 'ltr',

  meta: {
    title: 'webrocks – Web Developer | webrocks.cz',
    description:
      'webrocks builds fast websites, web applications and Chrome extensions with a focus on performance and web analytics. For individuals and small businesses.',
    keywords:
      'web developer, website development, performance audit, web analytics, GA4, Chrome extension, React, JavaScript, Czech Republic',
    ogImage: '/og-en.svg',
    ogImageAlt: 'webrocks – Web Developer | webrocks.cz',
  },

  nav: {
    services: 'Services',
    projects: 'Projects',
    pricing: 'Pricing',
    contact: 'Contact',
    langSwitch: 'CS',
    langSwitchHref: '/',
  },

  labels: {
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    contact: 'Contact',
  },

  hero: {
    greeting: 'This is',
    name: 'webrocks',
    headline: ['Fast websites.', 'Accurate data.', 'Results.'],
    sub: 'webrocks builds websites and web applications focused on performance and proper data measurement. For individuals and small businesses.',
    cta1: 'What we do',
    cta2: 'Contact',
  },

  services: {
    title: 'What we do',
    sub: 'Every project is different. Here are the areas where webrocks can help.',
    items: [
      {
        icon: 'globe',
        title: 'Web development',
        desc: 'Landing pages, corporate websites and custom web applications. Clean code and excellent performance.',
      },
      {
        icon: 'bolt',
        title: 'Performance audit',
        desc: 'Is your website slow? webrocks finds exactly why and proposes concrete solutions. Core Web Vitals, Lighthouse, DevTools.',
      },
      {
        icon: 'chart',
        title: 'Web analytics',
        desc: 'Proper GA4 setup, conversion tracking and e-commerce data. Do you know what your customers are actually doing on your website?',
      },
      {
        icon: 'puzzle',
        title: 'Chrome extensions',
        desc: 'Automate repetitive browser work. Extensions tailored to your workflow, published on the Chrome Web Store.',
      },
      {
        icon: 'code',
        title: 'Web applications',
        desc: 'Internal tools, dashboards and reporting systems. Applications that save time and work exactly the way you need them to.',
      },
    ],
  },

  projects: {
    title: 'Projects',
    sub: 'A showcase of what webrocks does.',
    live: 'View website',
    featuredBadge: '★ Project',
    tagsLabel: 'Technologies',
    items: [
      {
        name: 'Pagami.cz',
        desc: 'Free invoice generator for Czech sole traders and non-VAT payers. No registration, no cloud — all data stays in the browser. ARES registry integration, QR payments, PDF export.',
        tags: ['JavaScript', 'IndexedDB', 'ARES API', 'QR codes'],
        href: 'https://www.pagami.cz',
        featured: true,
      },
      {
        name: 'Commercial projects',
        desc: 'Web app for Google Ads campaign automation, reporting system for GA4 and ad platform data, JS libraries for e-commerce data collection. Internal projects — available on request.',
        tags: ['Google Ads API', 'GA4', 'React', 'Node.js'],
        href: null,
        featured: false,
      },
    ],
  },

  pricing: {
    title: 'Pricing',
    sub: 'Every project is individual. Here is a rough overview.',
    note: "Price depends on the scope and complexity of the project. Get in touch and webrocks will put together a specific offer.",
    rate: 'from 400 CZK / hr',
    rateLabel: 'Hourly rate',
    cta: 'Get a free quote',
    featuredBadge: 'Most popular',
    items: [
      {
        title: 'Landing page',
        price: 'from 8 000 CZK',
        features: ['Responsive design', 'Contact form', 'Analytics', 'Fast loading'],
      },
      {
        title: 'Corporate website',
        price: 'from 15 000 CZK',
        features: ['Multiple pages', 'Blog section', 'GA4 setup', 'Performance audit'],
        featured: true,
      },
      {
        title: 'Web application',
        price: 'Scope-based',
        features: ['Requirements analysis', 'Architecture design', 'Custom development', 'Testing'],
      },
    ],
  },

  contact: {
    title: 'Contact',
    sub: 'Have a project or a question? Write to us — webrocks replies within 24 hours.',
    email: 'webrocks.cz@gmail.com',
    ico: 'ID: 22166297',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Your email',
    messageLabel: 'Message',
    messagePlaceholder: 'Describe your project or question...',
    icoLabel: 'Business ID',
    responseLabel: 'Response time',
    responseValue: 'Within 24 hours',
    send: 'Send message',
    sending: 'Sending...',
    success: 'Message sent! webrocks will get back to you soon.',
    error: 'Something went wrong. Please email us directly.',
  },

  footer: {
    copy: '© 2025 webrocks',
    ico: 'ID: 22166297',
    made: 'Built with Astro and a love for performance',
  },

  colorPicker: {
    triggerLabel: 'Color',
    toolbarLabel: 'Theme color picker',
    applyPrefix: 'Apply: ',
    shadesPrefix: 'Shades: ',
    shadesSuffix: ' shades',
    shadeLabel: 'Shade',
  },

  a11y: {
    logoHome: 'webrocks – homepage',
    logoTop: 'webrocks – back to top',
    mainNav: 'Main navigation',
    langSwitch: 'Switch language to Czech',
    themeToggle: 'Toggle theme',
    mobileMenu: 'Menu',
    contactForm: 'Contact form',
    opensNewTab: 'opens in new tab',
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email.',
    messageRequired: 'Please write a message.',
    skipToContent: 'Skip to content',
    cursorRipple: 'Cursor wave effect',
  },
};
