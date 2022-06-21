/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_DOMAIN: "https://the-trivia-api.com/api/questions",
  },
};

module.exports = nextConfig;
