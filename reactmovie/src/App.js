import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=dd0315aa8755bd29d2fae374027a0297&itemPerPage=20");
    const json = await response.json();
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        <ul>
          {movies.map((item) => {
            return (
                <li key={item.movieCd}>
                  {item.movieNm}
                </li>
            )
          })}
        </ul>
        }
    </div>
  );
}

export default App;
