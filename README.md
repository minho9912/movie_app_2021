# 최민호 201840135

## [12월 1일]

### 리액트 시작하기

#### <b>ch2-n컴포넌트 추출</b>

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

- 이 컴포넌트는 author(객체), text(문자열) 및 date(날짜)를 props로 받은 후 소셜 미디어 웹 사이트의 코멘트를 나타냅니다.
- Avatar 컴포넌트를 따로 추출해 props의 값을 user로 변경할 수 있습니다.
- Comment 컴포넌트의 UserInfo부분에 ` <Avatar user={props.author} />`을 추가합니다
- UserInfo 컴포넌트 또한 props값을 user로 수정하여 따로 추출합니다.
- 추출한 UserInfo 값의 UserInfo클래스 내부에` <Avatar user={props.user} />`를 추가합니다.
- Comment 컴포넌트의 UserInfo부분에 ` <UserInfo user={props.author} /> `을 추가합니다

---

### 리액트 시작하기

#### <b>ch1. 리액트 시도해보기</b>

- React는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 필요한 만큼 React를 사용할 수 있습니다.
- 대규모 애플리케이션에 권장되는 여러 개의 JavaScript 툴체인들이 있습니다. 각 툴체인은 많은 설정 없이 작동할 수 있고 풍부한 React 에코시스템을 최대한 활용할 수 있습니다.

#### <b>ch2. 리액트 배우기</b>

- 접 구현해보면서 학습하는 것을 원하시는 경우,
  <a href="https://ko.reactjs.org/tutorial/tutorial.html">실용적인 자습서</a>부터 시작하세요.
- 개념을 차근차근 익히며 학습하는 것을 원하시는 경우, <a href="https://ko.reactjs.org/docs/hello-world.html">주요 개념 가이드</a>부터 시작하세요.

### 리액트의 주요 개념

- Hello World

  - 가장 단순한 React 예시는 다음과같이 생겼습니다.
  - `ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));`
  - 위 코드는 페이지에 “Hello, world!”라는 제목을 보여줍니다.

- jsx 소개
  - `const element = <h1>Hello, world!</h1>;`
  - 위 태그 문법은 문자열도, html도 아닙니다.
  - JSX라 하며 JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장합니다. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있습니다.
- jsx에 표현식 포함하기
  - `const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;ReactDOM.render(element,document.getElementByI('root'));`
  - JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있습니다. 예를 들어 2 + 2, user.firstName 또는 formatName(user) 등은 모두 유효한 JavaScript 표현식입니다.

```jsx
// jsx 예시
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

- 엘리먼트 렌더링
  - 엘리먼트는 React 앱의 가장 작은 단위입니다.
  - 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.
- Components와 Props
  - 개념적으로 컴포넌트는 JavaScript 함수와 유사합니다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.

```jsx
// 함수 / 클래스 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## [11월 17일]

| Remarkable              | 기능                                          |
| ----------------------- | --------------------------------------------- |
| npm i remarkable --save | MarkDown을 html에서 사용할 수 있다.(변환기능) |

```jsx
import { Remarkable } from "remarkable";
var md = new Remarkable();

console.log(md.render("# Remarkable rulezz!"));
// => <h1>Remarkable rulezz!</h1>
```

- 입력받은 값을 마크다운 문법으로 해석해준다.

---

```jsx
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "Hello, **world**!" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <textarea id="markdown-content" onChange={this.handleChange} defaultValue={this.state.value} />
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()} />
      </div>
    );
  }
}
```

- render()메소드에서 초기 렌더링을 실행.
- this.md,handleChange 함수 선언(바인딩용)
- this.state 값으로 value라는 변수에 문자열 담기
- getRawMarkup함수는 텍스트값 markdown처리 기능
- dangerouslySetInnerHTML 속성으로 input박스에 입력된 값 markdown처리

---

```jsx
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("todos-example"));
```

- TodoApp과 TodoList 두개의 컴포넌트로 구성
- handleChange는 모든 키보드 입력마다 react의 state를 갱신해서 보여줌 (elelment에서 확인)
- 시간순으로 보면 다음과 같이 동작한다 (유저입력 - handleChange - state 갱신 - form ele가 react state참조)
- 유저 입력을 강제로 대문자로 변경할 경우에도 사용  
  1- handleSubmit(e)에서 e.preventDeault() 메소드를 사용하는 이유는,  
  2- state.text의 길이가 0 이면 마우것도 반환을 못함  
  3- 0이 아니면 newItem에 입력 받은 text와 현재 시간을 저장함  
  4- 현재 시간은 왜 저장하는걸까? 조금 생각해보기  
  5- 이렇게 된 newItem을 state의 item배열에 저장하고 text를 비운다
- handleChange,handleSubmit 함수의 결과로 지정된 state의 text값을 TodoList컴포넌트에 렌더링해줌

