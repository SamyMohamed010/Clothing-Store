import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from '../ui/button';

interface CareerGoalsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

interface Goal {
  id: string;
  emoji: string;
  label: string;
}

const goals: Goal[] = [
  { id: '1', emoji: '🔄', label: 'Switch Career' },
  { id: '2', emoji: '📈', label: 'Get Promoted' },
  { id: '3', emoji: '🎓', label: 'Learn Skills' },
  { id: '4', emoji: '💰', label: 'Higher Salary' },
  { id: '5', emoji: '🏠', label: 'Remote Work' },
  { id: '6', emoji: '💼', label: 'Freelancing' },
];

export default function CareerGoalsScreen({ onNext, onBack }: CareerGoalsScreenProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Progress indicator */}
      <div className="pt-6 pb-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
          <div className="w-8 h-2 bg-indigo-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <p className="text-[#6B7280] text-center text-xs">Step 2 of 3</p>
      </div>

      {/* Header */}
      <div className="mt-10 mb-8">
        <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#111827] mb-2">What's Your Career Goal?</h1>
        <p className="text-[#6B7280]">Select all that apply</p>
      </div>

      {/* Goals grid */}
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {goals.map((goal) => {
            const isSelected = selectedGoals.includes(goal.id);
            return (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`relative h-[164px] rounded-2xl border-2 p-5 flex flex-col items-start transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50 shadow-[0px_4px_16px_rgba(79,70,229,0.2)] scale-[1.03]'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <span className="text-5xl mb-4">{goal.emoji}</span>
                <span className={`${isSelected ? 'text-indigo-600' : 'text-[#111827]'}`}>
                  {goal.label}
                </span>
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom section */}
      <div className="pb-6 pt-6 space-y-4">
        <p className="text-[#6B7280] text-center text-xs">
          {selectedGoals.length} {selectedGoals.length === 1 ? 'goal' : 'goals'} selected
        </p>
        <Button 
          onClick={onNext}
          disabled={selectedGoals.length === 0}
          className={`w-full h-14 rounded-xl transition-all ${
            selectedGoals.length > 0
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
}
