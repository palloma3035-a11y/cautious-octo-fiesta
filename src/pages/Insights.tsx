import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const insights = [
  {
    category: 'Strategy',
    title: 'The Future of Work: Building Resilient Organizations in 2024',
    excerpt: 'Explore key strategies for creating adaptive organizations that thrive in uncertain times.',
    date: 'December 10, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    category: 'Digital',
    title: 'AI Implementation: A Practical Guide for Enterprise Leaders',
    excerpt: 'A step-by-step approach to successfully deploying AI solutions across your organization.',
    date: 'December 5, 2024',
    readTime: '12 min read',
    featured: true,
  },
  {
    category: 'Operations',
    title: 'Supply Chain Resilience: Lessons from Global Disruptions',
    excerpt: 'How leading companies are redesigning their supply chains for greater agility.',
    date: 'November 28, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    category: 'Leadership',
    title: 'Developing Next-Generation Leaders in a Digital Age',
    excerpt: 'Key competencies and development approaches for tomorrow\'s business leaders.',
    date: 'November 20, 2024',
    readTime: '10 min read',
    featured: false,
  },
  {
    category: 'Strategy',
    title: 'M&A in Uncertain Times: Due Diligence Best Practices',
    excerpt: 'Critical considerations for successful mergers and acquisitions in volatile markets.',
    date: 'November 15, 2024',
    readTime: '9 min read',
    featured: false,
  },
  {
    category: 'Digital',
    title: 'Data-Driven Decision Making: From Insight to Action',
    excerpt: 'Building a data culture that transforms analytics into competitive advantage.',
    date: 'November 8, 2024',
    readTime: '7 min read',
    featured: false,
  },
];

const categories = ['All', 'Strategy', 'Operations', 'Digital', 'Leadership'];

const Insights: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(i => i.category === activeCategory);

  const featuredInsights = insights.filter(i => i.featured);
  const regularInsights = filteredInsights.filter(i => !i.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom section-padding py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
                {t('nav.insights')}
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
                Thought leadership, industry trends, and strategic perspectives from our experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
              Featured Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredInsights.map((article) => (
                <article
                  key={article.title}
                  className="group bg-card rounded-lg overflow-hidden shadow-custom-sm border border-border card-hover"
                >
                  <div className="aspect-[16/9] bg-secondary">
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/10" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        <Tag className="h-3 w-3" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <button className="inline-flex items-center text-accent font-medium text-sm group/link">
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularInsights.map((article) => (
                <article
                  key={article.title}
                  className="group bg-card rounded-lg p-6 shadow-custom-sm border border-border card-hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      <Tag className="h-3 w-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <button className="inline-flex items-center text-accent font-medium text-sm group/link">
                      Read
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to receive our latest insights and thought leadership directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="gold">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
