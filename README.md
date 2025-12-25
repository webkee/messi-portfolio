# Professional Personal Portfolio

Next.js + Tailwind CSS로 만든 개인 포트폴리오 웹사이트입니다. 미니멀리즘과 모던한 디자인으로 경력, 기술, 프로젝트를 효과적으로 소개합니다.

## 주요 기능

### 공통 기능
- ✅ 반응형 레이아웃 (Desktop/Tablet/Mobile)
- ✅ 다크 모드 토글 (시스템 설정 자동 감지, 로컬 스토리지 저장)
- ✅ 스티키 헤더 (스크롤 방향에 따라 숨김/표시)
- ✅ 스크롤 스파이 (현재 섹션 하이라이트)
- ✅ 스크롤 애니메이션 (Intersection Observer 활용)

### 섹션별 기능
- **Hero Section**: 타이핑 효과, 배경 파티클 애니메이션, CTA 버튼
- **About Me**: 프로필 이미지 호버 효과, 스킬 바 애니메이션, 이력서 다운로드
- **Experience**: 타임라인 UI (데스크톱/모바일 반응형)
- **Projects**: 카테고리 필터, 썸네일 호버 효과, 상세 모달 (이미지 캐러셀)
- **Contact**: 폼 유효성 검사, EmailJS 연동, 소셜 링크

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Email**: EmailJS
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 설치 방법

```bash
npm install
```

## 환경 변수 설정 (선택사항)

Contact 섹션의 이메일 전송 기능을 사용하려면 EmailJS 설정이 필요합니다:

1. [EmailJS](https://www.emailjs.com/)에서 계정 생성
2. `.env.local` 파일 생성:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

환경 변수가 설정되지 않아도 폼은 작동하지만, 실제 이메일 전송은 시뮬레이션됩니다.

## 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 빌드

```bash
npm run build
```

## GitHub Pages 배포

자세한 배포 가이드는 **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** 파일을 참고하세요.

### 빠른 배포 가이드

1. **GitHub 저장소 생성** (Public으로 생성)
2. **로컬에서 Git 초기화 및 푸시**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. **GitHub에서 설정**:
   - Settings → Pages → Source: `GitHub Actions` 선택
   - Settings → Actions → General → Workflow permissions: `Read and write` 선택
4. **자동 배포 완료!** (약 2-3분 소요)

**접속 URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

> 💡 **참고**: 저장소 이름이 `[사용자명].github.io`인 경우 루트 도메인(`https://YOUR_USERNAME.github.io`)으로 접속됩니다.

## 커스터마이징

### 프로젝트 데이터 수정
- `app/sections/ProjectsSection.tsx`: 프로젝트 목록 수정
- `app/sections/ExperienceSection.tsx`: 경력 정보 수정
- `app/sections/AboutSection.tsx`: 스킬 및 소개 내용 수정
- `app/sections/ContactSection.tsx`: 연락처 정보 및 소셜 링크 수정

### 스타일 커스터마이징
- `tailwind.config.ts`: 테마 색상 및 설정 수정
- `app/globals.css`: 전역 스타일 수정

### 이미지 추가
- `public/` 폴더에 이미지 추가 후 프로젝트 섹션에서 경로 수정

## 프로젝트 구조

```
.
├── app/
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx     # 네비게이션 헤더
│   │   └── ThemeToggle.tsx # 다크 모드 토글 버튼
│   ├── contexts/          # React Context
│   │   └── ThemeContext.tsx # 테마 관리
│   ├── sections/          # 페이지 섹션
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── public/                # 정적 파일
├── .github/
│   └── workflows/         # GitHub Actions
└── package.json           # 프로젝트 설정
```

# messi-portfolio
