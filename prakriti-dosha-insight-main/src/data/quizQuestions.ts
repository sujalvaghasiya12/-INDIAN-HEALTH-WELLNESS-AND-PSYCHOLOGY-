export interface QuizOption {
  text: string;
  vata: number;
  pitta: number;
  kapha: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin, light frame with prominent joints", vata: 3, pitta: 0, kapha: 0 },
      { text: "Medium build with good muscle definition", vata: 0, pitta: 3, kapha: 0 },
      { text: "Larger, solid frame with tendency to gain weight", vata: 0, pitta: 0, kapha: 3 },
      { text: "Combination of above traits", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 2,
    question: "What is your skin type?",
    options: [
      { text: "Dry, rough, or cool to touch", vata: 3, pitta: 0, kapha: 0 },
      { text: "Warm, oily, with tendency for acne or rashes", vata: 0, pitta: 3, kapha: 0 },
      { text: "Thick, smooth, and well-moisturized", vata: 0, pitta: 0, kapha: 3 },
      { text: "Varies between seasons", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 3,
    question: "How is your hair naturally?",
    options: [
      { text: "Dry, thin, brittle, or frizzy", vata: 3, pitta: 0, kapha: 0 },
      { text: "Fine, straight, with early graying or thinning", vata: 0, pitta: 3, kapha: 0 },
      { text: "Thick, lustrous, and wavy", vata: 0, pitta: 0, kapha: 3 },
      { text: "Mix of characteristics", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 4,
    question: "How do you sleep?",
    options: [
      { text: "Light sleeper, easily disturbed, sometimes insomnia", vata: 3, pitta: 0, kapha: 0 },
      { text: "Moderate sleep, wake up refreshed quickly", vata: 0, pitta: 3, kapha: 0 },
      { text: "Deep, long sleep, hard to wake up", vata: 0, pitta: 0, kapha: 3 },
      { text: "Sleep pattern varies", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 5,
    question: "How is your digestion?",
    options: [
      { text: "Irregular, bloating, gas, constipation", vata: 3, pitta: 0, kapha: 0 },
      { text: "Strong appetite, can't skip meals, tendency for heartburn", vata: 0, pitta: 3, kapha: 0 },
      { text: "Slow but steady, can skip meals easily", vata: 0, pitta: 0, kapha: 3 },
      { text: "Sometimes strong, sometimes weak", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 6,
    question: "What is your energy level like?",
    options: [
      { text: "Comes in bursts, fluctuates throughout the day", vata: 3, pitta: 0, kapha: 0 },
      { text: "Consistent and strong, very active", vata: 0, pitta: 3, kapha: 0 },
      { text: "Steady and enduring, prefer relaxed pace", vata: 0, pitta: 0, kapha: 3 },
      { text: "Depends on the situation", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 7,
    question: "How do you handle stress?",
    options: [
      { text: "Anxious, worried, overwhelmed easily", vata: 3, pitta: 0, kapha: 0 },
      { text: "Irritable, frustrated, or angry", vata: 0, pitta: 3, kapha: 0 },
      { text: "Withdrawn, lethargic, or in denial", vata: 0, pitta: 0, kapha: 3 },
      { text: "Mix of above reactions", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 8,
    question: "What is your temperature preference?",
    options: [
      { text: "I prefer warmth and dislike cold weather", vata: 3, pitta: 0, kapha: 0 },
      { text: "I feel hot often and prefer cool environments", vata: 0, pitta: 3, kapha: 0 },
      { text: "I tolerate most temperatures but dislike damp/cold", vata: 0, pitta: 0, kapha: 3 },
      { text: "I'm comfortable in most temperatures", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 9,
    question: "How do you learn best?",
    options: [
      { text: "Quickly but forget easily, need repetition", vata: 3, pitta: 0, kapha: 0 },
      { text: "Sharp, focused learner with good retention", vata: 0, pitta: 3, kapha: 0 },
      { text: "Slow to learn but excellent long-term memory", vata: 0, pitta: 0, kapha: 3 },
      { text: "Depends on the subject", vata: 1, pitta: 1, kapha: 1 }
    ]
  },
  {
    id: 10,
    question: "What is your activity preference?",
    options: [
      { text: "Creative, artistic, always trying new things", vata: 3, pitta: 0, kapha: 0 },
      { text: "Competitive sports, intense workouts", vata: 0, pitta: 3, kapha: 0 },
      { text: "Gentle exercise like walking, yoga, swimming", vata: 0, pitta: 0, kapha: 3 },
      { text: "Varies based on mood", vata: 1, pitta: 1, kapha: 1 }
    ]
  }
];
