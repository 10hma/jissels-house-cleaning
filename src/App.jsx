import React, { useEffect, useState } from "react";
import "./App.css";

// Add your phone number here, including country code, e.g. "+15551234567".
const PHONE_NUMBER = "";

// To use your own photos, put them in your project's public/images folder
// and replace these addresses with /images/your-file-name.jpg.
const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
  before: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=85",
  after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",
};

const COPY = {
  en: {
    title: "Jissel's House Cleaning | A cleaner home",
    tagline: "Fresh homes. Reliable service.",
    nav: ["Services", "Before & After", "Contact"],
    navLabel: "Main navigation", languageLabel: "Website language",
    skip: "Skip to content", book: "Text to book", explore: "Explore our services",
    heroLabel: "PROFESSIONAL HOME CLEANING",
    heroTitle: ["Come home", "to", "a fresh start."],
    heroBody: "A cleaner home. A more comfortable life. Dependable cleaning, thoughtful details, and a space you can simply enjoy.",
    heroAlt: "Professional home cleaning", photoLabel: "A LITTLE CARE. A BIG DIFFERENCE.",
    photoTitle: "More room to unwind.", photoBody: "We take care of the cleaning. You take back your time.",
    details: ["Regular & deep cleaning", "Care in every detail", "Friendly, reliable service"],
    serviceLabel: "01 / OUR SERVICES", serviceTitle: ["Your home.", "Your kind of clean."],
    serviceBody: "Choose the care your home needs, from a regular refresh to a more detailed clean.",
    services: [
      { label: "THE EVERYDAY REFRESH", title: "Regular cleaning", body: "Keep your home fresh and comfortable with consistent care for the spaces you use every day.", items: ["Dusting and wiping surfaces", "Vacuuming and floor cleaning", "Kitchen and bathroom cleaning", "General home refresh"] },
      { label: "THE EXTRA ATTENTION", title: "Deep cleaning", body: "A more thorough clean for the buildup, corners, and details that need a little extra attention.", items: ["Detailed kitchen cleaning", "Bathroom deep cleaning", "Hard-to-reach areas", "Extra attention to details"] },
    ],
    pricingLabel: "02 / SIMPLE PRICING", pricingTitle: "A clean that fits your home.",
    pricingBody: "Every home is different. Pricing is personalized to your space and cleaning needs.",
    pricingDetail: "Send us your home details and the service you're interested in for more information.",
    pricingNote: "Prices vary by home.",
    policyLabel: "APPOINTMENT POLICY", policyTitle: "Cancellation policy",
    policyBody: "If you need to cancel your appointment, a $50 cancellation fee applies.", feeLabel: "Cancellation fee",
    trustLabel: "03 / WHY CHOOSE US", trustTitle: "Care you can feel.",
    values: [
      ["Home focused", "We focus on making your living spaces cleaner and more comfortable."],
      ["Attention to detail", "Every room receives careful attention, right down to the little things."],
      ["Reliable service", "Friendly, dependable cleaning with your satisfaction as a priority."],
    ],
    galleryLabel: "04 / BEFORE & AFTER", galleryTitle: ["Small details.", "A visible difference."],
    galleryBody: "See what a fresh start can look like. Tap the photo to switch between the two views.",
    galleryNote: "Illustrative photos. Replace with your own cleaning results.",
    before: "Before", after: "After", beforeTitle: "Ready for a refresh.", afterTitle: "Fresh. Comfortable. Yours.",
    beforeBody: "Dust, clutter, and buildup can collect over time. A careful clean helps your space feel like home again.",
    afterBody: "A freshly cleaned space feels brighter, more comfortable, and ready to enjoy.",
    showBefore: "View Before", showAfter: "View After", toggleHint: "Click or tap to switch",
    galleryAriaBefore: "Showing Before. Show After cleaning.", galleryAriaAfter: "Showing After. Show Before cleaning.",
    beforeAlt: "Illustrative before-cleaning photo", afterAlt: "Illustrative after-cleaning photo",
    processLabel: "05 / HOW IT WORKS", processTitle: "Less hassle. More home.",
    steps: [
      ["Send a message", "Text us with your home details and the cleaning service you need."],
      ["Choose your cleaning", "Select regular or deep cleaning based on your home's needs."],
      ["Enjoy your space", "Relax and enjoy a cleaner, fresher home."],
    ],
    contactLabel: "LET'S MAKE SPACE FOR A FRESH START", contactTitle: ["Your next clean", "starts with a text."],
    contactBody: "Contact Jissel's House Cleaning with your home details and the type of cleaning you need to start booking.",
    send: "Send a text message", contactPolicy: "$50 cancellation fee applies to canceled appointments.",
    footerBody: "Reliable cleaning. Thoughtful care. A home that feels good to come back to.",
    footerServices: "Services", footerContact: "Get in touch", footerPolicy: "Cancellation policy", rights: "All rights reserved.",
  },
  es: {
    title: "Jissel's House Cleaning | Un hogar más limpio",
    tagline: "Hogares frescos. Servicio confiable.",
    nav: ["Servicios", "Antes y después", "Contacto"],
    navLabel: "Navegación principal", languageLabel: "Idioma del sitio web",
    skip: "Ir al contenido", book: "Reservar por mensaje", explore: "Conoce nuestros servicios",
    heroLabel: "LIMPIEZA PROFESIONAL DEL HOGAR",
    heroTitle: ["Vuelve a casa", "y disfruta de", "un nuevo comienzo."],
    heroBody: "Un hogar más limpio. Una vida más cómoda. Limpieza confiable, atención a los detalles y un espacio para disfrutar.",
    heroAlt: "Limpieza profesional del hogar", photoLabel: "UN POCO DE CUIDADO. UNA GRAN DIFERENCIA.",
    photoTitle: "Más espacio para descansar.", photoBody: "Nos encargamos de la limpieza. Tú recuperas tu tiempo.",
    details: ["Limpieza regular y profunda", "Cuidado en cada detalle", "Servicio amable y confiable"],
    serviceLabel: "01 / NUESTROS SERVICIOS", serviceTitle: ["Tu hogar.", "La limpieza que necesitas."],
    serviceBody: "Elige el cuidado que necesita tu hogar, desde una limpieza regular hasta una limpieza más detallada.",
    services: [
      { label: "EL CUIDADO DE CADA DÍA", title: "Limpieza regular", body: "Mantén tu hogar limpio y cómodo con atención constante a los espacios que usas todos los días.", items: ["Quitar el polvo y limpiar superficies", "Aspirar y limpiar los pisos", "Limpieza de cocina y baños", "Limpieza general del hogar"] },
      { label: "LA ATENCIÓN ADICIONAL", title: "Limpieza profunda", body: "Una limpieza más completa para la suciedad acumulada, los rincones y los detalles que necesitan atención adicional.", items: ["Limpieza detallada de la cocina", "Limpieza profunda de los baños", "Áreas de difícil acceso", "Atención adicional a los detalles"] },
    ],
    pricingLabel: "02 / PRECIOS SENCILLOS", pricingTitle: "Una limpieza a la medida de tu hogar.",
    pricingBody: "Cada hogar es diferente. El precio se adapta a tu espacio y a tus necesidades de limpieza.",
    pricingDetail: "Envíanos los detalles de tu hogar y el servicio que te interesa para obtener más información.",
    pricingNote: "Los precios varían según el hogar.",
    policyLabel: "POLÍTICA DE CITAS", policyTitle: "Política de cancelación",
    policyBody: "Si necesitas cancelar tu cita, se aplica un cargo de cancelación de $50.", feeLabel: "Cargo de cancelación",
    trustLabel: "03 / POR QUÉ ELEGIRNOS", trustTitle: "Un cuidado que se nota.",
    values: [
      ["Enfocados en tu hogar", "Nos dedicamos a hacer que tus espacios sean más limpios y cómodos."],
      ["Atención a los detalles", "Cada habitación recibe atención cuidadosa, hasta en los pequeños detalles."],
      ["Servicio confiable", "Limpieza amable y confiable, con tu satisfacción como prioridad."],
    ],
    galleryLabel: "04 / ANTES Y DESPUÉS", galleryTitle: ["Pequeños detalles.", "Una diferencia visible."],
    galleryBody: "Descubre cómo puede verse un nuevo comienzo. Toca la foto para alternar entre las dos vistas.",
    galleryNote: "Fotos ilustrativas. Reemplázalas con los resultados de tus propias limpiezas.",
    before: "Antes", after: "Después", beforeTitle: "Listo para una renovación.", afterTitle: "Limpio. Cómodo. Tuyo.",
    beforeBody: "El polvo, el desorden y la suciedad pueden acumularse con el tiempo. Una limpieza cuidadosa ayuda a recuperar la comodidad de tu hogar.",
    afterBody: "Un espacio recién limpiado se siente más luminoso, más cómodo y listo para disfrutar.",
    showBefore: "Ver antes", showAfter: "Ver después", toggleHint: "Haz clic o toca para alternar",
    galleryAriaBefore: "Se muestra Antes. Mostrar Después de la limpieza.", galleryAriaAfter: "Se muestra Después. Mostrar Antes de la limpieza.",
    beforeAlt: "Foto ilustrativa de antes de la limpieza", afterAlt: "Foto ilustrativa de después de la limpieza",
    processLabel: "05 / CÓMO FUNCIONA", processTitle: "Menos complicaciones. Más comodidad.",
    steps: [
      ["Envía un mensaje", "Escríbenos con los detalles de tu hogar y el servicio de limpieza que necesitas."],
      ["Elige tu limpieza", "Selecciona una limpieza regular o profunda según las necesidades de tu hogar."],
      ["Disfruta tu espacio", "Relájate y disfruta de un hogar más limpio y fresco."],
    ],
    contactLabel: "DALE ESPACIO A UN NUEVO COMIENZO", contactTitle: ["Tu próxima limpieza", "comienza con un mensaje."],
    contactBody: "Contacta a Jissel's House Cleaning con los detalles de tu hogar y el tipo de limpieza que necesitas para empezar a reservar.",
    send: "Enviar un mensaje de texto", contactPolicy: "Se aplica un cargo de $50 por citas canceladas.",
    footerBody: "Limpieza confiable. Cuidado atento. Un hogar al que da gusto volver.",
    footerServices: "Servicios", footerContact: "Contáctanos", footerPolicy: "Política de cancelación", rights: "Todos los derechos reservados.",
  },
};

