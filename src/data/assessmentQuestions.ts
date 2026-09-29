export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  iconName?: string;
}

export const EDUCATION_LEVELS: QuestionOption[] = [
  { id: 'high_school', label: 'High School Student', description: 'Exploring career paths before choosing a major or university' },
  { id: 'college_early', label: 'College Undergrad (Years 1–2)', description: 'Building fundamentals and exploring internship readiness' },
  { id: 'college_senior', label: 'College Senior / Recent Grad', description: 'Focused on landing first entry-level role or graduate program' },
  { id: 'postgrad', label: 'Graduate / Master\'s Student', description: 'Specializing in advanced research, industry, or leadership' },
  { id: 'career_switcher', label: 'Self-Taught / Career Switcher', description: 'Transitioning into high-growth tech or modern industry' }
];

export const INTEREST_CATEGORIES = [
  {
    category: 'Technology & Computing',
    items: [
      'Artificial Intelligence & Machine Learning',
      'Full-Stack Web Development',
      'Mobile App Development (iOS/Android)',
      'Cybersecurity & Ethical Hacking',
      'Cloud Computing & DevOps',
      'Game Design & 3D Interactive Worlds',
      'Data Science & Analytics',
      'Robotics & Embedded Hardware',
      'Blockchain & Web3 Systems'
    ]
  },
  {
    category: 'Creative, Design & Media',
    items: [
      'UI/UX & Product Design',
      'Brand Identity & Visual Arts',
      'Motion Design & 3D Animation',
      'Digital Marketing & Content Strategy',
      'Technical Writing & Journalism',
      'Music Production & Audio Engineering'
    ]
  },
  {
    category: 'Sciences, Health & Environment',
    items: [
      'Biomedical Science & Health Tech',
      'Renewable Energy & Sustainability',
      'Neuroscience & Cognitive Science',
      'Genomics & Bioinformatics',
      'Environmental Conservation & Policy'
    ]
  },
  {
    category: 'Business, Leadership & Strategy',
    items: [
      'Startup Entrepreneurship',
      'Product Management',
      'Quantitative Finance & FinTech',
      'Management Consulting & Strategy',
      'Venture Capital & Investment Banking'
    ]
  }
];

export const WORK_STYLES: QuestionOption[] = [
  {
    id: 'hands_on_builder',
    label: 'Hands-on Builder & Maker',
    description: 'I love writing code, designing physical models, or crafting tangible digital products directly.'
  },
  {
    id: 'problem_solver',
    label: 'Analytical Problem Solver',
    description: 'I thrive on complex math, debugging logic, optimizing algorithms, and finding subtle patterns in data.'
  },
  {
    id: 'people_leader',
    label: 'Collaborative Leader & Communicator',
    description: 'I get energized by bringing teams together, pitching ideas, mentoring, and translating technical ideas.'
  },
  {
    id: 'creative_storyteller',
    label: 'Visual & Creative Visionary',
    description: 'I care deeply about aesthetics, emotional resonance, typography, user friction, and storytelling.'
  },
  {
    id: 'deep_researcher',
    label: 'Deep Academic & Research Thinker',
    description: 'I prefer diving deep into papers, conducting experiments, and seeking foundational truth over rapid shipping.'
  }
];

export const WORK_ENVIRONMENTS: QuestionOption[] = [
  {
    id: 'fast_startup',
    label: 'High-growth Tech Startup',
    description: 'Fast-paced, wear many hats, high ownership, steep learning curve.'
  },
  {
    id: 'established_tech',
    label: 'Global Tech & Fortune 500',
    description: 'Structured mentorship, extensive resources, high compensation, clear promotions.'
  },
  {
    id: 'remote_global',
    label: 'Fully Remote & Flexible',
    description: 'Freedom to work from anywhere, asynchronous communication, high self-management.'
  },
  {
    id: 'research_lab',
    label: 'Research Lab / University / Non-Profit',
    description: 'Mission-driven, pushing boundaries of science or social impact without corporate bureaucracy.'
  },
  {
    id: 'solo_founder',
    label: 'Bootstrapped Founder / Freelancer',
    description: 'Total independence, building your own agency, software tools, or consulting practice.'
  }
];

