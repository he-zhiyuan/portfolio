# 技术设计

## 技术栈

| 层级 | 选型 | 说明 |
|------|------|------|
| 框架 | React 18 + TypeScript | 函数式组件 + Hooks |
| 构建工具 | Vite | 快速 HMR，生产构建优化 |
| 样式 | Tailwind CSS v3 | Utility-first，暗色模式用 `dark:` 前缀 |
| 动画 | Framer Motion | 页面元素进入动画，使用 `whileInView` |
| SEO | react-helmet-async | 管理 `<title>` / `<meta>` / Open Graph |
| 路由 | **不引入 React Router** | 单页滚动，锚点导航，无需路由 |
| 部署 | Vercel | 免费，自动 CI/CD，CDN 分发 |

---

## 路由决策

**采用单页滚动（SPA，无路由）**，理由：
- 内容体量适中，不需要多页面
- 锚点导航（`href="#projects"`）已满足跳转需求
- 减少一个依赖，降低复杂度
- 利于 SEO（单一 URL）

---

## 项目目录结构

```
src/
├── components/
│   ├── Navbar.tsx          # 固定顶部导航 + 汉堡菜单 + 主题切换
│   ├── Hero.tsx            # 首屏：名字、身份、头像、CTA
│   ├── About.tsx           # 关于我：介绍文字 + 技能标签
│   ├── Projects.tsx        # 代码项目：卡片网格
│   ├── Articles.tsx        # 文章：精选外链卡片列表
│   ├── SocialMedia.tsx     # 社交媒体：平台入口卡片
│   ├── Contact.tsx         # 联系方式：邮箱 + 快捷链接
│   └── Footer.tsx          # 页脚：版权 + 快速导航
├── data/
│   ├── projects.ts         # 代码项目数据
│   ├── articles.ts         # 精选文章数据
│   ├── skills.ts           # 技能分类数据
│   └── socialLinks.ts      # 社交媒体平台数据
├── hooks/
│   └── useTheme.ts         # 暗色/亮色模式切换逻辑
├── types/
│   └── index.ts            # 全局 TypeScript 类型定义
├── App.tsx
└── main.tsx
```

---

## 数据结构定义

### `projects.ts` — 代码项目
```typescript
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;           // 项目截图路径（/public/projects/xxx.webp）
  techStack: string[];     // 如 ['React', 'TypeScript', 'Tailwind']
  githubUrl: string;
  demoUrl?: string;        // 可选
  featured: boolean;       // 是否置顶展示
}
```

### `articles.ts` — 精选文章
```typescript
export interface Article {
  id: string;
  title: string;
  summary: string;         // 2~3 行摘要
  platform: 'juejin' | 'zhihu' | 'wechat' | 'weibo' | 'xiaohongshu';
  url: string;             // 外链地址
  publishedAt: string;     // 'YYYY-MM-DD'
  views?: number;          // 阅读量（可选，手动维护）
  likes?: number;          // 点赞数（可选）
}
```

### `skills.ts` — 技能分类
```typescript
export interface SkillCategory {
  category: string;        // 如 '编程语言'
  skills: string[];        // 如 ['TypeScript', 'Python', 'Go']
}
```

### `socialLinks.ts` — 社交媒体平台
```typescript
export interface SocialLink {
  platform: string;        // 如 'GitHub'
  icon: string;            // 图标标识（使用 lucide-react 或 SVG）
  url: string;             // 主页地址
  handle: string;          // 账号名 / 简介
  color: string;           // 品牌色，用于卡片 hover 高亮
}
```

---

## 暗色模式方案

- Tailwind `darkMode: 'class'` 配置
- `useTheme` Hook 管理状态，持久化到 `localStorage`
- 根元素 `<html>` 切换 `dark` class
- 默认跟随系统（`prefers-color-scheme`），用户可手动覆盖

---

## 动画方案

- 使用 Framer Motion 的 `whileInView` + `viewport={{ once: true }}`
- 统一的进入动画变量（避免重复定义）：
  ```typescript
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  ```
- 卡片列表使用 `staggerChildren` 实现错开进场

---

## SEO 配置

```tsx
// 在 App.tsx 或 index.html 配置
<title>你的名字 - 开发者 & 写作者</title>
<meta name="description" content="个人作品集，包含代码项目、技术文章..." />
<meta property="og:title" content="你的名字 - 个人作品集" />
<meta property="og:image" content="/og-cover.png" />
```

---

## 部署方案

- **平台**：Vercel（免费套餐足够）
- **流程**：GitHub 仓库 → Vercel 导入 → 自动检测 Vite → 每次 push 自动部署
- **自定义域名**：可在 Vercel 控制台绑定（可选）
- **构建命令**：`vite build`
- **输出目录**：`dist`
