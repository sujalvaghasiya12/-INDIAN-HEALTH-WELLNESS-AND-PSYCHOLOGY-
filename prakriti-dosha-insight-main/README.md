# 🌿 Prakriti Wellness Web App

A beautiful, modern web application that helps users discover their Ayurvedic constitution (Prakriti) through an interactive quiz and provides personalized wellness recommendations.

## ✨ Features

### 🏠 Landing Page
- Calming, nature-inspired design with Ayurvedic aesthetics
- Clear call-to-action to take the Prakriti Quiz
- Responsive navigation with About, Quiz, and Login/Signup links

### 🔐 Authentication (Frontend Demo)
- **Login Page**: Email and password authentication (mocked)
- **Signup Page**: User registration with email 
- Local state management for user sessions
- Toast notifications for user feedback

### 📝 Prakriti Quiz
- **10 Multiple-Choice Questions** designed to assess your dosha balance
- Clean card-style UI with progress tracking
- Questions evaluate physical, mental, and lifestyle characteristics
- Smooth animations and loading states
- Instant score calculation for Vata, Pitta, and Kapha doshas

### 📊 Results Page
- Visual display of your dominant dosha (Vata, Pitta, or Kapha)
- Detailed dosha descriptions and characteristics
- Personalized diet recommendations
- Daily routine suggestions based on your constitution
- Option to retake the quiz

### ℹ️ About Page
- Educational content about Ayurveda and Prakriti
- Detailed explanations of the three doshas
- "How It Works" section explaining the assessment process

### 🎨 Design & UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Ayurvedic Color Palette**: Soothing sage green, beige, and earth tones
- **Smooth Animations**: Fade-in effects and loading states
- **Accessibility**: Semantic HTML and ARIA roles
- **Dark/Light Mode Ready**: Design system prepared for theme toggling

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui + Radix UI primitives
- **Routing**: React Router v6
- **State Management**: React Context API
- **Type Safety**: TypeScript
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd prakriti-wellness

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── Navbar.tsx       # Main navigation component
├── context/
│   └── AppContext.tsx   # Global state management
├── data/
│   └── quizQuestions.ts # Quiz questions and scoring logic
├── pages/
│   ├── Index.tsx        # Landing page
│   ├── Login.tsx        # Login page
│   ├── Signup.tsx       # Signup page
│   ├── Quiz.tsx         # Quiz interface
│   ├── Results.tsx      # Results display
│   ├── About.tsx        # About Ayurveda
│   └── NotFound.tsx     # 404 page
├── assets/              # Images and static files
├── App.tsx             # Main app component with routing
└── main.tsx            # App entry point
```

## 🎯 Usage

1. **Start**: Visit the landing page and click "Take the Prakriti Quiz"
2. **Optional**: Sign up or log in (currently frontend-only)
3. **Quiz**: Answer 10 questions about your physical and mental characteristics
4. **Results**: View your dominant dosha and personalized recommendations
5. **Learn**: Visit the About page to learn more about Ayurveda

## 🔮 Future Enhancements

This is currently a **frontend demo**. Planned backend integrations include:

- [ ] User authentication with JWT
- [ ] Database integration for storing user profiles and quiz results
- [ ] AI-powered personalized recommendations using OpenAI API
- [ ] PDF export functionality for results
- [ ] Email notifications and reminders
- [ ] Progress tracking dashboard
- [ ] Community features and wellness tips

## 🔮 Deployments

https://bharat-health-mind.vercel.app/
