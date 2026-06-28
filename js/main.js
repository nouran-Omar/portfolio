

// ============ TRANSLATIONS ============
const dictionary = {
  en: {
    "nav-home":"Home","nav-about":"About","nav-experience":"Experience",
    "nav-skills":"Skills","nav-projects":"Projects","nav-certificates":"Certificates","nav-contact":"Contact",
    "logo-en":"Eng. Nouran", "logo-role-en":"Frontend Dev",
    "hero-badge":"Available for Work",
    "hero-greeting":"Hi, I'm",
    "hero-name":"Eng. Nouran Omar",
    "tw-prefix":"I build",
    "hero-desc":"Creating flawless high-fidelity UI/UX experiences and high-performance applications with clean architecture.",
    "stat-gpa":"GPA","stat-years":"Years CS","stat-proj":"Projects",
    "btn-hire":"Hire Me","btn-portfolio":"Portfolio","btn-cv":"CV",
    "about-tag":"Who I Am","about-head-1":"About","about-head-2":"Me",
    "about-text-p":"A passionate software engineer, graduating in 2026 with a 3.67 GPA from EELU. I specialize in building robust, scalable applications and transforming complex UI/UX designs into smooth, interactive interfaces with clean, organized code.",
    "fact-1":"EELU — Class of 2026","fact-2":"Full-Stack Developer","fact-3":"Arabic & English","fact-4":"Egypt — Remote Ready",
    "metric-gpa":"Cumulative GPA","metric-grad":"Graduation Project",
    "metric-gpa-sub":"Out of 4.0 — EELU","metric-grad-sub":"Top distinction grade","metric-status":"Class of 2026 — EELU",
    "exp-tag":"Career Path","experience-head-1":"My","experience-head-2":"Experience",
    "exp1-date":"2025","exp1-title":"Full-Stack .NET Trainee",
    "exp1-company":"DEPI — Digital Egypt Pioneers Initiative",
    "exp1-desc":"Completed an intensive training program covering the entire .NET ecosystem, including C#, ASP.NET Core, Entity Framework, and frontend integration. Developed and deployed several full-stack applications.",
    "exp2-date":"2025 – Present","exp2-title":"Freelance Frontend Developer",
    "exp2-company":"Upwork & Freelancer",
    "exp2-desc":"Delivered high-quality frontend solutions for various clients, focusing on React, TypeScript, and modern CSS frameworks to create responsive and interactive user interfaces.",
    "skills-tag":"What I Know","skills-head-1":"My","skills-head-2":"Skills",
    "skills-cat-frontend":"Frontend Development","skills-cat-backend":"Backend & Databases",
    "skills-cat-core":"Core Concepts & Architecture","skills-cat-tools":"Tools & DevOps",
    "proj-tag":"What I Built","proj-head-1":"Featured","proj-head-2":"Projects",
    "proj-pulsex-title":"PulseX — AI Heart Health Platform",
    "proj-pulsex-desc":"An integrated platform for monitoring cardiovascular health and assessing risks using AI. Features role-based dashboards, real-time vital data, and a comprehensive healthcare management system.",
    "proj-editor-title":"Arabic Mathematical Editor",
    "proj-editor-desc":"A specialized web text editor for writing complex mathematical equations in Arabic. Built from scratch to tackle RTL challenges for nested equations, demonstrating deep understanding of Slate.js.",
    "proj-mabeet-title":"Mabeet — Property Booking Platform",
    "proj-mabeet-desc":"A full-stack property booking platform connecting owners with users. Features a robust ASP.NET Core API and a dynamic Vanilla JS frontend for property management.",
    "proj-medix-title":"Medix-Pharmacy — Pharmacy ERP",
    "proj-medix-desc":"A comprehensive pharmacy management system with an interactive dashboard for inventory tracking, order management, and a robust role-based access control system.",
    "proj-arch-title":"Software Architecture & Design Patterns",
    "proj-arch-desc":"An educational series demonstrating practical application of fundamental design patterns in Java, showcasing a deep understanding of OOP for building scalable applications.",
    "proj-taskmaster-title":"TaskMaster — Kanban Board UI",
    "proj-taskmaster-desc":"A Kanban-style task management UI, built with Vanilla JavaScript and Tailwind CSS, featuring drag-and-drop functionality.",
    "proj-luxe-title":"LUXE — E-commerce Platform UI",
    "proj-luxe-desc":"A frontend for a luxury e-commerce platform, focusing on a clean user experience, smooth animations, and a high-fidelity design (Private Repo).",
    "proj-employee-title":"Employee Management System",
    "proj-employee-desc":"A simple CRUD application for employee management built with Java, demonstrating OOP fundamentals.",
    "proj-sentiment-title":"Sentiment Analysis Engine",
    "proj-sentiment-desc":"A tool for sentiment analysis in text (positive, negative, neutral) using Python and Natural Language Processing (NLP) techniques.",
    "proj-view-code":"View Code","proj-live-demo":"Live Demo",
    "certs-tag":"Achievements","certs-head-1":"My","certs-head-2":"Certificates",
    "cert1-title":"Full-Stack .NET Development","cert1-issuer":"DEPI — Digital Egypt Pioneers Initiative",
    "cert2-title":"Advanced React & Modern Patterns","cert2-issuer":"Udemy",
    "btn-download":"Download PDF",
    "contact-tag":"Let's Talk","contact-head-1":"Get In","contact-head-2":"Touch",
    "ci-email-label":"Email","ci-gh-label":"GitHub","ci-li-label":"LinkedIn","ci-li-val":"Connect with me",
    "form-label-name":"Your Name","form-label-email":"Your Email","form-label-msg":"Message",
    "form-placeholder-name":"Your Name","form-placeholder-email":"Your Email","form-placeholder-message":"Your Message",
    "btn-send":"Send Message",
    "swal-loading-title":"Sending...","swal-loading-text":"Please wait a moment.",
    "swal-success-title":"Sent! ✓","swal-success-text":"Message sent successfully! Thank you for reaching out.",
    "swal-error-title":"Oops...","swal-error-text":"Something went wrong! Please try again later.",
    "footer-tagline":"Building the web, one pixel at a time.",
    "footer-copyright":"Eng. Nouran Omar. All Rights Reserved.",
  },
  ar: {
    "nav-home":"الرئيسية","nav-about":"عني","nav-experience":"خبراتي",
    "nav-skills":"مهاراتي","nav-projects":"مشاريعي","nav-certificates":"الشهادات","nav-contact":"تواصل معي",
    "logo-ar":"الْمُهَنْدِسَة نُورَانْ", "logo-role-ar":"مطورة واجهات",
    "hero-badge":"متاحة للعمل",
    "hero-greeting":"أهلاً، أنا",
    "hero-name":"المهندسة نوران عمر",
    "tw-prefix":"أبني",
    "hero-desc":"أصنع تجارب مستخدم استثنائية عالية الدقة وتطبيقات عالية الأداء بمعمارية برمجية نظيفة ومتطورة.",
    "stat-gpa":"المعدل","stat-years":"سنوات CS","stat-proj":"مشروع",
    "btn-hire":"وظفني","btn-portfolio":"أعمالي","btn-cv":"السيرة الذاتية",
    "about-tag":"من أنا","about-head-1":"نبذة","about-head-2":"عني",
    "about-text-p":"مهندسة برمجيات شغوفة، خريجة عام 2026 بمعدل تراكمي 3.67 من EELU. متخصصة في بناء تطبيقات قوية وقابلة للتطوير، وتحويل التصاميم المعقدة إلى واجهات مستخدم تفاعلية وسلسة بكود نظيف ومنظم.",
    "fact-1":"EELU — خريجة 2026","fact-2":"مطورة Full-Stack","fact-3":"العربية والإنجليزية","fact-4":"مصر — متاحة عن بُعد",
    "metric-gpa":"المعدل التراكمي","metric-grad":"مشروع التخرج",
    "metric-gpa-sub":"من 4.0 — EELU","metric-grad-sub":"بتقدير امتياز","metric-status":"دفعة 2026 — EELU",
    "exp-tag":"المسار المهني","experience-head-1":"خبراتي","experience-head-2":"العملية",
    "exp1-date":"2025","exp1-title":"متدربة Full-Stack .NET",
    "exp1-company":"مبادرة بناة مصر الرقمية — DEPI",
    "exp1-desc":"أكملت برنامجًا تدريبيًا مكثفًا يغطي منظومة .NET بالكامل، بما في ذلك C# و ASP.NET Core و Entity Framework والتكامل مع الواجهات الأمامية.",
    "exp2-date":"2025 – الآن","exp2-title":"مطورة واجهات أمامية مستقلة",
    "exp2-company":"Upwork & Freelancer",
    "exp2-desc":"قدمت حلول واجهات أمامية عالية الجودة لعملاء متنوعين، مع التركيز على React و TypeScript وأطر عمل CSS الحديثة.",
    "skills-tag":"ما أتقنه","skills-head-1":"الخبرات","skills-head-2":"التقنية",
    "skills-cat-frontend":"تطوير الواجهات الأمامية","skills-cat-backend":"الخوادم وقواعد البيانات",
    "skills-cat-core":"المفاهيم الأساسية والمعمارية","skills-cat-tools":"الأدوات والـ DevOps",
    "proj-tag":"ما أنجزته","proj-head-1":"أبرز","proj-head-2":"المشاريع",
    "proj-pulsex-title":"PulseX — منصة صحة القلب بالذكاء الاصطناعي",
    "proj-pulsex-desc":"منصة متكاملة لمراقبة صحة القلب وتقييم المخاطر باستخدام الذكاء الاصطناعي. تتميز بلوحات تحكم مخصصة وعرض فوري للبيانات الحيوية.",
    "proj-editor-title":"محرر المعادلات الرياضية بالعربية",
    "proj-editor-desc":"محرر نصوص ويب متخصص لكتابة المعادلات الرياضية المعقدة بالعربية. تم بناؤه من الصفر لمواجهة تحديات RTL باستخدام Slate.js.",
    "proj-mabeet-title":"Mabeet — منصة حجز عقارات",
    "proj-mabeet-desc":"منصة حجز عقارات كاملة تربط بين أصحاب العقارات والمستخدمين بـ API قوي بـ ASP.NET Core وواجهة Vanilla JS.",
    "proj-medix-title":"Medix-Pharmacy — نظام إدارة صيدليات",
    "proj-medix-desc":"نظام شامل لإدارة الصيدليات بلوحة تحكم تفاعلية لتتبع المخزون وإدارة الطلبات ونظام صلاحيات قوي.",
    "proj-arch-title":"معمارية البرمجيات وأنماط التصميم",
    "proj-arch-desc":"سلسلة تعليمية توضح التطبيق العملي لأنماط التصميم الأساسية في Java وتظهر فهماً عميقاً لمبادئ OOP.",
    "proj-taskmaster-title":"TaskMaster — واجهة Kanban",
    "proj-taskmaster-desc":"واجهة إدارة مهام بأسلوب Kanban مبنية بـ Vanilla JavaScript و Tailwind CSS مع دعم السحب والإفلات.",
    "proj-luxe-title":"LUXE — واجهة متجر إلكتروني",
    "proj-luxe-desc":"واجهة أمامية لمنصة تجارة إلكترونية فاخرة تركز على تجربة المستخدم النظيفة والرسوم المتحركة السلسة.",
    "proj-employee-title":"نظام إدارة الموظفين",
    "proj-employee-desc":"تطبيق CRUD بسيط لإدارة الموظفين مبني بلغة Java يوضح أساسيات OOP.",
    "proj-sentiment-title":"محرك تحليل المشاعر",
    "proj-sentiment-desc":"أداة لتحليل المشاعر في النصوص (إيجابي، سلبي، محايد) باستخدام Python وتقنيات NLP.",
    "proj-view-code":"عرض الكود","proj-live-demo":"عرض حي",
    "certs-tag":"إنجازاتي","certs-head-1":"شهاداتي","certs-head-2":"المعتمدة",
    "cert1-title":"تطوير Full-Stack .NET","cert1-issuer":"مبادرة بناة مصر الرقمية — DEPI",
    "cert2-title":"React المتقدم والأنماط الحديثة","cert2-issuer":"Udemy",
    "btn-download":"تحميل PDF",
    "contact-tag":"تواصل","contact-head-1":"تواصل","contact-head-2":"معي",
    "ci-email-label":"البريد الإلكتروني","ci-gh-label":"GitHub","ci-li-label":"LinkedIn","ci-li-val":"تواصل معي",
    "form-label-name":"اسمك","form-label-email":"بريدك الإلكتروني","form-label-msg":"رسالتك",
    "form-placeholder-name":"اسمك","form-placeholder-email":"بريدك الإلكتروني","form-placeholder-message":"رسالتك",
    "btn-send":"إرسال الرسالة",
    "swal-loading-title":"جاري الإرسال...","swal-loading-text":"برجاء الانتظار قليلاً.",
    "swal-success-title":"تم بنجاح ✓","swal-success-text":"تم إرسال رسالتك بنجاح! شكراً لتواصلك.",
    "swal-error-title":"عفوًا...","swal-error-text":"حدث خطأ ما! يرجى المحاولة مرة أخرى لاحقًا.",
    "footer-tagline":"أبني الويب، بيكسل تلو الآخر.",
    "footer-copyright":"م. نوران عمر. جميع الحقوق محفوظة.",
  }
};

