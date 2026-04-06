import type { Config } from 'tailwindcss'

const config: Config = {
  // 1. 적용 범위를 넓혔습니다. (lib, posts 폴더 추가)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}', // 추가
    './posts/**/*.md',                // 마크다운 글 디자인 적용 위해 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Pretendard"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f7f4',
          100: '#dcede5',
          200: '#badccf',
          300: '#8ec4b0',
          400: '#5ea58e',
          500: '#3d8a73',
          600: '#2d6f5c',
          700: '#255a4c',
          800: '#1f483d',
          900: '#1b3c33',
        },
        nz: {
          black:  '#0a0a0a',
          silver: '#f5f5f4',
          fern:   '#3d8a73',
          sky:    '#0ea5e9',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#1c1917',
            lineHeight: '1.85',
            'h1,h2,h3,h4': { fontFamily: 'Georgia, serif', fontWeight: '700' },
            a: { color: '#2d6f5c', textDecoration: 'underline' },
            code: {
              backgroundColor: '#f5f5f4',
              padding: '2px 5px',
              borderRadius: '4px',
              fontSize: '0.875em',
            },
          },
        },
      },
    },
  },
  // 2. 타이포그래피 플러그인을 활성화합니다. (보통 기본 설치되어 있음)
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config