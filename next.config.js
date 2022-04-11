// @type {import('next').NextConfig}


module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/toaster" : "",
  trailingSlash: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
}