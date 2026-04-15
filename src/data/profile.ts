export type LocalizedText = {
  en: string;
  zh: string;
};

export type LinkItem = {
  label: string;
  href: string;
  icon: 'orcid' | 'github' | 'scholar' | 'researchgate' | 'email';
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
    en: 'Infectious Disease Forecasting | Spatiotemporal Dynamics | Viral Evolution',
    zh: '传染病预测预警 | 时空传播动力学 | 病毒进化',
  },
  affiliation: {
    en: 'Macau University of Science and Technology',
    zh: '澳门科技大学',
  },
  degrees: {
    en: 'M.Sc. student, Faculty of Innovation Engineering, Macau University of Science and Technology; interdisciplinary background spanning public health, epidemiology, AI, and data science',
    zh: '澳门科技大学创新工程学院硕士研究生；具备公共卫生、流行病学、人工智能与数据科学交叉背景',
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
      label: 'Email 1',
      href: 'mailto:liuh200107@gmail.com',
      icon: 'email',
    },
    {
      label: 'Email 2',
      href: 'mailto:hylouis@qq.com',
      icon: 'email',
    },
  ] satisfies LinkItem[],
  cvHref: '/files/cv.pdf',
  portfolioHref: '/portfolio/',
  profileImage: '/assets/profile/profile.png',
};

export const navigation = [
  { href: '/', key: 'home', label: { en: 'Home', zh: '首页' } },
  { href: '/research/', key: 'research', label: { en: 'Research', zh: '研究' } },
  { href: '/cv/', key: 'cv', label: { en: 'CV', zh: '履历' } },
  { href: '/publications/', key: 'publications', label: { en: 'Outputs', zh: '成果' } },
  { href: '/contact/', key: 'contact', label: { en: 'Contact', zh: '联系' } },
];
