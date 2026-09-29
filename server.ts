import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { PRESET_CAREER_PLANS } from './src/data/presetArchetypes';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK if API key is provided
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI();
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Fallback intelligent generator when offline or no API key
function synthesizeFallbackPlan(assessment: any) {
  // Find closest archetype
  const interests: string[] = assessment.primaryInterests || [];
  const interestsText = interests.join(' ').toLowerCase();
  
  let basePlan = PRESET_CAREER_PLANS[0]; // Default: AI Full-stack
  if (interestsText.includes('design') || interestsText.includes('ui') || interestsText.includes('art') || assessment.workStyle === 'creative_storyteller') {
    basePlan = PRESET_CAREER_PLANS[1]; // Product Designer
  } else if (interestsText.includes('cyber') || interestsText.includes('security') || interestsText.includes('cloud')) {
    basePlan = PRESET_CAREER_PLANS[2]; // Cybersecurity
  }

  // Deep clone and tailor with student specifics
  const personalized = JSON.parse(JSON.stringify(basePlan));
  personalized.id = 'plan-' + Date.now();
  personalized.studentName = assessment.name || 'Student';
  personalized.studentProfileSummary = `${assessment.educationLevel?.replace('_', ' ')} student passionate about ${interests.slice(0, 3).join(', ')}`;
  personalized.generatedAt = new Date().toISOString();
  
  if (assessment.dreamGoal) {
    personalized.matchReason += ` Furthermore, this path directly advances your personal aspiration: "${assessment.dreamGoal}".`;
  }
  
  return personalized;
}

