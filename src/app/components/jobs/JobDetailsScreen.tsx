import { useState } from 'react';
import { ArrowLeft, Share2, Bookmark, MapPin, DollarSign, Clock, Briefcase, ChevronDown, ChevronUp, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

interface JobDetailsScreenProps {
  jobId: string | null;
  onBack: () => void;
}

export default function JobDetailsScreen({ jobId, onBack }: JobDetailsScreenProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showMatchAnalysis, setShowMatchAnalysis] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showSkillsComparison, setShowSkillsComparison] = useState(true);

  const jobData = {
    title: 'Senior Product Manager',
    company: 'TechCorp Solutions',
    logo: '🚀',
    location: 'Karachi, Pakistan',
    salary: '₨ 250,000 - 350,000',
    jobType: ['Remote', 'Full-time'],
    postedDate: '2 days ago',
    applicants: 47,
    matchPercentage: 87,
    successProbability: 72,
    betterThan: 68
  };

  const matchBreakdown = [
    { label: 'Skills Match', value: 90, status: 'excellent' },
    { label: 'Experience Match', value: 85, status: 'excellent' },
    { label: 'Salary Expectation', value: 80, status: 'good' },
    { label: 'Location Preference', value: 95, status: 'excellent' },
  ];

  const requiredSkills = [
    { name: 'Product Strategy', yourLevel: 85, required: 80, status: 'have' },
    { name: 'Agile/Scrum', yourLevel: 90, required: 85, status: 'have' },
    { name: 'Data Analysis', yourLevel: 60, required: 75, status: 'partial' },
    { name: 'SQL', yourLevel: 0, required: 60, status: 'missing' },
    { name: 'Leadership', yourLevel: 75, required: 70, status: 'have' },
  ];

  const similarProfiles = [
    { name: 'Anonymous A', previousRole: 'PM at Startup', currentRole: 'Senior PM at TechCorp', keySkills: ['Product Strategy', 'Data Analysis', 'Leadership'] },
    { name: 'Anonymous B', previousRole: 'Associate PM', currentRole: 'PM at TechCorp', keySkills: ['Agile', 'Product Design', 'Analytics'] },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'excellent') return 'text-green-600';
    if (status === 'good') return 'text-amber-600';
    return 'text-gray-600';
  };

  const getSkillColor = (status: string) => {
    if (status === 'have') return 'bg-green-500';
    if (status === 'partial') return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Bookmark
                size={20}
                className={isBookmarked ? 'text-indigo-600 fill-indigo-600' : 'text-gray-600'}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 pb-32 space-y-4">
        {/* Job Info Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              {jobData.logo}
            </div>
            <div className="flex-1">
              <h1 className="text-[#111827] mb-2">{jobData.title}</h1>
              <p className="text-[#6B7280] mb-2">{jobData.company}</p>
              <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                <MapPin size={16} />
                <span>{jobData.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-[#111827]">
              <DollarSign size={18} className="text-gray-400" />
              <span>{jobData.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              {jobData.jobType.map((type) => (
                <span key={type} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm">
                  {type}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-[#6B7280] text-sm">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                Posted {jobData.postedDate}
              </span>
              <span>{jobData.applicants} applicants</span>
            </div>
          </div>
        </div>

        {/* AI Match Analysis */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <button
            onClick={() => setShowMatchAnalysis(!showMatchAnalysis)}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-[#111827]">AI Match Analysis</h3>
            {showMatchAnalysis ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showMatchAnalysis && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#10B981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(jobData.matchPercentage / 100) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-green-600">{jobData.matchPercentage}%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#111827] mb-1">Excellent Match!</p>
                  <p className="text-[#6B7280] text-sm">
                    This role aligns perfectly with your skills and career goals.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {matchBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#6B7280]">{item.label}</span>
                      <span className={`text-sm ${getStatusColor(item.status)}`}>
                        {item.value}% ✓
                      </span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-[#111827] text-sm mb-2">💡 What's missing?</p>
                <p className="text-[#6B7280] text-sm">
                  Improve your SQL skills to increase your match to 95%
                </p>
              </div>
            </>
          )}
        </div>

        {/* Success Predictor */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
            </div>
            <div>
              <p className="text-[#111827] mb-1">
                Your chances of getting hired: <span className="text-green-600">{jobData.successProbability}%</span>
              </p>
              <p className="text-[#6B7280] text-sm">
                Higher than {jobData.betterThan}% of applicants
              </p>
            </div>
          </div>
          <button className="text-green-600 text-sm hover:text-green-700">
            Tips to improve chances →
          </button>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-[#111827]">Job Description</h3>
            {showDescription ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showDescription && (
            <div className="space-y-4 text-[#6B7280]">
              <div>
                <h4 className="text-[#111827] mb-2">Role Overview</h4>
                <p className="text-sm">
                  We're looking for an experienced Product Manager to lead our core product initiatives and drive strategic decisions.
                </p>
              </div>
              <div>
                <h4 className="text-[#111827] mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Define product vision and roadmap</li>
                  <li>Lead cross-functional teams</li>
                  <li>Analyze market trends and user feedback</li>
                  <li>Drive product launches and iterations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#111827] mb-2">Benefits</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Health insurance</li>
                  <li>Flexible working hours</li>
                  <li>Learning & development budget</li>
                  <li>Remote work options</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Skills Comparison */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <button
            onClick={() => setShowSkillsComparison(!showSkillsComparison)}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-[#111827]">Skills: You vs Required</h3>
            {showSkillsComparison ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showSkillsComparison && (
            <div className="space-y-4">
              {requiredSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#111827]">{skill.name}</span>
                    {skill.status === 'missing' && (
                      <button className="text-xs text-indigo-600 hover:text-indigo-700">
                        Learn →
                      </button>
                    )}
                  </div>
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full ${getSkillColor(skill.status)} transition-all`}
                      style={{ width: `${skill.yourLevel}%` }}
                    />
                    <div className="absolute left-0 top-0 w-full h-full border-2 border-gray-300 rounded-full" style={{ clipPath: `inset(0 ${100 - skill.required}% 0 0)` }} />
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs text-[#6B7280]">
                    <span>Your level: {skill.yourLevel}%</span>
                    <span>Required: {skill.required}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Similar Profiles */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Similar Profiles Who Got Hired</h3>
          <div className="space-y-4">
            {similarProfiles.map((profile, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {profile.name.charAt(profile.name.length - 1)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#111827] mb-1">{profile.name}</p>
                  <p className="text-xs text-[#6B7280] mb-2">
                    {profile.previousRole} → {profile.currentRole}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {profile.keySkills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white text-[#6B7280] text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-3">
        <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
          Apply Now
          <ExternalLink size={18} className="ml-2" />
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-10 rounded-xl">
            Save for Later
          </Button>
          <Button variant="ghost" className="flex-1 h-10">
            Not Interested
          </Button>
        </div>
      </div>
    </div>
  );
}
