export type LocalizedText = {
  en: string;
  zh: string;
};

export type PublicationCategory =
  | 'publication'
  | 'preprint'
  | 'submission'
  | 'work-in-progress';

export type ProjectType =
  | 'software'
  | 'platform'
  | 'research-code'
  | 'analysis-project';

export type AwardCategory = 'award' | 'competition' | 'scholarship';

export type ExperienceCategory =
  | 'coursework'
  | 'practice'
  | 'student-service'
  | 'volunteer'
  | 'research'
  | 'competition';

export type PublicationItem = {
  title: LocalizedText;
  year: number;
  venue: LocalizedText;
  status: LocalizedText;
  note: LocalizedText;
  url?: string;
  doi?: string;
  manuscriptId?: string;
  authorship?: LocalizedText;
  authorshipRank?: 'lead' | 'collaborative';
  featured?: boolean;
  category: PublicationCategory;
  relatedProjectKeys?: string[];
};

export type ProjectItem = {
  key: string;
  name: LocalizedText;
  summary: LocalizedText;
  status: LocalizedText;
  repoUrl?: string;
  isPrivate?: boolean;
  type: ProjectType;
  featured?: boolean;
  /** Live GitHub star count. Updated by deployment scripts; not authoritative. */
  stars?: number;
  tags?: string[];
  impactSummary?: LocalizedText;
  relatedPublicationTitles?: string[];
};

export type AwardItem = {
  title: LocalizedText;
  year: number;
  issuer?: LocalizedText;
  category: AwardCategory;
};

export type EducationItem = {
  institution: LocalizedText;
  program: LocalizedText;
  meta: LocalizedText;
  detail: LocalizedText;
};

export type ExperienceItem = {
  title: LocalizedText;
  period?: LocalizedText;
  organization?: LocalizedText;
  category: ExperienceCategory;
  detail: LocalizedText;
};

export const researchInterests: LocalizedText[] = [
  {
    en: 'Multimodal infectious disease forecasting and early warning.',
    zh: '多模态传染病预测预警。',
  },
  {
    en: 'Influenza co-circulation, multi-subtype interaction, and non-stationary time-series modelling.',
    zh: '流感共流行分析、共流行信号识别与非平稳时间序列建模。',
  },
  {
    en: 'Spatiotemporal transmission dynamics, mechanistic outbreak modelling, and viral evolution.',
    zh: '传染病时空传播动力学、机制疫情建模与病毒进化。',
  },
];

export const education: EducationItem[] = [
  {
    institution: {
      en: 'Xiamen University',
      zh: '厦门大学',
    },
    program: {
      en: 'Ph.D. student in Epidemiology and Health Statistics (2026–present)',
      zh: '流行病与卫生统计学博士在读（2026 年入学）',
    },
    meta: {
      en: 'School of Public Health | doctoral study under Prof. Tianmu Chen',
      zh: '公共卫生学院 | 师从陈田木教授',
    },
    detail: {
      en: 'Doctoral research extends toward multimodal infectious disease spatiotemporal dynamics, viral evolution early warning, and integrated macro-micro modelling frameworks.',
      zh: '博士阶段研究将拓展至多模态传染病时空动力学、病毒进化早期预警，以及宏观传播与微观进化相结合的一体化建模框架。',
    },
  },
  {
    institution: {
      en: 'Macau University of Science and Technology',
      zh: '澳门科技大学',
    },
    program: {
      en: 'M.Sc. in Intelligent Technology, Faculty of Innovation Engineering',
      zh: '智能技术硕士，创新工程学院',
    },
    meta: {
      en: 'Graduated | GPA 3.63/4 | Full scholarship and living allowance',
      zh: '已毕业 | GPA 3.63/4 | 全额奖学金及生活津贴',
    },
    detail: {
      en: 'Completed M.Sc. training in Intelligent Technology at MUST, under Academician Nanshan Zhong and Prof. Chitin Hon. Joint doctoral-stage research training at Xiamen University with Prof. Tianmu Chen, focused on infectious-disease forecasting and early warning. Graduate coursework covered intelligent control technology, fundamentals of AI, numerical analysis, statistics, pattern recognition, algorithms, and optimization methods.',
      zh: '已在钟南山院士与韩子天教授指导下完成智能技术硕士阶段训练，并由厦门大学联合培养（联合导师陈田木教授），主要从事传染病预测预警研究。研究生阶段训练重点包括智能控制技术、人工智能基础、数值分析、统计学导论、模式识别、算法理论基础与优化方法基础。',
    },
  },
  {
    institution: {
      en: 'Xiamen University',
      zh: '厦门大学',
    },
    program: {
      en: 'B.Med. in Preventive Medicine (School of Public Health) & B.Sc. in Mathematical Statistics (Wang Yanan Institute for Studies in Economics)',
      zh: '公共卫生学院预防医学系与王亚南经济研究院数理统计专业双学位本科',
    },
    meta: {
      en: 'Preventive Medicine supervised by Prof. Tianmu Chen',
      zh: '预防医学阶段师从陈田木教授',
    },
    detail: {
      en: 'Academic and project experience during the undergraduate stage laid the groundwork for infectious-disease modelling, health data analysis, and later AI-assisted research workflows. Selected high-mark coursework: Epidemiology, Biostatistics, and Health Statistics.',
      zh: '本科阶段的课程、科研与项目经历为后续的传染病建模、健康数据分析与 AI 辅助科研流程奠定了基础。',
    },
  },
];

