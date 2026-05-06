export type PageType = 'tool' | 'article' | 'landing' | 'docs';

export type AdPosition = 'top' | 'middle' | 'bottom' | 'sidebar' | 'modal' | 'footer' | 'floating';

export type AdKind = 'sponsor' | 'affiliate' | 'image' | 'text' | 'network';

export type AdNetworkProvider =
  | 'baidu-union'
  | 'alimama'
  | 'jd-union'
  | 'a-ads'
  | 'coinzilla'
  | 'bitmedia'
  | 'cointraffic'
  | 'adex'
  | 'adsterra'
  | 'monetag'
  | 'propellerads'
  | 'custom';

export type AdCreative = {
  id: string;
  enabled: boolean;
  kind: AdKind;
  label: string;
  title: string;
  description: string;
  href?: string;
  cta: string;
  positions: AdPosition[];
  pageTypes: PageType[];
  rel?: string;
  imageSrc?: string;
  imageAlt?: string;
  network?: {
    provider: AdNetworkProvider;
    publisherId?: string;
    zoneId?: string;
    placementId?: string;
    scriptSrc?: string;
    iframeSrc?: string;
    iframeTitle?: string;
    iframeDataAa?: string;
    containerId?: string;
    notes?: string;
  };
};

export const monetizationConfig = {
  ads: {
    enabled: true,
    disclosure: 'Sponsor / advertisement',
    fallbackRel: 'noreferrer',
    candidates: [
      {
        key: 'manual-sponsor',
        label: 'Manual sponsor placement',
        status: 'ready',
      },
      {
        key: 'affiliate',
        label: 'Affiliate or tool recommendation link',
        status: 'ready',
      },
      {
        key: 'crypto-friendly-network',
        label: 'Crypto-friendly ad network script',
        status: 'pending-network-approval',
      },
    ],
    creatives: [
      {
        id: 'aads-adaptive-2436794',
        enabled: true,
        kind: 'network',
        label: 'Advertisement',
        title: 'AADS adaptive banner',
        description:
          'Adaptive crypto ad placement. High-risk categories are blocked in AADS settings; this slot is excluded from the support/payment page.',
        cta: 'Advertisement',
        positions: ['bottom', 'floating'],
        pageTypes: ['landing', 'article', 'docs'],
        network: {
          provider: 'a-ads',
          zoneId: '2436794',
          iframeDataAa: '2436794',
          iframeSrc: 'https://acceptable.a-ads.com/2436794/?size=Adaptive',
          iframeTitle: 'AADS advertisement',
          containerId: 'aads-ad-unit-2436794',
          notes: 'AADS Ad Unit #2436794, fixed placement, adaptive size.',
        },
      },
      {
        id: 'site-support-footer',
        enabled: true,
        kind: 'sponsor',
        label: 'Site support',
        title: 'Support open research software and documentation',
        description:
          'Voluntary support, sponsorship, and tool recommendations help keep the site, public code, and reproducible research notes maintained.',
        href: '/support/',
        cta: 'Support or sponsor',
        positions: ['bottom', 'footer'],
        pageTypes: ['landing', 'article', 'docs'],
        rel: 'noreferrer',
      },
      {
        id: 'research-tool-collaboration',
        enabled: true,
        kind: 'sponsor',
        label: 'Collaboration',
        title: 'Research software, tool, or affiliate collaboration',
        description:
          'Commercial placements are reviewed manually and kept separate from publication records, research claims, and payment flows.',
        href: '/contact/',
        cta: 'Discuss placement',
        positions: ['middle', 'sidebar'],
        pageTypes: ['landing', 'article', 'docs', 'tool'],
        rel: 'noreferrer',
      },
      {
        id: 'manual-affiliate-placeholder',
        enabled: false,
        kind: 'affiliate',
        label: 'Affiliate',
        title: 'Replace with a reviewed tool or service recommendation',
        description:
          'Use this slot only for tools that are relevant to the page and clearly disclosed as affiliate or sponsored content.',
        href: 'https://example.com/replace-with-affiliate-link',
        cta: 'View resource',
        positions: ['middle', 'sidebar', 'bottom'],
        pageTypes: ['tool', 'article', 'landing', 'docs'],
        rel: 'sponsored nofollow noopener noreferrer',
      },
      {
        id: 'baidu-union-placeholder',
        enabled: false,
        kind: 'network',
        label: 'Advertisement',
        title: 'Baidu Union placement placeholder',
        description:
          'Enable only after the site is approved and the real publisher, slot, and script values are configured.',
        cta: 'Advertisement',
        positions: ['top', 'middle', 'bottom'],
        pageTypes: ['article', 'landing', 'docs'],
        network: {
          provider: 'baidu-union',
          publisherId: 'replace-with-baidu-union-publisher-id',
          zoneId: 'replace-with-baidu-union-slot-id',
          scriptSrc: 'replace-with-approved-baidu-union-script',
          containerId: 'baidu-union-placeholder',
          notes: 'Keep disabled until approval is complete.',
        },
      },
      {
        id: 'crypto-network-placeholder',
        enabled: false,
        kind: 'network',
        label: 'Advertisement',
        title: 'Crypto-friendly ad network placeholder',
        description:
          'Reserved for A-ADS, Coinzilla, Bitmedia, Cointraffic, AdEx, or another approved network. Avoid wallet impersonation, casino, and high-yield claims.',
        cta: 'Advertisement',
        positions: ['top', 'middle', 'bottom', 'sidebar'],
        pageTypes: ['tool', 'article', 'landing', 'docs'],
        network: {
          provider: 'a-ads',
          publisherId: 'replace-with-publisher-id',
          zoneId: 'replace-with-zone-id',
          containerId: 'crypto-network-placeholder',
          notes: 'Use a reviewed banner or native placement, not popunder or push notification ads.',
        },
      },
    ] satisfies AdCreative[],
    floating: {
      enabled: true,
      dismissSessionKey: 'hylouis-floating-ad-dismissed',
      label: 'Advertisement',
      closeLabel: 'Close',
    },
  },
};
