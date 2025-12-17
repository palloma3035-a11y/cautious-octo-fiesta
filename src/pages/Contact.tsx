import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const offices = [
  {
    city: 'New York',
    address: '123 Business Avenue, Suite 500',
    postal: 'New York, NY 10001',
    phone: '+1 (212) 555-0123',
    email: 'newyork@apexconsulting.com',
  },
  {
    city: 'London',
    address: '45 Financial Street',
    postal: 'London EC2N 4AJ, UK',
    phone: '+44 20 7123 4567',
    email: 'london@apexconsulting.com',
  },
  {
    city: 'Singapore',
    address: '1 Marina Boulevard, Tower 3',
    postal: 'Singapore 018989',
    phone: '+65 6789 0123',
    email: 'singapore@apexconsulting.com',
  },
];

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setConsent(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom section-padding py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
                {t('contact.title')}
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.name')} *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.email')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.company')}
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(checked as boolean)}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      {t('contact.consent')}
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto group"
                  >
                    {isSubmitting ? 'Sending...' : t('contact.submit')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t('contact.offices')}
                </h2>
                <div className="space-y-8">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-card rounded-lg p-6 shadow-custom-sm border border-border"
                    >
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                        {office.city}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            {office.address}<br />
                            {office.postal}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-accent shrink-0" />
                          <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-accent shrink-0" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (Local Time)<br />
                    Weekend: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
