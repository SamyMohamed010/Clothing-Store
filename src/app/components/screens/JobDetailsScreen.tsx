import { useState } from 'react';
import { ArrowLeft, Share2, Bookmark, MapPin, DollarSign, Clock, ChevronDown, ChevronUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { mockJobs } from '../../lib/mockData';

interface JobDetailsScreenProps {
  jobId: string;
  onBack: () => void;
}

export function JobDetailsScreen({ jobId, onBack }: JobDetailsScreenProps) {
  const job = mockJobs.find((j) => j.id === jobId) || mockJobs[0];
  const [showFullMatch, setShowFullMatch] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Job Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-2xl">
              {job.company[0]}
            </div>
            <div className="flex-1">
              <h2 className="text-gray-900 mb-1">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm text-gray-900">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Salary</p>
                <p className="text-sm text-gray-900">{job.salary}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Job Type</p>
                <p className="text-sm text-gray-900">{job.jobType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-indigo-100 text-indigo-700">{job.workMode}</Badge>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
            Posted {job.postedTime}
          </div>
        </div>

        {/* AI Match Analysis */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">AI Match Analysis</h3>
            <button
              onClick={() => setShowFullMatch(!showFullMatch)}
              className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              {showFullMatch ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-24 h-24">
              <svg className="transform -rotate-90 w-24 h-24">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-indigo-200" />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(job.matchPercentage / 100) * 251.2} 251.2`}
                  className="text-indigo-600 transition-all"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-indigo-600">{job.matchPercentage}%</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-900 mb-2">Overall Match</p>
              <p className="text-sm text-gray-600">
                This position aligns well with your skills and experience
              </p>
            </div>
          </div>

          {showFullMatch && (
            <div className="space-y-3 pt-4 border-t border-indigo-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Skills match</span>
                </div>
                <span className="text-sm text-green-600">90%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Experience match</span>
                </div>
                <span className="text-sm text-green-600">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-700">Salary expectation</span>
                </div>
                <span className="text-sm text-amber-600">80%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Location preference</span>
                </div>
                <span className="text-sm text-green-600">95%</span>
              </div>
            </div>
          )}
        </div>

        {/* Success Predictor */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Success Predictor</h3>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Your chances of getting hired</span>
              <span className="text-green-600">72%</span>
            </div>
            <Progress value={72} className="h-3" />
          </div>
          <p className="text-sm text-gray-600 bg-green-50 rounded-lg p-3">
            Higher than 68% of applicants with similar profiles
          </p>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Job Description</h3>
          <p className="text-gray-700 mb-6">{job.description}</p>

          <h4 className="text-gray-900 mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-gray-900 mb-3">Benefits</h4>
          <div className="flex flex-wrap gap-2">
            {job.benefits.map((benefit, index) => (
              <Badge key={index} variant="secondary" className="bg-indigo-50 text-indigo-700">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Match */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Skills Required vs Your Skills</h3>
          <div className="space-y-4">
            {job.skillsMatch.required.map((skill) => {
              const hasSkill = job.skillsMatch.yourSkills.includes(skill);
              const isMissing = job.skillsMatch.missing.includes(skill);

              return (
                <div key={skill} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{skill}</span>
                    {hasSkill && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    {isMissing && (
                      <button className="text-sm text-indigo-600 hover:text-indigo-700">
                        Learn
                      </button>
                    )}
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        hasSkill ? 'bg-green-500' : isMissing ? 'bg-red-500' : 'bg-amber-500'
                      }`}
                      style={{ width: hasSkill ? '100%' : isMissing ? '0%' : '50%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Similar Profiles */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4">Similar Profiles Who Got Hired</h3>
          <div className="space-y-3">
            {[
              { name: 'Sarah M.', previous: 'Junior Developer', current: 'Frontend Developer', skills: 'React, TypeScript, CSS' },
              { name: 'John D.', previous: 'Web Developer', current: 'Senior Frontend', skills: 'React, Node.js, AWS' },
            ].map((profile, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white">
                  {profile.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{profile.name}</p>
                  <p className="text-xs text-gray-600">
                    {profile.previous} → {profile.current}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Key skills: {profile.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
        <div className="max-w-screen-xl mx-auto flex gap-3">
          <Button variant="outline" className="flex-1">
            Save for Later
          </Button>
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
