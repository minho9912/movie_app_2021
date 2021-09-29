# 최민호 201840135

## [9월 15일]

```jsx
import React from "react";
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <Movie />
      {/* JSX 문법으로, 싱글 태그라고도 하는데, 닫아주는 태그를
      별도로 사용하지않고 하나의 태그 안에서 '/' 표시로 열고 닫음을 동시에 처리한다. */}
    </div>
  );
}
function Movie() {
  return <h3>I love potato</h3>;
}
export default App;
```

```jsx
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <Food fav="kimchi" something={true} papapa={["hello", 1, 2, 3, 4, true]} />
      {/* Food 컴포넌트에 객체 데이터를 생성 및 변환해 props값으로 전달한다. */}
    </div>
  );
}

function Food(props) {
  // props라는 매개변수 값으로 App컴포넌트에서 생성한 Food 객체 데이터 값을 불러옴
  console.log(props);
  // 개발자도구 출력결과는 오브젝트형으로 fav~papapa 값이 출력된다.
  return <h3>I love potato</h3>;
}
export default App;
```

```jsx
import React from "react";
function App() {
  // 방법1
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <Food fav="kimchi" something={true} papapa={["hello", 1, 2, 3, 4, true]} />
      {/* Food 컴포넌트에 객체 데이터를 생성해 props값으로 전달한다. */}
    </div>
  );
}
// 방법 2
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
      {/* Food 컴포넌트에 객체 데이터를 생성해 props값으로 전달한다. */}
    </div>
  );
}
//props 불러오기 방법 1
function Food(props) {
  return <h3>I like {props.fav}</h3>;
  //JSX 문법으로, return 내부의 태그 안에 {}를 사용해
  //받아온 props값을 사용할 수 있다.
}
//props 불러오기 방법 2
function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}
export default App;
```

```jsx
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))};{/* Food 컴포넌트에 객체 데이터를 생성해 props값으로 전달한다. */}
    </div>
  );
}

const foodLike = [
  // JSON 형태로 음식 이름, 사진 객체데이터 생성.
  {
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
  },
  {
    name: "ham",
    image: "https://imagesm.cj.net/images/brand/spam/img_cont1.png",
  },
];
function Food({ name, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture}></img>
    </div>
  );
}
const friend = ["a", "b", "c", "d"];
console.log(
  friend.map(function (friend) {
    // map함수를 사용하면 friend의 오브젝트 요소 수 만큼 반복한다.
    // a~d까지 반복하고 element요소로 출력할 수 있다.
    return friend + "★";
  })
);
export default App;
```

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}
// App컴포넌트에서 foodLike.map함수를 사용해 데이터를 받아오는 것보다,
// renderFood라는 map함수로 데이터를 받아오는 기능을 가지고있는 함수를 선언한 후
// App컴포넌트의 map함수 부분에 renderFood함수를 넣어주면 된다.
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
```

## [9월 8일]

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

## [9월 1일]

학습내용

| 기능             | 명령어                   |
| ---------------- | ------------------------ |
| choco로 node설치 | choco install nodejs-lts |
| node 버전확인    | node -v                  |
| npx 버전확인     | npx -v                   |

1.React Developer Tools

- 크롬 확장 프로그램으로, 사이트가 리액트로 제작된 것인지 구분가능
- 에어비앤비, npm, 넷플릭스, 스포티파이가 대표적인 리액트 사이트

  2.stateofjs  
   https://2020.stateofjs.com/ko-KR/technologies/  
   위 주소는 백엔드와 프론트엔드 프레임워크에 대한 정보와 사용 빈도 등을  
   알 수 있게 해주는 사이트이다.