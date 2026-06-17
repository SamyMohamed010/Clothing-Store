import { useState } from 'react';
import { ArrowLeft, TrendingUp, Award, DollarSign, Clock, Briefcase, BookOpen, Users, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface CareerRoadmapScreenProps {
  onBack: () => void;
}

export default function CareerRoadmapScreen({ onBack }: CareerRoadmapScreenProps) {
  const [selectedPath, setSelectedPath] = useState<'current' | 'related' | 'switch'>('current');

  const currentPosition = {
    role: 'Product Manager',
    experience: '3 years',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Data Analysis', 'Leadership']
  };

  const paths = {
    current: {
      name: 'Stay in Current Domain',
      description: 'Progress in Product Management',
      timeline: [
        {
          timeframe: '3 Months',
          from: 'Product Manager',
          to: 'Senior Product Manager',
          salary: '₨ 200K → ₨ 300K',
          salaryIncrease: '+50%',
          skills: ['Advanced Product Strategy', 'Team Leadership', 'OKRs'],
          courses: ['Product Leadership Masterclass', 'Strategic Product Management'],
          certifications: ['Certified Product Manager (CPM)'],
          keyMilestones: ['Lead 2+ product launches', 'Mentor junior PMs', 'Define product vision']
        },
        {
          timeframe: '6 Months',
          from: 'Senior Product Manager',
          to: 'Lead Product Manager',
          salary: '₨ 300K → ₨ 450K',
          salaryIncrease: '+50%',
          skills: ['Product Portfolio Management', 'Cross-functional Leadership', 'Business Strategy'],
          courses: ['Executive Product Management', 'Business Model Innovation'],
          certifications: ['Product Management Certification (PMC)'],
          keyMilestones: ['Manage product portfolio', 'Drive revenue growth', 'Build PM team']
        },
        {
          timeframe: '1 Year',
          from: 'Lead Product Manager',
          to: 'Director of Product',
          salary: '₨ 450K → ₨ 700K',
          salaryIncrease: '+55%',
          skills: ['Organizational Leadership', 'P&L Management', 'Executive Communication'],
          courses: ['Product Executive Program', 'Leadership at Scale'],
          certifications: ['Executive Product Leadership'],
          keyMilestones: ['Define company product strategy', 'Build high-performing teams', 'Board-level presentations']
        }
      ]
    },
    related: {
      name: 'Switch to Related Field',
      description: 'Transition to Product Design',
      timeline: [
        {
          timeframe: '3 Months',
          from: 'Product Manager',
          to: 'Product Designer',
          salary: '₨ 200K → ₨ 250K',
          salaryIncrease: '+25%',
          skills: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research'],
          courses: ['UX Design Bootcamp', 'Advanced Figma', 'Design Thinking'],
          certifications: ['Google UX Design Certificate'],
          keyMilestones: ['Build portfolio', 'Complete 5+ design projects', 'Master Figma']
        },
        {
          timeframe: '6 Months',
          from: 'Product Designer',
          to: 'Senior Product Designer',
          salary: '₨ 250K → ₨ 350K',
          salaryIncrease: '+40%',
          skills: ['Advanced Prototyping', 'Design Leadership', 'Accessibility'],
          courses: ['Advanced UX/UI', 'Design Leadership'],
          certifications: ['Nielsen Norman Group UX Certification'],
          keyMilestones: ['Lead design projects', 'Mentor designers', 'Build design system']
        }
      ]
    },
    switch: {
      name: 'Complete Career Change',
      description: 'Move to Data Science',
      timeline: [
        {
          timeframe: '6 Months',
          from: 'Product Manager',
          to: 'Junior Data Analyst',
          salary: '₨ 200K → ₨ 180K',
          salaryIncrease: '-10%',
          skills: ['Python', 'SQL', 'Statistics', 'Data Visualization'],
          courses: ['Data Science Bootcamp', 'Python for Data Analysis', 'SQL Mastery'],
          certifications: ['Google Data Analytics Certificate'],
          keyMilestones: ['Learn Python & SQL', 'Build data portfolio', 'Complete 10+ projects']
        },
        {
          timeframe: '1 Year',
          from: 'Junior Data Analyst',
          to: 'Data Scientist',
          salary: '₨ 180K → ₨ 350K',
          salaryIncrease: '+94%',
          skills: ['Machine Learning', 'Deep Learning', 'Big Data', 'Cloud Computing'],
          courses: ['Machine Learning Specialization', 'Deep Learning'],
          certifications: ['AWS Machine Learning Certification'],
          keyMilestones: ['Master ML algorithms', 'Deploy ML models', 'Contribute to open source']
        }
      ]
    }
  };

  const selectedPathData = paths[selectedPath];

  const comparisons = [
    { metric: 'Time Investment', current: '1 year', related: '6 months', switch: '1.5 years' },
    { metric: 'Salary Growth', current: '+155%', related: '+65%', switch: '+84%' },
    { metric: 'Job Satisfaction', current: '8.5/10', related: '9/10', switch: '7.5/10' },
    { metric: 'Market Demand', current: 'Very High', related: 'High', switch: 'Very High' },
    { metric: 'Work-Life Balance', current: '7/10', related: '8/10', switch: '6/10' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-[#111827]">Career Roadmap</h1>
            <p className="text-[#6B7280] text-sm">Plan your career journey</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Current Position */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">Your Current Position</p>
              <h3 className="text-white mb-1">{currentPosition.role}</h3>
              <p className="text-white/90 text-sm">{currentPosition.experience} experience</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentPosition.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/20 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Path Selector */}
        <div>
          <h3 className="text-[#111827] mb-3">Choose Your Path</h3>
          <div className="space-y-3">
            {(Object.keys(paths) as Array<keyof typeof paths>).map((pathKey) => {
              const path = paths[pathKey];
              const isSelected = selectedPath === pathKey;
              return (
                <button
                  key={pathKey}
                  onClick={() => setSelectedPath(pathKey)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 bg-white hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`mb-1 ${isSelected ? 'text-indigo-600' : 'text-[#111827]'}`}>
                        {path.name}
                      </p>
                      <p className="text-[#6B7280] text-sm">{path.description}</p>
                    </div>
                    <ChevronRight className={isSelected ? 'text-indigo-600' : 'text-gray-400'} size={20} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Roadmap Timeline */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-6">Your Journey: {selectedPathData.name}</h3>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300"></div>

            <div className="space-y-8">
              {selectedPathData.timeline.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Timeline node */}
                  <div className="absolute left-8 top-6 w-1 h-full bg-gray-200 -z-10"></div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
                        <Clock size={24} />
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center w-16">{stage.timeframe}</p>
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200">
                      {/* Role transition */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#111827]">{stage.from}</span>
                        <ChevronRight className="text-gray-400" size={16} />
                        <span className="text-[#111827] text-indigo-600">{stage.to}</span>
                      </div>

                      {/* Salary info */}
                      <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                        <DollarSign className="text-green-600" size={18} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">{stage.salary}</p>
                          <p className="text-xs text-green-600">{stage.salaryIncrease} increase</p>
                        </div>
                      </div>

                      {/* Skills to gain */}
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                          <Award size={14} />
                          Skills to Gain:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {stage.skills.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Courses */}
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                          <BookOpen size={14} />
                          Recommended Courses:
                        </p>
                        <ul className="space-y-1">
                          {stage.courses.map((course) => (
                            <li key={course} className="text-xs text-gray-600 flex items-center gap-2">
                              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Milestones */}
                      <div>
                        <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                          <TrendingUp size={14} />
                          Key Milestones:
                        </p>
                        <ul className="space-y-1">
                          {stage.keyMilestones.map((milestone) => (
                            <li key={milestone} className="text-xs text-gray-600 flex items-center gap-2">
                              <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full mt-4 h-9 rounded-lg">
                        View Detailed Plan
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparative Analysis */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Path Comparison</h3>
          <p className="text-[#6B7280] text-sm mb-4">Compare different career paths side-by-side</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-sm text-gray-600">Metric</th>
                  <th className="text-center px-2 py-3 text-sm text-gray-600">Current Domain</th>
                  <th className="text-center px-2 py-3 text-sm text-gray-600">Related Field</th>
                  <th className="text-center px-2 py-3 text-sm text-gray-600">Career Change</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison) => (
                  <tr key={comparison.metric} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-sm text-gray-700">{comparison.metric}</td>
                    <td className="text-center px-2 py-3 text-sm">{comparison.current}</td>
                    <td className="text-center px-2 py-3 text-sm">{comparison.related}</td>
                    <td className="text-center px-2 py-3 text-sm">{comparison.switch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <h4 className="text-[#111827] mb-2">Ready to Start?</h4>
          <p className="text-[#6B7280] text-sm mb-4">
            Begin your journey today with personalized guidance and resources.
          </p>
          <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
            Start My {selectedPathData.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
