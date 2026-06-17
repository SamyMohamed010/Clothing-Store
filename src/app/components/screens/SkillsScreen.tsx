import { Target, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import type { Screen } from '../MainApp';

interface SkillsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function SkillsScreen({ onNavigate }: SkillsScreenProps) {
  const skills = [
    { name: 'React.js', level: 90, demand: 'Very High', category: 'Frontend' },
    { name: 'TypeScript', level: 75, demand: 'Very High', category: 'Frontend' },
    { name: 'JavaScript', level: 95, demand: 'Very High', category: 'Frontend' },
    { name: 'CSS/Tailwind', level: 85, demand: 'High', category: 'Frontend' },
    { name: 'Node.js', level: 60, demand: 'High', category: 'Backend' },
    { name: 'Git', level: 80, demand: 'High', category: 'Tools' },
    { name: 'Docker', level: 40, demand: 'Very High', category: 'DevOps' },
    { name: 'Testing (Jest)', level: 55, demand: 'High', category: 'Testing' },
  ];

  const getDemandColor = (demand: string) => {
    if (demand === 'Very High') return 'text-green-600 bg-green-50';
    if (demand === 'High') return 'text-blue-600 bg-blue-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-gray-900">Your Skills</h2>
          <p className="text-sm text-gray-600 mt-1">Track and improve your skills</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('skills-gap')}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-left hover:shadow-lg transition-shadow"
          >
            <Target className="w-8 h-8 mb-3" />
            <h3 className="text-white mb-1">Skills Gap Analysis</h3>
            <p className="text-sm text-indigo-100">Find what you need to learn</p>
            <ChevronRight className="w-5 h-5 mt-2" />
          </button>

          <button className="bg-white rounded-2xl p-6 text-left hover:shadow-md transition-shadow">
            <TrendingUp className="w-8 h-8 mb-3 text-green-600" />
            <h3 className="text-gray-900 mb-1">Market Trends</h3>
            <p className="text-sm text-gray-600">See what's in demand</p>
            <ChevronRight className="w-5 h-5 mt-2 text-gray-400" />
          </button>

          <button className="bg-white rounded-2xl p-6 text-left hover:shadow-md transition-shadow">
            <BookOpen className="w-8 h-8 mb-3 text-amber-600" />
            <h3 className="text-gray-900 mb-1">Learning Paths</h3>
            <p className="text-sm text-gray-600">Personalized courses</p>
            <ChevronRight className="w-5 h-5 mt-2 text-gray-400" />
          </button>
        </div>

        {/* Skills Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-gray-900">All Skills</h3>
              <p className="text-sm text-gray-600 mt-1">{skills.length} skills tracked</p>
            </div>
            <Button variant="outline">Add Skill</Button>
          </div>

          <div className="space-y-6">
            {['Frontend', 'Backend', 'DevOps', 'Tools', 'Testing'].map((category) => {
              const categorySkills = skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category}>
                  <h4 className="text-gray-900 mb-3">{category}</h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <span className="text-gray-900">{skill.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getDemandColor(skill.demand)}`}>
                              {skill.demand}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Skills to Learn */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Recommended Skills to Learn</h3>
          <div className="space-y-3">
            {[
              { name: 'Docker & Kubernetes', reason: 'Required for 87% of senior positions', demand: 'Very High' },
              { name: 'System Design', reason: 'Critical for senior roles', demand: 'Very High' },
              { name: 'GraphQL', reason: 'Growing 40% YoY', demand: 'High' },
            ].map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-900">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDemandColor(skill.demand)}`}>
                      {skill.demand}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{skill.reason}</p>
                </div>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white ml-4">
                  Learn
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
