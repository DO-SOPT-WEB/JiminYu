# 🖤 API 통신에 대하여

## 로딩 / 에러 처리를 하는 방법에는 어떤 것들이 있을까?

- 데이터를 서버에서 가져오는 동안 로딩스피너 혹은 스켈레톤 UI를 띄워주는 경우, 로딩 시간이 오래 걸리면 사용자 이탈 가능성이 있다.
- 또한 데이터 로딩 상황(오류 등)에 대해서 사용자에게 어느 정도 공유해줄 필요가 있다.
- 이를 해결하기 위해 사용할 수 있는 것이 바로 **React Suspense, React ErrorBoundary**이다.

### React Suspense

- 서버에서 데이터를 가져올 때 준비되지 않았다면 지정한 컴포넌트를 띄워주는 컴포넌트를 의미한다.
- 예시

  ```javascript
  const ProfilePage = React.lazy(() => import('./ProfilePage')); // 지연 로딩

  // 프로필을 불러오는 동안 스피너를 표시합니다
  <Suspense fallback={<}>
    <ProfilePage />
  </Suspense>
  ```

### React ErrorBoundary

- 데이터를 가져오다가 오류가 발생하면 에러에 대한 핸들링을 위임 받을 수 있는 컴포넌트
- try/catch문처럼 작동한다.
- 예시)

  ```javascript
  // 오류가 발생하면 h2로 위임되면서 이 컴포넌트가 에러를 처리한다. 즉, 에러 발생 시 이 컴포넌트가 랜더링 된다.
  <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
    <Suspense fallback={<h1>Loading posts...</h1>}>
      <ProfileTimeline />
    </Suspense>
  </ErrorBoundary>
  ```

## 패칭 라이브러리란 무엇이고 어떤 것들이 있을까?

- 데이터 패칭은 웹 애플리케이션에서 서버로부터 데이터를 가져오는 것을 말한다. 이런 데이터 패칭 관리를 쉽게 해주고 작업을 단순화 시켜주는 것이 패칭 라이브러리이다.
- 상태관리 라이브러리가 클라이언트 측 상태를 관리한다면, 패칭 라이브러리는 서버 측 데이터를 관리한다
- React와 함께 사용 가능한 데이터 패칭 라이브러리에는 **Axios, SWR, Tanstack query(전 React-Query)**, Redux Toolkit Query, Apollo Client 등이 있다.

## 패칭 라이브러리를 쓰는 이유는 무엇일까?

- 기존의 상태관리 라이브러리들은 아래와 같은 문제점이 있었습니다.
  - 데이터 일관성 관리의 번거로움: FE, BE 양쪽에 존재하는 데이터 일관성을 위해 많은 코드가 필요했다.
  - 비동기 미들웨어 사용의 복잡함 : 데이터의 비동기 패칭을 위해 미들웨어를 추가로 사용하는 경우가 많았고, 상태 관리가 너무 복잡해지는 문제가 생겼다.
- 패칭 라이브러리를 사용하면 다음과 같은 이점이 있다.

```
- 간편한 비동기 데이터 요청 : 비동기 요청 단순화
- 상태 관리 및 업데이트 용이 : 서버에서 가져온 데이터를 쉽게 리액트로 관리 및 화면 업데이트 가능
- 캐싱 : 데이터 캐싱으로 중복 요청 줄일 수 있다.
- 최적화 : 새 데이터 가져올 때 최적화된 요청 수행
- 로딩, 오류 처리 : 네트워크 오류 및 로딩을 적절히 처리해 편리함 제공
- 서버사이드 렌더링(SSR)과 호환 : 초기 렌더링 성능 개선에 도움을 준다.
```

---

## 참고자료📚

[React Suspense와 ErrorBoundary를 이용한 로딩처리와 에러 핸들링](https://varletc0nst.tistory.com/entry/React-Suspense%EC%99%80-ErrorBoundary%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EB%94%A9%EC%B2%98%EB%A6%AC%EC%99%80-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-1)
[데이터 패칭 라이브러리](https://velog.io/@diso592/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8C%A8%EC%B9%AD-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EA%B0%9C%EB%85%90)
[Data Fetching Library 어떻게 사용할까?](https://kooku0.github.io/blog/data-fetching-library-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C/)
