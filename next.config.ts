// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/**',
      },
    ],
    // 重要な追加：特定の環境でIP制限を回避するための設定
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;