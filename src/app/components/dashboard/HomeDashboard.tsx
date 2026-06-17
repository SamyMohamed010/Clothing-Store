import { useState } from 'react';
import { Bell, Search, TrendingUp, Award, Target, Briefcase, BookOpen, LineChart, Map, MessageSquare } from 'lucide-react';
import { Screen } from '../../App';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Progress } from '../ui/progress';
import CareerHealthScore from './CareerHealthScore';
import QuickActions from './QuickActions';
import JobCard from './JobCard';

interface HomeDashboardProps {
  onNavigate: (screen: Screen, jobId?: string) => void;
}

const mockJobs = [
  {
    id: '1',
    title: 'Senior Product Manager',
    company: 'TechCorp',
    logo: '🚀',
    location: 'Karachi',
    workMode: 'Remote',
    matchPercentage: 87,
    salary: '₨ 250,000 - 350,000',
    postedTime: '2 hours ago',
    tags: ['Product Strategy', 'Leadership', 'Agile']
  },
  {
    id: '2',
    title: 'UX Design Lead',
    company: 'DesignStudio',
    logo: '🎨',
    location: 'Lahore',
    workMode: 'Hybrid',
    matchPercentage: 92,
    salary: '₨ 200,000 - 300,000',
    postedTime: '5 hours ago',
    tags: ['UI/UX', 'Figma', 'User Research']
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'StartupHub',
    logo: '💻',
    location: 'Islamabad',
    workMode: 'Office',
    matchPercentage: 78,
    salary: '₨ 150,000 - 250,000',
    postedTime: '1 day ago',
    tags: ['React', 'Node.js', 'TypeScript']
  }
];

export default function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">👤</span>
            </div>
            <div>
              <p className="text-[#111827]">Welcome back,</p>
              <p className="text-[#111827]">Sarah Ahmed</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('notifications')}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell className="text-gray-600" size={24} />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs, skills, companies..."
            className="pl-12 h-12 rounded-xl bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      <div className="px-6 py-4 space-y-6">
        {/* Career Health Score */}
        <CareerHealthScore onNavigate={onNavigate} />

        {/* Quick Actions */}
        <QuickActions onNavigate={onNavigate} />

        {/* Job Recommendations */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[#111827]">Top Matches Today</h2>
              <p className="text-[#6B7280] text-sm">Based on your profile and preferences</p>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              See All
            </button>
          </div>

          <div className="space-y-4">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} onNavigate={onNavigate} />
            ))}
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-[#111827] mb-1">🎉 Profile Milestone!</p>
              <p className="text-[#6B7280] text-sm mb-3">You've completed your career roadmap! Keep up the momentum.</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-amber-500 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-[#6B7280] text-xs">Join 1,234 others this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
