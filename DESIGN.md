# ziki0621.github.io — 个人网站设计文档

> 修改网站时先读此文档，了解结构和设计规范。

---

## 一、文件结构

```
ziqi-website/
├── index.html              # 主页面（所有内容都在这里）
├── assets/
│   ├── css/
│   │   └── style.css       # 全部样式
│   └── js/
│       └── main.js         # 交互效果
├── images/                  # 🖼️ 放图片的地方（目前为空）
├── files/                   # 📎 放 PDF 等文件的地方（目前为空）
├── render.yaml              # Render 部署配置
├── .gitignore
└── README.md
```

---

## 二、页面结构（index.html 区块说明）

| 区块 | ID | 内容 |
|------|----|------|
| 顶部导航 | `<nav>` | 链接：Work / Research / Writing / Get in touch |
| Hero 大标题 | `.hero` | 名字 + 标题 + 简介 + 研究标签 |
| 教育 | `#work` | section-number: 01 |
| 论文 | `#research` | section-number: 02 |
| 项目 | `#writing` | section-number: 03 |
| 课外活动 | 无 ID | section-number: 04 |
| 联系方式 | `#contact` | 深色背景，邮箱等链接 |
| Footer | `<footer>` | 版权 |

### 添加新区块的方法

在 `index.html` 里复制以下模板，插到对应位置：

```html
<section id="新id" class="section">
    <div class="section-header">
        <span class="section-number">05</span>
        <h2>区块标题</h2>
    </div>
    <!-- 内容写这里 -->
</section>
```

---

## 三、设计规范

### 颜色

| 用途 | 色值 | 说明 |
|------|------|------|
| 背景 | `#faf9f6` | 暖白 |
| 深色区背景 | `#1a1a1a` | Hero 和 Contact 区 |
| 正文 | `#1a1a1a` | |
| 次要文字 | `#6b6b6b` | |
| 浅色文字 | `#a0a0a0` | |
| 分隔线 | `#e8e7e4` | |

### 字体

| 用途 | 字体 |
|------|------|
| 全部文字 | Times New Roman |
| 斜体强调 | Times New Roman Italic |

### 间距

- 页面最大宽度：720px（居中）
- 区块上下间距：100px（`.section`）
- 区块标题距内容：48px

### 动画

- Hero 区域：文字从下往上淡入（0.1-0.4s 延时）
- 滚动出现：卡片和条目在滚入视口时淡入

---

## 四、常见修改操作

### 1. 改个人信息

编辑 `index.html`，定位到对应区域。例如改 Hero 简介：

```html
<p class="hero-desc">
    I'm a researcher exploring ... 改这里 ...
</p>
```

### 2. 添加论文

在 `#research` 区复制一个 `.pub-item` 块：

```html
<div class="pub-item">
    <div class="pub-venue">会议/期刊名</div>
    <div class="pub-content">
        <h3>论文标题</h3>
        <p class="pub-authors">作者信息</p>
        <p class="pub-abstract">摘要内容</p>
    </div>
</div>
```

### 3. 添加项目

在 `#writing` 区复制一个 `.project-item` 块：

```html
<div class="project-item">
    <div class="project-tags">
        <span>标签1</span>
        <span>标签2</span>
    </div>
    <h3>项目名称</h3>
    <p>项目描述</p>
    <span class="project-role">你的角色 · 时间</span>
</div>
```

### 4. 🖼️ 添加图片

把图片放到 `images/` 文件夹，然后在 HTML 里引用：

```html
<img src="images/你的图片.jpg" alt="描述文字" style="width:100%; border-radius:8px; margin:20px 0;">
```

### 5. 📎 添加文件（如简历 PDF）

把文件放到 `files/` 文件夹，然后在 HTML 里加下载链接：

```html
<a href="files/你的文件.pdf" target="_blank">下载简历</a>
```

---

## 五、部署流程

```bash
# 修改文件后，在 ziqi-website 文件夹里运行：
git add .
git commit -m "描述改了什么"
git push
# 等 1-3 分钟，GitHub Pages 自动更新
```

> 如果 `git push` 连不上，先设置代理：
> ```bash
> git config http.proxy http://127.0.0.1:7890
> git config https.proxy http://127.0.0.1:7890
> git push
> ```

### 本地预览

```bash
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

---

## 六、注意事项

- 图片建议压缩后再上传（推荐 < 500KB），保持加载速度
- 引用的图片路径不要用绝对路径，用 `images/xxx.jpg`
- 所有文字内容在 `index.html` 里，样式在 `style.css` 里，互不干扰
