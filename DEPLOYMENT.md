# GitHub Pages 배포 가이드

## 📋 배포 순서

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인
2. 우측 상단의 **+** 버튼 클릭 → **New repository** 선택
3. 저장소 설정:
   - **Repository name**: 원하는 이름 입력 (예: `messi-portfolio`, `portfolio`, `my-portfolio`)
   - **Description**: (선택사항) "Lionel Messi Portfolio Website"
   - **Public** 선택 (GitHub Pages는 Public 저장소에서 무료)
   - **Initialize this repository with a README** 체크 해제
4. **Create repository** 클릭

### 2단계: 로컬 Git 저장소 초기화 및 설정

터미널에서 다음 명령어를 실행하세요:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Messi portfolio website"

# GitHub 저장소 연결 (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 브랜치 이름을 main으로 설정
git branch -M main

# 코드 푸시
git push -u origin main
```

### 3단계: next.config.js 수정

**중요**: 저장소 이름에 맞게 `basePath`를 수정해야 합니다!

`next.config.js` 파일을 열고 저장소 이름에 맞게 수정:

```javascript
// 저장소 이름이 'messi-portfolio'인 경우
basePath: process.env.NODE_ENV === 'production' ? '/messi-portfolio' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/messi-portfolio' : '',

// 저장소 이름이 'portfolio'인 경우
basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',

// 저장소 이름이 '[사용자명].github.io'인 경우 (루트 도메인)
basePath: '',
assetPrefix: '',
```

**예시**: 저장소 이름이 `messi-portfolio`라면:
- `basePath: process.env.NODE_ENV === 'production' ? '/messi-portfolio' : ''`
- `assetPrefix: process.env.NODE_ENV === 'production' ? '/messi-portfolio' : ''`

수정 후 다시 커밋하고 푸시:

```bash
git add next.config.js
git commit -m "Update basePath for GitHub Pages"
git push
```

### 4단계: GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Source**: `GitHub Actions` 선택
5. 저장 (Save)

### 5단계: 자동 배포 확인

1. **Actions** 탭 클릭
2. "Deploy to GitHub Pages" 워크플로우가 실행되는지 확인
3. 워크플로우가 완료되면 (약 2-3분 소요):
   - **Actions** 탭에서 완료된 워크플로우 클릭
   - **Deploy to GitHub Pages** 작업 확인
   - 성공하면 초록색 체크 표시

### 6단계: 웹사이트 확인

배포가 완료되면 다음 주소로 접속:

- 저장소 이름이 `messi-portfolio`인 경우:
  ```
  https://YOUR_USERNAME.github.io/messi-portfolio
  ```

- 저장소 이름이 `portfolio`인 경우:
  ```
  https://YOUR_USERNAME.github.io/portfolio
  ```

- 저장소 이름이 `[사용자명].github.io`인 경우 (루트 도메인):
  ```
  https://YOUR_USERNAME.github.io
  ```

## 🔧 문제 해결

### 배포가 안 될 때

1. **Actions 탭 확인**: 에러 메시지 확인
2. **basePath 확인**: 저장소 이름과 일치하는지 확인
3. **워크플로우 권한 확인**: 
   - Settings → Actions → General
   - "Workflow permissions"에서 "Read and write permissions" 선택
   - "Allow GitHub Actions to create and approve pull requests" 체크

### 이미지나 CSS가 안 보일 때

- `basePath`와 `assetPrefix`가 올바르게 설정되었는지 확인
- 브라우저 캐시 삭제 후 다시 시도

### 404 에러가 나올 때

- URL이 정확한지 확인 (대소문자 구분)
- `basePath` 설정 확인
- GitHub Pages가 활성화되었는지 확인 (Settings → Pages)

## 📝 참고사항

- 첫 배포는 약 2-3분 소요됩니다
- 이후 코드를 푸시하면 자동으로 재배포됩니다
- 커스텀 도메인을 사용하려면 Settings → Pages에서 설정할 수 있습니다

