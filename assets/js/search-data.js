// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications by Yuxiang Lin in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Yuxiang Lin&#39;s CV - Education, Experience, Awards",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-we-are-the-runner-up-in-the-grand-challenge-mer-2023-of-acm-mm",
          title: 'We are the runner-up in the Grand Challenge (MER 2023) of ACM MM!...',
          description: "",
          section: "News",},{id: "news-one-paper-on-multimodal-emotion-recognition-is-accepted-by-acm-mm-2023",
          title: 'One paper on multimodal emotion recognition is accepted by ACM MM 2023!',
          description: "",
          section: "News",},{id: "news-my-instance-segmentation-tutorial-has-been-featured-in-mmyolo-v0-6-0-highlight-check-out-the-tutorial-to-master-the-essentials-of-instance-segmentation",
          title: 'My instance segmentation tutorial has been featured in MMYOLO v0.6.0 highlight! Check out...',
          description: "",
          section: "News",},{id: "news-awarded-the-first-prize-of-research-and-innovation-award-3000-cny-and-star-of-craftsmanship-3000-cny",
          title: 'Awarded the First Prize of Research and Innovation Award (3000 CNY) and Star...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-baidu-inc",
          title: 'Started my internship at Baidu Inc.',
          description: "",
          section: "News",},{id: "news-one-paper-about-conversational-emotion-cause-pair-analysis-with-llm-is-accepted-by-semeval-2024-naacl",
          title: 'One paper about Conversational Emotion-Cause Pair Analysis with LLM is accepted by SemEval...',
          description: "",
          section: "News",},{id: "news-one-co-first-author-paper-about-invisible-gas-detection-is-accepted-by-cviu-jcr-q1-ccf-b",
          title: 'One co-first author paper about invisible gas detection is accepted by CVIU (JCR...',
          description: "",
          section: "News",},{id: "news-one-paper-about-multimodal-large-language-model-in-emotion-reasoning-is-accepted-by-neurips-ccf-a",
          title: 'One paper about Multimodal Large Language Model in Emotion Reasoning is accepted by...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-tencent",
          title: 'Started my internship at Tencent.',
          description: "",
          section: "News",},{id: "news-one-paper-about-benchmarking-vllm-s-emotion-interpretation-ability-is-accepted-by-cvpr-workshop-nexd-1-3-oral",
          title: 'One paper about Benchmarking VLLM’s Emotion Interpretation ability is accepted by CVPR Workshop,...',
          description: "",
          section: "News",},{id: "news-try-mer-factory-for-automatic-construction-of-multimodal-emotion-recognition-and-reasoning-datasets",
          title: 'Try MER-Factory for automatic construction of multimodal emotion recognition and reasoning datasets.',
          description: "",
          section: "News",},{id: "news-started-my-career-as-an-ai-engineer-at-item-and-unisco-after-graduation",
          title: 'Started my career as an AI Engineer at Item and Unisco after graduation....',
          description: "",
          section: "News",},{id: "projects-mer-factory",
          title: 'MER-Factory',
          description: "The first framework for automatically constructing Multimodal Emotion Recognition and Reasoning (MERR) datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_mer_factory/";
            },},{id: "projects-agent-brainstorm",
          title: 'Agent-brainstorm',
          description: "A 5-stage brainstorming system using multi-AI agents to generate, evaluate, and refine ideas with real-time web search and ArXiv research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_agent_brainstorm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E.%79%75%78%69%61%6E%67.%63%6F%6E%74%61%63%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Lum1104", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=b2HdAoMAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/YuxiangLin_Lum", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
