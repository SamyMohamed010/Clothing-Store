import { ArrowLeft, Briefcase, Award, TrendingUp, Bell, CheckCircle, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

interface NotificationsScreenProps {
  onBack: () => void;
}

export default function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const notifications = [
    {
      id: 1,
      category: 'job-match',
      icon: Briefcase,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'New Job Match!',
      description: 'Senior Product Manager at TechCorp is 87% match for you',
      time: '2 hours ago',
      unread: true,
      actionLabel: 'View Job'
    },
    {
      id: 2,
      category: 'skill',
      icon: Award,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Skill Achievement Unlocked',
      description: 'You completed "Advanced Product Strategy" course',
      time: '5 hours ago',
      unread: true,
      actionLabel: 'View Certificate'
    },
    {
      id: 3,
      category: 'application',
      icon: CheckCircle,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Application Update',
      description: 'Your application for UX Lead at DesignStudio is under review',
      time: '1 day ago',
      unread: false,
      actionLabel: 'Track Status'
    },
    {
      id: 4,
      category: 'job-match',
      icon: Briefcase,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: '12 New Jobs for You',
      description: 'Based on your preferences and skills',
      time: '1 day ago',
      unread: false,
      actionLabel: 'Browse Jobs'
    },
    {
      id: 5,
      category: 'skill',
      icon: TrendingUp,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      title: 'Market Trend Alert',
      description: 'AI/ML skills demand increased by 45% this month',
      time: '2 days ago',
      unread: false,
      actionLabel: 'Learn More'
    },
    {
      id: 6,
      category: 'learning',
      icon: Award,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Course Recommendation',
      description: 'Complete SQL Mastery to increase your match percentage',
      time: '3 days ago',
      unread: false,
      actionLabel: 'Start Learning'
    },
    {
      id: 7,
      category: 'application',
      icon: CheckCircle,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Interview Scheduled',
      description: 'You have an interview with StartupHub on Nov 25',
      time: '3 days ago',
      unread: false,
      actionLabel: 'Prepare Now'
    },
    {
      id: 8,
      category: 'learning',
      icon: Bell,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Learning Streak',
      description: 'Keep it up! You\'re on a 5-day learning streak',
      time: '4 days ago',
      unread: false,
      actionLabel: null
    },
  ];

  const jobMatches = notifications.filter(n => n.category === 'job-match');
  const skillAlerts = notifications.filter(n => n.category === 'skill');
  const applicationUpdates = notifications.filter(n => n.category === 'application');
  const learningReminders = notifications.filter(n => n.category === 'learning');

  const NotificationCard = ({ notification }: { notification: typeof notifications[0] }) => {
    const Icon = notification.icon;
    
    return (
      <div className={`bg-white rounded-2xl p-4 border border-gray-200 ${notification.unread ? 'border-l-4 border-l-indigo-600' : ''}`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 ${notification.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <Icon className={notification.iconColor} size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <p className={`text-sm ${notification.unread ? 'text-[#111827]' : 'text-gray-700'}`}>
                {notification.title}
              </p>
              {notification.unread && (
                <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{notification.time}</span>
              {notification.actionLabel && (
                <button className="text-xs text-indigo-600 hover:text-indigo-700">
                  {notification.actionLabel} →
                </button>
              )}
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0">
            <Trash2 size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-[#111827]">Notifications</h1>
              <p className="text-[#6B7280] text-sm">Stay updated on your career journey</p>
            </div>
          </div>
          <button className="text-indigo-600 text-sm hover:text-indigo-700">
            Mark all read
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all" className="text-xs">
              All
              <Badge variant="secondary" className="ml-1 h-5 min-w-5 px-1">
                {notifications.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="jobs" className="text-xs">
              Jobs
              <Badge variant="secondary" className="ml-1 h-5 min-w-5 px-1">
                {jobMatches.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-xs">
              Skills
            </TabsTrigger>
            <TabsTrigger value="apps" className="text-xs">
              Apps
            </TabsTrigger>
            <TabsTrigger value="learn" className="text-xs">
              Learn
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="jobs" className="space-y-3">
            {jobMatches.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
            {jobMatches.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="mx-auto text-gray-300 mb-3" size={48} />
                <p className="text-gray-500">No job notifications yet</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="skills" className="space-y-3">
            {skillAlerts.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
            {skillAlerts.length === 0 && (
              <div className="text-center py-12">
                <Award className="mx-auto text-gray-300 mb-3" size={48} />
                <p className="text-gray-500">No skill notifications yet</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="apps" className="space-y-3">
            {applicationUpdates.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
            {applicationUpdates.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto text-gray-300 mb-3" size={48} />
                <p className="text-gray-500">No application updates yet</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="learn" className="space-y-3">
            {learningReminders.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
            {learningReminders.length === 0 && (
              <div className="text-center py-12">
                <Bell className="mx-auto text-gray-300 mb-3" size={48} />
                <p className="text-gray-500">No learning reminders yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
