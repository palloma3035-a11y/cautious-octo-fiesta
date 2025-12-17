import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Cog, Zap, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Target,
    titleKey: 'services.strategy',
    descKey: 'services.strategyDesc',
    color: 'text-accent',
  },
  {
    icon: Cog,
    titleKey: 'services.operations',
    descKey: 'services.operationsDesc',
    color: 'text-navy-400',
  },
  {
    icon: Zap,
    titleKey: 'services.digital',
    descKey: 'services.digitalDesc',
    color: 'text-gold-400',
  },
  {
    icon: Users,
    titleKey: 'services.leadership',
    descKey: 'services.leadershipDesc',
    color: 'text-navy-500',
  },
];

const ServicesOverview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.titleKey}
                className="group bg-card rounded-lg p-8 shadow-custom-sm hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center text-accent font-medium text-sm group/link"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
