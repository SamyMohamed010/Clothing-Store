import { useState } from 'react';
import { WelcomeScreen } from './onboarding/WelcomeScreen';
import { ResumeUploadScreen } from './onboarding/ResumeUploadScreen';
import { CareerGoalsScreen } from './onboarding/CareerGoalsScreen';
import { PreferencesScreen } from './onboarding/PreferencesScreen';

interface OnboardingFlowProps {
  onComplete: (data: any) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    careerGoals: [] as string[],
    preferences: {
      locations: [] as string[],
      salaryRange: [60000, 120000] as [number, number],
      workMode: 'Remote',
      jobType: 'Full-time',
    },
  });

  const handleNext = (stepData: any) => {
    const updatedData = { ...onboardingData, ...stepData };
    setOnboardingData(updatedData);

    if (currentStep === 3) {
      onComplete(updatedData);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    onComplete(onboardingData);
  };

  const screens = [
    <WelcomeScreen key="welcome" onNext={() => setCurrentStep(1)} onSkip={handleSkip} />,
    <ResumeUploadScreen key="resume" onNext={() => handleNext({})} currentStep={1} totalSteps={3} />,
    <CareerGoalsScreen key="goals" onNext={(data) => handleNext(data)} currentStep={2} totalSteps={3} />,
    <PreferencesScreen key="preferences" onNext={(data) => handleNext(data)} currentStep={3} totalSteps={3} />,
  ];

  return <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">{screens[currentStep]}</div>;
}
