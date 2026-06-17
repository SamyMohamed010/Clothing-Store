import { useState } from 'react';
import { ArrowLeft, MapPin, X, Home, Shuffle, Building2, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';

interface PreferencesScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function PreferencesScreen({ onComplete, onBack }: PreferencesScreenProps) {
  const [locations, setLocations] = useState<string[]>(['Karachi']);
  const [locationInput, setLocationInput] = useState('');
  const [salaryRange, setSalaryRange] = useState([150000, 300000]);
  const [workMode, setWorkMode] = useState<'remote' | 'hybrid' | 'office'>('hybrid');
  const [jobTypes, setJobTypes] = useState<string[]>(['Full-time']);

  const addLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (locationInput.trim() && !locations.includes(locationInput.trim())) {
      setLocations([...locations, locationInput.trim()]);
      setLocationInput('');
    }
  };

  const removeLocation = (location: string) => {
    setLocations(locations.filter(l => l !== location));
  };

  const toggleJobType = (type: string) => {
    setJobTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const formatCurrency = (value: number) => {
    return `₨ ${value.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="p-6">
          {/* Progress indicator */}
          <div className="pt-6 pb-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <div className="w-8 h-2 bg-indigo-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <p className="text-[#6B7280] text-center text-xs">Step 3 of 3</p>
          </div>

          {/* Header */}
          <div className="mt-10 mb-8">
            <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-900">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-[#111827] mb-2">Set Your Preferences</h1>
            <p className="text-[#6B7280]">We'll find the perfect matches for you</p>
          </div>

          {/* Form sections */}
          <div className="space-y-6">
            {/* Location */}
            <div>
              <label className="text-[#111827] block mb-3">
                Preferred Location
              </label>
              <form onSubmit={addLocation}>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="Enter city or region"
                    className="pl-12 h-12 rounded-xl border-gray-300 focus:border-indigo-600"
                  />
                </div>
              </form>
              <div className="flex flex-wrap gap-2 mt-3">
                {locations.map((location) => (
                  <div key={location} className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <span>{location}</span>
                    <button onClick={() => removeLocation(location)} className="hover:text-indigo-800">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <label className="text-[#111827] block mb-3">
                Expected Salary Range (Annual)
              </label>
              <div className="px-2">
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  min={50000}
                  max={500000}
                  step={10000}
                  className="mb-4"
                />
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>₨ 50,000</span>
                  <span>₨ 5,00,000</span>
                </div>
                <p className="text-center text-green-600">
                  {formatCurrency(salaryRange[0])} - {formatCurrency(salaryRange[1])}
                </p>
              </div>
            </div>

            {/* Work Mode */}
            <div>
              <label className="text-[#111827] block mb-3">
                Work Mode Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setWorkMode('remote')}
                  className={`h-12 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    workMode === 'remote'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <Home size={18} />
                  <span>Remote</span>
                </button>
                <button
                  onClick={() => setWorkMode('hybrid')}
                  className={`h-12 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    workMode === 'hybrid'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <Shuffle size={18} />
                  <span>Hybrid</span>
                </button>
                <button
                  onClick={() => setWorkMode('office')}
                  className={`h-12 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    workMode === 'office'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <Building2 size={18} />
                  <span>Office</span>
                </button>
              </div>
            </div>

            {/* Job Type */}
            <div>
              <label className="text-[#111827] block mb-3">
                Job Type
              </label>
              <div className="flex flex-wrap gap-2">
                {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleJobType(type)}
                    className={`px-5 py-2 h-10 rounded-full transition-all ${
                      jobTypes.includes(type)
                        ? 'bg-green-500 text-white'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <Button 
          onClick={onComplete}
          className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-[0px_8px_24px_rgba(79,70,229,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Start My Journey
          <Rocket className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
}