// ============ DATA ============
const skillCategories = [
  { cat_key:"skills-cat-frontend", icon:"fa-solid fa-laptop-code",
    list:["React","TypeScript","JavaScript (ES6+)","Zustand","Redux","Slate.js","Framer Motion","Tailwind CSS","Bootstrap 5","HTML5 / CSS3","Vite"] },
  { cat_key:"skills-cat-backend", icon:"fa-solid fa-server",
    list:["ASP.NET Core",".NET","C#","Java","Python","Entity Framework Core","SQL Server","PostgreSQL","SQLite"] },
  { cat_key:"skills-cat-core", icon:"fa-solid fa-diagram-project",
    list:["OOP","Software Design Patterns","RESTful APIs","JWT Authentication","Clean Code","SOLID Principles"] },
  { cat_key:"skills-cat-tools", icon:"fa-solid fa-wrench",
    list:["Git","GitHub","Docker","VS Code","Cursor IDE","GitHub Copilot"] },
];

const coreProjects = [
  { id:"pulsex",     image:"Pulsx.png",                       tags:["React","JS",".NET","SQL Server"],            link:"https://github.com/Nouran-Omar" },
  { id:"editor",     image:"arabic-mathematical-editor.png",  tags:["React","TypeScript","Slate.js","Tailwind"],  link:"https://github.com/Nouran-Omar/Arabic-mathematical-editor", demoLink:"#" },
  { id:"mabeet",     image:"MABEET.png",                      tags:[".NET","C#","SQL Server","JWT","Vanilla JS"],  link:"https://github.com/Nouran-Omar/mabeet" },
  { id:"medix",      image:"medix-pharmacypng.png",           tags:["React","TypeScript","Tailwind","Zustand"],   link:"https://github.com/Nouran-Omar/Medix-Pharmacy" },
  { id:"arch",       image:"PATTERN.png",                     tags:["Java","OOP","Design Patterns"],              link:"https://github.com/Nouran-Omar" },
  { id:"taskmaster", image:"TaskMaster.png",                  tags:["Vanilla JS","Tailwind CSS","HTML5"],         link:"https://github.com/Nouran-Omar" },
  { id:"luxe",       image:"LUXE.png",                        tags:["React","Framer Motion","Tailwind"],          link:"https://github.com/Nouran-Omar" },
  { id:"employee",   image:"emp.png",                         tags:["Java","OOP"],                                link:"https://github.com/Nouran-Omar" },
  { id:"sentiment",  image:"analyze_file_sentiment.png",      tags:["Python","NLP"],                              link:"https://github.com/Nouran-Omar" },
];

