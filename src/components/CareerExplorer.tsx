import React, { useState } from 'react';
import { Compass, Sparkles, TrendingUp, DollarSign, Layers, ArrowRight, Check } from 'lucide-react';
import { PRESET_CAREER_PLANS } from '../data/presetArchetypes';
import { CareerPlan } from '../types/career';

interface CareerExplorerProps {
  onSelectPlan: (plan: CareerPlan) => void;
  activePlanId?: string;
}

export const CareerExplorer: React.FC<CareerExplorerProps> = ({ onSelectPlan, activePlanId }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlans = PRESET_CAREER_PLANS.filter(plan => 
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.phases.some(p => p.coreSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Career Library</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Explore High-Demand <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">Career Roadmaps</span>
        </h1>
        <p className="text-sm text-slate-400">
          Browse comprehensive step-by-step roadmaps calibrated for modern industry demands. Select any pathway to view its full milestones, recommended courses, and signature projects.
        </p>

        {/* Search */}
        <div className="pt-2 max-w-md mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by role, skill (e.g. Python, Figma, Cloud, AI)..."
            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Grid of Career Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => {
          const isCurrentActive = activePlanId === plan.id;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/10 ${
                isCurrentActive
                  ? 'border-indigo-500/80 ring-1 ring-indigo-500/40 bg-indigo-950/20'
                  : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90'
              }`}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {plan.industryOverview.marketDemand}
                  </span>
                  {isCurrentActive && (
                    <span className="text-[11px] font-semibold text-indigo-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Current Plan</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-heading">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Salary and Growth Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                    <span className="text-[10px] font-semibold uppercase text-slate-500 block">
                      Entry Salary
                    </span>
                    <span className="text-xs font-bold text-white">
                      {plan.industryOverview.entrySalary.split('–')[0] || plan.industryOverview.entrySalary}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                    <span className="text-[10px] font-semibold uppercase text-slate-500 block">
                      Projected Growth
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {plan.industryOverview.projectedGrowth.split(' ')[0] || '+25%'}
                    </span>
                  </div>
                </div>

                {/* Core Skills Preview */}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Skills Covered:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {plan.phases.flatMap(p => p.coreSkills).slice(0, 5).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {skill}
                      </span>
                    ))}
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                      +more
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/70">
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group-hover:shadow-md group-hover:shadow-indigo-500/20"
                >
                  <span>View Full Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
