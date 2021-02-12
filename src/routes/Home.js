import React from "react";
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component {
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
      <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className ="loader_text">Loading...</span>
      </div> ):(
        <div className="movies">
          {
             movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))
          }
        </div>
      )}
    </section>
    );
  }
}

export default Home;