const experienceData = [
  { id:"exp1", icon:"fa-solid fa-code",      filename:"depi_experience.cs",     color:"#c9a8e8" },
  { id:"exp2", icon:"fa-solid fa-briefcase", filename:"freelance_frontier.ts",  color:"#e0c4f8"  },
];

const certificatesData = [
  { id:"cert1", title_key:"cert1-title", issuer_key:"cert1-issuer",
    file:"certificates/DEPI_FullStack_Certificate.pdf", icon:"fa-solid fa-award",
    filename:"dotnet_cert.pdf", codeline:'const stack = ".NET + C# + EF Core";' },
  { id:"cert2", title_key:"cert2-title", issuer_key:"cert2-issuer",
    file:"certificates/React_Advanced_Certificate.pdf", icon:"fa-brands fa-react",
    filename:"react_cert.pdf",  codeline:"import React from 'react'; // advanced" },
];

const typewriterPhrases = {
  en:["Beautiful UIs ✨","Scalable Apps 🚀","Clean Code 💻","Full-Stack Solutions 🔧","Great Experiences 🎯"],
  ar:["واجهات رائعة ✨","تطبيقات قابلة للتطوير 🚀","كود نظيف 💻","حلول متكاملة 🔧","تجارب استثنائية 🎯"],
};