function currentLanguage() {
  if (typeof window === "undefined") return "en";
  return new URLSearchParams(window.location.search).get("lang") === "es" ? "es" : "en";
}

function languageUrl(language) {
  if (typeof window === "undefined") return `?lang=${language}`;
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  return `${url.pathname}${url.search}${url.hash}`;
}

export default function App() {
  const [language, setLanguage] = useState(currentLanguage);
  const [showAfter, setShowAfter] = useState(false);
  const t = COPY[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.title;
  }, [language, t.title]);

  useEffect(() => {
    const onPopState = () => setLanguage(currentLanguage());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function changeLanguage(event, nextLanguage) {
    // Preserve normal link behavior for opening the translated page in a new tab.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (nextLanguage !== language) {
      window.history.pushState({}, "", languageUrl(nextLanguage));
      setLanguage(nextLanguage);
    }
  }

  const languageLinks = (
    <div className="jhc-language" role="group" aria-label={t.languageLabel}>
      {[ ["en", "English"], ["es", "Español"] ].map(([code, label]) => (
        <a key={code} href={languageUrl(code)} lang={code} hrefLang={code}
          aria-current={language === code ? "page" : undefined}
          onClick={(event) => changeLanguage(event, code)}>{label}</a>
      ))}
    </div>
  );

  return (
    <div className="jhc-site" lang={language}>
      <a className="jhc-skip" href="#main">{t.skip}</a>
      <header className="jhc-header">
        <div className="jhc-container jhc-header-inner">
          <a href="#home" className="jhc-brand">
            <span className="jhc-brand-mark" aria-hidden="true">J<span>✦</span></span>
            <span><strong>Jissel's House Cleaning</strong><small>{t.tagline}</small></span>
          </a>
          <nav className="jhc-nav" aria-label={t.navLabel}>
            {["services", "gallery", "contact"].map((id, index) => <a key={id} href={`#${id}`}>{t.nav[index]}</a>)}
          </nav>
          <div className="jhc-header-actions">{languageLinks}<a href="#contact" className="jhc-button jhc-header-book">{t.book}</a></div>
        </div>
      </header>

      <main id="main">
        <section id="home" className="jhc-hero jhc-container">
          <div className="jhc-hero-copy">
            <p className="jhc-eyebrow"><span aria-hidden="true">✦</span> {t.heroLabel}</p>
            <h1>{t.heroTitle[0]}<br />{t.heroTitle[1]} <em>{t.heroTitle[2]}</em></h1>
            <p className="jhc-intro">{t.heroBody}</p>
            <div className="jhc-actions"><a className="jhc-button" href="#contact">{t.book}</a><a className="jhc-text-link" href="#services">{t.explore}</a></div>
            <div className="jhc-hero-details">{t.details.map((detail) => <span key={detail}><span aria-hidden="true">✓</span> {detail}</span>)}</div>
          </div>
          <div className="jhc-hero-art">
            <div className="jhc-photo-frame"><img src={PHOTOS.hero} alt={t.heroAlt} fetchPriority="high" /></div>
            <div className="jhc-photo-caption"><span className="jhc-eyebrow">{t.photoLabel}</span><h2>{t.photoTitle}</h2><p>{t.photoBody}</p></div>
          </div>
        </section>

        <section id="services" className="jhc-section jhc-container">
          <div className="jhc-section-heading"><div><p className="jhc-eyebrow">{t.serviceLabel}</p><h2>{t.serviceTitle[0]}<br /><span>{t.serviceTitle[1]}</span></h2></div><p>{t.serviceBody}</p></div>
          <div className="jhc-service-grid">
            {t.services.map((service, index) => <article key={index} className={`jhc-service ${index === 1 ? "jhc-service-accent" : ""}`}>
              <div className="jhc-service-top"><span className="jhc-eyebrow">{service.label}</span><span className="jhc-service-number" aria-hidden="true">0{index + 1}</span></div>
              <h3>{service.title}</h3><p>{service.body}</p>
              <ul>{service.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
              <a className="jhc-service-link" href="#contact">{t.book}</a>
            </article>)}
          </div>
        </section>

        <section id="pricing" className="jhc-section jhc-container jhc-pricing">
          <div><p className="jhc-eyebrow">{t.pricingLabel}</p><h2>{t.pricingTitle}</h2><p>{t.pricingBody}</p></div>
          <div className="jhc-price-detail"><span aria-hidden="true">✦</span><h3>{t.pricingNote}</h3><p>{t.pricingDetail}</p><a href="#contact" className="jhc-button">{t.book}</a></div>
        </section>

        <section id="cancellation-policy" className="jhc-container jhc-policy" aria-labelledby="policy-title">
          <div><p className="jhc-eyebrow">{t.policyLabel}</p><h2 id="policy-title">{t.policyTitle}</h2><p>{t.policyBody}</p></div>
          <div className="jhc-policy-fee"><strong>$50</strong><span>{t.feeLabel}</span></div>
        </section>

        <section className="jhc-section jhc-container">
          <p className="jhc-eyebrow">{t.trustLabel}</p><h2>{t.trustTitle}</h2>
          <div className="jhc-values">{t.values.map(([title, body], index) => <article key={index}><span className="jhc-value-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section id="gallery" className="jhc-gallery-section">
          <div className="jhc-container jhc-gallery-layout">
            <div className="jhc-gallery-copy"><p className="jhc-eyebrow">{t.galleryLabel}</p><h2>{t.galleryTitle[0]}<br /><em>{t.galleryTitle[1]}</em></h2><p id="gallery-instructions">{t.galleryBody}</p><small>{t.galleryNote}</small></div>
            <div className="jhc-comparison">
              <button className="jhc-gallery-button" type="button" aria-pressed={showAfter} aria-label={showAfter ? t.galleryAriaAfter : t.galleryAriaBefore} aria-describedby="gallery-instructions" onClick={() => setShowAfter((current) => !current)}>
                <span className="jhc-gallery-image"><img src={showAfter ? PHOTOS.after : PHOTOS.before} alt={showAfter ? t.afterAlt : t.beforeAlt} loading="lazy" /><span className={`jhc-view-label ${showAfter ? "jhc-label-after" : ""}`}>{showAfter ? t.after : t.before}</span><span className="jhc-gallery-prompt">{showAfter ? t.showBefore : t.showAfter} <span aria-hidden="true">↻</span></span></span>
              </button>
              <div className="jhc-gallery-caption" aria-live="polite" aria-atomic="true"><h3>{showAfter ? t.afterTitle : t.beforeTitle}</h3><p>{showAfter ? t.afterBody : t.beforeBody}</p></div>
              <p className="jhc-gallery-hint">{t.toggleHint}</p>
            </div>
          </div>
        </section>

        <section className="jhc-section jhc-container">
          <p className="jhc-eyebrow">{t.processLabel}</p><h2>{t.processTitle}</h2>
          <ol className="jhc-steps">{t.steps.map(([title, body], index) => <li key={index}><span className="jhc-step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
        </section>

        <section id="contact" className="jhc-container jhc-contact">
          <p className="jhc-eyebrow">{t.contactLabel}</p><h2>{t.contactTitle[0]}<br /><em>{t.contactTitle[1]}</em></h2><p>{t.contactBody}</p><a className="jhc-button jhc-button-dark" href={`sms:${PHONE_NUMBER}`}>{t.send}</a><small>{t.contactPolicy}</small>
        </section>
      </main>

      <footer className="jhc-footer jhc-container">
        <div className="jhc-footer-grid"><div><a className="jhc-footer-brand" href="#home">Jissel's House Cleaning<span aria-hidden="true">✦</span></a><p>{t.footerBody}</p></div><div><h3>{t.footerServices}</h3>{t.services.map((service, i) => <a key={i} href="#services">{service.title}</a>)}</div><div><h3>{t.footerContact}</h3><a href="#contact">{t.book}</a><a href="#cancellation-policy">{t.footerPolicy}</a>{languageLinks}</div></div>
        <div className="jhc-footer-bottom"><p>© {new Date().getFullYear()} Jissel's House Cleaning. {t.rights}</p><span>{t.tagline}</span></div>
      </footer>
    </div>
  );
}
