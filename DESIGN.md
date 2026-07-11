# ziki0621.github.io — 个人网站设计文档 v2.0

> **使用方式：** 想改网站内容时，直接编辑这个文件里的对应信息，然后告诉我"按设计文档更新网站"。我会读取这个文件，同步修改 `index.html` 和 `style.css`，再推送上线。

---

## 一、设计系统：羊皮纸 × 线框终端

网站采用 **羊皮纸纹理 + 复古线框终端** 美学，灵感来自旧纸张质感与CRT终端界面。

### 配色

| 用途 | 色值 |
|------|------|
| 页面底色（羊皮纸） | `#F3EAD5` |
| 侧边栏底色（加深羊皮纸） | `#E3D4BB` |
| 更深的羊皮纸 | `#D5C4A6` |
| 正文/边框 | `#4A3B2C` |
| 次要文字 | `rgba(74, 59, 44, 0.70)` |
| 浅色文字 | `rgba(74, 59, 44, 0.50)` |

### 字体

| 用途 | 字体 |
|------|------|
| 标题 (section header) | `Noto Serif SC` (宋体) |
| 正文 | `Times New Roman`, Georgia, serif |
| 系统标签/日期/等宽 | `SF Mono`, `Consolas`, monospace |

### 核心设计模式

1. **羊皮纸纹理背景** — 4 层叠加：SVG 斑驳噪声 + 纤维颗粒 + 网纹纸编织线 + 暗角阴影
2. **Wireframe Box** — 双层边框卡片：外层 1.5px + 内层 0.5px，附带 `2px 2px 0` 偏移阴影
3. **区块标题** — `◇` 菱形 + 横线 + 文字 + 横线 + `◇` 菱形
4. **等宽系统标签** — 日期、代码、元数据使用 `font-mono` + 宽字间距

---

## 二、布局结构

网站采用 **左栏 + 右栏** 两栏布局：

- **左侧栏（Sidebar）**：300px 宽，羊皮纸加深色（`#E3D4BB`），sticky 定位，右侧有 1.5px 边框 + 阴影。包含双层边框圆形头像、姓名、标语、菱形分隔线、系统标签、链接、在线状态灯、版本号。
- **右侧（Content）**：max-width 660px。每个区块包裹在 wireframe-box（双层边框卡片）中。
- **整体布局**：max-width 1040px，居中显示。

---

## 三、网站全部内容

### 🧑‍💼 左侧栏（Sidebar）

| 字段 | 当前内容 |
|------|---------|
| 头像 | `images/photo-avatar.jpg`（双层线框圆形裁剪） |
| 姓名 | `Zhang Ziqi` |
| 标语 | `Linguistics meets artificial intelligence.`（artificial intelligence 斜体） |
| Currently | `B.A. Linguistics & AI · PolyU` |
| Research | `LLM Interpretability · Cognitive Science` |
| Email | `zhangziqi.bram@gmail.com` |
| Google Scholar | `https://scholar.google.com/citations?user=HLZpoHoAAAAJ&hl=zh-CN&oi=sra` |
| GitHub | `https://github.com/ziki0621` |
| 状态灯 | `ONLINE` (带呼吸动画的LED指示灯) |
| 版本号 | `SYS_VER — 2.0.0` |

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

- **羊皮纸背景**：SVG `feTurbulence` 生成斑驳噪点/纤维颗粒纹理，叠加网纹纸编织线
- **暗角**：双层 `inset box-shadow` 模拟纸页边缘氧化
- **侧边栏状态灯**：LED 呼吸动画
- **滚动淡入动画**：教育、论文、项目、活动项目在滚动进入视口时淡入

---

## 四、文件结构

```
ziqi-website/
├── index.html        # 主页面（两栏布局，wireframe box卡片）
├── assets/
│   ├── css/
│   │   └── style.css # 样式（羊皮纸纹理 + wireframe设计系统）
│   └── js/
│       └── main.js   # 滚动淡入动画
├── images/           # 🖼️ 放图片
│   ├── photo-avatar.jpg    # 左侧栏头像
│   ├── photo-profile.jpg   # 备用照片
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
