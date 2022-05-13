// @type {import('next').NextConfig}


module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/toaster" : "",
  trailingSlash: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
  env: {
    ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
    BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
  },
}