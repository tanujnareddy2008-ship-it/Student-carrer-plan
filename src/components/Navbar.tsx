import React from 'react';
import { Compass, Sparkles, BookOpen, MessageSquare, CheckCircle, RotateCcw } from 'lucide-react';
import { CareerPlan } from '../types/career';

interface NavbarProps {
  activeTab: 'assessment' | 'roadmap' | 'explore' | 'chat';
  setActiveTab: (tab: 'assessment' | 'roadmap' | 'explore' | 'chat') => void;
  currentPlan: CareerPlan | null;
  completedMilestonesCount: number;
  totalMilestonesCount: number;
  onResetAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentPlan,
  completedMilestonesCount,
  totalMilestonesCount,
  onResetAssessment
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <div 
          onClick={() => setActiveTab(currentPlan ? 'roadmap' : 'assessment')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                PathFinder
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                AI Career Architect
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Student Interest & Personalized Career Roadmap
            </p>
          </div>
        </div>

        {/* Center Nav tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'assessment'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Assessment</span>
          </button>

          {currentPlan && (
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all relative ${
                activeTab === 'roadmap'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Compass className="w-4 h-4 text-purple-400" />
              <span>My Roadmap</span>
              {totalMilestonesCount > 0 && (
                <span className="ml-1 text-[11px] px-1.5 py-0.2 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                  {completedMilestonesCount}/{totalMilestonesCount}
                </span>
              )}
            </button>
          )}

          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'explore'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Explore</span>
            <span className="sm:hidden">Browse</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all relative ${
              activeTab === 'chat'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>AI Advisor</span>
          </button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {currentPlan && (
            <button
              onClick={onResetAssessment}
              title="Retake assessment"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Quiz</span>
            </button>
          )}

          {currentPlan && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-slate-900/80 rounded-lg border border-slate-800/80 text-xs">
              <span className="text-slate-400">Target:</span>
              <span className="text-indigo-300 font-medium truncate max-w-[140px]">
                {currentPlan.title}
              </span>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
