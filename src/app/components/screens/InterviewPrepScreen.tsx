import { ArrowLeft, Play, Clock, CheckCircle, ChevronRight, MessageSquare, Code, Users, Building } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { interviewPrepData } from '../../lib/mockData';

interface InterviewPrepScreenProps {
  onBack: () => void;
}

export function InterviewPrepScreen({ onBack }: InterviewPrepScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h2 className="text-gray-900">Interview Prep</h2>
            <p className="text-sm text-gray-600">Practice and prepare</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Mock Interview Feature */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-white mb-2">AI Mock Interview</h3>
              <p className="text-indigo-100">Practice with our AI interviewer and get instant feedback</p>
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
              <Play className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur">
              <p className="text-2xl mb-1">5</p>
              <p className="text-sm text-indigo-100">Sessions Done</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur">
              <p className="text-2xl mb-1">78%</p>
              <p className="text-sm text-indigo-100">Avg Score</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur">
              <p className="text-2xl mb-1">2.5h</p>
              <p className="text-sm text-indigo-100">Total Time</p>
            </div>
          </div>

          <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100 h-12">
            <Play className="w-5 h-5 mr-2" />
            Start New Mock Interview
          </Button>
        </div>

        {/* Past Practice Sessions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Past Practice Sessions</h3>
          <div className="space-y-3">
            {[
              { date: 'Nov 18, 2024', duration: '25 min', score: 82, improved: 'Technical Skills' },
              { date: 'Nov 15, 2024', duration: '30 min', score: 75, improved: 'Communication' },
              { date: 'Nov 12, 2024', duration: '20 min', score: 78, improved: 'Problem Solving' },
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">{session.date}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </span>
                      <span>•</span>
                      <span className="text-green-600">Score: {session.score}%</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-700 mb-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Improved
                  </Badge>
                  <p className="text-xs text-gray-600">{session.improved}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Content Tabs */}
        <Tabs defaultValue="common" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="common">Common</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
          </TabsList>

          {/* Common Questions */}
          <TabsContent value="common" className="space-y-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Common Interview Questions</h3>
              <div className="space-y-3">
                {interviewPrepData.commonQuestions.map((question, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-5 h-5 text-indigo-600" />
                          <span className="text-sm text-gray-900">{question}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Practice
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Technical Focus */}
          <TabsContent value="technical" className="space-y-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Technical Round Focus Areas</h3>
              <div className="space-y-3">
                {interviewPrepData.technicalFocus.map((topic, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Code className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-900">{topic}</span>
                      </div>
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Behavioral Questions */}
          <TabsContent value="behavioral" className="space-y-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Behavioral Questions</h3>
              <div className="space-y-3">
                {interviewPrepData.behavioralQuestions.map((question, index) => (
                  <div key={index} className="p-4 bg-amber-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-gray-900">{question}</span>
                      </div>
                      <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4">
                        Prepare
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Company Insights */}
          <TabsContent value="company" className="space-y-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">TechCorp Inc.</h3>
                  <p className="text-sm text-gray-600">Company Insights</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-900 mb-2">Culture</h4>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-4">{interviewPrepData.companyInsights.culture}</p>
                </div>

                <div>
                  <h4 className="text-gray-900 mb-3">Core Values</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {interviewPrepData.companyInsights.values.map((value) => (
                      <div key={value} className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {interviewPrepData.companyInsights.techStack.map((tech) => (
                      <Badge key={tech} className="bg-purple-100 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-900 mb-2">Interview Process</h4>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-4">{interviewPrepData.companyInsights.interviewProcess}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
