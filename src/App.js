import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Movie from "./Movie"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovie = async () => {
    const { data:
      { data:
        { movies }    //state의 이름과 받아오는 데이터의 객체 이름인 movies가 같기때문에 가능
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    //axios.get은 완료되기 까지 시간이 필요하기 때문에 await 처리 (async 필수)
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
      {isLoading ? "Loading..." : movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
    </div>
    );
  }
}

export default App;