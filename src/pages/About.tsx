import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Shield, Heart, Lightbulb, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver exceptional results through rigorous analysis and innovative solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical standards in all engagements.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We build lasting relationships based on trust, collaboration, and shared success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to drive transformative change.',
  },
];

const team = [
  {
    name: 'Jonathan Mitchell',
    role: 'Managing Partner',
    bio: '25+ years in management consulting, former McKinsey Director.',
    initials: 'JM',
  },
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Head of Strategy',
    bio: 'PhD in Economics, expert in market entry and growth strategies.',
    initials: 'ER',
  },
  {
    name: 'David Chen',
    role: 'Digital Transformation Lead',
    bio: 'Former CTO of Fortune 500 tech company, AI specialist.',
    initials: 'DC',
  },
  {
    name: 'Maria Kowalski',
    role: 'Operations Excellence Partner',
    bio: 'Six Sigma Master Black Belt, supply chain optimization expert.',
    initials: 'MK',
  },
];

const About: React.FC = () => {
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
                {t('about.title')}
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                For over 25 years, Apex Consulting has been partnering with visionary leaders 
                to navigate complexity and achieve sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  {t('about.mission')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.missionText')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1998, we've grown from a boutique strategy firm to a global 
                  consulting powerhouse, serving clients across 40+ countries in industries 
                  ranging from technology and healthcare to finance and manufacturing.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8 md:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">40+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {t('about.values')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {t('about.team')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-lg p-6 shadow-custom-sm border border-border text-center card-hover"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-serif font-bold text-2xl">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help you achieve your strategic objectives.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
