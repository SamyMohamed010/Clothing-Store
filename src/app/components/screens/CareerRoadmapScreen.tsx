import { useState } from 'react';
import { ArrowLeft, TrendingUp, DollarSign, Clock, Heart, Users, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { careerRoadmapData } from '../../lib/mockData';

interface CareerRoadmapScreenProps {
  onBack: () => void;
}

export function CareerRoadmapScreen({ onBack }: CareerRoadmapScreenProps) {
  const [selectedPath, setSelectedPath] = useState(careerRoadmapData.paths[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h2 className="text-gray-900">Career Roadmap</h2>
            <p className="text-sm text-gray-600">Plan your career journey</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Current Position */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900">Current Position</h3>
              <p className="text-sm text-gray-600">{careerRoadmapData.current.role}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Experience</p>
              <p className="text-gray-900">{careerRoadmapData.current.experience}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Key Skills</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {careerRoadmapData.current.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-700 text-xs">
                    {skill}
                  </Badge>
                ))}
                {careerRoadmapData.current.skills.length > 3 && (
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                    +{careerRoadmapData.current.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Path Selector */}
        <div>
          <h3 className="text-gray-900 mb-4">Choose Your Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerRoadmapData.paths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path)}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${
                  selectedPath.id === path.id
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-gray-900">{path.name}</h4>
                  {selectedPath.id === path.id && (
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {path.milestones.length} milestones • {path.comparison.timeInvestment}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-gray-500">Salary Growth</p>
                    <p className="text-green-600">{path.comparison.salaryGrowth}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-gray-500">Market Demand</p>
                    <p className="text-indigo-600">{path.comparison.marketDemand}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Roadmap */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-6">Your Journey: {selectedPath.name}</h3>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-green-500"></div>
            
            <div className="space-y-8">
              {selectedPath.milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-6">
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1 pb-8">
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <Badge className="bg-indigo-600 text-white mb-2">
                              {milestone.timeframe}
                            </Badge>
                            <h4 className="text-gray-900">{milestone.role}</h4>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Expected Increase</p>
                            <p className="text-green-600">{milestone.salaryJump}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Skills to Gain</p>
                            <div className="flex flex-wrap gap-2">
                              {milestone.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-white text-gray-700">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-gray-600 mb-2">Recommended Courses</p>
                            <div className="flex flex-wrap gap-2">
                              {milestone.courses.map((course) => (
                                <Badge key={course} variant="secondary" className="bg-purple-50 text-purple-700">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                          Start This Phase
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparative Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-6">Path Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerRoadmapData.paths.map((path) => (
              <div
                key={path.id}
                className={`p-6 rounded-xl border-2 ${
                  selectedPath.id === path.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
                }`}
              >
                <h4 className="text-gray-900 mb-4">{path.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Time Investment</span>
                    </div>
                    <span className="text-sm text-gray-900">{path.comparison.timeInvestment}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Salary Growth</span>
                    </div>
                    <span className="text-sm text-green-600">{path.comparison.salaryGrowth}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Job Satisfaction</span>
                    </div>
                    <span className="text-sm text-gray-900">{path.comparison.jobSatisfaction}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Market Demand</span>
                    </div>
                    <span className="text-sm text-indigo-600">{path.comparison.marketDemand}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Work-Life Balance</span>
                    </div>
                    <span className="text-sm text-gray-900">{path.comparison.workLifeBalance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
