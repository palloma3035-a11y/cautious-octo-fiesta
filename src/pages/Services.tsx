import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Cog, 
  Zap, 
  Users, 
  TrendingUp, 
  Building2,
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Target,
    title: 'Strategy Consulting',
    description: 'Define your path forward with data-driven strategies that align with your vision and market dynamics.',
    features: [
      'Market analysis & competitive positioning',
      'Growth strategy development',
      'M&A advisory & due diligence',
      'Corporate restructuring',
    ],
    outcomes: 'Average 35% improvement in strategic decision-making speed.',
  },
  {
    icon: Cog,
    title: 'Operations Excellence',
    description: 'Optimize processes, reduce costs, and enhance efficiency across your entire organization.',
    features: [
      'Process optimization & automation',
      'Supply chain transformation',
      'Cost reduction programs',
      'Quality management systems',
    ],
    outcomes: 'Typical 20-40% reduction in operational costs.',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Navigate the digital landscape with confidence through innovative technology solutions.',
    features: [
      'Digital strategy & roadmapping',
      'Technology assessment & selection',
      'Data analytics & AI implementation',
      'Cloud migration & modernization',
    ],
    outcomes: 'Average 50% improvement in digital maturity scores.',
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Build high-performing teams and cultivate the next generation of business leaders.',
    features: [
      'Executive coaching & mentoring',
      'Leadership assessment programs',
      'Succession planning',
      'Team effectiveness workshops',
    ],
    outcomes: '85% of participants report improved leadership effectiveness.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Improvement',
    description: 'Unlock your organization\'s full potential through targeted performance interventions.',
    features: [
      'KPI design & measurement',
      'Performance management systems',
      'Employee engagement programs',
      'Productivity optimization',
    ],
    outcomes: 'Average 25% improvement in key performance metrics.',
  },
  {
    icon: Building2,
    title: 'Change Management',
    description: 'Successfully navigate organizational transformations with minimal disruption.',
    features: [
      'Change readiness assessment',
      'Stakeholder engagement',
      'Communication strategy',
      'Training & adoption programs',
    ],
    outcomes: '90% success rate in change initiatives.',
  },
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom section-padding py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
                {t('services.title')}
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={service.title}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-secondary rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Proven Results:</strong> {service.outcomes}
                        </p>
                      </div>
                      <Link to="/contact">
                        <Button variant="gold" className="group">
                          Discuss Your Needs
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                          <Icon className="h-24 w-24 text-primary/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Schedule a complimentary consultation to discuss your challenges and explore 
              how we can help you achieve your objectives.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
