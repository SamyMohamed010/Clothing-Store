import { Edit, Download, Mail, MapPin, Briefcase, GraduationCap, Award, FileText, Settings, Bell, Shield, Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Switch } from '../ui/switch';

interface ProfileScreenProps {
  userData: any;
}

export function ProfileScreen({ userData }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <h2 className="text-gray-900">Profile</h2>
          <Button variant="ghost" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl">
                {userData.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-gray-900 mb-1">{userData.name}</h2>
              <p className="text-gray-600 mb-4">{userData.role}</p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 min-w-[200px]">
              <p className="text-sm text-gray-600 mb-2">Profile Strength</p>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-3xl text-indigo-600">75%</span>
                <span className="text-sm text-gray-600 mb-1">Complete</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-gray-600 mt-2">Add 3 more skills to reach 100%</p>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h3 className="text-gray-900">Skills</h3>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'TypeScript', 'JavaScript', 'CSS/Tailwind', 'Node.js', 'Git', 'REST APIs', 'Responsive Design'].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-indigo-50 text-indigo-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h3 className="text-gray-900">Experience</h3>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900">Frontend Developer</p>
                <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
                <p className="text-sm text-gray-500">2021 - Present • 3 years</p>
              </div>
              <div>
                <p className="text-gray-900">Junior Developer</p>
                <p className="text-sm text-gray-600">StartupXYZ</p>
                <p className="text-sm text-gray-500">2019 - 2021 • 2 years</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                <h3 className="text-gray-900">Education</h3>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <p className="text-gray-900">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-gray-600">University of California</p>
              <p className="text-sm text-gray-500">2015 - 2019</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="text-gray-900">Certifications</h3>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-900">React Developer Certification</p>
                  <p className="text-sm text-gray-600">Meta • 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-900">AWS Cloud Practitioner</p>
                  <p className="text-sm text-gray-600">Amazon • 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-gray-900">Settings</h3>
          </div>

          <div className="divide-y divide-gray-200">
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <p className="text-gray-900">Notifications</p>
                  <p className="text-sm text-gray-600">Manage notification preferences</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <p className="text-gray-900">Email Alerts</p>
                  <p className="text-sm text-gray-600">Job matches and updates</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <p className="text-gray-900">Privacy</p>
                  <p className="text-sm text-gray-600">Control your data and visibility</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <p className="text-gray-900">Language</p>
                  <p className="text-sm text-gray-600">English (US)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <p className="text-gray-900">Help & Support</p>
                  <p className="text-sm text-gray-600">FAQs and contact support</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-6 py-4 flex items-center gap-3 hover:bg-red-50 transition-colors text-red-600">
              <LogOut className="w-5 h-5" />
              <span className="text-red-600">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
