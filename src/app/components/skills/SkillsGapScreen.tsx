import { ArrowLeft, TrendingUp, AlertCircle, CheckCircle, ExternalLink, Clock, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface SkillsGapScreenProps {
  onBack: () => void;
}

export default function SkillsGapScreen({ onBack }: SkillsGapScreenProps) {
  const criticalSkills = [
    {
      name: 'SQL & Database Management',
      demand: 'High',
      currentLevel: 0,
      targetLevel: 75,
      timeToLearn: '6-8 weeks',
      courses: [
        { title: 'Complete SQL Bootcamp', platform: 'Udemy', duration: '9 hours', rating: 4.7, price: '₨ 1,999', discount: '85% off' },
        { title: 'SQL for Data Analysis', platform: 'Coursera', duration: '4 weeks', rating: 4.8, price: 'Free' },
      ]
    },
    {
      name: 'Advanced Data Analysis',
      demand: 'Very High',
      currentLevel: 45,
      targetLevel: 85,
      timeToLearn: '4-6 weeks',
      courses: [
        { title: 'Data Analysis with Python', platform: 'DataCamp', duration: '20 hours', rating: 4.6, price: '₨ 2,499' },
        { title: 'Business Analytics', platform: 'edX', duration: '6 weeks', rating: 4.5, price: '₨ 3,999' },
      ]
    },
  ];

  const skillsToImprove = [
    { name: 'Product Strategy', currentLevel: 65, targetLevel: 90, gap: 25 },
    { name: 'Market Research', currentLevel: 55, targetLevel: 80, gap: 25 },
    { name: 'Stakeholder Management', currentLevel: 70, targetLevel: 85, gap: 15 },
  ];

  const excellentSkills = [
    { name: 'Agile/Scrum', level: 90, demand: 'Very High', jobs: 847 },
    { name: 'Leadership', level: 85, demand: 'High', jobs: 654 },
    { name: 'Product Design', level: 82, demand: 'High', jobs: 523 },
    { name: 'User Research', level: 78, demand: 'Medium', jobs: 412 },
  ];

  const learningPath = [
    { week: 'Week 1-2', task: 'SQL Fundamentals Course', status: 'upcoming' },
    { week: 'Week 3-4', task: 'Database Design Project', status: 'upcoming' },
    { week: 'Week 5-6', task: 'Advanced Queries & Optimization', status: 'upcoming' },
    { week: 'Week 7-8', task: 'SQL Certification Exam', status: 'upcoming' },
  ];

  const getDemandColor = (demand: string) => {
    if (demand === 'Very High') return 'text-green-600 bg-green-50';
    if (demand === 'High') return 'text-amber-600 bg-amber-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-[#111827]">Skills Gap Analysis</h1>
            <p className="text-[#6B7280] text-sm">Identify and close your skill gaps</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Visual Dashboard - Spider Chart Representation */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <h3 className="text-[#111827] mb-4">Your Skills Overview</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-48 h-48">
              {/* Simplified hexagon representation */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background hexagon */}
                <polygon
                  points="100,10 170,50 170,130 100,170 30,130 30,50"
                  fill="#E0E7FF"
                  stroke="#818CF8"
                  strokeWidth="1"
                />
                {/* Skill levels hexagon */}
                <polygon
                  points="100,40 140,60 140,120 100,140 60,120 60,60"
                  fill="#6366F1"
                  fillOpacity="0.3"
                  stroke="#6366F1"
                  strokeWidth="2"
                />
                {/* Labels */}
                <text x="100" y="5" textAnchor="middle" className="text-xs fill-gray-600">Leadership</text>
                <text x="180" y="55" textAnchor="start" className="text-xs fill-gray-600">Agile</text>
                <text x="180" y="135" textAnchor="start" className="text-xs fill-gray-600">Design</text>
                <text x="100" y="195" textAnchor="middle" className="text-xs fill-gray-600">Data</text>
                <text x="20" y="135" textAnchor="end" className="text-xs fill-gray-600">SQL</text>
                <text x="20" y="55" textAnchor="end" className="text-xs fill-gray-600">Strategy</text>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-2xl text-indigo-600">8</p>
              <p className="text-xs text-gray-600">Strong Skills</p>
            </div>
            <div>
              <p className="text-2xl text-amber-600">3</p>
              <p className="text-xs text-gray-600">To Improve</p>
            </div>
            <div>
              <p className="text-2xl text-red-600">2</p>
              <p className="text-xs text-gray-600">Critical Gaps</p>
            </div>
          </div>
        </div>

        {/* Tabs for different skill categories */}
        <Tabs defaultValue="critical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="critical">Critical Gaps</TabsTrigger>
            <TabsTrigger value="improve">Improve</TabsTrigger>
            <TabsTrigger value="excellent">Excel At</TabsTrigger>
          </TabsList>

          {/* Critical Skills Missing */}
          <TabsContent value="critical" className="space-y-4">
            {criticalSkills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-red-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[#111827]">{skill.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs ${getDemandColor(skill.demand)}`}>
                        {skill.demand} Demand
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Your Level</span>
                        <span className="text-gray-600">Target Level</span>
                      </div>
                      <Progress value={(skill.currentLevel / skill.targetLevel) * 100} className="h-2 mb-1" />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{skill.currentLevel}%</span>
                        <span>{skill.targetLevel}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>Time to learn: {skill.timeToLearn}</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Courses */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">Recommended Courses:</p>
                  {skill.courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-sm text-[#111827] mb-1">{course.title}</p>
                          <p className="text-xs text-gray-600 mb-2">{course.platform} • {course.duration}</p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Star size={12} className="text-amber-500 fill-amber-500" />
                              <span className="text-xs text-gray-600">{course.rating}</span>
                            </div>
                            <span className="text-sm text-indigo-600">{course.price}</span>
                            {course.discount && (
                              <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                {course.discount}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg mt-2">
                        Enroll Now
                        <ExternalLink size={14} className="ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Skills to Improve */}
          <TabsContent value="improve" className="space-y-4">
            {skillsToImprove.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-5 border border-amber-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[#111827]">{skill.name}</h4>
                  <span className="text-sm text-amber-600">{skill.gap}% gap</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Current Level</span>
                      <span>{skill.currentLevel}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500"
                        style={{ width: `${skill.currentLevel}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Target Level</span>
                      <span>{skill.targetLevel}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${skill.targetLevel}%` }}
                      />
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full h-9 rounded-lg mt-3">
                  View Learning Path
                </Button>
              </div>
            ))}
          </TabsContent>

          {/* Skills You Excel At */}
          <TabsContent value="excellent" className="space-y-4">
            {excellentSkills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-5 border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[#111827]">{skill.name}</h4>
                      <span className="text-lg text-green-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 mb-3" />
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded text-xs ${getDemandColor(skill.demand)}`}>
                        {skill.demand} Demand
                      </span>
                      <span className="text-xs text-gray-600">{skill.jobs} jobs require this</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Personalized Learning Path */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Your Personalized Learning Path</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-4">
              {learningPath.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 border-4 border-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-indigo-600 mb-1">{milestone.week}</p>
                    <p className="text-[#111827]">{milestone.task}</p>
                    <Button variant="ghost" size="sm" className="mt-2 h-8 text-xs">
                      Start Learning →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
