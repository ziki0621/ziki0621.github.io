/* ==============================================
   Zhang Ziqi — Main JS
   Parchment / Wireframe Edition
   ============================================== */

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.edu-item, .pub-item, .project-item, .activity-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// English / Chinese content switch
const translations = {
    en: {
        currentlyLabel: 'Currently',
        currentlyValue: 'B.A. Linguistics & AI · PolyU',
        online: 'Online',
        navAbout: 'About',
        navEducation: 'Education',
        navPublications: 'Publications',
        navProjects: 'Projects',
        navBeyond: 'Beyond',
        aboutTitle: 'About Me',
        aboutBody: "Nice to meet you! I'm a final-year student at The Hong Kong Polytechnic University (PolyU), double majoring in Linguistics and Artificial Intelligence. My research interests focus on how AI understands and applies human language.\n\nOutside of academics, I'm passionate about outdoor activities, writing, and playing music. I serve as first flute in the PolyU Orchestra and have performed at various music festivals and concerts.\n\nIf we share similar interests, feel free to reach out—I would be glad to connect with you!",
        educationTitle: 'Education',
        university: 'The Hong Kong Polytechnic University',
        degree: 'B.A. Linguistics & Translation · AI & Data Analytics (Secondary Major)',
        coursework: 'Coursework: Machine Learning, AI, Data Structures, NLP',
        publicationsTitle: 'Publications',
        projectsTitle: 'Projects',
        beyondTitle: 'Beyond Research'
    },
    zh: {
        currentlyLabel: '目前',
        currentlyValue: '香港理工大学 · 语言学与人工智能本科',
        online: '在线',
        navAbout: '关于',
        navEducation: '教育',
        navPublications: '论文',
        navProjects: '项目',
        navBeyond: '研究之外',
        aboutTitle: '关于我',
        aboutBody: '你好！我是香港理工大学的应届本科生，双主修语言学与人工智能。我的研究兴趣聚焦于人工智能如何理解和运用人类语言。\n\n在学术之外，我热爱户外活动、写作和音乐演奏。我担任香港理工大学管弦乐团的长笛首席，并曾参与多个音乐节和音乐会演出。\n\n如果我们有相似的兴趣，欢迎随时联系我，很高兴与你交流！',
        educationTitle: '教育经历',
        university: '香港理工大学',
        degree: '语言学与翻译文学士 · 人工智能与数据分析（副主修）',
        coursework: '课程：机器学习、人工智能、数据结构、自然语言处理',
        publicationsTitle: '学术论文',
        projectsTitle: '研究项目',
        beyondTitle: '研究之外'
    }
};

const languageToggle = document.querySelector('.language-toggle');
let currentLanguage = 'en';

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[language][key]) element.textContent = translations[language][key];
    });

    languageToggle.innerHTML = language === 'en'
        ? '<span class="language-toggle-active">EN</span><span class="language-toggle-separator">/</span><span>中文</span>'
        : '<span>EN</span><span class="language-toggle-separator">/</span><span class="language-toggle-active">中文</span>';
    languageToggle.setAttribute('aria-pressed', String(language === 'zh'));
    languageToggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
}

languageToggle?.addEventListener('click', () => {
    setLanguage(currentLanguage === 'en' ? 'zh' : 'en');
});
