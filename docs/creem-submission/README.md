# Creem Account Review Submission Package

本文件夹包含提交给 Creem 进行账户审查所需的所有文档和截图。

## 文件夹结构

```
docs/creem-submission/
├── README.md                    # 本文件
├── EMAIL_TEMPLATE.md            # 发送给 Creem 的邮件模板
├── SCREENSHOT_GUIDE.md          # 截图指导文档
└── screenshots/                 # 截图文件夹
    ├── 01-homepage.png
    ├── 02-about.png
    ├── 03-pricing.png
    ├── 04-privacy.png
    ├── 05-terms.png
    ├── 06-contact.png
    ├── 07-footer.png
    └── 08-account.png
```

## 使用步骤

### 1. 截图准备

1. 启动本地开发服务器：
   ```bash
   npm run dev
   ```

2. 访问 http://localhost:3000

3. 按照 `SCREENSHOT_GUIDE.md` 中的指导，截取所有 8 个页面的截图

4. 将截图保存到 `screenshots/` 文件夹，使用指定的文件名

### 2. 填写邮件模板

1. 打开 `EMAIL_TEMPLATE.md`

2. 填写以下信息：
   - [您的全名或公司名称]
   - [您的税务居民国家]
   - 其他个人信息

3. 检查所有 URL 是否正确（确保使用生产环境 URL，如 https://www.nanobananaco.online）

### 3. 发送邮件

1. 将 `EMAIL_TEMPLATE.md` 的内容复制到邮件客户端

2. 将 `screenshots/` 文件夹中的所有截图作为附件

3. 发送到：support@creem.io

4. 主题行：Account Review Submission - ImageEditor (Nano Banana Image Editor)

## 重要提醒

### 在发送前检查：

- [ ] 所有截图都已准备完成
- [ ] 邮件模板中的所有占位符都已填写
- [ ] 所有 URL 都是生产环境的（不是 localhost）
- [ ] 支持邮箱 fufu@nanobananaco.online 已设置并可接收邮件
- [ ] 网站已部署到生产环境并可公开访问
- [ ] 所有合规性要求都已满足（参考 CREEM_COMPLIANCE_CHECKLIST.md）

### 需要填写的信息

在 `EMAIL_TEMPLATE.md` 中，请替换以下占位符：

- `[请填写您的全名或公司名称]` - 您的真实姓名或公司注册名称
- `[请填写您的税务居民国家]` - 例如：China, United States, Singapore 等
- `[您的姓名]` - 邮件签名中的姓名
- `[您的职位]` - 您的职位或角色

### 生产环境检查清单

在提交前，确保：

1. **网站已部署** - 确保 https://www.nanobananaco.online 可以正常访问
2. **所有链接有效** - 检查所有页面链接是否正常工作
3. **支持邮箱可用** - 确保 fufu@nanobananaco.online 可以接收邮件
4. **SSL 证书有效** - 确保网站使用 HTTPS
5. **内容完整** - 确保所有页面内容都已完整显示

## 参考文档

- [Creem Account Reviews 文档](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews)
- [AI Wrapper Compliance 要求](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews#ai-wrapper-compliance)
- [项目合规性检查清单](../CREEM_COMPLIANCE_CHECKLIST.md)

## 后续步骤

发送邮件后：

1. **等待回复** - Creem 通常会在几个工作日内回复
2. **准备补充材料** - 可能需要提供额外的文档或信息
3. **保持沟通** - 及时回复 Creem 的任何问题或要求
4. **监控邮箱** - 确保及时查看并回复邮件

## 联系信息

如有问题，请联系：
- Creem Support: support@creem.io
- 项目支持邮箱: fufu@nanobananaco.online

---

**最后更新：** 2025年  
**状态：** 准备提交

