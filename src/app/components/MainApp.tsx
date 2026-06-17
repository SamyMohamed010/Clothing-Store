import { useState } from 'react';
import { HomeDashboard } from './screens/HomeDashboard';
import { JobsScreen } from './screens/JobsScreen';
import { SkillsScreen } from './screens/SkillsScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { JobDetailsScreen } from './screens/JobDetailsScreen';
import { SkillsGapAnalysis } from './screens/SkillsGapAnalysis';
import { CareerRoadmapScreen } from './screens/CareerRoadmapScreen';
import { InterviewPrepScreen } from './screens/InterviewPrepScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { BottomNavigation } from './BottomNavigation';
import { MessageCircle, X } from 'lucide-react';

interface MainAppProps {
  userData: any;
}

export type Screen =
  | 'home'
  | 'jobs'
  | 'skills'
  | 'insights'
  | 'profile'
  | 'job-details'
  | 'skills-gap'
  | 'career-roadmap'
  | 'interview-prep'
  | 'notifications';

export function MainApp({ userData }: MainAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [showAIChat, setShowAIChat] = useState(false);

  const navigateToJobDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    setCurrentScreen('job-details');
  };

  const navigateBack = () => {
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeDashboard
            userData={userData}
            onNavigate={setCurrentScreen}
            onJobClick={navigateToJobDetails}
          />
        );
      case 'jobs':
        return <JobsScreen onJobClick={navigateToJobDetails} />;
      case 'skills':
        return <SkillsScreen onNavigate={setCurrentScreen} />;
      case 'insights':
        return <InsightsScreen />;
      case 'profile':
        return <ProfileScreen userData={userData} />;
      case 'job-details':
        return <JobDetailsScreen jobId={selectedJobId!} onBack={navigateBack} />;
      case 'skills-gap':
        return <SkillsGapAnalysis onBack={navigateBack} />;
      case 'career-roadmap':
        return <CareerRoadmapScreen onBack={navigateBack} />;
      case 'interview-prep':
        return <InterviewPrepScreen onBack={navigateBack} />;
      case 'notifications':
        return <NotificationsScreen onBack={navigateBack} />;
      default:
        return <HomeDashboard userData={userData} onNavigate={setCurrentScreen} onJobClick={navigateToJobDetails} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {renderScreen()}
      
      {/* Bottom Navigation - Only show on main screens */}
      {['home', 'jobs', 'skills', 'insights', 'profile'].includes(currentScreen) && (
        <BottomNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}

      {/* AI Chat Assistant Button */}
      {!showAIChat && (
        <button
          onClick={() => setShowAIChat(true)}
          className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}

      {/* AI Chat Overlay */}
      {showAIChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-lg max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-gray-900">AI Career Assistant</h3>
                <p className="text-sm text-gray-500">Ask me anything about your career</p>
              </div>
              <button
                onClick={() => setShowAIChat(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-indigo-50 rounded-2xl p-4 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Hi! I'm your AI career assistant. How can I help you today?
                </p>
              </div>
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
