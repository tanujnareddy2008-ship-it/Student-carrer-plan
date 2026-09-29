import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  BookOpen, 
  Code, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Building, 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  Share2, 
  Printer, 
  MessageSquare, 
  ChevronRight,
  ShieldCheck,
  Calendar,
  Layers,
  Check
} from 'lucide-react';
import { CareerPlan, RoadmapPhase, Milestone } from '../types/career';
import { triggerConfetti, triggerMajorCelebration } from '../utils/confetti';

interface CareerPlanViewProps {
  plan: CareerPlan;
  completedMilestones: Record<string, boolean>;
  onToggleMilestone: (milestoneId: string) => void;
  onOpenAdvisorChat: (initialPrompt?: string) => void;
  onRetakeAssessment: () => void;
}

export const CareerPlanView: React.FC<CareerPlanViewProps> = ({
  plan,
  completedMilestones,
  onToggleMilestone,
  onOpenAdvisorChat,
  onRetakeAssessment
}) => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Calculate milestones progress
  const allMilestones: Milestone[] = plan.phases.flatMap(p => p.milestones || []);
  const totalMilestones = allMilestones.length;
  const completedCount = allMilestones.filter(m => completedMilestones[m.id]).length;
  const progressPercent = totalMilestones > 0 ? Math.round((completedCount / totalMilestones) * 100) : 0;

  const currentPhase = plan.phases[selectedPhaseIndex] || plan.phases[0];

  const handleMilestoneClick = (mId: string) => {
    const isNowCompleted = !completedMilestones[mId];
    onToggleMilestone(mId);

    if (isNowCompleted) {
      if (completedCount + 1 === totalMilestones) {
        triggerMajorCelebration();
      } else {
        triggerConfetti();
      }
    }
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 space-y-10">
      
      {/* Top Banner / Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/20 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{plan.matchScore}% Match Score</span>
              </span>

              {plan.studentName && (
                <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                  Crafted for <strong>{plan.studentName}</strong>
                </span>
              )}

              {plan.studentProfileSummary && (
                <span className="text-xs px-3 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/60">
                  {plan.studentProfileSummary}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
              {plan.title}
            </h1>

            <p className="text-base sm:text-lg text-indigo-200/90 leading-relaxed font-normal">
              {plan.tagline}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => onOpenAdvisorChat(`Explain how to succeed in my new career plan: "${plan.title}"`)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Career Advisor</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 rounded-xl text-xs sm:text-sm font-medium border border-slate-800 transition-colors"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Plan'}</span>
            </button>
          </div>
        </div>

        {/* Match Rationale Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Why this is your ideal career pathway</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {plan.matchReason}
          </p>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/70">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Roadmap Progression: <strong className="text-white">{completedCount} of {totalMilestones}</strong> Milestones Completed</span>
            </span>
            <span className="text-indigo-400 font-semibold">{progressPercent}% Achieved</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

      </div>

      {/* Industry Intelligence & Outlook Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <span>Industry Intelligence & Economic Outlook</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Market Demand */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Market Demand</span>
              </span>
              <div className="text-xl font-bold text-emerald-300 mt-2">
                {plan.industryOverview.marketDemand}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Projected growth: <span className="text-slate-200 font-medium">{plan.industryOverview.projectedGrowth}</span>
            </p>
          </div>

          {/* Compensation */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span>Salary Trajectory</span>
              </span>
              <div className="text-lg font-bold text-white mt-2">
                {plan.industryOverview.entrySalary}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Mid to Senior: <span className="text-amber-300 font-semibold">{plan.industryOverview.midSeniorSalary}</span>
            </p>
          </div>

          {/* Work Life Balance */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Work-Life Balance</span>
              </span>
              <div className="text-sm font-semibold text-slate-200 mt-2 line-clamp-2">
                {plan.industryOverview.workLifeBalance}
              </div>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">
              Remote & Hybrid availability
            </span>
          </div>

          {/* Top Companies */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-purple-400" />
                <span>Leading Employers</span>
              </span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {plan.industryOverview.topCompanies.slice(0, 4).map((comp) => (
                  <span key={comp} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">
              Plus thriving high-growth tech startups
            </span>
          </div>

        </div>

        {/* Day in the Life */}
        {plan.industryOverview.dayInLifeSummary && (
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <span className="text-base shrink-0">☕</span>
            <div>
              <strong className="text-slate-100 font-semibold">A Typical Day on the Job: </strong>
              <span>{plan.industryOverview.dayInLifeSummary}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Roadmap Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-indigo-400" />
              <span>Step-by-Step Strategic Roadmap</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Organized into 4 sequential mastery phases. Check off milestones as you achieve them!
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-2xl border border-slate-800 self-start sm:self-auto overflow-x-auto max-w-full">
            {plan.phases.map((phase, idx) => {
              const phaseMilestones = phase.milestones || [];
              const phaseCompleted = phaseMilestones.filter(m => completedMilestones[m.id]).length;
              const isSelected = selectedPhaseIndex === idx;

              return (
                <button
                  key={phase.phaseNumber}
                  onClick={() => setSelectedPhaseIndex(idx)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>Phase {phase.phaseNumber}</span>
                  {phaseCompleted > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-800 text-indigo-300'
                    }`}>
                      {phaseCompleted}/{phaseMilestones.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-8 backdrop-blur-md shadow-xl">
          
          {/* Phase Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <span>Phase {currentPhase.phaseNumber} Target</span>
                <span>•</span>
                <span className="text-purple-400">{currentPhase.duration}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentPhase.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {currentPhase.objective}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs text-slate-400">Phase Completion:</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {currentPhase.milestones?.filter(m => completedMilestones[m.id]).length || 0} / {currentPhase.milestones?.length || 0}
              </span>
            </div>
          </div>

          {/* Actionable Milestones List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Phase Milestones & Verifiable Criteria (Click to mark completed)</span>
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {currentPhase.milestones?.map((milestone) => {
                const isDone = !!completedMilestones[milestone.id];
                return (
                  <div
                    key={milestone.id}
                    onClick={() => handleMilestoneClick(milestone.id)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      isDone
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-300'
                        : 'bg-slate-950/60 border-slate-800/90 hover:border-indigo-500/50 hover:bg-slate-950/90'
                    }`}
                  >
                    <button
                      type="button"
                      className={`mt-0.5 shrink-0 h-6 w-6 rounded-lg flex items-center justify-center transition-colors ${
                        isDone
                          ? 'bg-emerald-500 text-slate-950'
                          : 'border border-slate-700 text-transparent hover:border-indigo-400'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`text-sm sm:text-base font-semibold ${
                          isDone ? 'line-through text-slate-400' : 'text-slate-100'
                        }`}>
                          {milestone.title}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                            ~{milestone.estimatedHours} hrs
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded uppercase font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {milestone.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Signature Project Spotlight */}
          {currentPhase.signatureProject && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-950 border border-indigo-500/30 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/25">
                  <Code className="w-3.5 h-3.5" />
                  <span>Signature Portfolio Project for Phase {currentPhase.phaseNumber}</span>
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  {currentPhase.signatureProject.technologies?.map(tech => (
                    <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/90 text-indigo-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {currentPhase.signatureProject.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {currentPhase.signatureProject.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              {currentPhase.signatureProject.deliverables?.length > 0 && (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Deliverables for Your GitHub / Portfolio:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentPhase.signatureProject.deliverables.map((del, i) => (
                      <li key={i} className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Portfolio Tip */}
              {currentPhase.signatureProject.portfolioTip && (
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 flex items-start gap-2">
                  <span className="text-sm shrink-0">💡</span>
                  <div>
                    <strong className="text-purple-300">Recruiter Standout Tip: </strong>
                    <span>{currentPhase.signatureProject.portfolioTip}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Curated Courses and Resources */}
          {currentPhase.recommendedCourses?.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Curated Learning Curriculums & Gold-Standard Resources</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPhase.recommendedCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-medium text-indigo-400">
                          {course.provider}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            course.isFree ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-300'
                          }`}>
                            {course.isFree ? 'FREE' : 'PAID/SUBSCRIPTION'}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            {course.level}
                          </span>
                        </div>
                      </div>

                      <h5 className="text-sm font-semibold text-slate-100">
                        {course.title}
                      </h5>
                    </div>

                    {course.url && (
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>Access Syllabus</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills and Tools Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/70">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Core Conceptual Skills to Master in Phase {currentPhase.phaseNumber}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPhase.coreSkills?.map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Tools & Technologies Utilized:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPhase.tools?.map((tool) => (
                  <span key={tool} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 7-Day Kickstart Plan ("Start This Week") */}
      {plan.firstWeekPlan?.length > 0 && (
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Zero to One Kickstart</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Your First 7 Days: Concrete Action Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Eliminate procrastination with a bite-sized, high-leverage schedule for your very first week.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {plan.firstWeekPlan.map((step) => (
              <div
                key={step.day}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {step.day}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    {step.task}
                  </p>
                </div>
                {step.resourceTip && (
                  <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                    <strong className="text-slate-300">Action Tip: </strong>
                    {step.resourceTip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications & Common Pitfalls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Essential Certifications */}
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>High-ROI Credentials & Certifications</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Industry Recognized Badges
          </h3>

          <div className="space-y-3">
            {plan.essentialCertifications?.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">
                    {cert.name}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {cert.estimatedCost}
                  </span>
                </div>
                <div className="text-xs text-indigo-400 font-medium">
                  Issuer: {cert.issuer}
                </div>
                <p className="text-xs text-slate-400">
                  {cert.relevance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Potential Pitfalls & Tactical Antidotes */}
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>Avoid Common Traps</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Student Pitfalls & Antidotes
          </h3>

          <div className="space-y-3">
            {plan.potentialPitfalls?.map((pit, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-sm">❌</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {pit.obstacle}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-400 pl-6 border-l-2 border-emerald-500/50">
                  <span className="text-emerald-400 font-bold shrink-0">Antidote:</span>
                  <span>{pit.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Alternative Pivot Careers */}
      {plan.alternativeCareers?.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-5">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Lateral Mobility & Pivot Pathways</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Adjacent Careers Sharing Your Core Skills
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Your acquired skillset provides tremendous flexibility across multiple high-growth domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plan.alternativeCareers.map((alt) => (
              <div
                key={alt.title}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-white">
                      {alt.title}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {alt.matchScore}% Match
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {alt.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Transferable Skills:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {alt.transferableSkills?.map(s => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Retake & Advisor Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="text-lg font-bold text-white">
            Have questions about your roadmap or want to tweak your focus?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Talk to the AI Career Advisor for customized advice, or retake the assessment with updated answers.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onRetakeAssessment}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => onOpenAdvisorChat()}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Advisor</span>
          </button>
        </div>
      </div>

    </div>
  );
};
