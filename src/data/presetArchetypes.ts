import { CareerPlan } from '../types/career';

export const PRESET_CAREER_PLANS: CareerPlan[] = [
  {
    id: 'ai-fullstack-engineer',
    title: 'AI Full-Stack Solutions Engineer',
    tagline: 'Engineer end-to-end intelligent applications uniting modern TypeScript/React with cutting-edge Large Language Models and cloud APIs.',
    matchScore: 98,
    matchReason: 'Your combination of logical problem-solving, desire to build hands-on applications, and curiosity for cutting-edge technology aligns directly with the explosive demand for engineers who bridge frontend experiences with AI foundation models.',
    industryOverview: {
      marketDemand: 'Extremely High',
      projectedGrowth: '+34% over the next 5 years',
      entrySalary: '$90,000 – $120,000 / yr',
      midSeniorSalary: '$150,000 – $240,000+ / yr',
      topCompanies: ['Google', 'OpenAI', 'Anthropic', 'Microsoft', 'Stripe', 'Vercel', 'Meta'],
      workLifeBalance: 'High autonomy, prominent remote and hybrid positions with competitive perks.',
      dayInLifeSummary: 'You start by reviewing model generation latency and telemetry, write clean React/Next.js UI components with Tailwind, design backend API endpoints connecting to LLM providers or Vector DBs, and collaborate with product teams on shipping intuitive user experiences.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Phase 1: Foundations & Systems Literacy',
        duration: 'Months 1 – 3',
        objective: 'Master programming fundamentals in modern TypeScript and Python, git version control, and core web architecture.',
        milestones: [
          {
            id: 'm-1-1',
            title: 'CS Fundamentals & Data Structures',
            description: 'Learn arrays, hash maps, algorithms, Big-O notation, and memory mental models.',
            estimatedHours: 40,
            category: 'course'
          },
          {
            id: 'm-1-2',
            title: 'Modern TypeScript & ES6+ Deep Dive',
            description: 'Types, interfaces, async/await, closures, and modular code architecture.',
            estimatedHours: 35,
            category: 'skill'
          },
          {
            id: 'm-1-3',
            title: 'Python for Developers & API Consumption',
            description: 'Virtual environments, FastAPI basics, HTTP clients, and JSON serialization.',
            estimatedHours: 30,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'Harvard CS50: Introduction to Computer Science',
            provider: 'Harvard / edX',
            url: 'https://cs50.harvard.edu/x/',
            isFree: true,
            level: 'Beginner'
          },
          {
            title: 'The Modern JavaScript & TypeScript Bootcamp',
            provider: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/',
            isFree: true,
            level: 'Beginner - Intermediate'
          }
        ],
        coreSkills: ['TypeScript', 'Python', 'Git & GitHub', 'REST APIs', 'Data Structures'],
        tools: ['VS Code', 'Node.js', 'Postman', 'Git', 'Terminal'],
        signatureProject: {
          title: 'Algorithmic Markdown Notes Engine',
          description: 'A lightning-fast local note-taking web application with tagging, search indexing, and GitHub sync.',
          deliverables: ['Live deployed web app', 'Clean README with architecture diagrams', 'TypeScript strict mode enabled'],
          portfolioTip: 'Showcase clean commit history and write automated tests for your search algorithms.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
        }
      },
      {
        phaseNumber: 2,
        title: 'Phase 2: Full-Stack Architecture & Databases',
        duration: 'Months 4 – 6',
        objective: 'Build scalable full-stack applications with relational and vector databases, secure authentication, and cloud deployment.',
        milestones: [
          {
            id: 'm-2-1',
            title: 'PostgreSQL & Drizzle ORM Schema Design',
            description: 'Relational database modeling, migrations, indexing, and query optimization.',
            estimatedHours: 35,
            category: 'skill'
          },
          {
            id: 'm-2-2',
            title: 'Backend API Engineering with Express & Node',
            description: 'RESTful routing, JWT/OAuth authentication, error middlewares, and rate-limiting.',
            estimatedHours: 45,
            category: 'project'
          },
          {
            id: 'm-2-3',
            title: 'State Management & Responsive React UIs',
            description: 'Advanced hooks, component lifecycles, Tailwind CSS responsiveness, and accessibility.',
            estimatedHours: 40,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'Full Stack Open - University of Helsinki',
            provider: 'University of Helsinki',
            url: 'https://fullstackopen.com/en/',
            isFree: true,
            level: 'Intermediate'
          },
          {
            title: 'Designing Data-Intensive Applications Study Guide',
            provider: 'O\'Reilly / Open Community',
            url: 'https://dataintensive.net/',
            isFree: false,
            level: 'Intermediate - Advanced'
          }
        ],
        coreSkills: ['React', 'PostgreSQL', 'Express.js', 'Authentication', 'State Management'],
        tools: ['Docker', 'PostgreSQL / Supabase', 'Vercel / Cloud Run', 'GitHub Actions'],
        signatureProject: {
          title: 'Collaborative Workspace with Real-time Sync',
          description: 'A multi-user workspace featuring document editing, member permissions, live comments, and audit logging.',
          deliverables: ['Responsive full-stack web app', 'Relational database schema with 6+ linked tables', 'Integration test suite'],
          portfolioTip: 'Record a 90-second Loom video demonstrating concurrency and edge-case handling.',
          technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
        }
      },
      {
        phaseNumber: 3,
        title: 'Phase 3: AI Integration, LLM APIs & Vector Search',
        duration: 'Months 7 – 9',
        objective: 'Integrate generative AI APIs, Retrieval-Augmented Generation (RAG), embeddings, prompt engineering, and structured output parsing.',
        milestones: [
          {
            id: 'm-3-1',
            title: 'Gemini SDK & Multi-turn Tool Calling Mastery',
            description: 'Master function calling, JSON schema enforcement, token budget management, and streaming.',
            estimatedHours: 35,
            category: 'skill'
          },
          {
            id: 'm-3-2',
            title: 'Vector Embeddings & Semantic Search Pipelines',
            description: 'Chunking strategies, cosine similarity, Pinecone/pgvector integration, and RAG pipelines.',
            estimatedHours: 45,
            category: 'project'
          },
          {
            id: 'm-3-3',
            title: 'AI Safety, Guardrails & Evaluation Benchmarks',
            description: 'Prompt injection defense, system message formatting, latency caching, and hallucination reduction.',
            estimatedHours: 25,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'LangChain & Vector Databases for Production',
            provider: 'DeepLearning.AI',
            url: 'https://www.deeplearning.ai/',
            isFree: true,
            level: 'Intermediate'
          },
          {
            title: 'Google Cloud AI & Gemini API Foundations',
            provider: 'Google Cloud Skills Boost',
            url: 'https://cloud.google.com/training',
            isFree: true,
            level: 'Intermediate'
          }
        ],
        coreSkills: ['Gemini API', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'LangChain / GenAI SDK'],
        tools: ['Google GenAI SDK', 'pgvector / Pinecone', 'LangSmith', 'Cloud Run'],
        signatureProject: {
          title: 'Intelligent Research Analyst (Agentic RAG Engine)',
          description: 'Upload any complex 50-page PDF report or syllabus and receive synthesized answers with citations, auto-generated flashcards, and conceptual quizzes.',
          deliverables: ['Streaming UI with source citations', 'Document chunking & vector search pipeline', 'Export to PDF and Notion'],
          portfolioTip: 'Show before/after examples of how your embeddings eliminate hallucinations.',
          technologies: ['Gemini 3.8 Flash', 'TypeScript', 'React', 'pgvector', 'Tailwind']
        }
      },
      {
        phaseNumber: 4,
        title: 'Phase 4: Portfolio Polish, Open Source & Placement',
        duration: 'Months 10 – 12',
        objective: 'Polish your public GitHub presence, contribute to open-source developer tooling, practice technical system design, and land high-impact internships or entry-level positions.',
        milestones: [
          {
            id: 'm-4-1',
            title: 'Star Developer Portfolio & Production Deployments',
            description: 'Deploy 3 flagship projects on custom domains with interactive demos, architecture docs, and benchmark stats.',
            estimatedHours: 30,
            category: 'project'
          },
          {
            id: 'm-4-2',
            title: 'Technical Interview & System Design Sprints',
            description: 'Solve 60 curated LeetCode Mediums and master web-scale system design patterns (caching, load balancing, message queues).',
            estimatedHours: 50,
            category: 'skill'
          },
          {
            id: 'm-4-3',
            title: 'Targeted Outreach & Referral Strategy',
            description: 'Network with senior engineers, share build-in-public breakdowns on LinkedIn/X, and apply to 30+ curated roles.',
            estimatedHours: 30,
            category: 'networking'
          }
        ],
        recommendedCourses: [
          {
            title: 'System Design Primer',
            provider: 'Donne Martin / GitHub',
            url: 'https://github.com/donnemartin/system-design-primer',
            isFree: true,
            level: 'Advanced'
          },
          {
            title: 'Tech Interview Handbook',
            provider: 'Yangshun Tay',
            url: 'https://www.techinterviewhandbook.org/',
            isFree: true,
            level: 'Intermediate - Advanced'
          }
        ],
        coreSkills: ['System Design', 'Algorithmic Problem Solving', 'Open-Source Contribution', 'Technical Communication', 'Deployment'],
        tools: ['GitHub CI/CD', 'AWS / Google Cloud', 'Docker', 'LinkedIn'],
        signatureProject: {
          title: 'Open Source AI Developer CLI or Component Library',
          description: 'A published npm package or CLI tool helping web developers benchmark model prompts and token costs directly from their editor.',
          deliverables: ['Published npm package with >50 weekly downloads', 'Comprehensive documentation site', 'Video walkthrough'],
          portfolioTip: 'Highlight open-source contributors or community feedback on your resume.',
          technologies: ['TypeScript', 'Node CLI', 'GitHub Actions', 'npm registry']
        }
      }
    ],
    alternativeCareers: [
      {
        title: 'AI Product Manager',
        matchScore: 91,
        description: 'Lead the strategy, user research, and execution for machine learning and AI features without writing production code 100% of the day.',
        transferableSkills: ['Technical literacy', 'User empathy', 'System architecture', 'Communication']
      },
      {
        title: 'Machine Learning Operations (MLOps) Engineer',
        matchScore: 88,
        description: 'Focus on automated model training pipelines, monitoring drift, containerizing model inference, and infrastructure scaling.',
        transferableSkills: ['Python', 'Docker', 'Cloud architecture', 'CI/CD']
      },
      {
        title: 'Developer Experience (DevRel) Engineer',
        matchScore: 86,
        description: 'Bridge developer communities and software tooling by creating tutorials, building SDKs, and presenting technical demos.',
        transferableSkills: ['Technical writing', 'Full-stack demo builds', 'Public speaking', 'Open source']
      }
    ],
    essentialCertifications: [
      {
        name: 'Google Cloud Associate Cloud Engineer',
        issuer: 'Google Cloud',
        relevance: 'Validates ability to deploy applications, monitor operations, and manage enterprise cloud infrastructure.',
        estimatedCost: '$125'
      },
      {
        name: 'Meta Front-End & Back-End Developer Professional Certificate',
        issuer: 'Coursera / Meta',
        relevance: 'Rigorous industry credential recognized by recruiters for full-stack competencies.',
        estimatedCost: '$49/mo (Coursera Plus)'
      },
      {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        relevance: 'Standard gold badge demonstrating scalable system design and cloud storage concepts.',
        estimatedCost: '$150'
      }
    ],
    potentialPitfalls: [
      {
        obstacle: 'Tutorial Hell (Watching endless coding videos without writing original code)',
        solution: 'Follow the 20/80 rule: spend 20% of your time consuming courses and 80% building standalone projects from scratch with blank files.'
      },
      {
        obstacle: 'Overwhelming Framework Fatigue (Feeling you need to know 15 frameworks at once)',
        solution: 'Master React, TypeScript, and one backend (Node or Python). Once you deeply grasp underlying principles, new libraries take just 2 days to pick up.'
      },
      {
        obstacle: 'Neglecting Networking and Building in the Dark',
        solution: 'Share weekly progress screenshots, code learnings, and live demo links on LinkedIn, X, and GitHub. Most top student internships come through referrals.'
      }
    ],
    firstWeekPlan: [
      {
        day: 'Day 1',
        task: 'Set up pristine VS Code environment, GitHub profile, and install Node.js + Git',
        duration: '2 hours',
        resourceTip: 'Follow GitHub docs on setting up SSH keys and customized profile README.'
      },
      {
        day: 'Day 2',
        task: 'Enroll in Harvard CS50 Week 0 & 1 to solidify computational thinking',
        duration: '3 hours',
        resourceTip: 'Complete the scratch and C memory exercises to understand how computers work under the hood.'
      },
      {
        day: 'Day 3',
        task: 'Build a pure HTML/CSS/JS interactive calculator or pomodoro timer from scratch without copy-pasting',
        duration: '3 hours',
        resourceTip: 'Host it on GitHub Pages immediately to experience your first live web deployment.'
      },
      {
        day: 'Day 4',
        task: 'Learn Modern TypeScript syntax: types, interfaces, generics, and compile your first tsconfig',
        duration: '2.5 hours',
        resourceTip: 'Use TypeScript Playground to test type inference and union narrowing.'
      },
      {
        day: 'Day 5',
        task: 'Scaffold your first React + Tailwind CSS project using Vite',
        duration: '2.5 hours',
        resourceTip: 'Practice breaking a UI mockup into reusable, prop-driven components.'
      },
      {
        day: 'Day 6',
        task: 'Connect to an external public API (e.g. OpenWeather or NASA) and render dynamic card data',
        duration: '3 hours',
        resourceTip: 'Implement loading states, try/catch error handling, and clean responsive CSS grid.'
      },
      {
        day: 'Day 7',
        task: 'Weekly Retrospective & Goal Setting: Push all repos to GitHub and write a short summary post on LinkedIn',
        duration: '1.5 hours',
        resourceTip: 'Tag your post #buildinpublic to start connecting with fellow student builders.'
      }
    ]
  },
  {
    id: 'product-designer-ux',
    title: 'Digital Product Designer & UX Strategist',
    tagline: 'Craft intuitive, accessible digital experiences by conducting user research, building interactive design systems, and bridging aesthetic beauty with business metrics.',
    matchScore: 95,
    matchReason: 'Your visual creativity, empathy for human psychology, and desire to solve real-world problems make product design a naturally fulfilling and highly valued career path.',
    industryOverview: {
      marketDemand: 'High',
      projectedGrowth: '+16% over the next 5 years',
      entrySalary: '$75,000 – $95,000 / yr',
      midSeniorSalary: '$130,000 – $190,000 / yr',
      topCompanies: ['Apple', 'Airbnb', 'Figma', 'Spotify', 'Notion', 'Google', 'Linear'],
      workLifeBalance: 'High work-life balance, collaborative environment, strong remote opportunities.',
      dayInLifeSummary: 'You conduct 1-on-1 user testing sessions, synthesize customer pain points into wireframes, prototype high-fidelity interactions in Figma, and review component libraries with frontend engineers.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Phase 1: Design Fundamentals & Visual Craft',
        duration: 'Months 1 – 3',
        objective: 'Master typography, color theory, layout grids, usability heuristics, and Figma proficiency.',
        milestones: [
          {
            id: 'ux-1-1',
            title: 'Figma Auto-Layout & Component Mastery',
            description: 'Design responsive components, variants, component properties, and layout constraints.',
            estimatedHours: 35,
            category: 'skill'
          },
          {
            id: 'ux-1-2',
            title: 'Typography & Spatial Hierarchy',
            description: 'Learn scale ratios, line heights, contrast accessibility (WCAG AA/AAA), and visual balance.',
            estimatedHours: 25,
            category: 'course'
          },
          {
            id: 'ux-1-3',
            title: 'Nielsen Norman Usability Heuristics',
            description: 'Evaluate existing popular apps against the 10 foundational usability heuristics.',
            estimatedHours: 20,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'Google UX Design Professional Certificate',
            provider: 'Google / Coursera',
            url: 'https://grow.google/certificates/ux-design/',
            isFree: false,
            level: 'Beginner'
          },
          {
            title: 'Figma 101: The Complete Guide',
            provider: 'Figma YouTube Community',
            url: 'https://www.youtube.com/@Figma',
            isFree: true,
            level: 'Beginner'
          }
        ],
        coreSkills: ['Figma', 'Visual Hierarchy', 'Wireframing', 'Typography', 'Heuristic Evaluation'],
        tools: ['Figma', 'Miro', 'Notion', 'Color Contrast Checker'],
        signatureProject: {
          title: 'Campus Food Rescue & Meal Sharing App Redesign',
          description: 'A comprehensive UX case study identifying why students waste dining hall food and redesigning an intuitive peer-to-peer exchange flow.',
          deliverables: ['User personas', 'Low-fidelity wireframes', 'Interactive Figma prototype with micro-interactions'],
          portfolioTip: 'Show your messy early iterations—recruiters love seeing your rationale, not just the polished final screen.',
          technologies: ['Figma', 'FigJam', 'Maze User Testing']
        }
      },
      {
        phaseNumber: 2,
        title: 'Phase 2: User Research & Interaction Architecture',
        duration: 'Months 4 – 6',
        objective: 'Run real user interviews, build journey maps, run quantitative usability tests, and design scalable UI systems.',
        milestones: [
          {
            id: 'ux-2-1',
            title: 'User Interview Scripting & Synthesis',
            description: 'Conduct 5 moderated user tests and synthesize findings into affinity maps and insight cards.',
            estimatedHours: 30,
            category: 'skill'
          },
          {
            id: 'ux-2-2',
            title: 'Design Systems & Token Architecture',
            description: 'Build a cohesive 0-to-1 design system with color tokens, states (default/hover/active/disabled), and icon sets.',
            estimatedHours: 40,
            category: 'project'
          },
          {
            id: 'ux-2-3',
            title: 'Micro-interactions & Prototyping',
            description: 'Animate transitions, tab bar dynamics, and smart-animate flows in Figma or ProtoPie.',
            estimatedHours: 30,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'Design Systems with Brad Frost',
            provider: 'Design Systems Community',
            url: 'https://atomicdesign.bradfrost.com/',
            isFree: true,
            level: 'Intermediate'
          }
        ],
        coreSkills: ['User Research', 'Design Systems', 'Advanced Prototyping', 'Affinity Mapping', 'Usability Testing'],
        tools: ['ProtoPie', 'Maze', 'LottieFiles', 'Figma Tokens'],
        signatureProject: {
          title: 'Comprehensive Enterprise SaaS Dashboard System',
          description: 'A multi-tier analytics dashboard with dark/light mode, tokenized design components, and custom data visualizer widgets.',
          deliverables: ['Full design system documentation', 'Desktop and mobile responsive viewports', 'Figma community publish'],
          portfolioTip: 'Highlight how you designed for accessibility and edge cases like long text strings and zero-state data.',
          technologies: ['Figma', 'Design Tokens', 'Storybook concepts']
        }
      },
      {
        phaseNumber: 3,
        title: 'Phase 3: Frontend Literacy & Developer Collaboration',
        duration: 'Months 7 – 9',
        objective: 'Learn HTML, CSS, and Tailwind basics so you can design with code constraints and speak fluent engineer.',
        milestones: [
          {
            id: 'ux-3-1',
            title: 'HTML5 & Modern CSS / Tailwind Grid Mastery',
            description: 'Understand CSS Box Model, Flexbox, Grid, and how browsers actually render Figma layers.',
            estimatedHours: 35,
            category: 'skill'
          },
          {
            id: 'ux-3-2',
            title: 'Design Handoff & Redlines Documentation',
            description: 'Create developer-ready inspection specs with spacing tokens, responsive break points, and state specs.',
            estimatedHours: 25,
            category: 'project'
          }
        ],
        recommendedCourses: [
          {
            title: 'Responsive Web Design Certification',
            provider: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/',
            isFree: true,
            level: 'Beginner - Intermediate'
          }
        ],
        coreSkills: ['HTML/CSS', 'Tailwind CSS', 'Developer Handoff', 'Component Specs', 'Design QA'],
        tools: ['VS Code', 'Chrome DevTools', 'Zeplin / Figma Dev Mode', 'GitHub'],
        signatureProject: {
          title: 'Personal Portfolio Website (Designed & Coded)',
          description: 'A custom portfolio website showcasing your best 3 UX case studies, built and deployed live on your personal domain.',
          deliverables: ['Live responsive website', '3 in-depth case studies with problem, process, and metric outcomes', 'Resume download'],
          portfolioTip: 'Recruiters spend 45 seconds on portfolio sites; make your case study summaries scannable with bold callouts.',
          technologies: ['Figma', 'HTML/Tailwind', 'Vite / Vercel']
        }
      },
      {
        phaseNumber: 4,
        title: 'Phase 4: Case Study Audits, Whiteboard Challenges & Placement',
        duration: 'Months 10 – 12',
        objective: 'Refine portfolio storytelling, prepare for app critiques and whiteboard design challenges, and secure design roles.',
        milestones: [
          {
            id: 'ux-4-1',
            title: 'Portfolio Presentation Deck & Peer Review',
            description: 'Turn your top case study into a 15-minute presentation deck for interview rounds.',
            estimatedHours: 25,
            category: 'project'
          },
          {
            id: 'ux-4-2',
            title: 'Whiteboard Design Challenge Drills',
            description: 'Practice 10 timed product thinking prompts (e.g., "Design an ATM for children" or "Design a library app for astronauts").',
            estimatedHours: 30,
            category: 'skill'
          },
          {
            id: 'ux-4-3',
            title: 'Targeted Outreach & Design Community Engagement',
            description: 'Attend ADPList mentorship sessions, solicit feedback from senior designers, and apply to top design internships.',
            estimatedHours: 30,
            category: 'networking'
          }
        ],
        recommendedCourses: [
          {
            title: 'Solving Product Design Exercises',
            provider: 'Artiom Dashinsky',
            url: 'https://productdesigninterview.com/',
            isFree: false,
            level: 'Intermediate - Advanced'
          }
        ],
        coreSkills: ['Storytelling', 'App Critique', 'Whiteboard Problem Solving', 'Stakeholder Pitching', 'Cross-functional Alignment'],
        tools: ['ADPList', 'LinkedIn', 'Figma Slides', 'Pitch'],
        signatureProject: {
          title: 'AI-Powered Focus & Neurodiverse Study Companion',
          description: 'An end-to-end mobile app concept engineered specifically for students with ADHD to minimize cognitive overload.',
          deliverables: ['Research whitepaper summary', 'Complete user flow & interactive prototype', 'Design critique recording'],
          portfolioTip: 'Highlight accessibility choices such as low-stimulation color palettes and haptic feedback cues.',
          technologies: ['Figma', 'Maze', 'UserTesting']
        }
      }
    ],
    alternativeCareers: [
      {
        title: 'Design Technologist / Creative Coder',
        matchScore: 90,
        description: 'Code working prototypes in React and Three.js to bridge the gap between design visions and engineering reality.',
        transferableSkills: ['Figma', 'Frontend code', 'Motion design', 'System thinking']
      },
      {
        title: 'Product Manager (User-Focused)',
        matchScore: 87,
        description: 'Define what features get built by combining user empathy with business prioritization and roadmapping.',
        transferableSkills: ['User research', 'Roadmapping', 'Feature prioritization', 'Cross-functional leadership']
      },
      {
        title: 'Design Systems Architect',
        matchScore: 89,
        description: 'Focus exclusively on creating and scaling company-wide design tokens, components, and documentation for hundreds of designers and engineers.',
        transferableSkills: ['Figma components', 'Tokens', 'Accessibility', 'Documentation']
      }
    ],
    essentialCertifications: [
      {
        name: 'Google UX Design Professional Certificate',
        issuer: 'Google',
        relevance: 'Demonstrates foundational 7-course mastery in user research, wireframing, and Figma case studies.',
        estimatedCost: '$49/mo (Coursera)'
      },
      {
        name: 'Nielsen Norman Group UX Master Certification',
        issuer: 'NN/g',
        relevance: 'World standard certification for UX researchers and senior product designers.',
        estimatedCost: 'Premium'
      }
    ],
    potentialPitfalls: [
      {
        obstacle: 'Dribbble Syndrome (Making screens that look pretty but have terrible usability and zero real user testing)',
        solution: 'Always prioritize clarity, accessibility, and real problem-solving over flashy animations that confuse users.'
      },
      {
        obstacle: 'Writing 5000-word case studies that recruiters never read',
        solution: 'Use scannable summaries, bold takeaway callouts, before/after comparison sliders, and quick 30-second video clips.'
      }
    ],
    firstWeekPlan: [
      {
        day: 'Day 1',
        task: 'Install Figma, set up keyboard shortcuts, and explore the Figma Community files',
        duration: '2 hours',
        resourceTip: 'Clone an official design system like Apple iOS 18 UI kit or Google Material 3 to inspect component structure.'
      },
      {
        day: 'Day 2',
        task: 'Pick your favorite mobile app (Spotify, Duolingo, Airbnb) and recreate 3 screens pixel-by-pixel in Figma',
        duration: '3 hours',
        resourceTip: 'Pay close attention to padding, typography scale, icon sizes, and contrast.'
      },
      {
        day: 'Day 3',
        task: 'Learn Auto-Layout: Build responsive buttons, navigation bars, and cards that stretch without breaking',
        duration: '2.5 hours',
        resourceTip: 'Follow Figma Auto-Layout interactive tutorials.'
      },
      {
        day: 'Day 4',
        task: 'Study Don Norman’s book "The Design of Everyday Things" (Chapters 1 & 2)',
        duration: '2 hours',
        resourceTip: 'Take notes on affordances, signifiers, constraints, and mental models.'
      },
      {
        day: 'Day 5',
        task: 'Conduct a usability audit of a university or government website and list 5 friction points with solutions',
        duration: '3 hours',
        resourceTip: 'Sketch 3 quick wireframe redesigns on paper first before jumping into digital tools.'
      },
      {
        day: 'Day 6',
        task: 'Create an interactive prototype linking your redesigned screens with transitions and back buttons',
        duration: '2.5 hours',
        resourceTip: 'Test the prototype on your mobile phone via the Figma Mirror app.'
      },
      {
        day: 'Day 7',
        task: 'Book your first free mentor session on ADPList.org with an experienced product designer',
        duration: '1.5 hours',
        resourceTip: 'Prepare 3 specific questions about portfolio creation and career transition.'
      }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Defense & Cloud Security Analyst',
    tagline: 'Protect critical infrastructure, investigate threat intelligence, audit cloud configurations, and design resilient security architectures against modern cyber adversaries.',
    matchScore: 94,
    matchReason: 'Your affinity for systematic logic, puzzle solving, high ethical standards, and curiosity about network vulnerabilities align perfectly with the massive global shortfall in cybersecurity professionals.',
    industryOverview: {
      marketDemand: 'Extremely High',
      projectedGrowth: '+32% over the next 5 years (Huge shortage)',
      entrySalary: '$82,000 – $105,000 / yr',
      midSeniorSalary: '$140,000 – $210,000 / yr',
      topCompanies: ['CrowdStrike', 'Palo Alto Networks', 'Mandiant / Google Cloud', 'Cloudflare', 'Microsoft Security', 'Department of Defense / Defense Contractors'],
      workLifeBalance: 'Challenging on-call rotations during critical incidents, but exceptionally high job security and compensation.',
      dayInLifeSummary: 'You monitor SIEM alerts (Splunk/Elastic), triage anomalous network packets, write automated Python detection scripts, conduct vulnerability scans on cloud infrastructure, and educate teams on social engineering prevention.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Phase 1: Networking & Linux Operating Systems',
        duration: 'Months 1 – 3',
        objective: 'Master TCP/IP, DNS, subnets, Linux bash scripting, virtualization, and computer hardware fundamentals.',
        milestones: [
          {
            id: 'sec-1-1',
            title: 'Linux CLI & Administration Mastery',
            description: 'Permissions, processes, cron jobs, file systems, and bash scripting in Ubuntu/Debian.',
            estimatedHours: 40,
            category: 'skill'
          },
          {
            id: 'sec-1-2',
            title: 'Computer Networking (OSI Model & Wireshark)',
            description: 'Packet analysis, TCP 3-way handshake, ARP, DNS spoofing, and firewalls.',
            estimatedHours: 45,
            category: 'course'
          },
          {
            id: 'sec-1-3',
            title: 'Build a Virtualized Home Lab',
            description: 'Deploy VirtualBox/Proxmox with Kali Linux, pfSense firewall, and vulnerable target VMs.',
            estimatedHours: 30,
            category: 'project'
          }
        ],
        recommendedCourses: [
          {
            title: 'Professor Messer CompTIA Security+ & Network+ Training',
            provider: 'Professor Messer YouTube',
            url: 'https://www.professormesser.com/',
            isFree: true,
            level: 'Beginner'
          },
          {
            title: 'OverTheWire: Bandit (Linux Wargame)',
            provider: 'OverTheWire Community',
            url: 'https://overthewire.org/wargames/bandit/',
            isFree: true,
            level: 'Beginner'
          }
        ],
        coreSkills: ['Linux CLI', 'TCP/IP Networking', 'Wireshark', 'Bash Scripting', 'Virtualization'],
        tools: ['Kali Linux', 'Wireshark', 'VirtualBox / Proxmox', 'Nmap', 'Bash'],
        signatureProject: {
          title: 'Isolated Network Defense Home Lab',
          description: 'A fully virtualized dual-subnet lab with an active firewall, syslog server, and captured packet logs analyzing synthetic brute-force attacks.',
          deliverables: ['Network topology architecture diagram', 'Step-by-step documentation write-up on GitHub', 'Wireshark PCAP analysis report'],
          portfolioTip: 'Show how you configured firewall rules to detect and isolate unauthorized port sweeps.',
          technologies: ['VirtualBox', 'pfSense', 'Ubuntu Server', 'Wireshark']
        }
      },
      {
        phaseNumber: 2,
        title: 'Phase 2: Vulnerability Analysis & Python Security Scripting',
        duration: 'Months 4 – 6',
        objective: 'Learn OWASP Top 10 vulnerabilities, web security concepts, cryptography basics, and automated Python scripting.',
        milestones: [
          {
            id: 'sec-2-1',
            title: 'OWASP Top 10 Web Vulnerabilities',
            description: 'SQL Injection, Cross-Site Scripting (XSS), Broken Object Level Authorization (BOLA), and CSRF.',
            estimatedHours: 40,
            category: 'skill'
          },
          {
            id: 'sec-2-2',
            title: 'Python for Penetration Testing & Threat Hunting',
            description: 'Port scanners, packet sniffers, banner grabbers, and log parsing scripts.',
            estimatedHours: 45,
            category: 'project'
          },
          {
            id: 'sec-2-3',
            title: 'TryHackMe & HackTheBox Hands-On CTFs',
            description: 'Complete 30 guided rooms on TryHackMe (Pre-Security and Jr Penetration Tester paths).',
            estimatedHours: 50,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'TryHackMe: Jr Penetration Tester & Cyber Defense Paths',
            provider: 'TryHackMe',
            url: 'https://tryhackme.com/',
            isFree: false,
            level: 'Beginner - Intermediate'
          },
          {
            title: 'PortSwigger Web Security Academy',
            provider: 'PortSwigger',
            url: 'https://portswigger.net/web-security',
            isFree: true,
            level: 'Intermediate'
          }
        ],
        coreSkills: ['OWASP Top 10', 'Python Scripting', 'Burp Suite', 'Vulnerability Assessment', 'Cryptography'],
        tools: ['Burp Suite', 'Nmap', 'Python', 'Metasploit', 'Hashcat'],
        signatureProject: {
          title: 'Automated Port & Vulnerability Scanner with Alerting',
          description: 'A custom Python tool that scans target IPs, compares open ports against known CVE databases, and pings an alert webhook on Discord/Slack.',
          deliverables: ['Modular Python codebase on GitHub', 'CLI interface with clean terminal color output', 'Sample vulnerability report PDF export'],
          portfolioTip: 'Emphasize your understanding of ethical boundaries and legal authorization scopes.',
          technologies: ['Python', 'Socket library', 'NVD / CVE API', 'Rich CLI']
        }
      },
      {
        phaseNumber: 3,
        title: 'Phase 3: SIEM, Incident Response & Cloud Security',
        duration: 'Months 7 – 9',
        objective: 'Deploy enterprise Security Information & Event Management (SIEM), analyze malicious logs, and secure AWS/GCP cloud environments.',
        milestones: [
          {
            id: 'sec-3-1',
            title: 'Elastic / Splunk SIEM Log Ingestion & Queries',
            description: 'Ingest Windows Event logs and Sysmon telemetry, write SPL/KQL queries to detect pass-the-hash attacks.',
            estimatedHours: 40,
            category: 'skill'
          },
          {
            id: 'sec-3-2',
            title: 'Cloud Security Architecture (IAM & CloudTrail)',
            description: 'Enforce Principle of Least Privilege, S3 bucket hardening, and multi-factor authentication policies in AWS/GCP.',
            estimatedHours: 35,
            category: 'skill'
          }
        ],
        recommendedCourses: [
          {
            title: 'AWS Certified Security Specialty Preparation',
            provider: 'AWS Skill Builder',
            url: 'https://aws.amazon.com/certification/',
            isFree: true,
            level: 'Intermediate - Advanced'
          }
        ],
        coreSkills: ['SIEM (Splunk/Elastic)', 'Cloud IAM', 'Incident Response', 'Threat Hunting', 'MITRE ATT&CK Framework'],
        tools: ['Splunk', 'Sysmon', 'AWS CloudTrail', 'Suricata IDS'],
        signatureProject: {
          title: 'Live Cloud Honeypot & Attack Telemetry Dashboard',
          description: 'Deploy an intentionally exposed cloud server with low-interaction honeypots (Cowrie) to log and visualize global brute-force attacks in real time.',
          deliverables: ['Real-time geolocation map of attack origins', 'Analysis of most attempted passwords and usernames', 'Published Medium write-up'],
          portfolioTip: 'This project makes an unforgettable conversation starter in job interviews.',
          technologies: ['Ubuntu Cloud VM', 'Cowrie Honeypot', 'Elasticsearch / Kibana']
        }
      },
      {
        phaseNumber: 4,
        title: 'Phase 4: Industry Certifications & SOC Analyst Placement',
        duration: 'Months 10 – 12',
        objective: 'Pass CompTIA Security+ or BTL1, participate in collegiate CTFs, and secure a position as a Tier-1 SOC Analyst or Cloud Security Associate.',
        milestones: [
          {
            id: 'sec-4-1',
            title: 'Pass CompTIA Security+ Exam',
            description: 'Achieve passing score (750+) on the current CompTIA Security+ certification exam.',
            estimatedHours: 40,
            category: 'certification'
          },
          {
            id: 'sec-4-2',
            title: 'Blue Team Level 1 (BTL1) or CySA+ Prep',
            description: 'Practice 24-hour incident response simulation, phishing email analysis, and memory forensics with Volatility.',
            estimatedHours: 45,
            category: 'project'
          },
          {
            id: 'sec-4-3',
            title: 'Security Resume, CTF Badges & SOC Applications',
            description: 'Highlight your home lab write-ups, TryHackMe top 5% rank, and submit applications for Security Operations Center (SOC) roles.',
            estimatedHours: 30,
            category: 'networking'
          }
        ],
        recommendedCourses: [
          {
            title: 'Blue Team Level 1 (BTL1) Certification',
            provider: 'Security Blue Team',
            url: 'https://securityblue.team/',
            isFree: false,
            level: 'Intermediate'
          }
        ],
        coreSkills: ['Forensics', 'Incident Triage', 'Security Auditing', 'Reporting', 'Defense-in-Depth'],
        tools: ['Autopsy', 'Volatility', 'CyberChef', 'VirusTotal'],
        signatureProject: {
          title: 'End-to-End Ransomware Incident Response Playbook',
          description: 'A realistic enterprise incident response playbook detailing containment, eradication, and recovery procedures following a simulated endpoint compromise.',
          deliverables: ['Professional Markdown playbook', 'Communication templates for legal and executive teams', 'Technical IOC report'],
          portfolioTip: 'Show that you understand both technical forensic analysis and executive communication during crises.',
          technologies: ['MITRE ATT&CK', 'Sysmon', 'Markdown', 'Git']
        }
      }
    ],
    alternativeCareers: [
      {
        title: 'Penetration Tester / Ethical Hacker',
        matchScore: 92,
        description: 'Simulate real cyberattacks on client systems to uncover vulnerabilities before malicious hackers exploit them.',
        transferableSkills: ['Network analysis', 'Exploit mechanics', 'Burp Suite', 'Ethical mindset']
      },
      {
        title: 'DevSecOps Engineer',
        matchScore: 89,
        description: 'Automate static and dynamic security scans (SAST/DAST) directly into developer CI/CD pipelines.',
        transferableSkills: ['Git', 'Python/Bash', 'Docker', 'Vulnerability scanning']
      },
      {
        title: 'Governance, Risk & Compliance (GRC) Analyst',
        matchScore: 84,
        description: 'Audit company policies and technical controls against regulatory standards (SOC2, ISO 27001, HIPAA).',
        transferableSkills: ['Risk management', 'Technical writing', 'Policy auditing', 'Attention to detail']
      }
    ],
    essentialCertifications: [
      {
        name: 'CompTIA Security+',
        issuer: 'CompTIA',
        relevance: 'The premier industry benchmark required for almost all junior cybersecurity and DoD 8570 roles.',
        estimatedCost: '$392 (Student discount available)'
      },
      {
        name: 'Blue Team Level 1 (BTL1)',
        issuer: 'Security Blue Team',
        relevance: '100% practical 24-hour defensive exam covering SIEM, phishing, digital forensics, and threat intelligence.',
        estimatedCost: '£399'
      },
      {
        name: 'AWS Certified Security - Specialty',
        issuer: 'AWS',
        relevance: 'Demonstrates deep competence in cloud identity, data encryption, and automated incident response.',
        estimatedCost: '$300'
      }
    ],
    potentialPitfalls: [
      {
        obstacle: 'Focusing exclusively on flashy offensive hacking without knowing core networking',
        solution: '90% of open entry-level cybersecurity jobs are defensive (SOC Analyst, Security Engineer). Master TCP/IP and log analysis first.'
      },
      {
        obstacle: 'Failing to document lab work publicly',
        solution: 'Maintain a GitHub repository or personal blog with detailed write-ups of CTF challenges and home lab topologies. That is your proof of work.'
      }
    ],
    firstWeekPlan: [
      {
        day: 'Day 1',
        task: 'Install Oracle VirtualBox and create an Ubuntu Server VM to practice basic Linux commands',
        duration: '2 hours',
        resourceTip: 'Practice navigating directories, editing files with nano/vim, and inspecting system logs in /var/log.'
      },
      {
        day: 'Day 2',
        task: 'Create a free account on TryHackMe and complete the "Linux Fundamentals" and "Intro to Networking" modules',
        duration: '3 hours',
        resourceTip: 'Take handwritten or Obsidian notes of all new commands you encounter.'
      },
      {
        day: 'Day 3',
        task: 'Download Wireshark and capture packets while visiting HTTP vs HTTPS websites',
        duration: '2.5 hours',
        resourceTip: 'Inspect the TCP handshake (SYN, SYN-ACK, ACK) and note how TLS hides plaintext passwords.'
      },
      {
        day: 'Day 4',
        task: 'Write a basic Python script that pings an IP address and checks if port 80 and 443 are listening',
        duration: '2.5 hours',
        resourceTip: 'Use Python\'s built-in `socket` module.'
      },
      {
        day: 'Day 5',
        task: 'Complete 5 Bandit wargame levels on OverTheWire to level up Linux command chaining',
        duration: '2 hours',
        resourceTip: 'Learn how to use grep, find, base64, and pipe redirection.'
      },
      {
        day: 'Day 6',
        task: 'Watch Professor Messer Security+ Domain 1 videos on social engineering and malware types',
        duration: '3 hours',
        resourceTip: 'Understand the difference between phishing, spear phishing, vishing, and watering hole attacks.'
      },
      {
        day: 'Day 7',
        task: 'Synthesize your week: Create a GitHub repo titled "my-cybersecurity-journey" and commit your week-1 lab notes',
        duration: '1.5 hours',
        resourceTip: 'Keep your notes formatted neatly with Markdown tables and code snippets.'
      }
    ]
  }
];
