import { TrendingUp, TrendingDown, Send, Eye, CheckCircle, XCircle, AlertTriangle, DollarSign, MapPin, Briefcase } from 'lucide-react';
import { Progress } from '../ui/progress';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export default function InsightsScreen() {
  const applicationStats = {
    sent: 24,
    inReview: 8,
    interviews: 5,
    offers: 2,
    rejected: 9,
    responseRate: 67,
    successRate: 33
  };

  const weeklyData = [
    { week: 'Week 1', applications: 4, responses: 3 },
    { week: 'Week 2', applications: 6, responses: 4 },
    { week: 'Week 3', applications: 5, responses: 3 },
    { week: 'Week 4', applications: 9, responses: 6 },
  ];

  const pieData = [
    { name: 'Sent', value: 24, color: '#6366F1' },
    { name: 'In Review', value: 8, color: '#F59E0B' },
    { name: 'Rejected', value: 9, color: '#EF4444' },
    { name: 'Offers', value: 2, color: '#10B981' },
  ];

  const hotSkills = [
    { skill: 'AI/ML', growth: '+45%', demand: 95, icon: '🤖' },
    { skill: 'Cloud Computing', growth: '+38%', demand: 88, icon: '☁️' },
    { skill: 'DevOps', growth: '+32%', demand: 82, icon: '⚙️' },
    { skill: 'Data Science', growth: '+28%', demand: 78, icon: '📊' },
    { skill: 'Cybersecurity', growth: '+25%', demand: 75, icon: '🔒' },
  ];

  const decliningSkills = [
    { skill: 'jQuery', decline: '-18%', demand: 35 },
    { skill: 'Flash', decline: '-45%', demand: 12 },
    { skill: 'Perl', decline: '-22%', demand: 28 },
  ];

  const rejectionReasons = [
    { reason: 'Skills mismatch', percentage: 35, solution: 'Complete our recommended courses in SQL and Advanced Analytics' },
    { reason: 'Experience level', percentage: 28, solution: 'Focus on roles at your current experience level or gain 1-2 years more' },
    { reason: 'Application quality', percentage: 20, solution: 'Improve your resume and cover letter with our AI-powered tools' },
    { reason: 'Competition', percentage: 17, solution: 'Apply earlier and to roles with fewer applicants' },
  ];

  const salaryData = [
    { location: 'Karachi', average: 250000, yourExpected: 300000, marketHigh: 400000 },
    { location: 'Lahore', average: 230000, yourExpected: 300000, marketHigh: 380000 },
    { location: 'Islamabad', average: 270000, yourExpected: 300000, marketHigh: 420000 },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-[#111827] mb-1">Analytics & Insights</h1>
        <p className="text-[#6B7280] text-sm">Track your career progress and market trends</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Application Stats Overview */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Send className="text-indigo-600" size={20} />
              <TrendingUp className="text-green-600" size={16} />
            </div>
            <p className="text-2xl text-[#111827] mb-1">{applicationStats.sent}</p>
            <p className="text-xs text-gray-600">Applications Sent</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Eye className="text-amber-600" size={20} />
              <span className="text-xs text-gray-500">+2 today</span>
            </div>
            <p className="text-2xl text-[#111827] mb-1">{applicationStats.inReview}</p>
            <p className="text-xs text-gray-600">In Review</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="text-green-600" size={20} />
              <TrendingUp className="text-green-600" size={16} />
            </div>
            <p className="text-2xl text-[#111827] mb-1">{applicationStats.interviews}</p>
            <p className="text-xs text-gray-600">Interviews Scheduled</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="text-red-600" size={20} />
              <TrendingDown className="text-red-600" size={16} />
            </div>
            <p className="text-2xl text-[#111827] mb-1">{applicationStats.rejected}</p>
            <p className="text-xs text-gray-600">Rejected</p>
          </div>
        </div>

        {/* Response & Success Rate */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Response Rate</span>
                <span className="text-sm text-indigo-600">{applicationStats.responseRate}%</span>
              </div>
              <Progress value={applicationStats.responseRate} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">Above average (industry: 45%)</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Interview Success Rate</span>
                <span className="text-sm text-green-600">{applicationStats.successRate}%</span>
              </div>
              <Progress value={applicationStats.successRate} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">On par with average (industry: 35%)</p>
            </div>
          </div>
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Application Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="week" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Line type="monotone" dataKey="applications" stroke="#6366F1" strokeWidth={2} dot={{ fill: '#6366F1', r: 4 }} />
              <Line type="monotone" dataKey="responses" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <span className="text-xs text-gray-600">Applications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-xs text-gray-600">Responses</span>
            </div>
          </div>
        </div>

        {/* Application Status Pie Chart */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-4">Application Status Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends - Hot Skills */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white" size={16} />
            </div>
            <h3 className="text-[#111827]">Hot Skills This Month</h3>
          </div>
          <div className="space-y-3">
            {hotSkills.map((skill) => (
              <div key={skill.skill} className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm text-[#111827]">{skill.skill}</span>
                  </div>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    {skill.growth}
                  </span>
                </div>
                <Progress value={skill.demand} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">Market demand: {skill.demand}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Declining Skills Warning */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="text-white" size={16} />
            </div>
            <h3 className="text-[#111827]">Declining Skills</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">These skills are seeing reduced demand. Consider upskilling.</p>
          <div className="space-y-2">
            {decliningSkills.map((skill) => (
              <div key={skill.skill} className="flex items-center justify-between bg-white rounded-lg p-3">
                <div>
                  <span className="text-sm text-[#111827]">{skill.skill}</span>
                  <p className="text-xs text-gray-500">Demand: {skill.demand}%</p>
                </div>
                <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                  {skill.decline}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rejection Insights */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="text-[#111827] mb-2">Why Applications Get Rejected</h3>
          <p className="text-sm text-gray-600 mb-4">Common reasons and how to fix them</p>
          <div className="space-y-4">
            {rejectionReasons.map((item) => (
              <div key={item.reason} className="border-l-4 border-red-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#111827]">{item.reason}</span>
                  <span className="text-sm text-red-600">{item.percentage}%</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{item.solution}</p>
                <Progress value={item.percentage} className="h-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Salary Insights */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="text-green-600" size={20} />
            <h3 className="text-[#111827]">Salary Insights</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Compare your expectations with market averages</p>
          <div className="space-y-4">
            {salaryData.map((data) => (
              <div key={data.location}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-sm text-[#111827]">{data.location}</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Market Average:</span>
                    <span className="text-gray-700">₨ {data.average.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Your Expected:</span>
                    <span className={data.yourExpected > data.average ? 'text-amber-600' : 'text-green-600'}>
                      ₨ {data.yourExpected.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Market High:</span>
                    <span className="text-gray-700">₨ {data.marketHigh.toLocaleString()}</span>
                  </div>
                </div>
                <Progress value={(data.yourExpected / data.marketHigh) * 100} className="h-2 mt-2" />
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-indigo-600 text-sm hover:text-indigo-700">
            Learn negotiation tips →
          </button>
        </div>
      </div>
    </div>
  );
}
