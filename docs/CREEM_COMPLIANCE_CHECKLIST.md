# Creem 合规性检查清单

> 根据 [Creem Account Reviews 文档](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews) 和 [AI Wrapper Compliance 要求](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews#ai-wrapper-compliance) 生成

**检查日期：** 2025年  
**项目名称：** Nano Banana Image Editor / ImageEditor  
**使用的 AI 模型：** Google Gemini 2.5 Flash Image (nano banana)

---

## 📋 检查结果概览

| 类别 | 状态 | 不符合项数量 |
|------|------|-------------|
| AI Wrapper Compliance | ✅ 已修复 | 0 |
| 通用合规要求 | ✅ 已修复 | 0 |
| 截图中的特殊关注点 | ✅ 已修复 | 0 |

**总计不符合项：0 项（所有严重问题已修复）**

---

## 🔴 严重问题（必须修复）

### 1. AI Wrapper Compliance - 免责声明缺失

**问题描述：**  
根据 Creem AI Wrapper Compliance 要求，如果产品使用 AI 模型名称（如 Gemini）进行营销，必须包含免责声明，说明产品不是 Google 的官方产品，也不受 Google 认可或赞助。

**当前状态：**  
- ✅ 已在 Footer 底部添加免责声明
- ✅ 已在 About 页面添加详细说明

**要求：**  
必须在网站显眼位置（如首页、About 页面、Footer）添加类似以下内容的免责声明：

> "This platform is an independent product and is not affiliated with, endorsed by, or sponsored by Google. We provide access to the Gemini 2.5 Flash Image model through our custom interface."

**建议修复位置：**
- `components/Footer.tsx` - 在 Footer 底部添加免责声明
- `app/page.tsx` 或 `components/Hero.tsx` - 在首页添加说明
- 创建 `app/about/page.tsx` 页面，详细说明产品性质

---

### 2. AI Wrapper Compliance - Wrapper 性质披露缺失

**问题描述：**  
Creem 要求明确披露产品是 AI Wrapper，即提供自定义界面来访问底层 AI 模型。

**当前状态：**  
- ✅ 已在 About 页面明确说明产品是基于 Gemini 模型的 wrapper
- ✅ 已在 Hero 组件添加 wrapper 性质披露说明
- ✅ 已在定价页面添加说明
- ✅ 已说明产品是独立服务，不隶属于 Google

**要求：**  
需要在网站明确说明：
> "Our platform offers a user-friendly interface built on top of models like Gemini 2.5 Flash Image to enhance usability and provide additional features. We are an independent service and not affiliated with the model providers."

**建议修复位置：**
- 创建 `app/about/page.tsx` 页面
- 在 `components/Hero.tsx` 或产品描述中添加说明

---

### 3. Privacy Policy 页面缺失

**问题描述：**  
Creem 要求网站必须有 Privacy Policy（隐私政策）页面。

**当前状态：**  
- ✅ 已创建 `app/privacy/page.tsx` 页面
- ✅ 已在 Footer 中添加链接

**要求：**  
必须创建 Privacy Policy 页面，并确保：
- 页面可访问（如 `/privacy`）
- Footer 中包含链接
- 内容符合 GDPR 等隐私法规要求

**建议修复：**
- 创建 `app/privacy/page.tsx`
- 在 `components/Footer.tsx` 中添加链接

---

### 4. Terms of Service 页面缺失

**问题描述：**  
Creem 要求网站必须有 Terms of Service（服务条款）页面。

**当前状态：**  
- ✅ 已创建 `app/terms/page.tsx` 页面（包含退款政策）
- ✅ 已在 Footer 中添加链接

**要求：**  
必须创建 Terms of Service 页面，并确保：
- 页面可访问（如 `/terms`）
- Footer 中包含链接
- 包含退款政策、使用限制等内容

**建议修复：**
- 创建 `app/terms/page.tsx`
- 在 `components/Footer.tsx` 中添加链接

---

### 5. 支持邮箱不符合要求

**问题描述：**  
Creem 要求使用品牌化的支持邮箱（如 `fufu@nanobananaco.online`），且邮箱必须可访问。

**当前状态：**  
- ✅ 已将所有支持邮箱地址更新为 `fufu@nanobananaco.online`
- ✅ 已在 Footer 中显示支持邮箱
- ✅ 已在 FAQ、About、Privacy、Terms 等页面使用正确的邮箱地址

**要求：**  
必须使用品牌化的支持邮箱，格式应为：`fufu@nanobananaco.online` 或类似。

**需要修改的文件：**
- `components/FAQ.tsx` - 第 102 行
- 可能还需要检查其他引用支持邮箱的地方

**额外要求：**
- 确保邮箱真实存在且可接收邮件
- 在网站显眼位置（如 Footer、Contact 页面）显示支持邮箱
- 响应客户请求的时间应在 3 个工作日内（Creem 要求）

---

### 6. Footer 和 Header 中的死链接

**问题描述：**  
Creem 特别指出网站存在大量死链接（Dead Links），这会影响用户体验和合规性。

**当前状态：**  
- ✅ 已创建 `/about` 页面
- ✅ 已创建 `/contact` 页面
- ✅ 已创建 `/features` 页面
- ✅ 已创建 `/blog` 页面（占位页面，说明即将推出）
- ✅ 所有 Footer 和 Navbar 中的链接现在都指向有效页面

**要求：**  
必须修复所有死链接：
1. 要么创建对应的页面
2. 要么从导航中移除这些链接

**建议修复方案：**
- **方案 1（推荐）：** 创建缺失的页面
  - `app/about/page.tsx` - 关于页面（可包含免责声明和 wrapper 说明）
  - `app/contact/page.tsx` - 联系页面（显示支持邮箱）
  - `app/features/page.tsx` - 功能页面
  - `app/blog/page.tsx` - 博客页面（如果不需要可以移除链接）

- **方案 2：** 从 Footer 和 Navbar 中移除不存在的链接

---

### 7. 虚假信息 - Testimonials（用户评价）

**问题描述：**  
Creem 不允许虚假的用户评价、推荐或使用数据。

**当前状态：**  
- ✅ 已从首页暂时移除 Testimonials 组件
- ✅ 组件文件保留，待有真实用户评价后可恢复使用
- ✅ 避免了虚假信息的合规风险

**要求：**  
必须确保所有用户评价是真实的：
- 使用真实用户的头像和姓名
- 或者移除 Testimonials 组件
- 或者明确标注为"示例"或"演示"

**建议修复：**
- **方案 1：** 如果还没有真实用户评价，暂时移除或隐藏 Testimonials 组件
- **方案 2：** 收集真实用户评价后替换
- **方案 3：** 如果保留，必须明确标注为示例/演示内容

---

### 8. 虚假信息 - Case Studies（案例研究）

**问题描述：**  
Creem 不允许虚假的案例研究或使用示例。

**当前状态：**  
- ✅ 已从首页暂时移除 Case Studies 组件
- ✅ 组件文件保留，待有真实案例后可恢复使用
- ✅ 避免了虚假信息的合规风险

**要求：**  
必须确保所有案例研究是真实的，或者明确标注为示例。

**建议修复：**
- **方案 1：** 如果还没有真实案例，暂时移除或隐藏 Case Studies 组件
- **方案 2：** 使用真实用户案例替换
- **方案 3：** 如果保留，必须明确标注为示例/演示内容

---

## 🟡 中等问题（建议修复）

### 9. 产品名称合规性

**当前状态：** ✅ 已优化  
- ✅ 产品名称 "ImageEditor" 或 "Nano Banana Image Editor" 没有包含 "Gemini" 或其他 AI 模型品牌名称，符合 Creem 要求
- ✅ 已在网站多个位置提及使用的模型（"Powered by Gemini 2.5 Flash Image"）
- ✅ 已在页面标题、描述、Hero 组件和定价页面添加 AI 模型说明
- ✅ 所有说明都配合了免责声明

---

### 10. 价格显示

**当前状态：** ✅ 基本符合  
- 有独立的定价页面（`app/pricing/page.tsx`）
- 价格信息清晰显示
- 支持月付/年付切换

**建议改进：**
- 确保定价页面易于访问（已在 Navbar 和 Footer 中链接）
- 考虑在首页添加定价链接

---

### 11. 订阅管理功能

**问题描述：**  
Creem 要求用户必须能够直接从产品中取消订阅。

**当前状态：**  
- ✅ 已创建用户账户页面（`app/account/page.tsx`）
- ✅ 已添加"管理订阅"按钮，链接到 Creem Customer Portal
- ✅ 已在 Navbar 中添加账户链接（桌面端和移动端）
- ✅ 用户可以通过账户页面管理订阅、更新支付方式或取消订阅

**要求：**  
必须提供以下方式之一：
1. 集成 Creem Cancel Subscription API
2. 重定向用户到 Creem Customer Portal

**已实现：**
- ✅ 用户账户页面包含订阅管理功能
- ✅ 链接到 Creem Customer Portal（用户可以在那里取消订阅）

---

### 12. 退款政策

**问题描述：**  
Creem 要求有明确的退款政策，且必须在 3 个工作日内响应客户退款请求。

**当前状态：**  
- ✅ 已在 Terms of Service 页面（`app/terms/page.tsx`）中添加完整的退款政策章节
- ✅ 明确说明了退款条件（14天内、服务问题、账单错误等）
- ✅ 详细说明了退款流程（联系邮箱、提供信息等）
- ✅ 明确承诺响应时间（3 个工作日内）
- ✅ 说明了退款处理时间（5-10 个工作日）
- ✅ 列出了不可退款的情况

**要求：**  
必须在 Terms of Service 中明确说明：
- 退款条件
- 退款流程
- 响应时间（3 个工作日内）

**已实现：**
- ✅ Terms of Service 页面包含完整的退款政策（第 6 章节）
- ✅ 所有退款相关信息都已明确说明

---

## 🟢 已符合要求

### ✅ 产品准备就绪
- 产品功能完整，可以正常使用

### ✅ 产品名称不侵权
- 产品名称 "ImageEditor" 不包含 Gemini 等品牌名称

### ✅ 定价显示清晰
- 有独立的定价页面，价格信息清晰

---

## 📝 修复优先级

### 高优先级（必须立即修复）
1. ✅ 创建 Privacy Policy 页面
2. ✅ 创建 Terms of Service 页面（包含退款政策）
3. ✅ 添加 AI Wrapper 免责声明
4. ✅ 修复支持邮箱地址
5. ✅ 修复 Footer 和 Header 中的死链接
6. ✅ 处理虚假的 Testimonials 和 Case Studies

### 中优先级（建议尽快修复）
7. ✅ 添加 Wrapper 性质披露说明（已在 About 页面和 Hero 组件添加）
8. ✅ 实现订阅管理功能（已创建账户页面，链接到 Creem Customer Portal）
9. ✅ 在 Terms of Service 中明确退款政策（已完整添加）

### 低优先级（可以稍后处理）
10. ✅ 优化产品描述，提及使用的 AI 模型（已在页面标题、描述、Hero、定价页面添加）

---

## 🔗 参考文档

- [Creem Account Reviews 文档](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews)
- [AI Wrapper Compliance 要求](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews#ai-wrapper-compliance)

---

## 📌 注意事项

1. **虚假信息是严重违规：** Creem 明确禁止虚假的用户评价、推荐或使用数据。如果无法提供真实内容，建议暂时移除相关组件。

2. **支持邮箱必须真实可用：** 确保 `fufu@nanobananaco.online`（或你选择的其他邮箱）真实存在且可以接收邮件。Creem 可能会测试邮箱的可访问性。

3. **响应时间要求：** Creem 要求必须在 3 个工作日内响应客户请求，否则 Creem 有权代表你处理退款。

4. **持续监控：** Creem 会持续监控账户，确保合规性。修复这些问题后，建议定期检查以确保持续符合要求。

---

**生成时间：** 2025年  
**下次检查建议：** 修复完成后重新检查

