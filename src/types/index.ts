export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  platform: 'juejin' | 'zhihu' | 'wechat' | 'weibo' | 'xiaohongshu' | 'douban';
  url: string;
  publishedAt: string;
  views?: number;
  likes?: number;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  handle: string;
  color: string;
}
