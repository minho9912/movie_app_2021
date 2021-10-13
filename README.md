# 최민호 201840135

## [10월 13일]

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
          {genres.map(genre => {
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
    this.setState(current => ({ count: this.state.count + 1 }));
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
