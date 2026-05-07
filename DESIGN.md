# ziki0621.github.io — 个人网站设计文档

> **使用方式：** 想改网站内容时，直接编辑这个文件里的对应信息，然后告诉我"按设计文档更新网站"。我会读取这个文件，同步修改 `index.html` 和 `style.css`，再推送上线。

---

## 一、布局结构

网站采用 **左栏 + 右栏** 两栏布局：

- **左侧栏（Sidebar）**：320px 宽，暗色渐变背景（#1a1a1a → #2d2d2d → #1a1a1a），sticky 定位固定在左侧。包含头像、姓名、标语、元数据、联系链接、射光灯动画特效。
- **右侧（Content）**：max-width 640px，浅色背景（#faf9f6）。包含个人简介、所有内容区块：Education、Publications、Projects、Beyond Research、Footer。
- **整体布局**：max-width 1024px，居中显示，左右留均等空白。

---

## 二、网站全部内容

### 🧑‍💼 左侧栏（Sidebar）

| 字段 | 当前内容 |
|------|---------|
| 头像 | `images/photo-avatar.jpg`（圆形裁剪，160×160） |
| 姓名 | `Zhang Ziqi` |
| 标语 | `Linguistics meets artificial intelligence.`（artificial intelligence 斜体） |
| Currently | `B.A. Linguistics & AI · PolyU` |
| Research | `LLM Interpretability · Cognitive Science` |
| Email | `zhangziqi.bram@gmail.com` |
| Google Scholar | `https://scholar.google.com/citations?user=HLZpoHoAAAAJ&hl=zh-CN&oi=sra` |
| GitHub | `https://github.com/ziki0621` |

---

### 📝 About Me（00 — 右侧内容区顶部）

| 字段 | 当前内容 |
|------|---------|
| 标题 | `About Me` |
| 简介 | `Nice to meet you! I'm a Year 4 undergraduate student exploring LLM interpretability, multimodal models, and the intersection of cognitive science with large language models. Based at the Hong Kong Polytechnic University.` |

---

### 📚 Education（01）

| 字段 | 当前内容 |
|------|---------|
| 年份 | `2022 – 2026` |
| 学校 | `The Hong Kong Polytechnic University` |
| 专业 | `B.A. Linguistics & Translation · AI & Data Analytics (Secondary Major)` |
| 课程 | `Coursework: Machine Learning, AI, Data Structures, NLP` |

---

### 📄 Publications（02）

#### 论文 1

| 字段 | 当前内容 |
|------|---------|
| 会议 | `EMNLP 2025` |
| 标题 | `PhonoThink: Improving Large Language Models' Reasoning on Chinese Phonological Ambiguities` |
| 链接 | `https://aclanthology.org/2025.emnlp-main.961/` |
| 作者 | `Jianfei Ma, Zhaoxin Feng, Emmanuele Chersoni, Huacheng Song, **Ziqi Zhang**` |

#### 论文 2

| 字段 | 当前内容 |
|------|---------|
| 会议 | `BlackboxNLP 2025` |
| 标题 | `From BERT to LLMs: Comparing and Understanding Chinese Classifier Prediction in Language Models` |
| 链接 | `https://aclanthology.org/2025.blackboxnlp-1.20/` |
| 作者 | `**Ziqi Zhang**, Jianfei Ma, Emmanuele Chersoni, Jieshun You, Zhaoxin Feng` |

---

### 🔬 Projects（03）

#### 项目 1

| 字段 | 当前内容 |
|------|---------|
| 标签 | `Benchmark`, `Multilingual`, `CoT` |
| 标题 | `IntEx-Bench: A Unified Evaluation Benchmark` |
| 描述 | `Designed a 7,000+ entry multilingual benchmark with dual evaluation framework — zero-shot CoT for explicit reasoning and contextual embedding extraction for implicit representation. Developed Semantic Feature-CoT framework to enhance compound word interpretability.` |
| 角色/时间 | `Project Leader & First Author · Oct 2025 – Feb 2026` |

#### 项目 2

| 字段 | 当前内容 |
|------|---------|
| 标签 | `EEG-fMRI`, `Cognitive Science`, `LLM` |
| 标题 | `Cognitive Processing in Healthy Aging — An EEG-fMRI Study` |
| 描述 | `Extracted Surprisal and Entropy features from LLMs and aligned them with neuroimaging data to explore how computational linguistic indicators predict brain processing mechanisms across the lifespan.` |
| 角色/时间 | `Research Assistant · PolyU & HKU · Mar 2026 – Present` |

#### 项目 3

| 字段 | 当前内容 |
|------|---------|
| 标签 | `Multimodal`, `Healthcare`, `NLP+CV` |
| 标题 | `Intelligent Health Monitoring System (Multimodal LLMs)` |
| 描述 | `Designed an elder care system integrating NLP, speech recognition, and computer vision. Advanced to Hong Kong Regional Finals of the China International College Students' Innovation Competition 2024.` |
| 角色/时间 | `Project Member · CUHK · May 2024 – Sep 2024` |

