import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', de: 'Startseite', fr: 'Accueil' },
  'nav.about': { en: 'About', de: 'Über uns', fr: 'À propos' },
  'nav.services': { en: 'Services', de: 'Leistungen', fr: 'Services' },
  'nav.insights': { en: 'Insights', de: 'Einblicke', fr: 'Perspectives' },
  'nav.contact': { en: 'Contact', de: 'Kontakt', fr: 'Contact' },
  
  // Hero
  'hero.title': { en: 'Strategic Excellence for', de: 'Strategische Exzellenz für', fr: 'Excellence Stratégique pour' },
  'hero.titleHighlight': { en: 'Tomorrow\'s Leaders', de: 'Die Führungskräfte von Morgen', fr: 'Les Leaders de Demain' },
  'hero.subtitle': { en: 'We partner with visionary executives to transform challenges into opportunities, delivering measurable results that drive sustainable growth.', de: 'Wir arbeiten mit visionären Führungskräften zusammen, um Herausforderungen in Chancen zu verwandeln und messbare Ergebnisse zu liefern.', fr: 'Nous accompagnons les dirigeants visionnaires pour transformer les défis en opportunités et générer une croissance durable.' },
  'hero.cta': { en: 'Schedule a Consultation', de: 'Beratung vereinbaren', fr: 'Planifier une consultation' },
  'hero.learnMore': { en: 'Learn More', de: 'Mehr erfahren', fr: 'En savoir plus' },
  
  // Services
  'services.title': { en: 'Our Expertise', de: 'Unsere Expertise', fr: 'Notre Expertise' },
  'services.subtitle': { en: 'Comprehensive consulting solutions tailored to your unique challenges', de: 'Umfassende Beratungslösungen, maßgeschneidert für Ihre Herausforderungen', fr: 'Des solutions de conseil complètes adaptées à vos défis uniques' },
  'services.strategy': { en: 'Strategy Consulting', de: 'Strategieberatung', fr: 'Conseil en Stratégie' },
  'services.strategyDesc': { en: 'Define your path forward with data-driven strategies that align with your vision and market dynamics.', de: 'Definieren Sie Ihren Weg mit datengetriebenen Strategien, die auf Ihre Vision abgestimmt sind.', fr: 'Définissez votre trajectoire avec des stratégies basées sur les données.' },
  'services.operations': { en: 'Operations Excellence', de: 'Operative Exzellenz', fr: 'Excellence Opérationnelle' },
  'services.operationsDesc': { en: 'Optimize processes, reduce costs, and enhance efficiency across your entire organization.', de: 'Optimieren Sie Prozesse, senken Sie Kosten und steigern Sie die Effizienz in Ihrer Organisation.', fr: 'Optimisez les processus et améliorez l\'efficacité de votre organisation.' },
  'services.digital': { en: 'Digital Transformation', de: 'Digitale Transformation', fr: 'Transformation Digitale' },
  'services.digitalDesc': { en: 'Navigate the digital landscape with confidence through innovative technology solutions.', de: 'Navigieren Sie sicher durch die digitale Landschaft mit innovativen Technologielösungen.', fr: 'Naviguez dans le paysage numérique avec des solutions technologiques innovantes.' },
  'services.leadership': { en: 'Leadership Development', de: 'Führungskräfteentwicklung', fr: 'Développement du Leadership' },
  'services.leadershipDesc': { en: 'Build high-performing teams and cultivate the next generation of business leaders.', de: 'Bauen Sie leistungsstarke Teams auf und fördern Sie die nächste Generation von Führungskräften.', fr: 'Construisez des équipes performantes et cultivez la prochaine génération de leaders.' },
  
  // Trust
  'trust.title': { en: 'Trusted by Industry Leaders', de: 'Das Vertrauen der Branchenführer', fr: 'La Confiance des Leaders de l\'Industrie' },
  'trust.clients': { en: '500+ Clients Served', de: '500+ Betreute Kunden', fr: '500+ Clients Servis' },
  'trust.years': { en: '25+ Years Experience', de: '25+ Jahre Erfahrung', fr: '25+ Ans d\'Expérience' },
  'trust.countries': { en: '40+ Countries', de: '40+ Länder', fr: '40+ Pays' },
  'trust.satisfaction': { en: '98% Client Satisfaction', de: '98% Kundenzufriedenheit', fr: '98% Satisfaction Client' },
  
  // Testimonials
  'testimonials.title': { en: 'Client Success Stories', de: 'Kundenerfolge', fr: 'Témoignages Clients' },
  
  // CTA
  'cta.title': { en: 'Ready to Transform Your Business?', de: 'Bereit, Ihr Unternehmen zu transformieren?', fr: 'Prêt à Transformer Votre Entreprise?' },
  'cta.subtitle': { en: 'Let\'s discuss how we can help you achieve your strategic objectives.', de: 'Lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihre strategischen Ziele zu erreichen.', fr: 'Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs stratégiques.' },
  'cta.button': { en: 'Get Started Today', de: 'Starten Sie heute', fr: 'Commencez Aujourd\'hui' },
  
  // Footer
  'footer.description': { en: 'Elevating businesses through strategic insight and operational excellence since 1998.', de: 'Wir heben Unternehmen durch strategische Einblicke und operative Exzellenz seit 1998.', fr: 'Nous élevons les entreprises grâce à la vision stratégique et l\'excellence opérationnelle depuis 1998.' },
  'footer.quickLinks': { en: 'Quick Links', de: 'Schnellzugriff', fr: 'Liens Rapides' },
  'footer.legal': { en: 'Legal', de: 'Rechtliches', fr: 'Légal' },
  'footer.privacy': { en: 'Privacy Policy', de: 'Datenschutz', fr: 'Politique de Confidentialité' },
  'footer.terms': { en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'Utilisation' },
  'footer.cookies': { en: 'Cookie Policy', de: 'Cookie-Richtlinie', fr: 'Politique des Cookies' },
  'footer.contact': { en: 'Contact Us', de: 'Kontaktieren Sie uns', fr: 'Contactez-nous' },
  'footer.rights': { en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.', fr: 'Tous droits réservés.' },
  
  // About
  'about.title': { en: 'About Us', de: 'Über uns', fr: 'À propos de nous' },
  'about.mission': { en: 'Our Mission', de: 'Unsere Mission', fr: 'Notre Mission' },
  'about.missionText': { en: 'To empower organizations to achieve sustainable competitive advantage through innovative strategies and world-class execution.', de: 'Organisationen zu befähigen, durch innovative Strategien und erstklassige Umsetzung nachhaltige Wettbewerbsvorteile zu erzielen.', fr: 'Permettre aux organisations d\'atteindre un avantage concurrentiel durable grâce à des stratégies innovantes.' },
  'about.values': { en: 'Our Values', de: 'Unsere Werte', fr: 'Nos Valeurs' },
  'about.team': { en: 'Leadership Team', de: 'Führungsteam', fr: 'Équipe de Direction' },
  
  // Contact
  'contact.title': { en: 'Get in Touch', de: 'Kontaktieren Sie uns', fr: 'Contactez-nous' },
  'contact.subtitle': { en: 'Ready to start your transformation journey? We\'d love to hear from you.', de: 'Bereit, Ihre Transformationsreise zu beginnen? Wir freuen uns auf Ihre Nachricht.', fr: 'Prêt à commencer votre voyage de transformation? Nous aimerions avoir de vos nouvelles.' },
  'contact.name': { en: 'Full Name', de: 'Vollständiger Name', fr: 'Nom Complet' },
  'contact.email': { en: 'Email Address', de: 'E-Mail-Adresse', fr: 'Adresse E-mail' },
  'contact.company': { en: 'Company', de: 'Unternehmen', fr: 'Entreprise' },
  'contact.message': { en: 'Message', de: 'Nachricht', fr: 'Message' },
  'contact.consent': { en: 'I agree to the processing of my personal data in accordance with the Privacy Policy', de: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzrichtlinie zu', fr: 'J\'accepte le traitement de mes données personnelles conformément à la Politique de Confidentialité' },
  'contact.submit': { en: 'Send Message', de: 'Nachricht senden', fr: 'Envoyer le Message' },
  'contact.offices': { en: 'Our Offices', de: 'Unsere Büros', fr: 'Nos Bureaux' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
