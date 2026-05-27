export const cs = {
  lang: 'cs',
  locale: 'cs-CZ',
  dir: 'ltr',

  meta: {
    title: 'webrocks – Webový vývojář | webrocks.cz',
    description:
      'webrocks staví rychlé weby, webové aplikace a Chrome rozšíření se zaměřením na výkon a webovou analytiku. Pro jednotlivce a malé firmy.',
    keywords:
      'webový vývojář, tvorba webu, performance audit, webová analytika, GA4, Chrome extension, React, JavaScript, Česká republika',
    ogImage: '/og-cs.svg',
    ogImageAlt: 'webrocks – Webový vývojář | webrocks.cz',
  },

  nav: {
    services: 'Služby',
    projects: 'Projekty',
    pricing: 'Ceník',
    contact: 'Kontakt',
    langSwitch: 'EN',
    langSwitchHref: '/en/',
  },

  labels: {
    services: 'Služby',
    portfolio: 'Portfolio',
    pricing: 'Ceník',
    contact: 'Kontakt',
  },

  hero: {
    greeting: 'Tohle je',
    name: 'webrocks',
    headline: ['Rychlé weby.', 'Přesná data.', 'Výsledky.'],
    sub: 'webrocks staví weby a webové aplikace s důrazem na výkon a správné měření dat. Pro jednotlivce a malé firmy.',
    cta1: 'Co nabízíme',
    cta2: 'Kontakt',
  },

  services: {
    title: 'Co děláme',
    sub: 'Každý projekt je jiný. Tady jsou oblasti, ve kterých webrocks pomůže.',
    items: [
      {
        icon: 'globe',
        title: 'Tvorba webů',
        desc: 'Landing pages, prezentační weby a webové aplikace na míru. Čistý kód a vynikající výkon.',
      },
      {
        icon: 'bolt',
        title: 'Performance audit',
        desc: 'Váš web je pomalý? webrocks najde přesně proč a navrhne konkrétní řešení. Core Web Vitals, Lighthouse, DevTools.',
      },
      {
        icon: 'chart',
        title: 'Webová analytika',
        desc: 'Správné nastavení GA4, sledování konverzí a e-commerce dat. Víte, co vaši zákazníci skutečně dělají na vašem webu?',
      },
      {
        icon: 'puzzle',
        title: 'Chrome rozšíření',
        desc: 'Automatizujte opakující se práci v prohlížeči. Rozšíření přesně na míru vašemu workflow, publikované na Chrome Web Store.',
      },
      {
        icon: 'code',
        title: 'Webové aplikace',
        desc: 'Interní nástroje, dashboardy a reportovací systémy. Aplikace, které šetří čas a fungují přesně tak, jak potřebujete.',
      },
    ],
  },

  projects: {
    title: 'Projekty',
    sub: 'Ukázka toho, co webrocks dělá.',
    live: 'Zobrazit web',
    featuredBadge: '★ Projekt',
    tagsLabel: 'Technologie',
    items: [
      {
        name: 'Pagami.cz',
        desc: 'Bezplatný fakturační nástroj pro české OSVČ a neplátce DPH. Bez registrace, bez cloudu — všechna data zůstávají v prohlížeči. Napojení na ARES, QR platby, PDF export.',
        tags: ['JavaScript', 'IndexedDB', 'ARES API', 'QR kódy'],
        href: 'https://www.pagami.cz',
        featured: true,
      },
      {
        name: 'Komerční projekty',
        desc: 'Webová aplikace pro automatizaci Google Ads kampaní, reportovací systém pro data z GA4 a reklamních platforem, JS knihovny pro sběr e-commerce dat. Interní projekty — dostupné na vyžádání.',
        tags: ['Google Ads API', 'GA4', 'React', 'Node.js'],
        href: null,
        featured: false,
      },
    ],
  },

  pricing: {
    title: 'Ceník',
    sub: 'Každý projekt je individuální. Zde je orientační přehled.',
    note: 'Cena závisí na rozsahu a složitosti projektu. Napište nám a domluvíme se na konkrétní nabídce.',
    rate: 'od 400 Kč / hod',
    rateLabel: 'Hodinová sazba',
    cta: 'Nezávazná poptávka',
    featuredBadge: 'Nejoblíbenější',
    items: [
      {
        title: 'Landing page',
        price: 'od 8 000 Kč',
        features: ['Responzivní design', 'Kontaktní formulář', 'Analytika', 'Rychlé načítání'],
      },
      {
        title: 'Prezentační web',
        price: 'od 15 000 Kč',
        features: ['Více stránek', 'Blog sekce', 'GA4 nastavení', 'Performance audit'],
        featured: true,
      },
      {
        title: 'Webová aplikace',
        price: 'Dle rozsahu',
        features: ['Analýza požadavků', 'Návrh architektury', 'Vývoj na míru', 'Testování'],
      },
    ],
  },

  contact: {
    title: 'Kontakt',
    sub: 'Máte projekt nebo otázku? Napište nám — webrocks odpovídá do 24 hodin.',
    email: 'webrocks.cz@gmail.com',
    ico: 'IČO: 22166297',
    nameLabel: 'Jméno',
    namePlaceholder: 'Vaše jméno',
    emailLabel: 'E-mail',
    emailPlaceholder: 'Váš e-mail',
    messageLabel: 'Zpráva',
    messagePlaceholder: 'Popište projekt nebo otázku...',
    icoLabel: 'Identifikace',
    responseLabel: 'Odezva',
    responseValue: 'Do 24 hodin',
    send: 'Odeslat zprávu',
    sending: 'Odesílám...',
    success: 'Zpráva odeslána! webrocks se ozve brzy.',
    error: 'Něco se nepovedlo. Napište přímo na e-mail.',
  },

  footer: {
    copy: '© 2025 webrocks',
    ico: 'IČO: 22166297',
    made: 'Postaveno v Astru s láskou k výkonu',
  },

  colorPicker: {
    triggerLabel: 'Barva',
    toolbarLabel: 'Výběr barvy motivu',
    applyPrefix: 'Aplikovat: ',
    shadesPrefix: 'Odstíny: ',
    shadesSuffix: ' odstínů',
    shadeLabel: 'Odstín',
  },

  a11y: {
    logoHome: 'webrocks – domovská stránka',
    logoTop: 'webrocks – zpět na začátek stránky',
    mainNav: 'Hlavní navigace',
    langSwitch: 'Přepnout jazyk na angličtinu',
    themeToggle: 'Přepnout téma',
    mobileMenu: 'Nabídka',
    contactForm: 'Kontaktní formulář',
    opensNewTab: 'otevře novou kartu',
    nameRequired: 'Zadejte prosím jméno.',
    emailRequired: 'Zadejte prosím e-mail.',
    emailInvalid: 'Zadejte platný e-mail.',
    messageRequired: 'Napište prosím zprávu.',
    skipToContent: 'Přeskočit na obsah',
    cursorRipple: 'Efekt vlnění kurzoru',
  },
};

export type Translations = typeof cs;