---

## [11월 10일]

### 공식문서 ch2. 상태를 가지는 컴포넌트

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

ReactDOM.render(<Timer />, document.getElementById("timer-example"));
```

- 1. state의 seconds 객체 값을 0으로 초기화 한다.
- 2. tick()이라는 함수를 생성 후 this.setState를 사용해 함수가 호출.
- 3. 호출 될 때마다 seconds의 값을 1씩 증가시킨다.
- 4. componentDidMount()로 리액트앱이 준비될 때 마다 setInterval함수를 통해  
     1초마다 한번씩 tick()함수를 호출하게 만든다.
- 5. render에서 div태그에 second를 출력하게 만든다.

---

### 공식문서 ch1. 간단한 컴포넌트

```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById("hello-example"));
```

- 리액트 클론코딩에서 배웠던 것 처럼, 컴포넌트(함수)를 생성 후  
  render에 전달해 출력하는 방법도 있다.
- 하지만 위 방식처럼 ReactDOM.render()속성을 사용해 내부에 직접  
  컴포넌트와 props값을 생성하고 바로 getElement속성으로 html을 통해 출력하는 것도 가능하다.

---

### js파일 없이 리액트 앱 생성

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
```

- react cdn과 babel cdn을 사용해 html내부에서 리액트를 사용할 수 있다.

---

### package.json 파일 수정 (배포)

```jsx
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy" : "npm run build",
    "deploy": "gh-pages -d build"
  },
"homepage": "https://minho9912.github.io/movie_app_2021"
```

- 깃허브 주소를 영화앱이 인식할 수 있도록 json파일 수정

---

## [11월 3일]

### 영화 제목 출력

```jsx
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
```

- props값으로 받아온 영화데이터를 span태그를 사용해 출력 및
- location.state가 없으면 render함수가 null을 반환

---

### push 함수 사용

```jsx
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    return <span>hello</span>;
  }
}
```

- location.state가 undefined인 경우 history.push["/"]실행

---

### Detail 컴포넌트를 클래스형으로

```jsx
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
  }
  render() {
    return <span>hello</span>;
  }
}
```

---

### App.js에 Route컴포넌트 추가

```jsx
import Detail from "./routes/Detail";
//HashRouter 내부
<Route path="/movie-detail" component={Detail} />;
```

---

### Detail.js 생성

```jsx
function Detail(props) {
  console.log(props);
  return <span>hello</span>;
}
export default Detail;
```

- 화면에서 영화카드를 클릭했을때 출력할 내용

---

### Movie.js에 Link컴포넌트 추가

- `<Link to={{ pathname: "/movie-detail", state: { year, title, summary, poster, genres } }}>`
- 영화 카드 클릭시, /movie-detail로 이동하게된다.

---

### Navigation.js 내용수정

- ` <Link to={{pathname: '/about', state: {fromNavigation: true}}>About<Link>`
- pathname은 URL을 의미하고, state는 route props로 보내줄 데이터를 의미한다.

---

## [10월 27일]

```jsx
<ul className="movie-genres">
  {genres.map((genre, index) => {
    return (
      <li key={index} className="movie-genre">
        {genre}
      </li>
    );
  })}
</ul>

// li태그의 key props 값을 지정하기 위해
// map함수 element부분인 genre, index부분인 index 매개변수로
// 각각의 값을 받아왔다.
```

```jsx
<p className="movie-summary">{summary.slice(0, 180)}...</p>
//자바스크립트 slice함수를 사용해 summary의 문자열을
//0번째부터 180번째 까지 자른 내용만 보여주게 만들어준다.
```

```jsx
function About() {
  return <span>About Component.</span>;
}
export default About;

// About 컴포넌트 내보내기
```

```jsx
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App07() {
  return (
    // router-dom을 사용한 기능
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
    // about 컴포넌트 불러옴.
  );
}

export default App07;
```

<ul> 메뉴를 클릭하면 화면이 이동해야함, 이때 필요한 것이 라우터이다.
<li>react-router-dom 설치하기</li>
<li>components 폴더에 Movie 컴포넌트 옮기기</li>
<li>routes 폴어게 라우터가 보여줄 화면 만들기</li>
<li>Home.js 수정하기</li>
<li>Home.css 생성 / App.js 수정</li>
</ul>

<ul> routes , components 폴더 생성
<li>Movie.js / Movie.css 파일 components폴더에 넣기</li>
<li>routes폴더에 About.js, Home.js, Home.css 생성</li>
<li>App.js 폴더의 모든 내용을 Home.js에 붙여넣기</li>
<li>App.js 기존 내용 삭제 후 route실습</li>
</ul>

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

## [10월 13일]

