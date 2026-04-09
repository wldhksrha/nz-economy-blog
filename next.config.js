/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 경로 끝에 슬래시(/)를 강제로 붙여서 디자인 파일 경로를 고정합니다. (가장 중요 ⭐)
  trailingSlash: true,

  // 2. 이미지가 외부 링크(커버 이미지 등)일 경우를 대비해 최적화를 비활성화하거나 도메인을 설정합니다.
  // 정적 배포(static export)를 고려한다면 아래 설정을 추가하는 게 안전합니다.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig