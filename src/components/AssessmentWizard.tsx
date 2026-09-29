import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Zap, 
  Compass, 
  Target, 
  Check, 
  Plus, 
  X, 
  Loader2,
  Clock,
  User
} from 'lucide-react';
import { AssessmentData } from '../types/career';
import { 
  EDUCATION_LEVELS, 
  INTEREST_CATEGORIES, 
  WORK_STYLES, 
  WORK_ENVIRONMENTS, 
  STRENGTH_OPTIONS, 
  VALUE_OPTIONS, 
  TIMELINE_OPTIONS, 
  PRESET_STUDENT_PROFILES 
} from '../data/assessmentQuestions';

interface AssessmentWizardProps {
  onGenerate: (data: AssessmentData) => Promise<void>;
  isLoading: boolean;
}

export const AssessmentWizard: React.FC<AssessmentWizardProps> = ({ onGenerate, isLoading }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState<AssessmentData>({
    name: '',
    educationLevel: 'college_early',
    currentField: 'Computer Science',
    primaryInterests: ['Artificial Intelligence & Machine Learning', 'Full-Stack Web Development'],
    strengths: ['Logical Reasoning & Math', 'Rapid Self-Learning & Curiosity'],
    workStyle: 'hands_on_builder',
    workEnvironment: 'fast_startup',
    values: ['High Earning Potential & Wealth Creation', 'Continuous Intellectual Growth & Innovation'],
    targetTimeline: '1_year',
    dreamGoal: '',
    difficultyPreference: 'intermediate'
  });

  const [customInterestInput, setCustomInterestInput] = useState('');
  const [validationError, setValidationError] = useState('');

  // Handle Preset Load
  const handleLoadPreset = (presetIndex: number) => {
    const selected = PRESET_STUDENT_PROFILES[presetIndex];
    if (selected) {
      setFormData({ ...selected.data });
      setValidationError('');
    }
  };

  // Toggle Interest Tag
  const toggleInterest = (item: string) => {
    setFormData(prev => {
      const exists = prev.primaryInterests.includes(item);
      if (exists) {
        return { ...prev, primaryInterests: prev.primaryInterests.filter(i => i !== item) };
      } else {
        if (prev.primaryInterests.length >= 6) {
          setValidationError('You can select up to 6 core interests for optimal plan precision.');
          return prev;
        }
        setValidationError('');
        return { ...prev, primaryInterests: [...prev.primaryInterests, item] };
      }
    });
  };

  // Add custom interest
  const handleAddCustomInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInterestInput.trim()) return;
    const trimmed = customInterestInput.trim();
    if (!formData.primaryInterests.includes(trimmed)) {
      setFormData(prev => ({
        ...prev,
        primaryInterests: [...prev.primaryInterests, trimmed]
      }));
    }
    setCustomInterestInput('');
  };

  // Toggle Strength
  const toggleStrength = (item: string) => {
    setFormData(prev => {
      const exists = prev.strengths.includes(item);
      if (exists) {
        return { ...prev, strengths: prev.strengths.filter(s => s !== item) };
      } else {
        if (prev.strengths.length >= 4) {
          setValidationError('Select up to 4 primary superpowers.');
          return prev;
        }
        setValidationError('');
        return { ...prev, strengths: [...prev.strengths, item] };
      }
    });
  };

  // Toggle Value
  const toggleValue = (item: string) => {
    setFormData(prev => {
      const exists = prev.values.includes(item);
      if (exists) {
        return { ...prev, values: prev.values.filter(v => v !== item) };
      } else {
        if (prev.values.length >= 4) {
          setValidationError('Pick up to 4 core career values.');
          return prev;
        }
        setValidationError('');
        return { ...prev, values: [...prev.values, item] };
      }
    });
  };

  // Navigation validation
  const validateStep = (step: number): boolean => {
    setValidationError('');
    if (step === 1) {
      if (!formData.educationLevel) {
        setValidationError('Please select your current education stage.');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (formData.primaryInterests.length === 0) {
        setValidationError('Please choose at least 1 passion or interest area.');
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!formData.workStyle || !formData.workEnvironment) {
        setValidationError('Please choose both your preferred work style and environment.');
        return false;
      }
      return true;
    }
    if (step === 4) {
      if (formData.strengths.length === 0) {
        setValidationError('Please pick at least 1 strength or superpower.');
        return false;
      }
      return true;
    }
    if (step === 5) {
      if (formData.values.length === 0) {
        setValidationError('Please choose at least 1 priority value.');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setValidationError('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      await onGenerate(formData);
    }
  };

  const stepTitles = [
    { title: 'Academic Stage', desc: 'Current level & study background' },
    { title: 'Passions & Interests', desc: 'What excites your curiosity' },
    { title: 'Work Style', desc: 'How & where you thrive' },
    { title: 'Strengths', desc: 'Your natural superpowers' },
    { title: 'Values & Priorities', desc: 'What matters in your career' },
    { title: 'Goal & Timeline', desc: 'Target duration & ambition' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Top Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Student Career Architect</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Discover Your <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Perfect Career Plan</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Answer a few quick questions about your passions, learning habits, and goals. We'll formulate a tailored step-by-step roadmap, required skills, signature projects, and day-by-day action plan.
        </p>

        {/* Quick presets toolbar */}
        <div className="mt-6 p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl max-w-2xl mx-auto text-left">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              ⚡ Quick Instant Presets (Optional)
            </span>
            <span className="text-[11px] text-slate-500">Click to autofill sample student profiles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PRESET_STUDENT_PROFILES.map((preset, idx) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handleLoadPreset(idx)}
                className="flex flex-col text-left p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 hover:bg-indigo-950/20 transition-all group"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-medium text-slate-200 group-hover:text-indigo-300">
                    {preset.label}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    {preset.badge}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                  {preset.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Step Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
          <span>Step {currentStep} of {totalSteps}: <strong className="text-slate-200">{stepTitles[currentStep - 1].title}</strong></span>
          <span className="text-indigo-400 font-semibold">{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
        </div>
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        
        {/* Step dots */}
        <div className="hidden sm:grid grid-cols-6 gap-2 mt-3 text-center">
          {stepTitles.map((st, i) => (
            <div 
              key={st.title}
              onClick={() => {
                if (i + 1 < currentStep || validateStep(currentStep)) {
                  setCurrentStep(i + 1);
                }
              }}
              className={`cursor-pointer group flex flex-col items-center py-1 px-1 rounded-lg transition-colors ${
                currentStep === i + 1 ? 'bg-indigo-500/10 border border-indigo-500/30' : 'hover:bg-slate-900/50'
              }`}
            >
              <span className={`text-[11px] font-semibold ${
                currentStep === i + 1 ? 'text-indigo-300' : (i + 1 < currentStep ? 'text-slate-300' : 'text-slate-500')
              }`}>
                {i + 1}. {st.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Error Banner */}
      {validationError && (
        <div className="mb-6 p-3 bg-red-950/60 border border-red-800/80 rounded-xl text-red-200 text-xs sm:text-sm flex items-center gap-2">
          <span className="text-base">⚠️</span>
          <span>{validationError}</span>
        </div>
      )}

      {/* Wizard Card Body */}
      <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
        
        {/* STEP 1: Education Level & Study Background */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Career Stage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What is your current education level and background?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                This helps us calibrate starting difficulty, course pacing, and appropriate career milestones.
              </p>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name or Preferred Nickname
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex, Sam, Taylor (Optional)"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Education Level Cards */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Current Level *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_LEVELS.map((lvl) => {
                  const isSelected = formData.educationLevel === lvl.id;
                  return (
                    <div
                      key={lvl.id}
                      onClick={() => setFormData({ ...formData, educationLevel: lvl.id as any })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-indigo-600/15 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/50' 
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950/90'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-indigo-300' : 'text-slate-200'}`}>
                          {lvl.label}
                        </span>
                        {isSelected && (
                          <div className="h-5 w-5 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        {lvl.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Field / Major */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Current Field, Major or Area of Focus
              </label>
              <input
                type="text"
                value={formData.currentField}
                onChange={(e) => setFormData({ ...formData, currentField: e.target.value })}
                placeholder="e.g. Computer Science, High School STEM, Business, Undeclared..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Computer Science', 'High School Student', 'Mechanical Eng', 'Data Analytics', 'Business / Econ', 'Biology / Pre-med', 'Arts & Design'].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setFormData({ ...formData, currentField: suggestion })}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 hover:bg-indigo-950/60 hover:text-indigo-300 border border-slate-700/60 transition-colors"
                  >
                    + {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Passions & Core Interests */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>Interests & Passions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What topics genuinely fascinate you?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Pick 2 to 6 areas. A great career combines your intellectual curiosity with scalable industry demand.
              </p>
            </div>

            {/* Selected tags count bar */}
            <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300">
                Selected: <strong className="text-indigo-400">{formData.primaryInterests.length}</strong> (Recommended 2–6)
              </span>
              {formData.primaryInterests.length > 0 && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryInterests: [] })}
                  className="text-xs text-slate-400 hover:text-red-400 transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Categorized interest tags */}
            <div className="space-y-4">
              {INTEREST_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const isSelected = formData.primaryInterests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl border transition-all duration-200 flex items-center gap-2 ${
                            isSelected
                              ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-200 border-indigo-500 shadow-sm shadow-indigo-500/20 font-medium'
                              : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          {item}
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Custom Interest */}
            <form onSubmit={handleAddCustomInterest} className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Have another specific interest? Add it here:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customInterestInput}
                  onChange={(e) => setCustomInterestInput(e.target.value)}
                  placeholder="e.g. Quantum Computing, Climate Tech, FinTech..."
                  className="flex-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!customInterestInput.trim()}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Work Style & Environment */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Working Style & Environment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                How do you perform at your highest potential?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                A great career matches how your brain naturally solves problems and where you feel most energized.
              </p>
            </div>

            {/* Work Style Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Preferred Day-to-Day Work Style *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WORK_STYLES.map((ws) => {
                  const isSelected = formData.workStyle === ws.id;
                  return (
                    <div
                      key={ws.id}
                      onClick={() => setFormData({ ...formData, workStyle: ws.id })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected 
                          ? 'bg-indigo-600/15 border-indigo-500 ring-1 ring-indigo-500/50 shadow-md shadow-indigo-500/10' 
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950/90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-indigo-300' : 'text-slate-200'}`}>
                          {ws.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5">
                        {ws.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Work Environment */}
            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Ideal Workplace Setting *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WORK_ENVIRONMENTS.map((we) => {
                  const isSelected = formData.workEnvironment === we.id;
                  return (
                    <div
                      key={we.id}
                      onClick={() => setFormData({ ...formData, workEnvironment: we.id })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected 
                          ? 'bg-indigo-600/15 border-indigo-500 ring-1 ring-indigo-500/50 shadow-md shadow-indigo-500/10' 
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950/90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-indigo-300' : 'text-slate-200'}`}>
                          {we.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5">
                        {we.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Strengths & Superpowers */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Superpowers & Core Strengths</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What are your biggest natural strengths?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select 1 to 4 superpowers that friends, teachers, or colleagues often notice in you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STRENGTH_OPTIONS.map((st) => {
                const isSelected = formData.strengths.includes(st);
                return (
                  <button
                    key={st}
                    type="button"
                    onClick={() => toggleStrength(st)}
                    className={`text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600/20 text-indigo-200 border-indigo-500 ring-1 ring-indigo-500/40 shadow-sm'
                        : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-medium">{st}</span>
                    {isSelected ? (
                      <div className="h-5 w-5 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    ) : (
                      <span className="text-slate-600 text-xs">+</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Values & Priorities */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Values & Life Philosophy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What matters most to you in your future career?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select 1 to 4 core priorities. Your plan will align with these motivators.
              </p>
            </div>

            <div className="space-y-2.5">
              {VALUE_OPTIONS.map((val) => {
                const isSelected = formData.values.includes(val);
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => toggleValue(val)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950/30 text-emerald-200 border-emerald-500 ring-1 ring-emerald-500/40 shadow-sm'
                        : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-medium">{val}</span>
                    {isSelected && (
                      <div className="h-5 w-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Timeline & Dream Goal */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Ambition & Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Set your target timeline & dream milestone
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us your timeline so we can organize the roadmap into practical 3-month phases.
              </p>
            </div>

            {/* Timeline Options */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Target Progression Timeline *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIMELINE_OPTIONS.map((tl) => {
                  const isSelected = formData.targetTimeline === tl.id;
                  return (
                    <div
                      key={tl.id}
                      onClick={() => setFormData({ ...formData, targetTimeline: tl.id as any })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected 
                          ? 'bg-purple-600/15 border-purple-500 ring-1 ring-purple-500/50 shadow-md shadow-purple-500/10' 
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950/90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-purple-300' : 'text-slate-200'}`}>
                          {tl.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-purple-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5">
                        {tl.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dream Goal */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Your Specific Dream Goal or Dream Company (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.dreamGoal}
                onChange={(e) => setFormData({ ...formData, dreamGoal: e.target.value })}
                placeholder="e.g. Land an internship at Google / OpenAI, launch a climate tech startup, or build products used by millions..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Starting Difficulty */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Starting Level Pacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner', label: 'Beginner', desc: 'No prior background' },
                  { id: 'intermediate', label: 'Intermediate', desc: 'Know basics & code syntax' },
                  { id: 'advanced', label: 'Advanced', desc: 'Accelerated masterclass' }
                ].map((diff) => (
                  <button
                    key={diff.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficultyPreference: diff.id as any })}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      formData.difficultyPreference === diff.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{diff.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{diff.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 1 || isLoading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:via-purple-500 hover:to-pink-400 text-white shadow-xl shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Your Career Plan...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Perfect Roadmap</span>
                </>
              )}
            </button>
          )}
        </div>

      </div>

      {/* Loading Overlay State */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-5 animate-pulse-subtle">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/30">
              <Compass className="w-8 h-8 text-white animate-spin" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Formulating Your Perfect Career Plan
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Synthesizing student interests, curating top university curriculums, modeling compensation benchmarks, and engineering signature portfolio projects...
              </p>
            </div>
            <div className="space-y-2 text-left bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Interests & Superpowers mapped</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-400">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Calibrating 4-phase milestone roadmap</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Generating 7-day starter kickstart plan</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
