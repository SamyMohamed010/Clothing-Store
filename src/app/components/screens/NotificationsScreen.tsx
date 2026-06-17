import { ArrowLeft, Briefcase, Target, CheckCircle, BookOpen, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { notifications } from '../../lib/mockData';

interface NotificationsScreenProps {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'job-match':
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
      case 'application':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'skill':
        return <Target className="w-5 h-5 text-amber-600" />;
      case 'learning':
        return <BookOpen className="w-5 h-5 text-purple-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-gray-600" />;
    }
  };

  const getIconBg = (category: string) => {
    switch (category) {
      case 'job-match':
        return 'bg-indigo-100';
      case 'application':
        return 'bg-green-100';
      case 'skill':
        return 'bg-amber-100';
      case 'learning':
        return 'bg-purple-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h2 className="text-gray-900">Notifications</h2>
              <p className="text-sm text-gray-600">{notifications.filter(n => !n.read).length} unread</p>
            </div>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            Mark all as read
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="job-match">Jobs</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="application">Apps</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group ${
                  !notification.read ? 'border-l-4 border-indigo-600' : ''
                }`}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 ${getIconBg(notification.category)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {getIcon(notification.category)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`truncate ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {['job-match', 'skill', 'application', 'learning'].map((category) => (
            <TabsContent key={category} value={category} className="space-y-3">
              {notifications
                .filter((n) => n.category === category)
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group ${
                      !notification.read ? 'border-l-4 border-indigo-600' : ''
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${getIconBg(notification.category)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {getIcon(notification.category)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className={`truncate ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h4>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{notification.description}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
