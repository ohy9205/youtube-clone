# 유튜브 클론코딩
- 네트워크 통신, 데이터 패칭, API 활용법 등을 연습하기 위해 진행한 클론 코딩 프로젝트.
- `axios`, `react-query`, `api활용` 등을 경험하기 위해 진행했기 때문에 UI유사성 보다는 해당 기술을 사용한 기능 구현에 집중함.

> URL: https://clone-75a0d.web.app/


## 기능
- [x] 카테고리 별 영상 리스트를 불러온다.
- [x] 연관된 동영상 목록을 불러온다.
- [x] 영상의 채널 정보와 이미지를 가져온다.
- [x] 다크모드 테마로 변경할 수 있다.
- [x] UI가 반응형이다.

## 기술 및 라이브러리
- html, css, javascript
- tailwind
- React.js
- Create-React-App
- react-router-dom
- react-query
- axios
- timeago
- react-icons

## 사용
> 사전조건: friebase API사용에 필요한 configure설정 정보가 필요함
```js
npm install
npm start
```

## 라우팅
```js
<App>
  / 👉 <Videos>
  /videos 👉 <Videos>
  /videos/:keyword 👉 <Videos>
  /videos/category/:categoryId👉 <Videos>
  /videos/watch/:videoId 👉 <VideoDetail>
  /잘못된경로 👉 <NotFound>
```

## 2. 동영상 리스트 조회
![유튜브1](https://user-images.githubusercontent.com/78143860/212106695-ad4c7c1f-ea2f-410f-b57a-077e2fcb0eee.gif)

![유튜브3](https://user-images.githubusercontent.com/78143860/212106815-4f6a1b39-01ed-4b9f-a748-a84808553ada.gif)


## 3. 상세 페이지

![유튜브2](https://user-images.githubusercontent.com/78143860/212106739-9b0275e0-8d06-4dbf-b0fb-6deb7237ae53.gif)
