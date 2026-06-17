import { useState } from 'react';
import { ArrowLeft, Play, Clock, TrendingUp, MessageSquare, FileText, Video, Award, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

interface InterviewPrepScreenProps {
  onBack: () => void;
}

export default function InterviewPrepScreen({ onBack }: InterviewPrepScreenProps) {
  const [selectedJob, setSelectedJob] = useState('TechCorp - Senior PM');

  const pastSessions = [
    { date: '2024-11-18', duration: '45 min', score: 85, areasImproved: ['Communication', 'Problem Solving'] },
    { date: '2024-11-15', duration: '30 min', score: 78, areasImproved: ['Technical Knowledge'] },
    { date: '2024-11-10', duration: '60 min', score: 92, areasImproved: ['Behavioral Questions', 'Leadership'] },
  ];

  const questionsByCategory = {
    behavioral: [
      { question: 'Tell me about a time when you had to deal with a difficult stakeholder', difficulty: 'Medium', practiced: true },
      { question: 'Describe a situation where you had to make a decision with incomplete information', difficulty: 'Hard', practiced: false },
      { question: 'How do you prioritize competing product features?', difficulty: 'Medium', practiced: true },
      { question: 'Tell me about your biggest product failure and what you learned', difficulty: 'Hard', practiced: false },
    ],
    technical: [
      { question: 'How would you calculate the market size for a new product?', difficulty: 'Medium', practiced: false },
      { question: 'Explain how you would design a recommendation system', difficulty: 'Hard', practiced: true },
      { question: 'What metrics would you track for a social media app?', difficulty: 'Easy', practiced: true },
      { question: 'How do you conduct A/B testing?', difficulty: 'Medium', practiced: false },
    ],
    company: [
      { question: 'Why do you want to work at TechCorp?', difficulty: 'Easy', practiced: true },
      { question: 'What do you know about our product portfolio?', difficulty: 'Medium', practiced: false },
      { question: 'How would you improve our flagship product?', difficulty: 'Hard', practiced: false },
      { question: 'What challenges do you think we face in the market?', difficulty: 'Medium', practiced: false },
    ],
  };

  const companyInsights = [
    { category: 'Culture', insight: 'Values innovation and data-driven decision making' },
    { category: 'Interview Process', insight: '4 rounds: Screening, Technical, Product, Final' },
    { category: 'Key Focus Areas', insight: 'Product strategy, User empathy, Cross-functional collaboration' },
    { category: 'Common Feedback', insight: 'Be prepared to discuss metrics and past product launches' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'Easy') return 'bg-green-100 text-green-700';
    if (difficulty === 'Medium') return 'bg-amber-100 text-amber-700';
    return 'bg-red-100 text-red-700';
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
            <h1 className="text-[#111827]">Interview Preparation</h1>
            <p className="text-[#6B7280] text-sm">Practice and ace your interviews</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Job Selection */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <label className="text-sm text-gray-600 mb-2 block">Preparing for:</label>
          <select
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 text-[#111827] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>TechCorp - Senior PM</option>
            <option>DesignStudio - UX Lead</option>
            <option>StartupHub - Software Engineer</option>
          </select>
        </div>

        {/* Mock Interview CTA */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Video size={28} />
            </div>
            <div>
              <h3 className="text-white mb-2">AI Mock Interview</h3>
              <p className="text-white/90 text-sm mb-3">
                Practice with our AI interviewer and get real-time feedback on your answers
              </p>
              <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  30-60 min
                </span>
                <span>•</span>
                <span>Instant Feedback</span>
                <span>•</span>
                <span>Record & Review</span>
              </div>
            </div>
          </div>
          <Button className="w-full h-12 bg-white text-indigo-600 hover:bg-white/90 rounded-xl">
            <Play size={20} className="mr-2" />
            Start AI Interview
          </Button>
        </div>

        {/* Past Practice Sessions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Your Progress</h3>
          <div className="space-y-3">
            {pastSessions.map((session, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{session.date}</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-green-600" size={16} />
                      <span className="text-green-600">{session.score}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Clock size={12} />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {session.areasImproved.map((area) => (
                      <Badge key={area} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0">
                  Review
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture Insights */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Company Culture Insights</h3>
          <div className="space-y-3">
            {companyInsights.map((item, index) => (
              <div key={index} className="flex gap-3 p-3 bg-indigo-50 rounded-xl">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-indigo-600 mb-1">{item.category}</p>
                  <p className="text-sm text-gray-700">{item.insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Questions Bank */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#111827]">Practice Questions</h3>
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="behavioral" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>

            <TabsContent value="behavioral" className="space-y-3">
              {questionsByCategory.behavioral.map((q, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${q.practiced ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-sm text-[#111827] flex-1 pr-3">{q.question}</p>
                    <Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant={q.practiced ? "outline" : "default"} className="flex-1">
                      <MessageSquare size={14} className="mr-2" />
                      {q.practiced ? 'Practice Again' : 'Practice Answer'}
                    </Button>
                    <Button size="sm" variant="ghost">
                      <FileText size={14} className="mr-2" />
                      Sample
                    </Button>
                  </div>
                  {q.practiced && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                      <Award size={12} />
                      <span>Practiced • Score: 85%</span>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="technical" className="space-y-3">
              {questionsByCategory.technical.map((q, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${q.practiced ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-sm text-[#111827] flex-1 pr-3">{q.question}</p>
                    <Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant={q.practiced ? "outline" : "default"} className="flex-1">
                      <MessageSquare size={14} className="mr-2" />
                      {q.practiced ? 'Practice Again' : 'Practice Answer'}
                    </Button>
                    <Button size="sm" variant="ghost">
                      <FileText size={14} className="mr-2" />
                      Sample
                    </Button>
                  </div>
                  {q.practiced && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                      <Award size={12} />
                      <span>Practiced • Score: 88%</span>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="company" className="space-y-3">
              {questionsByCategory.company.map((q, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${q.practiced ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-sm text-[#111827] flex-1 pr-3">{q.question}</p>
                    <Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant={q.practiced ? "outline" : "default"} className="flex-1">
                      <MessageSquare size={14} className="mr-2" />
                      {q.practiced ? 'Practice Again' : 'Practice Answer'}
                    </Button>
                    <Button size="sm" variant="ghost">
                      <FileText size={14} className="mr-2" />
                      Sample
                    </Button>
                  </div>
                  {q.practiced && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                      <Award size={12} />
                      <span>Practiced • Score: 90%</span>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
