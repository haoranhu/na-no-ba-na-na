# 截图指导文档

## 需要截图的页面列表

请按照以下顺序访问并截图以下页面。所有截图应保存为 PNG 格式，文件名如下：

### 截图清单

1. **首页 (Homepage)**
   - URL: `http://localhost:3000/`
   - 文件名: `01-homepage.png`
   - 重点：显示 Hero 部分的 AI 模型说明和免责声明

2. **关于页面 (About Page)**
   - URL: `http://localhost:3000/about`
   - 文件名: `02-about.png`
   - 重点：显示 wrapper 性质披露和免责声明部分

3. **定价页面 (Pricing Page)**
   - URL: `http://localhost:3000/pricing`
   - 文件名: `03-pricing.png`
   - 重点：显示所有定价计划和 AI 模型说明

4. **隐私政策 (Privacy Policy)**
   - URL: `http://localhost:3000/privacy`
   - 文件名: `04-privacy.png`
   - 重点：显示完整的隐私政策内容

5. **服务条款 (Terms of Service)**
   - URL: `http://localhost:3000/terms`
   - 文件名: `05-terms.png`
   - 重点：显示退款政策部分（第 6 章节）

6. **联系页面 (Contact Page)**
   - URL: `http://localhost:3000/contact`
   - 文件名: `06-contact.png`
   - 重点：显示支持邮箱地址

7. **页脚 (Footer)**
   - URL: `http://localhost:3000/` (滚动到页面底部)
   - 文件名: `07-footer.png`
   - 重点：显示免责声明和支持邮箱

8. **账户页面 (Account Page)**
   - URL: `http://localhost:3000/account`
   - 文件名: `08-account.png`
   - 重点：显示订阅管理功能

## 截图要求

### 技术规格
- **格式:** PNG
- **分辨率:** 至少 1920x1080 或更高
- **质量:** 高清，文字清晰可读
- **浏览器:** 使用 Chrome 或 Firefox 最新版本

### 截图技巧

1. **使用浏览器开发者工具:**
   - 按 `F12` 打开开发者工具
   - 使用响应式设计模式（Ctrl+Shift+M）
   - 设置视口为 1920x1080

2. **使用截图工具:**
   - Windows: 使用 Snipping Tool 或 Win+Shift+S
   - Mac: 使用 Cmd+Shift+4
   - 浏览器扩展: 推荐使用 "Full Page Screen Capture" 或类似工具

3. **确保内容完整:**
   - 确保所有重要内容都在截图范围内
   - 特别是免责声明、支持邮箱、定价信息等关键内容
   - 如果页面较长，可以截取多个部分或使用全页截图

### 每个截图的具体要求

#### 01-homepage.png
- 必须包含：Hero 部分、AI 模型说明文字、页面标题
- 建议：截取整个 Hero 区域和部分导航栏

#### 02-about.png
- 必须包含：AI Technology Disclosure 部分（黄色背景框）、免责声明
- 建议：截取整个页面，确保黄色高亮框完整显示

#### 03-pricing.png
- 必须包含：所有定价卡片、月付/年付切换按钮、AI 模型说明
- 建议：截取整个定价表格区域

#### 04-privacy.png
- 必须包含：页面标题、至少前 3 个章节内容、支持邮箱信息
- 建议：截取页面顶部和主要章节

#### 05-terms.png
- 必须包含：退款政策章节（第 6 章节，蓝色背景框）、响应时间承诺
- 建议：滚动到退款政策部分，确保整个章节完整显示

#### 06-contact.png
- 必须包含：支持邮箱地址（fufu@nanobananaco.online）、响应时间说明
- 建议：截取整个联系卡片区域

#### 07-footer.png
- 必须包含：免责声明文字、支持邮箱、Privacy Policy 和 Terms of Service 链接
- 建议：截取整个 Footer 区域

#### 08-account.png
- 必须包含：订阅管理部分、"Manage Subscription" 按钮
- 注意：如果未登录，会显示 "Sign In Required"，这也是可以接受的截图

## 截图保存位置

所有截图应保存在以下文件夹：
```
docs/creem-submission/screenshots/
```

文件夹结构：
```
docs/
  creem-submission/
    screenshots/
      01-homepage.png
      02-about.png
      03-pricing.png
      04-privacy.png
      05-terms.png
      06-contact.png
      07-footer.png
      08-account.png
    EMAIL_TEMPLATE.md
    SCREENSHOT_GUIDE.md
```

## 验证清单

在提交前，请确认：

- [ ] 所有 8 个截图都已保存
- [ ] 截图文件名正确（01-08 前缀）
- [ ] 所有关键信息清晰可见（免责声明、支持邮箱、定价等）
- [ ] 截图质量良好，文字可读
- [ ] 截图已保存在正确的文件夹中

## 注意事项

1. **隐私信息:** 如果截图包含任何个人敏感信息，请确保已打码或移除
2. **测试数据:** 如果使用测试数据，请确保截图中的内容符合实际生产环境
3. **日期:** 确保截图中的日期信息是最新的
4. **链接:** 确保所有链接在截图时都是可访问的

## 替代方案

如果无法访问 localhost:3000，可以：

1. **部署到 Vercel:** 将网站部署到 Vercel，然后从生产环境截图
2. **使用 ngrok:** 使用 ngrok 创建公共 URL，然后截图
3. **本地截图后上传:** 截图后上传到图床服务，在邮件中提供链接

---

**完成截图后，请更新 EMAIL_TEMPLATE.md 中的相关信息，然后发送邮件给 support@creem.io**

