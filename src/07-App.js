import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

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
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-class">Loading...</span>
          </div>
        ) : (
          <div className="movies">
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
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App07;