#### 项目 4

| 字段 | 当前内容 |
|------|---------|
| 标签 | `Phonetics`, `Speech`, `Python` |
| 标题 | `Cantonese Spontaneous Speech Corpus & Phonetics Research` |
| 描述 | `Analyzed 40K+ interrogative sentences from Common Voice and OpenSLR. Built automated pipeline for batch audio analysis using Python, Praat, and Montreal Forced Aligner. Applied Linear Mixed-Effects Models for statistical analysis.` |
| 角色/时间 | `Project Leader · PolyU & HIT (Shenzhen) · May 2025 – Dec 2025` |

#### 项目 5

| 字段 | 当前内容 |
|------|---------|
| 标签 | `Syntactic Analysis`, `Probing`, `Psycholinguistics` |
| 标题 | `Mechanisms of LLMs in Processing Ambiguous Sentences` |
| 描述 | `Constructed a 1,000+ Garden-path sentence dataset. Used Dependency-Trained Probes for deep syntactic analysis and minicons library for token-level log probability evaluation.` |
| 角色/时间 | `Research Assistant · PolyU · Aug 2025 – Dec 2025` |

---

### 🎵 Beyond Research（04）

| icon | 内容 | 详情 |
|------|------|------|
| 🎵 | **First Flute** — PolyU Orchestra | `Tsinghua-PolyU joint concert soloist · HKGNA 2024 Music Festival` |
| 🌏 | **Volunteer Teacher** — Cambodia | `Teaching AI tools & coding with Scratch and Google Teachable Machine` |
| 📋 | **Cultural Secretary** — Hall Student Association | `Organized talent show, energy-saving day, and sports day` |

---

### © Footer

| 字段 | 当前内容 |
|------|---------|
| 版权 | `© 2026 Zhang Ziqi · {visits} visits` |
| 统计 | 使用不蒜子 busuanzi 统计页面访问量 |

---

### 特效

- **左侧栏射光灯**：7 道光束，由 JS 动态生成，高度 300-500px 随机，从底部向上发散。每 1.5-3s 随机漂移角度和透明度，持续变化

---

## 三、设计规范

### 颜色

| 用途 | 色值 |
|------|------|
| 页面背景 | `#faf9f6` |
| 左侧栏背景 | 渐变 `#1a1a1a` → `#2d2d2d` → `#1a1a1a` |
| Contact/Footer 背景 | `#1a1a1a`（已废弃，现在联系链接在左侧栏） |
| 正文颜色 | `#1a1a1a` |
| 次要文字 | `#6b6b6b` |
| 浅色文字 | `#a0a0a0` |
| 分隔线 | `#e8e7e4` |
| 左侧栏文字 | `#ffffff` |
| 左侧栏次要文字 | `rgba(255,255,255,X)`（不同层级不同透明度） |

### 字体

| 用途 | 字体 |
|------|------|
| 全部文字 | `Times New Roman` |
| 斜体强调 | `Times New Roman italic` |

### 间距

- 左侧栏宽度：`320px`（固定）
- 右侧内容最大宽度：`640px`
- 区块上下间距：`36px`
- 区块标题距下方内容：`7px`

---

## 四、文件结构

```
ziqi-website/
├── index.html        # 主页面（两栏布局）
├── assets/
│   ├── css/
│   │   └── style.css # 样式
│   └── js/
│       └── main.js   # 射光灯 + 滚动动画
├── images/           # 🖼️ 放图片
│   ├── photo-avatar.jpg    # 左侧栏头像（圆形裁剪）
│   ├── photo-profile.jpg   # 左侧栏下方照片
│   └── photo.jpg           # 原始照片
├── files/            # 📎 放 PDF 等文件
├── DESIGN.md         # ← 就是这个文件
├── render.yaml       # Render 部署配置
├── .gitignore
└── README.md
```

---

## 五、如何修改

### 方式 A：你改这个文档，我来同步（推荐）

1. 编辑上面的表格
2. 告诉我：**"按设计文档更新网站"**
3. 我自动同步到 `index.html` 和 `style.css`，然后 `git push`

### 方式 B：直接跟我说

直接说需求，比如：
- "把简介改成 xxx"
- "加一篇新论文，标题是 xxx，会议是 xxx"
- "在左侧栏加一行信息"
- "把邮箱改成 xxx@xxx.com"

### 添加图片

1. 把图片文件放到 `images/` 文件夹
2. 告诉我"在左侧栏/哪里的位置放图片，文件名是 xxx.jpg"

### 添加文件（简历等）

1. 把 PDF 等文件放到 `files/` 文件夹
2. 告诉我"在 xxx 位置加文件链接"

---

## 六、部署

```bash
git add .
git commit -m "改了什么"
git push
# 等 1-3 分钟 GitHub Pages 自动更新
```

> 如果连不上 GitHub，先设代理：
> ```bash
> git config http.proxy http://127.0.0.1:7890
> git config https.proxy http://127.0.0.1:7890
> ```

### 本地预览

```bash
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```
