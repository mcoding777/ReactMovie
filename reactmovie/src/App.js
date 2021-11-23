import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=dd0315aa8755bd29d2fae374027a0297&itemPerPage=20")
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
