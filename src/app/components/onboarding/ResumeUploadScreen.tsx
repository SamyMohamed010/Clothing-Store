import { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

interface ResumeUploadScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ResumeUploadScreen({ onNext, onBack }: ResumeUploadScreenProps) {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploaded(true);
      setFileName(`${file.name} (${Math.round(file.size / 1024)} KB)`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploaded(true);
      setFileName(`${file.name} (245 KB)`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Progress indicator */}
      <div className="pt-6 pb-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-2 bg-indigo-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <p className="text-[#6B7280] text-center text-xs">Step 1 of 3</p>
      </div>

      {/* Header */}
      <div className="mt-10 mb-8">
        <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#111827] mb-2">Upload Your Resume</h1>
        <p className="text-[#6B7280]">Help us understand your experience and skills</p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Upload box */}
        <label 
          className={`relative block w-full h-[280px] rounded-2xl border-[3px] ${
            uploaded 
              ? 'border-solid border-green-500 bg-green-50' 
              : 'border-dashed border-gray-300 bg-[#F9FAFB]'
          } cursor-pointer transition-all hover:border-indigo-400`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf,.docx"
            onChange={handleFileUpload}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            {uploaded ? (
              <>
                <CheckCircle2 className="text-green-500 mb-4" size={64} />
                <p className="text-green-600 text-center mb-2">Resume Uploaded!</p>
                <p className="text-green-600 text-center">{fileName}</p>
              </>
            ) : (
              <>
                <Upload className="text-gray-400 mb-4" size={64} />
                <p className="text-[#111827] text-center mb-2">Drag & drop your resume here</p>
                <p className="text-[#6B7280] text-center mb-3">or click to browse</p>
                <p className="text-[#9CA3AF] text-xs text-center">Supports PDF, DOCX (Max 5MB)</p>
              </>
            )}
          </div>
        </label>

        {/* Alternative options */}
        <div className="mt-6 space-y-4">
          <Button 
            variant="outline"
            className="w-full h-12 border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 rounded-xl"
          >
            <Linkedin size={24} className="mr-2" />
            Import from LinkedIn
          </Button>
          <button className="w-full text-[#6B7280] text-center hover:text-[#111827] transition-colors">
            Enter Details Manually
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-6 pt-6">
        <Button 
          onClick={onNext}
          disabled={!uploaded}
          className={`w-full h-14 rounded-xl transition-all ${
            uploaded 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
}
