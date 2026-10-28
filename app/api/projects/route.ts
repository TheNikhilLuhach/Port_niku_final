import { NextResponse } from 'next/server';
import projectsData from '@/data/projects.json';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    
    // Normalize projects with backward-compatible aliases
    const normalizedProjects = (projectsData as any[]).map((p) => ({
      ...p,
      description: p.shortDescription || p.description,
      tech: p.techStack || p.tech || [],
      liveLink: p.demoUrl || p.liveLink || `/projects/${p.slug}`,
      githubLink: p.githubUrl || p.githubLink || 'https://github.com/TheNikhilLuhach',
    }));
    
    if (id) {
      const project = normalizedProjects.find((p) => p.id === parseInt(id));
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json(project);
    }

    if (slug) {
      const project = normalizedProjects.find((p) => p.slug === slug);
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json(project);
    }

    if (category) {
      const filtered = normalizedProjects.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
      return NextResponse.json(filtered);
    }
    
    return NextResponse.json(normalizedProjects);
  } catch (error) {
    console.error('Projects API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
