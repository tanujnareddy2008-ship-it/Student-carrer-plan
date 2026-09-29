import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AssessmentWizard } from './components/AssessmentWizard';
import { CareerPlanView } from './components/CareerPlanView';
import { CareerExplorer } from './components/CareerExplorer';
import { AdvisorChat } from './components/AdvisorChat';
import { AssessmentData, CareerPlan } from './types/career';
import { PRESET_CAREER_PLANS } from './data/presetArchetypes';
import { triggerConfetti } from './utils/confetti';
import { MessageSquare, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'assessment' | 'roadmap' | 'explore' | 'chat'>('assessment');
  const [currentPlan, setCurrentPlan] = useState<CareerPlan | null>(null);
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem('pathfinder_career_plan');
      const savedMilestones = localStorage.getItem('pathfinder_completed_milestones');

      if (savedPlan) {
        const parsed = JSON.parse(savedPlan);
        setCurrentPlan(parsed);
        // If they already have a saved plan, take them directly to roadmap
        setActiveTab('roadmap');
      }

      if (savedMilestones) {
        setCompletedMilestones(JSON.parse(savedMilestones));
      }
    } catch (e) {
      console.warn('Failed to load saved state from localStorage:', e);
    }
  }, []);

  // Save current plan
  const handleSetCurrentPlan = (plan: CareerPlan) => {
    setCurrentPlan(plan);
    try {
      localStorage.setItem('pathfinder_career_plan', JSON.stringify(plan));
    } catch (e) {}
  };

  // Toggle milestone completion
  const handleToggleMilestone = (milestoneId: string) => {
    setCompletedMilestones(prev => {
      const updated = { ...prev, [milestoneId]: !prev[milestoneId] };
      try {
        localStorage.setItem('pathfinder_completed_milestones', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // Generate Plan from Assessment
  const handleGeneratePlan = async (data: AssessmentData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Server returned an error generating plan');
      }

      const generatedPlan: CareerPlan = await response.json();
      handleSetCurrentPlan(generatedPlan);
      setActiveTab('roadmap');
      triggerConfetti();
    } catch (err) {
      console.error('Plan generation failed, utilizing fallback archetype:', err);
      // Fallback
      const fallback = PRESET_CAREER_PLANS[0];
      fallback.studentName = data.name || 'Student';
      fallback.studentProfileSummary = `${data.educationLevel.replace('_', ' ')} · ${data.currentField || 'General Studies'}`;
      handleSetCurrentPlan(fallback);
      setActiveTab('roadmap');
      triggerConfetti();
    } finally {
      setIsLoading(false);
    }
  };

  // Open Chat with custom prompt
  const handleOpenAdvisorChat = (initialPrompt?: string) => {
    setChatInitialPrompt(initialPrompt);
    setIsChatOpen(true);
  };

  // Select Plan from Explorer
  const handleSelectExplorerPlan = (plan: CareerPlan) => {
    handleSetCurrentPlan(plan);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset Assessment
  const handleResetAssessment = () => {
    setActiveTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Count milestones
  const allMilestones = currentPlan?.phases?.flatMap(p => p.milestones || []) || [];
  const completedMilestonesCount = allMilestones.filter(m => completedMilestones[m.id]).length;
  const totalMilestonesCount = allMilestones.length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'chat') {
            setIsChatOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        currentPlan={currentPlan}
        completedMilestonesCount={completedMilestonesCount}
        totalMilestonesCount={totalMilestonesCount}
        onResetAssessment={handleResetAssessment}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'assessment' && (
          <AssessmentWizard
            onGenerate={handleGeneratePlan}
            isLoading={isLoading}
          />
        )}

        {activeTab === 'roadmap' && currentPlan && (
          <CareerPlanView
            plan={currentPlan}
            completedMilestones={completedMilestones}
            onToggleMilestone={handleToggleMilestone}
            onOpenAdvisorChat={handleOpenAdvisorChat}
            onRetakeAssessment={handleResetAssessment}
          />
        )}

        {activeTab === 'roadmap' && !currentPlan && (
          <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">No Roadmap Generated Yet</h2>
            <p className="text-sm text-slate-400">
              Take the quick student interest quiz to generate a custom step-by-step career plan, or pick one from our curated library!
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('assessment')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25"
              >
                Start Assessment
              </button>
              <button
                onClick={() => setActiveTab('explore')}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all"
              >
                Browse Library
              </button>
            </div>
          </div>
        )}

        {activeTab === 'explore' && (
          <CareerExplorer
            onSelectPlan={handleSelectExplorerPlan}
            activePlanId={currentPlan?.id}
          />
        )}
      </main>

      {/* Floating AI Advisor Quick Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white rounded-2xl font-semibold shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs sm:text-sm font-bold">Ask AI Advisor</span>
      </button>

      {/* AI Advisor Chat Drawer */}
      <AdvisorChat
        currentPlan={currentPlan}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={chatInitialPrompt}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 text-xs text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-slate-300">PathFinder</span>
            <span>•</span>
            <span>Empowering students worldwide with data-driven career roadmaps</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button 
              onClick={() => setActiveTab('assessment')} 
              className="hover:text-indigo-400 transition-colors"
            >
              Take Quiz
            </button>
            <button 
              onClick={() => setActiveTab('explore')} 
              className="hover:text-indigo-400 transition-colors"
            >
              Career Library
            </button>
            <button 
              onClick={() => setIsChatOpen(true)} 
              className="hover:text-indigo-400 transition-colors"
            >
              AI Counselor
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
