export type ExecutionModel = 
  | 'browser-native'
  | 'nextjs'
  | 'separate-backend'
  | 'local-only'
  | 'safe-simulation';

export type VerificationStatus = 
  | 'VERIFIED WORKING'
  | 'IMPLEMENTED, NOT LIVE-TESTED'
  | 'SIMULATION ONLY'
  | 'REQUIRES EXTERNAL CONFIGURATION'
  | 'BLOCKED';

export interface ProjectRegistryItem {
  id: number;
  name: string;
  slug: string;
  category: 'AI & ML' | 'Web & Cloud' | 'Automation & Tools' | 'Full Stack';
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture: string;
  myContribution: string;
  executionModel: ExecutionModel;
  verificationStatus: VerificationStatus;
  verificationDate: string;
  requirements: string[];
  setupInstructions: string[];
  runCommands: string[];
  environmentVariables: {
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
  demoMode: 'interactive-live' | 'interactive-simulation' | 'client-webrtc' | 'web-speech' | 'client-vision';
  demoUrl: string;
  detailsUrl: string;
  githubUrl: string;
  limitations: string[];
  highlights?: string[];
}
