export type PageType = 'tool' | 'article' | 'landing' | 'docs';

export type AdPosition = 'top' | 'middle' | 'bottom' | 'sidebar' | 'modal' | 'footer';

export type AdCreative = {
  id: string;
  enabled: boolean;
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  positions: AdPosition[];
  pageTypes: PageType[];
  rel?: string;
  imageSrc?: string;
  imageAlt?: string;
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
        id: 'site-support-footer',
        enabled: true,
        label: 'Site support',
        title: 'Support open research software and documentation',
        description:
          'Voluntary support, sponsorship, and tool recommendations help keep the site, public code, and reproducible research notes maintained.',
        href: '/support/',
        cta: 'Support or sponsor',
        positions: ['bottom', 'footer'],
        pageTypes: ['landing', 'article', 'docs'],
      },
      {
        id: 'research-tool-collaboration',
        enabled: true,
        label: 'Collaboration',
        title: 'Research software, tool, or affiliate collaboration',
        description:
          'Commercial placements are reviewed manually and kept separate from publication records, research claims, and payment flows.',
        href: '/contact/',
        cta: 'Discuss placement',
        positions: ['middle', 'sidebar'],
        pageTypes: ['landing', 'article', 'docs', 'tool'],
      },
    ] satisfies AdCreative[],
  },
};
