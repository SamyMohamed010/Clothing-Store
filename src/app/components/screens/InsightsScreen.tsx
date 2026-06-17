import { TrendingUp, DollarSign, BarChart3, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { analyticsData } from '../../lib/mockData';

export function InsightsScreen() {
  const pieData = [
    { name: 'Sent', value: analyticsData.applications.sent, color: '#6366f1' },
    { name: 'In Review', value: analyticsData.applications.inReview, color: '#8b5cf6' },
    { name: 'Interviews', value: analyticsData.applications.interviews, color: '#10b981' },
    { name: 'Rejected', value: analyticsData.applications.rejected, color: '#ef4444' },
    { name: 'Offers', value: analyticsData.applications.offers, color: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-gray-900">Insights & Analytics</h2>
          <p className="text-sm text-gray-600 mt-1">Track your progress and market trends</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        <Tabs defaultValue="progress" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="progress">My Progress</TabsTrigger>
            <TabsTrigger value="market">Market Trends</TabsTrigger>
            <TabsTrigger value="salary">Salary Insights</TabsTrigger>
          </TabsList>

          {/* My Progress */}
          <TabsContent value="progress" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-2xl text-gray-900">{analyticsData.applications.sent}</span>
                </div>
                <p className="text-sm text-gray-600">Applications Sent</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-2xl text-gray-900">{analyticsData.applications.inReview}</span>
                </div>
                <p className="text-sm text-gray-600">In Review</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-2xl text-gray-900">{analyticsData.applications.interviews}</span>
                </div>
                <p className="text-sm text-gray-600">Interviews</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-2xl text-gray-900">{analyticsData.applications.offers}</span>
                </div>
                <p className="text-sm text-gray-600">Offers Received</p>
              </div>
            </div>

            {/* Response Rate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Response & Success Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Response Rate</span>
                    <span className="text-indigo-600">{analyticsData.responseRate}%</span>
                  </div>
                  <Progress value={analyticsData.responseRate} className="h-3 mb-4" />
                  <p className="text-sm text-gray-600">45% of your applications received a response</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Success Rate</span>
                    <span className="text-green-600">{analyticsData.successRate}%</span>
                  </div>
                  <Progress value={analyticsData.successRate} className="h-3 mb-4" indicatorClassName="bg-green-600" />
                  <p className="text-sm text-gray-600">8% of applications converted to offers</p>
                </div>
              </div>
            </div>

            {/* Weekly Applications Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Weekly Applications</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData.weeklyApplications}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Application Status Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Application Status Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
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
                <div className="flex flex-col justify-center space-y-3">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rejection Reasons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Common Rejection Reasons</h3>
              <div className="space-y-4">
                {analyticsData.rejectionReasons.map((reason) => (
                  <div key={reason.reason}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">{reason.reason}</span>
                      <span className="text-sm text-gray-900">{reason.percentage}%</span>
                    </div>
                    <Progress value={reason.percentage} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">Improve Your Success Rate</p>
                  <p className="text-sm text-gray-600">Focus on gaining required skills and tailoring your applications to match job requirements.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Market Trends */}
          <TabsContent value="market" className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Market Demand Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData.marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                  <Line type="monotone" dataKey="demand" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">Job market demand for your skills has increased by 42% over the last 6 months</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Hot Skills This Month</h3>
              <div className="space-y-3">
                {analyticsData.hotSkills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-900">{skill.name}</p>
                        <p className="text-sm text-gray-600">Growth: {skill.growth}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      skill.demand === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill.demand}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Salary Insights */}
          <TabsContent value="salary" className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">Your Expected Salary</h3>
                  <p className="text-sm text-gray-600">Based on your profile</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Your Expected</p>
                  <p className="text-2xl text-gray-900">${(analyticsData.salaryInsights.yourExpected / 1000).toFixed(0)}k</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Market Average</p>
                  <p className="text-2xl text-gray-900">${(analyticsData.salaryInsights.marketAverage / 1000).toFixed(0)}k</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">You're in top</p>
                  <p className="text-2xl text-green-600">{analyticsData.salaryInsights.percentile}%</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded-xl">
                <p className="text-sm text-green-700">
                  Your expected salary is {Math.round(((analyticsData.salaryInsights.yourExpected - analyticsData.salaryInsights.marketAverage) / analyticsData.salaryInsights.marketAverage) * 100)}% above market average
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">Salary by City</h3>
              <div className="space-y-4">
                {analyticsData.salaryInsights.byCity.map((city) => (
                  <div key={city.city}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900">{city.city}</span>
                      <span className="text-gray-900">${(city.average / 1000).toFixed(0)}k</span>
                    </div>
                    <Progress 
                      value={(city.average / 150000) * 100} 
                      className="h-3"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4">How to Negotiate</h3>
              <div className="space-y-3">
                {[
                  'Research market rates for your role and location',
                  'Highlight your unique skills and achievements',
                  'Consider total compensation, not just base salary',
                  'Practice your pitch before the negotiation',
                  'Be prepared to walk away if offer doesn\'t meet expectations',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
