# Supabase Google Login Setup Guide

## 1. 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com) 并登录
2. 创建新项目或使用现有项目
3. 获取项目 URL 和 Anon Key：
   - 进入项目 Settings → API
   - 复制 `Project URL` 和 `anon public` key

## 2. 配置 Google OAuth

### 在 Google Cloud Console 设置：

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Google+ API
4. 创建 OAuth 2.0 客户端 ID：
   - 进入 "Credentials" → "Create Credentials" → "OAuth client ID"
   - 应用类型选择 "Web application"
   - 在 "Authorized JavaScript origins" 添加：
     - `http://localhost:3000` (开发环境)
     - 你的生产环境 URL
   - 在 "Authorized redirect URIs" 添加：
     - `http://localhost:3000/auth/v1/callback` (开发环境)
     - `https://<your-project-ref>.supabase.co/auth/v1/callback` (Supabase 回调 URL)
     - 你的生产环境回调 URL
5. 保存 Client ID 和 Client Secret

### 在 Supabase Dashboard 配置：

1. 进入项目 Dashboard → Authentication → Providers
2. 找到 Google 提供商并启用
3. 输入从 Google Cloud Console 获取的：
   - Client ID
   - Client Secret
4. 保存配置

## 3. 配置环境变量

在 `.env.local` 文件中添加以下变量：

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# OpenRouter API (existing)
OPENROUTER_API_KEY=sk-or-v1-...
```

## 4. 重启开发服务器

配置完成后，重启 Next.js 开发服务器：

```bash
npm run dev
```

## 5. 测试登录

1. 访问网站
2. 点击导航栏中的 "Sign in with Google" 按钮
3. 完成 Google 登录流程
4. 登录成功后，导航栏会显示用户信息

## 注意事项

- 确保在 Supabase Dashboard 中正确配置了 Google 提供商的 Client ID 和 Secret
- 本地开发时，回调 URL 应该是 `http://localhost:3000/auth/v1/callback`
- 生产环境部署时，需要在 Google Cloud Console 和 Supabase 中添加生产环境的 URL


