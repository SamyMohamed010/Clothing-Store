import { Briefcase, Award, MessageSquare, DollarSign, Map } from 'lucide-react';
import { Screen } from '../../App';

interface QuickActionsProps {
  onNavigate: (screen: Screen) => void;
}

export default function QuickActions({ onNavigate }: QuickActionsProps) {
  const actions = [
    { 
      id: 'jobs', 
      icon: Briefcase, 
      label: 'New Jobs', 
      badge: 12, 
      color: 'bg-indigo-50 text-indigo-600',
      screen: 'home' as Screen
    },
    { 
      id: 'skills', 
      icon: Award, 
      label: 'Skills Gap', 
      color: 'bg-green-50 text-green-600',
      screen: 'skills-gap' as Screen
    },
    { 
      id: 'interview', 
      icon: MessageSquare, 
      label: 'Interview Prep', 
      color: 'bg-purple-50 text-purple-600',
      screen: 'interview-prep' as Screen
    },
    { 
      id: 'salary', 
      icon: DollarSign, 
      label: 'Salary Insights', 
      color: 'bg-amber-50 text-amber-600',
      screen: 'insights' as Screen
    },
    { 
      id: 'roadmap', 
      icon: Map, 
      label: 'Career Roadmap', 
      color: 'bg-pink-50 text-pink-600',
      screen: 'career-roadmap' as Screen
    },
  ];

  return (
    <div>
      <h3 className="text-[#111827] mb-3">Quick Actions</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => onNavigate(action.screen)}
              className="flex-shrink-0 w-28 bg-white rounded-2xl p-4 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="relative mb-3">
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto`}>
                  <Icon size={24} />
                </div>
                {action.badge && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px]">{action.badge}</span>
                  </div>
                )}
              </div>
              <p className="text-[#111827] text-xs text-center">{action.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
