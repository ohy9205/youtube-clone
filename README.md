# 유튜브 클론코딩
데이터 패칭을 연습하기 위해 유튜브 사이트를 클론코딩했다. <br>
네트워크 통신, react query, axios 세가지를 학습하기 위해 진행한 프로젝트이므로 UI유사성 보다는 기능 구현에 집중하려고 했다.

> URL:

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

## 기능
- [x] 카테고리 별 영상 리스트를 불러올 수 있다.
- [x] 연관된 동영상 목록을 불러온다.
- [x] 영상의 채널 정보와 이미지를 가져온다.
- [x] 다크모드 테마를 이용할 수 있다.
- [x] UI가 반응형이다.

## 회보
데이터패칭 연습용이였기 때문에 목적은 달성했지만 어느 프로젝트에서나 그렇듯 역시나 개선하고 고민해볼 부분들이 생겼다. <br>
### 1. 카테고리별 라우팅 문제
youtube API에서는 카테고리별로 동영상 리스트를 들고오려면 카테고리 id를 알아야 한다.   

지금은 카테고리에 `Link`처리를 하고 path마다 카테고리 id를 일일이 적어주었는데 (ex. `/videos/category/24`), 문제는 이렇게하면 카테고리가 추가될 때마다 id를 직접 알아내야하고, id가 바뀔때마다 수기로 변경해야하는 등 유지보수가 굉장히 힘들어 질 것이다.   

막연한 생각으론 유튜브에서 제공하는 category관련 API를 이용하면 이부분을 효율적으로 개선시킬 수 있을 거 같은데 고민이 더 필요할 것 같다.
### 2.