export const publications: PublicationItem[] = [
  {
    title: {
      en: 'Temporal shifts in 24 notifiable infectious diseases in China before and during the COVID-19 pandemic',
      zh: 'Temporal shifts in 24 notifiable infectious diseases in China before and during the COVID-19 pandemic',
    },
    year: 2024,
    venue: {
      en: 'Nature Communications',
      zh: 'Nature Communications',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    doi: '10.1038/s41467-024-48201-8',
    url: 'https://doi.org/10.1038/s41467-024-48201-8',
    authorship: {
      en: 'Co-author (7/14)',
      zh: '合作作者（7/14）',
    },
    authorshipRank: 'collaborative',
    category: 'publication',
  },
  {
    title: {
      en: 'Transmissibility of the variant of concern for SARS-CoV-2 in six regions',
      zh: 'Transmissibility of the variant of concern for SARS-CoV-2 in six regions',
    },
    year: 2024,
    venue: {
      en: 'Heliyon',
      zh: 'Heliyon',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    doi: '10.1016/j.heliyon.2024.e32164',
    url: 'https://doi.org/10.1016/j.heliyon.2024.e32164',
    authorship: {
      en: 'Co-author',
      zh: '合作作者',
    },
    authorshipRank: 'collaborative',
    category: 'publication',
  },
  {
    title: {
      en: 'Three machine-learning models to predict dengue vectors Breteau Index based on meteorology and biotope in Fujian China',
      zh: 'Three machine-learning models to predict dengue vectors Breteau Index based on meteorology and biotope in Fujian China',
    },
    year: 2024,
    venue: {
      en: 'Research Square (preprint)',
      zh: 'Research Square（预印本）',
    },
    status: {
      en: 'Preprint',
      zh: '预印本',
    },
    note: {
      en: 'Preprint posted on Research Square in April 2024; Ke is the first author and Hong Liu is a contributing co-author (2/10). No published journal version has been identified.',
      zh: '该预印本于 2024 年 4 月发布于 Research Square 平台；第一作者为 Ke，刘弘为合作作者（2/10），目前未见正式期刊发表版本。',
    },
    doi: '10.21203/rs.3.rs-4286413/v1',
    url: 'https://doi.org/10.21203/rs.3.rs-4286413/v1',
    authorship: {
      en: 'Co-author (2/10)',
      zh: '合作作者（2/10）',
    },
    authorshipRank: 'collaborative',
    category: 'preprint',
  },
  {
    title: {
      en: 'Impact of long-term care insurance on the physical and mental health of older adults in China',
      zh: '长期护理保险对我国老年人生理健康和心理健康状况的影响',
    },
    year: 2024,
    venue: {
      en: 'Medicine and Society',
      zh: '医学与社会',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    doi: '10.13723/j.yxysh.2024.08.011',
    url: 'https://doi.org/10.13723/j.yxysh.2024.08.011',
    authorship: {
      en: 'Co-author (2/5)',
      zh: '合作作者（2/5）',
    },
    authorshipRank: 'collaborative',
    category: 'publication',
  },
  {
    title: {
      en: 'Assessment of transmissibility and measures effectiveness of SARS in 8 regions, China,2002-2003',
      zh: 'Assessment of transmissibility and measures effectiveness of SARS in 8 regions, China,2002-2003',
    },
    year: 2023,
    venue: {
      en: 'Frontiers in Cellular and Infection Microbiology',
      zh: 'Frontiers in Cellular and Infection Microbiology',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    doi: '10.3389/fcimb.2023.1212473',
    url: 'https://doi.org/10.3389/fcimb.2023.1212473',
    authorship: {
      en: 'Co-author (4/13)',
      zh: '合作作者（4/13）',
    },
    authorshipRank: 'collaborative',
    category: 'publication',
  },
  {
    title: {
      en: 'Advancements in Defining and Estimating the Reproduction Number in Infectious Disease Epidemiology',
      zh: 'Advancements in Defining and Estimating the Reproduction Number in Infectious Disease Epidemiology',
    },
    year: 2023,
    venue: {
      en: 'China CDC Weekly',
      zh: 'China CDC Weekly',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    doi: '10.46234/ccdcw2023.158',
    url: 'https://doi.org/10.46234/ccdcw2023.158',
    authorship: {
      en: 'Co-author (7/11)',
      zh: '合作作者（7/11）',
    },
    authorshipRank: 'collaborative',
    category: 'publication',
  },
  {
    title: {
      en: 'Multi-modal Adaptive Estimation for Temporal Respiratory Disease Outbreak',
      zh: 'Multi-modal Adaptive Estimation for Temporal Respiratory Disease Outbreak',
    },
    year: 2025,
    venue: {
      en: 'arXiv preprint',
      zh: 'arXiv 预印本',
    },
    status: {
      en: 'Public preprint; journal submission under review',
      zh: '已公开预印本；期刊投稿审稿中',
    },
    note: {
      en: 'First-author MAESTRO study; reports R² = 0.956 on over 11 years of Hong Kong influenza data (excluding COVID-19).',
      zh: '第一作者 MAESTRO 研究；在香港十一年以上流感数据（不含 COVID-19 期间）上报告 R² = 0.956。',
    },
    doi: '10.48550/arXiv.2509.08578',
    url: 'https://doi.org/10.48550/arXiv.2509.08578',
    authorship: {
      en: 'First author',
      zh: '第一作者',
    },
    authorshipRank: 'lead',
    featured: true,
    category: 'preprint',
    relatedProjectKeys: ['maestro'],
  },
  {
    title: {
      en: 'Dual-Model Framework for CHIKV Transmission Modeling: ODE and Petri Net Analysis of the 2025 Foshan Outbreak',
      zh: 'Dual-Model Framework for CHIKV Transmission Modeling: ODE and Petri Net Analysis of the 2025 Foshan Outbreak',
    },
    year: 2026,
    venue: {
      en: 'BMC Public Health',
      zh: 'BMC Public Health',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    note: {
      en: 'First-author dual-framework outbreak modelling study for the 2025 Foshan chikungunya outbreak, published in BMC Public Health on 29 June 2026. An arXiv preprint (arXiv:2512.12577) is also openly accessible.',
      zh: '第一作者基孔肯雅热双框架疫情建模研究，面向 2025 年佛山疫情场景，2026 年 6 月 29 日发表于 BMC Public Health；arXiv 预印本（arXiv:2512.12577）同步公开可查。',
    },
    doi: '10.1186/s12889-026-28110-9',
    url: 'https://doi.org/10.1186/s12889-026-28110-9',
    authorship: {
      en: 'First author',
      zh: '第一作者',
    },
    authorshipRank: 'lead',
    featured: true,
    category: 'publication',
    relatedProjectKeys: ['ode-petri-chikungunya'],
  },
  {
    title: {
      en: 'Psychological resilience, occupational stress, organizational trust, and burnout among healthcare workers',
      zh: '心理韧性对医务工作者职业倦怠的影响：职业压力的中介作用与组织信任的调节作用',
    },
    year: 2025,
    venue: {
      en: 'Health Soft Science',
      zh: '卫生软科学',
    },
    status: {
      en: 'Submitted; with editorial office',
      zh: '已投稿；编辑部处理中',
    },
    note: {
      en: 'Questionnaire-based collaborative study using CFA, SEM, and bootstrap analysis.',
      zh: '基于问卷数据的合作研究，采用 CFA、SEM 与 Bootstrap 分析。',
    },
    manuscriptId: '',
    authorship: {
      en: 'Co-author (2/6)',
      zh: '合作作者（2/6）',
    },
    authorshipRank: 'collaborative',
    category: 'submission',
  },
  {
    title: {
      en: 'Spatiotemporal instability of influenza seasonality during viral co-circulation',
      zh: '病毒共流行期间流感季节性的时空不稳定性',
    },
    year: 2026,
    venue: {
      en: 'npj Systems Biology and Applications',
      zh: 'npj Systems Biology and Applications',
    },
    status: {
      en: 'Published',
      zh: '已发表',
    },
    note: {
      en: 'First-author npj Systems Biology and Applications article. Accepted on 17 April 2026 and published online on 04 May 2026.',
      zh: '第一作者 npj Systems Biology and Applications 论文；2026 年 4 月 17 日接收，2026 年 5 月 4 日在线发表。',
    },
    authorship: {
      en: 'First author',
      zh: '第一作者',
    },
    authorshipRank: 'lead',
    featured: true,
    category: 'publication',
    doi: '10.1038/s41540-026-00729-9',
    url: 'https://www.nature.com/articles/s41540-026-00729-9',
    relatedProjectKeys: ['multicopat'],
  },
];

export const projects: ProjectItem[] = [
  {
    key: 'maestro',
    name: {
      en: 'MAESTRO',
      zh: 'MAESTRO',
    },
    summary: {
      en: 'Multimodal time-series forecasting framework for respiratory disease activity and early-warning scenarios, reporting R² = 0.956 on over 11 years of Hong Kong influenza data (excluding COVID-19).',
      zh: '面向呼吸道疾病活动与预警场景的多模态时间序列预测框架；在香港十一年以上流感数据（不含 COVID-19 期间）上报告 R² = 0.956。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/MAESTRO',
    type: 'research-code',
    featured: true,
    stars: 0,
    tags: ['Forecasting', 'Early warning', 'Multimodal modelling', 'Time series'],
    impactSummary: {
      en: 'Research framework connecting multimodal respiratory-disease forecasting with transparent model-evaluation and published output.',
      zh: '连接多模态呼吸道疾病预测、文档化评估与论文产出的研究框架。',
    },
    relatedPublicationTitles: ['Multi-modal Adaptive Estimation for Temporal Respiratory Disease Outbreak'],
  },
  {
    key: 'ode-petri-chikungunya',
    name: {
      en: 'ODE-Petri-Chikungunya',
      zh: 'ODE-Petri-Chikungunya',
    },
    summary: {
      en: 'ODE and Petri Net dual-model research workflow for the 2025 Foshan chikungunya outbreak, published in BMC Public Health 26 (2026).',
      zh: '面向 2025 年佛山基孔肯雅热疫情的 ODE 与 Petri Net 双模型研究流程，已发表于 BMC Public Health 26 (2026)。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/ODE-Petri-Chikungunya',
    type: 'research-code',
    featured: true,
    stars: 0,
    tags: ['Mechanistic modelling', 'ODE', 'Petri Net', 'Outbreak analysis'],
    impactSummary: {
      en: 'Dual-model outbreak analysis workflow linking mechanistic interpretation, intervention phases, and manuscript development.',
      zh: '连接机制解释、干预阶段与论文撰写的双模型疫情分析流程。',
    },
    relatedPublicationTitles: ['Dual-Model Framework for CHIKV Transmission Modeling: ODE and Petri Net Analysis of the 2025 Foshan Outbreak'],
  },
  {
    key: 'multicopat',
    name: {
      en: 'MultiCoPat',
      zh: 'MultiCoPat',
    },
    summary: {
      en: 'Multi-region and multi-window influenza co-circulation analysis workflow, published in npj Systems Biology and Applications (2026).',
      zh: '多地区、多时间窗流感共流行分析与预测流程，已发表于 npj Systems Biology and Applications (2026)。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/MultiCoPat',
    type: 'research-code',
    featured: true,
    stars: 0,
    tags: ['Influenza', 'Co-circulation', 'Prediction', 'Time series'],
    impactSummary: {
      en: 'Analytical pipeline supporting work on influenza co-circulation, multi-subtype interaction, and non-stationary time-series modelling.',
      zh: '支撑流感共流行与共流行信号相关研究的分析管线。',
    },
    relatedPublicationTitles: ['Spatiotemporal instability of influenza seasonality during viral co-circulation'],
  },
  {
    key: 'infectious-disease-intelligence-platform',
    name: {
      en: 'Infectious disease intelligence platform',
      zh: '传染病数据平台 / 情报平台',
    },
    summary: {
      en: 'Crawler, database, ETL, and visualization stack for infectious-disease news collection, monitoring, and research support. Includes public and private components.',
      zh: '涵盖爬虫、数据库、ETL 与可视化的传染病新闻采集、监测与科研支持平台。含公开与私有代码。',
    },
    status: {
      en: 'Mixed public/private codebases; selected components are private',
      zh: '含公开与私有代码；部分组件为私有仓库',
    },
    type: 'platform',
    tags: ['ETL', 'Crawler', 'Database', 'Visualization'],
    impactSummary: {
      en: 'Operational data pipeline for infectious-disease intelligence, from collection and cleaning to monitoring-oriented visualization.',
      zh: '服务于传染病情报的数据链路，覆盖采集、清洗到面向监测的可视化。',
    },
  },
  {
    key: 'bibverify',
    name: {
      en: 'bibverify',
      zh: 'bibverify',
    },
    summary: {
      en: 'Cross-platform BibTeX verification and metadata-completion tool for researchers and AI assistants. CLI, Python API, MCP server, and explainable multi-source matching. Published on PyPI.',
      zh: '面向研究者与 AI 助手的跨平台 BibTeX 校验与元数据补全工具；CLI、Python API、MCP server、可解释多源匹配。已发布到 PyPI。',
    },
    status: {
      en: 'Referenced public repository',
      zh: '源材料中明确提及的公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/bibverify',
    type: 'software',
    featured: true,
    stars: 66,
    tags: ['Bibliographic tooling', 'DOI validation', 'Metadata completion'],
    impactSummary: {
      en: 'Utility for reference verification, metadata completion, deduplication, and citation cleanup across writing workflows.',
      zh: '服务于写作流程的参考文献校验、元数据补全、去重与引用清理工具。',
    },
  },
  {
    key: 'breteau-index-prediction',
    name: {
      en: 'Breteau Index Prediction Model',
      zh: '布雷图指数预测模型',
    },
    summary: {
      en: 'Supplementary codebase for the Fujian dengue-vector Breteau Index prediction study, published as a Research Square preprint.',
      zh: '福建省登革热媒介布雷图指数预测研究的配套代码，已发布为 Research Square 预印本。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/Breteau-Index-Prediction-Model-using-machine-learning',
    type: 'research-code',
    stars: 1,
    tags: ['Machine Learning', 'Prediction Model', 'Breteau Index'],
    relatedPublicationTitles: ['Three machine-learning models to predict dengue vectors Breteau Index based on meteorology and biotope in Fujian China'],
  },
  {
    key: 'mcm2023c',
    name: {
      en: 'MCM 2023 Problem C Solution',
      zh: '2023美赛C题解决方案',
    },
    summary: {
      en: 'Team solution and codebase for the 2023 Mathematical Contest in Modeling (MCM) Problem C.',
      zh: '2023 年美国大学生数学建模竞赛（MCM）C 题的团队解决方案与代码库。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/MCM2023C',
    type: 'analysis-project',
    stars: 0,
    tags: ['Mathematical Modeling', 'MCM', 'Data Analysis'],
  },
  {
    key: 'baidu-index-spider',
    name: {
      en: 'Baidu Index Spider',
      zh: '百度指数爬虫',
    },
    summary: {
      en: 'GUI-equipped Baidu Index scraping tool for data collection workflows.',
      zh: '带图形用户界面的百度指数数据采集爬虫工具。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/baidu-index-spider',
    type: 'software',
    stars: 0,
    tags: ['Spider', 'Data Collection', 'GUI'],
  },
  {
    key: 'gmcm-latex',
    name: {
      en: 'GMCM LaTeX Template',
      zh: '研赛 LaTeX 模板',
    },
    summary: {
      en: 'Refactored LaTeX template for the China Graduate Mathematical Contest in Modeling (Huawei Cup).',
      zh: '中国研究生数学建模竞赛（华为杯）LaTeX 模板的重构版本。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/GMCM_LaTeX',
    type: 'software',
    stars: 0,
    tags: ['LaTeX', 'Template', 'Mathematical Modeling'],
  },
  {
    key: 'phsciencedata-crawler-region',
    name: {
      en: 'PHScienceData Region Crawler',
      zh: '公共卫生数据科学中心疾病数据分地区爬虫',
    },
    summary: {
      en: 'Crawler for the Public Health Science Data Center (phsciencedata.cn) regional and age-stratified disease datasets.',
      zh: '面向公共卫生数据科学中心（phsciencedata.cn）地区与年龄分层疾病数据的爬虫工具。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/phsciencedata_crawler_region',
    type: 'research-code',
    stars: 5,
    tags: ['Public health data', 'Crawler', 'Regional surveillance', 'Fujian'],
  },
  {
    key: 'epic-site-pages',
    name: {
      en: 'EPIC public infectious-disease dashboard',
      zh: 'EPIC 公共卫生信息站点',
    },
    summary: {
      en: 'Static deployment of the public EPIC dashboard for infectious-disease situational awareness.',
      zh: '面向传染病态势感知的 EPIC 公开信息站点静态版本。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/epic-site-pages',
    type: 'platform',
    stars: 0,
    tags: ['Static site', 'Public dashboard', 'Infectious disease'],
  },
  {
    key: 'openscience',
    name: {
      en: 'openscience',
      zh: 'openscience 研究工作流',
    },
    summary: {
      en: 'Evidence-first research workflow harness with six plugins (science-core / science-compute / science-data / science-epi / science-literature / science-verify), human-gated research stages, and append-only provenance logs.',
      zh: '证据优先的研究工作流 harness，含 6 个子套件（science-core / science-compute / science-data / science-epi / science-literature / science-verify），提供阶段门控与追加式 provenance 日志。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/openscience',
    type: 'software',
    stars: 0,
    tags: ['Research workflow', 'AI4Science', 'Citation verification', 'MCP'],
  },
  {
    key: 'mcodeforlegal',
    name: {
      en: 'mcodeforlegal',
      zh: 'mcodeforlegal 法律工作流',
    },
    summary: {
      en: 'Mainland China-first legal workflow plugin pack for Claude Code (contract review, litigation support, compliance, corporate, labor, IP) with statute checks and citation gates.',
      zh: '面向中国大陆法律场景的 Claude Code 工作流插件包（合同审查、诉讼支持、合规、公司、劳动、知产），集成法条核查与引用把关。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/mcodeforlegal',
    type: 'software',
    stars: 1,
    tags: ['LegalTech', 'Claude Code', 'Compliance', 'Cross-discipline'],
  },
  {
    key: 'epic-intel-harness',
    name: {
      en: 'EpicIntel Harness',
      zh: 'EpicIntel 评测与改进工具集',
    },
    summary: {
      en: 'Local-first research harness for building, benchmarking, and improving auditable outbreak-intelligence agents under deterministic public-health safety constraints (fail-closed publication, evidence binding, no autonomous approval).',
      zh: '面向疫情智能体的本地化研究 harness：构建、评测、改进可审计的传染病暴发智能体，遵循确定性公共卫生安全约束（fail-closed 发文、证据绑定、禁止自主审批）。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/epic-intel-harness',
    type: 'research-code',
    stars: 0,
    tags: ['Agent benchmarking', 'Outbreak intelligence', 'Deterministic safety', 'Public-health AI'],
  },
  {
    key: 'hanta-scientific-data-resource',
    name: {
      en: 'Hantavirus / Ebola Research Workspace',
      zh: '汉坦病毒 / 埃博拉研究工作区',
    },
    summary: {
      en: 'Reproducible, auditable viral-outbreak research workspace (Hantavirus, Ebola) with DVC + Snakemake + MLflow ResearchOps and data-provenance grading.',
      zh: '可复现、可审计的病毒暴发研究 workspace（汉坦病毒、埃博拉），采用 DVC + Snakemake + MLflow 的 ResearchOps 流程，含数据真实性分级。',
    },
    status: {
      en: 'Public repository',
      zh: '公开仓库',
    },
    repoUrl: 'https://github.com/Hylouis233/hanta-scientific-data-resource',
    type: 'research-code',
    stars: 0,
    tags: ['ResearchOps', 'Hantavirus', 'Ebola', 'Snakemake', 'DVC'],
  },

];

export const awards: AwardItem[] = [
  {
    title: {
      en: 'Third Prize, 21st China Graduate Mathematical Contest in Modeling (“Huawei Cup”)',
      zh: '“华为杯”第21届中国研究生数学建模竞赛三等奖',
    },
    year: 2024,
    issuer: {
      en: 'China Graduate Mathematical Contest in Modeling Organizing Committee',
      zh: '中国研究生数学建模竞赛组委会',
    },
    category: 'competition',
  },
  {
    title: {
      en: 'Project Innovation Award, 13th “Win in Guangzhou” Hong Kong–Macao Division',
      zh: '第十三届“赢在广州”港澳赛区比赛项目创新奖',
    },
    year: 2024,
    issuer: {
      en: '“Win in Guangzhou” University Entrepreneurship Competition Organizing Committee',
      zh: '“赢在广州”大学生创业大赛组委会',
    },
    category: 'competition',
  },
  {
    title: {
      en: 'Regional First Prize, 15th MathorCup Mathematical Application Challenge (Graduate Division)',
      zh: '2025年第十五届 MathorCup 数学应用挑战赛赛区一等奖（研究生组）',
    },
    year: 2025,
    issuer: {
      en: 'China Society for Overall Planning, Optimization and Economic Mathematics',
      zh: '中国优选法统筹法与经济数学研究会',
    },
    category: 'competition',
  },
  {
    title: {
      en: 'National Third Prize, 15th MathorCup Mathematical Application Challenge (Graduate Division)',
      zh: '2025年第十五届 MathorCup 数学应用挑战赛全国三等奖（研究生组）',
    },
    year: 2025,
    issuer: {
      en: 'China Society for Overall Planning, Optimization and Economic Mathematics',
      zh: '中国优选法统筹法与经济数学研究会',
    },
    category: 'competition',
  },
  {
    title: {
      en: 'Second Prize, 20th Citibank Financial Innovation Application Competition',
      zh: '第二十届“花旗杯”金融创新应用大赛二等奖',
    },
    year: 2025,
    issuer: {
      en: 'Shanghai University Student Science and Technology Entrepreneurship Foundation; Citigroup Financial Information Services (China) Co., Ltd.',
      zh: '上海市大学生科技创业基金会；花旗金融信息服务（中国）有限公司',
    },
    category: 'competition',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: {
      en: 'Completed M.Sc. coursework',
      zh: '硕士阶段核心课程',
    },
    period: {
      en: '2024–2025',
      zh: '2024–2025',
    },
    organization: {
      en: 'Macau University of Science and Technology',
      zh: '澳门科技大学',
    },
    category: 'coursework',
    detail: {
      en: 'Completed coursework in intelligent control technology, artificial intelligence, numerical analysis, statistics, pattern recognition, algorithm theory, and optimization methods, with a cumulative GPA of 3.63/4.',
      zh: '系统修读智能控制技术、人工智能基础、数值分析、统计学导论、模式识别、算法理论基础与优化方法基础，累计 GPA 为 3.63/4。',
    },
  },
  {
    title: {
      en: 'Student service roles',
      zh: '学生工作与服务',
    },
    period: {
      en: '2019–2021',
      zh: '2019–2021',
    },
    organization: {
      en: 'Xiamen University',
      zh: '厦门大学',
    },
    category: 'student-service',
    detail: {
      en: 'Served as a student staff member in the medical school organization department and later as deputy head in the innovation service division of the student technology, entrepreneurship, and employment service center.',
      zh: '曾任医学院组织部干事，以及学生科技创业与就业服务中心翔安校区分中心创新服务部干事、副部长。',
    },
  },
  {
    title: {
      en: 'Laboratory escape-risk digital twin project',
      zh: '生物威胁因子实验室逃逸风险评估数字孪生项目',
    },
    period: {
      en: '2024–2025',
      zh: '2024–2025',
    },
    organization: {
      en: 'Collaborative laboratory project',
      zh: '联合实验室项目',
    },
    category: 'research',
    detail: {
      en: 'Participated in full-stack development for a P3 laboratory digital twin and risk-assessment workflow involving Unity3D, Python, Flask, MySQL, and scenario simulation.',
      zh: '参与 P3 实验室数字孪生与风险评估流程的全链路开发，涉及 Unity3D、Python、Flask、MySQL 与情景模拟。',
    },
  },
  {
    title: {
      en: 'Protein design and structure-biology tooling support',
      zh: '蛋白设计与结构生物学工具支持',
    },
    period: {
      en: '2024–2025',
      zh: '2024–2025',
    },
    organization: {
      en: 'Collaborative laboratory project',
      zh: '联合实验室项目',
    },
    category: 'research',
    detail: {
      en: 'Supported target-site discovery and primer design workflows using masif_seed, Rosetta, AlphaFold 3, and RFDiffusion.',
      zh: '参与基于 masif_seed、Rosetta、AlphaFold 3 与 RFDiffusion 的靶点发现与引物设计流程。',
    },
  },
  {
    title: {
      en: 'Infectious-disease news data platform',
      zh: '传染病新闻数据平台',
    },
    period: {
      en: '2024–present',
      zh: '2024–至今',
    },
    organization: {
      en: 'Independent project',
      zh: '独立项目',
    },
    category: 'practice',
    detail: {
      en: 'Independently developed and maintained a platform covering data collection, cleaning, ETL, database ingestion, and visualization for infectious-disease news and event monitoring.',
      zh: '独立开发并持续维护传染病新闻与事件监测平台，覆盖数据采集、清洗、ETL、入库与可视化。',
    },
  },
  {
    title: {
      en: 'Questionnaire data cleaning and SEM analysis',
      zh: '问卷数据清洗与结构方程分析',
    },
    period: {
      en: '2024–2025',
      zh: '2024–2025',
    },
    organization: {
      en: 'Collaborative health research project',
      zh: '健康相关合作研究项目',
    },
    category: 'research',
    detail: {
      en: 'Handled large-scale questionnaire cleaning, CFA, SEM, reliability and validity analysis, and bootstrap-based inference for healthcare workforce research.',
      zh: '负责大规模问卷清洗、CFA、SEM、信效度分析与 Bootstrap 推断，服务于医务人员相关研究。',
    },
  },
  {
    title: {
      en: 'Selected practice and volunteer activities',
      zh: '实践与志愿活动',
    },
    period: {
      en: '2020–2024',
      zh: '2020–2024',
    },
    organization: {
      en: 'Xiamen University and related teams',
      zh: '厦门大学及相关团队',
    },
    category: 'volunteer',
    detail: {
      en: 'Participated in outreach, practice, and volunteer activities including recruitment outreach, public-health themed practice teams, and report writing.',
      zh: '参与招生宣传、公共卫生主题实践队与相关总结报告撰写等实践和志愿活动。',
    },
  },
  {
    title: {
      en: 'Competition projects',
      zh: '竞赛项目经历',
    },
    period: {
      en: '2024–2025',
      zh: '2024–2025',
    },
    organization: {
      en: 'Modelling and innovation competitions',
      zh: '建模与创新竞赛',
    },
    category: 'competition',
    detail: {
      en: 'Contributed modelling, optimization, software implementation, and evaluation work in the Huawei Cup, MathorCup, Citibank competition, and related innovation contests.',
      zh: '在华为杯、MathorCup、花旗杯及相关创新竞赛中承担建模、优化、软件实现与评估工作。',
    },
  },
];

export const cvData = {
  education,
  researchInterests,
  publications,
  projects,
  awards,
  experience,
};

export const publicationGroups: Array<{
  key: PublicationCategory;
  title: LocalizedText;
}> = [
  {
    key: 'publication',
    title: {
      en: 'Published papers',
      zh: '已发表论文',
    },
  },
  {
    key: 'preprint',
    title: {
      en: 'Preprints',
      zh: '预印本',
    },
  },
  {
    key: 'submission',
    title: {
      en: 'Submitted / under review',
      zh: '已投稿 / 审稿中',
    },
  },
  {
    key: 'work-in-progress',
    title: {
      en: 'Work in progress',
      zh: '进行中',
    },
  },
];

