import { Search, SlidersHorizontal, Bookmark, Share2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { mockJobs } from '../../lib/mockData';

interface JobsScreenProps {
  onJobClick: (jobId: string) => void;
}

export function JobsScreen({ onJobClick }: JobsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-gray-900 mb-4">All Jobs</h2>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="w-12 h-12 rounded-xl border border-gray-300 hover:bg-gray-50 flex items-center justify-center flex-shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {['All Jobs', 'Remote', 'Full-time', 'High Match', 'New', 'Saved'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0 ${
                filter === 'All Jobs'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs List */}
      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <p className="text-sm text-gray-600 mb-4">{mockJobs.length} jobs found</p>
        
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => onJobClick(job.id)}
            >
              <div className="flex gap-4">
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
  );
}