// API: Generate Career Plan
app.post('/api/generate-plan', async (req: Request, res: Response) => {
  const assessment = req.body;

  if (!assessment) {
    return res.status(400).json({ error: 'Assessment data is required.' });
  }

  // If Gemini API is available, generate personalized roadmap with gemini-3.8-flash
  if (process.env.GEMINI_API_KEY) {
    try {
      const client = aiClient || new GoogleGenAI();
      
      const systemInstruction = `You are an elite, inspiring Silicon Valley career counselor, university advisor, and industry curriculum architect.
Your mission is to analyze the student's background, passions, strengths, work style, values, and dream goal, and formulate a comprehensive, inspiring, actionable "Perfect Career Plan and Step-by-Step Roadmap".

Return ONLY raw valid JSON conforming to this exact structure (no markdown fences, no backticks):
{
  "id": "generated-plan-id",
  "title": "Exact Title of Ideal Career (e.g., Full-Stack AI Engineer, Quantum Software Researcher, Human-Centered Health Tech Designer)",
  "tagline": "Inspiring 1-sentence value proposition of this career role",
  "matchScore": 96,
  "matchReason": "Detailed 3-4 sentence explanation highlighting how their specific strengths, chosen interests, and work style make this an extraordinary fit.",
  "industryOverview": {
    "marketDemand": "Extremely High" | "High" | "Growing Rapidly",
    "projectedGrowth": "+25% to +35% over next 5 years",
    "entrySalary": "$85,000 - $115,000 / yr",
    "midSeniorSalary": "$145,000 - $230,000+ / yr",
    "topCompanies": ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"],
    "workLifeBalance": "Summary of flexibility and culture",
    "dayInLifeSummary": "Vivid 2-sentence description of what a typical Wednesday looks like in this job"
  },
  "phases": [
    {
      "phaseNumber": 1,
      "title": "Phase 1: Foundations & Core Competencies",
      "duration": "Months 1 - 3",
      "objective": "Clear high-impact summary of what this phase achieves",
      "milestones": [
        {
          "id": "m-1-1",
          "title": "Milestone title",
          "description": "Specific action item with measurable criteria",
          "estimatedHours": 35,
          "category": "course" | "project" | "skill" | "certification" | "networking"
        },
        {
          "id": "m-1-2",
          "title": "Milestone title",
          "description": "Specific action item",
          "estimatedHours": 40,
          "category": "skill"
        },
        {
          "id": "m-1-3",
          "title": "Milestone title",
          "description": "Specific action item",
          "estimatedHours": 30,
          "category": "project"
        }
      ],
      "recommendedCourses": [
        {
          "title": "Course Name",
          "provider": "e.g. Coursera / Harvard / MIT OpenCourseWare / freeCodeCamp",
          "url": "https://example.com",
          "isFree": true,
          "level": "Beginner"
        },
        {
          "title": "Course Name 2",
          "provider": "Platform",
          "url": "https://example.com",
          "isFree": false,
          "level": "Beginner - Intermediate"
        }
      ],
      "coreSkills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      "tools": ["Tool 1", "Tool 2", "Tool 3"],
      "signatureProject": {
        "title": "Project Name",
        "description": "Compelling project description tailored to their interests",
        "deliverables": ["Deliverable 1", "Deliverable 2", "Deliverable 3"],
        "portfolioTip": "Insider advice on how to showcase this to recruiters",
        "technologies": ["Tech 1", "Tech 2", "Tech 3"]
      }
    },
    {
      "phaseNumber": 2,
      "title": "Phase 2: Deep Specialization & Intermediate Builds",
      "duration": "Months 4 - 6",
      "objective": "Objective description",
      "milestones": [
        { "id": "m-2-1", "title": "Milestone 1", "description": "...", "estimatedHours": 40, "category": "skill" },
        { "id": "m-2-2", "title": "Milestone 2", "description": "...", "estimatedHours": 45, "category": "project" },
        { "id": "m-2-3", "title": "Milestone 3", "description": "...", "estimatedHours": 35, "category": "course" }
      ],
      "recommendedCourses": [ ... ],
      "coreSkills": [ ... ],
      "tools": [ ... ],
      "signatureProject": { ... }
    },
    {
      "phaseNumber": 3,
      "title": "Phase 3: Advanced Mastery, RAG / Complex Architecture & Production Readiness",
      "duration": "Months 7 - 9",
      "objective": "Objective description",
      "milestones": [
        { "id": "m-3-1", "title": "Milestone 1", "description": "...", "estimatedHours": 40, "category": "project" },
        { "id": "m-3-2", "title": "Milestone 2", "description": "...", "estimatedHours": 35, "category": "skill" }
      ],
      "recommendedCourses": [ ... ],
      "coreSkills": [ ... ],
      "tools": [ ... ],
      "signatureProject": { ... }
    },
    {
      "phaseNumber": 4,
      "title": "Phase 4: Capstone Portfolio, Open Source, Interview Sprints & Placement",
      "duration": "Months 10 - 12",
      "objective": "Objective description",
      "milestones": [
        { "id": "m-4-1", "title": "Milestone 1", "description": "...", "estimatedHours": 30, "category": "certification" },
        { "id": "m-4-2", "title": "Milestone 2", "description": "...", "estimatedHours": 50, "category": "project" },
        { "id": "m-4-3", "title": "Milestone 3", "description": "...", "estimatedHours": 30, "category": "networking" }
      ],
      "recommendedCourses": [ ... ],
      "coreSkills": [ ... ],
      "tools": [ ... ],
      "signatureProject": { ... }
    }
  ],
  "alternativeCareers": [
    {
      "title": "Alternative Career 1",
      "matchScore": 92,
      "description": "Brief description of why this is a strong adjacent pivot",
      "transferableSkills": ["Skill A", "Skill B", "Skill C"]
    },
    {
      "title": "Alternative Career 2",
      "matchScore": 88,
      "description": "Brief description",
      "transferableSkills": ["Skill D", "Skill E"]
    }
  ],
  "essentialCertifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Body",
      "relevance": "Why recruiters respect this credential",
      "estimatedCost": "$100 - $150"
    }
  ],
  "potentialPitfalls": [
    {
      "obstacle": "Common student mistake in this career track",
      "solution": "Actionable tactic to avoid or overcome it"
    },
    {
      "obstacle": "Second common mistake",
      "solution": "Actionable tactic"
    }
  ],
  "firstWeekPlan": [
    { "day": "Day 1", "task": "Concrete task", "duration": "2 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 2", "task": "Concrete task", "duration": "2.5 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 3", "task": "Concrete task", "duration": "3 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 4", "task": "Concrete task", "duration": "2 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 5", "task": "Concrete task", "duration": "3 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 6", "task": "Concrete task", "duration": "2.5 hours", "resourceTip": "Resource recommendation" },
    { "day": "Day 7", "task": "Weekly retrospective & GitHub/Portfolio review", "duration": "1.5 hours", "resourceTip": "Summary tip" }
  ]
}`;

      const prompt = `Student Assessment Profile:
- Name: ${assessment.name || 'Student'}
- Current Education Level: ${assessment.educationLevel}
- Current Field/Major: ${assessment.currentField || 'Undeclared/General'}
- Primary Passion & Interests: ${(assessment.primaryInterests || []).join(', ')}
- Core Strengths & Superpowers: ${(assessment.strengths || []).join(', ')}
- Preferred Work Style: ${assessment.workStyle}
- Preferred Work Environment: ${assessment.workEnvironment}
- Priority Values: ${(assessment.values || []).join(', ')}
- Target Timeline: ${assessment.targetTimeline}
- Dream Goal / Aspirations: ${assessment.dreamGoal || 'Build high-impact projects and secure a thriving role'}
- Difficulty Preference: ${assessment.difficultyPreference || 'intermediate'}

Generate an extraordinarily comprehensive, personalized, realistic, and inspiring Career Plan and Step-by-Step Roadmap. Adapt the phase durations and milestone scopes to match their target timeline (${assessment.targetTimeline}) and experience level. Return ONLY valid JSON.`;

      const response = await client.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          temperature: 0.7,
        }
      });

      const responseText = response.text?.trim() || '';
      let parsedPlan;
      try {
        // Strip markdown backticks if any
        const cleaned = responseText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim();
        parsedPlan = JSON.parse(cleaned);
      } catch (parseError) {
        console.warn('JSON parse error from Gemini output, using fallback:', parseError);
        parsedPlan = synthesizeFallbackPlan(assessment);
      }

      parsedPlan.studentName = assessment.name || 'Student';
      parsedPlan.studentProfileSummary = `${assessment.educationLevel?.replace('_', ' ')} · ${assessment.currentField || 'General Studies'}`;
      parsedPlan.generatedAt = new Date().toISOString();
      return res.json(parsedPlan);
    } catch (apiError: any) {
      console.error('Gemini API call failed, falling back to curated archetype:', apiError?.message || apiError);
      const fallback = synthesizeFallbackPlan(assessment);
      return res.json(fallback);
    }
  }

  // If no GEMINI_API_KEY, use curated fallback
  const fallback = synthesizeFallbackPlan(assessment);
  return res.json(fallback);
});

