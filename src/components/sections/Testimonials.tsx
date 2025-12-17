import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    quote: "Apex Consulting transformed our operations, resulting in a 40% increase in efficiency within just six months.",
    author: "Sarah Chen",
    title: "CEO, TechVentures Inc.",
    image: null,
  },
  {
    quote: "Their strategic insights helped us navigate a complex market entry, exceeding our revenue targets by 25%.",
    author: "Michael Brennan",
    title: "COO, GlobalTrade Partners",
    image: null,
  },
  {
    quote: "The team's expertise in digital transformation was instrumental in modernizing our legacy systems.",
    author: "Dr. Anna Schmidt",
    title: "CTO, MedTech Solutions",
    image: null,
  },
];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-custom-sm border border-border relative"
            >
              <Quote className="h-10 w-10 text-accent/20 absolute top-6 right-6" />
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
