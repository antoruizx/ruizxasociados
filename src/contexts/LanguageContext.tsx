import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: "Ruiz & Associates",
    heroSubtitle: "Accounting Firm",
    heroDescription: "Accounting solutions and tax advice for SMEs and professionals",
    heroButton: "Contact Us",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive accounting solutions tailored to your needs",
    service1Title: "Financial Statements",
    service1Description: "Accurate and timely financial reporting to keep your business informed and compliant.",
    service2Title: "Tax Consulting",
    service2Description: "Expert tax planning and advisory services to optimize your tax position.",
    service3Title: "Simplified Tax Regime Management",
    service3Description: "Specialized support for businesses under simplified tax regimes.",
    service4Title: "Payroll Processing",
    service4Description: "Efficient and compliant payroll management for businesses of all sizes.",
    
    // About
    aboutTitle: "About Us",
    aboutDescription: "We are a team of accountants passionate about helping businesses and professionals grow. We combine technical expertise with personalized attention.",
    valuesTitle: "Our Values",
    value1: "Transparency",
    value1Description: "Clear and honest communication in all our dealings",
    value2: "Commitment",
    value2Description: "Dedicated to your success and financial health",
    value3: "Professionalism",
    value3Description: "Highest standards of expertise and service",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonial1Text: "Ruiz & Associates transformed our accounting processes. Their expertise and dedication are unmatched.",
    testimonial1Author: "María González",
    testimonial1Position: "CEO, TechStart Solutions",
    testimonial2Text: "Professional, reliable, and always available. They've been instrumental in our business growth.",
    testimonial2Author: "Carlos Mendoza",
    testimonial2Position: "Owner, Mendoza Imports",
    testimonial3Text: "Their tax consulting saved us thousands. Highly recommend their services to any business.",
    testimonial3Author: "Ana Rodríguez",
    testimonial3Position: "CFO, Green Energy Co.",
    
    // Contact
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to optimize your finances? Contact us today.",
    contactName: "Name",
    contactEmail: "Email",
    contactSubject: "Subject",
    contactMessage: "Message",
    contactButton: "Send Message",
    contactInfo: "Contact Information",
    contactAddress: "123 Financial District, Business Plaza, Floor 5",
    contactPhone: "+1 (555) 123-4567",
    contactEmailLabel: "Email:",
    
    // Footer
    footerTagline: "Professional accounting solutions for your business success",
    footerRights: "All rights reserved.",
  },
  es: {
    // Hero
    heroTitle: "Ruiz & Asociados",
    heroSubtitle: "Firma de Contadores",
    heroDescription: "Soluciones contables y asesoría fiscal para PyMEs y profesionales",
    heroButton: "Contáctanos",
    
    // Services
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Soluciones contables integrales adaptadas a tus necesidades",
    service1Title: "Estados Financieros",
    service1Description: "Informes financieros precisos y oportunos para mantener tu negocio informado y cumpliendo.",
    service2Title: "Asesoría Fiscal",
    service2Description: "Servicios expertos de planificación y asesoramiento fiscal para optimizar tu posición tributaria.",
    service3Title: "Gestión de Régimen Simplificado",
    service3Description: "Apoyo especializado para empresas bajo regímenes fiscales simplificados.",
    service4Title: "Procesamiento de Nómina",
    service4Description: "Gestión de nómina eficiente y conforme para empresas de todos los tamaños.",
    
    // About
    aboutTitle: "Nosotros",
    aboutDescription: "Somos un equipo de contadores apasionados por ayudar a empresas y profesionales a crecer. Combinamos experiencia técnica con atención personalizada.",
    valuesTitle: "Nuestros Valores",
    value1: "Transparencia",
    value1Description: "Comunicación clara y honesta en todos nuestros tratos",
    value2: "Compromiso",
    value2Description: "Dedicados a tu éxito y salud financiera",
    value3: "Profesionalismo",
    value3Description: "Los más altos estándares de experiencia y servicio",
    
    // Testimonials
    testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
    testimonial1Text: "Ruiz & Asociados transformó nuestros procesos contables. Su experiencia y dedicación son incomparables.",
    testimonial1Author: "María González",
    testimonial1Position: "CEO, TechStart Solutions",
    testimonial2Text: "Profesionales, confiables y siempre disponibles. Han sido fundamentales en el crecimiento de nuestro negocio.",
    testimonial2Author: "Carlos Mendoza",
    testimonial2Position: "Propietario, Mendoza Imports",
    testimonial3Text: "Su consultoría fiscal nos ahorró miles. Recomiendo ampliamente sus servicios a cualquier negocio.",
    testimonial3Author: "Ana Rodríguez",
    testimonial3Position: "CFO, Green Energy Co.",
    
    // Contact
    contactTitle: "Contáctanos",
    contactSubtitle: "¿Listo para optimizar tus finanzas? Contáctanos hoy.",
    contactName: "Nombre",
    contactEmail: "Correo Electrónico",
    contactSubject: "Asunto",
    contactMessage: "Mensaje",
    contactButton: "Enviar Mensaje",
    contactInfo: "Información de Contacto",
    contactAddress: "Distrito Financiero 123, Plaza de Negocios, Piso 5",
    contactPhone: "+1 (555) 123-4567",
    contactEmailLabel: "Correo:",
    
    // Footer
    footerTagline: "Soluciones contables profesionales para el éxito de tu negocio",
    footerRights: "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
