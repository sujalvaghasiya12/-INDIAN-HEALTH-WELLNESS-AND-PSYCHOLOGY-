import { Card } from '@/components/ui/card';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Prakriti Wellness
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ancient wisdom meets modern technology to bring you personalized wellness guidance.
            </p>
          </div>

          <Card className="p-8 mb-8 shadow-soft animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">What is Prakriti?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              In Ayurveda, <strong>Prakriti</strong> refers to your unique mind-body constitution determined at conception. 
              It is a combination of three fundamental energies or doshas: Vata (air & space), Pitta (fire & water), 
              and Kapha (earth & water).
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding your Prakriti helps you make lifestyle choices that align with your natural tendencies, 
              promoting balance, health, and well-being.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Heart,
                title: 'Vata Dosha',
                description: 'Air & Space elements. Creative, quick, and energetic. Needs warmth and grounding.',
                color: 'text-blue-500'
              },
              {
                icon: Sparkles,
                title: 'Pitta Dosha',
                description: 'Fire & Water elements. Intelligent, focused, and driven. Needs cooling and moderation.',
                color: 'text-orange-500'
              },
              {
                icon: Leaf,
                title: 'Kapha Dosha',
                description: 'Earth & Water elements. Calm, stable, and nurturing. Needs stimulation and lightness.',
                color: 'text-green-600'
              }
            ].map((dosha, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-soft animate-fade-in-up hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <dosha.icon className={`w-10 h-10 ${dosha.color} mb-4`} />
                <h3 className="text-xl font-semibold text-foreground mb-3">{dosha.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{dosha.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 shadow-soft animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Take the Quiz</h4>
                  <p className="text-muted-foreground">Answer 10 carefully crafted questions about your physical, mental, and emotional tendencies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Analysis</h4>
                  <p className="text-muted-foreground">Our system calculates your dosha scores and identifies your dominant constitution.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Get Personalized Recommendations</h4>
                  <p className="text-muted-foreground">Receive customized diet plans and daily routines based on ancient Ayurvedic principles.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