export const STRENGTH_OPTIONS = [
  'Logical Reasoning & Math',
  'Coding & Technical Architecture',
  'Aesthetic Sense & Visual Design',
  'Written & Verbal Storytelling',
  'Empathy & Active Listening',
  'Rapid Self-Learning & Curiosity',
  'Project Management & Organization',
  'Public Speaking & Persuasion',
  'Data Interpretation & Statistics',
  'Tenacity & Debugging Resilience'
];

export const VALUE_OPTIONS = [
  'High Earning Potential & Wealth Creation',
  'Work-Life Balance & Personal Time',
  'Solving Crucial Global Problems (Climate, Health, Education)',
  'Creative Freedom & Autonomy',
  'Continuous Intellectual Growth & Innovation',
  'Job Security & Stable Market Demand',
  'International Mobility & Travel'
];

export const TIMELINE_OPTIONS: QuestionOption[] = [
  { id: '6_months', label: 'Accelerated Sprint (6 Months)', description: 'Intensive bootcamps, rapid skill acquisition, aiming for immediate junior roles or internships' },
  { id: '1_year', label: '1-Year Structured Roadmap', description: 'Balanced study alongside school or job to build an undeniable portfolio and credentials' },
  { id: '2_years', label: '2-Year University / Transition Track', description: 'Deep foundational mastery, 2 distinct internships, and comprehensive thesis/capstone' },
  { id: '4_years', label: '4-Year Long-Term Undergraduate Degree', description: 'Comprehensive academic trajectory from freshman exploration to elite senior placement' }
];

export const PRESET_STUDENT_PROFILES = [
  {
    label: 'AI & Full-Stack Builder',
    badge: 'Popular',
    desc: 'Aspires to build autonomous AI agents, web apps, and modern software products.',
    data: {
      name: 'Alex Chen',
      educationLevel: 'college_early' as const,
      currentField: 'Computer Science & Engineering',
      primaryInterests: ['Artificial Intelligence & Machine Learning', 'Full-Stack Web Development', 'Cloud Computing & DevOps'],
      strengths: ['Coding & Technical Architecture', 'Logical Reasoning & Math', 'Rapid Self-Learning & Curiosity'],
      workStyle: 'hands_on_builder',
      workEnvironment: 'fast_startup',
      values: ['High Earning Potential & Wealth Creation', 'Continuous Intellectual Growth & Innovation'],
      targetTimeline: '1_year' as const,
      dreamGoal: 'Build an AI-powered SaaS product and land a software engineering role at an innovative tech company.',
      difficultyPreference: 'intermediate' as const
    }
  },
  {
    label: 'UI/UX & Product Design Specialist',
    badge: 'Creative',
    desc: 'Combines psychology, Figma mastery, design systems, and frontend intuition.',
    data: {
      name: 'Maya Patel',
      educationLevel: 'college_early' as const,
      currentField: 'Cognitive Science & Interaction Design',
      primaryInterests: ['UI/UX & Product Design', 'Brand Identity & Visual Arts', 'Full-Stack Web Development'],
      strengths: ['Aesthetic Sense & Visual Design', 'Empathy & Active Listening', 'Written & Verbal Storytelling'],
      workStyle: 'creative_storyteller',
      workEnvironment: 'remote_global',
      values: ['Creative Freedom & Autonomy', 'Work-Life Balance & Personal Time'],
      targetTimeline: '1_year' as const,
      dreamGoal: 'Design intuitive, human-centered applications for companies like Airbnb or Figma.',
      difficultyPreference: 'beginner' as const
    }
  },
  {
    label: 'Cyber Defense & Security Engineer',
    badge: 'High Demand',
    desc: 'Passionate about network defense, cloud infrastructure protection, and ethical security.',
    data: {
      name: 'Jordan Rivera',
      educationLevel: 'college_senior' as const,
      currentField: 'Information Technology / Cyber Systems',
      primaryInterests: ['Cybersecurity & Ethical Hacking', 'Cloud Computing & DevOps'],
      strengths: ['Logical Reasoning & Math', 'Tenacity & Debugging Resilience', 'Project Management & Organization'],
      workStyle: 'problem_solver',
      workEnvironment: 'established_tech',
      values: ['Job Security & Stable Market Demand', 'High Earning Potential & Wealth Creation'],
      targetTimeline: '6_months' as const,
      dreamGoal: 'Earn Security+ and land an entry-level SOC Analyst or Cloud Security Engineer role.',
      difficultyPreference: 'intermediate' as const
    }
  }
];