<hr>
<b>jsx문법에서 html태그의 class를 className으로 표기하는 이유는<br>
리액트에서는 코드를 해석할 때, html의 class와 자바스크립트의 class라는
이름이 겹치면 리액트가 혼란스러워할 수 있기 때문이다.</b>
<hr>

```jsx
//영화 장르 출력하기
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-year">{year}</h5>
        <ul className="movie-genres">
          {genres.map((genre) => {
            //genres값으로 받아온 것을 map함수를 사용해 li태그로 출력한다.
            return <li>{genre}</li>;
          })}
        </ul>
        <p className="movie-summary">{summary}</p>
      </div>
    </div>
  );
}
```

```jsx
//Moive.js의 일부분
Movie.propTypes = {
  //각 속성에대한 조건이다, 숫자인지, 문자인지
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

```jsx
function Movie({ id, year, title, summary, poster }) {
  return (
    //css적용을 위해 Movie컴포넌트의 prop값을 div,h3등 html태그에 클래스로 묶어준다.
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie-data">
        <h3 class="movie-title">{title}</h3>
        <h5 class="movie-year">{year}</h5>
        <p class="movie-summary">{summary}</p>
      </div>
    </div>
  );
}
```

```jsx
render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader-class">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => {
              console.log(movie);
              //Movie컴포넌트를 호출함과 동시에 movie객체의 값을 prop값으로 지정해준다
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  //poster의 이미지를 렌더링한다.
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
```

```jsx
//App07클래스의 코드 일부분
render() {
    const { isLoading, movies } = this.state;
    return (
      <section class='container'>
        {isLoading
          ? (
             <div class='loader'>
        <span class='loader-class'>Loading...</span>
        </div>
          )
          :
          (
            <div class='movies'>
            {
          movies.map(movie => {
              console.log(movie);
              //Movie컴포넌트를 호출함과 동시에 movie객체의 값을 prop값으로 지정해준다
              return (
                <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.poster} />
              )
            }
            )
            }
            </div>
          )}


            </section>

    );
  }
}
```

```jsx
import propTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  //Moive의 prop값을 받아온 것 중 title부분을 h4태그를 사용해 출력한다.
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

export default Movie;
```

## [10월 6일]

```jsx
import axios from "axios";
import React from "react";

class App07 extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  //비동기식, setTimeout을 쓸필요없이 async, await을 사용해주면 데이터가 로딩이
  //끝날 때까지 기다리고 DidMount가 호출된다.
  getMovie = async () => {
    //movies.data.data.movies
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //변수이름이 동일한게 있다면 알아서 인식한다.
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "영화 데이터 출력"}</div>;
  }
}

export default App07;
```

```jsx
class App07 extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMovie = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "영화 데이터 출력"}</div>;
  }
}
```

```jsx
class App06 extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  //isLoading이 true면 Loading, 5초후 false로 바뀌면 we are ready
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}
```

```jsx
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
    this.setState((current) => ({ count: this.state.count + 1 }));
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  //업데이트 될 때마다 호출된다
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default App;
```

<h3>생성자란?</h3>
<table border=1>
<tr>
<td>constructor()는 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.</td>
</tr>
<tr>
<td>자바스크립트에서 super는 부모클래스 생성자의 참조한다는 의미이다.</td>
</tr>
<tr>
<td>React에서는 버전17부터 componentWillMount()를 사용하지 않는다.</td>
</tr>

</table>

## [9월 29일]

```jsx
// +,- 기능 만들기
  state = {
    count: 0,
  };
  //add 함수, setState속성으로 this키워드를 함께 사용해서 state.count객체의 값을 증가시킴
  add = () => {
    console.log("add");
    this.setState(current => ({ count: this.state.count + 1 }));
  };
  //minus 함수, setState속성으로 this키워드를 함께 사용해서 state.count객체의 값을 감소시킴
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: this.state.count - 1 }));
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
```

```jsx
//state 값 선언 및 props 상속
class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };
}
```

```jsx
//state 기본 문법
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div>
        <h1>class</h1>
      </div>
    );
  }
}
```

```jsx
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
```

| git proptypes |                              |
| ------------- | ---------------------------- |
| 명령어        | npm i prop-types             |
| 기능          | props값이 알맞은 형인지 검사 |

<h3>image 사용방법</h3>
<ul>
<li>react프로젝트의 public/images폴더에 사진을 넣고
App.js에서 불러올 때는 같은 경로에 있는 것처럼 불러올 수 있다.</li>
</ul>

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(renderFood)}
      {// 이전 문법}
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
      {//}
    </div>
  );
}
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
```

| git 폴더 불러오기 |                    |
| ----------------- | ------------------ |
| 명령어            | git clone '깃주소' |

<h3>branch를 main으로 바꾸기</h3>
<ul>
<li>git config init.defaultBranch main</li>
<li>git branch -m master main</li>
</ul>

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
      {foodLike.map((dish) => (
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
