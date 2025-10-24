import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Sparkles, Download, RotateCcw, Wind, Flame, Droplets } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { toast } from '@/hooks/use-toast';

const doshaInfo = {
  vata: {
    icon: Wind,
    name: 'Vata',
    element: 'Air & Space',
    description: 'Creative, energetic, and quick-thinking. Vata types are often lively and enthusiastic but can become anxious when imbalanced.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    diet: [
      'Warm, cooked, and grounding foods',
      'Healthy fats like ghee and olive oil',
      'Sweet, sour, and salty tastes',
      'Root vegetables and whole grains',
      'Warm milk with spices',
      'Avoid cold, raw, and dry foods'
    ],
    routine: [
      'Wake up by 6 AM and establish a consistent sleep schedule',
      'Practice calming yoga and gentle stretching',
      'Self-massage with warm sesame oil (Abhyanga)',
      'Meditate for 10-15 minutes daily',
      'Avoid excessive stimulation and multitasking',
      'Stay warm and avoid cold, windy weather'
    ]
  },
  pitta: {
    icon: Flame,
    name: 'Pitta',
    element: 'Fire & Water',
    description: 'Intelligent, ambitious, and strong-willed. Pitta types are natural leaders with sharp minds but can become irritable when out of balance.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    diet: [
      'Cooling and refreshing foods',
      'Sweet, bitter, and astringent tastes',
      'Fresh fruits like melons and coconut',
      'Leafy greens and cucumber',
      'Moderate amounts of dairy',
      'Avoid spicy, fried, and overly hot foods'
    ],
    routine: [
      'Wake up by 5:30 AM and maintain regular meal times',
      'Practice cooling yoga and swimming',
      'Avoid excessive heat and sun exposure',
      'Meditate in peaceful, natural settings',
      'Take breaks to prevent burnout',
      'Engage in moderate, non-competitive exercise'
    ]
  },
  kapha: {
    icon: Droplets,
    name: 'Kapha',
    element: 'Earth & Water',
    description: 'Calm, stable, and nurturing. Kapha types are grounded and loyal with great endurance but can become lethargic when imbalanced.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    diet: [
      'Light, dry, and warm foods',
      'Pungent, bitter, and astringent tastes',
      'Plenty of vegetables and legumes',
      'Warming spices like ginger and turmeric',
      'Minimal dairy and oils',
      'Avoid heavy, oily, and sweet foods'
    ],
    routine: [
      'Wake up by 6 AM or earlier, avoid oversleeping',
      'Engage in vigorous exercise like running or cycling',
      'Stay active and avoid sedentary habits',
      'Practice energizing breathwork (Pranayama)',
      'Seek variety and new experiences',
      'Keep your environment warm and dry'
    ]
  }
};

const Results = () => {
  const navigate = useNavigate();
  const { quizResult } = useApp();

  useEffect(() => {
    if (!quizResult) {
      navigate('/quiz');
    }
  }, [quizResult, navigate]);

  if (!quizResult) {
    return null;
  }

  const dosha = doshaInfo[quizResult.dominantDosha];
  const DoshaIcon = dosha.icon;

  const handleRetakeQuiz = () => {
    navigate('/quiz');
  };

  const handleSavePDF = () => {
    toast({
      title: 'PDF Feature Coming Soon',
      description: 'We are working on the PDF download functionality.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Your Prakriti Analysis
            </h1>
            <p className="text-lg text-muted-foreground">
              Based on your responses, your dominant dosha is:
            </p>
          </div>

          {/* Dosha Result Card */}
          <Card className={`p-8 mb-8 ${dosha.bgColor} border-2 shadow-glow animate-scale-in`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className={`p-6 rounded-full bg-gradient-primary`}>
                <DoshaIcon className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {dosha.name} Dosha
                </h2>
                <p className="text-sm text-muted-foreground mb-3">{dosha.element}</p>
                <p className="text-foreground leading-relaxed">{dosha.description}</p>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Score Breakdown:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{quizResult.vataScore}</p>
                  <p className="text-sm text-muted-foreground">Vata</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{quizResult.pittaScore}</p>
                  <p className="text-sm text-muted-foreground">Pitta</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{quizResult.kaphaScore}</p>
                  <p className="text-sm text-muted-foreground">Kapha</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Diet Plan */}
          <Card className="p-8 mb-8 shadow-soft animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl">🥗</span>
              Personalized Diet Plan
            </h3>
            <ul className="space-y-3">
              {dosha.diet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Daily Routine */}
          <Card className="p-8 mb-8 shadow-soft animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl">🌅</span>
              Daily Routine Recommendations
            </h3>
            <ul className="space-y-3">
              {dosha.routine.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRetakeQuiz} variant="outline" size="lg" className="gap-2">
              <RotateCcw className="w-5 h-5" />
              Retake Quiz
            </Button>
            <Button onClick={handleSavePDF} variant="hero" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Save as PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
