# 최민호 201840135

[9월 8일]  
학습내용

| 기능           | 명령어                        |
| -------------- | ----------------------------- |
| 리액트 앱 생성 | npx create-react-app '폴더명' |
| 프로젝트 실행  | npm start                     |

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(컴포넌트 명, 렌더링 해줄 html태그)
//위 코드의 동작 방식은, App이라는 이름으로 import해온 js파일 소스를
//root라는 html태그에 뿌려주겠다는 의미이다.
```

```jsx
import React from "react";

function App() {
  return <div className="App">Hello React!!!!!</div>;
}

export default App;
//App이라는 함수(컴포넌트)를 생성하고, 리턴값으로 JSX문법(js에서 html을 사용하는 방법)을 사용해 root태그에 뿌려주는 역할을 한다.
```

```jsx
import React from "react";
function Potato() {
  return <h3>I love potato</h3>;
}
//Potato 컴포넌트 생성 후 export로 내보내기
export default Potato;
```

```jsx
import React from "react";
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <Potato />
    </div>
  );
}
// 이처럼 따로 potato.js파일을 생성해 export,import해줄 필요 없이
// App.js내부에 컴포넌트를 정의해 사용해도 된다.
function Potato() {
  return <h3>I love potato</h3>;
}
export default App;
```

[9월 1일]
학습내용
기능|명령어
--|--
choco로 node설치 | choco install nodejs-lts
node 버전확인 | node -v
npx 버전확인 | npx -v

1.React Developer Tools

- 크롬 확장 프로그램으로, 사이트가 리액트로 제작된 것인지 구분가능
- 에어비앤비, npm, 넷플릭스, 스포티파이가 대표적인 리액트 사이트
