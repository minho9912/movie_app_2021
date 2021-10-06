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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?_by=rating");
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
