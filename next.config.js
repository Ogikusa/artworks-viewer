/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**", //HACK: ローカルで使う前提のソフトなので
      },
    ],
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      return config;
    }
    config.resolve.alias["@"] = __dirname;
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@": __dirname,
      },
    },
  },
};

module.exports = nextConfig;
