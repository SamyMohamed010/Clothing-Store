import { Search, Bell, Target, Briefcase, BookOpen, DollarSign, Map, ChevronRight, Bookmark, Share2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { mockJobs, careerHealthData } from '../../lib/mockData';
import type { Screen } from '../MainApp';

interface HomeDashboardProps {
  userData: any;
  onNavigate: (screen: Screen) => void;
  onJobClick: (jobId: string) => void;
}

export function HomeDashboard({ userData, onNavigate, onJobClick }: HomeDashboardProps) {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-indigo-600 text-white">
              {userData.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <button
            onClick={() => onNavigate('notifications')}
            className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 bg-white">
        <div className="max-w-screen-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Career Health Score */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Career Health Score</h3>
            <button
              onClick={() => onNavigate('skills-gap')}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Improve Score
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(careerHealthData.overallScore / 100) * 351.86} 351.86`}
                  className="transition-all duration-1000"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="text-indigo-600" stopColor="currentColor" />
                    <stop offset="100%" className="text-green-500" stopColor="currentColor" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-3xl ${getScoreColor(careerHealthData.overallScore)}`}>
                  {careerHealthData.overallScore}
                </span>
              </div>
            </div>

            {/* Sub-metrics */}
            <div className="grid grid-cols-3 gap-4 flex-1 w-full">
              <div className="bg-indigo-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Skills Match</p>
                <p className={`text-2xl ${getScoreColor(careerHealthData.skillsMatch)}`}>
                  {careerHealthData.skillsMatch}%
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Market Demand</p>
                <p className={`text-2xl ${getScoreColor(careerHealthData.marketDemand)}`}>
                  {careerHealthData.marketDemand}%
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Profile Strength</p>
                <p className={`text-2xl ${getScoreColor(careerHealthData.profileStrength)}`}>
                  {careerHealthData.profileStrength}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => onNavigate('jobs')}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] relative"
            >
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                12
              </div>
              <Briefcase className="w-8 h-8 text-indigo-600 mb-2" />
              <p className="text-sm text-gray-900">New Jobs for You</p>
            </button>

            <button
              onClick={() => onNavigate('skills-gap')}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px]"
            >
              <Target className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-sm text-gray-900">Skills Gap Analysis</p>
            </button>

            <button
              onClick={() => onNavigate('interview-prep')}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px]"
            >
              <BookOpen className="w-8 h-8 text-purple-600 mb-2" />
              <p className="text-sm text-gray-900">Interview Prep</p>
            </button>

            <button
              onClick={() => onNavigate('insights')}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px]"
            >
              <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
              <p className="text-sm text-gray-900">Salary Insights</p>
            </button>

            <button
              onClick={() => onNavigate('career-roadmap')}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px]"
            >
              <Map className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-sm text-gray-900">Career Roadmap</p>
            </button>
          </div>
        </div>

        {/* Job Recommendations */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Top Matches Today</h3>
            <button
              onClick={() => onNavigate('jobs')}
              className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              See All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => onJobClick(job.id)}
              >
                <div className="flex gap-4">
                  {/* Company Logo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white">
                    {job.company[0]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 truncate">{job.title}</h4>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                          job.matchPercentage >= 85 ? 'bg-green-100' : 'bg-amber-100'
                        }`}>
                          <span className={`text-sm ${
                            job.matchPercentage >= 85 ? 'text-green-600' : 'text-amber-600'
                          }`}>
                            {job.matchPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {job.location}
                      </Badge>
                      <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 text-xs">
                        {job.workMode}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                        {job.salary}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{job.postedTime}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                        >
                          <Bookmark className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                        >
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
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