// API: Career Advisor AI Chat
app.post('/api/career-chat', async (req: Request, res: Response) => {
  const { message, history, currentPlan } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  if (process.env.GEMINI_API_KEY) {
    try {
      const client = aiClient || new GoogleGenAI();
      const planContext = currentPlan 
        ? `The student is currently viewing their personalized career plan for: "${currentPlan.title}".
Tagline: ${currentPlan.tagline}
Phases: ${currentPlan.phases?.map((p: any) => `${p.title}: ${p.objective}`).join(' | ')}
Core Skills: ${currentPlan.phases?.flatMap((p: any) => p.coreSkills || []).slice(0, 8).join(', ')}`
        : 'The student is exploring career possibilities.';

      const systemInstruction = `You are a world-class student career mentor, university advisor, and senior engineering/industry coach.
You provide clear, supportive, highly practical, and tactical advice.
Context:
${planContext}

Format your answers with concise bullet points, bold key concepts, and actionable steps. Keep responses focused (around 150-250 words) so they are easy to read and apply.`;

      // Build recent conversation turns
      const conversationHistory = (history || []).slice(-6).map((item: any) => 
        `${item.role === 'user' ? 'Student' : 'Advisor'}: ${item.content}`
      ).join('\n');

      const prompt = `${conversationHistory}\nStudent: ${message}\nAdvisor:`;

      const response = await client.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ reply: response.text || 'I am here to guide your journey. What specific question do you have about your roadmap?' });
    } catch (err: any) {
      console.error('Chat API error:', err);
    }
  }

  // Helpful fallback chat responses
  const lower = message.toLowerCase();
  let reply = "That's a fantastic question! For your roadmap, focus on building 1-2 signature projects that prove your skills directly. High-signal proof-of-work always triumphs over credentials alone.";
  if (lower.includes('internship') || lower.includes('job') || lower.includes('hire')) {
    reply = "To secure high-impact internships: 1) Deploy your signature projects with live URLs, 2) Write a crisp 90-second demo walkthrough, 3) Reach out directly to alumni and senior practitioners on LinkedIn with genuine questions about their team's tech stack.";
  } else if (lower.includes('laptop') || lower.includes('spec') || lower.includes('hardware')) {
    reply = "A modern laptop with at least 16GB RAM and a modern multi-core processor (Apple Silicon M-series or Intel Core i7/Ryzen 7) will comfortably handle web development, Docker containers, and local AI prototyping without slowdowns.";
  } else if (lower.includes('math') || lower.includes('hard') || lower.includes('struggle')) {
    reply = "Don't worry! While advanced research roles require rigorous calculus and linear algebra, applied solutions engineering and product design prioritize practical systems thinking and problem breakdown. You can master the concepts step-by-step as you build.";
  }

  return res.json({ reply });
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`PathFinder career platform listening on http://localhost:${PORT}`);
  });
}

startServer();
