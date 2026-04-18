export type LocalizedText = {
  en: string;
  zh: string;
};

export type LinkItem = {
  label: string;
  href: string;
  icon: 'orcid' | 'github' | 'scholar' | 'researchgate' | 'gmail' | 'qq';
};

export const siteMeta = {
  title: 'Hong Liu | Academic Homepage',
  description:
    'Academic homepage for Hong Liu, focusing on infectious disease forecasting and early warning, spatiotemporal transmission dynamics, viral evolution, and research software.',
};

export const profile = {
  name: {
    en: 'Hong Liu',
    zh: '刘弘',
  },
  headline: {
    en: 'Infectious Disease Forecasting\nSpatiotemporal Dynamics\nViral Evolution',
    zh: '传染病预测预警\n时空传播动力学\n病毒进化',
  },
  affiliation: {
    en: 'Macau University of Science and Technology',
    zh: '澳门科技大学',
  },
  degrees: {
    en: 'Ph.D. student in Epidemiology and Health Statistics, Xiamen University; M.Sc. student (Full scholarship and living allowance), Faculty of Innovation Engineering, Macau University of Science and Technology; Undergraduate, Xiamen University; interdisciplinary background spanning public health, epidemiology, AI, and data science',
    zh: '厦门大学公共卫生学院流行病与卫生统计学博士研究生；澳门科技大学创新工程学院硕士研究生（全额奖学金及生活津贴）；厦门大学公共卫生与预防医学本科；具备公共卫生、流行病学、人工智能与数据科学交叉背景',
  },
  intro: {
    en: 'My current work focuses on multimodal infectious disease forecasting and early warning, influenza co-circulation analysis, small-sample outbreak modelling, and the integration of epidemic dynamics with viral evolution. I present ongoing work conservatively and distinguish current master-stage research from proposed doctoral directions.',
    zh: '我当前的工作聚焦于多模态传染病预测预警、流感共流行分析、小样本疫情建模，以及传播动力学与病毒进化的耦合研究。网站中的相关表述坚持谨慎原则，明确区分硕士阶段已开展工作与拟开展的攻博方向。',
  },
  location: {
    en: 'Macau, China',
    zh: '中国澳门',
  },
  links: [
    {
      label: 'ORCID',
      href: 'https://orcid.org/my-orcid?orcid=0009-0008-3411-5304',
      icon: 'orcid',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Hylouis233',
      icon: 'github',
    },
    {
      label: 'Scholar',
      href: 'https://scholar.google.com/citations?user=XktvX-gAAAAJ&hl=en&authuser=1',
      icon: 'scholar',
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Hong-Liu-79/publications?sorting=recentlyAdded&editMode=1',
      icon: 'researchgate',
    },
    {
      label: 'Gmail',
      href: 'mailto:liuh200107@gmail.com',
      icon: 'gmail',
    },
    {
      label: 'QQ Email',
      href: 'mailto:hylouis@qq.com',
      icon: 'qq',
    },
  ] satisfies LinkItem[],
  cvHref: '/files/cv.pdf',
  portfolioHref: '/portfolio/',
  profileImage: '/assets/profile/profile.png',
};

export const iconMap = {
  orcid: '<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>',
  github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
  scholar: '<path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>',
  researchgate: '<path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>',
  gmail: '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
  qq: '<path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/>',
} as const;

export const navigation = [
  { href: '/', key: 'home', label: { en: 'Home', zh: '首页' } },
  { href: '/research/', key: 'research', label: { en: 'Research', zh: '研究' } },
  { href: '/cv/', key: 'cv', label: { en: 'CV', zh: '履历' } },
  { href: '/publications/', key: 'publications', label: { en: 'Outputs', zh: '成果' } },
  { href: '/contact/', key: 'contact', label: { en: 'Contact', zh: '联系' } },
];
