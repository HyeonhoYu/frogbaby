# 프로그 베이비 3D 이야기

볼스테이트 대학교의 프로그 베이비 조각상 이야기를 담은 어린이용 3D 애니메이션입니다.

## 폴더 구성

- `index.html` : 영화 화면
- `story.js` : 이야기 문장, 퀴즈, 화면 글자 (영화와 녹음실이 함께 씁니다)
- `record/` : 녹음실 (사람 목소리 녹음, Gemini AI 목소리 만들기)
- `audio/` : 녹음 파일과 `manifest.json`

## GitHub에 올리기

1. GitHub에서 새 저장소를 만듭니다. 예: `frogbaby`
2. 이 폴더 안의 파일을 모두 올립니다.
3. Settings > Pages 에서 Branch를 `main`, 폴더를 `/ (root)`로 두고 저장합니다.
4. 잠시 뒤 `https://hyeonhoyu.github.io/frogbaby/` 에서 영화가, `https://hyeonhoyu.github.io/frogbaby/record/` 에서 녹음실이 열립니다.

## 목소리 넣기

1. 녹음실에서 말마다 녹음하거나 AI 목소리로 채웁니다.
2. `zip 내려받기`를 누르고 zip을 풉니다.
3. 나온 `audio` 폴더 안의 파일을 저장소의 `audio` 폴더에 올려 덮어씁니다.
4. 영화를 새로고침하면 새 목소리로 나옵니다. 녹음이 없는 말은 기기 음성으로 나옵니다.

## 문장 고치기

`story.js`의 문장을 고치면 영화와 녹음실에 함께 반영됩니다. 문장을 고친 말은 녹음실에서 다시 녹음해 주세요.
