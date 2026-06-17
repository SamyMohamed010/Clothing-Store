import { useState } from 'react';
import { Edit2, Download, ChevronRight, Bell, Globe, HelpCircle, LogOut, Award, Briefcase, GraduationCap, FileText, Folder } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  const profileStrength = 75;

  const skills = [
    { name: 'Product Strategy', level: 85 },
    { name: 'Agile/Scrum', level: 90 },
    { name: 'Data Analysis', level: 65 },
    { name: 'Leadership', level: 75 },
    { name: 'User Research', level: 80 },
  ];

  const experience = [
    { title: 'Product Manager', company: 'TechCorp', duration: '2022 - Present', type: 'Full-time' },
    { title: 'Associate PM', company: 'StartupHub', duration: '2020 - 2022', type: 'Full-time' },
  ];

  const education = [
    { degree: 'MBA', institution: 'IBA Karachi', year: '2020' },
    { degree: 'BS Computer Science', institution: 'FAST NUCES', year: '2018' },
  ];

  const certifications = [
    { name: 'Certified Product Manager', issuer: 'Product School', year: '2023' },
    { name: 'Agile Certified Practitioner', issuer: 'PMI', year: '2022' },
    { name: 'Google Analytics', issuer: 'Google', year: '2021' },
  ];

  const projects = [
    { name: 'E-commerce Platform Redesign', description: 'Led complete UX overhaul', impact: '+35% conversion' },
    { name: 'Mobile App Launch', description: 'Product strategy & execution', impact: '100K+ downloads' },
  ];

  const achievements = [
    { icon: '🏆', title: 'Profile Champion', description: 'Completed 100% of profile' },
    { icon: '⭐', title: '5-Day Streak', description: 'Logged in for 5 consecutive days' },
    { icon: '🎯', title: 'Skill Master', description: 'Completed 10 courses' },
    { icon: '🚀', title: 'Early Adopter', description: 'Joined in first month' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      {/* Header with Avatar */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 pt-8 pb-20">
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-white">
              <Edit2 size={14} className="text-white" />
            </button>
          </div>
          <h2 className="text-white mb-1">Sarah Ahmed</h2>
          <p className="text-indigo-100 text-sm mb-2">Product Manager</p>
          <p className="text-indigo-200 text-sm flex items-center gap-1">
            <Globe size={14} />
            Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Profile Strength Card */}
      <div className="px-6 -mt-12 mb-6">
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#111827]">Profile Strength</h3>
            <span className="text-xl text-indigo-600">{profileStrength}%</span>
          </div>
          <Progress value={profileStrength} className="h-3 mb-3" />
          <div className="flex items-start gap-2 text-sm">
            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
            <p className="text-gray-600">Add 3 more skills to reach 100%</p>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {/* Achievements */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-200">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="text-sm text-[#111827] mb-1">{achievement.title}</p>
                <p className="text-xs text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="w-full bg-white rounded-2xl p-5 border border-gray-200 hover:border-indigo-300 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <FileText className="text-indigo-600" size={20} />
              </div>
              <div className="text-left">
                <p className="text-[#111827]">Resume</p>
                <p className="text-sm text-gray-600">resume_final.pdf</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Download size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="text-indigo-600" size={20} />
              <h3 className="text-[#111827]">Skills</h3>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              <Edit2 size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="text-indigo-600" size={20} />
              <h3 className="text-[#111827]">Experience</h3>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              <Edit2 size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  💼
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#111827] mb-1">{exp.title}</p>
                  <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                    <span className="text-xs text-gray-500">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-indigo-600" size={20} />
              <h3 className="text-[#111827]">Education</h3>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              <Edit2 size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  🎓
                </div>
                <div>
                  <p className="text-sm text-[#111827] mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
                  <span className="text-xs text-gray-500">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="text-indigo-600" size={20} />
              <h3 className="text-[#111827]">Certifications</h3>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              <Edit2 size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-[#111827] mb-1">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Portfolio */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Folder className="text-indigo-600" size={20} />
              <h3 className="text-[#111827]">Projects</h3>
            </div>
            <button className="text-indigo-600 text-sm hover:text-indigo-700">
              <Edit2 size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-[#111827] mb-1">{project.name}</p>
                <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    {project.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Settings</h3>
          
          {/* Notifications */}
          <div className="space-y-4 mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="text-gray-600" size={18} />
                <div>
                  <p className="text-sm text-[#111827]">Push Notifications</p>
                  <p className="text-xs text-gray-600">Get notified about new matches</p>
                </div>
              </div>
              <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="text-gray-600" size={18} />
                <div>
                  <p className="text-sm text-[#111827]">Email Alerts</p>
                  <p className="text-xs text-gray-600">Receive job alerts via email</p>
                </div>
              </div>
              <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="text-gray-600" size={18} />
                <div>
                  <p className="text-sm text-[#111827]">Weekly Digest</p>
                  <p className="text-xs text-gray-600">Summary of your activity</p>
                </div>
              </div>
              <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
            </div>
          </div>

          {/* Other Settings */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="text-gray-600" size={18} />
                <span className="text-sm text-[#111827]">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">English</span>
                <ChevronRight className="text-gray-400" size={18} />
              </div>
            </button>
            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="text-gray-600" size={18} />
                <span className="text-sm text-[#111827]">Help & Support</span>
              </div>
              <ChevronRight className="text-gray-400" size={18} />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <Button variant="outline" className="w-full h-12 border-2 border-red-200 text-red-600 hover:bg-red-50 rounded-xl">
          <LogOut size={18} className="mr-2" />
          Logout
        </Button>

        <div className="text-center py-4">
          <p className="text-xs text-gray-500">Career Path v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">Made with ❤️ for job seekers</p>
        </div>
      </div>
    </div>
  );
}