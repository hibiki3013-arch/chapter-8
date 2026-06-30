// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
{ protocol: 'https', hostname: 'placehold.jp' },
      { protocol: 'https', hostname: 'images.microcms-assets.io' },
    ],
    dangerouslyAllowSVG: true,
  },
};


  
export default nextConfig;