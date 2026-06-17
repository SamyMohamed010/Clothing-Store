import { Home, Briefcase, Award, BarChart3, User } from 'lucide-react';
import { Screen } from '../../App';

interface BottomNavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home' as Screen, icon: Home, label: 'Home' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs', badge: 12, navigateTo: 'home' as Screen },
    { id: 'skills-gap' as Screen, icon: Award, label: 'Skills' },
    { id: 'insights' as Screen, icon: BarChart3, label: 'Insights' },
    { id: 'profile' as Screen, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const targetScreen = 'navigateTo' in item ? item.navigateTo : item.id;
          const isActive = currentScreen === targetScreen;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(targetScreen)}
              className="flex flex-col items-center justify-center flex-1 h-full relative group"
            >
              <div className="relative">
                <Icon 
                  size={24} 
                  className={`transition-colors ${
                    isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                />
                {item.badge && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px]">{item.badge}</span>
                  </div>
                )}
              </div>
              <span className={`text-xs mt-1 transition-colors ${
                isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}