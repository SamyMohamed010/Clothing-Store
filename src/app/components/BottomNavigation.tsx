import { Home, Briefcase, Target, TrendingUp, User } from 'lucide-react';
import type { Screen } from './MainApp';

interface BottomNavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home' as Screen, label: 'Home', icon: Home },
    { id: 'jobs' as Screen, label: 'Jobs', icon: Briefcase },
    { id: 'skills' as Screen, label: 'Skills', icon: Target },
    { id: 'insights' as Screen, label: 'Insights', icon: TrendingUp },
    { id: 'profile' as Screen, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all min-w-[60px] ${
                isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
