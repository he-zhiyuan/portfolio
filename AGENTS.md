# 个人作品集网站开发指令

## 项目概述
使用 React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion 开发的个人作品集网站。
单页滚动结构，无需路由。展示内容：代码项目、精选文章（外链）、社交媒体平台。
部署目标：Vercel。

## 组件清单
按页面从上到下排列：
- `Navbar.tsx` — 固定顶部导航，含锚点链接、移动端汉堡菜单、暗色模式切换按钮
- `Hero.tsx` — 首屏，含名字、身份副标题、slogan、头像、CTA 按钮
- `About.tsx` — 关于我，含介绍段落和按类别分组的技能标签列表
- `Projects.tsx` — 代码项目卡片网格（PC 三列，移动端一列）
- `Articles.tsx` — 精选文章外链卡片列表（PC 两列，移动端一列）
- `SocialMedia.tsx` — 社交媒体平台入口卡片（GitHub/掘金/知乎/微信公众号/微博/小红书）
- `Contact.tsx` — 联系方式，邮箱 + 社交快捷链接
- `Footer.tsx` — 页脚，版权信息 + 快速导航

## 数据文件规范
所有内容数据存放在 `src/data/` 目录，TypeScript 静态数组：
- `projects.ts` — `Project[]`，字段：id/name/description/image/techStack/githubUrl/demoUrl?/featured
- `articles.ts` — `Article[]`，字段：id/title/summary/platform/url/publishedAt/views?/likes?
- `skills.ts` — `SkillCategory[]`，字段：category/skills（字符串数组）
- `socialLinks.ts` — `SocialLink[]`，字段：platform/icon/url/handle/color

类型定义统一放在 `src/types/index.ts`。

## 开发规范
- 使用函数式组件 + Hooks，不使用 class 组件
- 使用 Tailwind CSS utility class 编写样式，暗色模式用 `dark:` 前缀
- 动画使用 Framer Motion `whileInView` + `viewport={{ once: true }}`，统一复用 `fadeInUp` 变量
- 卡片列表使用 `staggerChildren` 错开进场
- 组件接收 props 时使用 TypeScript interface 定义类型

## 设计规范
- 风格：简约现代，内容优先，避免过度装饰
- 支持暗色 / 亮色模式切换，使用 `useTheme` Hook，持久化到 `localStorage`
- 响应式断点：sm(640) / md(768) / lg(1024) / xl(1280)
- 图片懒加载，使用 `loading="lazy"` 属性

## 注意事项
- **不引入 React Router**，使用锚点导航（`href="#section-id"`）
- 外部链接（文章、社交媒体、GitHub）一律添加 `target="_blank" rel="noopener noreferrer"`
- 语义化 HTML：`<nav>`、`<main>`、`<section>`、`<article>`、`<footer>`
- 图片必须有 `alt` 属性，交互元素必须有 `aria-label`
- SEO：在 `index.html` 配置 `<title>` 和 `<meta description>`，使用 react-helmet-async 管理 Open Graph
