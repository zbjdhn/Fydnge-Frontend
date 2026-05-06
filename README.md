# Fyndge Frontend

Fydnge 的前端 repo，基于 Vite + React。当前主页由 `fyndge_mainpage.html` demo 迁移而来，静态展示数据已抽离，后续可直接替换为后端接口返回的数据。

## Quick Start

```bash
npm install
npm run dev
```

默认开发地址：`http://localhost:5174`

## Structure

```text
src/
  api/        后端接口 adapter 与 mock fallback
  components/ 可复用 UI 组件
  data/       demo 数据
  styles/     全局样式
  App.jsx     首页装配与交互状态
```

## Backend Integration

配置 `.env.local`：

```bash
VITE_API_BASE_URL=https://your-api.example.com
```

然后在 `src/api/fyndgeApi.js` 中将 mock fallback 逐步替换为真实接口即可。
