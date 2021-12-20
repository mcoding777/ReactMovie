import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=dd0315aa8755bd29d2fae374027a0297&itemPerPage=20");
    const json = await response.json();
    console.log(json);
    // setMovies(json.movieListResult.movieList);
    // setLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
