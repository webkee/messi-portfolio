# 🚀 GitHub Pages 배포 가이드

## 📋 GitHub에서 해야 할 사항 (순서대로)

### ✅ 1단계: GitHub 저장소 생성

1. **GitHub 로그인** 후 우측 상단 **+** 버튼 클릭 → **New repository**

2. **저장소 설정**:
   - **Repository name**: 원하는 이름 입력
     - 예: `messi-portfolio`, `portfolio`, `my-portfolio`
     - ⚠️ **중요**: 이 이름이 URL에 사용됩니다!
   - **Description**: (선택) "Lionel Messi Portfolio Website"
   - **Public** 선택 ✅ (GitHub Pages는 Public 저장소에서 무료)
   - **Initialize this repository with a README** 체크 해제 ❌
   - **Add .gitignore**: None
   - **Choose a license**: None

3. **Create repository** 클릭

---

### ✅ 2단계: 로컬에서 Git 초기화 및 푸시

터미널에서 프로젝트 폴더로 이동 후 실행:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Messi portfolio website"

# GitHub 저장소 연결 (아래 YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경!)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 브랜치를 main으로 설정
git branch -M main

# 코드 푸시
git push -u origin main
```

**예시**:
```bash
git remote add origin https://github.com/johndoe/messi-portfolio.git
```

---

### ✅ 3단계: GitHub Pages 설정

1. GitHub 저장소 페이지에서 **Settings** 탭 클릭

2. 왼쪽 메뉴에서 **Pages** 클릭

3. **Source** 섹션:
   - **Source**: `GitHub Actions` 선택
   - (Deploy from a branch는 선택하지 마세요!)

4. **Save** 클릭

---

### ✅ 4단계: GitHub Actions 권한 설정

1. **Settings** → **Actions** → **General** 클릭

2. **Workflow permissions** 섹션:
   - ✅ **Read and write permissions** 선택
   - ✅ **Allow GitHub Actions to create and approve pull requests** 체크

3. **Save** 클릭

---

### ✅ 5단계: 자동 배포 확인

1. 저장소 상단의 **Actions** 탭 클릭

2. **Deploy to GitHub Pages** 워크플로우가 자동으로 실행됩니다

3. 워크플로우 완료 대기 (약 2-3분):
   - 노란색 점: 진행 중
   - 초록색 체크 ✅: 성공
   - 빨간색 X ❌: 실패 (에러 확인 필요)

4. 워크플로우 클릭 → **Deploy to GitHub Pages** 작업 확인

---

### ✅ 6단계: 웹사이트 접속

배포가 완료되면 다음 주소로 접속:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

**예시**:
- 저장소 이름이 `messi-portfolio`인 경우:
  ```
  https://johndoe.github.io/messi-portfolio
  ```

- 저장소 이름이 `portfolio`인 경우:
  ```
  https://johndoe.github.io/portfolio
  ```

---

## 🔧 자동 설정 완료!

이 프로젝트는 **자동으로 저장소 이름을 감지**하여 `basePath`를 설정합니다.
따라서 `next.config.js`를 수동으로 수정할 필요가 없습니다! 🎉

---

## ⚠️ 문제 해결

### 배포가 실패할 때

1. **Actions 탭**에서 에러 메시지 확인
2. **Settings → Pages**에서 Source가 `GitHub Actions`로 설정되었는지 확인
3. **Settings → Actions → General**에서 권한이 올바른지 확인

### 이미지나 CSS가 안 보일 때

- 브라우저 캐시 삭제 (Ctrl+Shift+R 또는 Cmd+Shift+R)
- 배포가 완전히 완료될 때까지 대기 (2-3분)

### 404 에러가 나올 때

- URL이 정확한지 확인 (대소문자 구분)
- 저장소 이름과 URL이 일치하는지 확인
- 배포가 완료되었는지 확인 (Actions 탭에서 확인)

---

## 📝 참고사항

- ✅ 첫 배포는 약 2-3분 소요
- ✅ 이후 코드를 푸시하면 자동으로 재배포됩니다
- ✅ 커스텀 도메인 사용 가능 (Settings → Pages에서 설정)

---

## 🎉 완료!

모든 설정이 완료되면 웹사이트가 자동으로 배포됩니다!

