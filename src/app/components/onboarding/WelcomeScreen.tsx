import { ArrowRight, Sparkles, Briefcase, TrendingUp, BookOpen, Target } from 'lucide-react';
import { Button } from '../ui/button';

interface WelcomeScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export default function WelcomeScreen({ onNext, onSkip }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <Sparkles className="absolute top-20 left-8 text-indigo-300 animate-pulse" size={24} />
      <Sparkles className="absolute top-32 right-12 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} size={20} />
      <Sparkles className="absolute top-48 right-20 text-pink-300 animate-pulse" style={{ animationDelay: '1s' }} size={16} />

      {/* Logo/App name */}
      <div className="pt-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
          <span className="text-indigo-900">Career Path</span>
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Illustration area */}
        <div className="relative w-64 h-64 mb-6 animate-float">
          {/* Main illustration circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-50 blur-2xl"></div>
          
          {/* Central figure */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Person representation */}
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <TrendingUp className="text-white" size={48} />
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.2s' }}>
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.4s' }}>
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div className="absolute top-12 -left-8 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                <Target className="text-amber-600" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-[#111827] text-center mb-4 max-w-sm px-4">
          Your AI-Powered Career Partner
        </h1>
        <p className="text-[#6B7280] text-center max-w-xs px-6">
          Get personalized job matches, skill insights, and a complete career roadmap tailored just for you
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="w-full space-y-4 pb-8">
        <Button 
          onClick={onNext}
          className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-[0px_4px_12px_rgba(79,70,229,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </Button>
        <button 
          onClick={onSkip}
          className="w-full text-[#6B7280] text-center py-2 hover:text-[#111827] transition-colors"
        >
          Skip
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
