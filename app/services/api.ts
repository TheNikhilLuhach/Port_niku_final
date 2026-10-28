export interface Project {
  id: number;
  name: string;
  slug: string;
  category: 'AI & ML' | 'Web & Cloud' | 'Automation & Tools' | 'Full Stack';
  shortDescription: string;
  fullDescription: string;
  description: string; // compatibility alias
  tech: string[]; // compatibility alias
  techStack: string[];
  features: string[];
  liveLink: string; // compatibility alias
  demoUrl: string;
  detailsUrl: string;
  githubLink: string; // compatibility alias
  githubUrl: string;
  problemStatement?: string;
  solution?: string;
  architecture?: string;
  myContribution?: string;
  executionModel?: 'browser-native' | 'nextjs' | 'separate-backend' | 'local-only' | 'safe-simulation';
  verificationStatus?: 'VERIFIED WORKING' | 'IMPLEMENTED, NOT LIVE-TESTED' | 'SIMULATION ONLY' | 'REQUIRES EXTERNAL CONFIGURATION' | 'BLOCKED';
  verificationDate?: string;
  requirements?: string[];
  setupInstructions?: string[];
  runCommands?: string[];
  environmentVariables?: {
    key: string;
    description: string;
    required: boolean;
    sampleValue: string;
  }[];
  apiProviders?: {
    name: string;
    providerKey: 'gemini' | 'openai' | 'none';
    description: string;
    supportedModels: string[];
  }[];
  demoMode?: string;
  limitations?: string[];
  highlights?: string[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching project slug ${slug}:`, error);
    return null;
  }
}

export async function getSkills() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/skills`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
}

export async function getExperience() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/experience`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch experience');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
}
