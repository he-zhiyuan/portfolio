# 何致远 · 个人作品集

个人作品集网站，整合代码项目、写作内容与社交媒体入口。基于 React + TypeScript + Vite + Tailwind CSS 构建，支持暗色模式。

**线上地址**：[hezhiyuan.me](https://hezhiyuan.me)

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 样式 | Tailwind CSS 3 |
| 动画 | Framer Motion 11 |
| 图标 | Lucide React |
| SEO | react-helmet-async |

---

## 页面结构

单页滚动 + 锚点导航，无路由：

```
Navbar（固定顶部，含暗色模式切换）
  ↓ Hero（首屏，头像 + 身份标签 + CTA）
  ↓ About（个人介绍 + 技能标签）
  ↓ Projects（代码项目卡片）
  ↓ Articles（精选文章卡片）
  ↓ SocialMedia（社交平台入口）
  ↓ Contact（邮箱 + 快捷链接）
  ↓ Footer（版权 + 快速导航）
```

---

## 项目结构

```
portfolio/
├── public/
│   └── favicon.png          # 网站图标 & 头像
├── src/
│   ├── components/          # 页面各区块组件
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Articles.tsx
│   │   ├── SocialMedia.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                # 静态内容数据（直接编辑此处更新内容）
│   │   ├── projects.ts      # 代码项目
│   │   ├── articles.ts      # 精选文章
│   │   ├── skills.ts        # 技能分类
│   │   └── socialLinks.ts   # 社交媒体链接
│   ├── hooks/
│   │   └── useTheme.ts      # 亮/暗模式管理
│   ├── types/
│   │   └── index.ts         # TypeScript 类型定义
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

---

## 内容更新

所有展示内容集中在 `src/data/` 目录，直接编辑对应文件即可：

- **项目**：`src/data/projects.ts` — 修改 `name`、`description`、`techStack`、`githubUrl`、`demoUrl`
- **文章**：`src/data/articles.ts` — 修改 `title`、`summary`、`url`、`publishedAt`
- **技能**：`src/data/skills.ts` — 修改分类和技能标签
- **社交链接**：`src/data/socialLinks.ts` — 修改平台 URL 和 handle

项目封面图放置于 `public/projects/`，文件名与 `projects.ts` 中的 `image` 字段一致（如 `hot-monitor.webp`）。

---

## 主题色

在 `tailwind.config.js` 的 `accent` 色板中调整（当前为经典蓝 `#3b82f6`）：

```js
colors: {
  accent: {
    500: '#3b82f6', // 主色
    600: '#2563eb', // 悬停
    // ...
  }
}
```

---

## License

MIT
