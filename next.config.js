/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
// GitHub Pages 배포 시 저장소 이름 자동 감지
// 저장소 이름이 '[사용자명].github.io'인 경우 basePath는 빈 문자열
const repositoryName = process.env.NEXT_PUBLIC_REPO_NAME || 'exercise';
const isRootDomain = repositoryName.endsWith('.github.io');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction && !isRootDomain && repositoryName ? `/${repositoryName}` : '',
  assetPrefix: isProduction && !isRootDomain && repositoryName ? `/${repositoryName}` : '',
}

module.exports = nextConfig

