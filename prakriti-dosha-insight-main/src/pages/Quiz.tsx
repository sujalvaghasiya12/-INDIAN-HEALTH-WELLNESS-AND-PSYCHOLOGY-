import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { quizQuestions } from '@/data/quizQuestions';
import { Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  const { setQuizResult } = useApp();

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsAnalyzing(true);

    // Calculate dosha scores
    let vataScore = 0;
    let pittaScore = 0;
    let kaphaScore = 0;

    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== -1) {
        const option = quizQuestions[questionIndex].options[answerIndex];
        vataScore += option.vata;
        pittaScore += option.pitta;
        kaphaScore += option.kapha;
      }
    });

    // Determine dominant dosha
    let dominantDosha: 'vata' | 'pitta' | 'kapha' = 'vata';
    const maxScore = Math.max(vataScore, pittaScore, kaphaScore);
    
    if (maxScore === pittaScore) {
      dominantDosha = 'pitta';
    } else if (maxScore === kaphaScore) {
      dominantDosha = 'kapha';
    }

    // Simulate analysis delay
    setTimeout(() => {
      setQuizResult({
        dominantDosha,
        vataScore,
        pittaScore,
        kaphaScore
      });
      navigate('/results');
    }, 2000);
  };

  const question = quizQuestions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== -1;

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="p-12 text-center max-w-md mx-4 shadow-glow animate-pulse-soft">
          <Loader2 className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Analyzing Your Prakriti...</h2>
          <p className="text-muted-foreground">
            Our AI is processing your responses to determine your unique dosha constitution.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-2xl font-bold text-foreground">Prakriti Quiz</h1>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 mb-6 shadow-soft animate-scale-in">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestion] === index
                      ? 'border-primary bg-primary/5 shadow-soft'
                      : 'border-border hover:border-primary/50 bg-card'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {answers[currentQuestion] === index && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="text-foreground">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
              className="px-8"
            >
              Previous
            </Button>

            <Button
              onClick={handleNext}
              variant="hero"
              disabled={!isAnswered}
              className="px-8"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
