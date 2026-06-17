import { TrendingUp, Award, Target, User } from 'lucide-react';
import { Progress } from '../ui/progress';
import { Screen } from '../../App';

interface CareerHealthScoreProps {
  onNavigate: (screen: Screen) => void;
}

export default function CareerHealthScore({ onNavigate }: CareerHealthScoreProps) {
  const overallScore = 78;
  const metrics = [
    { label: 'Skills Match', value: 78, icon: Award, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Market Demand', value: 85, icon: TrendingUp, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: 'Profile Strength', value: 60, icon: Target, color: 'text-amber-600', bgColor: 'bg-amber-50' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-[#111827] mb-4">Career Health Score</h3>
      
      {/* Main Score Circle */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          {/* Background circle */}
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(overallScore / 100) * 351.86} 351.86`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className={getScoreGradient(overallScore).includes('green') ? 'text-green-500' : getScoreGradient(overallScore).includes('amber') ? 'text-amber-500' : 'text-red-500'} stopColor="currentColor" />
                <stop offset="100%" className={getScoreGradient(overallScore).includes('green') ? 'text-emerald-500' : getScoreGradient(overallScore).includes('orange') ? 'text-orange-500' : 'text-rose-500'} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl ${getScoreColor(overallScore)}`}>{overallScore}</span>
            <span className="text-[#6B7280] text-xs">out of 100</span>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-[#111827] mb-2">Good Progress!</p>
          <p className="text-[#6B7280] text-sm mb-3">
            Your career health is above average. Complete your missing skills to reach excellent!
          </p>
          <button 
            onClick={() => onNavigate('skills-gap')}
            className="text-indigo-600 text-sm hover:text-indigo-700 hover:underline"
          >
            Improve Score →
          </button>
        </div>
      </div>

      {/* Sub-metrics */}
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className={`${metric.bgColor} rounded-xl p-3`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={metric.color} size={16} />
              </div>
              <p className={`${metric.color} text-xl mb-1`}>{metric.value}%</p>
              <p className="text-gray-600 text-xs">{metric.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
