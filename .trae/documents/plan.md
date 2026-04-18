# 任务计划：在 Portfolio 页面添加 GitHub 统计数据并移除边界声明

## 1. 概述 (Summary)
删除 `src/pages/portfolio.astro` 文件中原有的 “Implementation boundary” 部分，并替换为一个全新的部分，用于展示用户的 GitHub 统计图表、代码贡献热图、3D 贡献图表和技术栈徽章。此修改旨在通过直观、有冲击力的视觉元素来体现用户的工作量。所有原本相对路径引用的图片将转换为指向 `Hylouis233/Hylouis233` 仓库的 GitHub 原始文件远程链接。

## 2. 当前状态分析 (Current State Analysis)
- `src/pages/portfolio.astro` 底部目前包含一个 `<section class="panel-secondary portfolio-section portfolio-boundary-section">`，其内容主要是关于该页面的当前范围和未来扩展点的文本描述。
- 用户提供了一段 GitHub 个人主页（Profile README）的 Markdown/HTML 混合代码，包含大量的统计数据卡片（Stats, Trophies, Streak 等）和技术栈徽章。
- 用户代码中包含一些本地相对路径的图片（如 `./profile-snake-contrib/...` 和 `./profile-3d-contrib/...`），这些图片在当前的 Astro 博客项目中并不存在，它们是由 GitHub Actions 生成并存放在 `Hylouis233/Hylouis233` 仓库中的。

## 3. 提议的更改 (Proposed Changes)
**文件：`src/pages/portfolio.astro`**

1. **删除冗余部分**：
   - 找到并删除从 `<section class="panel-secondary portfolio-section portfolio-boundary-section">` 到该 `<section>` 结束的所有代码。

2. **添加 GitHub 统计展示区**：
   - 在刚刚删除的位置插入新的 `<section class="panel-secondary portfolio-section portfolio-github-stats-section">`。
   - 添加标准的标题区块：
     ```html
     <div class="section-block-heading">
       <h2 class="section-title">Open Source Contributions & Statistics</h2>
       <p class="section-subtitle">A visual overview of my coding activity, repository metrics, and technology stack.</p>
     </div>
     ```
   - 将用户提供的视觉元素转换为兼容 Astro 的 HTML 结构，主要包含：
     - **打字机特效与徽章**（Visitor Badge, Website, Email 等）。
     - **核心统计**（GitHub Stats & Top Langs）。
     - **奖杯与连击**（GitHub Trophies, Streak）。
     - **活动图表**（Activity Graph）。
     - **贡献蛇与 3D 贡献图**（Contribution Snake, 3D Contribution Profile）。
     - **技术栈图标**（Tech Stack Shields & Skill Icons）。
     - **开发者卡片**（Developer Cards, Jokes）。
   - **图片链接处理**：
     - 将所有类似 `./profile-snake-contrib/github-contribution-grid-snake-dark.svg` 的相对路径替换为绝对路径：`https://raw.githubusercontent.com/Hylouis233/Hylouis233/main/profile-snake-contrib/github-contribution-grid-snake-dark.svg`（或适配深浅色模式）。
     - 将 `./profile-3d-contrib/profile-night-rainbow.svg` 替换为 `https://raw.githubusercontent.com/Hylouis233/Hylouis233/main/profile-3d-contrib/profile-night-rainbow.svg`。
     - 将 `./github-metrics/base.svg` 等替换为对应的 raw.githubusercontent 链接。
   - **省略纯文本**：不添加提供的 “Hi there! I'm Hong Liu...” 及其后面的自我介绍和文本段落。

3. **添加 CSS 样式**：
   - 在页面底部的 `<style>` 标签中添加针对这些新图表的样式，如 `.github-stats-container`。
   - 确保所有的 `<img>` 标签设置了 `max-width: 100%; height: auto;` 以保证在移动端设备上的响应式显示，避免溢出。
   - 对部分较长的徽章列表使用 Flexbox 并允许换行（`flex-wrap: wrap`）。

## 4. 假设与决策 (Assumptions & Decisions)
- 假设 `Hylouis233/Hylouis233` 仓库的主分支名为 `main`。如果 GitHub Actions 将蛇形图生成到了 `output` 分支，原始链接可能需要调整，但我将默认使用 `main` 分支的链接，因为它是最常见的存放点。
- 由于 Astro 支持 `<picture>` 标签中的 `(prefers-color-scheme)` 媒体查询，我将保留暗色/亮色模式的自适应图片切换逻辑，让图表在不同系统主题下都有良好表现。
- 为了美观，我将对用户提供的杂乱居中（`<div align="center">`）代码进行整理，改用 CSS Grid/Flexbox 进行居中和排版，使其更符合现有站点的代码风格。

## 5. 验证步骤 (Verification Steps)
- 检查 `portfolio.astro` 中是否彻底移除了 “Implementation boundary” 部分。
- 启动本地开发服务器，访问 `/portfolio` 页面，确认新的 GitHub 统计图表区已正确渲染。
- 检查各个图片的网络请求，确保 `raw.githubusercontent.com` 链接有效且无 404 错误（对于目前仓库可能还未生成的图片，由于是外部链接，只要路径逻辑正确即可）。
- 调整浏览器窗口大小，验证图表是否具备响应式（没有导致页面横向滚动条）。