# Creem 支付集成设置指南

本指南将帮助你配置 Creem 支付系统，用于处理 Nano Banana Image Editor 的订阅和支付。

## 1. 环境变量配置

### 在 `.env.local` 文件中添加（本地开发）：

```env
# Creem Payment Configuration
CREEM_API_KEY=creem_test_22nZqE3TT4WF7lXRRjx9Zx
CREEM_WEBHOOK_SECRET=whsec_4WkvbsQtHj8iPOHxvicPID

# Site URL (for checkout redirects)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 在 Vercel Dashboard 中配置（生产环境）：

1. 进入项目 Settings → Environment Variables
2. 添加以下变量（确保添加到 Production、Preview 和 Development）：
   - `CREEM_API_KEY` = `creem_test_22nZqE3TT4WF7lXRRjx9Zx`（测试）或生产环境的 API Key
   - `CREEM_WEBHOOK_SECRET` = `whsec_4WkvbsQtHj8iPOHxvicPID`
   - `NEXT_PUBLIC_SITE_URL` = `https://www.nanobananaco.online`

## 2. 在 Creem Dashboard 中创建产品

1. 登录 [Creem Dashboard](https://dashboard.creem.io)
2. 创建以下产品（Product）：

### Creator 月度订阅
- **Name**: Creator Monthly
- **Type**: Subscription
- **Price**: $19.99/month
- **Product ID**: 记录下这个 ID（例如：`prod_xxx_monthly`）

### Creator 年度订阅
- **Name**: Creator Yearly
- **Type**: Subscription
- **Price**: $191.90/year (save ~$48/year)
- **Product ID**: 记录下这个 ID（例如：`prod_xxx_yearly`）

### Pro 月度订阅
- **Name**: Pro Monthly
- **Type**: Subscription
- **Price**: $29.99/month
- **Product ID**: 记录下这个 ID

### Pro 年度订阅
- **Name**: Pro Yearly
- **Type**: Subscription
- **Price**: $287.90/year (save ~$72/year)
- **Product ID**: 记录下这个 ID

## 3. 更新产品 ID 配置

创建产品后，需要在代码中更新产品 ID。编辑 `utils/pricingData.ts` 文件：

```typescript
export const pricingPlans: PricingPlan[] = [
  // ... existing plans ...
  {
    id: 'creator',
    // ... other fields ...
    productIdMonthly: 'prod_CREATOR_MONTHLY_ID', // 替换为实际的 Product ID
    productIdYearly: 'prod_CREATOR_YEARLY_ID',   // 替换为实际的 Product ID
  },
  {
    id: 'pro',
    // ... other fields ...
    productIdMonthly: 'prod_PRO_MONTHLY_ID',     // 替换为实际的 Product ID
    productIdYearly: 'prod_PRO_YEARLY_ID',       // 替换为实际的 Product ID
  },
]
```

## 4. 配置 Webhook

在 Creem Dashboard 中设置 Webhook 接收地址：

1. 进入 Dashboard → Settings → Webhooks
2. 添加 Webhook URL：
   - 生产环境：`https://www.nanobananaco.online/api/webhooks/creem`
   - 测试环境：可以使用 [ngrok](https://ngrok.com/) 或其他工具暴露本地地址
3. 选择要监听的事件：
   - `checkout.completed`
   - `subscription.activated`
   - `subscription.cancelled`
   - `subscription.expired`
   - `access.granted`
   - `access.revoked`

## 5. 测试支付流程

### 使用测试模式

Creem 提供测试模式，可以使用以下测试卡号：

- **成功卡号**: `4242 4242 4242 4242`
- **过期卡号**: `4000 0000 0000 0069`
- **拒绝卡号**: `4000 0000 0000 0002`

**测试卡信息**：
- 过期日期：任意未来日期（如 12/34）
- CVC：任意 3 位数字（如 123）
- 邮编：任意有效邮编（如 12345）

### 测试步骤

1. 启动开发服务器：`npm run dev`
2. 访问 `http://localhost:3000/pricing`
3. 选择一个付费计划（Creator 或 Pro）
4. 点击 "Get Started" 按钮
5. 使用测试卡号完成支付
6. 验证是否成功跳转到 `/success` 页面

## 6. 处理 Webhook 事件

Webhook 处理器位于 `app/api/webhooks/creem/route.ts`。

当前实现会：
- 验证 Webhook 签名
- 处理 `checkout.completed` 事件
- 处理 `access.granted` 和 `access.revoked` 事件

**TODO**: 根据你的业务逻辑，在以下函数中实现用户权限管理：

```typescript
// app/api/webhooks/creem/route.ts

async function handleCheckoutCompleted(data: any) {
  // TODO: 更新用户订阅状态
  // Example: await updateUserSubscription(customer.email, planId)
}

async function handleAccessGranted(data: any) {
  // TODO: 授予用户访问权限
  // Example: await grantUserAccess(customer.email, planId)
}

async function handleAccessRevoked(data: any) {
  // TODO: 撤销用户访问权限
  // Example: await revokeUserAccess(customer.email, planId)
}
```

## 7. 生产环境部署检查清单

在部署到生产环境之前，请确认：

- [ ] 所有环境变量已在 Vercel 中配置
- [ ] 使用生产环境的 `CREEM_API_KEY`（不是测试密钥）
- [ ] `NEXT_PUBLIC_SITE_URL` 设置为生产域名
- [ ] 在 Creem Dashboard 中创建了所有产品
- [ ] 更新了 `utils/pricingData.ts` 中的产品 ID
- [ ] Webhook URL 已配置为生产地址
- [ ] 已测试支付流程

## 8. 常见问题

### Q: Webhook 验证失败？
A: 确保 `CREEM_WEBHOOK_SECRET` 与 Creem Dashboard 中的 Webhook Secret 完全一致。

### Q: 支付后没有跳转到成功页面？
A: 检查 `NEXT_PUBLIC_SITE_URL` 是否设置正确，以及 Creem Dashboard 中的 `success_url` 配置。

### Q: 如何处理订阅取消？
A: 在 `handleAccessRevoked` 函数中实现取消逻辑，Creem 会自动发送 webhook 通知。

## 9. 参考资料

- [Creem 官方文档](https://docs.creem.io)
- [Creem API 参考](https://docs.creem.io/api-reference/introduction)
- [Webhook 处理指南](https://docs.creem.io/code/webhooks)

