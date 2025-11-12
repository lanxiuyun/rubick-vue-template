# Rubick Vue Template

一个最小可用的 Rubick + Vue3 + Vite 模板，包含路由、Pinia、Rubick API 类型定义等常用脚手架能力，适合快速搭建 Rubick 插件的界面层。

## 特性

- 🎯 清爽的布局骨架：`App.vue` 集成导航与内容区域示例。
- 🧭 基础路由：`src/router/index.ts` 包含示例页面，可按需扩展。
- 🗂️ 状态管理：预置 `Pinia` 示例（`src/stores/counter.ts`）。
- 🧰 Rubick 能力：`types/rubick.d.ts` 与 `src/rubick` 目录提供调用示例。
- 🧾 模板文档：`README` 与页面内文案帮助快速了解如何定制。

## 快速开始

```bash
npm install
npm run dev
```

开发时可直接在浏览器中预览，部署到 Rubick 时请保持 `vite.config.ts` 中的 `base: "./"` 设置。

## 目录结构

```
src
├─ assets/          # 全局样式与静态资源
├─ components/      # 可复用组件示例（如 Menu）
├─ router/          # 路由定义
├─ rubick/          # 与 Rubick 交互的辅助函数
├─ stores/          # Pinia store 示例
├─ views/           # 页面视图示例
└─ App.vue          # 应用骨架
```

## 常见扩展

- 新增页面：在 `src/views` 创建组件，并在路由文件中注册。
- 使用状态：在 `src/stores` 中添加新的 store，通过 `Pinia` 注入使用。
- 引入 UI 库：在 `src/main.ts` 中导入并 `app.use()` 注册。
- Rubick API：通过 `window.rubick` 判断环境后安全调用，参考 `src/rubick`。

## 构建与发布

```bash
npm run build
```

产物默认输出到 `dist/`，可直接复制到 Rubick 插件目录。

## 许可

此模板基于 MIT 许可发布，欢迎自由使用与二次开发，期待你的改进与示例贡献。
