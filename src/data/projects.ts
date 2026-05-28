import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'hot-monitor',
    name: 'HotMonitor 热点监控',
    description: 'AI 驱动的热点监控工具——自动扫描关键词、通过 HN / GitHub / Bing 发现趋势，结合 AI 智能验证与实时浏览器通知。',
    image: '/projects/hot-monitor.webp',
    techStack: ['TypeScript', 'React', 'Express.js', 'Prisma', 'SQLite', 'Socket.IO', 'OpenRouter'],
    githubUrl: 'https://github.com/he-zhiyuan/hot-monitor',
    featured: true,
  },
  {
    id: 'life-windows',
    name: '时光窗口',
    description: '拖动年龄，看清人生机会窗口。以可视化方式展示不同人生阶段的机会开放状态。',
    image: '/projects/life-windows.webp',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/he-zhiyuan/life-windows',
    demoUrl: 'https://life-windows.hezhiyuan.me',
    featured: true,
  },
  {
    id: 'fedev-wiki',
    name: '前端开发笔记',
    description: '前端开发学习资源库，包含核心知识点、最佳实践和实战经验，覆盖 HTML、CSS、JavaScript、Vue 等主题。',
    image: '/projects/fedev-wiki.webp',
    techStack: ['VitePress', 'Vue 3', 'Markdown', 'Cloudflare Pages'],
    githubUrl: 'https://github.com/he-zhiyuan/fedev-wiki',
    featured: false,
  },
  {
    id: 'input-locker',
    name: 'Input Locker',
    description: 'Windows 输入设备锁定工具——锁定键盘、鼠标和 USB 存储，屏幕保持常亮，CapsLock + 密码解锁。',
    image: '/projects/input-locker.webp',
    techStack: ['Python'],
    githubUrl: 'https://github.com/he-zhiyuan/input-locker',
    featured: false,
  },
]