const EMAILJS_CONFIG = {
  PUBLIC_KEY:  "YOUR_PUBLIC_KEY",
  SERVICE_ID:  "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
};

// ============ APP ============
document.addEventListener("DOMContentLoaded", () => {

  const state = {
    lang:  localStorage.getItem("lang")  || "en",
    theme: localStorage.getItem("theme") || "dark",
    twIdx:  0, twChar: 0, twDel: false, twTimer: null,
  };

  /* ---- PRELOADER ---- */
  function initPreloader() {
    const el = document.getElementById("preloader");
    window.addEventListener("load", () => {
      setTimeout(() => { if(el) el.classList.add("done"); }, 700);
    });
  }

  /* ---- NAVBAR SCROLL ---- */
  function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      nav && (window.scrollY > 20 ? nav.classList.add("scrolled") : nav.classList.remove("scrolled"));
    }, { passive:true });
  }

  /* ---- MOBILE MENU ---- */
  function initMobileMenu() {
    const ham  = document.getElementById("hamburger");
    const menu = document.getElementById("nav-links");
    if(!ham || !menu) return;
    ham.addEventListener("click", () => {
      ham.classList.toggle("open");
      menu.classList.toggle("open");
      document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      ham.classList.remove("open");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }

  /* ---- THEME ---- */
  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    applyTheme(state.theme);
    btn && btn.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme(state.theme);
    });
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    const btn = document.getElementById("theme-toggle");
    if(btn) btn.innerHTML = t === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  }

  /* ---- LANGUAGE ---- */
  function initLang() {
    const btn = document.getElementById("lang-toggle");
    applyLang(state.lang);
    btn && btn.addEventListener("click", () => {
      state.lang = state.lang === "en" ? "ar" : "en";
      applyLang(state.lang);
      // Rerender specific dynamic cards to switch animation and layout fluidly
      renderExperience();
    });
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("lang", lang);

    const lbl = document.getElementById("lang-label");
    if(lbl) lbl.textContent = lang === "en" ? "AR" : "EN";

    buildLogo(lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if(dictionary[lang][k] !== undefined) el.textContent = dictionary[lang][k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.getAttribute("data-i18n-placeholder");
      if(dictionary[lang][k] !== undefined) el.setAttribute("placeholder", dictionary[lang][k]);
    });
    document.querySelectorAll("[data-i18n-dynamic]").forEach(el => {
      const k = el.getAttribute("data-i18n-dynamic");
      if(dictionary[lang][k] !== undefined) el.textContent = dictionary[lang][k];
    });

    const ftxt = document.getElementById("footer-logo-text");
    if(ftxt) ftxt.textContent = lang === "en" ? "Eng. Nouran" : "م. نوران";

    const heroName = document.getElementById("hero-name");
    if(heroName) heroName.textContent = dictionary[lang]["hero-name"];

    restartTypewriter(lang);
  }

  /* ---- LOGO ---- */
  function buildLogo(lang) {
    const mono = document.getElementById("logo-monogram");
    const fullName = document.getElementById("logo-full-name");
    const roleTag  = document.getElementById("logo-role-tag");
    if(!mono) return;

    if(lang === "en") {
      mono.innerHTML = `<span class="lc">N</span><span class="lc">O</span>`;
      if(fullName) fullName.textContent = "Eng. Nouran";
      if(roleTag)  roleTag.textContent  = "Frontend Dev";
    } else {
      mono.innerHTML = `<span class="lc" style="font-family:'Cairo',sans-serif;font-size:1.2rem;">م.نوران</span>`;
      if(fullName) fullName.textContent = "";
      if(roleTag)  roleTag.textContent  = "مطورة واجهات";
    }
  }

  /* ---- TYPEWRITER ---- */
  function restartTypewriter(lang) {
    if(state.twTimer) clearInterval(state.twTimer);
    state.twIdx = 0; state.twChar = 0; state.twDel = false;
    const el = document.getElementById("tw-text");
    if(el) { el.style.opacity = 0; el.textContent = ""; }
    setTimeout(() => {
      if(el) el.style.opacity = 1;
      startTypewriter(lang);
    }, 550);
  }

  function startTypewriter(lang) {
    const el = document.getElementById("tw-text");
    if(!el) return;
    const phrases = typewriterPhrases[lang] || typewriterPhrases.en;
    function tick() {
      const cur = phrases[state.twIdx];
      if(state.twDel) {
        el.textContent = cur.substring(0, state.twChar - 1);
        state.twChar--;
        if(state.twChar === 0) {
          state.twDel = false;
          state.twIdx = (state.twIdx + 1) % phrases.length;
          clearInterval(state.twTimer);
          state.twTimer = setInterval(tick, 130);
        }
      } else {
        el.textContent = cur.substring(0, state.twChar + 1);
        state.twChar++;
        if(state.twChar === cur.length) {
          state.twDel = true;
          clearInterval(state.twTimer);
          setTimeout(() => { state.twTimer = setInterval(tick, 80); }, 2400);
        }
      }
    }
    state.twTimer = setInterval(tick, 130);
  }

  /* ---- RENDER SKILLS ---- */
  function renderSkills() {
    const c = document.querySelector(".skills-container");
    if(!c) return;
    c.innerHTML = skillCategories.map((item, i) => `
      <div class="skill-box" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="skill-box-hdr">
          <div class="skill-box-icon"><i class="${item.icon}"></i></div>
          <div class="skill-title" data-i18n-dynamic="${item.cat_key}"></div>
        </div>
        <div class="skill-list">
          ${item.list.map(s => `<span class="skill-badge">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* ---- RENDER INTERACTIVE PRESENTATION TIMELINE CARDS ---- */
  let card_observer = null;
  function renderExperience() {
    const tl = document.getElementById("experience-timeline");
    if(!tl) return;

    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    
    tl.innerHTML = experienceData.map((item, i) => {
      // Dynamic presentation flow direction configuration based on language direction setting
      const flowAos = isRtl ? (i % 2 === 0 ? "fade-left" : "fade-right") : (i % 2 === 0 ? "fade-right" : "fade-left");
      
      return `
      <div class="dev-timeline-card" style="--accent-line: ${item.color}" data-aos="${flowAos}" data-aos-delay="${i * 150}">
        <div class="dev-card-header">
          <div class="dev-mac-dots"><span class="mdot r"></span><span class="mdot y"></span><span class="mdot g"></span></div>
          <div class="dev-card-file"><i class="fa-regular fa-file-code"></i> <span class="dev-file-typed">${item.filename}</span></div>
        </div>
        <div class="dev-card-body">
          <div class="dev-card-meta">
            <span class="dev-badge-date"><i class="fa-regular fa-calendar"></i> <span data-i18n-dynamic="${item.id}-date"></span></span>
            <div class="dev-icon-badge"><i class="${item.icon}"></i></div>
          </div>
          <h3 class="dev-card-title" data-i18n-dynamic="${item.id}-title"></h3>
          <h4 class="dev-card-sub" data-i18n-dynamic="${item.id}-company"></h4>
          <p class="dev-card-text" data-i18n-dynamic="${item.id}-desc"></p>
        </div>
      </div>
    `}).join("");
    
    // retrigger translations for newly injected inner dynamic content elements
    applyLang(state.lang);
    initExperienceTypeReveal();
  }

  /* ---- TYPING / TERMINAL BOOT REVEAL FOR EXPERIENCE CARDS ---- */
  function initExperienceTypeReveal() {
    const cards = document.querySelectorAll(".dev-timeline-card");
    if(!cards.length) return;

    cards.forEach(card => {
      const textEl = card.querySelector(".dev-card-text");
      if(!textEl) return;
      const fullText = textEl.textContent;
      textEl.dataset.fullText = fullText;
      textEl.textContent = "";
      card.classList.remove("is-typing", "is-typed");
    });

    if(card_observer) card_observer.disconnect();

    card_observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const card = entry.target;
        if(card.classList.contains("is-typing") || card.classList.contains("is-typed")) return;
        card.classList.add("is-typing");

        const textEl = card.querySelector(".dev-card-text");
        const full = (textEl && textEl.dataset.fullText) || "";
        let idx = 0;

        const cursor = document.createElement("span");
        cursor.className = "typing-cursor";

        const speed = 14; // ms per character — quick code-typing feel
        const startDelay = 280;

        setTimeout(function typeStep() {
          if(idx <= full.length) {
            textEl.textContent = full.slice(0, idx);
            textEl.appendChild(cursor);
            idx++;
            setTimeout(typeStep, speed);
          } else {
            cursor.remove();
            card.classList.remove("is-typing");
            card.classList.add("is-typed");
          }
        }, startDelay);

        card_observer.unobserve(card);
      });
    }, { threshold:0.35, rootMargin:"0px 0px -10% 0px" });

    cards.forEach(card => card_observer.observe(card));
  }

  /* ---- RENDER PROJECTS ---- */
  function renderProjects() {
    const list = document.getElementById("projects-list");
    if(!list) return;
    list.innerHTML = coreProjects.map((p, i) => `
      <div class="project-entry" data-aos="fade-up">
        <div class="proj-img-wrap">
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.id}">
            <img src="${p.image}" alt="${p.id} preview" loading="lazy" />
          </a>
        </div>
        <div class="project-details">
          <div class="proj-num">0${i + 1}</div>
          <h3 class="proj-title" data-i18n-dynamic="proj-${p.id}-title"></h3>
          <p class="proj-desc"  data-i18n-dynamic="proj-${p.id}-desc"></p>
          <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          <div class="proj-links">
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="lnk-code">
              <i class="fab fa-github"></i>
              <span data-i18n-dynamic="proj-view-code">View Code</span>
            </a>
            ${p.demoLink ? `
            <a href="${p.demoLink}" target="_blank" rel="noopener noreferrer" class="lnk-demo">
              <i class="fas fa-external-link-alt"></i>
              <span data-i18n-dynamic="proj-live-demo">Live Demo</span>
            </a>` : ""}
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---- RENDER CERTIFICATES ---- */
  function renderCertificates() {
    const c = document.getElementById("certificates-container");
    if(!c) return;
    c.innerHTML = certificatesData.map((cert, i) => `
      <div class="certificate-card" data-aos="fade-up" data-aos-delay="${i * 120}">
        <div class="cert-terminal-bar">
          <span class="cert-dot red"></span>
          <span class="cert-dot yellow"></span>
          <span class="cert-dot green"></span>
          <span class="cert-filename">${cert.filename}</span>
        </div>
        <div class="cert-body">
          <div class="cert-icon-wrap"><i class="${cert.icon}"></i></div>
          <h3 class="cert-title" data-i18n-dynamic="${cert.title_key}"></h3>
          <p class="cert-issuer" data-i18n-dynamic="${cert.issuer_key}"></p>
          <div class="cert-code-line">${cert.codeline}</div>
          <a href="${cert.file}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <i class="fas fa-download"></i>
            <span data-i18n-dynamic="btn-download">Download PDF</span>
          </a>
        </div>
      </div>
    `).join("");
  }

  /* ---- CONTACT FORM ---- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if(!form) return;
    if(typeof emailjs !== "undefined") emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    form.addEventListener("submit", e => {
      e.preventDefault();
      const lang = state.lang;
      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      const bgCard = getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim();

      Swal.fire({
        title: dictionary[lang]["swal-loading-title"],
        text:  dictionary[lang]["swal-loading-text"],
        allowOutsideClick: false, showConfirmButton: false,
        background: bgCard, color: "var(--text-main)",
        didOpen: () => Swal.showLoading(),
      });

      emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, form)
        .then(() => {
          Swal.fire({
            icon:"success", title: dictionary[lang]["swal-success-title"],
            text:  dictionary[lang]["swal-success-text"],
            confirmButtonColor: accent, background: bgCard,
          });
          form.reset();
        })
        .catch(err => {
          Swal.fire({
            icon:"error", title: dictionary[lang]["swal-error-title"],
            text:  dictionary[lang]["swal-error-text"],
            confirmButtonColor: accent, background: bgCard,
          });
        });
    });
  }

  /* ---- 3D FLOATING HERO IMAGE PARALLAX EFFECT ---- */
  function initHeroParallax() {
    const frame = document.querySelector('.img-frame');
    const side  = document.querySelector('.hero-image-side');
    if (!frame || !side || typeof gsap === "undefined") return;

    let raf = null;

    function handleMove(e) {
      const rect = side.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;   // 0 -> 1 across the frame area
      const py = (e.clientY - rect.top) / rect.height;
      const x = (px - 0.5) * 22;   // rotationY range
      const y = (py - 0.5) * 22;   // rotationX range

      if (raf) return;
      raf = requestAnimationFrame(() => {
        gsap.to(frame, {
          rotationY: x,
          rotationX: -y,
          transformPerspective: 1400,
          ease: "power2.out",
          duration: 0.5
        });
        raf = null;
      });
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', () => {
      gsap.to(frame, { rotationY: 0, rotationX: 0, duration: 0.8, ease: "power3.out" });
    });
  }

  /* ---- SCROLL SPY ---- */
  function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll(".nav-link");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if(e.isIntersecting) {
          links.forEach(l => {
            l.classList.remove("active");
            if(l.getAttribute("href") === `#${e.target.id}`) l.classList.add("active");
          });
        }
      }),
      { rootMargin:"-45% 0px -45% 0px" }
    );
    sections.forEach(s => obs.observe(s));
  }

  /* ---- GSAP HERO ANIMATIONS ---- */
  function initAnimations() {
    if(typeof gsap === "undefined") return;
    const tl = gsap.timeline({ defaults:{ ease:"power4.out" } });
    tl.from(".hero-badge",     { y:20,  opacity:0, duration:.7, delay:.4 })
      .from(".hero-title",     { y:55,  opacity:0, duration:.9 }, "-=.3")
      .from(".typewriter-wrap",{ y:30,  opacity:0, duration:.7 }, "-=.4")
      .from(".hero-desc",      { y:25,  opacity:0, duration:.7 }, "-=.4")
      .from(".hero-stats",     { y:20,  opacity:0, duration:.6 }, "-=.3")
      .from(".hero-btns",      { y:20,  opacity:0, duration:.6 }, "-=.3")
      .from(".hero-socials",   { y:15,  opacity:0, duration:.5 }, "-=.3");
    gsap.from(".img-frame", { scale:.75, opacity:0, duration:1.4, ease:"elastic.out(1,.65)", delay:.6 });
  }

  /* ---- PARTICLES ---- */
  function initParticles() {
    if(typeof particlesJS === "undefined") return;
    particlesJS("particles-js", {
      particles: {
        number:{ value:35, density:{ enable:true, value_area:900 } },
        color:{ value:"#c9a8e8" },
        shape:{ type:"circle" },
        opacity:{ value:.2, random:true, anim:{ enable:true, speed:.6, opacity_min:.04 } },
        size:{ value:2.5, random:true },
        line_linked:{ enable:true, distance:150, color:"#4a3a5e", opacity:.18, width:1 },
        move:{ enable:true, speed:1.2, direction:"none", out_mode:"out" },
      },
      interactivity:{
        detect_on:"canvas",
        events:{ onhover:{ enable:true, mode:"grab" }, onclick:{ enable:true, mode:"push" } },
        modes:{ grab:{ distance:140, line_linked:{ opacity:.4 } }, push:{ particles_nb:2 } },
      },
      retina_detect:true,
    });
  }

  function initFooter() {
    const y = document.getElementById("current-year");
    if(y) y.textContent = new Date().getFullYear();
  }

  // ============ INIT ============
  initPreloader();
  initNavbar();
  initMobileMenu();
  initTheme();
  renderSkills();
  renderExperience();
  renderProjects();
  renderCertificates();
  initLang();
  initContactForm();
  initScrollSpy();
  initHeroParallax();
  initAnimations();
  initParticles();
  initFooter();

  if(typeof AOS !== "undefined") AOS.init({ duration:900, once:true, offset:70 });
});