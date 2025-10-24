import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, Brain, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import heroImage from '@/assets/hero-wellness.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover Your <span className="text-primary">Prakriti</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Unlock the ancient wisdom of Ayurveda. Take our personalized quiz to discover your unique dosha and receive AI-powered wellness recommendations tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/quiz')} 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8"
                >
                  Take the Prakriti Quiz
                </Button>
                <Button 
                  onClick={() => navigate('/about')} 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Ayurvedic wellness meditation with lotus flowers and stones" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Discover Your Prakriti?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding your dosha is the first step to achieving balance, vitality, and holistic wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Personalized Insights',
                description: 'Get AI-powered recommendations based on your unique dosha constitution.',
                color: 'text-primary'
              },
              {
                icon: Heart,
                title: 'Holistic Wellness',
                description: 'Discover diet plans and daily routines aligned with Ayurvedic principles.',
                color: 'text-accent'
              },
              {
                icon: Sparkles,
                title: 'Ancient Wisdom',
                description: 'Access 5,000 years of Ayurvedic knowledge, adapted for modern life.',
                color: 'text-primary-light'
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-soft transition-all duration-300 animate-fade-in-up bg-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-hero mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take our 10-question quiz and unlock personalized wellness recommendations in minutes.
            </p>
            <Button 
              onClick={() => navigate('/quiz')} 
              variant="hero" 
              size="lg"
              className="text-lg px-12"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Prakriti Wellness. Ancient wisdom for modern living.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
