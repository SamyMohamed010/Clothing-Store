import { useState } from 'react';
import { MapPin, Bookmark, Share2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Screen } from '../../App';
import { Button } from '../ui/button';

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  workMode: string;
  matchPercentage: number;
  salary: string;
  postedTime: string;
  tags: string[];
}

interface JobCardProps {
  job: Job;
  onNavigate: (screen: Screen, jobId: string) => void;
}

export default function JobCard({ job, onNavigate }: JobCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showMatchDetails, setShowMatchDetails] = useState(false);

  const getMatchColor = (percentage: number) => {
    if (percentage >= 85) return 'bg-green-500';
    if (percentage >= 70) return 'bg-amber-500';
    return 'bg-gray-400';
  };

  const matchReasons = [
    '✓ Skills match 90%',
    '✓ Salary meets expectations',
    '✓ Preferred location',
    '✓ Remote work available'
  ];

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-3">
        {/* Company Logo */}
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
          {job.logo}
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-[#111827] mb-1 truncate">{job.title}</h4>
          <p className="text-[#6B7280] text-sm mb-2">{job.company}</p>
          <div className="flex items-center gap-2 text-[#6B7280] text-xs">
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{job.location}</span>
            </div>
            <span>•</span>
            <span>{job.workMode}</span>
          </div>
        </div>

        {/* Match Badge */}
        <div className={`${getMatchColor(job.matchPercentage)} text-white px-3 py-1 rounded-full text-sm flex-shrink-0`}>
          {job.matchPercentage}%
        </div>
      </div>

      {/* Salary and Time */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[#111827]">{job.salary}</p>
        <p className="text-[#6B7280] text-xs">{job.postedTime}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {job.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-[#6B7280] text-xs rounded-lg">
            {tag}
          </span>
        ))}
      </div>

      {/* Why this match */}
      <button
        onClick={() => setShowMatchDetails(!showMatchDetails)}
        className="flex items-center gap-1 text-indigo-600 text-sm mb-3 hover:text-indigo-700"
      >
        <span>Why this match?</span>
        {showMatchDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {showMatchDetails && (
        <div className="bg-indigo-50 rounded-xl p-3 mb-3 space-y-1">
          {matchReasons.map((reason, index) => (
            <p key={index} className="text-indigo-700 text-sm">{reason}</p>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onNavigate('job-details', job.id)}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white h-10 rounded-xl"
        >
          View Details
          <ExternalLink size={16} className="ml-2" />
        </Button>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            isBookmarked 
              ? 'bg-indigo-100 text-indigo-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
        <button className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}
