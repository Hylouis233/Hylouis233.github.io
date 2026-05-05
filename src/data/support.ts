export type SupportMethodGroup = 'domestic' | 'international' | 'crypto';

export type SupportMethod = {
  key: string;
  group: SupportMethodGroup;
  label: string;
  description: string;
  href?: string;
  buttonLabel?: string;
  qrCodeSrc?: string;
  qrCodeAlt?: string;
  address?: string;
  networks?: string[];
  warning?: string;
  primary?: boolean;
};

export const supportIntro = {
  title: 'Support My Work',
  subtitle: 'Voluntary support for open science, reproducible research, and research software maintenance.',
  notice:
    'All support is optional. The site does not store payment secrets, private keys, recovery phrases, or payment credentials. Please confirm the payment method, asset, and network before sending funds.',
};

export const supportMethods: SupportMethod[] = [
  {
    key: 'wechat',
    group: 'domestic',
    label: 'WeChat Pay',
    description: 'Scan the QR code with WeChat. Suitable for domestic supporters.',
    qrCodeSrc: '/support/wechat-reward.png',
    qrCodeAlt: 'WeChat Pay QR code',
    primary: true,
  },
  {
    key: 'alipay',
    group: 'domestic',
    label: 'Alipay',
    description: 'Scan the QR code with Alipay. Suitable for domestic supporters.',
    qrCodeSrc: '/support/alipay-reward.jpg',
    qrCodeAlt: 'Alipay QR code',
    primary: true,
  },
  {
    key: 'stripe-monthly',
    group: 'international',
    label: 'Stripe monthly support',
    description: 'Recurring support through Stripe Payment Link.',
    href: 'https://buy.stripe.com/9B66oIaXE8Trfa73tIasg03',
    buttonLabel: 'Open monthly Stripe link',
    primary: true,
  },
  {
    key: 'stripe-one-time',
    group: 'international',
    label: 'Stripe one-time support',
    description: 'One-time support through Stripe Payment Link.',
    href: 'https://buy.stripe.com/cNibJ27Ls4Db8LJd4iasg01',
    buttonLabel: 'Open one-time Stripe link',
    primary: true,
  },
  {
    key: 'btcpay',
    group: 'crypto',
    label: 'BTCPay Server',
    description: 'Self-hosted BTCPay POS for BTC invoices with user-entered amount.',
    href: 'https://223.109.141.77:23443/apps/PersonalSiteSupportPOS/pos',
    buttonLabel: 'Open BTCPay POS',
    primary: true,
  },
  {
    key: 'btc',
    group: 'crypto',
    label: 'BTC on-chain',
    description: 'Bitcoin mainnet address.',
    address: '1CpFYqV98RpWSiAbDT9n6QFSz9AL12SCw8',
    qrCodeSrc: '/support/btc-onchain.png',
    qrCodeAlt: 'BTC on-chain QR code',
    networks: ['Bitcoin mainnet'],
  },
  {
    key: 'usdt-tron',
    group: 'crypto',
    label: 'USDT - TRON',
    description: 'USDT via TRON/TRC20.',
    address: 'TSZ9ScACPpJi5Q5jXnkHPuLfb8LNztxWJX',
    qrCodeSrc: '/support/usdt-tron.png',
    qrCodeAlt: 'USDT TRON QR code',
    networks: ['TRON', 'TRC20'],
  },
  {
    key: 'usdt-ton',
    group: 'crypto',
    label: 'USDT - TON',
    description: 'USDT via TON Jetton.',
    address: 'UQBJCOBJamLJCcWdaR5LjfxusU3x5imMy1ZnJ-xP9EvYO9bg',
    qrCodeSrc: '/support/usdt-ton.png',
    qrCodeAlt: 'USDT TON QR code',
    networks: ['TON', 'Jetton'],
  },
  {
    key: 'evm-stablecoins',
    group: 'crypto',
    label: 'USDT / USDC - EVM networks',
    description: 'Shared EVM address for supported USDT and USDC networks.',
    address: '0xb5ED2f14752b0189c9cdcC13d7e14ce947777B2c',
    qrCodeSrc: '/support/usdt-bnb-smart-chain.png',
    qrCodeAlt: 'EVM stablecoin QR code',
    networks: [
      'Ethereum ERC20',
      'BNB Smart Chain BEP20',
      'Base',
      'Polygon PoS',
      'Arbitrum One',
      'Optimism',
      'Avalanche C-Chain',
    ],
    warning:
      'EVM networks can share the same address format, but the selected asset and network still must match in the sending wallet.',
  },
  {
    key: 'solana-stablecoins',
    group: 'crypto',
    label: 'USDT / USDC - Solana',
    description: 'Shared Solana address for supported SPL stablecoins.',
    address: '4Tdi4w8V4T7dTVepFmdbc2j8zNzx3v9DWrjWpVkf9m8p',
    qrCodeSrc: '/support/usdt-solana.png',
    qrCodeAlt: 'Solana stablecoin QR code',
    networks: ['Solana', 'SPL'],
  },
];

export const supportGroups: Array<{ key: SupportMethodGroup; title: string; description: string }> = [
  {
    key: 'domestic',
    title: 'Domestic support',
    description: 'WeChat and Alipay QR-code support for domestic users.',
  },
  {
    key: 'international',
    title: 'International support',
    description: 'Stripe links for international cards, Apple Pay, Google Pay, and related Stripe-supported methods.',
  },
  {
    key: 'crypto',
    title: 'Crypto support',
    description:
      'BTCPay and public wallet addresses. Confirm the asset and network carefully before sending; wrong-network transfers may be unrecoverable.',
  },
];

