import { ArrowLeft, TrendingUp, BookOpen, Clock, Star, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { skillsGapData, learningPath } from '../../lib/mockData';

interface SkillsGapAnalysisProps {
  onBack: () => void;
}

export function SkillsGapAnalysis({ onBack }: SkillsGapAnalysisProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h2 className="text-gray-900">Skills Gap Analysis</h2>
            <p className="text-sm text-gray-600">Personalized learning roadmap</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Visual Dashboard */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-6">Skills Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-2xl text-gray-900">2</span>
              </div>
              <p className="text-sm text-gray-600">Critical Skills Missing</p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-2xl text-gray-900">3</span>
              </div>
              <p className="text-sm text-gray-600">Skills to Improve</p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-2xl text-gray-900">3</span>
              </div>
              <p className="text-sm text-gray-600">Skills You Excel At</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="critical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="improve">To Improve</TabsTrigger>
            <TabsTrigger value="excellent">Excellent</TabsTrigger>
          </TabsList>

          {/* Critical Skills Missing */}
          <TabsContent value="critical" className="space-y-4">
            {skillsGapData.critical.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 mb-1">{skill.name}</h4>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-red-100 text-red-700">Critical</Badge>
                      <Badge className="bg-green-100 text-green-700">Demand: {skill.demand}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{skill.timeToLearn}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-gray-700">Recommended Courses:</p>
                  {skill.courses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{course.name}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{course.platform}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                            <span>{course.rating}</span>
                          </div>
                          <span>•</span>
                          <span className="text-green-600">{course.price}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white ml-4">
                        Enroll
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Skills to Improve */}
          <TabsContent value="improve" className="space-y-4">
            {skillsGapData.toImprove.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
                <div className="mb-4">
                  <h4 className="text-gray-900 mb-3">{skill.name}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Current Level</span>
                      <span className="text-gray-900">{skill.currentLevel}%</span>
                    </div>
                    <Progress value={skill.currentLevel} className="h-2 bg-gray-200" />
                    
                    <div className="flex items-center justify-between text-sm mt-4">
                      <span className="text-gray-600">Target Level</span>
                      <span className="text-indigo-600">{skill.targetLevel}%</span>
                    </div>
                    <Progress value={skill.targetLevel} className="h-2 bg-indigo-100" indicatorClassName="bg-indigo-600" />
                    
                    <div className="flex items-center justify-between text-sm mt-4 p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700">Gap to close</span>
                      <span className="text-amber-700">{skill.gap}%</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Start Learning
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </TabsContent>

          {/* Skills You Excel At */}
          <TabsContent value="excellent" className="space-y-4">
            {skillsGapData.excellent.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">{skill.name}</h4>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-100 text-green-700">Expert Level</Badge>
                      <Badge className="bg-blue-100 text-blue-700">Demand: {skill.demand}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      {skill.jobCount.toLocaleString()} jobs requiring this skill
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600 fill-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Personalized Learning Path */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-6">Your Personalized Learning Path</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-6">
              {learningPath.map((milestone, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-indigo-600">Week {milestone.week}</span>
                      <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 text-xs">
                        {milestone.type}
                      </Badge>
                    </div>
                    <p className="text-gray-900">{milestone.title}</p>
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
