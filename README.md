# NZ Economy Insights Blog

뉴질랜드 경제 전문 블로그 — Next.js 14 + Tailwind CSS + Markdown

---

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# → http://localhost:3000
```

---

## 📁 프로젝트 구조

```
nz-economy-blog/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (SEO 메타 포함)
│   ├── page.tsx            # 홈 페이지
│   ├── sitemap.ts          # 자동 sitemap.xml 생성
│   ├── robots.ts           # 자동 robots.txt 생성
│   ├── opengraph-image.tsx # 자동 OG 이미지 생성
│   ├── not-found.tsx       # 404 페이지
│   ├── globals.css         # 전역 스타일
│   ├── blog/
│   │   ├── page.tsx        # 블로그 목록 (카테고리 필터)
│   │   └── [slug]/
│   │       └── page.tsx    # 글 상세 페이지
│   ├── about/page.tsx
│   ├── privacy/page.tsx    # 개인정보처리방침 (AdSense 필수)
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
├── lib/
│   ├── config.ts           # ⭐ 사이트 설정 (반드시 수정!)
│   └── posts.ts            # 마크다운 파싱 유틸리티
├── posts/                  # ⭐ 마크다운 글 파일들
│   └── example-post.md
├── public/
│   └── ads.txt             # AdSense ads.txt
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## ✍️ 글 작성 방법

`posts/` 폴더에 `.md` 파일을 추가합니다.

**파일명**: URL slug가 됩니다. 예) `my-post.md` → `/blog/my-post`

**프론트매터 (필수/선택)**:

```markdown
---
title: "글 제목"             # 필수
date: "2026-04-01"           # 필수 (YYYY-MM-DD)
excerpt: "짧은 요약 설명"    # 선택 (없으면 본문 앞 160자 자동 추출)
category: "금리·통화정책"    # 선택 (기본값: 일반)
tags: ["RBNZ", "금리"]       # 선택
author: "NZ Economy Team"    # 선택
coverImage: "/images/..."    # 선택 (OG 이미지용)
---

# 본문 시작

마크다운 형식으로 작성...
```

**지원 마크다운 기능**:
- 헤딩 (H1~H4)
- 테이블
- 코드 블록 (언어 강조 지원)
- 인용구 (blockquote)
- 링크, 볼드, 이탤릭
- 이미지

---

## ⚙️ 배포 전 설정 체크리스트

### 1. `lib/config.ts` 수정

```ts
url:              'https://your-domain.vercel.app',  // 실제 배포 URL
googleAnalyticsId: 'G-XXXXXXXXXX',                   // GA4 ID
googleAdSenseId:   'ca-pub-XXXXXXXXXXXXXXXX',         // AdSense Publisher ID
googleVerification: 'xxxxxxxx',                       // Search Console 인증 코드
```

### 2. `public/ads.txt` 수정

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
실제 AdSense Publisher ID로 교체.

### 3. `app/contact/page.tsx` 수정

Formspree 또는 다른 폼 서비스 엔드포인트로 변경:
```
action="https://formspree.io/f/YOUR_FORM_ID"
```

---

## 🌐 Vercel 배포

```bash
# 1. GitHub에 푸시
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/your-username/nz-economy-blog.git
git push -u origin main

# 2. vercel.com 에서 New Project → GitHub 연결 → Deploy
# 빌드 설정은 vercel.json이 자동 처리합니다.
```

---

## 🔍 Google AdSense 승인을 위한 SEO 체크리스트

- [x] `sitemap.xml` 자동 생성 (`/sitemap.xml`)
- [x] `robots.txt` 자동 생성 (`/robots.txt`)
- [x] 각 페이지 고유 `<title>` & `<meta description>`
- [x] Open Graph & Twitter Card 메타태그
- [x] JSON-LD 구조화 데이터 (Article 스키마)
- [x] Canonical URL 설정
- [x] 개인정보처리방침 페이지 (`/privacy`)
- [x] About 페이지 (`/about`)
- [x] 문의 페이지 (`/contact`)
- [x] `ads.txt` 파일 (`/ads.txt`)
- [x] 모바일 반응형 레이아웃
- [x] 보안 HTTP 헤더

**승인 전 추천 사항**:
- 최소 10~15개 이상의 양질의 글 작성
- Google Search Console에 사이트 등록 및 sitemap 제출
- `lib/config.ts`에서 `googleVerification` 코드 입력

---

## 📦 기술 스택

| 항목 | 버전 |
|---|---|
| Next.js | 14.x (App Router) |
| React | 18.x |
| Tailwind CSS | 3.x |
| gray-matter | ^4 (Frontmatter 파싱) |
| remark | ^15 (마크다운 → HTML) |
| remark-gfm | ^4 (GitHub Flavored Markdown) |
| TypeScript | 5.x |
