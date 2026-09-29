export interface AssessmentData {
  name: string;
  educationLevel: 'high_school' | 'college_early' | 'college_senior' | 'postgrad' | 'career_switcher';
  currentField: string;
  primaryInterests: string[];
  strengths: string[];
  workStyle: string;
  workEnvironment: string;
  values: string[];
  targetTimeline: '6_months' | '1_year' | '2_years' | '4_years';
  dreamGoal: string;
  difficultyPreference: 'beginner' | 'intermediate' | 'advanced';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  estimatedHours: number;
  category: 'course' | 'project' | 'skill' | 'certification' | 'networking';
}

export interface CourseRecommendation {
  title: string;
  provider: string;
  url?: string;
  isFree: boolean;
  level: string;
}

export interface SignatureProject {
  title: string;
  description: string;
  deliverables: string[];
  portfolioTip: string;
  technologies: string[];
}

export interface RoadmapPhase {
  phaseNumber: number;
  title: string;
  duration: string;
  objective: string;
  milestones: Milestone[];
  recommendedCourses: CourseRecommendation[];
  coreSkills: string[];
  tools: string[];
  signatureProject: SignatureProject;
}

export interface AlternativeCareer {
  title: string;
  matchScore: number;
  description: string;
  transferableSkills: string[];
}

export interface EssentialCertification {
  name: string;
  issuer: string;
  relevance: string;
  estimatedCost: string;
}

export interface PotentialPitfall {
  obstacle: string;
  solution: string;
}

export interface DayPlan {
  day: string;
  task: string;
  duration: string;
  resourceTip: string;
}

export interface IndustryOverview {
  marketDemand: 'Extremely High' | 'High' | 'Moderate' | 'Growing Rapidly';
  projectedGrowth: string;
  entrySalary: string;
  midSeniorSalary: string;
  topCompanies: string[];
  workLifeBalance: string;
  dayInLifeSummary: string;
}

export interface CareerPlan {
  id: string;
  title: string;
  tagline: string;
  matchScore: number;
  matchReason: string;
  industryOverview: IndustryOverview;
  phases: RoadmapPhase[];
  alternativeCareers: AlternativeCareer[];
  essentialCertifications: EssentialCertification[];
  potentialPitfalls: PotentialPitfall[];
  firstWeekPlan: DayPlan[];
  generatedAt?: string;
  studentName?: string;
  studentProfileSummary?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
