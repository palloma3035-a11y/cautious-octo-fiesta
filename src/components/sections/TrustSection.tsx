import React from 'react';
import { Users, Calendar, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  {
    icon: Users,
    valueKey: 'trust.clients',
    value: '500+',
  },
  {
    icon: Calendar,
    valueKey: 'trust.years',
    value: '25+',
  },
  {
    icon: Globe,
    valueKey: 'trust.countries',
    value: '40+',
  },
  {
    icon: Award,
    valueKey: 'trust.satisfaction',
    value: '98%',
  },
];

const clientLogos = [
  'Accenture',
  'Deloitte',
  'McKinsey',
  'BCG',
  'Bain',
  'PwC',
];

const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.valueKey} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {t(stat.valueKey).replace(stat.value, '').trim()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            {t('trust.title')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-xl md:text-2xl font-serif font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
